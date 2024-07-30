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
    public class ThermalController : Controller
    {
        public ThermalController()
        {

        }
        public IActionResult HVAC()
        {
            return View();
        }

        public IActionResult HVAC_TrendsHot()
        {
            return View();
        }
        public IActionResult HVAC_TrendsCold()
        {
            return View();
        }
        public IActionResult HVAC_TrendsWarm()
        {
            return View();
        }

        public IActionResult ThermalWarm()
        {
            return View();
        }

        public IActionResult Kitchen()
        {
            return View();
        }

        public IActionResult Ambient_Thermal()
        {
            return View();
        }
        public IActionResult Ambient_Thermal_TrendsHot()
        {
            return View();
        }
        public IActionResult Ambient_Thermal_TrendsCold()
        {
            return View();
        }
        public IActionResult Ambient_Thermal_TrendsWarm()
        {
            return View();
        }
        public IActionResult Ambient_Thermal_Reports()
        {
            return View();
        }

        public IActionResult Ambient_Humidity()
        {
            return View();
        }
        public IActionResult Ambient_Humidity_TrendsHot()
        {
            return View();
        }
        public IActionResult Ambient_Humidity_TrendsCold()
        {
            return View();
        }
        public IActionResult Ambient_Humidity_TrendsWarm()
        {
            return View();
        }
        public IActionResult Ambient_Humidity_Reports()
        {
            return View();
        }
        public IActionResult Kitchen_TrendsHot()
        {
            return View();
        }
        public IActionResult Kitchen_TrendsCold()
        {
            return View();
        }
        public IActionResult Kitchen_TrendsWarm()
        {
            return View();
        }

        public IActionResult Hvac_Reports()
        {
            return View();
        }

        public IActionResult Hvac_ReportsHot()
        {
            return View();
        }

        public IActionResult Hvac_ReportsWarm()
        {
            return View();
        }

        public IActionResult Hvac_ReportsCold()
        {
            return View();
        }


        public IActionResult KitchnAsset_Reports()
        {
            return View();
        }


        public IActionResult KitchnAsset_ReportsHot()
        {
            return View();
        }

        public IActionResult KitchnAsset_ReportsWarm()
        {
            return View();
        }

        public IActionResult KitchnAsset_ReportsCold()
        {
            return View();
        }


        public IActionResult ThermalCold()
        {
            return View();
        }

        #region HVAC

        [HttpPost]
        public JsonResult HVACDeshAlerts(string days = "0")
        {
            string endpoint = "api/Thermal/hvac/GetDashboardAlert?days=" + days;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult HVACCompliance(string days = "0")
        {
            string endpoint = "api/Thermal/hvac/GetComplianace?days=" + days;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult HVACThermalMonitoring(string days = "0")
        {
            string endpoint = "api/Thermal/hvac/GetThermalMonitoring?days=" + days;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult HVACThermalMonitoringOps(string days = "0")
        {
            string endpoint = "api/Thermal/hvac/GetThermalMonitoringOpsData?days=" + days;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult HVACThermalMonitoringSeries(string days = "0")
        {
            string endpoint = "api/Thermal/hvac/GetThermalMonitoringSeries?days=" + days;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        #endregion


        #region AMBIENT
        [HttpPost]
        public JsonResult AmbientHumidityDashboardAlerts(string days = "0")
        {
            string endpoint = "api/Thermal/ambient/GetHumidityDashboardAlerts?days=" + days;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult AmbientHumidityMonitoring(string days = "0")
        {
            string endpoint = "api/Thermal/ambient/GetHumidityMonitoring?days=" + days;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }


        [HttpPost]
        public JsonResult AmbientHumidityMonitoringSeries(string days = "0")
        {
            string endpoint = "api/Thermal/ambient/GetHumidityMonitoringSeries?days=" + days;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult AmbientThermalDashboardAlerts(string days = "0")
        {
            string endpoint = "api/Thermal/ambient/GetThermalDashboardAlerts?days=" + days;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult AmbientThermalMonitoring(string days = "0")
        {
            string endpoint = "api/Thermal/ambient/GetThermalMonitoring?days=" + days;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }


        [HttpPost]
        public JsonResult AmbientThermalMonitoringSeries(string days = "0")
        {
            string endpoint = "api/Thermal/ambient/GetThermalMonitoringSeries?days=" + days;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }



        #endregion

        #region Kitchen Asset

        [HttpPost]
        public JsonResult KitchenAssetDeshAlerts(string days = "0")
        {
            string endpoint = "api/Thermal/kitchenasset/GetDashboardAlert?days=" + days;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult KitchenAssetCompliance(string days = "0")
        {
            string endpoint = "api/Thermal/kitchenasset/GetComplianace?days=" + days;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult KitchenAssetThermalMonitoring(string days = "0")
        {
            string endpoint = "api/Thermal/kitchenasset/GetThermalMonitoring?days=" + days;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult KitchenAssetThermalMonitoringOps(string days = "0")
        {
            string endpoint = "api/Thermal/kitchenasset/GetThermalMonitoringOpsData?days=" + days;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult KitchenAssetThermalRefregerationMonitoringOps(string days = "0")
        {
            string endpoint = "api/Thermal/kitchenasset/GetThermalMonitoringRefrigerationOpsData?days=" + days;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult KitchenAssetThermalMonitoringSeries(string days = "0")
        {
            string endpoint = "api/Thermal/kitchenasset/GetThermalMonitoringSeries?days=" + days;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        #endregion

        #region Trends & Report

        [HttpPost]
        public JsonResult GetHVACThermalAssets()
        {
            string endpoint = "api/Thermal/hvac/GetAssetList";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetAmbientThermalAssets()
        {
            string endpoint = "api/Thermal/ambient/GetAssetList";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetKitchenThermalAssets()
        {
            string endpoint = "api/Thermal/kitchenasset/GetAssetList";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetHotThermalMonitoringSeries(string assetid)
        {
            string endpoint = "api/Thermal/tends/HotThermalMonitoring?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetAmbientHotThermalMonitoringSeries(string assetid)
        {
            string endpoint = "api/Thermal/tends/AmbientHotThermalMonitoring?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetAmbientTempHotThermalMonitoringSeries(string assetid)
        {
            string endpoint = "api/Thermal/tends/AmbientTempHotThermalMonitoring?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetWarmThermalMonitoringSeries(string assetid)
        {
            string endpoint = "api/Thermal/tends/WarmThermalMonitoring?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetAmbientTempWarmThermalMonitoringSeries(string assetid)
        {
            string endpoint = "api/Thermal/tends/AmbientTempWarmThermalMonitoring?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetAmbientWarmThermalMonitoringSeries(string assetid)
        {
            string endpoint = "api/Thermal/tends/AmbientWarmThermalMonitoring?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetColdThermalMonitoringSeries(string assetid)
        {
            string endpoint = "api/Thermal/tends/ColdThermalMonitoring?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetAmbientColdThermalMonitoringSeries(string assetid)
        {
            string endpoint = "api/Thermal/tends/AmbientColdThermalMonitoring?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetAmbientTempColdThermalMonitoringSeries(string assetid)
        {
            string endpoint = "api/Thermal/tends/AmbientTempColdThermalMonitoring?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult ConsolidatedThermalMonitoringHot()
        {
            string endpoint = "api/Thermal/tends/ConsolidatedThermalMonitoringHot";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult AmbientConsolidatedThermalMonitoringHot()
        {
            string endpoint = "api/Thermal/tends/AmbientConsolidatedThermalMonitoringHot";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult AmbientTempConsolidatedThermalMonitoringHot()
        {
            string endpoint = "api/Thermal/tends/AmbientTempConsolidatedThermalMonitoringHot";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult ConsolidatedThermalMonitoringWarm()
        {
            string endpoint = "api/Thermal/tends/ConsolidatedThermalMonitoringWarm";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult AmbientConsolidatedThermalMonitoringWarm()
        {
            string endpoint = "api/Thermal/tends/AmbientConsolidatedThermalMonitoringWarm";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult AmbientTempConsolidatedThermalMonitoringWarm()
        {
            string endpoint = "api/Thermal/tends/AmbientTempConsolidatedThermalMonitoringWarm";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult ConsolidatedThermalMonitoringCold()
        {
            string endpoint = "api/Thermal/tends/ConsolidatedThermalMonitoringCold";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult AmbientConsolidatedThermalMonitoringCold()
        {
            string endpoint = "api/Thermal/tends/AmbientConsolidatedThermalMonitoringCold";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult AmbientTempConsolidatedThermalMonitoringCold()
        {
            string endpoint = "api/Thermal/tends/AmbientTempConsolidatedThermalMonitoringCold";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }


        [HttpPost]
        public JsonResult ThermalMonitoringHeatMapHot(string assetid)
        {
            string endpoint = "api/Thermal/tends/ThermalMonitoringHeatMapHot?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult AmbientThermalMonitoringHeatMapHot(string assetid)
        {
            string endpoint = "api/Thermal/tends/AmbientThermalMonitoringHeatMapHot?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult AmbientTempThermalMonitoringHeatMapHot(string assetid)
        {
            string endpoint = "api/Thermal/tends/AmbientTempThermalMonitoringHeatMapHot?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult AmbientThermalMonitoringHeatMapCold(string assetid)
        {
            string endpoint = "api/Thermal/tends/AmbientThermalMonitoringHeatMapCold?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult AmbientTempThermalMonitoringHeatMapCold(string assetid)
        {
            string endpoint = "api/Thermal/tends/AmbientTempThermalMonitoringHeatMapCold?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult AmbientThermalMonitoringHeatMapWarm(string assetid)
        {
            string endpoint = "api/Thermal/tends/AmbientThermalMonitoringHeatMapWarm?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult AmbientTempThermalMonitoringHeatMapWarm(string assetid)
        {
            string endpoint = "api/Thermal/tends/AmbientTempThermalMonitoringHeatMapWarm?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult ThermalMonitoringHeatMapWarm(string assetid)
        {
            string endpoint = "api/Thermal/tends/ThermalMonitoringHeatMapWarm?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult ThermalMonitoringHeatMapCold(string assetid)
        {
            string endpoint = "api/Thermal/tends/ThermalMonitoringHeatMapCold?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }


        [HttpPost]
        public JsonResult ThermalMonitoringContinuousSeries(string assetid)
        {
            string endpoint = "api/Thermal/tends/ThermalMonitoringContinuousSeries?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }


        [HttpPost]
        public JsonResult EnergyConsumptionHot()
        {
            string endpoint = "api/Thermal/tends/EnergyConsumptionHot";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult EnergyConsumptionWarm()
        {
            string endpoint = "api/Thermal/tends/EnergyConsumptionWarm";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult EnergyConsumptionCold()
        {
            string endpoint = "api/Thermal/tends/EnergyConsumptionCold";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult ConsolidatedThermalMonitoringKitchenAssetHot()
        {
            string endpoint = "api/Thermal/tends/ConsolidatedThermalMonitoringKitchenAssetHot";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }


        [HttpPost]
        public JsonResult ConsolidatedThermalMonitoringKitchenAssetWarm()
        {
            string endpoint = "api/Thermal/tends/ConsolidatedThermalMonitoringKitchenAssetWarm";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }


        [HttpPost]
        public JsonResult ConsolidatedThermalMonitoringKitchenAssetCold()
        {
            string endpoint = "api/Thermal/tends/ConsolidatedThermalMonitoringKitchenAssetCold";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult ThermalMonitoringAssetRules(string assetid)
        {
            string endpoint = "api/Thermal/tends/ThermalMonitoringAssetRules?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetHVACReport()
        {
            string endpoint = "api/Thermal/reports/hvac";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetAmbientReport()
        {
            string endpoint = "api/Thermal/reports/ambient";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        [HttpPost]
        public JsonResult GetKitchenAssetReport()
        {
            string endpoint = "api/Thermal/reports/kitchenasset";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }


        [HttpPost]
        public JsonResult GetSiteNameByAssetId(string assetid)
        {
            string endpoint = "api/Thermal/GetSiteName?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }

        #endregion

        #region Embient Report
        public IActionResult Ambient_Thermal_ReportHot()
        {
            return View();
        }
        public IActionResult Ambient_Thermal_ReportWarm()
        {
            return View();
        }
        public IActionResult Ambient_Thermal_ReportCold()
        {
            return View();
        }
        [HttpPost]
        public JsonResult GetHotAmbientTemperatureSeries(string assetid)
        {
            string endpoint = "api/Thermal/report/GetHotAmbientTemperatureSeries?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult ConsolidatedAmbientTemperatureHot()
        {
            string endpoint = "api/Thermal/report/ConsolidatedAmbientTemperatureHot";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetHotAmbientTemperatureHrlyAVGSeries(string assetid)
        {
            string endpoint = "api/Thermal/report/GetHotAmbientTemperatureHrlyAVGSeries?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult AmbientTemperatureHeatMapHot(string assetid)
        {
            string endpoint = "api/Thermal/report/AmbientTemperatureHeatMapHot?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetWarmAmbientTemperatureSeries(string assetid)
        {
            string endpoint = "api/Thermal/report/GetWarmAmbientTemperatureSeries?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult ConsolidatedAmbientTemperatureWarm()
        {
            string endpoint = "api/Thermal/report/ConsolidatedAmbientTemperatureWarm";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetWarmAmbientTemperatureSeriesHrlyAvg(string assetid)
        {
            string endpoint = "api/Thermal/report/GetWarmAmbientTemperatureSeriesHrlyAvg?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult AmbientTemperatureHeatMapWarm(string assetid)
        {
            string endpoint = "api/Thermal/report/AmbientTemperatureHeatMapWarm?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        //////////////////
        [HttpPost]
        public JsonResult GetColdAmbientTemperatureSeries(string assetid)
        {
            string endpoint = "api/Thermal/report/GetColdAmbientTemperatureSeries?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult ConsolidatedAmbientTemperatureCold()
        {
            string endpoint = "api/Thermal/report/ConsolidatedAmbientTemperatureCold";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetColdAmbientTemperatureSeries_HrlyAvg(string assetid)
        {
            string endpoint = "api/Thermal/report/GetColdAmbientTemperatureSeries_HrlyAvg?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult AmbientTemperatureHeatMapCold(string assetid)
        {
            string endpoint = "api/Thermal/report/AmbientTemperatureHeatMapCold?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        #endregion

        #region Embient Humidity Report
        public IActionResult Ambient_Humidity_ReportHot()
        {
            return View();
        }
        public IActionResult Ambient_Humidity_ReportWarm()
        {
            return View();
        }
        public IActionResult Ambient_Humidity_ReportCold()
        {
            return View();
        }
        [HttpPost]
        public JsonResult GetHotAmbientHumiditySeries(string assetid)
        {
            string endpoint = "api/Thermal/report/GetHotAmbientHumiditySeries?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult ConsolidatedAmbientHumidityHot()
        {
            string endpoint = "api/Thermal/report/ConsolidatedAmbientHumidityHot";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetHotAmbientHumidityHrlyAVGSeries(string assetid)
        {
            string endpoint = "api/Thermal/report/GetHotAmbientHumidityHrlyAVGSeries?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult AmbientHumidityHeatMapHot(string assetid)
        {
            string endpoint = "api/Thermal/report/AmbientHumidityHeatMapHot?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetWarmAmbientHumiditySeries(string assetid)
        {
            string endpoint = "api/Thermal/report/GetWarmAmbientHumiditySeries?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult ConsolidatedAmbientHumidityWarm()
        {
            string endpoint = "api/Thermal/report/ConsolidatedAmbientHumidityWarm";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetWarmAmbientHumiditySeriesHrlyAvg(string assetid)
        {
            string endpoint = "api/Thermal/report/GetWarmAmbientHumiditySeriesHrlyAvg?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult AmbientHumidityHeatMapWarm(string assetid)
        {
            string endpoint = "api/Thermal/report/AmbientHumidityHeatMapWarm?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        //////////////////
        [HttpPost]
        public JsonResult GetColdAmbientHumiditySeries(string assetid)
        {
            string endpoint = "api/Thermal/report/GetColdAmbientHumiditySeries?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult ConsolidatedAmbientHumidityCold()
        {
            string endpoint = "api/Thermal/report/ConsolidatedAmbientHumidityCold";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult GetColdAmbientHumiditySeries_HrlyAvg(string assetid)
        {
            string endpoint = "api/Thermal/report/GetColdAmbientHumiditySeries_HrlyAvg?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        [HttpPost]
        public JsonResult AmbientHumidityHeatMapCold(string assetid)
        {
            string endpoint = "api/Thermal/report/AmbientHumidityHeatMapCold?assetid=" + assetid;
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            return Json(Result);
        }
        #endregion

        #region Embient Consolidated Report
        public IActionResult Consolidated_ThermalReport_Hot()
        {
            return View();
        }
        public IActionResult Consolidated_ThermalReport_Warm()
        {
            return View();
        }
        public IActionResult Consolidated_ThermalReport_Cold()
        {
            return View();
        }

        public IActionResult Consolidated_HumidityReport_Hot()
        {
            return View();
        }
        public IActionResult Consolidated_HumidityReport_Warm()
        {
            return View();
        }
        public IActionResult Consolidated_HumidityReport_Cold()
        {
            return View();
        }

        #endregion
    }
}
