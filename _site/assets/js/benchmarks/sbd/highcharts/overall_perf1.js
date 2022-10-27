$(function(){
        
        (function (H) {
            var aWidth = 30, aCap = 15, aHead = 90, bottomMargin = 70, rightMargin = 80, delta = 8;          
            var gAnnotation = function(Ax,Ay,Bx,By,Tx,Ty,Tfi, opts, rnd, objects) {
                if (!opts) return;
                if (opts.direction && opts.direction == 'inverse') {
                    var t;
                    t = Ax; Ax = Bx; Bx = t;
                    t = Ay; Ay = By; By = t;
                }
                if (!opts.double) {
                    var ar = rnd.path(drawArrow(Ax, Ay, Bx, By, aWidth, aCap, aHead));
                    ar.attr({stroke: 'black','stroke-width': 2}).add();
                    objects.push(ar);
                    if (opts.text) {
                        var txt = rnd.text(opts.text, Tx, Ty);
                        txt.attr({'text-anchor': "middle", "rotation":Tfi}).css({'font-size': '16px'}).add();
                        objects.push(txt);
                    }
                } else {
                    var center = (Bx-Ax + delta)/2;
                    var Ax_1 = Bx, Bx_1 = Ax;
                    var ar1 = rnd.path(drawArrow(Ax_1-center, Ay, Bx_1, By, aWidth, aCap, aHead));
                    var ar2 = rnd.path(drawArrow(Ax+center, Ay, Bx, By, aWidth, aCap, aHead));
                    ar1.attr({stroke: 'black','stroke-width': 2}).add();
                    ar2.attr({stroke: 'black','stroke-width': 2}).add();
                    objects.push(ar1);
                    objects.push(ar2);
                    if (opts.text) {
                        var txt1 = rnd.text(opts.text[0], Tx-center/2, Ty);
                        var txt2 = rnd.text(opts.text[1], Tx+center/2, Ty);
                        txt1.attr({'text-anchor': "middle", "rotation":Tfi}).css({'font-size': '16px'}).add();
                        txt2.attr({'text-anchor': "middle", "rotation":Tfi}).css({'font-size': '16px'}).add();
                        objects.push(txt1);
                        objects.push(txt2);
                    }
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


        Highcharts.setOptions({"lang": {}, "global": {}});

        var option = {
            annotation: {
                xAxis: {
                    text: "Better"
                }
            },
            credits: {
                           enabled: true,
                           href: "https://videoprocessing.ai/benchmarks/",
                           text: "https://videoprocessing.ai/benchmarks/"},
            chart: {type: 'bar', renderTo: 'overall_pref_container'},
            title: {text: ''},
            xAxis: {
                categories: ['NITS-CV-Lab-v1.0', 'Saeid Dadkhan', 'PyScene-v2', 'johmathe', 'VQMT', 'aysebil', 'PyScene', 'FFmpeg', 'MaxReimann', 'GStreamer'],
                title: {text: null}
            },
            yAxis: {min: 0.67,title: {text: 'F1 score'}},
            tooltip: {valueSuffix: ''},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            legend: {
                enabled: false,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                floating: true,
                borderWidth: 1,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                shadow: true
            },
            credits: {enabled: false},
            series: [{
                name: 'F1 score',
                data: [0.8470,
                     0.7686,
                     0.7534,
                     0.7492,
                     0.7484,
                     0.7440,
                     0.7349,
                     0.7314,
                     0.7279,
                     0.7087]
            }]
        }


        var chart = new Highcharts.Chart(option);
});
