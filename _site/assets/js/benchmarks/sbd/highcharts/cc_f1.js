$(function () {
    $(document).ready(function() {


    	      (function (H) {
    var aWidth = 30, aCap = 15, aHead = 90, bottomMargin = 70, rightMargin = 80, delta = 8;          
    var gAnnotation = function(Ax,Ay,Bx,By,Tx,Ty,Tfi, opts, rnd, objects) {
        if (!opts) return;
        var ar = rnd.path(drawArrow(Ax, Ay, Bx, By, aWidth, aCap, aHead));
        ar.attr({stroke: 'black','stroke-width': 2}).add();
        objects.push(ar);
        if (opts.text) {
            var txt = rnd.text(opts.text, Tx, Ty);
            txt.attr({'text-anchor': "middle", "rotation":Tfi}).css({'font-size': '16px'}).add();
            objects.push(txt);
        }
    };
    var drawArrow = function(sX,sY,eX,eY,width,cap,head) {
        var fwdX = eX - sX, fwdY = eY - sY;
        var len = Math.sqrt(fwdX*fwdX + fwdY*fwdY);
        fwdX /= len; fwdY /= len;
        var ortX = fwdY, ortY = -fwdX;
        return [
            'M', sX - ortX*width/2, sY - ortY*width/2,
            'L', sX + ortX*width/2, sY + ortY*width/2,
            'L', sX + ortX*width/2 + fwdX*(len-head), sY + ortY*width/2 + fwdY*(len-head),
            'L', sX + ortX*(width/2+cap) + fwdX*(len-head), sY + ortY*(width/2+cap) + fwdY*(len-head),
            'L', eX, eY,
            'L', sX - ortX*(width/2+cap) + fwdX*(len-head), sY - ortY*(width/2+cap) + fwdY*(len-head),
            'L', sX - ortX*(width/2) + fwdX*(len-head), sY - ortY*(width/2) + fwdY*(len-head),
            'L', sX - ortX*(width/2) , sY - ortY*(width/2) ,
        ];
    };
    H.wrap(H.Chart.prototype, 'getAxisMargins', function (proceed) {
        var opts = this.userOptions.annotation;
        if( opts ) {
            if( opts.yAxis ) {
                this.marginRight +=rightMargin;
            }
            if( opts.xAxis ) {
                this.marginBottom +=bottomMargin;
            }
        }
        proceed.apply(this, Array.prototype.slice.call(arguments, 1));
    });
    H.wrap(H.Chart.prototype, 'drawChartBox', function (proceed) {
        var rnd = this.renderer;
        if (this.annotation !== undefined) {
            this.annotation.forEach(function(it) { it.destroy() } )
        }
        this.annotation = [];
        proceed.apply(this, Array.prototype.slice.call(arguments, 1));
        if(!this.userOptions.annotation) return;
        gAnnotation(
            this.plotLeft, this.plotTop + this.plotHeight + 80,
            this.plotLeft + this.plotWidth, this.plotTop + this.plotHeight + 80,
            this.plotLeft + this.plotWidth / 2, this.plotTop + this.plotHeight+80 + 4, 0,
            this.userOptions.annotation.xAxis, rnd, this.annotation
        );
        gAnnotation(
            this.plotLeft + this.plotWidth + 50, this.plotTop + this.plotHeight,
            this.plotLeft + this.plotWidth + 50, this.plotTop,
            this.plotLeft + this.plotWidth + 50 + 4, this.plotTop + this.plotHeight/2, 270,
            this.userOptions.annotation.yAxis, rnd, this.annotation);
    });
                
    }(Highcharts));

 		Highcharts.chart('container_perf', {
 		credits: {
                           enabled: true,
                           href: "https://videoprocessing.ai/benchmarks/",
                           text: "https://videoprocessing.ai/benchmarks/"},

		title: {
		    text: ''
		},

		    yAxis: {
		        title: {
		            text: 'F1 score'
		        }
		    },

		    xAxis: {
		    		title: {
		        		text: '# of MSU CC video'
		        },
		        accessibility: {
		            rangeDescription: 'Range: 1 to 11'
		        }
		    },

		    legend: {
		        layout: 'vertical',
		        align: 'right',
		        verticalAlign: 'middle'
		    },

		    plotOptions: {
		        series: {
		            label: {
		                connectorAllowed: false
		            },
		            pointStart: 1
		        }
		    },

		    series: [{
		        name: 'PyScene',
		        //marker: { fillColor: '#BF0B23', radius: 4 },
		        data: [1.0, 0.3333333333333333, 0.9, 0.2857142857142857, 0.6666666666666665, 0.8, 0.5454545454545454, 0.08333333333333333, 0.02469135802469136, 0.5, 1.0, 0.1111111111111111, 0.25, 0.33333333333333337, 1.0, 1.0, 0.5714285714285715, 0.4, 0.631578947368421, 0.8, 0.03508771929824561, 0.4, 0.5185185185185186, 0.8571428571428571, 1.0, 0.19047619047619044, 0.6666666666666666, 0.5, 0.34285714285714286, 0.823529411764706, 0.25, 0, 0.6153846153846154, 0.008968609865470852, 0.3333333333333333, 0.4, 0.6, 0.5333333333333333, 0.2222222222222222, 0.3333333333333333, 1.0, 0.6190476190476191, 0.5454545454545454, 0.5, 0.4, 0.7272727272727272, 0.8421052631578948]
		    }, {
		        name: 'VQMT',
		        data: [0.7936923188583141, 0.169519451871594, 0.7530233361694966, 0.9034748159812649, 0.22420781764100592, 0.8511130043668037, 0.7262291979432643, 0.5415122415461467, 0.8534226543514069, 0.9245979926602651, 0.8615994730980925, 0.8741608476316511, 0.8658931508593649, 0.8251799868055003, 0.8042400563549283, 0.8114254177030538, 0.8997846253318886, 0.5137756343885809, 0.4767127030692527, 0.8272111017202367, 0.824323398207105, 0.14707897147153454, 0.45416133771196154, 0.8074322089074566, 0.793231687427113, 0.12395103472774559, 0.8928698900704499, 0.17995209886876207, 0.4033381896035421, 0.6383158751349544, 0.8379869078247291, 0.4623581426383577, 0.6352454220895734, 0.897273261658467, 0.549589651659551, 0.35807362647371, 0.6237484918493913, 0.8035582489912498, 0.8311208155538907, 0.6292010839178461, 0.8806128114715539, 0.4759985051139777, 0.38193938532563215, 0.35963902677710785, 0.2235117871889398, 0.6887217346579336, 0.7600096367618943]
		    }, {
		        name: 'Saeid Dadkhan',
		        data: [0.8888888888888888, 0.3555555555555555, 0.9, 1.0, 0.4285714285714285, 1.0, 0.923076923076923, 0.6666666666666666, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.6666666666666666, 0.6666666666666667, 1.0, 1.0, 0, 0.5517241379310344, 1.0, 1.0, 0.28571428571428575, 1.0, 0.33333333333333337, 0.5333333333333333, 0.823529411764706, 1.0, 0.5555555555555556, 0.9, 1.0, 0.8, 0.5, 0.75, 0.8717948717948718,1.0, 0.8, 1.0, 0.6, 0.5714285714285714, 0.5, 0.33333333333333337, 0.923076923076923, 0.9333333333333333]
		    }
		    
		    ],

		    responsive: {
		        rules: [{
		            condition: {
		                maxWidth: 5000
		            },
		            chartOptions: {legend:{layout:'horizontal',align:'center',verticalAlign:'bottom'} 
		            }
		        }]
		    }

		});
    });

});