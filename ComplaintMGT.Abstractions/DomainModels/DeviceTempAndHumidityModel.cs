using System.Text.Json;

namespace ComplaintMGT.Abstractions.DomainModels
{
    public class DeviceTempAndHumidityModel
    {
        public string DeviceName { get; set; }
        public string siteName { get; set; }
        public decimal? Temperature { get; set; }
        public string LogTime { get; set; }

    }
}
