$(function () {
    $(document).ready(function() {

        function get_options() {
            var correlation_select = document.getElementById("selector_correlation_standards_speed");

            var correlationToName = ['spearman', 'pearson', 'kendall'];
            var correlation_name = correlationToName[correlation_select.selectedIndex];

            return correlation_name;
        }
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
        
        
        var bar_options = {
            annotation: {
                xAxis: {
                    text: "Faster"
                },
                yAxis: {
                    text: "Better"
                }
            },
            title: {text: ''},
            // subtitle: {text: ''},
            chart: {
                type: 'scatter',
                height: '60%',
                zoomType: 'xy'
            },
            legend: {
                layout: 'vertical',
                align: 'right', 
                verticalAlign: 'middle'
            },
            xAxis: {
                title: {
                    text: '<p style="font-size: 18px;">FPS</p>',
                },
                type: 'logarithmic',
                min: 2.5,
                max: 500,
                gridLineWidth: 1
            },
            tooltip: {
                valueDecimals: 4,
                formatter: function () {
                    // console.log(this);
                    if (this.series.userOptions.type == 'errorbar') {
                        return ''
                    }
                    return '<b>' + this.point.id + '</b><br/>Correlation: ' + this.y.toLocaleString(undefined, {maximumFractionDigits: 4})
                     + '<br/>FPS: ' + Math.floor(this.x) + '<br/>'
                },
            },
            yAxis: {title: {text: '<p style="font-size: 18px;">Correlation Coefficient</p>'}},
            plotOptions: {
                scatter: {  
                    dataLabels: {
                            enabled: false, 
                            format: "{y:.2f} {x:.0f}",
                            allowOverlap: true,
                    },
                    grouping: false,
                },
                series: {
                    showCheckbox: false,
                },
            },
            series: [],
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
            },
            series: []
        };
        
        var correlation_name = get_options();

        json_path = '../assets/json/benchmarks/frm/speed_plot.json';
        
        current_url = window.location.href;
        if (current_url.includes('nrm.html')) {
            json_path = '../assets/json/benchmarks/frm/nrm/speed_plot.json';
        } else if (current_url.includes('frm.html')) {
            json_path = '../assets/json/benchmarks/frm/frm/speed_plot.json';
        }

        $.getJSON(json_path, function (data) {
            var dataLen = data[correlation_name]["data"].length;
            for (var ix = 0; ix < dataLen; ix++) {
                bar_options.series.push(data[correlation_name]["data"][ix]);
            }
            bar_options.yAxis.title.text = '<p style="font-size: 18px">' + data[correlation_name]["y_title"] + '</p>';
            Highcharts.chart('speed_plot', bar_options);
        });
     });
});
