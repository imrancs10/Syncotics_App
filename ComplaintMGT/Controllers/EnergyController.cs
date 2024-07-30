using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using ComplaintMGT.Helpers;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.IdentityModel.Tokens.Jwt;
using OfficeOpenXml.FormulaParsing.LexicalAnalysis;
using Microsoft.AspNetCore.Session;
using Microsoft.AspNetCore.Http;
using ComplaintMGT.Abstractions.Entities;
using ComplaintMTG.Core.Utils;
using ComplaintMGT.Core.CustomAttributes;

namespace ComplaintMGT.Controllers
{
    [CustomAuthorize]
    public class EnergyController : Controller
    {
        public EnergyController()
        {

        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Trends_Hot()
        {
            return View();
        }
        public IActionResult Trends_Warm()
        {
            return View();
        }
        public IActionResult Trends_Cold()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetEnergyConsumptionActual(string fromDate, string toDate)
        {
            string endpoint = "api/Energy/GetEnergyConsumptionActual?fromDate=" + fromDate + "&toDate=" + toDate;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetEnergyConsumptionCumulative(string fromDate, string toDate)
        {
            string endpoint = "api/Energy/GetEnergyConsumptionCumulative?fromDate=" + fromDate + "&toDate=" + toDate;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetEnergyConsumptionAvg(string fromDate, string toDate)
        {
            string endpoint = "api/Energy/GetEnergyConsumptionAvg?fromDate=" + fromDate + "&toDate=" + toDate;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetEnergyConsumptionActual_Dashboard(string TimeCategory)
        {
            string endpoint = "api/Energy/GetEnergyConsumptionActual_Dashboard?TimeCategory=" + TimeCategory;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetEnergyConsumptionAverage_Dashboard(string TimeCategory)
        {
            string endpoint = "api/Energy/GetEnergyConsumptionAverage_Dashboard?TimeCategory=" + TimeCategory;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetEnergyConsumption_TimeOfDay_Dashboard(string TimeCategory)
        {
            string endpoint = "api/Energy/GetEnergyConsumption_TimeOfDay_Dashboard?TimeCategory=" + TimeCategory;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetEnergyConsumptionCumulative_Dashboard()
        {
            string endpoint = "api/Energy/GetEnergyConsumptionCumulative_Dashboard";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetEnergyDistribution_EnergyDashboard(string fromDate, string toDate)
        {
            string endpoint = "api/Energy/GetEnergyDistribution_EnergyDashboard?fromDate=" + fromDate + "&toDate=" + toDate;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetPowerOutage_EnergyDashboard(string fromDate, string toDate)
        {
            string endpoint = "api/Energy/GetPowerOutage_EnergyDashboard?fromDate=" + fromDate + "&toDate=" + toDate;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetEnergyTrends_CumulativeEnergyConsumptionLive(string TimeCategory,int LastFetchedID)
        {
            string endpoint = "api/Energy/GetEnergyTrends_CumulativeEnergyConsumptionLive?TimeCategory=" + TimeCategory + "&LastFetchedID=" + LastFetchedID;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetEnergyTrends_EnergyConsumptionLive(string TimeCategory)
        {
            string endpoint = "api/Energy/GetEnergyTrends_EnergyConsumptionLive?TimeCategory=" + TimeCategory;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetEnergyTrends_EnergyConsumptionAndTemperatureLive(string TimeCategory, int LastFetchedID)
        {
            string endpoint = "api/Energy/GetEnergyTrends_EnergyConsumptionAndTemperatureLive?TimeCategory=" + TimeCategory + "&LastFetchedID=" + LastFetchedID;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetEnergyTrends_EnergyConsumptionPeak(string TimeCategory)
        {
            string endpoint = "api/Energy/GetEnergyTrends_EnergyConsumptionPeak?TimeCategory=" + TimeCategory;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetEnergyTrends_EnergyConsumptionKWHKVAHAndTemprature(string TimeCategory)
        {
            string endpoint = "api/Energy/GetEnergyTrends_EnergyConsumptionKWHKVAHAndTemprature?TimeCategory=" + TimeCategory;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetEnergyTrends_EnergyProfile(string TimeCategory)
        {
            string endpoint = "api/Energy/GetEnergyTrends_EnergyProfile?TimeCategory=" + TimeCategory;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
    }
}
