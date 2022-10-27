$(function () {
    $(document).ready(function() {
    //(function (H) {    var aWidth = 30, aCap = 15, aHead = 90, bottomMargin = 0, rightMargin = 0, delta = 8;              var gAnnotation = function(Ax,Ay,Bx,By,Tx,Ty,Tfi, opts, rnd, objects) {        if (!opts) return;        var ar = rnd.path(drawArrow(Ax, Ay, Bx, By, aWidth, aCap, aHead));        ar.attr({stroke: 'black','stroke-width': 2}).add();        objects.push(ar);        if (opts.text) {            var txt = rnd.text(opts.text, Tx, Ty);            txt.attr({'text-anchor': "middle", "rotation":Tfi}).css({'font-size': '16px'}).add();            objects.push(txt);        }    };    var drawArrow = function(sX,sY,eX,eY,width,cap,head) {        var fwdX = eX - sX, fwdY = eY - sY;        var len = Math.sqrt(fwdX*fwdX + fwdY*fwdY);        fwdX /= len; fwdY /= len;        var ortX = fwdY, ortY = -fwdX;        return [            'M', sX - ortX*width/2, sY - ortY*width/2,            'L', sX + ortX*width/2, sY + ortY*width/2,            'L', sX + ortX*width/2 + fwdX*(len-head), sY + ortY*width/2 + fwdY*(len-head),            'L', sX + ortX*(width/2+cap) + fwdX*(len-head), sY + ortY*(width/2+cap) + fwdY*(len-head),            'L', eX, eY,            'L', sX - ortX*(width/2+cap) + fwdX*(len-head), sY - ortY*(width/2+cap) + fwdY*(len-head),            'L', sX - ortX*(width/2) + fwdX*(len-head), sY - ortY*(width/2) + fwdY*(len-head),            'L', sX - ortX*(width/2) , sY - ortY*(width/2) ,        ];    };    H.wrap(H.Chart.prototype, 'getAxisMargins', function (proceed) {        var opts = this.userOptions.annotation;        if( opts ) {            if( opts.yAxis ) {                this.marginRight +=rightMargin;            }            if( opts.xAxis ) {                this.marginBottom +=bottomMargin;            }        }        proceed.apply(this, Array.prototype.slice.call(arguments, 1));    });    H.wrap(H.Chart.prototype, 'drawChartBox', function (proceed) {        var rnd = this.renderer;        if (this.annotation !== undefined) {            this.annotation.forEach(function(it) { it.destroy() } )        }        this.annotation = [];        proceed.apply(this, Array.prototype.slice.call(arguments, 1));        if(!this.userOptions.annotation) return;        gAnnotation(            this.plotLeft, this.plotTop + this.plotHeight + 80,            this.plotLeft + this.plotWidth, this.plotTop + this.plotHeight + 80,            this.plotLeft + this.plotWidth / 2, this.plotTop + this.plotHeight+80 + 4, 0,            this.userOptions.annotation.xAxis, rnd, this.annotation        );        gAnnotation(            this.plotLeft + this.plotWidth + 50, this.plotTop + this.plotHeight,            this.plotLeft + this.plotWidth + 50, this.plotTop,            this.plotLeft + this.plotWidth + 50 + 4, this.plotTop + this.plotHeight/2, 270,            this.userOptions.annotation.yAxis, rnd, this.annotation);    });                    }(Highcharts));

    Highcharts.chart('container_res', {
        credits: {
                           enabled: true,
                           href: "https://videoprocessing.ai/benchmarks/",
                           text: "https://videoprocessing.ai/benchmarks/"},
        title: {
            text: ''
        },
        //annotation: {yAxis: {text: "Better"}},

        yAxis: {
            title: {
                text: 'F1'
            }
        },

        xAxis: {
        		title: {
            		text: ''
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            floating: false,
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: true
                }, 
                pointStart: 0
            }
        },

        series: [{
            name: 'VQMT',
            data: [[1280, 0.823],[854,  0.821],[640,  0.815],[360,  0.811]]
        },
        {
            name: 'Saeid Dadkhan',
            data: [[1280, 0.864],[854,  0.861],[640,  0.860],[360,  0.847]]
        }, {
            name: 'MaxReimann',
            data: [[1280, 0.804],[854,  0.801],[640,  0.798],[360,  0.766]]
        }, {
            name: 'FFmpeg',
            data: [[1280, 0.834],[854,  0.831],[640,  0.828],[360,  0.819]]
        } , {
            name: 'NITS-CV-Lab-v1.0',
            data: [[1280, 0.891],[854,  0.889],[640,  0.878],[360,  0.859]]
        } 
        ],
        });


    });

});
