
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


var ambientSeriesDataWarmByAssetId = function (assetid) {
    var dom8 = document.getElementById('thermalMonitoringwithPeakTemperature_warm');
    //dom8.innerHTML = '';
    console.log(assetid);

    var myChart8 = echarts.init(dom8, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var app = {};

    myChart8.showLoading();
    $.ajax({
        type: "post",
        url: "/Thermal/GetAmbientWarmThermalMonitoringSeries?assetid=" + assetid,
        data: {},
        success: function (data) {
            let option8;
            var myJSON = JSON.parse(data);

            var devices = myJSON.map(o => o.DeviceName)
            devices = [...new Set(devices)]

            var timeSeries = myJSON.map(o => o.LogTime)
            let seriesData = myJSON.map(o => o.Temperature);

            let graphData = [{
                name: devices[0],
                type: 'line',
                data: seriesData,
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
            }]

            console.log(devices, timeSeries, graphData)

            option8 = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {},
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: { readOnly: false },
                        magicType: { type: ['line', 'bar'] },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: timeSeries
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} g.m-3'
                    }
                },
                series: graphData
            };

            $.ajax({
                type: "post",
                url: "/Thermal/ThermalMonitoringAssetRules?assetid=" + assetid,
                data: {},
                success: function (data) {

                    let myJson = JSON.parse(data);
                    let ucl = myJson[0].UCL;
                    let lcl = myJson[0].LCL;

                    console.log(lcl, ucl)
                    myChart8.setOption({
                        series: [
                            {
                                markLine: {
                                    data: [{ name: 'LCL', yAxis: lcl }, { name: 'UCL', yAxis: ucl }]
                                }
                            }
                        ]
                    });


                }
            });

            if (option8 && typeof option8 === 'object') {
                myChart8.hideLoading();
                myChart8.setOption(option8);
            }


        }
    })
};
var GetDashboardAssetLists = function () {
    var AssetLists = function () {

        $.ajax({
            type: "post",
            url: "/Thermal/GetambientThermalAssets",
            data: {},
            success: function (data) {

                var assetLis = JSON.parse(data);
                console.log(assetLis)

                var asstNavOuter = document.getElementById("flowBoxes");

                for (let i = 0; i < assetLis.length; i++) {

                    let aNav = document.createElement("div");
                    aNav.id = `ambient-${assetLis[i].AssetId}`;
                    aNav.innerText = assetLis[i].Name;
                    aNav.style = "white-space: nowrap"

                    if (i == 0) {
                        aNav.className = "right active";
                        ambientSeriesDataWarmByAssetId(assetLis[i].AssetId);
                        _echartsHrlyAvgThermalMonitoringChartDashboard(assetLis[i].AssetId);
                        _echartsThermalProfileChartDashboard(assetLis[i].AssetId)

                    }  
                    else if (i + 1 == assetLis.length)
                        aNav.className = "left";
                    else
                        aNav.className = "left right";

                    aNav.onclick = function () {

                        aNav.classList.add('active');
                        for (let j = 0; j < assetLis.length; j++) {
                            let _nav = document.getElementById(`ambient-${assetLis[j].AssetId}`)
                            if (j != i)
                                _nav.classList.remove('active')
                        }
                        ambientSeriesDataWarmByAssetId(assetLis[i].AssetId);
                        _echartsHrlyAvgThermalMonitoringChartDashboard(assetLis[i].AssetId);
                        _echartsThermalProfileChartDashboard(assetLis[i].AssetId)
                    };

                    asstNavOuter.appendChild(aNav);
                }

            }
        });

    }

    return {
        init: function () {
            AssetLists();
        }
    }
}();
var _echartsThermalMonitoring2ChartDashboard = function () {
    var dom = document.getElementById('thermalMonitoring2');
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var app = {};

    myChart.showLoading();
    $.ajax({
        type: "post",
        url: "/Thermal/AmbientConsolidatedThermalMonitoringWarm",
        data: {},
        success: function (data) {

            myChart.hideLoading();

            var myJSON = JSON.parse(data);
            console.log(myJSON)

            var devices = myJSON.map(o => o.DeviceName)
            devices = [...new Set(devices)]

            var time = myJSON.map(o => o.LogTime)
            time = [...new Set(time)]

            var seriesData = [];

            var legendColor = []

            for (let i = 0; i < devices.length; i++) {

                let _color = getRandomColor();
                legendColor.push(_color);

                let _seriedData = myJSON.filter(o => o.DeviceName === devices[i]).map(o => o.Temperature);

                let _data = {
                    name: devices[i],
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: _color
                            },
                            {
                                offset: 1,
                                color: getRandomColor()
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: _seriedData
                }

                seriesData.push(_data);

            }

            var option;

            option = {
                color: legendColor,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {},
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: time
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: seriesData
            };

            if (option && typeof option === 'object') {
                myChart.setOption(option);
            }

            window.addEventListener('resize', myChart.resize);

            if (option && typeof option === 'object') {
                myChart.setOption(option);
            }

            window.addEventListener('resize', function () {
                myChart.resize();
            });

            document.querySelector(".menu_button").addEventListener("click", function () {
                myChart.resize();
            });
        }
    });

}
var _echartsThermalProfileChartDashboard = function (assetid) {
    var dom = document.getElementById('thermalProfile');
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var app = {};

    var option;


    $.ajax({
        type: "post",
        url: "/Thermal/AmbientThermalMonitoringHeatMapWarm?assetid=" + assetid,
        data: {},
        success: function (respData) {

            var myJSON = JSON.parse(respData);

            console.log(myJSON)

            var date = new Date(), y = date.getFullYear(), m = date.getMonth();
            var firstDay = new Date(y, m, 1);
            var lastDay = new Date(y, m + 1, 0);

            let data = []
            for (let i = 0; i < myJSON.length; i++) {

                let echartTime = +echarts.time.parse(myJSON[i].TransactionDate)
                data.push([
                    echarts.time.format(echartTime, '{yyyy}-{MM}-{dd}', false), 
                    +myJSON[i].Temperature.toFixed(2)
                ]);
            }

            option = {
                tooltip: {},
                visualMap: {
                    min: 0,
                    max: 40,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '15%'
                },
                grid: {
                    height: '50%',
                    top: '10%'
                },
                calendar: {
                    top: 120,
                    left: 30,
                    right: 30,
                    cellSize: ['auto', 13],
                    itemStyle: {
                        borderWidth: 0.5
                    },
                    yearLabel: { show: true }, 
                    range: [firstDay, lastDay]
                },
                series: {
                    type: 'heatmap',
                    coordinateSystem: 'calendar',
                    data: data
                }
            };

            if (option && typeof option === 'object') {
                myChart.setOption(option);
            }

            window.addEventListener('resize', myChart.resize);

            if (option && typeof option === 'object') {
                myChart.setOption(option);
            }

            window.addEventListener('resize', function () {
                myChart.resize();
            });

            document.querySelector(".menu_button").addEventListener("click", function () {
                myChart.resize();
            });
        }
    });
}
var _echartsHrlyAvgThermalMonitoringChartDashboard = function (assetid) {
    var dom = document.getElementById('hrlyAvgThermalMonitoring');
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var app = {};

    $.ajax({
        type: "post",
        url: "/Thermal/GetAmbientWarmThermalMonitoringSeries?assetid=" + assetid,
        data: {},
        success: function (data) {
            var option;
            var myJSON = JSON.parse(data);

            var devices = myJSON.map(o => o.DeviceName)
            devices = [...new Set(devices)]

            var timeSeries = myJSON.map(o => o.LogTime)
            let seriesData = myJSON.map(o => o.Temperature);

            let energyData = [];

            let graphData = []

            $.ajax({
                type: "post",
                url: "/Thermal/EnergyConsumptionHot",
                data: {},
                success: function (resp) {

                    let jsonObj = JSON.parse(resp);
                    energyData = jsonObj.map(o => +o.KWH)
                    console.log(energyData);

                    myChart.setOption({
                        series: [
                            {
                                name: 'Temperature',
                                type: 'line',
                                //yAxisIndex: 1,
                                tooltip: {
                                    valueFormatter: function (value) {
                                        return value + ' g.m-3';
                                    }
                                },
                                data: seriesData
                            },
                            {
                                name: 'Energy Consumption',
                                type: 'bar',
                                tooltip: {
                                    valueFormatter: function (value) {
                                        return value + ' kwh';
                                    }
                                },
                                data: energyData
                            },
                        ]
                    });

                }
            })

            console.log(devices, timeSeries, graphData)

            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                toolbox: {
                    feature: {
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                legend: {
                   
                },
                xAxis: [
                    {
                        type: 'category',
                        data: timeSeries,
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: 'Temperature',
                        interval: 5,
                        axisLabel: {
                            formatter: '{value} g.m-3'
                        }
                    }
                ],
                series: graphData
            };

            if (option && typeof option === 'object') {
                myChart.setOption(option);
            }

            window.addEventListener('resize', myChart.resize);

            if (option && typeof option === 'object') {
                myChart.setOption(option);
            }

            window.addEventListener('resize', function () {
                myChart.resize();
            });

            document.querySelector(".menu_button").addEventListener("click", function () {
                myChart.resize();
            });

        }
    })

}


document.addEventListener('DOMContentLoaded', function () {
    GetDashboardAssetLists.init();
    _echartsThermalMonitoring2ChartDashboard();
});



