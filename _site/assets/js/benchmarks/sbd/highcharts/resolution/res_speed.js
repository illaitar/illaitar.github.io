$(function () {
    $(document).ready(function() {

    	//(function (H) {    var aWidth = 30, aCap = 15, aHead = 90, bottomMargin = 0, rightMargin = 0, delta = 8;              var gAnnotation = function(Ax,Ay,Bx,By,Tx,Ty,Tfi, opts, rnd, objects) {        if (!opts) return;        var ar = rnd.path(drawArrow(Ax, Ay, Bx, By, aWidth, aCap, aHead));        ar.attr({stroke: 'black','stroke-width': 2}).add();        objects.push(ar);        if (opts.text) {            var txt = rnd.text(opts.text, Tx, Ty);            txt.attr({'text-anchor': "middle", "rotation":Tfi}).css({'font-size': '16px'}).add();            objects.push(txt);        }    };    var drawArrow = function(sX,sY,eX,eY,width,cap,head) {        var fwdX = eX - sX, fwdY = eY - sY;        var len = Math.sqrt(fwdX*fwdX + fwdY*fwdY);        fwdX /= len; fwdY /= len;        var ortX = fwdY, ortY = -fwdX;        return [            'M', sX - ortX*width/2, sY - ortY*width/2,            'L', sX + ortX*width/2, sY + ortY*width/2,            'L', sX + ortX*width/2 + fwdX*(len-head), sY + ortY*width/2 + fwdY*(len-head),            'L', sX + ortX*(width/2+cap) + fwdX*(len-head), sY + ortY*(width/2+cap) + fwdY*(len-head),            'L', eX, eY,            'L', sX - ortX*(width/2+cap) + fwdX*(len-head), sY - ortY*(width/2+cap) + fwdY*(len-head),            'L', sX - ortX*(width/2) + fwdX*(len-head), sY - ortY*(width/2) + fwdY*(len-head),            'L', sX - ortX*(width/2) , sY - ortY*(width/2) ,        ];    };    H.wrap(H.Chart.prototype, 'getAxisMargins', function (proceed) {        var opts = this.userOptions.annotation;        if( opts ) {            if( opts.yAxis ) {                this.marginRight +=rightMargin;            }            if( opts.xAxis ) {                this.marginBottom +=bottomMargin;            }        }        proceed.apply(this, Array.prototype.slice.call(arguments, 1));    });    H.wrap(H.Chart.prototype, 'drawChartBox', function (proceed) {        var rnd = this.renderer;        if (this.annotation !== undefined) {            this.annotation.forEach(function(it) { it.destroy() } )        }        this.annotation = [];        proceed.apply(this, Array.prototype.slice.call(arguments, 1));        if(!this.userOptions.annotation) return;        gAnnotation(            this.plotLeft, this.plotTop + this.plotHeight + 80,            this.plotLeft + this.plotWidth, this.plotTop + this.plotHeight + 80,            this.plotLeft + this.plotWidth / 2, this.plotTop + this.plotHeight+80 + 4, 0,            this.userOptions.annotation.xAxis, rnd, this.annotation        );        gAnnotation(            this.plotLeft + this.plotWidth + 50, this.plotTop + this.plotHeight,            this.plotLeft + this.plotWidth + 50, this.plotTop,            this.plotLeft + this.plotWidth + 50 + 4, this.plotTop + this.plotHeight/2, 270,            this.userOptions.annotation.yAxis, rnd, this.annotation);    });                    }(Highcharts));
    	
    	Highcharts.chart('container_res', {
    		credits: {
                           enabled: true,
                           href: "https://videoprocessing.ai/benchmarks/",
                           text: "https://videoprocessing.ai/benchmarks/"},
		    chart: {
		        zoomType: 'xy'
		    },
		    title: {
		        text: ''
		    },
		    annotation: {xAxis: {text: "Better"}},
		    xAxis: {
		        title: {
		            enabled: true,
		            text: 'Speed (fr/sec)'
		        } 
		        //min: 0.1
		    },
		    yAxis: {
		        title: {
		            text: 'Resolution (width of frame)'
		        }
		    },
		    legend: {
		        layout: 'vertical',
		        align: 'right',
		        verticalAlign: 'middle',
		        floating: false,
		        backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
		        borderWidth: 1
		    },
		    plotOptions: {
		        scatter: {
		            marker: {
		                radius: 5,
		                states: {
		                    hover: {
		                        enabled: true,
		                        lineColor: 'rgb(100,100,100)'
		                    }
		                }
		            },
		        series: {
		            label: {
		                connectorAllowed: true
		            }
		        },
		            states: {
		                hover: {
		                    marker: {
		                        enabled: true
		                    }
		                }
		            }
		        }
		    },
		    series: [ 
		    {
		        name: 'VQMT',
		        data: [[80, 1280], [110, 854], [131, 640], [182, 426]]
		    },
		    {
		        name: 'Saeid Dadkhan',
		        data: [[68, 1280], [98, 854], [122, 640], [152, 426]]
		    },
		    {
		        name: 'MaxReimann',
		        data: [[55, 1280], [66, 854], [73, 640], [84, 426]]
		    },
		    {
		        name: 'FFmpeg',
		        data: [[85, 1280], [119, 854], [137, 640], [193, 426]]
		    },
		    {
		        name: 'NITS-CV-Lab-v1.0',
		        data: [[16, 1280], [25, 854], [31, 640], [42, 426]]
		    }
		]}
		);

    });

});
