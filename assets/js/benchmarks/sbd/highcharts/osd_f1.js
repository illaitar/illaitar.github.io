$(function () {
    $(document).ready(function() {

      //(function (H) {    var aWidth = 30, aCap = 15, aHead = 90, bottomMargin = 0, rightMargin = 0, delta = 0;              var gAnnotation = function(Ax,Ay,Bx,By,Tx,Ty,Tfi, opts, rnd, objects) {        if (!opts) return;        var ar = rnd.path(drawArrow(Ax, Ay, Bx, By, aWidth, aCap, aHead));        ar.attr({stroke: 'black','stroke-width': 2}).add();        objects.push(ar);        if (opts.text) {            var txt = rnd.text(opts.text, Tx, Ty);            txt.attr({'text-anchor': "middle", "rotation":Tfi}).css({'font-size': '16px'}).add();            objects.push(txt);        }    };    var drawArrow = function(sX,sY,eX,eY,width,cap,head) {        var fwdX = eX - sX, fwdY = eY - sY;        var len = Math.sqrt(fwdX*fwdX + fwdY*fwdY);        fwdX /= len; fwdY /= len;        var ortX = fwdY, ortY = -fwdX;        return [            'M', sX - ortX*width/2, sY - ortY*width/2,            'L', sX + ortX*width/2, sY + ortY*width/2,            'L', sX + ortX*width/2 + fwdX*(len-head), sY + ortY*width/2 + fwdY*(len-head),            'L', sX + ortX*(width/2+cap) + fwdX*(len-head), sY + ortY*(width/2+cap) + fwdY*(len-head),            'L', eX, eY,            'L', sX - ortX*(width/2+cap) + fwdX*(len-head), sY - ortY*(width/2+cap) + fwdY*(len-head),            'L', sX - ortX*(width/2) + fwdX*(len-head), sY - ortY*(width/2) + fwdY*(len-head),            'L', sX - ortX*(width/2) , sY - ortY*(width/2) ,        ];    };    H.wrap(H.Chart.prototype, 'getAxisMargins', function (proceed) {        var opts = this.userOptions.annotation;        if( opts ) {            if( opts.yAxis ) {                this.marginRight +=rightMargin;            }            if( opts.xAxis ) {                this.marginBottom +=bottomMargin;            }        }        proceed.apply(this, Array.prototype.slice.call(arguments, 1));    });    H.wrap(H.Chart.prototype, 'drawChartBox', function (proceed) {        var rnd = this.renderer;        if (this.annotation !== undefined) {            this.annotation.forEach(function(it) { it.destroy() } )        }        this.annotation = [];        proceed.apply(this, Array.prototype.slice.call(arguments, 1));        if(!this.userOptions.annotation) return;        gAnnotation(            this.plotLeft, this.plotTop + this.plotHeight + 80,            this.plotLeft + this.plotWidth, this.plotTop + this.plotHeight + 80,            this.plotLeft + this.plotWidth / 2, this.plotTop + this.plotHeight+80 + 4, 0,            this.userOptions.annotation.xAxis, rnd, this.annotation        );        gAnnotation(            this.plotLeft + this.plotWidth + 50, this.plotTop + this.plotHeight,            this.plotLeft + this.plotWidth + 50, this.plotTop,            this.plotLeft + this.plotWidth + 50 + 4, this.plotTop + this.plotHeight/2, 270,            this.userOptions.annotation.yAxis, rnd, this.annotation);    });                    }(Highcharts));


	Highcharts.chart('container_perf',{
		chart:{zoomType:'xy'},title:{text:''},
		credits: {enabled: true,href: "https://videoprocessing.ai/benchmarks/", text: "https://videoprocessing.ai/benchmarks/"},
		//annotation: {yAxis: {text: "Better"}},
		yAxis:{title:{text:'F1score'}},
		xAxis:{title:{text:'# of MSU SBD Dataset video'},accessibility:{rangeDescription:'Range:1to11'}},
		legend:{layout:'vertical',align:'right',verticalAlign:'middle'},
		plotOptions:{series:{label:{connectorAllowed:false},pointStart:1}},
		
		series:[{
		        name: 'VQMT',
		        data: [0.48270993766043264, 0.30975609756097561, 0.6889952153110048, 0.5696539485359361, 0.6956521739130435, 0.6847554444841127, 0.650375939849624, 0.7730061349693251, 0.7338582677165355, 0.6111111111111112, 0.6418604651162791, 0.7696879643387816, 0.809931506849315, 0.791044776119403, 0.8228699551569507, 0.7955418908531898, 0.8296296296296296, 0.8674031272, 0.9064995]
		   }, {
		        name: 'Saeid Dadkhan',
		        data: [0.5870938074800736, 0.834065934065934, 0.51958041958041953, 0.6913946587537093, 0.7136929460580912, 0.6698117, 0.8051948051948051, 0.6345381526104418, 0.5899814471243043, 0.6524064171122995, 0.6781115879828327, 0.7466666666666667, 0.7556427870461236, 0.7899159663865547, 0.7216783216783217, 0.7828418230563003, 0.8, 0.6910299226, 0.68769707]
		   }, {
		        name: 'aysebil',
		        data: [0.5961322 , 0.60570873, 0.76126971, 0.50533491, 0.65770508, 0.54395604, 0.7177766 , 0.72946172, 0.68943206, 0.66697292,       0.72509141, 0.76821407, 0.76296744, 0.81114527, 0.8127255 ,       0.72163317, 0.81029378, 0.77015757, 0.88542934]
		   }, {
		        name: 'PyScene',
		        data: [0.56426595, 0.77241379, 0.69432314, 0.48869258, 0.61244378, 0.56385542, 0.66455696, 0.68863262, 0.63432532, 0.62303231,       0.68382353, 0.71900826, 0.72151899, 0.75294118, 0.74690849,       0.67773167, 0.75030157, 0.70044053, 0.83646113]
		   }, {
		        name: 'MaxReimann',
		        data: [0.61022417, 0.73055184, 0.6945955 , 0.45903603, 0.61283251,       0.45041171, 0.62602303, 0.70398584, 0.61525012, 0.64653419,       0.67017378, 0.751000659, 0.72885958, 0.73579548, 0.74172801,       0.67431455, 0.73165382, 0.71846761, 0.83952039]
		   }, {
		        name: 'FFmpeg',
		        data: [0.16290902553038475,0.3, 0.4891304347826087, 0.3953791731151891, 0.7237354085603113, 0.7038796516231196, 0.6313868613138686, 0.6756756756756757, 0.6822742474916388, 0.6336633663366337, 0.7682539682539684, 0.8052902277736957, 0.8112014453477868, 0.7571428571428571, 0.8004866180048661, 0.7935590421139556, 0.7803030303030304, 0.9008042895442359, 0.8661417322834645]
		   }, {
		        name: 'johnmathe',
		        data: [0.612734 , 0.652034, 0.55028, 0.6004843, 0.614834, 0.602834, 0.699034 , 0.710438, 0.71048, 0.7001844,0.7592342, 0.7742340, 0.790342, 0.770124, 0.7603423, 0.7571284234, 0.803527, 0.81342, 0.8510348]
		   }, {
		        name: 'NITS-CV-Lab-v1.0',
		        data: [0.6234, 0.67234, 0.711023, 0.731423, 0.74324, 0.78120, 0.747304, 0.760184, 0.81023, 0.861046, 0.881048, 0.891037, 0.9014728, 0.872034, 0.861056,0.850284, 0.860147,0.901765,0.862948]
		   }, {
		   		name: 'PyScene-v2',
		   		data: [0.63691029, 0.71665026, 0.7029029 , 0.56759617, 0.63066166, 0.61275789, 0.66046725, 0.69334487, 0.6257147 , 0.66712766, 0.70361533, 0.75522261, 0.71957032, 0.74944564, 0.78720707, 0.72465614, 0.73851438, 0.74521347, 0.84930441]
		   }, {
		   		name: 'GStreamer',
		   		data: [0.5314803553727989, 0.614364771479436, 0.6936259983793442, 0.4644912649582619, 0.593918977464945, 0.4780038340095487, 0.681281946392631, 0.7508518900451056, 0.6515926932625188, 0.6133479966706654, 0.7302380994409507, 0.7318727345622258, 0.7131371236787646, 0.7769518741132405, 0.8012259019164243, 0.6870509358421464, 0.7611821224870086, 0.7263441199157024, 0.8298460776948201]
		   }
		   
   		],
		responsive: {
			rules:[
				{
					condition:{maxWidth:1200},
					chartOptions:{
						legend:{layout:'horizontal',align:'center',verticalAlign:'bottom'}
					}
				}]
		}});

    });

});
