$(function () {
    $(document).ready(function() {
    
        (function (H) {
            var aWidth = 25, aCap = 15, aHead = 80, bottomMargin = 74, rightMargin = 80, delta = 8;          
            var gAnnotation = function(Ax,Ay,Bx,By,Tx,Ty,Tfi, opts, rnd, objects) {
                if (!opts) return;
                if ((opts.direction && opts.direction == 'inverse')) {
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
                    ar1.attr({stroke: 'black','stroke-width': 1}).add();
                    ar2.attr({stroke: 'black','stroke-width': 1}).add();
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

	var plot_options = {
        annotation: {
            xAxis: {
                text: "Faster",
                //direction: 'inverse'
            },
            yAxis: {
                text: "Better",
                direction: ''
            }
        },
	    chart: {
                type: 'scatter',
                zoomType: 'xy',
                spacingBottom: 50,
                spacingTop: 10,
                spacingLeft: 10,
                spacingRight: 20,
                // Explicitly tell the width and height of a chart
                width: null,
                height: 500
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: ''
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'bottom',
                x: -30,
                y: -150,
                floating: true,
                backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
                borderWidth: 1
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 7,
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
                        pointFormat: '{point.x}, {point.y}'
                    }
                }
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            series: [],
            credits: {
		text: 'videoprocessing.ai',
		href: 'https://videoprocessing.ai/'
	    },
	};
	var test_select = document.getElementById("time_plot_selector_test");
    var metric_select = document.getElementById("time_plot_selector_metric");
    //var part_select = document.getElementById("time_plot_selector_part");
    var testToName = ['From 30 fps', 'From 60 fps'];
    //var partToName = ['full_frame', 'part1', 'part2', 'part3', 'part4', 'part5', 'part6', 'part7', 'part8'];
    var metricToName = ['Subjective', 'PSNR', 'SSIM', 'VMAF', 'LPIPS', 'MS-SSIM'];
    var test_name = testToName[test_select.selectedIndex];
    //var part_name = partToName[part_select.selectedIndex];
    var metric_name = metricToName[metric_select.selectedIndex];
    // if (metric_select.selectedIndex === 4) {
    //     var params = test_name+'+'+metric_name;
    // } else if (metric_select.selectedIndex === 5) {
    //     var params = metric_name;
    // } else {
    //     var params = test_name+'+'+part_name+'+'+metric_name;
    // }
	
	$.getJSON('../assets/json/benchmarks/vfi/leaderboard.json', function (data) {
        	plot_options.title.text = metric_name + ' vs FPS';
        	plot_options.subtitle.text = 'Test case: interpolation ' + test_name.toLowerCase();
        // 	for (let i = 0; i < data[test_name].length; i++) {
        //         //console.log(Object.keys(data[test_name])[i])
		//         plot_options.series.push({name: Object.keys(data[test_name])[i], 
        //             data: [[data[test_name][i]["FPS"], data[test_name][i][metric_name]]]});
		// }
            for (var k in data[test_name]) {
                if (k != 'Frame Averaging' && k != 'Frame Repeating' && k != 'Adobe Premiere Pro') {
                    plot_options.series.push({name: k, 
                        data: [[data[test_name][k]["FPS"], data[test_name][k][metric_name]]]});
                }
            }
            if (metric_name != 'LPIPS') {
                plot_options.annotation.yAxis.direction = 'inverse';
            }
        	plot_options.yAxis.title.text = metric_name;
        	plot_options.xAxis.title.text = 'Frames Per Second';
        	Highcharts.chart('time_plot', plot_options);
        });		
    });
 });
