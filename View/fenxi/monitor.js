function drawLayer02Label(canvasObj,text,textBeginX,lineEndX){
	var colorValue = '#04918B';

	var ctx = canvasObj.getContext("2d");

	ctx.beginPath();
	ctx.arc(35,55,2,0,2*Math.PI);
	ctx.closePath();
	ctx.fillStyle = colorValue;
	ctx.fill();

	ctx.moveTo(35,55);
	ctx.lineTo(60,80);
	ctx.lineTo(lineEndX,80);
	ctx.lineWidth = 1;
	ctx.strokeStyle = colorValue;
	ctx.stroke();

	ctx.font='12px Georgia';
	ctx.fillStyle = colorValue;
	ctx.fillText(text,textBeginX,92);
}

//存储
function renderLayer03Right(){
	var myChart = echarts.init(document.getElementById("layer03_right_chart"));
	option = null;
	var months = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
	var data =
		[[1,142.0, 17.16], [2,73.56, 14.74], [3,87.61, 11.95], [4,90.11, 6.85], [5,101.03, 7.8],
			[6,74.97, 6.45], [7,76.17, 2.77], [8,61.72, 2.22], [9,90.53, 4.53], [10,75.58, 3.11],
			[11,75.21, 5.23], [12,69.65, 6.82]];
	option = {
		tooltip: {},
		visualMap: {
			max: 100,
			inRange: {
				color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
			}
		},
		xAxis3D: {
			type: 'category',
			data: months
		},
		yAxis3D: {
			type: 'value'
		},
		zAxis3D: {
			type: 'value'
		},
		grid3D: {
			boxWidth: 200,
			boxDepth: 80,
			viewControl: {
				// projection: 'orthographic'
			},
			light: {
				main: {
					intensity: 1.2,
					shadow: true
				},
				ambient: {
					intensity: 0.3
				}
			}
		},
		series: [{
			type: 'bar3D',
			data: data.map(function (item) {
				return {
					value: [item[0], item[1], item[2]],
				}
			}),
			shading: 'lambert',

			label: {
				textStyle: {
					fontSize: 16,
					borderWidth: 1
				}
			},

			emphasis: {
				label: {
					textStyle: {
						fontSize: 20,
						color: '#900'
					}
				},
				itemStyle: {
					color: '#900'
				}
			}
		}]
	};
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}

}




function renderChartBar01(){
	var myChart = echarts.init(document.getElementById("layer03_left_02"));
	option = null;
	var months = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
	var data =
		[[1,142.0, 67.54], [2,73.56, 46.22], [3,87.61, 49.17], [4,90.11, 48.85],
			[5,101.03, 37.41], [6,74.97, 39.03], [7,76.17, 34.72], [8,61.72, 36.19],
			[9,90.53, 53.37], [10,75.58, 46.66], [11,75.21, 54.14], [12,69.65, 51.81]];
	option = {
		tooltip: {},
		visualMap: {
			max: 100,
			inRange: {
				color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
			}
		},
		xAxis3D: {
			type: 'category',
			data: months
		},
		yAxis3D: {
			type: 'value'
		},
		zAxis3D: {
			type: 'value'
		},
		grid3D: {
			boxWidth: 200,
			boxDepth: 80,
			viewControl: {
				// projection: 'orthographic'
			},
			light: {
				main: {
					intensity: 1.2,
					shadow: true
				},
				ambient: {
					intensity: 0.3
				}
			}
		},
		series: [{
			type: 'bar3D',
			data: data.map(function (item) {
				return {
					value: [item[0], item[1], item[2]],
				}
			}),
			shading: 'lambert',

			label: {
				textStyle: {
					fontSize: 16,
					borderWidth: 1
				}
			},

			emphasis: {
				label: {
					textStyle: {
						fontSize: 20,
						color: '#900'
					}
				},
				itemStyle: {
					color: '#900'
				}
			}
		}]
	};
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}

}


function renderLayer04Left(){
	var myChart = echarts.init(document.getElementById("layer04_left_chart"));
	myChart.setOption(
		{
			title: {
				text: ''
			},
			tooltip : {
				trigger: 'axis'
			},
			legend: {
				data:[]
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '5%',
				top:'4%',
				containLabel: true
			},
			xAxis :
			{
				type : 'category',
				boundaryGap : false,
				data : getLatestDays(31),
				axisLabel:{
					textStyle:{
						color:"white", //刻度颜色
						fontSize:8  //刻度大小
					},
					rotate:45,
					interval:2
				},
				axisTick:{show:false},
				axisLine:{
					show:true,
					lineStyle:{
						color: '#0B3148',
						width: 1,
						type: 'solid'
					}
				}
			},
			yAxis : 
			{
				type : 'value',
				axisTick:{show:false},
				axisLabel:{
					textStyle:{
						color:"white", //刻度颜色
						fontSize:8  //刻度大小
						}
				},
				axisLine:{
					show:true,
					lineStyle:{
						color: '#FFFFFF',
						width: 1,
						type: 'solid'
					}
				},
				splitLine:{
					show:false
				}
			},
			tooltip:{
				formatter:'{c}',
				backgroundColor:'#FE8501'
			},
			series : [
				{
					name:'',
					type:'line',
					smooth:true,
					areaStyle:{
						normal:{
							color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#026B6F'}, {offset: 1, color: '#012138' }], false),
							opacity:0.2
						}
					},
					itemStyle : {  
                            normal : {  
                                  color:'#009991'
                            },
							lineStyle:{
								normal:{
								color:'#009895',
								opacity:1
							}
						}
                    },
					symbol:'none',
					data:[48, 52, 45, 46, 89, 120, 110,100,88,96,88,45,78,67,89,103,104,56,45,104,112,132,120,110,89,95,90,89,102,110,110]
				}
			]
		}
	
	);
}

function renderLayer04Right(){
	var myChart = echarts.init(document.getElementById("layer04_right_chart"));
	var months = ['18年1月','18年2月','18年3月','18年4月','18年5月','18年6月','18年7月','18年8月','18年9月','18年10月','18年11月','18年12月',
				 '19年1月','19年2月','19年3月','19年4月','18年5月','19年6月','19年7月','19年8月','19年9月','19年10月','19年11月','19年12月'];
	myChart.setOption({
			title: {
				text: ''
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				top:20,
				right:5,
				textStyle:{
					color:'white'
				},
				orient:'vertical',
				data:[
						{name:'AQI',icon:'circle'},

					]
			},
			grid: {
				left: '3%',
				right: '16%',
				bottom: '3%',
				top:'3%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				axisTick:{show:false},
				axisLabel:{
					textStyle:{
						color:"white", //刻度颜色
						fontSize:15  //刻度大小
						}
				},
				axisLine:{
					show:true,
					lineStyle:{
						color: '#FFFFFF',
						width: 1,
						type: 'solid'
					}
				},
				data: months
			},
			yAxis: {
				type: 'value',
				axisTick:{show:false},
				axisLabel:{
					textStyle:{
						color:"white", //刻度颜色
						fontSize:12  //刻度大小
						}
				},
				axisLine:{
					show:true,
					lineStyle:{
						color: '#FFFFFF',
						width: 1,
						type: 'solid'
					}
				},
				splitLine:{
					show:false
				}
			},
			series: [
						{
							name:'网络',
							type:'line',
							itemStyle : {  
									normal : {  
									color:'#F3891B'
								},
								lineStyle:{
									normal:{
									color:'#F3891B',
									opacity:1
										}
								}
							},  
							data:[142.0, 73.56, 87.61, 90.11, 101.03, 74.97, 76.17,61.72,90.53,75.58,75.21,69.65,
								 142.0, 73.56, 87.61, 90.11, 101.03, 74.97, 76.17,61.72,90.53,75.58,75.21,69.65]
						}
					]
		}	
	);
}

function get10MinutesScale()
{
	var currDate = new Date();
	var odd = currDate.getMinutes()%10;
	var returnArr = new Array();
	currDate.setMinutes(currDate.getMinutes()-odd);
	for(var i = 0; i <7; i++){
		returnArr.push(currDate.getHours()+":"+(currDate.getMinutes()<10?("0"+currDate.getMinutes()):currDate.getMinutes()));
		currDate.setMinutes(currDate.getMinutes()-10);
	}
	return returnArr;
}


function getLatestDays(num)
{
	var currentDay = new Date();
	var returnDays = [];
	for (var i = 0 ; i < num ; i++)
	{
		currentDay.setDate(currentDay.getDate() - 1);
		returnDays.push((currentDay.getMonth()+1)+"/"+currentDay.getDate());
	}
	return returnDays;
}