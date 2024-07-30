using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using ComplaintMGT.Helpers;
using ComplaintMGT.Core.CustomAttributes;

namespace ComplaintMGT.Controllers
{
    public class DeshboardController : Controller
    {
        [CustomAuthorize]
        public IActionResult Index()
        {
            return View();
        }
        [CustomAuthorize]
        public IActionResult IndexNew()
        {
            return View();
        }

        [CustomAuthorize]
        public IActionResult EnterpriseDashboard()
        {
            return View();
        }

        [CustomAuthorize]
        public IActionResult Meter()
        {
            return View();
        }
        [CustomAuthorize]
        public IActionResult HVAC()
        {
            return View();
        }
        [CustomAuthorize]
        public IActionResult Equipments()
        {
            return View();
        }
        [CustomAuthorize]
        public IActionResult RealMeter()
        {
            return View();
        }
        [CustomAuthorize]
        public IActionResult RealHVAC()
        {
            return View();
        }
        [CustomAuthorize]
        public IActionResult RealEquipments()
        {
            return View();
        }
        [HttpPost]
        public JsonResult GetAllDevice(string DType)
        {
            string endpoint = "api/Deshboard/GetAllDevie?DType=" + DType;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult DeshHVACAlerts(string DType)
        {
            string endpoint = "api/Deshboard/GetDeshHVACAlerts?Type=" + DType;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetAlerts()
        {
            string endpoint = "api/Deshboard/GetAlerts";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetAllOverallComplianceofStore()
        {
            string endpoint = "api/Deshboard/GetAllOverallComplianceofStore";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetAllDeviationOverallComplianceofStore()
        {
            string endpoint = "api/Deshboard/GetAllDeviationOverallComplianceofStore";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetAllDeviationOverallComplianceofStore_Summary()
        {
            string endpoint = "api/Deshboard/GetAllDeviationOverallComplianceofStore_Summary";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult DeshAlerts()
        {
            string endpoint = "api/Deshboard/DeshAlerts";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult DeshEmployeeGuestConfort()
        {
            string endpoint = "api/Deshboard/GetEmployeeGuestConfortDashboard";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetDeviceDetail()
        {
            string endpoint = "api/Deshboard/GetDeviceDetail";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetEmployeeGuestConfortDetailDashboard()
        {
            string endpoint = "api/Deshboard/GetEmployeeGuestConfortDetailDashboard";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetEnergyMeterRealtimeBARCHART(string type, string Menu, string subMenu, string SubRedioMenu)
        {
            string endpoint = "api/Deshboard/GetEnergyMeterRealtimeBARCHART?type=" + type + "&Menu=" + Menu + "&subMenu=" + subMenu + "&SubRedioMenu=" + SubRedioMenu;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetEnergyMeterByDateBARCHART(string FromDate, string Todate)
        {
            string endpoint = "api/Deshboard/GetEnergyMeterByDateBARCHART?FromDate=" + FromDate + "&Todate=" + Todate;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult EnergyConsumptionAverage()
        {
            string endpoint = "api/Deshboard/EnergyConsumptionAverage";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult ThermalMonitoringHVACAvg(string devicetype)
        {
            string endpoint = "api/Deshboard/ThermalMonitoringHVACAvg?devicetype=" + devicetype;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult EnergyConsumptiontotal()
        {
            string endpoint = "api/Deshboard/EnergyConsumptiontotal";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult ELECTRICALHEALTHAverage()
        {
            string endpoint = "api/Deshboard/ELECTRICALHEALTHAverage";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult TimeofDayENERGYCONSUMPTION()
        {
            string endpoint = "api/Deshboard/TimeofDayENERGYCONSUMPTION";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetTopValueMeter()
        {
            string endpoint = "api/Deshboard/GetTopValueMeter";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetTopValuetransactionTempSensor(string DType)
        {
            string endpoint = "api/Deshboard/GetTopValuetransactionTempSensor?DType=" + DType;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetTopValuetransactionTempHumidSensor(string DType)
        {
            string endpoint = "api/Deshboard/GetTopValuetransactionTempHumidSensor?DType=" + DType;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetAllTimeForChart(string DeviceType)
        {
            string endpoint = "api/Deshboard/GetAllTimeForChart?DeviceType=" + DeviceType;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            JObject _lst = JObject.Parse(Result);
            return Json(_lst);
        }
        [HttpPost]
        public JsonResult GetAlltransactionTempSensorByDateTime(string FromDate, string Todate, string DeviceId)
        {
            string endpoint = "api/Deshboard/GetAlltransactionTempSensorByDateTime?FromDate=" + FromDate + "&Todate=" + Todate + "&DeviceId=" + DeviceId;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);

            return Json(Result);
        }
        //[HttpPost]
        //public JsonResult GetAlltransactionTempSensorForChart()
        //{
        //    string endpoint = "api/Deshboard/GetAlltransactionTempSensorForChart";
        //    HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
        //    string Result = apiobj.GetRequest(endpoint);
        //    return Json(Result);
        //}

        [HttpPost]
        public JsonResult Getallmeterdetailsbymetername(string Device)
        {
            string endpoint = "api/Deshboard/Getallmeterdetailsbymetername?Device=" + Device;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetSiteWiseTempHumidityDeatil()
        {
            string endpoint = "api/Deshboard/GetSiteWiseTempHumidityDeatil";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetallmeterdetailsbymeternameChart(string Device, string Per)
        {
            string endpoint = "api/Deshboard/GetallmeterdetailsbymeternameChart?Device=" + Device + "&Per=" + Per;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetallmeterdetailsbymeternameChartByDate(string Device, string Per, string Fdate, string Tdate)
        {
            string endpoint = "api/Deshboard/GetallmeterdetailsbymeternameChartByDate?Device=" + Device + "&Per=" + Per + "&Fdate=" + Fdate + "&Tdate=" + Tdate;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult Get_Customer_Footfall()
        {
            string endpoint = "api/Deshboard/Get_Customer_Footfall";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult Get_Customer_Footfall_TimeOfDay()
        {
            string endpoint = "api/Deshboard/Get_Customer_Footfall_TimeOfDay";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        public IActionResult CpLoaction()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetMapDetials()
        {
            string endpoint = "api/Deshboard/GetMapDetials";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetAllSiteByCustomerId(string CustomerId)
        {
            string endpoint = "api/Deshboard/GetAllSiteByCustomerId?CustomerId=" + CustomerId;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetAllAssetBySiteId(string SiteId, string DeviceType)
        {
            string endpoint = "api/Deshboard/GetAllAssetBySiteId?SiteId=" + SiteId + "&DeviceType=" + DeviceType;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetAllAQIDataDashboard()
        {
            string endpoint = "api/Deshboard/GetAllAQI_Dashboard";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetEnergyDistributionDashboard()
        {
            string endpoint = "api/Deshboard/GetEnergyDistributionDashboard";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetUPSEnergyDashboard()
        {
            string endpoint = "api/Deshboard/GetUPS_Energy_Dashboard";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetGasConsumption()
        {
            string endpoint = "api/Deshboard/Get_Gas_Consumption";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetGasConsumptionTimeOfDay()
        {
            string endpoint = "api/Deshboard/Get_GasConsumption_TimeOfDay";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetEVHealthDashboard()
        {
            string endpoint = "api/Deshboard/Get_EV_Health_Dashboard";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetPushDeviceHandlingSensor()
        {
            string endpoint = "api/DeviceTransaction/GetPushDeviceHandlingSensor";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        public IActionResult Override()
        {
            return View();
        }
        public IActionResult ControlEnablement()
        {
            return View();
        }
        public IActionResult IAQ()
        {
            return View();
        }
        public IActionResult Alerts()
        {
            return View();
        }
        public IActionResult Compliance()
        {
            return View();
        }
        public IActionResult ElectricalHealth()
        {
            return View();
        }
        public IActionResult HistoryElectricalHealth()
        {
            return View();
        }
    }
}
