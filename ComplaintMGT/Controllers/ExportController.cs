using ComplaintMGT.Abstractions.DomainModels;
using ComplaintMGT.Abstractions.Services;
using ComplaintMGT.Core.CustomAttributes;
using ComplaintMGT.Helpers;
using DinkToPdf;
using DocumentFormat.OpenXml.Wordprocessing;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using OfficeOpenXml;
using System.Collections.Generic;
using System.Text;

namespace ComplaintMGT.Controllers
{
    [CustomAuthorize]
    public class ExportController : Controller
    {
        public ExportController()
        {

        }
        [HttpGet]
        public IActionResult ExportToExcel(string exportType)
        {
            string endpoint = "api/Thermal/report/GetHotAmbientTemperatureSeries?assetid=0";
            if (exportType == "ThermalHot")
                endpoint = "api/Thermal/report/GetHotAmbientTemperatureSeries?assetid=0";
            else if (exportType == "ThermalWarm")
                endpoint = "api/Thermal/report/GetWarmAmbientTemperatureSeries?assetid=0";
            else if (exportType == "ThermalCold")
                endpoint = "api/Thermal/report/GetColdAmbientTemperatureSeries?assetid=0";
            else if (exportType == "HumidityHot")
                endpoint = "api/Thermal/report/GetHotAmbientHumiditySeries?assetid=0";
            else if (exportType == "HumidityWarm")
                endpoint = "api/Thermal/report/GetWarmAmbientHumiditySeries?assetid=0";
            else if (exportType == "HumidityCold")
                endpoint = "api/Thermal/report/GetColdAmbientHumiditySeries?assetid=0";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            var jsonData = Json(Result);

            var data = JsonConvert.DeserializeObject<List<DeviceTempAndHumidityModel>>(jsonData.Value.ToString());

            using var package = new ExcelPackage();
            var worksheet = package.Workbook.Worksheets.Add("Sheet1");

            worksheet.Cells[1, 1].Value = "Device Name";
            worksheet.Cells[1, 2].Value = "Site Name";
            worksheet.Cells[1, 3].Value = "Temperature";
            worksheet.Cells[1, 4].Value = "Log Time";

            for (int i = 0; i < data.Count; i++)
            {
                worksheet.Cells[i + 2, 1].Value = data[i].DeviceName;
                worksheet.Cells[i + 2, 2].Value = data[i].siteName;
                worksheet.Cells[i + 2, 3].Value = data[i].Temperature;
                worksheet.Cells[i + 2, 4].Value = data[i].LogTime;
            }

            var bytes = package.GetAsByteArray();
            return File(bytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "ConsolidatedAmbient" + exportType + ".xlsx");
        }

        public IActionResult ExportToPdf(string exportType)
        {
            string endpoint = "api/Thermal/report/GetHotAmbientTemperatureSeries?assetid=0";
            if (exportType == "ThermalHot")
                endpoint = "api/Thermal/report/GetHotAmbientTemperatureSeries?assetid=0";
            else if (exportType == "ThermalWarm")
                endpoint = "api/Thermal/report/GetWarmAmbientTemperatureSeries?assetid=0";
            else if (exportType == "ThermalCold")
                endpoint = "api/Thermal/report/GetColdAmbientTemperatureSeries?assetid=0";
            else if (exportType == "HumidityHot")
                endpoint = "api/Thermal/report/GetHotAmbientHumiditySeries?assetid=0";
            else if (exportType == "HumidityWarm")
                endpoint = "api/Thermal/report/GetWarmAmbientHumiditySeries?assetid=0";
            else if (exportType == "HumidityCold")
                endpoint = "api/Thermal/report/GetColdAmbientHumiditySeries?assetid=0";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            var jsonData = Json(Result);

            var data = JsonConvert.DeserializeObject<List<DeviceTempAndHumidityModel>>(jsonData.Value.ToString());

            var html = new StringBuilder();
            html.Append("<h1>Consolidated Ambient Thermal Hot Data</h1>");
            html.Append("<table border='1'><tr><th>Device Name</th><th>Site Name</th><th>Temperature</th><th>Log Time</th></tr>");

            foreach (var item in data)
            {
                html.Append($"<tr><td>{item.DeviceName}</td><td>{item.siteName}</td><td>{item.Temperature}</td><td>{item.LogTime}</td></tr>");
            }

            html.Append("</table>");

            var converter = new SynchronizedConverter(new PdfTools());
            var doc = new HtmlToPdfDocument()
            {
                GlobalSettings = new GlobalSettings
                {
                    ColorMode = ColorMode.Color,
                    Orientation = Orientation.Portrait,
                    PaperSize = PaperKind.A4,
                },
                Objects = { new ObjectSettings { HtmlContent = html.ToString() } }
            };

            var pdfBytes = converter.Convert(doc);
            return File(pdfBytes, "application/pdf", "ConsolidatedAmbient" + exportType + ".pdf");
        }

        public IActionResult ExportToCsv(string exportType)
        {
            string endpoint = "api/Thermal/report/GetHotAmbientTemperatureSeries?assetid=0";
            if (exportType == "ThermalHot")
                endpoint = "api/Thermal/report/GetHotAmbientTemperatureSeries?assetid=0";
            else if (exportType == "ThermalWarm")
                endpoint = "api/Thermal/report/GetWarmAmbientTemperatureSeries?assetid=0";
            else if (exportType == "ThermalCold")
                endpoint = "api/Thermal/report/GetColdAmbientTemperatureSeries?assetid=0";
            else if (exportType == "HumidityHot")
                endpoint = "api/Thermal/report/GetHotAmbientHumiditySeries?assetid=0";
            else if (exportType == "HumidityWarm")
                endpoint = "api/Thermal/report/GetWarmAmbientHumiditySeries?assetid=0";
            else if (exportType == "HumidityCold")
                endpoint = "api/Thermal/report/GetColdAmbientHumiditySeries?assetid=0";
            HttpClientHelper<string> apiobj = new HttpClientHelper<string>();
            string Result = apiobj.GetRequest(endpoint, HttpContext);
            var jsonData = Json(Result);

            var data = JsonConvert.DeserializeObject<List<DeviceTempAndHumidityModel>>(jsonData.Value.ToString());

            var csv = new StringBuilder();

            csv.AppendLine("Device Name,Site Name,Temperature,Log Time");
            foreach (var item in data)
            {
                csv.AppendLine($"{item.DeviceName},{item.siteName},{item.Temperature},{item.LogTime}");
            }

            var bytes = Encoding.UTF8.GetBytes(csv.ToString());
            return File(bytes, "text/csv", "ConsolidatedAmbient" + exportType + ".csv");
        }
    }
}
