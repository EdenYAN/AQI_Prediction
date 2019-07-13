
$(function () {
echarts_1();
echarts_2();
echarts_4();
//echarts_31();
//echarts_32();
//echarts_33();
echarts_5();
echarts_6();
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '4%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['万寿西宫', '东四', '农展馆', '古城', '天坛', '奥体中心'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [
		{
        type: 'bar',
        data: [102.94, 82.27, 105.68, 101.70, 103.41, 103.48],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }
		
	]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow'}
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '4%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['官园', '定102陵', '怀柔镇', '昌平镇', '海淀区万柳', '顺义新城'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [
		{
       
        type: 'bar',
        data: [99.09,95.91,87.69,88.78,99.59,105.62],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#27d08a',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }
		
	]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

    option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
		    legend: {
    top:'0%',
        data:['石家庄','广州'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    grid: {
        left: '10',
		top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.2)'
			}

        },

   data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '12']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: '石家庄',
        type: 'line',
         smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#FF4500',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 132, 213, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1, 132, 213, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#FF4500',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [124.11,68.15,81.44,59.11,53.24,44.09,64.09,26.67,88.11,107.40,155.87,251.87]

    }, 
{
        name: '广州',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#00d887',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 216, 135, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 216, 135, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#00d887',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [59.78,54.94,33.78,38.58,25.70,20.22,27.61,36.87,39.95,43.37,37.02,41.65]

    }, 
	
		 ]

};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

    option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
		    legend: {
    top:'0%',
        data:['石家庄','广州'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    grid: {
        left: '10',
		top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.2)'
			}

        },

   data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '12']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: '石家庄',
        type: 'line',
         smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#FF4500',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 132, 213, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1, 132, 213, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#FF4500',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [159.02,98.66,131.46,103.87,90.75,79.27,96.14,53.16,126.74,144.45,206.23,273.47]

    }, 
{
        name: '广州',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#00d887',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 216, 135, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 216, 135, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#00d887',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [82.70,75.52,51.61,60.44,43.53,38.50,47.42,59.56,61.47,65.59,58.25,60.99]

    }, 
	
		 ]

};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_6() {
	
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

    option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
		    legend: {
    top:'0%',
        data:['广州'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    grid: {
        left: '10',
		top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.2)'
			}

        },

   data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '12',
		 '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23','24']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: '广州',
        type: 'line',
         smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#0184d5',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 132, 213, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1, 132, 213, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#0184d5',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [14,15,16,19,15,16,20,13,18,12,13,13,13,11,10,8,12,11,10,11,10,11,11,13]

    }, ]

};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
//	********************************************
//function echarts_31() {
//        // 基于准备好的dom，初始化echarts实例
//        var myChart = echarts.init(document.getElementById('fb1')); 
//option = {
//   
//	    title: [{
//        text: '年龄分布',
//        left: 'center',
//        textStyle: {
//            color: '#fff',
//			fontSize:'16'
//        }
//
//    }],
//    tooltip: {
//        trigger: 'item',
//        formatter: "{a} <br/>{b}: {c} ({d}%)",
//position:function(p){   //其中p为当前鼠标的位置
//            return [p[0] + 10, p[1] - 10];
//        }
//    },
//    legend: {
//        
//top:'70%',
//       itemWidth: 10,
//        itemHeight: 10,
//        data:['0岁以下','20-29岁','30-39岁','40-49岁','50岁以上'],
//                textStyle: {
//            color: 'rgba(255,255,255,.5)',
//			fontSize:'12',
//        }
//    },
//    series: [
//        {
//        	name:'年龄分布',
//            type:'pie',
//			center: ['50%', '42%'],
//            radius: ['40%', '60%'],
//                  color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
//            label: {show:false},
//			labelLine: {show:false},
//            data:[
//                {value:1, name:'0岁以下'},
//                {value:4, name:'20-29岁'},
//                {value:2, name:'30-39岁'},
//                {value:2, name:'40-49岁'},
//                {value:1, name:'50岁以上'},
//            ]
//        }
//    ]
//};
//      
//        // 使用刚指定的配置项和数据显示图表。
//        myChart.setOption(option);
//        window.addEventListener("resize",function(){
//            myChart.resize();
//        });
//    }
//function echarts_32() {
//        // 基于准备好的dom，初始化echarts实例
//        var myChart = echarts.init(document.getElementById('fb2'));
//option = {
//   
//	    title: [{
//        text: '职业分布',
//        left: 'center',
//        textStyle: {
//            color: '#fff',
//			fontSize:'16'
//        }
//
//    }],
//    tooltip: {
//        trigger: 'item',
//        formatter: "{a} <br/>{b}: {c} ({d}%)",
//position:function(p){   //其中p为当前鼠标的位置
//            return [p[0] + 10, p[1] - 10];
//        }
//    },
//    legend: {
//        
//    top:'70%',
//       itemWidth: 10,
//        itemHeight: 10,
//        data:['电子商务','教育','IT/互联网','金融','学生','其他'],
//                textStyle: {
//           color: 'rgba(255,255,255,.5)',
//			fontSize:'12',
//        }
//    },
//    series: [
//        {
//        	name:'年龄分布',
//            type:'pie',
//			center: ['50%', '42%'],
//            radius: ['40%', '60%'],
//            color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
//            label: {show:false},
//			labelLine: {show:false},
//            data:[
//                {value:5, name:'电子商务'},
//                {value:1, name:'教育'},
//                {value:6, name:'IT/互联网'},
//                {value:2, name:'金融'},
//                {value:1, name:'学生'},
//                {value:1, name:'其他'},
//            ]
//        }
//    ]
//};
//      
//        // 使用刚指定的配置项和数据显示图表。
//        myChart.setOption(option);
//        window.addEventListener("resize",function(){
//            myChart.resize();
//        });
//    }
//function echarts_33() {
//        // 基于准备好的dom，初始化echarts实例
//        var myChart = echarts.init(document.getElementById('fb3'));
//option = {
//	    title: [{
//        text: '兴趣分布',
//        left: 'center',
//        textStyle: {
//            color: '#fff',
//			fontSize:'16'
//        }
//
//    }],
//    tooltip: {
//        trigger: 'item',
//        formatter: "{a} <br/>{b}: {c} ({d}%)",
//position:function(p){   //其中p为当前鼠标的位置
//            return [p[0] + 10, p[1] - 10];
//        }
//    },
//    legend: {
//    top:'70%',
//       itemWidth: 10,
//        itemHeight: 10,
//        data:['汽车','旅游','财经','教育','软件','其他'],
//                textStyle: {
//            color: 'rgba(255,255,255,.5)',
//			fontSize:'12',
//        }
//    },
//    series: [
//        {
//        	name:'兴趣分布',
//            type:'pie',
//			center: ['50%', '42%'],
//            radius: ['40%', '60%'],
//                   color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
//            label: {show:false},
//			labelLine: {show:false},
//            data:[
//                {value:2, name:'汽车'},
//                {value:3, name:'旅游'},
//                {value:1, name:'财经'},
//                {value:4, name:'教育'},
//                {value:8, name:'软件'},
//                {value:1, name:'其他'},
//            ]
//        }
//    ]
//};
//      
//        // 使用刚指定的配置项和数据显示图表。
//        myChart.setOption(option);
//        window.addEventListener("resize",function(){
//            myChart.resize();
//        });
//    }
				
	
})



		
		
		


		









