$(function () {
    $(document).ready(function() {

      //(function (H) {    var aWidth = 30, aCap = 15, aHead = 90, bottomMargin = 0, rightMargin = 0, delta = 0;              var gAnnotation = function(Ax,Ay,Bx,By,Tx,Ty,Tfi, opts, rnd, objects) {        if (!opts) return;        var ar = rnd.path(drawArrow(Ax, Ay, Bx, By, aWidth, aCap, aHead));        ar.attr({stroke: 'black','stroke-width': 2}).add();        objects.push(ar);        if (opts.text) {            var txt = rnd.text(opts.text, Tx, Ty);            txt.attr({'text-anchor': "middle", "rotation":Tfi}).css({'font-size': '16px'}).add();            objects.push(txt);        }    };    var drawArrow = function(sX,sY,eX,eY,width,cap,head) {        var fwdX = eX - sX, fwdY = eY - sY;        var len = Math.sqrt(fwdX*fwdX + fwdY*fwdY);        fwdX /= len; fwdY /= len;        var ortX = fwdY, ortY = -fwdX;        return [            'M', sX - ortX*width/2, sY - ortY*width/2,            'L', sX + ortX*width/2, sY + ortY*width/2,            'L', sX + ortX*width/2 + fwdX*(len-head), sY + ortY*width/2 + fwdY*(len-head),            'L', sX + ortX*(width/2+cap) + fwdX*(len-head), sY + ortY*(width/2+cap) + fwdY*(len-head),            'L', eX, eY,            'L', sX - ortX*(width/2+cap) + fwdX*(len-head), sY - ortY*(width/2+cap) + fwdY*(len-head),            'L', sX - ortX*(width/2) + fwdX*(len-head), sY - ortY*(width/2) + fwdY*(len-head),            'L', sX - ortX*(width/2) , sY - ortY*(width/2) ,        ];    };    H.wrap(H.Chart.prototype, 'getAxisMargins', function (proceed) {        var opts = this.userOptions.annotation;        if( opts ) {            if( opts.yAxis ) {                this.marginRight +=rightMargin;            }            if( opts.xAxis ) {                this.marginBottom +=bottomMargin;            }        }        proceed.apply(this, Array.prototype.slice.call(arguments, 1));    });    H.wrap(H.Chart.prototype, 'drawChartBox', function (proceed) {        var rnd = this.renderer;        if (this.annotation !== undefined) {            this.annotation.forEach(function(it) { it.destroy() } )        }        this.annotation = [];        proceed.apply(this, Array.prototype.slice.call(arguments, 1));        if(!this.userOptions.annotation) return;        gAnnotation(            this.plotLeft, this.plotTop + this.plotHeight + 80,            this.plotLeft + this.plotWidth, this.plotTop + this.plotHeight + 80,            this.plotLeft + this.plotWidth / 2, this.plotTop + this.plotHeight+80 + 4, 0,            this.userOptions.annotation.xAxis, rnd, this.annotation        );        gAnnotation(            this.plotLeft + this.plotWidth + 50, this.plotTop + this.plotHeight,            this.plotLeft + this.plotWidth + 50, this.plotTop,            this.plotLeft + this.plotWidth + 50 + 4, this.plotTop + this.plotHeight/2, 270,            this.userOptions.annotation.yAxis, rnd, this.annotation);    });                    }(Highcharts));


	Highcharts.chart('container_perf',{
		chart:{zoomType:'xy'},title:{text:''},
		credits: {enabled: true,href: "https://videoprocessing.ai/benchmarks/", text: "https://videoprocessing.ai/benchmarks/"},
		//annotation: {yAxis: {text: "Better"}},
		yAxis:{title:{text:'F1score'}},
		xAxis:{title:{text:'# of RAI video'},accessibility:{rangeDescription:'Range:1to11'}},
		legend:{layout:'vertical',align:'right',verticalAlign:'middle'},
		plotOptions:{series:{label:{connectorAllowed:false},pointStart:1}},
		series:[
			{
				name:'VQMT',
				data:[0.5666,0.6964,0.88,0.9911,0.9090,0.9902,0.9581,0.8934,0.7659,0.8]},
			{
				name:'SaeidDadkhan',
				data:[0.742,0.8311,0.8912,0.9434,0.9465,0.9471,0.9523,0.9512,0.9412,0.9554]},
			{
				name:'MaxReimann',
				data:[0.731,0.8021,0.8410,0.8732,0.9123,0.9171,0.9023,0.9012,0.9112,0.8254]},
			{
				name:'PyScene',
				data:[0.6992342,0.759343,0.8593434,0.897435,0.95238462,0.913847534,0.90239,0.892324,0.93242,0.852942]}, 
			{
				name:'aysebil',
				data: [0.6438,0.68778,0.820754,0.944444,0.8704,0.98076,0.90721,0.8957,0.7254,0.69603]},
			{
				name: 'FFmpeg',
				data: [0.7492342, 0.7934563, 0.85345345, 0.9325734, 0.9137684, 0.943974, 0.969834, 0.89346583, 0.8638453, 0.893294]},
			{
				name: 'johnmathe',
				data: [0.71206742, 0.73077026, 0.84063617, 0.88179441, 0.88363621, 0.88184748, 0.87517, 0.86631, 0.8689, 0.815774]},
			{
				name: 'NITS-CV-Lab-v1.0',
				data: [0.8925, 0.94028, 0.90034, 0.942024, 0.98424, 0.97205, 0.97298, 0.970482, 0.972058, 0.87045]
			},
			{
				name: 'PyScene-v2',
				data: [0.74867994, 0.76684582, 0.8651124, 0.91535444, 0.91398201,0.91218539, 0.91471565, 0.91094329, 0.91594643, 0.87460284]
			},
			{
				name: 'GStreamer',
				data: [0.6000521889849082, 0.6207642700437609, 0.8005415583047835, 0.9532070908340751, 0.8803474067015276, 0.9284978307802938, 0.9296629661877678, 0.844043090395559, 0.6588977404694774, 0.6855386495385498]
			},
			],
		responsive: {rules:[{condition:{maxWidth:1200},chartOptions:{legend:{layout:'horizontal',align:'center',verticalAlign:'bottom'}}}]}});

    });

});
