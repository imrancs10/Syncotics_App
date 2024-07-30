var guestComfortDashboard = function () {
  var _echartsguestA1ChartDashboard = function () {

    var dom = document.getElementById('guest-container1');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

const gaugeData = [
  {
    value: 20,
    name: 'Good',
    title: {
      offsetCenter: ['-40%', '80%']
    },
    detail: {
      offsetCenter: ['-40%', '95%']
    }
  },
  {
    value: 60,
    name: 'Perfect',
    title: {
      offsetCenter: ['40%', '80%']
    },
    detail: {
      offsetCenter: ['40%', '95%']
    }
  }
];
option = {
  series: [
    {
      type: 'gauge',
      anchor: {
        show: true,
        showAbove: true,
        size: 18,
        itemStyle: {
          color: '#FAC858'
        }
      },
      pointer: {
        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        width: 4,
        length: '80%',
        offsetCenter: [0, '8%']
      },
      progress: {
        show: true,
        overlap: true,
        roundCap: true
      },
      axisLine: {
        roundCap: true
      },
      data: gaugeData,
      title: {
        fontSize: 10
      },
      detail: {
        width: 18,
        height: 10,
        fontSize: 10,
        color: '#fff',
        backgroundColor: 'inherit',
        borderRadius: 3,
        formatter: '{value}%'
      }
    }
  ]
};
setInterval(function () {
  gaugeData[0].value = +(Math.random() * 100).toFixed(2);
  gaugeData[1].value = +(Math.random() * 100).toFixed(2);
  gaugeData[2].value = +(Math.random() * 100).toFixed(2);
  myChart.setOption({
    series: [
      {
        data: gaugeData
      }
    ]
  });
}, 2000);

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

document.querySelector(".menu_button").addEventListener("click", function() {
  myChart.resize();
});


  }

  var _echartsguestA2ChartDashboard = function () {
    var dom = document.getElementById('guest-container2');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  series: [

    {
      name: 'Mail Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Affiliate Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [150, 212, 201, 154, 190, 330, 410]
    },
    {
      name: 'Search Engine',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320]
    }
  ]
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

document.querySelector(".menu_button").addEventListener("click", function() {
  myChart.resize();
});



    


  }

  var _echartsguestA3ChartDashboard = function () {
    var dom = document.getElementById('guest-container3');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  series: [

    {
      name: 'Mail Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Affiliate Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [150, 212, 201, 154, 190, 330, 410]
    },
    {
      name: 'Search Engine',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320]
    }
  ]
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

document.querySelector(".menu_button").addEventListener("click", function() {
  myChart.resize();
});



    


  }

  var _echartshr1ChartDashboard = function () {
    var dom = document.getElementById('hr1');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

var series = [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    stack: 'a',
    name: 'a'
  },
  {
    data: [10, 46, 64, '-', 0, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'b'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'c'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'b',
    name: 'd'
  },
  {
    data: [10, 20, 150, 0, '-', 50, 10],
    type: 'bar',
    stack: 'b',
    name: 'e'
  }
];
const stackInfo = {};
for (let i = 0; i < series[0].data.length; ++i) {
  for (let j = 0; j < series.length; ++j) {
    const stackName = series[j].stack;
    if (!stackName) {
      continue;
    }
    if (!stackInfo[stackName]) {
      stackInfo[stackName] = {
        stackStart: [],
        stackEnd: []
      };
    }
    const info = stackInfo[stackName];
    const data = series[j].data[i];
    if (data && data !== '-') {
      if (info.stackStart[i] == null) {
        info.stackStart[i] = j;
      }
      info.stackEnd[i] = j;
    }
  }
}
for (let i = 0; i < series.length; ++i) {
  const data = series[i].data;
  const info = stackInfo[series[i].stack];
  for (let j = 0; j < series[i].data.length; ++j) {
    // const isStart = info.stackStart[j] === i;
    const isEnd = info.stackEnd[j] === i;
    const topBorder = isEnd ? 20 : 0;
    const bottomBorder = 0;
    data[j] = {
      value: data[j],
      itemStyle: {
        borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
      }
    };
  }
}
option = {
  xAxis: {
    type: 'category',
    data: ['Yesterday', 'Curr Week', 'Prev Week', 'Curr Month']
  },
  yAxis: {
    type: 'value'
  },
  series: series
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

document.querySelector(".menu_button").addEventListener("click", function() {
  myChart.resize();
});
  }

  var _echartshr2ChartDashboard = function () {
    var dom = document.getElementById('hr2');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

var series = [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    stack: 'a',
    name: 'a'
  },
  {
    data: [10, 46, 64, '-', 0, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'b'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'c'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'b',
    name: 'd'
  },
  {
    data: [10, 20, 150, 0, '-', 50, 10],
    type: 'bar',
    stack: 'b',
    name: 'e'
  }
];
const stackInfo = {};
for (let i = 0; i < series[0].data.length; ++i) {
  for (let j = 0; j < series.length; ++j) {
    const stackName = series[j].stack;
    if (!stackName) {
      continue;
    }
    if (!stackInfo[stackName]) {
      stackInfo[stackName] = {
        stackStart: [],
        stackEnd: []
      };
    }
    const info = stackInfo[stackName];
    const data = series[j].data[i];
    if (data && data !== '-') {
      if (info.stackStart[i] == null) {
        info.stackStart[i] = j;
      }
      info.stackEnd[i] = j;
    }
  }
}
for (let i = 0; i < series.length; ++i) {
  const data = series[i].data;
  const info = stackInfo[series[i].stack];
  for (let j = 0; j < series[i].data.length; ++j) {
    // const isStart = info.stackStart[j] === i;
    const isEnd = info.stackEnd[j] === i;
    const topBorder = isEnd ? 20 : 0;
    const bottomBorder = 0;
    data[j] = {
      value: data[j],
      itemStyle: {
        borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
      }
    };
  }
}
option = {
  xAxis: {
    type: 'category',
    data: ['Yesterday', 'Curr Week', 'Prev Week', 'Curr Month']
  },
  yAxis: {
    type: 'value'
  },
  series: series
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

document.querySelector(".menu_button").addEventListener("click", function() {
  myChart.resize();
});
  }

  var _echartshr3ChartDashboard = function () {
    var dom = document.getElementById('hr3');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

var series = [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    stack: 'a',
    name: 'a'
  },
  {
    data: [10, 46, 64, '-', 0, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'b'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'c'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'b',
    name: 'd'
  },
  {
    data: [10, 20, 150, 0, '-', 50, 10],
    type: 'bar',
    stack: 'b',
    name: 'e'
  }
];
const stackInfo = {};
for (let i = 0; i < series[0].data.length; ++i) {
  for (let j = 0; j < series.length; ++j) {
    const stackName = series[j].stack;
    if (!stackName) {
      continue;
    }
    if (!stackInfo[stackName]) {
      stackInfo[stackName] = {
        stackStart: [],
        stackEnd: []
      };
    }
    const info = stackInfo[stackName];
    const data = series[j].data[i];
    if (data && data !== '-') {
      if (info.stackStart[i] == null) {
        info.stackStart[i] = j;
      }
      info.stackEnd[i] = j;
    }
  }
}
for (let i = 0; i < series.length; ++i) {
  const data = series[i].data;
  const info = stackInfo[series[i].stack];
  for (let j = 0; j < series[i].data.length; ++j) {
    // const isStart = info.stackStart[j] === i;
    const isEnd = info.stackEnd[j] === i;
    const topBorder = isEnd ? 20 : 0;
    const bottomBorder = 0;
    data[j] = {
      value: data[j],
      itemStyle: {
        borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
      }
    };
  }
}
option = {
  xAxis: {
    type: 'category',
    data: ['Yesterday', 'Curr Week', 'Prev Week', 'Curr Month']
  },
  yAxis: {
    type: 'value'
  },
  series: series
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

document.querySelector(".menu_button").addEventListener("click", function() {
  myChart.resize();
});
  }

  var _echartshr4ChartDashboard = function () {
    var dom = document.getElementById('hr4');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

var series = [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    stack: 'a',
    name: 'a'
  },
  {
    data: [10, 46, 64, '-', 0, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'b'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'c'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'b',
    name: 'd'
  },
  {
    data: [10, 20, 150, 0, '-', 50, 10],
    type: 'bar',
    stack: 'b',
    name: 'e'
  }
];
const stackInfo = {};
for (let i = 0; i < series[0].data.length; ++i) {
  for (let j = 0; j < series.length; ++j) {
    const stackName = series[j].stack;
    if (!stackName) {
      continue;
    }
    if (!stackInfo[stackName]) {
      stackInfo[stackName] = {
        stackStart: [],
        stackEnd: []
      };
    }
    const info = stackInfo[stackName];
    const data = series[j].data[i];
    if (data && data !== '-') {
      if (info.stackStart[i] == null) {
        info.stackStart[i] = j;
      }
      info.stackEnd[i] = j;
    }
  }
}
for (let i = 0; i < series.length; ++i) {
  const data = series[i].data;
  const info = stackInfo[series[i].stack];
  for (let j = 0; j < series[i].data.length; ++j) {
    // const isStart = info.stackStart[j] === i;
    const isEnd = info.stackEnd[j] === i;
    const topBorder = isEnd ? 20 : 0;
    const bottomBorder = 0;
    data[j] = {
      value: data[j],
      itemStyle: {
        borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
      }
    };
  }
}
option = {
  xAxis: {
    type: 'category',
    data: ['Yesterday', 'Curr Week', 'Prev Week', 'Curr Month']
  },
  yAxis: {
    type: 'value'
  },
  series: series
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

document.querySelector(".menu_button").addEventListener("click", function() {
  myChart.resize();
});
  }

  var _echartshr5ChartDashboard = function () {
    var dom = document.getElementById('hr5');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

var series = [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    stack: 'a',
    name: 'a'
  },
  {
    data: [10, 46, 64, '-', 0, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'b'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'c'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'b',
    name: 'd'
  },
  {
    data: [10, 20, 150, 0, '-', 50, 10],
    type: 'bar',
    stack: 'b',
    name: 'e'
  }
];
const stackInfo = {};
for (let i = 0; i < series[0].data.length; ++i) {
  for (let j = 0; j < series.length; ++j) {
    const stackName = series[j].stack;
    if (!stackName) {
      continue;
    }
    if (!stackInfo[stackName]) {
      stackInfo[stackName] = {
        stackStart: [],
        stackEnd: []
      };
    }
    const info = stackInfo[stackName];
    const data = series[j].data[i];
    if (data && data !== '-') {
      if (info.stackStart[i] == null) {
        info.stackStart[i] = j;
      }
      info.stackEnd[i] = j;
    }
  }
}
for (let i = 0; i < series.length; ++i) {
  const data = series[i].data;
  const info = stackInfo[series[i].stack];
  for (let j = 0; j < series[i].data.length; ++j) {
    // const isStart = info.stackStart[j] === i;
    const isEnd = info.stackEnd[j] === i;
    const topBorder = isEnd ? 20 : 0;
    const bottomBorder = 0;
    data[j] = {
      value: data[j],
      itemStyle: {
        borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
      }
    };
  }
}
option = {
  xAxis: {
    type: 'category',
    data: ['Yesterday', 'Curr Week', 'Prev Week', 'Curr Month']
  },
  yAxis: {
    type: 'value'
  },
  series: series
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

document.querySelector(".menu_button").addEventListener("click", function() {
  myChart.resize();
});
  }

  var _echartshr6ChartDashboard = function () {
    var dom = document.getElementById('hr6');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

var series = [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    stack: 'a',
    name: 'a'
  },
  {
    data: [10, 46, 64, '-', 0, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'b'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'c'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'b',
    name: 'd'
  },
  {
    data: [10, 20, 150, 0, '-', 50, 10],
    type: 'bar',
    stack: 'b',
    name: 'e'
  }
];
const stackInfo = {};
for (let i = 0; i < series[0].data.length; ++i) {
  for (let j = 0; j < series.length; ++j) {
    const stackName = series[j].stack;
    if (!stackName) {
      continue;
    }
    if (!stackInfo[stackName]) {
      stackInfo[stackName] = {
        stackStart: [],
        stackEnd: []
      };
    }
    const info = stackInfo[stackName];
    const data = series[j].data[i];
    if (data && data !== '-') {
      if (info.stackStart[i] == null) {
        info.stackStart[i] = j;
      }
      info.stackEnd[i] = j;
    }
  }
}
for (let i = 0; i < series.length; ++i) {
  const data = series[i].data;
  const info = stackInfo[series[i].stack];
  for (let j = 0; j < series[i].data.length; ++j) {
    // const isStart = info.stackStart[j] === i;
    const isEnd = info.stackEnd[j] === i;
    const topBorder = isEnd ? 20 : 0;
    const bottomBorder = 0;
    data[j] = {
      value: data[j],
      itemStyle: {
        borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
      }
    };
  }
}
option = {
  xAxis: {
    type: 'category',
    data: ['Yesterday', 'Curr Week', 'Prev Week', 'Curr Month']
  },
  yAxis: {
    type: 'value'
  },
  series: series
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

document.querySelector(".menu_button").addEventListener("click", function() {
  myChart.resize();
});
  }

  var _echartshr7ChartDashboard = function () {
    var dom = document.getElementById('hr7');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

var series = [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    stack: 'a',
    name: 'a'
  },
  {
    data: [10, 46, 64, '-', 0, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'b'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'c'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'b',
    name: 'd'
  },
  {
    data: [10, 20, 150, 0, '-', 50, 10],
    type: 'bar',
    stack: 'b',
    name: 'e'
  }
];
const stackInfo = {};
for (let i = 0; i < series[0].data.length; ++i) {
  for (let j = 0; j < series.length; ++j) {
    const stackName = series[j].stack;
    if (!stackName) {
      continue;
    }
    if (!stackInfo[stackName]) {
      stackInfo[stackName] = {
        stackStart: [],
        stackEnd: []
      };
    }
    const info = stackInfo[stackName];
    const data = series[j].data[i];
    if (data && data !== '-') {
      if (info.stackStart[i] == null) {
        info.stackStart[i] = j;
      }
      info.stackEnd[i] = j;
    }
  }
}
for (let i = 0; i < series.length; ++i) {
  const data = series[i].data;
  const info = stackInfo[series[i].stack];
  for (let j = 0; j < series[i].data.length; ++j) {
    // const isStart = info.stackStart[j] === i;
    const isEnd = info.stackEnd[j] === i;
    const topBorder = isEnd ? 20 : 0;
    const bottomBorder = 0;
    data[j] = {
      value: data[j],
      itemStyle: {
        borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
      }
    };
  }
}
option = {
  xAxis: {
    type: 'category',
    data: ['Yesterday', 'Curr Week', 'Prev Week', 'Curr Month']
  },
  yAxis: {
    type: 'value'
  },
  series: series
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

document.querySelector(".menu_button").addEventListener("click", function() {
  myChart.resize();
});
  }

  var _echartshr8ChartDashboard = function () {
    var dom = document.getElementById('hr8');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

var series = [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    stack: 'a',
    name: 'a'
  },
  {
    data: [10, 46, 64, '-', 0, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'b'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'c'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'b',
    name: 'd'
  },
  {
    data: [10, 20, 150, 0, '-', 50, 10],
    type: 'bar',
    stack: 'b',
    name: 'e'
  }
];
const stackInfo = {};
for (let i = 0; i < series[0].data.length; ++i) {
  for (let j = 0; j < series.length; ++j) {
    const stackName = series[j].stack;
    if (!stackName) {
      continue;
    }
    if (!stackInfo[stackName]) {
      stackInfo[stackName] = {
        stackStart: [],
        stackEnd: []
      };
    }
    const info = stackInfo[stackName];
    const data = series[j].data[i];
    if (data && data !== '-') {
      if (info.stackStart[i] == null) {
        info.stackStart[i] = j;
      }
      info.stackEnd[i] = j;
    }
  }
}
for (let i = 0; i < series.length; ++i) {
  const data = series[i].data;
  const info = stackInfo[series[i].stack];
  for (let j = 0; j < series[i].data.length; ++j) {
    // const isStart = info.stackStart[j] === i;
    const isEnd = info.stackEnd[j] === i;
    const topBorder = isEnd ? 20 : 0;
    const bottomBorder = 0;
    data[j] = {
      value: data[j],
      itemStyle: {
        borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
      }
    };
  }
}
option = {
  xAxis: {
    type: 'category',
    data: ['Yesterday', 'Curr Week', 'Prev Week', 'Curr Month']
  },
  yAxis: {
    type: 'value'
  },
  series: series
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

document.querySelector(".menu_button").addEventListener("click", function() {
  myChart.resize();
});
  }

  var _echartsProductionDining1ChartDashboard = function () {
    var dom = document.getElementById('opsSchedule1');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;
    
    const gaugeData = [
      {
        value: 20,
        name: 'Good',
        title: {
          offsetCenter: ['-40%', '80%']
        },
        detail: {
          offsetCenter: ['-40%', '95%']
        }
      },

      {
        value: 60,
        name: 'Perfect',
        title: {
          offsetCenter: ['40%', '80%']
        },
        detail: {
          offsetCenter: ['40%', '95%']
        }
      }
    ];
    option = {
      series: [
        {
          type: 'gauge',
          anchor: {
            show: true,
            showAbove: true,
            size: 18,
            itemStyle: {
              color: '#FAC858'
            }
          },
          pointer: {
            icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
            width: 4,
            length: '80%',
            offsetCenter: [0, '8%']
          },
          progress: {
            show: true,
            overlap: true,
            roundCap: true
          },
          axisLine: {
            roundCap: true
          },
          data: gaugeData,
          title: {
            fontSize: 10
          },
          detail: {
            width: 18,
            height: 10,
            fontSize: 10,
            color: '#fff',
            backgroundColor: 'inherit',
            borderRadius: 3,
            formatter: '{value}%'
          }
        }
      ]
    };
    setInterval(function () {
      gaugeData[0].value = +(Math.random() * 100).toFixed(2);
      gaugeData[1].value = +(Math.random() * 100).toFixed(2);
      gaugeData[2].value = +(Math.random() * 100).toFixed(2);
      myChart.setOption({
        series: [
          {
            data: gaugeData
          }
        ]
      });
    }, 2000);
    
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
    
    document.querySelector(".menu_button").addEventListener("click", function() {
      myChart.resize();
    });

  }

  var _echartsProductionDining2ChartDashboard = function () {
    var dom = document.getElementById('opsSchedule2');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;
    
    const gaugeData = [
      {
        value: 20,
        name: 'Good',
        title: {
          offsetCenter: ['-40%', '80%']
        },
        detail: {
          offsetCenter: ['-40%', '95%']
        }
      },

      {
        value: 60,
        name: 'Perfect',
        title: {
          offsetCenter: ['40%', '80%']
        },
        detail: {
          offsetCenter: ['40%', '95%']
        }
      }
    ];
    option = {
      series: [
        {
          type: 'gauge',
          anchor: {
            show: true,
            showAbove: true,
            size: 18,
            itemStyle: {
              color: '#FAC858'
            }
          },
          pointer: {
            icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
            width: 4,
            length: '80%',
            offsetCenter: [0, '8%']
          },
          progress: {
            show: true,
            overlap: true,
            roundCap: true
          },
          axisLine: {
            roundCap: true
          },
          data: gaugeData,
          title: {
            fontSize: 10
          },
          detail: {
            width: 18,
            height: 10,
            fontSize: 10,
            color: '#fff',
            backgroundColor: 'inherit',
            borderRadius: 3,
            formatter: '{value}%'
          }
        }
      ]
    };
    setInterval(function () {
      gaugeData[0].value = +(Math.random() * 100).toFixed(2);
      gaugeData[1].value = +(Math.random() * 100).toFixed(2);
      gaugeData[2].value = +(Math.random() * 100).toFixed(2);
      myChart.setOption({
        series: [
          {
            data: gaugeData
          }
        ]
      });
    }, 2000);
    
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
    
    document.querySelector(".menu_button").addEventListener("click", function() {
      myChart.resize();
    });
  }

  var _echartsProductionDiningOU1ChartDashboard = function () {
    var dom5 = document.getElementById('opsScheduleOU1');
    var myChart5 = echarts.init(dom5, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app5 = {};
    
    var option5;
    
    const gaugeData = [
      {
        value: 20,
        name: 'Perfect',
        title: {
          offsetCenter: ['0%', '-50%']
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '-35%']
        }
      },
      {
        value: 40,
        name: 'Good',
        title: {
          offsetCenter: ['0%', '-10%']
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '5%']
        }
      },
      {
        value: 60,
        name: 'Commonly',
        title: {
          offsetCenter: ['0%', '30%']
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '45%']
        }
      }
    ];
    option5 = {
      series: [
        {
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 1,
              borderColor: '#464646'
            }
          },
          axisLine: {
            lineStyle: {
              width: 15
            }
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            distance: 50
          },
          data: gaugeData,
          title: {
            fontSize: 8
          },
          detail: {
            width: 40,
            height: 2,
            fontSize: 8,
            color: 'inherit',
            borderColor: 'inherit',
            borderRadius: 20,
            borderWidth: 1,
            formatter: '{value}%'
          }
        }
      ]
    };
    setInterval(function () {
      gaugeData[0].value = +(Math.random5() * 100).toFixed(2);
      gaugeData[1].value = +(Math.random5() * 100).toFixed(2);
      gaugeData[2].value = +(Math.random5() * 100).toFixed(2);
      myChart5.setOption({
        series: [
          {
            data: gaugeData,
            pointer: {
              show: false
            }
          }
        ]
      });
    }, 2000);
    
    if (option5 && typeof option5 === 'object') {
      myChart5.setOption(option5);
    }
    
    window.addEventListener('resize', myChart5.resize);
    
    if (option5 && typeof option5 === 'object') {
      myChart5.setOption(option5);
    }
    
    window.addEventListener('resize', function () {
      myChart5.resize();
    });
    
    document.querySelector(".menu_button").addEventListener("click", function() {
      myChart5.resize();
    });
  }

  var _echartsProductionDiningOU2ChartDashboard = function () {
    var dom5 = document.getElementById('opsScheduleOU2');
    var myChart5 = echarts.init(dom5, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app5 = {};
    
    var option5;
    
    const gaugeData = [
      {
        value: 20,
        name: 'Perfect',
        title: {
          offsetCenter: ['0%', '-50%']
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '-35%']
        }
      },
      {
        value: 40,
        name: 'Good',
        title: {
          offsetCenter: ['0%', '-10%']
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '5%']
        }
      },
      {
        value: 60,
        name: 'Commonly',
        title: {
          offsetCenter: ['0%', '30%']
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '45%']
        }
      }
    ];
    option5 = {
      series: [
        {
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 1,
              borderColor: '#464646'
            }
          },
          axisLine: {
            lineStyle: {
              width: 15
            }
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            distance: 50
          },
          data: gaugeData,
          title: {
            fontSize: 8
          },
          detail: {
            width: 40,
            height: 2,
            fontSize: 8,
            color: 'inherit',
            borderColor: 'inherit',
            borderRadius: 20,
            borderWidth: 1,
            formatter: '{value}%'
          }
        }
      ]
    };
    setInterval(function () {
      gaugeData[0].value = +(Math.random5() * 100).toFixed(2);
      gaugeData[1].value = +(Math.random5() * 100).toFixed(2);
      gaugeData[2].value = +(Math.random5() * 100).toFixed(2);
      myChart5.setOption({
        series: [
          {
            data: gaugeData,
            pointer: {
              show: false
            }
          }
        ]
      });
    }, 2000);
    
    if (option5 && typeof option5 === 'object') {
      myChart5.setOption(option5);
    }
    
    window.addEventListener('resize', myChart5.resize);
    
    if (option5 && typeof option5 === 'object') {
      myChart5.setOption(option5);
    }
    
    window.addEventListener('resize', function () {
      myChart5.resize();
    });
    
    document.querySelector(".menu_button").addEventListener("click", function() {
      myChart5.resize();
    });
  }









  return {
    init: function () {
      _echartsguestA1ChartDashboard();
      _echartsguestA2ChartDashboard();
      _echartsguestA3ChartDashboard();
      _echartshr1ChartDashboard();
      _echartshr2ChartDashboard();
      _echartshr3ChartDashboard();
      _echartshr4ChartDashboard();
      _echartshr5ChartDashboard();
      _echartshr6ChartDashboard();
      _echartshr7ChartDashboard();
      _echartshr8ChartDashboard();
      _echartsProductionDining1ChartDashboard();
      _echartsProductionDining2ChartDashboard();
      _echartsProductionDiningOU1ChartDashboard();
      _echartsProductionDiningOU2ChartDashboard();
    }
  }
  }();
  
  document.addEventListener('DOMContentLoaded', function () {
    guestComfortDashboard.init();
  });