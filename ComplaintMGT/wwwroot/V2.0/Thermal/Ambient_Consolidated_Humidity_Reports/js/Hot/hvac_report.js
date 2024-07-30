
var table;
var table2;
var table3;
var table4;

var RenderTable = function (assetid) {

    $.ajax({
        type: "post",
        url: "/Thermal/GetHotAmbientHumiditySeries?assetid=" + assetid,
        data: {},
        success: function (data) {
            var JSONObj = JSON.parse(data);

            console.log(JSONObj);

            if (JSONObj != null && JSONObj.length > 0) {

                let arrObj = [...JSONObj];
                let tboday = document.getElementById("hvacreport-body");

                if (table)
                    table.destroy();

                tboday.innerHTML = '';

                arrObj.forEach((o, i) => {

                    let tr = document.createElement("tr");

                    let siteNameCol = document.createElement("td");
                    let assetNameCol = document.createElement("td");
                    let transactionDateCol = document.createElement("td");
                    let transactionTimeCol = document.createElement("td");
                    let temperatureCol = document.createElement("td");

                    siteNameCol.innerText = o.siteName;
                    assetNameCol.innerText = o.DeviceName;
                    transactionDateCol.innerText = new Date().toLocaleDateString();
                    transactionTimeCol.innerText = o.LogTime;
                    temperatureCol.innerText = o.Temperature;

                    tr.appendChild(siteNameCol);
                    tr.appendChild(assetNameCol);
                    tr.appendChild(transactionDateCol);
                    tr.appendChild(transactionTimeCol);
                    tr.appendChild(temperatureCol);

                    tboday.appendChild(tr);

                    if ((i + 1) === arrObj.length) {
                        table = new DataTable('#hvacreport');
                    }

                })

            } else {

                if (table)
                    table.destroy();

                table = new DataTable('#hvacreport');
            }
        }
    })
}

var RenderTable2 = function (assetid) {

    $.ajax({
        type: "post",
        url: "/Thermal/ConsolidatedAmbientHumidityHot",
        data: {},
        success: function (data) {

            var JSONObj = JSON.parse(data);

            console.log(JSONObj);

            if (JSONObj != null && JSONObj.length > 0) {

                let arrObj = [...JSONObj];
                let tboday = document.getElementById("hvacreport-body_2")
                if (table2)
                    table2.destroy();

                tboday.innerHTML = '';

                arrObj.forEach((o, i) => {

                    let tr = document.createElement("tr");

                    let siteNameCol = document.createElement("td");
                    let assetNameCol = document.createElement("td");
                    let transactionDateCol = document.createElement("td");
                    let temperatureCol = document.createElement("td");

                    siteNameCol.innerText = o.siteName;
                    assetNameCol.innerText = o.DeviceName;
                    transactionDateCol.innerText = o.TransactionHour
                    temperatureCol.innerText = o.Temperature;

                    tr.appendChild(siteNameCol);
                    tr.appendChild(assetNameCol);
                    tr.appendChild(transactionDateCol);
                    tr.appendChild(temperatureCol);

                    tboday.appendChild(tr);

                    if ((i + 1) === arrObj.length) {
                        table = new DataTable('#hvacreport_2');
                    }

                })

            } else {

                if (table2)
                    table2.destroy();

                table2 = new DataTable('#hvacreport_2')
            }
        }
    });

}

var RenderTable3 = function (assetid) {

    $.ajax({
        type: "post",
        url: "/Thermal/GetHotAmbientHumidityHrlyAVGSeries?assetid=" + assetid,
        data: {},
        success: function (data) {
            var JSONObj = JSON.parse(data);

            console.log(JSONObj);

            if (JSONObj != null && JSONObj.length > 0) {

                let arrObj = [...JSONObj];
                let tboday = document.getElementById("hvacreport-body_3")
                if (table3)
                    table3.destroy();

                tboday.innerHTML = '';

                arrObj.forEach((o, i) => {

                    let tr = document.createElement("tr");

                    let siteNameCol = document.createElement("td");
                    let assetNameCol = document.createElement("td");
                    let transactionDateCol = document.createElement("td");
                    let temperatureCol = document.createElement("td");

                    siteNameCol.innerText = o.siteName;
                    assetNameCol.innerText = o.DeviceName;
                    transactionDateCol.innerText = convertToAMPM(o.LogTime)
                    temperatureCol.innerText = o.Temperature;

                    tr.appendChild(siteNameCol);
                    tr.appendChild(assetNameCol);
                    tr.appendChild(transactionDateCol);
                    tr.appendChild(temperatureCol);

                    tboday.appendChild(tr);

                    if ((i + 1) === arrObj.length) {
                        table3 = new DataTable('#hvacreport_3');
                    }

                })

            } else {

                if (table3)
                    table3.destroy();

                table3 = new DataTable('#hvacreport_3')
            }
        }
    });

}

var RenderTable4 = function (assetid) {

    $.ajax({
        type: "post",
        url: "/Thermal/AmbientHumidityHeatMapHot?assetid=" + assetid,
        data: {},
        success: function (data) {

            var JSONObj = JSON.parse(data);

            console.log(JSONObj);

            if (JSONObj != null && JSONObj.length > 0) {

                let arrObj = [...JSONObj];
                let tboday = document.getElementById("hvacreport-body_4")
                if (table4)
                    table4.destroy();

                tboday.innerHTML = '';

                arrObj.forEach((o, i) => {

                    let tr = document.createElement("tr");

                    let siteNameCol = document.createElement("td");
                    let assetNameCol = document.createElement("td");
                    let transactionDateCol = document.createElement("td");
                    let temperatureCol = document.createElement("td");

                    siteNameCol.innerText = o.siteName;
                    assetNameCol.innerText = o.DeviceName;
                    transactionDateCol.innerText = new Date().toLocaleDateString();
                    temperatureCol.innerText = o.Temperature;

                    tr.appendChild(siteNameCol);
                    tr.appendChild(assetNameCol);
                    tr.appendChild(transactionDateCol);
                    tr.appendChild(temperatureCol);

                    tboday.appendChild(tr);

                    if ((i + 1) === arrObj.length) {
                        table4 = new DataTable('#hvacreport_4');
                    }

                })

            } else {

                if (table4)
                    table4.destroy();

                table4 = new DataTable('#hvacreport_4')
            }
        }
    });
}

var RenderAssetList = function () {

    var AssetLists = function () {

        RenderTable(0)
        RenderTable2(0)
        RenderTable3(0)
        RenderTable4(0)

    }



    return {
        init: function () {
            AssetLists();
        }
    }
}();

document.addEventListener('DOMContentLoaded', function () {

    console.log('Content Loaded');
    RenderAssetList.init();

})

function convertToAMPM(time) {
    if (time < 12)
        return time + ".00 AM";
    else
        return time + ".00 PM";
}