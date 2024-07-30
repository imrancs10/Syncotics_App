var selectedParentCheckedItem = 0; //start with 0 so decrese by 1 from config.json file
var selectedChildCheckedItem = 2; //start with 0 so decrese by 1 from config.json file
$('#imgApplyFilter').click(function () {
    var allSelectedGraph = $('.sub-text [type=checkbox]:checked')
    $("#carouselEnergyTrendWarmIndicators .carousel-indicators").empty();
    $("#carouselEnergyTrendWarmIndicators .carousel-inner").empty();
    $.each(allSelectedGraph, function (key, value) {
        var checkbox = $(value);
        var selectedGraphText = $(value).siblings('label').text();
        var graphId = $(value).data('id');
        var enableGraph = $(value).data('enablegraph');
        var frequencyEnable = $(value).data('frequencyenable');
        var graphContainerID = selectedGraphText.replaceAll(" ", "").replaceAll("-", "").replace("(", "").replace(")", "")
        //set first graph to active by default
        var activeClass = key == 0 ? " active" : "";
        //clear all indicator
        if (enableGraph == true) {
            var divIndicator = '<button type="button" class="' + activeClass + '" data-bs-target="#carouselEnergyTrendWarmIndicators" style="background-color:black;" data-bs-slide-to="' + key + '" aria-label="Slide ' + (key + 1) + '"></button>'
            $("#carouselEnergyTrendWarmIndicators .carousel-indicators").append(divIndicator);

            if (frequencyEnable == true) {
                $.getJSON('/v2.0/Energy/Hot/js/EnergyConsumption_Graph_Config.json', function (data) {
                    var hourlyActualSelected = $('[data-id="17"]').prop('checked'); //true if hourly Actual checked
                    var hourlyAverageSelected = $('[data-id="18"]').prop('checked');//true if hourly Average checked
                    var selectedGraphData = data.CategoryGraph.find(x => x.SubGraph.some(item => item.Name === selectedGraphText)).SubGraph.find(x => x.Name == selectedGraphText)
                    if (selectedGraphData) {
                        if (hourlyActualSelected == true) {
                            graphId = selectedGraphData?.FrequencyIndex[0]
                            selectedGraphText = "Hourly Actual " + selectedGraphText
                        }
                        else if (hourlyAverageSelected == true) {
                            graphId = selectedGraphData?.FrequencyIndex[1]
                            selectedGraphText = "Hourly Average " + selectedGraphText
                        }

                        else { //by default actual will be applied
                            graphId = selectedGraphData?.FrequencyIndex[0]
                            selectedGraphText = "Hourly Actual " + selectedGraphText
                        }
                        setCorousalItem(activeClass, selectedGraphText, graphContainerID);
                        //initialize Graph
                        energyWarmDashboard.init(graphId, graphContainerID);
                    }
                })

            }
            else {
                //initialize Graph
                setCorousalItem(activeClass, selectedGraphText, graphContainerID);
                energyWarmDashboard.init(graphId, graphContainerID);
            }


        }
    });
    $('.X1').trigger('click')
})
$(document).ready(function () {
    setFilterItem();
})

function setCorousalItem(activeClass, selectedGraphText, graphContainerID) {
    var carousalItem = '<div class="carousel-item ' + activeClass + '" data-bs-interval="30000">' +
        '<div class="img1-header" style="margin-bottom: 3%">' +
        '<div class="icon-h">' +
        '<a href="javascript:return false;" style="text-decoration: none;">' +
        '<img src="/v2.0/common/images/4.png" alt="" class="icon">' +
        '</a>' +
        '<div class="img1-button" style="display: block;" id="h1">' + selectedGraphText + '</div>' +
        '</div>' +
        '</div>' +
        '<div class="chart-container fix_height" id="' + graphContainerID + '"></div>' +
        '</div>';

    $("#carouselEnergyTrendWarmIndicators .carousel-inner").append(carousalItem);
}
function setFilterItem() {
    $.getJSON('/v2.0/Energy/Hot/js/EnergyConsumption_Graph_Config.json', function (data) {
        var detailHtml = '';
        $.each(data.CategoryGraph, function (key, value) {
            //if (key == 0) {
            //    detailHtml += '<div class="details-text">' +
            //        '<div class="form-check form-switch" style="display: flex;">' +
            //        //'<input class="form-check-input" type="checkbox" checked="true" role="switch" id="flexSwitchCheckDefault' + (key + 1) + '">' +
            //        '<label style="margin-left: -8%;margin-top: -1%;" class="form-check-label" for="flexSwitchCheckDefault' + (key + 1) + '">' + value.Name + '</label>' +
            //        '</div>';
            //}
            //else {
            //    detailHtml += '<div class="details-text">' +
            //        '<div class="form-check form-switch" style="display: flex;">' +
            //        //'<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault' + (key + 1) + '">' +
            //        '<label style="margin-left: -8%;margin-top: -1%;" class="form-check-label" for="flexSwitchCheckDefault' + (key + 1) + '">' + value.Name + '</label>' +
            //        '</div>';
            //}

            detailHtml += '<div class="details-text">' +
                '<div class="form-check form-switch" style="display: flex;">' +
                //'<input class="form-check-input" type="checkbox" checked="true" role="switch" id="flexSwitchCheckDefault' + (key + 1) + '">' +
                '<label style="margin-left: -8%;margin-top: -1%;" class="form-check-label" for="flexSwitchCheckDefault' + (key + 1) + '">' + value.Name + '</label>' +
                '</div>';

            if (value.SubGraph.length > 0) {
                detailHtml += '<div class="sub-text">'
            }
            $.each(value.SubGraph, function (keyChild, valueChild) {
                var frequencyEnable = valueChild.Frequency?.length > 0 ? true : false;
                if (key == selectedParentCheckedItem && keyChild == selectedChildCheckedItem) {
                    detailHtml += '<div class="form-check form-switch" style="display: flex;">' +
                        '<input class="form-check-input" type="checkbox" data-frequencyEnable="' + frequencyEnable + '" data-enableGraph="' + valueChild.EnableGraph + '" data-Id="' + valueChild.Id + '" checked="true" role="switch" id="flexSwitchCheckDefault' + (key + 1) + '' + (keyChild + 1) + '">' +
                        '<label class="form-check-label" for="flexSwitchCheckDefault' + (key + 1) + '' + (keyChild + 1) + '">' + valueChild.Name + '</label>' +
                        '</div>';
                }
                else {
                    detailHtml += '<div class="form-check form-switch" style="display: flex;">' +
                        '<input class="form-check-input" type="checkbox"  data-frequencyEnable="' + frequencyEnable + '" data-enableGraph="' + valueChild.EnableGraph + '" data-Id="' + valueChild.Id + '" role="switch" id="flexSwitchCheckDefault' + (key + 1) + '' + (keyChild + 1) + '">' +
                        '<label class="form-check-label" for="flexSwitchCheckDefault' + (key + 1) + '' + (keyChild + 1) + '">' + valueChild.Name + '</label>' +
                        '</div>';
                }

            });
            if (value.SubGraph.length > 0) {
                detailHtml += '</div>';
            }
            detailHtml += '</div>';
        });

        //$('.page1').append(detailHtml);
        $(detailHtml).insertBefore('.page1 .Apply-filters');
        //set first graph as default
        $('#imgApplyFilter').trigger('click');
    })
}
document.querySelector(".calender-button").addEventListener("click", function() {
  const rightBar = document.querySelector(".quick-links");
  rightBar.style.display = "block";
  var box = document.querySelector('.main-box');
  if(rightBar.style.display = "block")
  {
    rightBar.style.zIndex = '1000';
    box.style.zIndex = '999';
    box.style.opacity = '.2';
  }
});

document.querySelector(".X").addEventListener("click", function() {
  const rightBar = document.querySelector(".quick-links");
  rightBar.style.display = "none";
  var box = document.querySelector('.main-box');
  if(rightBar.style.display = "none")
  {
    rightBar.style.zIndex = '0';
    box.style.zIndex = '0';
    box.style.opacity = '1';
  }
});

document.getElementById("Relative-tab").addEventListener("click", function() {
  const page1 = document.querySelector(".text-1");
  const page2 = document.querySelector(".text-2");

  page1.style.display = "block";
  page2.style.display = "none";
});

document.getElementById("fixed-tab").addEventListener("click", function() {
  const page1 = document.querySelector(".text-1");
  const page2 = document.querySelector(".text-2");

  page1.style.display = "none";
  page2.style.display = "block";
});


document.querySelector(".filter-button").addEventListener("click", function() {
  const rightBar = document.querySelector(".filter-box");
  rightBar.style.display = "block";
  var box = document.querySelector('.main-box');
  if(rightBar.style.display = "block")
  {
    rightBar.style.zIndex = '1000';
    box.style.zIndex = '999';
    box.style.opacity = '.2';
  }
});

document.querySelector(".X1").addEventListener("click", function() {
  const rightBar = document.querySelector(".filter-box");
  rightBar.style.display = "none";
  var box = document.querySelector('.main-box');
  {
    rightBar.style.zIndex = '0';
    box.style.zIndex = '0';
    box.style.opacity = '1';
  }
});

document.getElementById("home-tab").addEventListener("click", function() {
  const page1 = document.querySelector(".page1");
  const page2 = document.querySelector(".page2");
  const page3 = document.querySelector(".page3");
  const page4 = document.querySelector(".page4");
  page1.style.display = "block";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "none";
});

document.getElementById("profile-tab").addEventListener("click", function() {
  const page1 = document.querySelector(".page1");
  const page2 = document.querySelector(".page2");
  const page3 = document.querySelector(".page3");
  const page4 = document.querySelector(".page4");
  page1.style.display = "none";
  page2.style.display = "block";
  page3.style.display = "none";
  page4.style.display = "none";
});

document.getElementById("contact-tab").addEventListener("click", function() {
  const page1 = document.querySelector(".page1");
  const page2 = document.querySelector(".page2");
  const page3 = document.querySelector(".page3");
  const page4 = document.querySelector(".page4");
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "block";
  page4.style.display = "none";
});

document.getElementById("ops-tab").addEventListener("click", function() {
  const page1 = document.querySelector(".page1");
  const page2 = document.querySelector(".page2");
  const page3 = document.querySelector(".page3");
  const page4 = document.querySelector(".page4");
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "block";
});

mobiscroll.datepicker('#calendar', {
  controls: ['calendar'],
  display: 'inline'
});

document.querySelector(".menu_button").addEventListener("click", function () {
    var isActive = $('.sidebar-menu').hasClass('active')
    if (!isActive)
        $('.energy-header').css('margin-left', '-15.5%');
    else
        $('.energy-header').css('margin-left', '0%');
});



