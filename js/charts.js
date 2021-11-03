//左侧柱状图1
(function (){
    //1 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    //2指定配置项和数据
    var option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          //修改x轴刻度
          axisLabel:{
            color:"rgba(255,255,255,.3)",
            fontSize:"12"
          },
          axisTick:{
              show: false  //不显示x轴刻度
          }
        },
        yAxis: {
          type: 'value',
          axisLabel:{
            color:"rgba(255,255,255,.3)",
            fontSize:"12"
          },
          //y轴分割线
          splitLine:{
            lineStyle:{
                color:"rgba(255,255,255,.1)"
            }
          }
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth:"35%",   //设置柱子的宽度
            itemStyle:{
                borderRadius:5  //设置柱子圆角
            }
          }
        ],
        color:["#2f89cf"],
        grid:{
            top:"10px",
            bottom:"10%",
            right:"0%",
            left:"8%",
        }
      };
      //3 把配置项给实例对象
      myChart.setOption(option);
      //4 让图表根据屏幕自适应
      window.addEventListener("resize",function(){
          myChart.resize();
      })
})();

//右侧柱状图2
(function(){
    //1实例化对象 
    var myChart = echarts.init(document.querySelector(".bar1 .chart"));
    //声明颜色数组
    var myColor = ["#1089E7","#F57474","#56D0E3","#F8B448","#8B78F6"]
    //2 指定配置
    var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
            top:"10px",
            bottom:"5%",
            right:"8%",
            left:"18%",
            //containLabel: true
        },
        xAxis: {
          show:false //不显示x轴
        },
        yAxis: [
          {
          type: 'category',
          inverse:true, //下面的数据是不是按顺序显示，false代表倒着显示
          data: ['Brazil',  'USA', 'India', 'China', 'World'],
          axisLine:{
            show:false  //不显示y轴线
           },
          axisTick:{
                show:false //不显示y轴刻度
           },
           axisLabel:{
               color:"#fff" //设置y轴颜色为白色
           }
          },
          {
            type: 'category',
            data: [702,350,610,791,664],
            inverse:true,
            axisLine:{
              show:false  //不显示y轴线
             },
            axisTick:{
                  show:false //不显示y轴刻度
             },
             axisLabel:{
                 color:"#fff" //设置y轴颜色为白色
             }
          }
        ],
        series: [
          {
            name: '条',
            type: 'bar',
            data: [70,34,60,78,69],
            yAxisIndex:0, //柱子的层级为0
            barWidth:"36%",
            itemStyle:{
                borderRadius:5,
                //定义柱子不同的颜色，然后根据柱子的下标返回不同的颜色
                color: function(params){
                  return myColor[params.dataIndex]
                },
            },
            //barCategoryGap:50 //修改柱子之间的距离
            label:{  //在图形上显示文本标签
                show:true,
                position:"inside", //文字显示位置是在图形里面
                formatter:"{c}%" ,  //文字显示格式  
                color:"#fff"       
            }
          },
          {
            name: '框',
            type: 'bar',
            data: [100,100,100,100,100],
            yAxisIndex:1, //框的层级为0
            barWidth:"36%",
            itemStyle:{
              color:"none",
              borderRadius:5,
              borderColor:"#00c1de"
            }
          }
        ]
      };
      //3 把配置项给实例对象
      myChart.setOption(option);
      //4 让图标自适应屏幕
      window.addEventListener("resize",function(){
        myChart.resize();
    })
})();

//左侧折线图
(function (){
  var myChart = echarts.init(document.querySelector(".line .chart"));
  var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {  //设置图例组件
      //data: ['Union Ads', 'Video Ads'],
      textStyle:{
        color:"#4c9bfd"
      },
      right:"10%"

    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show:true,  //显示边框
      borderColor:"#012f4a"

    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick:{
        show:false  //去掉x轴的刻度
      },
      axisLabel:{
        color:"#4c9bfd"
      },
      axisLine:{
        show:false
      }
    },
    yAxis: {
      type: 'value',
      axisTick:{
        show:false  //去掉x轴的刻度
      },
      axisLabel:{
        color:"#4c9bfd"
      },
      axisLine:{
        show:false
      },
      splitLine:{
        lineStyle:{
          color:"#012f4a"  //设置y轴分割线的颜色
        }     
      }
    },
    color:["#00f2f1","#ed3f35"], //设置两条曲线的颜色
    series: [
      {
        name: 'Union Ads',
        type: 'line',
        smooth:true, //折线是否平滑显示
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        smooth:true, //折线是否平滑显示
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize",function(){
    myChart.resize();
})  
})();

//右侧折线图
(function(){
  var myChart = echarts.init(document.querySelector(".line1 .chart"));
  var option = {
    tooltip: {
      trigger: 'axis',
    },
    legend:{
      textStyle:{
        color:"rgba(255,255,255,.5)",
        fontSize:"12"
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top:'10%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
               '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
               '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        axisTick:{
          show:false
        },
        axisLabel:{
          textStyle:{
            color:"rgba(255,255,255,.6)",
            fontSize:"12"
          }
        },
        axisLine:{
          lineStyle:{
            color:"rgba(255,255,255,.2)"
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        splitLine:{
          lineStyle:{
            color:"rgba(255,255,255,.1)"  //设置y轴分割线的颜色

          }     
        },
        axisTick:{
          show:false
        },
        axisLabel:{
          textStyle:{
            color:"rgba(255,255,255,.6)",
            fontSize:"12"
          }
        },
        axisLine:{
          lineStyle:{
            color:"rgba(255,255,255,.2)"
          }
        }
      },
      
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        //stack: 'Total',
        smooth:true,
        areaStyle: { //区域填充样式
          normal: {
              //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: "rgba(25,163,223,.3)"
                  },
                  {
                      offset: 1,
                      color: "rgba(25,163,223, 0)"
                  }
              ], false),
              shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
              shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
          }
      },
        emphasis: {
          focus: 'series'
        },
        data: [30,40,30,40,30,40,30,60,20,40,20,40,30,40,30,40,30,
               40,30,60,20,40,20,40,30,60,20,40,20,40]
      },
      {
        name: 'Union Ads',
        type: 'line',
       // stack: 'Total',
        smooth:true,
        areaStyle: { //区域填充样式
          normal: {
              //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: "rgba(10,219,250,.3)"
                  },
                  {
                      offset: 1,
                      color: "rgba(10,219,250, 0)"
                  }
              ], false),
              shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
              shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
          }
      },
        emphasis: {
          focus: 'series'
        },
        data: [50,30,50,60,10,50,30,50,60,40,60,40,80,30,50,60,10,
               50,30,70,20,50,10,40,50,30,70,20,50,10,40]
      },
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize",function(){
    myChart.resize();
  })
})();

//左侧饼状图
(function (){
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '0%',
      itemWidth:10, //修改小图标的宽
      itemHeight:10,  //修改小图标的高
      textStyle:{
        fontSize:"12",
        color:"rgba(255,255,255,.5)"
      }
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['50%', '70%'],  //设置内圆半径和外圆半径
        center:['50%','46%'], //设置饼图的位置，左右居中，上下46%
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize",function(){
    myChart.resize();
  })
})();

//右侧饼图
(function(){
  var myChart = echarts.init(document.querySelector(".pie1 .chart"));
  var option = {
    legend: {
      bottom:"0",
      itemWidth:10,
      itemHeight:10,
      textStyle:{
        fontSize:12,
        color:"rgba(255,255,255,.5)"
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: ['10%','60%'],
        center: ['50%', '45%'],
        label:{
          fontSize:10
        },
        roseType: 'radius',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
        ]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize",function(){
    myChart.resize();
  })
})();

//中间的飞行航线图
(function(){
  var myChart = echarts.init(document.querySelector(".center .ditu"));
  var geoCoordMap = {
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028]
};

var XAData = [
    [{name:'西安'}, {name:'沈阳',value:100}],
    [{name:'西安'}, {name:'上海',value:100}],
    [{name:'西安'}, {name:'广州',value:100}],
    [{name:'西安'}, {name:'西宁',value:100}],
    [{name:'西安'}, {name:'银川',value:100}]
];

var XNData = [
    [{name:'西宁'}, {name:'北京',value:100}],
    [{name:'西宁'}, {name:'上海',value:100}],
    [{name:'西宁'}, {name:'广州',value:100}],
    [{name:'西宁'}, {name:'西安',value:100}],
    [{name:'西宁'}, {name:'银川',value:100}]
];

var YCData = [
    [{name:'银川'}, {name:'北京',value:100}],
    [{name:'银川'}, {name:'广州',value:100}],
    [{name:'银川'}, {name:'上海',value:100}],
    [{name:'银川'}, {name:'西安',value:100}],
    [{name:'银川'}, {name:'西宁',value:100}],
];

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
//var planePath = 'arrow';
var convertData = function (data) {
    
    var res = [];
    for (var i = 0; i < data.length; i++) {
      
        var dataItem = data[i];

        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
                value: dataItem[1].value
            });
        }
    }
    return res;
     
};

var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
var series = [];
[['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function (item, i) {  
    series.push({
        name: item[0] + ' Top3',
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: 'red',   //arrow箭头的颜色
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0] + ' Top3',
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0] + ' Top3',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function (val) {
            return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i],
          },
          emphasis: {
              areaColor: '#2B91B7'
          }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});
var option = {
    tooltip : {
        trigger: 'item', 
        formatter:function(params, ticket, callback){
            if(params.seriesType=="effectScatter") {
                return "线路："+params.data.name+""+params.data.value[2];
            }else if(params.seriesType=="lines"){
                return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
            }else{
                return params.name;
            }
        } 
    },

    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: true,
                color:'#fff'
            }
        },
        zoom:1.2,
        //roam: true,
        itemStyle: {
          normal: {
              areaColor: 'rgba(20,41,87,0.6)',
              borderColor: '#195BB9',
              borderWidth: 1,
          },
          emphasis: {
              areaColor: '#2B91B7'
          }
        }
    },
    series: series
};
  myChart.setOption(option);
  window.addEventListener("resize",function(){
    myChart.resize();
  })
})();
