using ComplaintMGT.Abstractions.Entities.Configuration;
using ComplaintMGT.Abstractions.Entities;
using ComplaintMGT.Abstractions.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ComplaintMTG.Core.Utils;
using System;

namespace ComplaintMGTAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EnergyController : ControllerBase
    {
        private IConfiguration<Menu, GResposnse, SubMenuInfo> _dataRepository;
        public EnergyController(IConfiguration<Menu, GResposnse, SubMenuInfo> dataRepository)
        {
            _dataRepository = dataRepository;
        }
        [HttpGet]
        [Route("GetEnergyConsumptionActual")]
        public IActionResult GetEnergyConsumptionActual(string fromDate,string toDate)
        {
            object[] mparameters = { Convert.ToDateTime(fromDate), Convert.ToDateTime(toDate) };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_EnergyConsumptionActual, mparameters);
            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetEnergyConsumptionCumulative")]
        public IActionResult GetEnergyConsumptionCumulative(string fromDate, string toDate)
        {
            object[] mparameters = { Convert.ToDateTime(fromDate), Convert.ToDateTime(toDate) };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_EnergyConsumptionCumulative, mparameters);
            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetEnergyConsumptionAvg")]
        public IActionResult GetEnergyConsumptionAvg(string fromDate, string toDate)
        {
            object[] mparameters = { Convert.ToDateTime(fromDate), Convert.ToDateTime(toDate) };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_EnergyConsumptionAvg, mparameters);
            return Ok(_lst);
        }

        [HttpGet]
        [Route("GetEnergyConsumptionActual_Dashboard")]
        public IActionResult GetEnergyConsumptionActual_Dashboard(string TimeCategory)
        {
            object[] mparameters = { TimeCategory };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_EnergyConsumptionActual_BarGraph_Dashboard, mparameters);
            return Ok(_lst);
        }

        [HttpGet]
        [Route("GetEnergyConsumptionAverage_Dashboard")]
        public IActionResult GetEnergyConsumptionAverage_Dashboard(string TimeCategory)
        {
            object[] mparameters = { TimeCategory };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_EnergyConsumptionAverage_BarGraph_Dashboard, mparameters);
            return Ok(_lst);
        }

        [HttpGet]
        [Route("GetEnergyConsumption_TimeOfDay_Dashboard")]
        public IActionResult GetEnergyConsumption_TimeOfDay_Dashboard(string TimeCategory)
        {
            object[] mparameters = { TimeCategory };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_EnergyConsumption_TimeOfDay_Dashboard, mparameters);
            return Ok(_lst);
        }

        [HttpGet]
        [Route("GetEnergyConsumptionCumulative_Dashboard")]
        public IActionResult GetEnergyConsumptionCumulative_Dashboard()
        {
            object[] mparameters = { };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_EnergyConsumptionCumulative_Dashboard, mparameters);
            return Ok(_lst);
        }

        [HttpGet]
        [Route("GetEnergyDistribution_EnergyDashboard")]
        public IActionResult GetEnergyDistribution_EnergyDashboard(string fromDate, string toDate)
        {
            object[] mparameters = { Convert.ToDateTime(fromDate), Convert.ToDateTime(toDate) };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetEnergyDistribution_EnergyDashboard, mparameters);
            return Ok(_lst);
        }

        [HttpGet]
        [Route("GetPowerOutage_EnergyDashboard")]
        public IActionResult GetPowerOutage_EnergyDashboard(string fromDate, string toDate)
        {
            object[] mparameters = { Convert.ToDateTime(fromDate), Convert.ToDateTime(toDate) };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_GetPowerOutage_EnergyDashboard, mparameters);
            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetEnergyTrends_CumulativeEnergyConsumptionLive")]
        public IActionResult GetEnergyTrends_CumulativeEnergyConsumptionLive(string TimeCategory, int LastFetchedID)
        {
            object[] mparameters = { TimeCategory, LastFetchedID };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_EnergyTrends_CumulativeEnergyConsumptionLive, mparameters);
            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetEnergyTrends_EnergyConsumptionLive")]
        public IActionResult GetEnergyTrends_EnergyConsumptionLive(string TimeCategory)
        {
            object[] mparameters = { TimeCategory };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_EnergyTrends_EnergyConsumptionLive, mparameters);
            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetEnergyTrends_EnergyConsumptionAndTemperatureLive")]
        public IActionResult GetEnergyTrends_EnergyConsumptionAndTemperatureLive(string TimeCategory, int LastFetchedID)
        {
            object[] mparameters = { TimeCategory, LastFetchedID };
            string _lst = _dataRepository.ExcuteRowSqlCommandMultiResultSet(StoredProcedureHelper.sp_EnergyTrends_EnergyConsumptionAndTemperatureLive, mparameters);
            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetEnergyTrends_EnergyConsumptionPeak")]
        public IActionResult GetEnergyTrends_EnergyConsumptionPeak(string TimeCategory)
        {
            object[] mparameters = { TimeCategory };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_EnergyTrends_EnergyConsumptionPeak, mparameters);
            return Ok(_lst);
        }
        [HttpGet]
        [Route("GetEnergyTrends_EnergyConsumptionKWHKVAHAndTemprature")]
        public IActionResult GetEnergyTrends_EnergyConsumptionKWHKVAHAndTemprature(string TimeCategory)
        {
            object[] mparameters = { TimeCategory };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_EnergyTrends_EnergyConsumptionKWHKVAHAndTemprature, mparameters);
            return Ok(_lst);
        }

        [HttpGet]
        [Route("GetEnergyTrends_EnergyProfile")]
        public IActionResult GetEnergyTrends_EnergyProfile(string TimeCategory)
        {
            object[] mparameters = { TimeCategory };
            string _lst = _dataRepository.ExcuteRowSqlCommand(StoredProcedureHelper.sp_EnergyTrends_EnergyProfile, mparameters);
            return Ok(_lst);
        }
    }
}
