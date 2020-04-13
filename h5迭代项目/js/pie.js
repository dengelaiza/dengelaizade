(function () {
	var pie = {
		init() { //初始化
			this.getData();
			this.option = {   //放的是两个图表的相同的配置
				title: {
					text: '',
					subtext: '纯属虚构',
					left: 'center'
				},
				legend: {
					data: [],
					orient:'vertical',
					left:'left',
				},
				tooltip:{
					formatter:'{a} <br/>{b} : {c} ({d}%)',
				},
				series: {
					name: '',
					type: 'pie',
					data: [],
					radius:'55%',
					center:['50%','60%'],
					itemStyle:{
						emphasis:{
							shadowBlur:10,
							shadowColor:'rgba(0,0,0,.5)',
						}
					}
				}
			}
		},
		getData() {  //获取数据
			var This = this;

			$.ajax({
				url: 'http://api.duyiedu.com/api/student/findAll?appkey=kaivon_1574822824764',
				success: function (data) {
					console.log(data);
					var list = JSON.parse(data).data;

					if (list.length > 0) {
						This.areaChart(list);
						This.sexChart(list);
					} else {
						alert('亲，没有数据哦~');
					}
				}
			});
		},
		areaChart(data) {    //第一个图表
			var myChart = echarts.init($('.areaChart')[0]);
			var legendData = [];
			var seriesData = [];

			/*
				{"address":"超市","appkey":"kaivon_1574822824764","birth":1978,"ctime":1581421736,"email":"dajiao@qq.com","id":45489,"name":"谢大脚","phone":"13000000000","sNo":"0007","sex":0,"utime":1585839120}

				legendData:['超市','广坤家','佛山',...]
				seriesData:[ { name: '超市', value: 3 }, { name: '广坤家', value: 5 }, ...]

				newData={'超市' : 3, '广坤家' : 5 }
			 */
			var newData={};
			data.forEach(function(item){
				if(!newData[item.address]){
					newData[item.address]=1;
					legendData.push(item.address);
				}else{
					newData[item.address]++;
				}
			});

			//console.log(legendData);

			for(var prop in newData){
				seriesData.push({
					name:prop,
					value:newData[prop],
				})
			}
			console.log(seriesData);

			this.option.title.text='渡一教育学生地区分布统计';
			this.option.legend.data=legendData;
			this.option.series.name='地区分布';
			this.option.series.data=seriesData;

			myChart.setOption(this.option);
		},
		sexChart(data) {     //第二个图表
			var myChart = echarts.init($('.sexChart')[0]);
			var legendData = ['男','女'];

			var newData={};
			data.forEach(function(item){
				if(!newData[item.sex]){
					newData[item.sex]=1;
				}else{
					newData[item.sex]++;
				}
			});

			console.log(newData);

			var seriesData = [
				{ name:'男', value:newData[0] },
				{ name:'女', value:newData[1] }
			];

			this.option.title.text='渡一教育学生性别统计';
			this.option.legend.data=legendData;
			this.option.series.name='性别分布';
			this.option.series.data=seriesData;

			myChart.setOption(this.option);
		}
	}

	pie.init();
})();