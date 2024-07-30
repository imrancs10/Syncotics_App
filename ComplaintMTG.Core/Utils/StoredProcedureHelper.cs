using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ComplaintMTG.Core.Utils
{
    public class StoredProcedureHelper
    {




        #region Employee
        public const string spGetValidateLogin = "[dbo].[spGetValidateLogin] '{0}','{1}','{2}'";
        public const string GetAllUsers = "[dbo].[sp_GetAllUsers] '{0}','{1}','{2}','{3}','{4}','{5}'";
        public const string spGetAllRoles = "[dbo].[spGetAllRoles] '{0}'";
        public const string GetUserDataById = "[dbo].[GetUserDataById] {0}";
        public const string spGetMenuByRole = "[dbo].[spGetMenuByRole] '{0}'";
        public const string spGetALLMenuMaster = "[dbo].[spGetALLMenuMaster] {0}";
        public const string spGetALLCircleMaster = "[dbo].[spGetALLCircleMaster] '{0}'";
        public const string spGetAllSubMenuMaster = "[dbo].[spGetAllSubMenuMaster] {0}";
        public const string spSaveNupdateRole = "[dbo].[spSaveNupdateRole]";
        public const string SaveandupdateUser = "[dbo].[sp_InsertOrUpdateUser]";
        public const string spGetAllSubMenuByRoleV1 = "[dbo].[spGetAllSubMenuByRoleV1] '{0}'";
        public const string spGetAllSubMenuByRole = "[dbo].[spGetAllSubMenuByRole] '{0}'";
        public const string spGetAllCircleWardMaster = "[dbo].[spGetAllAssigendModule] '{0}','{1}'";
        #endregion


        #region Configuration

        public const string sp_GetAllMenuM = "[dbo].[sp_GetAllMenuM] '{0}'";
        public const string sp_GetAllMenuMP = "[dbo].[sp_GetAllMenuMP] ";
        public const string spGetALLMenuMasterByMenuId = "[dbo].[spGetALLMenuMasterByMenuId] '{0}'";
        public const string SaveOrUpdateMenuMaster = "[dbo].[SaveOrUpdateMenuMaster] '{0}','{1}','{2}','{3}','{4}','{5}','{6}'";
        public const string sp_GetAllSubMenuM = "[dbo].[sp_GetAllSubMenuM]";
        public const string SaveOrUpdateSubMenuMaster = "[dbo].[SaveOrUpdateSubMenuMaster] '{0}','{1}','{2}','{3}','{4}','{5}','{6}','{7}'";
        public const string spGetALLSubMenuMasterBySubMenuId = "[dbo].[spGetALLSubMenuMasterBySubMenuId] '{0}'";
        public const string GetAllCountry = "[dbo].[spGetAllCountry] '{0}'";
        public const string SaveandupdateCountry = "[dbo].[spSaveAndUpdateCountry] '{0}','{1}','{2}'";
        public const string spGetAllState = "[dbo].[spGetAllState] '{0}'";
        public const string spSaveandupdateState = "[dbo].[spSaveAndUpdateState] '{0}','{1}','{2}','{3}'";
        public const string spGetAllCity = "[dbo].[spGetAllCity] '{0}'";
        public const string spSaveandupdateCity = "[dbo].[spSaveAndUpdateCity] '{0}','{1}','{2}','{3}'";
        public const string sp_saveAndUpdateAddressType = "[dbo].[sp_saveAndUpdateAddressType] '{0}','{1}','{2}','{3}','{4}','{5}','{6}'";
        public const string sp_AddressType = "[dbo].[sp_AddressType]";
        public const string sp_DeleteAddressType = "[dbo].[sp_DeleteAddressType] '{0}'";
        public const string sp_GetStateByCountry = "[dbo].[sp_GetStateByCountry] '{0}'";
        public const string sp_GetCityByStateId = "[dbo].[sp_GetCityByStateId] '{0}'";
        public const string spSaveNupdateCustmer = "[dbo].[spSaveNupdateCustmer]";
        public const string sp_GetAllCustomer = "[dbo].[sp_GetAllCustomer] '{0}'";
        public const string sp_GetAddressByCustomerId = "[dbo].[sp_GetAddressByCustomerId] '{0}'";
        public const string sp_GetCustomerByCustomerId = "[dbo].[sp_GetCustomerByCustomerId] '{0}'";
        public const string sp_DeleteCoustomer = "[dbo].[sp_DeleteCoustomer] '{0}'";

        public const string sp_GatAllZone = "[dbo].[sp_GatAllZone]";
        public const string sp_saveAndUpdateZone = "[dbo].[sp_saveAndUpdateZone] '{0}', '{1}','{2}','{3}','{4}'";
        public const string sp_DeleteZone = "[dbo].[sp_DeleteZone] '{0}'";
        public const string sp_GatAllZoneByCityId = "[dbo].[sp_GatAllZoneByCityId] '{0}'";

        public const string GetAllAppSetting = "[dbo].[sp_GetAppSetting]";
        #endregion

        #region DeshBoard
        public const string sp_GetAllDevie = "[dbo].[sp_GetAllDevice] '{0}'";
        public const string sp_GetDeviceDetail = "[dbo].[sp_GetDeviceDetail]";
        public const string sp_GetSiteWiseTempHumidityDeatil = "[dbo].[sp_GetSiteWiseTempHumidityDeatil]";
        public const string sp_DeshHVACAlerts = "[dbo].[sp_DeshHVACAlerts] '{0}'";
        public const string sp_GetAlerts = "[dbo].[sp_GetAlerts]";
        public const string sp_AllOverallComplianceofStore = "[dbo].[sp_AllOverallComplianceofStore]";
        public const string sp_AllOverallComplianceofStore_Summary = "[dbo].[sp_AllOverallComplianceofStore_Summary]";
        public const string sp_AllDeviationOverallComplianceofStore = "[dbo].[sp_AllDeviationOverallComplianceofStore]";
        public const string sp_DeshAlerts = "[dbo].[sp_DeshAlerts]";
        public const string sp_EnergyMeterRealtimeBARCHART = "[dbo].[sp_EnergyMeterRealtimeBARCHART] '{0}','{1}','{2}','{3}'";
        public const string sp_EnergyMeterByDateBARCHART = "[dbo].[sp_EnergyMeterByDateBARCHART] '{0}','{1}'";
        public const string sp_GetTopValueMeter = "[dbo].[sp_GetTopValueMeter]";
        public const string GetTopValuetransactionTempSensor = "[dbo].[GetTopValuetransactionTempSensor] '{0}'";
        public const string GetTopValuetransactionTempHumidSensor = "[dbo].[GetTopValuetransactionTempHumidSensor] '{0}'";
        public const string sp_Getallmeterdetailsbymetername = "[dbo].[sp_Getallmeterdetailsbymetername] '{0}'";
        public const string sp_GetallmeterdetailsbymeternameChart = "[dbo].[sp_GetallmeterdetailsbymeternameChart] '{0}','{1}'";
        public const string sp_GetallmeterdetailsbymeternameChartByDate = "[dbo].[sp_GetallmeterdetailsbymeternameChartByDate] '{0}','{1}','{2}','{3}'";
        public const string MapDeatils = "[dbo].[MapDeatils]";
        public const string sp_GetTimeForChart = "[dbo].[sp_GetTimeForChart]";
        public const string sp_transactionTempSensorForChart = "[dbo].[sp_transactionTempSensorForChart] '{0}'";
        public const string sp_GetAlltransactionTempSensorByDateTime = "[dbo].[sp_GetAlltransactionTempSensorByDateTime] '{0}','{1}','{2}'";
        public const string sp_GetAllSiteByCustomerId = "[dbo].[sp_GetAllSiteByCustomerId] '{0}'";
        public const string sp_GetAllAssetBySiteId = "[dbo].[sp_GetAllAssetBySiteId] '{0}','{1}'";
        public const string sp_EnergyConsumptionAverage = "[dbo].[sp_EnergyConsumptionAverage]";
        public const string sp_EnergyConsumptiontotal = "[dbo].[sp_EnergyConsumptiontotal]";
        public const string sp_ELECTRICALHEALTHAverage = "[dbo].[sp_ELECTRICALHEALTHAverage]";
        public const string sp_GetEnergyDistributionDashboard = "[dbo].[sp_GetEnergyDistributionDashboard]";
        public const string sp_TimeofDayENERGYCONSUMPTION = "[dbo].[sp_TimeofDayENERGYCONSUMPTION]";
        public const string sp_ThermalMonitoringHVACAvg = "[dbo].[sp_ThermalMonitoringHVACAvg] '{0}'";
        public const string sp_GetEmployeeGuestConfort_Dashboard = "[dbo].[sp_GetEmployeeGuestConfort_Dashboard]";
        public const string sp_GetEmployeeGuestConfortDetail_Dashboard = "[dbo].[sp_GetEmployeeGuestConfort_Dashboard_Detail]";
        public const string sp_GetUPS_Energy_Dashboard = "[dbo].[sp_GetUPS_Energy_Dashboard]";
        public const string sp_Get_Gas_Consumption = "[dbo].[sp_Get_Gas_Consumption]";
        public const string sp_Get_GasConsumption_TimeOfDay = "[dbo].[sp_Get_GasConsumption_TimeOfDay]";
        public const string sp_Get_Customer_Footfall = "[dbo].[sp_Get_Customer_Footfall]";
        public const string sp_Get_Customer_Footfall_TimeOfDay = "[dbo].[sp_Get_Customer_Footfall_TimeOfDay]";
        public const string sp_Get_EV_Health_Dashboard = "[dbo].[sp_Get_EV_Health_Dashboard]";
        public const string sp_GetAllAQI_Dashboard_Ext = "[dbo].[sp_GetAllAQI_Dashboard_Ext] '{0}','{1}'";
        public const string sp_GetAllAQI_TimeOfDay_Ext = "[dbo].[sp_GetAllAQI_TimeOfDay_Ext] '{0}','{1}'";
        public const string sp_AQIAlerts_Dashboard = "[dbo].[sp_AQIAlerts_Dashboard] '{0}','{1}'";
        public const string sp_AllOverallAQICompliance_Dashboard = "[dbo].[sp_AllOverallAQICompliance_Dashboard] '{0}','{1}'";

        #endregion

        #region Device 
        public const string sp_PushDeviceHandlingMonitoringSensor = "[dbo].[sp_PushDeviceHandlingMonitoringSensor] '{0}','{1}','{2}','{3}'";
        public const string sp_GetDeviceHandlingMonitoringSensor = "[dbo].[sp_GetDeviceHandlingMonitoringSensor]";
        public const string sp_saveTempAndHumidityMonitoringSensor = "[dbo].[sp_saveTempAndHumidityMonitoringSensor] '{0}','{1}','{2}','{3}'";
        public const string sp_GetTempAndHumidityMonitoringSensor = "[dbo].[sp_GetTempAndHumidityMonitoringSensor]";
        public const string sp_saveAndUpdateTransactionTempSensor = "[dbo].[sp_saveAndUpdateTransactionTempSensor] '{0}','{1}','{2}','{3}'";
        public const string sp_GetAlltransactionTempSensor = "[dbo].[sp_GetAlltransactionTempSensor]";
        public const string sp_GetAllEnergyMeter = "[dbo].[sp_GetAllEnergyMeter]";
        public const string GetAllAQI = "[dbo].[GetAllAQI]";
        public const string sp_GetAllAQI_Dashboard = "[dbo].[sp_GetAllAQI_Dashboard]";
        public const string sp_GetAllAQI_TimeOfDay = "[dbo].[sp_GetAllAQI_TimeOfDay]";
        public const string GetAllOdour = "[dbo].[GetAllOdour]";
        public const string sp_AssetType = "[dbo].[sp_AssetType]";
        public const string sp_saveAndUpdateAssetType = "[dbo].[sp_saveAndUpdateAssetType] '{0}','{1}','{2}','{3}'";
        public const string sp_DeleteAssetTypeId = "[dbo].[sp_DeleteAssetTypeId] '{0}'";
        public const string sp_saveAndUpdateAsset = "[dbo].[sp_saveAndUpdateAsset] '{0}', '{1}','{2}','{3}','{4}','{5}','{6}', '{7}', '{8}','{9}','{10}','{11}','{12}','{13}','{14}'";
        public const string sp_saveAndUpdateEnergyMeter = "[dbo].[sp_saveAndUpdateEnergyMeter] '{0}', '{1}','{2}','{3}','{4}','{5}','{6}', '{7}', '{8}','{9}','{10}','{11}','{12}','{13}','{14}','{15}', '{16}','{17}','{18}','{19}','{20}','{21}','{22}','{23}','{24}','{25}','{26}','{27}','{28}','{29}','{30}','{31}','{32}','{33}','{34}','{35}','{36}','{37}','{38}','{39}','{40}','{41}'";
        public const string sp_saveAndUpdateOdour = "[dbo].[sp_saveAndUpdateOdour] '{0}', '{1}','{2}','{3}','{4}','{5}','{6}', '{7}', '{8}','{9}'";
        public const string sp_saveAndUpdateAQI = "[dbo].[sp_saveAndUpdateAQI] '{0}', '{1}','{2}','{3}','{4}','{5}','{6}', '{7}', '{8}','{9}'";
        public const string sp_Asset = "[dbo].[sp_Asset]";
        public const string sp_GetAssetByAssetId = "[dbo].[sp_GetAssetByAssetId] {0}";
        public const string sp_DeleteAsset = "[dbo].[sp_DeleteAsset] {0}";
        public const string sp_AssetPrameters = "[dbo].[sp_AssetPrameters]";
        public const string sp_saveAndUpdateAssetPrameters = "[dbo].[sp_saveAndUpdateAssetPrameters] '{0}','{1}','{2}','{3}','{4}','{5}','{6}'";
        public const string sp_DeleteAssetPrameter = "[dbo].[sp_DeleteAssetPrameter] '{0}'";
        public const string sp_GetDeviceDeviceStatus = "[dbo].[sp_GetDeviceDeviceStatus]";
        public const string sp_saveAndUpdateDeviceStatus = "[dbo].[sp_saveAndUpdateDeviceStatus] '{0}','{1}','{2}','{3}'";
        public const string sp_DeleteDeviceStatus = "[dbo].[sp_DeleteDeviceStatus] '{0}'";
        public const string sp_GetAllDeviceDetails = "[dbo].[sp_GetAllDeviceDetails]";
        public const string sp_saveAndUpdateDeviceDetails = "[dbo].[sp_saveAndUpdateDeviceDetails] '{0}','{1}','{2}','{3}','{4}','{5}','{6}', '{7}', '{8}','{9}','{10}', '{11}', '{12}','{13}','{14}'";
        public const string sp_DeleteDeviceDetails = "[dbo].[sp_DeleteDeviceDetails] '{0}'";
        public const string sp_GetDeviceDetailsByDeviceId = "[dbo].[sp_GetDeviceDetailsByDeviceId] '{0}'";
        public const string sp_GetAllDeviceType = "[dbo].[sp_GetAllDeviceType]";
        public const string sp_saveAndUpdateDeviceType = "[dbo].[sp_saveAndUpdateDeviceType] '{0}','{1}','{2}','{3}'";
        public const string sp_DeleteDeviceType = "[dbo].[sp_DeleteDeviceType] '{0}'";
        public const string sp_saveAndUpdateAssetRules = "[dbo].[sp_saveAndUpdateAssetRules] '{0}', '{1}','{2}','{3}','{4}','{5}','{6}'";
        public const string sp_GetAllAssetRules = "[dbo].[sp_GetAllAssetRules]";
        public const string sp_GetAllAssetRulesById = "[dbo].[sp_GetAllAssetRulesById] {0}";
        public const string sp_DeleteAssetRues = "[dbo].[sp_DeleteAssetRues] {0}";
        public const string sp_GetStatus = "[dbo].[sp_GetStatus]";
        public const string sp_saveAndUpdateStatus = "[dbo].[sp_saveAndUpdateStatus] '{0}','{1}','{2}','{3}'";
        public const string sp_DeleteStatus = "[dbo].[sp_DeleteStatus] '{0}'";
        public const string sp_saveAndUpdateAssetOverride = "[dbo].[sp_saveAndUpdateAssetOverride] '{0}', '{1}','{2}','{3}','{4}','{5}','{6}','{7}'";
        public const string sp_GetAssetOverride = "[dbo].[sp_GetAssetOverride]";
        public const string sp_GetAssetOverrideByAssetOverrideId = "[dbo].[sp_GetAssetOverrideByAssetOverrideId] {0}";
        public const string sp_DeleteAssetOverride = "[dbo].[sp_DeleteAssetOverride] {0}";
        #endregion


        #region Site
        public const string sp_Site = "[dbo].[sp_Site]";
        public const string sp_saveAndUpdateSite = "[dbo].[sp_saveAndUpdateSite] '{0}', '{1}','{2}','{3}','{4}','{5}','{6}', '{7}', '{8}','{9}','{10}','{11}'";
        public const string sp_GetSiteBySiteId = "[dbo].[sp_GetSiteBySiteId] '{0}'";
        public const string sp_DeleteSite = "[dbo].[sp_DeleteSite] '{0}'";
        public const string GetAllSiteOperatingRules = "[dbo].[GetAllSiteOperatingRules]";
        public const string sp_saveAndUpdateSiteOperatingRules = "[dbo].[sp_saveAndUpdateSiteOperatingRules] '{0}','{1}','{2}','{3}','{4}'";
        public const string sp_DeleteSiteOperatingRules = "[dbo].[sp_DeleteSiteOperatingRules] '{0}'";
        public const string GetAllSiteOperationWindow = "[dbo].[GetAllSiteOperationWindow]";
        public const string sp_saveAndUpdateSiteOperationWindow = "[dbo].[sp_saveAndUpdateSiteOperationWindow] '{0}','{1}','{2}','{3}','{4}','{5}','{6}','{7}'";
        public const string sp_DeleteSiteOperationWindow = "[dbo].[sp_DeleteSiteOperationWindow] '{0}'";
        public const string sp_GetAllSiteInformation = "[dbo].[sp_GetAllSiteInformation]";
        public const string sp_saveAndUpdateSiteInformation = "[dbo].[sp_saveAndUpdateSiteInformation] '{0}', '{1}','{2}','{3}','{4}','{5}','{6}', '{7}', '{8}'";
        public const string sp_GetSiteInformationBySiteInformationId = "[dbo].[sp_GetSiteInformationBySiteInformationId] '{0}'";
        public const string sp_DeleteSiteInformation = "[dbo].[sp_DeleteSiteInformation] '{0}'";
        public const string sp_GetAllSiteInformationBaseline = "[dbo].[sp_GetAllSiteInformationBaseline]";
        public const string sp_saveAndUpdateSiteInformationBaseline = "[dbo].[sp_saveAndUpdateSiteInformationBaseline] '{0}', '{1}','{2}','{3}','{4}','{5}','{6}', '{7}', '{8}'";
        public const string sp_GetSiteInformatioBaselinenBySiteInformationBaselineId = "[dbo].[sp_GetSiteInformationBaselineBySiteInformationBaselineId] '{0}'";
        public const string sp_DeleteSiteInformationBaseline = "[dbo].[sp_DeleteSiteInformationBaseline] '{0}'";
        #endregion

        #region Master
        public const string sp_GatAllDesignation = "[dbo].[sp_GatAllDesignation]";
        public const string sp_saveAndUpdateDesignation = "[dbo].[sp_saveAndUpdateDesignation] '{0}', '{1}','{2}','{3}'";
        public const string sp_DeleteDesignation = "[dbo].[sp_DeleteDesignation] '{0}'";
        #endregion

        #region Inventory
        public const string sp_GetAllOrder = "[dbo].[sp_GetAllOrder]";
        public const string sp_saveAndUpdateOrders = "[dbo].[sp_saveAndUpdateOrders] '{0}', '{1}','{2}','{3}','{4}','{5}','{6}', '{7}', '{8}','{9}','{10}'";
        public const string sp_GetAllOrderByOrderId = "[dbo].[sp_GetAllOrderByOrderId] '{0}'";
        public const string sp_DeleteOrder = "[dbo].[sp_DeleteOrder] '{0}'";
        #endregion

        #region Report
        public const string sp_GetAlltransactionTempSensorByDateTimeReport = "[dbo].[sp_GetAlltransactionTempSensorByDateTimeReport] '{0}','{1}','{2}','{3}'";
        public const string sp_GetallmeterdetailsbymeternameByDateAndTimeV2 = "[dbo].[sp_GetallmeterdetailsbymeternameByDateAndTimeV2] '{0}','{1}','{2}'";
        public const string sp_GetallmeterdetailsbymeternameByDateAndTime = "[dbo].[sp_GetallmeterdetailsbymeternameByDateAndTime] '{0}','{1}','{2}'";
        public const string sp_GetFirstAndLastRowEnergyDetails = "[dbo].[sp_GetFirstAndLastRowEnergyDetails] '{0}','{1}'";
        public const string sp_GetAllGetAlltransactionTempSensorByDateTimeReportPaging = "[dbo].[sp_GetAllGetAlltransactionTempSensorByDateTimeReportPaging] '{0}','{1}','{2}','{3}','{4}','{5}','{6}','{7}','{8}'";
        public const string sp_GetAllGetAllmeterByDateTimeReportPaging = "[dbo].[sp_GetAllGetAllmeterByDateTimeReportPaging] '{0}','{1}','{2}','{3}','{4}','{5}','{6}','{7}'";
        public const string sp_GetAlltransactionTempSensorByRealTimeReport = "[dbo].[sp_GetAlltransactionTempSensorByRealTimeReport] '{0}'";
        #endregion

        #region Energy
        public const string sp_EnergyConsumptionActual = "[dbo].[sp_EnergyConsumptionActual] '{0}','{1}'";
        public const string sp_EnergyConsumptionCumulative = "[dbo].[sp_EnergyConsumptionCumulative] '{0}','{1}'";
        public const string sp_EnergyConsumptionAvg = "[dbo].[sp_EnergyConsumptionAvg] '{0}','{1}'";

        public const string sp_EnergyConsumptionActual_BarGraph_Dashboard = "[dbo].[sp_EnergyConsumptionActual_BarGraph_Dashboard] '{0}'";
        public const string sp_EnergyConsumptionAverage_BarGraph_Dashboard = "[dbo].[sp_EnergyConsumptionAverage_BarGraph_Dashboard] '{0}'";
        public const string sp_EnergyConsumption_TimeOfDay_Dashboard = "[dbo].[sp_EnergyConsumption_TimeOfDay_Dashboard] '{0}'";
        public const string sp_EnergyConsumptionCumulative_Dashboard = "[dbo].[sp_EnergyConsumptionCumulative_Dashboard]";
        public const string sp_GetEnergyDistribution_EnergyDashboard = "[dbo].[sp_GetEnergyDistribution_EnergyDashboard] '{0}','{1}'";
        public const string sp_GetPowerOutage_EnergyDashboard = "[dbo].[sp_GetPowerOutage_EnergyDashboard] '{0}','{1}'";

        //trends Stored Procedure
        public const string sp_EnergyTrends_CumulativeEnergyConsumptionLive = "[dbo].[sp_EnergyTrends_CumulativeEnergyConsumptionLive] '{0}','{1}'";
        public const string sp_EnergyTrends_EnergyConsumptionLive = "[dbo].[sp_EnergyTrends_EnergyConsumptionLive] '{0}'";
        public const string sp_EnergyTrends_EnergyConsumptionAndTemperatureLive = "[dbo].[sp_EnergyTrends_EnergyConsumptionAndTemperatureLive] '{0}','{1}'";
        public const string sp_EnergyTrends_EnergyConsumptionPeak = "[dbo].[sp_EnergyTrends_EnergyConsumptionPeak] '{0}'";
        public const string sp_EnergyTrends_EnergyConsumptionKWHKVAHAndTemprature = "[dbo].[sp_EnergyTrends_EnergyConsumptionKWHKVAHAndTemprature] '{0}'";
        public const string sp_EnergyTrends_EnergyProfile = "[dbo].[sp_EnergyTrends_EnergyProfile] '{0}'";
        #endregion

        #region Thermal Monitoring

        public const string sp_Get_HVAC_DashboardAlerts = "[dbo].[sp_GetHVACDashboardAlerts] '{0}', '{1}'";
        public const string sp_Get_HVAC_ThermalMonitoringTable = "[dbo].[sp_GetHVACThermalMonitoringTable] '{0}', '{1}'";
        public const string sp_Get_HVAC_Compliance = "[dbo].[sp_GetHVACDashboardCompliance] '{0}', '{1}'";
        public const string sp_Get_HVAC_ThermalMonitoringOps = "[dbo].[sp_GetHVACThermalMonitoringOpsInfo] '{0}', '{1}'";
        public const string sp_Get_HVAC_ThermalMonitoringSeries = "[dbo].[sp_GetHVACThermalMonitoringSeries] '{0}', '{1}'";
        public const string sp_Get_Ambient_DashboardAlerts = "[dbo].[sp_AmbientDashboardAlerts] '{0}', '{1}'";
        public const string sp_Get_Ambient_ThermalMonitoringTable = "[dbo].[sp_GetAmbientThermalMonitoringTable] '{0}', '{1}'";
        public const string sp_Get_Ambient_ThermalMonitoringSeries = "[dbo].[sp_GetAmbientThermalMonitoringSeries] '{0}', '{1}'";
        public const string sp_Get_AmbientAssets = "[dbo].[sp_GetAmbientAssetList] '{0}'";
        public const string sp_Get_Ambient_HumidityDashboardAlerts = "[dbo].[sp_GetAmbientHumidityDashboardAlerts] '{0}', '{1}'";
        public const string sp_Get_Ambient_HumidityMonitoringTable = "[dbo].[sp_GetAmbientHumidityMonitoringTable] '{0}', '{1}'";
        public const string sp_Get_Ambient_HumidityMonitoringSeries = "[dbo].[sp_GetAmbientHumidityMonitoringSeries] '{0}', '{1}'";

        public const string sp_Get_KitchenAsset_DashboardAlerts = "[dbo].[sp_GetKitchenAssetDashboardAlerts] '{0}', '{1}'";
        public const string sp_Get_KitchenAsset_ThermalMonitoringTable = "[dbo].[sp_GetKitchenAssetThermalMonitoringTable] '{0}', '{1}'";
        public const string sp_Get_KitchenAsset_Compliance = "[dbo].[sp_GetKitchenAssetDashboardCompliance] '{0}', '{1}'";
        public const string sp_Get_KitchenAsset_ThermalMonitoringOps = "[dbo].[sp_GetKitchenAssetThermalMonitoringOpsInfo] '{0}', '{1}'";
        public const string sp_Get_KitchenAsset_ThermalMonitoringRefrigerationOps = "[dbo].[sp_GetKitchenAssetThermalMonitoringRefrigerationOpsInfo] '{0}', '{1}'";
        public const string sp_Get_KitchenAsset_ThermalMonitoringSeries = "[dbo].[sp_GetKitchenAssetThermalMonitoringSeries] '{0}', '{1}'";

        public const string sp_Get_HVACAssets = "[dbo].[sp_GetHVACAssetList] '{0}'";
        public const string sp_Get_KitchenAssets = "[dbo].[sp_GetKitchenAssetList] '{0}'";

        public const string sp_Get_Trends_ThermalMonitoringSeries_Hot_ByAssetId = "[dbo].[sp_GetThermalMonitoringSeries_Hot_ByAssetId] '{0}'";
        public const string sp_Get_Trends_AmbientThermalMonitoringSeries_Hot_ByAssetId = "[dbo].[sp_GetAmbientThermalMonitoringSeries_Hot_ByAssetId] '{0}'";
        public const string sp_Get_Trends_AmbientHumidityMonitoringSeries_Hot_ByAssetId = "[dbo].[sp_GetAmbientHumidityMonitoringSeries_Hot_ByAssetId] '{0}'";
        public const string sp_Get_Trends_ThermalMonitoringSeries_Warm_ByAssetId = "[dbo].[sp_GetThermalMonitoringSeries_Warm_ByAssetId] '{0}'";
        public const string sp_Get_Trends_AmbientHumidityMonitoringSeries_Warm_ByAssetId = "[dbo].[sp_GetAmbientHumidityMonitoringSeries_Warm_ByAssetId] '{0}'";
        public const string sp_Get_Trends_AmbientThermalMonitoringSeries_Warm_ByAssetId = "[dbo].[sp_GetAmbientThermalMonitoringSeries_Warm_ByAssetId] '{0}'";
        public const string sp_Get_Trends_ThermalMonitoringSeries_Cold_ByAssetId = "[dbo].[sp_GetThermalMonitoringSeries_Cold_ByAssetId] '{0}'";
        public const string sp_Get_Trends_AmbientHumidityMonitoringSeries_Cold_ByAssetId = "[dbo].[sp_GetAmbientHumidityMonitoringSeries_Cold_ByAssetId] '{0}'";
        public const string sp_Get_Trends_AmbientThermalMonitoringSeries_Cold_ByAssetId = "[dbo].[sp_GetAmbientThermalMonitoringSeries_Cold_ByAssetId] '{0}'";

        public const string sp_GetThermalMonitoring_Trends_Hot = "[dbo].[sp_GetThermalMonitoring_Trends_Hot] '{0}'";
        public const string sp_GetAmbientThermalMonitoring_Trends_Hot = "[dbo].[sp_GetAmbientThermalMonitoring_Trends_Hot] '{0}'";
        public const string sp_GetAmbientHumidityMonitoring_Trends_Hot = "[dbo].[sp_GetAmbientHumidityThermalMonitoring_Trends_Hot] '{0}'";
        public const string sp_GetThermalMonitoring_Trends_Warm = "[dbo].[sp_GetThermalMonitoring_Trends_Warm] '{0}'";
        public const string sp_GetAmbientThermalMonitoring_Trends_Warm = "[dbo].[sp_GetAmbientThermalMonitoring_Trends_Warm] '{0}'";
        public const string sp_GetAmbientHumidityMonitoring_Trends_Warm = "[dbo].[sp_GetAmbientHumidityThermalMonitoring_Trends_Warm] '{0}'";
        public const string sp_GetThermalMonitoring_Trends_Cold = "[dbo].[sp_GetThermalMonitoring_Trends_Cold] '{0}'";
        public const string sp_GetAmbientThermalMonitoring_Trends_Cold = "[dbo].[sp_GetAmbientThermalMonitoring_Trends_Cold] '{0}'";
        public const string sp_GetAmbientHumidityMonitoring_Trends_Cold = "[dbo].[sp_GetAmbientHumidityThermalMonitoring_Trends_Cold] '{0}'";

        public const string sp_GetEnergyConsumption_Hot = "[dbo].[sp_GetEnergyConsumption_Hot]";
        public const string sp_GetEnergyConsumption_Warm = "[dbo].[sp_GetEnergyConsumption_Warm]";
        public const string sp_GetEnergyConsumption_Cold = "[dbo].[sp_GetEnergyConsumption_Cold]";

        public const string sp_GetThermalMonitoringHeatMap_Trends_Hot_ByAssetId = "[dbo].[sp_GetThermalMonitoringHeatMap_Trends_Hot_ByAssetId] '{0}'";
        public const string sp_GetThermalMonitoringHeatMap_Trends_Warm_ByAssetId = "[dbo].[sp_GetThermalMonitoringHeatMap_Trends_Warm_ByAssetId] '{0}'";
        public const string sp_GetThermalMonitoringHeatMap_Trends_Cold_ByAssetId = "[dbo].[sp_GetThermalMonitoringHeatMap_Trends_Cold_ByAssetId] '{0}'";
        public const string sp_GetThermalMonitoringContinuousSeries_ByAssetId = "[dbo].[sp_GetThermalMonitoringContinuousSeries_ByAssetId] '{0}'";
        public const string sp_GetAmbientHumidityMonitoringHeatMap_Trends_Hot_ByAssetId = "[dbo].[sp_GetAmbientHumidityMonitoringHeatMap_Trends_Hot_ByAssetId] '{0}'";
        public const string sp_GetAmbientThermalMonitoringHeatMap_Trends_Hot_ByAssetId = "[dbo].[sp_GetAmbientThermalMonitoringHeatMap_Trends_Hot_ByAssetId] '{0}'";
        public const string sp_GetAmbientHumidityMonitoringHeatMap_Trends_Warm_ByAssetId = "[dbo].[sp_GetAmbientHumidityMonitoringHeatMap_Trends_Warm_ByAssetId] '{0}'";
        public const string sp_GetAmbientThermalMonitoringHeatMap_Trends_Warm_ByAssetId = "[dbo].[sp_GetAmbientThermalMonitoringHeatMap_Trends_Warm_ByAssetId] '{0}'";
        public const string sp_GetAmbientHumidityMonitoringHeatMap_Trends_Cold_ByAssetId = "[dbo].[sp_GetAmbientHumidityMonitoringHeatMap_Trends_Cold_ByAssetId] '{0}'";
        public const string sp_GetAmbientThermalMonitoringHeatMap_Trends_Cold_ByAssetId = "[dbo].[sp_GetAmbientThermalMonitoringHeatMap_Trends_Cold_ByAssetId] '{0}'";

        public const string sp_GetThermalMonitoring_KitchenAsset_Trends_Hot = "[dbo].[sp_GetThermalMonitoring_KitchenAsset_Trends_Hot] '{0}'";
        public const string sp_GetThermalMonitoring_KitchenAsset_Trends_Warm = "[dbo].[sp_GetThermalMonitoring_KitchenAsset_Trends_Warm] '{0}'";
        public const string sp_GetThermalMonitoring_KitchenAsset_Trends_Cold = "[dbo].[sp_GetThermalMonitoring_KitchenAsset_Trends_Cold] '{0}'";

        public const string sp_GetThermalMonitoring_AssetRules = "[dbo].[sp_GetThermalMonitoring_Trends_AssetRules] '{0}'";

        public const string sp_GetThermalMonitoring_hvac_report = "[dbo].[sp_GetThermalMonitoring_hvac_report]";
        public const string sp_GetThermalMonitoring_ambient_report = "[dbo].[sp_GetThermalMonitoring_ambient_report]";
        public const string sp_GetThermalMonitoring_kitchenasset_report = "[dbo].[sp_GetThermalMonitoring_kitchenasset_report]";

        public const string sp_GetSiteName = "[dbo].[sp_GetSiteName] '{0}'";
        public const string sp_SyncCustomerFootfallData = "[dbo].[sp_SyncCustomerFootfallData] '{0}'";
        public const string sp_SyncUpsReadingData = "[dbo].[sp_SyncUpsReadingData] '{0}','{1}','{2}','{3}','{4}','{5}', '{6}', '{7}'";


        #endregion

        #region Ambient Report

        public const string sp_GetAmbientReport_Hot_ByAssetId = "[dbo].[sp_GetAmbientReport_Hot_ByAssetId] '{0}'";
        public const string sp_GetAmbientReport_Hot = "[dbo].[sp_GetAmbientReport_Hot] '{0}'";
        public const string sp_GetAmbientReport_Hot_HrlyAvg_ByAssetId = "[dbo].[sp_GetAmbientReport_Hot_HrlyAvg_ByAssetId] '{0}'"; 
        public const string sp_GetAmbientReportHeatMap_Hot_ByAssetId = "[dbo].[sp_GetAmbientReportHeatMap_Hot_ByAssetId] '{0}'";
        public const string sp_GetAmbientReportSeries_Warm_ByAssetId = "[dbo].[sp_GetAmbientReportSeries_Warm_ByAssetId] '{0}'";
        public const string sp_GetAmbientReportSeries_Warm_HrlyAvg_ByAssetId = "[dbo].[sp_GetAmbientReportSeries_Warm_HrlyAvg_ByAssetId ] '{0}'";
        public const string sp_GetAmbientReport_Warm = "[dbo].[sp_GetAmbientReport_Warm] '{0}'";
        public const string sp_GetAmbientReportHumidityMonitoringHeatMap_Trends_Warm_ByAssetId = "[dbo].[sp_GetAmbientReportHumidityMonitoringHeatMap_Trends_Warm_ByAssetId] '{0}'";

        public const string sp_GetAmbientReportSeries_Cold_ByAssetId = "[dbo].[sp_GetAmbientReportSeries_Cold_ByAssetId] '{0}'";
        public const string sp_GetAmbientReportSeries_Cold_HrlyAvg_ByAssetId = "[dbo].[sp_GetAmbientReportSeries_Cold_HrlyAvg_ByAssetId] '{0}'";
        public const string sp_GetAmbientReport_Cold = "[dbo].[sp_GetAmbientReport_Cold] '{0}'";
        public const string sp_GetAmbientReportHumidityHeatMap_Trends_Cold_ByAssetId = "[dbo].[sp_GetAmbientReportHumidityHeatMap_Trends_Cold_ByAssetId] '{0}'";
        #endregion

        #region Ambient Humidity Report

        public const string sp_GetAmbient_HumidityReport_Hot_ByAssetId = "[dbo].[sp_GetAmbient_HumidityReport_Hot_ByAssetId] '{0}'";
        public const string sp_GetAmbient_HumidityReport_Hot = "[dbo].[sp_GetAmbient_HumidityReport_Hot] '{0}'";
        public const string sp_GetAmbient_Humidity_Report_Hot_HrlyAvg_ByAssetId = "[dbo].[sp_GetAmbient_Humidity_Report_Hot_HrlyAvg_ByAssetId] '{0}'";
        public const string sp_GetAmbient_Humidity_ReportHeatMap_Hot_ByAssetId = "[dbo].[sp_GetAmbient_Humidity_ReportHeatMap_Hot_ByAssetId] '{0}'";
        
        public const string sp_GetAmbient_Humidity_ReportSeries_Warm_ByAssetId = "[dbo].[sp_GetAmbient_Humidity_ReportSeries_Warm_ByAssetId] '{0}'";
        public const string sp_GetAmbient_HumidityReportSeries_Warm_HrlyAvg_ByAssetId = "[dbo].[sp_GetAmbient_HumidityReportSeries_Warm_HrlyAvg_ByAssetId ] '{0}'";
        public const string sp_GetAmbient_HumidityReport_Warm = "[dbo].[sp_GetAmbient_HumidityReport_Warm] '{0}'";
        public const string sp_GetAmbient_HumidityReporMonitoringHeatMap_Trends_Warm_ByAssetId = "[dbo].[sp_GetAmbient_HumidityReporMonitoringHeatMap_Trends_Warm_ByAssetId] '{0}'";

        public const string sp_GetAmbient_HumidityReportSeries_Cold_ByAssetId = "[dbo].[sp_GetAmbient_HumidityReportSeries_Cold_ByAssetId] '{0}'";
        public const string sp_GetAmbient_HumidityReportSeries_Cold_HrlyAvg_ByAssetId = "[dbo].[sp_GetAmbient_HumidityReportSeries_Cold_HrlyAvg_ByAssetId] '{0}'";
        public const string sp_GetAmbient_HumidityReport_Cold = "[dbo].[sp_GetAmbient_HumidityReport_Cold] '{0}'";
        public const string sp_GetAmbient_HumidityReportHeatMap_Trends_Cold_ByAssetId = "[dbo].[sp_GetAmbient_HumidityReportHeatMap_Trends_Cold_ByAssetId] '{0}'";
        #endregion
    }
}
