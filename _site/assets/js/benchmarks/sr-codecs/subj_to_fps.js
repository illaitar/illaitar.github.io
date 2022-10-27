$(function () {
    (function (H) {
        var aWidth = 25, aCap = 15, aHead = 80, bottomMargin = 74, rightMargin = 80, delta = 8;          
        var gAnnotation = function(Ax,Ay,Bx,By,Tx,Ty,Tfi, opts, rnd, objects) {
            if (!opts) return;
            if (opts.text != "Faster" && opts.text != "Smaller bitrate") return;
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
        var drawArrow = function(sX,eY,eX,sY,width,cap,head) {
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
                    this.marginRight =rightMargin;
                }
                if( opts.xAxis ) {
                    this.marginBottom =bottomMargin;
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
    $(document).ready(function() {
        Highcharts.chart('time', {
            chart: {
                type: 'scatter',
                zoomType: 'xy',
                height: 500,
            },
            annotation: {
                xAxis: {
                    text: "Faster"
                },
                yAxis: {
                    text: "Smaller bitrate"
                }
            },
            title: {
                text: 'Speed/BSQ-rate trade-off'
            },
            subtitle: {
                text: 'Test case: Codec: x264, video: cuphead'
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Frames Per Second'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true,
                //type: 'logarithmic',
            },
            yAxis: {
                title: {
                    text: 'BSQ-rate over Subjective score'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -70,
                y: 70,
                floating: true,
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
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: 'FPS: {point.x}, BSQ-rate: {point.y}'
                    }
                }
            },
            credits:{
                "enabled":true,
                "href":"https://videoprocessing.ai/",
                "text":"videoprocessing.ai",
                "position":{
                    "align":"right",
                    "x": -85,
                    "verticalAlign":"bottom",
                    "y":-130,
                    "alignTo":"plotBox"
                },
                "style" : {
                    "fontSize" : "16px"
                }
            },
            series: [{
                name: "ahq-11",
                data: [[3.571, 0.435]]
            },{
                name: "RealSR",
                data: [[2.26, 0.360]]
            },{
                name: "BasicVSR",
                data: [[1.85, 0.782]]
            },{
                name: "COMISR",
                data: [[1.613, 0.450]]
            },{
                name: "Real-ESRGAN",
                data: [[1.39, 0.381]]
            },{
                name: "SOF-VSR-BI",
                data: [[0.73, 0.818]]
            },{
                name: "SwinIR",
                data: [[0.575, 0.349]]
            },{
                name: "VRT",
                data: [[0.101, 0.691]]
            },{
                name: "RBPN",
                data: [[0.087, 0.743]]
            }]

            //bar_options.title.text = "BSQ-rate, Sequence: " + print_video_to_name[video_select.selectedIndex] + ", Codec: x264, Metric: Subjective assessment";
            //bar_options.subtitle.text = "";
            //bar_options.series.push({name: '', data: array});
            //bar_options.xAxis.categories = labels;
        	//bar_options.yAxis.title.text = "BSQ-rate (Subjective assessment)";
        });		
    });
});
