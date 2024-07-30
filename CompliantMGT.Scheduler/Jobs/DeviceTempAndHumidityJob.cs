using ComplaintMGT.Abstractions.Entities;
using ComplaintMGT.Abstractions.Entities.Configuration;
using ComplaintMGT.Abstractions.Services;
using ComplaintMTG.Core.Utils;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Org.BouncyCastle.Asn1.Ocsp;
using Quartz;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace CompliantMGT.Scheduler
{
    [DisallowConcurrentExecution]
    public class DeviceTempAndHumidityJob : IJob
    {
        private readonly ILoggerService _logger;
        private readonly SchedulerSettings _SchedulerSettings;
        private IConfiguration<Menu, GResposnse, SubMenuInfo> _dataRepository;

        public DeviceTempAndHumidityJob(ILoggerService logger, IOptions<SchedulerSettings> SchedulerSettings, IConfiguration<Menu, GResposnse, SubMenuInfo> dataRepository)
        {
            _logger = logger;
            _SchedulerSettings = SchedulerSettings.Value;
            _dataRepository = dataRepository;
        }


        public Task Execute(IJobExecutionContext context)
        {
            _logger.LogInfo("Running Cutomer Footfall Scheduler at " + DateTime.UtcNow.ToString());
            try
            {
                SaveDeviceTempAndHumidityData();
            }
            catch (Exception e)
            {
                _logger.LogError("Error Calling API: " + e.Message);
            }

            return Task.CompletedTask;
        }


        public void SaveDeviceTempAndHumidityData()
        {
            try
            {
                var timeSlot = new List<int> { 11, 15, 19 };
                var tempData = new List<DeviceTempHumidity>();

                tempData = PopulateData();
                if (DateTime.Now.Hour >= 6 && DateTime.Now.Hour <= 23)
                {
                    foreach (var temp in tempData)
                    {
                        double Temperature = 25.3;
                        double Humidity = 50.4;
                        string DeviceID = temp.DeviceId.ToString();
                        string ReserveValue = temp.DeviceId.ToString();
                        if (DateTime.Now.Hour < 11)
                        {
                            Temperature = temp.MinTemp;
                            Humidity = temp.MaxHumidity;
                        }
                        else if (DateTime.Now.Hour > 11 && DateTime.Now.Hour < 15)
                        {
                            Temperature = temp.MaxTemp - 0.6;
                            Humidity = temp.MaxHumidity - 0.6;
                        }
                        else if (DateTime.Now.Hour > 15 && DateTime.Now.Hour < 19)
                        {
                            Temperature = temp.MaxTemp;
                            Humidity = temp.MinHumidity;
                        }
                        else
                        {
                            Temperature = temp.MinTemp - 0.5;
                            Humidity = temp.MaxHumidity;
                        }


                        object[] parameters = { Temperature, Humidity, DeviceID, ReserveValue, DateTime.Now };
                        _logger.LogInfo("TempAndHumiditySensorData API Called");
                        var result = string.Join(",", parameters);
                        _logger.LogInfo("TempAndHumiditySensorData Parameter = " + result);
                        //GResposnse Result = _dataRepository.AddAndUpdate(StoredProcedureHelper.sp_saveTempAndHumidityMonitoringSensor, parameters);

                    }
                }
            }
            catch (Exception e)
            {
                _logger.LogError("Error SaveDeviceTempAndHumidityData: " + e.Message);
            }
        }

        public List<DeviceTempHumidity> PopulateData()
        {
            var tempData = new List<DeviceTempHumidity>
            {
                new DeviceTempHumidity()
                {
                    DeviceId = 1,
                    MaxTemp = 26.1,
                    MinTemp = 29.5,
                    MinHumidity = 52.2,
                    MaxHumidity = 68.9
                },
                 new DeviceTempHumidity()
                {
                    DeviceId = 2,
                    MaxTemp = 26.1,
                    MinTemp = 29.5,
                    MinHumidity = 52.2,
                    MaxHumidity = 68.9
                },
                 new DeviceTempHumidity()
                {
                    DeviceId = 4,
                    MaxTemp = 26.3,
                    MinTemp = 28.1,
                    MinHumidity = 54.1,
                    MaxHumidity = 65.3
                },
                 new DeviceTempHumidity()
                {
                    DeviceId = 5,
                    MaxTemp = 28.4,
                    MinTemp = 32.3,
                    MinHumidity = 58.1,
                    MaxHumidity = 71.7
                },
                 new DeviceTempHumidity()
                {
                    DeviceId = 6,
                    MaxTemp = 26.3,
                    MinTemp = 29.5,
                    MinHumidity = 56.2,
                    MaxHumidity = 68.9
                },
                 new DeviceTempHumidity()
                {
                    DeviceId = 7,
                    MaxTemp = 26.3,
                    MinTemp = 29.5,
                    MinHumidity = 56.2,
                    MaxHumidity = 68.9
                },
                 new DeviceTempHumidity()
                {
                    DeviceId = 8,
                    MaxTemp = 26.6,
                    MinTemp = 29.7,
                    MinHumidity = 56.2,
                    MaxHumidity = 68.9
                },
                 new DeviceTempHumidity()
                {
                    DeviceId = 9,
                    MaxTemp = 26.6,
                    MinTemp = 29.7,
                    MinHumidity = 56.2,
                    MaxHumidity = 68.9
                }
            };
            return tempData;
        }
    }

    public class DeviceTempHumidity
    {
        public int DeviceId { get; set; }
        public double MinTemp { get; set; }
        public double MaxTemp { get; set; }
        public double MinHumidity { get; set; }
        public double MaxHumidity { get; set; }
    }
}
