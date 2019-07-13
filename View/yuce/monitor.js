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

//接入机型占比

var COLOR = {
	MACHINE:{
		TYPE_A:'#0175EE',
		TYPE_B:'#D89446',
		TYPE_C:'#373693',
		TYPE_D:'#25AE4F',
		TYPE_E:'#06B5C6',
		TYPE_F:'#009E9A',
		TYPE_G:'#AC266F'
	}
};

function renderLegend(){
	drawLegend(COLOR.MACHINE.TYPE_A,25,'优');
	drawLegend(COLOR.MACHINE.TYPE_B,50,'良');
	drawLegend(COLOR.MACHINE.TYPE_C,75,'轻度污染');
	drawLegend(COLOR.MACHINE.TYPE_D,100,'中度污染');
	drawLegend(COLOR.MACHINE.TYPE_E,125,'重度污染');
	drawLegend(COLOR.MACHINE.TYPE_F,150,'严重污染');
}

function drawLegend(pointColor,pointY,text){
	var ctx = $("#layer03_left_01 canvas").get(0).getContext("2d");
	ctx.beginPath();
	ctx.arc(20,pointY,6,0,2*Math.PI);
	ctx.fillStyle = pointColor;
	ctx.fill();
	ctx.font='20px';
	ctx.fillStyle = '#FEFFFE';
	ctx.fillText(text,40,pointY+3);
}


//存储
function renderLayer03Right(){
	drawLayer03Right($("#layer03_right_chart01 canvas").get(0),"#027825",0.66);
	drawLayer03Right($("#layer03_right_chart02 canvas").get(0),"#006DD6",0.52);
	drawLayer03Right($("#layer03_right_chart03 canvas").get(0),"#238681",0.34);
}

function drawLayer03Right(canvasObj,colorValue,rate){
	var ctx = canvasObj.getContext("2d");
    
	var circle = {
        x : 65,    //圆心的x轴坐标值
        y : 80,    //圆心的y轴坐标值
        r : 60      //圆的半径
    };

	//画扇形
	//ctx.sector(circle.x,circle.y,circle.r,1.5*Math.PI,(1.5+rate*2)*Math.PI);
	//ctx.fillStyle = colorValue;
	//ctx.fill();

	ctx.beginPath();
	ctx.arc(circle.x,circle.y,circle.r,0,Math.PI*2)
	ctx.lineWidth = 10;
	ctx.strokeStyle = '#052639';
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(circle.x,circle.y,circle.r,1.5*Math.PI,(1.5+rate*2)*Math.PI)
	ctx.lineWidth = 10;
	ctx.lineCap = 'round';
	ctx.strokeStyle = colorValue;
	ctx.stroke();
	ctx.closePath();
    
	ctx.fillStyle = 'white';
	ctx.font = '20px Calibri';
	ctx.fillText(rate*100+'%',circle.x-15,circle.y+10);

}


function renderChartBar01(){
	var myChart = echarts.init(document.getElementById("layer03_left_02"));
		myChart.setOption(
					 {
						title : {
							text: '',
							subtext: '',
							x:'center'
						},
						tooltip : {
							trigger: 'item',
							formatter: "{b} : {c} ({d}%)"
						},
						legend: {
							show:false,
							x : 'center',
							y : 'bottom',
							data:['优','良','轻度污染','中度污染','重度污染','严重污染']
						},
						toolbox: {
						},
						label:{
							normal:{
								show: true, 
								formatter: "{b} \n{d}%"
							} 
						},
						calculable : true,
						color:[COLOR.MACHINE.TYPE_A,COLOR.MACHINE.TYPE_B,COLOR.MACHINE.TYPE_C,COLOR.MACHINE.TYPE_D,COLOR.MACHINE.TYPE_E,COLOR.MACHINE.TYPE_F,COLOR.MACHINE.TYPE_G],
						series : [
							{
								name:'',
								type:'pie',
								radius : [40, 80],
								center : ['50%', '50%'],
								//roseType : 'area',
								data:[
									{value:5, name:'优'},
									{value:7, name:'良'},
									{value:5, name:'轻度污染'},
									{value:5, name:'中度污染'},
									{value:6, name:'重度污染'},
									{value:2, name:'严重污染'}
								]
							}
						]
					}
		);

}

function renderLayer04Left(){
	var myChart = echarts.init(document.getElementById("layer04_left_chart"));
	var hours = ['0时','1时','2时','3时','4时','5时','6时','7时','8时','9时','10时','11时',
		'12时','13时','14时','15时','16时','17时','18时','19时','20时','21时','22时','23时']
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
				data : hours,
				axisLabel:{
					textStyle:{
						color:"white", //刻度颜色
						fontSize:12 //刻度大小
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
						fontSize:15  //刻度大小
						}
				},
				axisLine:{
					show:true,
					lineStyle:{
						color: '#0B3148',
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
					data:[47, 53, 60, 54, 91, 91, 91,91,91,90,97,100,100,
						100,109.38,108,88,88,87,78.89,79,76,49,49]
				}
			]
		}
	
	);
}

function renderLayer04Right(){
	var myChart = echarts.init(document.getElementById("layer04_right_chart"));
	var hours = ['0时','1时','2时','3时','4时','5时','6时','7时','8时','9时','10时','11时',
		'12时','13时','14时','15时','16时','17时','18时','19时','20时','21时','22时','23时']
	myChart.setOption({
			title: {
				text: ''
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				height:10,
				right:5,
				textStyle:{
					color:'white'
				},
				orient:'vertical',
				data:[
						{name:'万寿西宫',icon:'circle'},
						{name:'定陵',icon:'circle'},
						{name:'东四',icon:'circle'},
					{name:'天坛',icon:'circle'},
					{name:'农展馆',icon:'circle'},
					{name:'官园',icon:'circle'},
					{name:'海淀区万柳',icon:'circle'},
					{name:'顺义新城',icon:'circle'},
					{name:'怀柔镇',icon:'circle'},
					{name:'昌平镇',icon:'circle'},
					{name:'奥体中心',icon:'circle'},
					{name:'古城',icon:'circle'},
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
						fontSize:12  //刻度大小
						}
				},
				axisLine:{
					show:true,
					lineStyle:{
						color: '#0B3148',
						width: 1,
						type: 'solid'
					}
				},
				data: hours
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
						color: '#0B3148',
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
							name:'万寿西宫',
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
							data:[47, 48, 50, 59, 21, 21, 21,21,21,21,
								21,21,21,21,21,21,21,21,21,21,21,21,21,21
							]
						},
						{
							name:'定陵',
							type:'line',
							itemStyle : {  
									normal : {  
									color:'#006AD4'
								},
								lineStyle:{
									normal:{
									color:'#006AD4',
									opacity:1
										}
								}
							},
							data:[8, 8, 8, 8, 8, 8, 8,10,20,20,21,21.885,26,
							8,8,8,8,8,8,8,8,8,8,8]
						},
						{
							name:'东四',
							type:'line',
							itemStyle : {  
									normal : {  
									color:'#009895'
								},
								lineStyle:{
									normal:{
									color:'#009895',
									opacity:1
										}
								}
							},
							data:[46, 43, 56, 72, 79, 89, 122,149.92,149.92,130,130,
							130,130,38,38,38,38,38,38,38,38,38,38]
						},
				{
					name:'天坛',
					type:'line',
					itemStyle : {
						normal : {
							color:'#4f5596'
						},
						lineStyle:{
							normal:{
								color:'#4f5596',
								opacity:1
							}
						}
					},
					data:[38,42,43,70,19,19,19,19,19,
						19,19,19,19,19,19,19,19,19,19,19,19,19,19,19]
				},
				{
					name:'农展馆',
					type:'line',
					itemStyle : {
						normal : {
							color:'#984b50'
						},
						lineStyle:{
							normal:{
								color:'#984b50',
								opacity:1
							}
						}
					},
					data:[27.5,28,29,33.5,14.5,14.5,14.5,15.5,20.5,20.5,21,21.4425,23.5,
						14.5,14.5,14.5,14.5,14.5,14.5,14.5,14.5,14.5,14.5,14.5]
				},
				{
					name:'官园',
					type:'line',
					itemStyle : {
						normal : {
							color:'#7b981c'
						},
						lineStyle:{
							normal:{
								color:'#7b981c',
								opacity:1
							}
						}
					},
					data:[46,53,60,60,79,164,164,164,164,164,26,
						26,26,26,26,26,26,26,26,26,26,26,26,26]
				},
				{
					name:'海淀区万柳',
					type:'line',
					itemStyle : {
						normal : {
							color:'#2b9819'
						},
						lineStyle:{
							normal:{
								color:'#2b9819',
								opacity:1
							}
						}
					},
					data:[49,56,56,47,68,81,161,161,161,161,30,
						30,30,30,30,30,30,30,30,30,30,30,30,30]
				},
				{
					name:'顺义新城',
					type:'line',
					itemStyle : {
						normal : {
							color:'#601298'
						},
						lineStyle:{
							normal:{
								color:'#601298',
								opacity:1
							}
						}
					},
					data:[24,24,24,24,24,24,24,24,24,24,24,
						24,24,24,24,24,24,24,24,24,24,24,24,24]
				},
				{
					name:'怀柔镇',
					type:'line',
					itemStyle : {
						normal : {
							color:'#152498'
						},
						lineStyle:{
							normal:{
								color:'#152498',
								opacity:1
							}
						}
					},
					data:[14,14,14,14,14,14,14,14,14,14,14,14,
						14,14,14,14,14,14,14,14,14,14,14,14]
				},
				{
					name:'昌平镇',
					type:'line',
					itemStyle : {
						normal : {
							color:'#099198'
						},
						lineStyle:{
							normal:{
								color:'#099198',
								opacity:1
							}
						}
					},
					data:[65,65,65,65,72,21,21,21,21,21,21,
						21,21,21,21,21,21,21,21,21,21,21,21,21]
				},
				{
					name:'奥体中心',
					type:'line',
					itemStyle : {
						normal : {
							color:'#839813'
						},
						lineStyle:{
							normal:{
								color:'#839813',
								opacity:1
							}
						}
					},
					data:[68,68,68,68,68,18,18,18,18,18,18,18,
						18,18,18,18,18,25,25,25,25,25,25,25]
				},
				{
					name:'古城',
					type:'line',
					itemStyle : {
						normal : {
							color:'#0a9864'
						},
						lineStyle:{
							normal:{
								color:'#0a9864',
								opacity:1
							}
						}
					},
					data:[65,39,39,44,79,79,79,88,94.995,128.755,158,
						158,158,21,21,21,21,21,21,21,21,21,21,21]
				},

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