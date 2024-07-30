using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Data.SqlClient;
using ComplaintMGT.Abstractions.Services;
using ComplaintMGT.Abstractions.Entities.Configuration;
using ComplaintMGT.Abstractions.Entities;
using ComplaintMTG.Core.Utils;

namespace ComplaintMGTAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DeshboardController : ControllerBase
    {
        private IConfiguration<Menu, GResposnse, SubMenuInfo> _dataRepository;
        public DeshboardController(IConfiguration<Menu, GResposnse, SubMenuInfo> dataRepository)
        {
            _dataRepository = dataRepository;
        }
        [HttpGet]
        [Route("GetAllDevie")]
        public IActionResult GetAllDevie(int DType)
        {
            object[] mparameters = { DType };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetAllDevie, mparameters);
            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetDeviceDetail")]
        public IActionResult GetDeviceDetail()
        {
            object[] mparameters = { };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetDeviceDetail, mparameters);
            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetDeshHVACAlerts")]
        public IActionResult GetDeshHVACAlerts(string Type)
        {
            object[] mparameters = { Type };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_DeshHVACAlerts, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetAlerts")]
        public IActionResult GetAlerts()
        {
            object[] mparameters = {};
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetAlerts, mparameters);

            return Ok(_lst);
        } 
        [HttpGet]
        [Route("GetAllOverallComplianceofStore")]
        public IActionResult GetAllOverallComplianceofStore()
        {
            object[] mparameters = {};
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_AllOverallComplianceofStore, mparameters);

            return Ok(_lst);
        } 
        [HttpGet]
        [Route("GetAllDeviationOverallComplianceofStore")]
        public IActionResult GetAllDeviationOverallComplianceofStore()
        {
            object[] mparameters = {};
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_AllOverallComplianceofStore, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetAllDeviationOverallComplianceofStore_Summary")]
        public IActionResult GetAllDeviationOverallComplianceofStore_Summary()
        {
            object[] mparameters = { };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_AllOverallComplianceofStore_Summary, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("DeshAlerts")]
        public IActionResult DeshAlerts()
        {
            object[] mparameters = { };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_DeshAlerts, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetEnergyMeterRealtimeBARCHART")]
        public IActionResult GetEnergyMeterRealtimeBARCHART(string type, string Menu,string subMenu,string SubRedioMenu)
        {
            object[] mparameters = { type,Menu,subMenu,SubRedioMenu };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_EnergyMeterRealtimeBARCHART, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetEnergyMeterByDateBARCHART")]
        public IActionResult GetEnergyMeterByDateBARCHART(string FromDate, string Todate)
        {
            object[] mparameters = {FromDate,Todate };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_EnergyMeterByDateBARCHART, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("EnergyConsumptionAverage")]
        public IActionResult EnergyConsumptionAverage()
        {
            object[] mparameters = {};
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_EnergyConsumptionAverage, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("ThermalMonitoringHVACAvg")]
        public IActionResult ThermalMonitoringHVACAvg(string devicetype)
        {
            object[] mparameters = { devicetype };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_ThermalMonitoringHVACAvg, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("TimeofDayENERGYCONSUMPTION")]
        public IActionResult TimeofDayENERGYCONSUMPTION()
        {
            object[] mparameters = { };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_TimeofDayENERGYCONSUMPTION, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("EnergyConsumptiontotal")]
        public IActionResult EnergyConsumptiontotal()
        {
            object[] mparameters = {};
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_EnergyConsumptiontotal, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("ELECTRICALHEALTHAverage")]
        public IActionResult ELECTRICALHEALTHAverage()
        {
            object[] mparameters = { };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_ELECTRICALHEALTHAverage, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetTopValueMeter")]
        public IActionResult GetTopValueMeter()
        {
            object[] mparameters = {};
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetTopValueMeter, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetTopValuetransactionTempSensor")]
        public IActionResult GetTopValuetransactionTempSensor(String DType)
        {
            object[] mparameters = { DType };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.GetTopValuetransactionTempSensor, mparameters);

            return Ok(_lst);
        }

        [HttpGet]
        [Route("GetTopValuetransactionTempHumidSensor")]
        public IActionResult GetTopValuetransactionTempHumidSensor(String DType)
        {
            object[] mparameters = { DType };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.GetTopValuetransactionTempHumidSensor, mparameters);

            return Ok(_lst);
        }

        [HttpGet]
        [Route("GetAllTimeForChart")]
        public IActionResult GetAllTimeForChart(string DeviceType)
        {
            try
            {
                object[] mparameters = { };
                string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetTimeForChart, mparameters);
                object[] mparameters1 = { DeviceType };
                string _lst1 = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_transactionTempSensorForChart, mparameters1);
                var response = new { Time = _lst, ac1 = _lst1 };

                return Ok(response);
            }
            catch(Exception ex) {
                return Ok(CommonHelper.InvalidRequestMessage());
            }
        }
        //[HttpGet]
        //[Route("GetAlltransactionTempSensorForChart")]
        //public IActionResult GetAlltransactionTempSensorForChart()
        //{
            

        //    return Ok(_lst);
        //}
        [HttpGet]
        [Route("Getallmeterdetailsbymetername")]
        public IActionResult Getallmeterdetailsbymetername(string Device)
        {
            object[] mparameters = { Device };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_Getallmeterdetailsbymetername, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetallmeterdetailsbymeternameChart")]
        public IActionResult GetallmeterdetailsbymeternameChart(string Device,string Per)
        {
            object[] mparameters = { Device , Per };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetallmeterdetailsbymeternameChart, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetallmeterdetailsbymeternameChartByDate")]
        public IActionResult GetallmeterdetailsbymeternameChartByDate(string Device, string Per,string Fdate,string Tdate)
        {
            object[] mparameters = { Device, Per, Fdate, Tdate };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetallmeterdetailsbymeternameChartByDate, mparameters);

            return Ok(_lst);
        }

        [HttpGet]
        [Route("GetMapDetials")]
        public IActionResult GetMapDetials()
        {
            object[] mparameters = {};
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.MapDeatils, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetAlltransactionTempSensorByDateTime")]
        public IActionResult GetAlltransactionTempSensorByDateTime(string FromDate,string Todate, string DeviceId)
        {
            
            object[] mparameters1 = {FromDate , Todate,DeviceId};
            string _lst1 = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetAlltransactionTempSensorByDateTime, mparameters1);
           

            return Ok(_lst1);
        }
        [HttpGet]
        [Route("GetAllSiteByCustomerId")]
        public IActionResult GetAllSiteByCustomerId(int CustomerId)
        {
            object[] mparameters = { CustomerId };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetAllSiteByCustomerId, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetAllAssetBySiteId")]
        public IActionResult GetAllAssetBySiteId(int SiteId,string DeviceType)
        {
            object[] mparameters = { SiteId, DeviceType };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetAllAssetBySiteId, mparameters);

            return Ok(_lst);
        }

        [HttpGet]
        [Route("GetAllAQI_Dashboard")]
        public IActionResult GetAllAQIDataDashboard()
        {
            object[] mparameters = {  };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetAllAQI_Dashboard, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetAllAQI_TimeOfDay")]
        public IActionResult GetAllAQI_TimeOfDay()
        {
            object[] mparameters = { };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetAllAQI_TimeOfDay, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetEnergyDistributionDashboard")]
        public IActionResult GetEnergyDistributionDashboard()
        {
            object[] mparameters = { };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetEnergyDistributionDashboard, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetEmployeeGuestConfortDashboard")]
        public IActionResult GetEmployeeGuestConfortDashboard()
        {
            object[] mparameters = { };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetEmployeeGuestConfort_Dashboard, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetEmployeeGuestConfortDetailDashboard")]
        public IActionResult GetEmployeeGuestConfortDetailDashboard()
        {
            object[] mparameters = { };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetEmployeeGuestConfortDetail_Dashboard, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetUPS_Energy_Dashboard")]
        public IActionResult GetUPS_Energy_Dashboard()
        {
            object[] mparameters = { };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetUPS_Energy_Dashboard, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("Get_Gas_Consumption")]
        public IActionResult Get_Gas_Consumption()
        {
            object[] mparameters = { };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_Get_Gas_Consumption, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("Get_GasConsumption_TimeOfDay")]
        public IActionResult Get_GasConsumption_TimeOfDay()
        {
            object[] mparameters = { };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_Get_GasConsumption_TimeOfDay, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("Get_Customer_Footfall")]
        public IActionResult Get_Customer_Footfall()
        {
            object[] mparameters = { };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_Get_Customer_Footfall, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("Get_Customer_Footfall_TimeOfDay")]
        public IActionResult Get_Customer_Footfall_TimeOfDay()
        {
            object[] mparameters = { };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_Get_Customer_Footfall_TimeOfDay, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("Get_EV_Health_Dashboard")]
        public IActionResult Get_EV_Health_Dashboard()
        {
            object[] mparameters = { };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_Get_EV_Health_Dashboard, mparameters);

            return Ok(_lst);
        }

        [HttpGet]
        [Route("GetAllAQI_Dashboard_Ext")]
        public IActionResult GetAllAQI_Dashboard_Ext(string fromDate, string toDate)
        {
            object[] mparameters = { Convert.ToDateTime(fromDate), Convert.ToDateTime(toDate) };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetAllAQI_Dashboard_Ext, mparameters);

            return Ok(_lst);
        }

        [HttpGet]
        [Route("GetAllAQI_TimeOfDay_Ext")]
        public IActionResult GetAllAQI_TimeOfDay_Ext(string fromDate, string toDate)
        {
            object[] mparameters = { Convert.ToDateTime(fromDate), Convert.ToDateTime(toDate) };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetAllAQI_TimeOfDay_Ext, mparameters);

            return Ok(_lst);
        }

        [HttpGet]
        [Route("GetAQIAlerts_Dashboard")]
        public IActionResult GetAQIAlerts_Dashboard(string fromDate, string toDate)
        {
            object[] mparameters = { Convert.ToDateTime(fromDate), Convert.ToDateTime(toDate) };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_AQIAlerts_Dashboard, mparameters);

            return Ok(_lst);
        }

        [HttpGet]
        [Route("GetAllOverallAQICompliance_Dashboard")]
        public IActionResult GetAllOverallAQICompliance_Dashboard(string fromDate, string toDate)
        {
            object[] mparameters = { Convert.ToDateTime(fromDate), Convert.ToDateTime(toDate) };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_AllOverallAQICompliance_Dashboard, mparameters);

            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetSiteWiseTempHumidityDeatil")]
        public IActionResult GetSiteWiseTempHumidityDeatil()
        {
            object[] mparameters = {  };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetSiteWiseTempHumidityDeatil, mparameters);

            return Ok(_lst);
        }
    }
}
