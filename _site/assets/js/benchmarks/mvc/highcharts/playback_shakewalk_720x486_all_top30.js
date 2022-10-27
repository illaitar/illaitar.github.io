$(function () {
    (function (H) {
        var aWidth = 30, aCap = 15, aHead = 90, bottomMargin = 74, rightMargin = 80, delta = 8;          
        var gAnnotation = function(Ax,Ay,Bx,By,Tx,Ty,Tfi, opts, rnd, objects) {
            if (!opts) return;
            if (true || (opts.direction && opts.direction == 'inverse')) {
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

        Highcharts.chart('playback_shakewalk_720x486_all_top30', {
            annotation: {
                xAxis: {
                    text: "Better"
                }
            },        
            chart: {
                type: 'bar',
                height: 600,
                zoomType: 'xy'                                
            },
            title: {
                text: 'Standard-Definition Resolution: Power Consumption Playback of Top 30 Models',
                style: {
                    color: '#000000',
                    fontWeight: 'bold'
                }                
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['ZTE BLADE V9 / HEVC', 'ZTE Blade 20 Smart / H.264', 'Xiaomi POCO X3 / AV1', 'Xiaomi Mi A2 Lite / AV1', 'vivo Y11 / H.264', 'Samsung Galaxy A21s / H.264', 'Xiaomi Redmi 5 Plus / HEVC', 'Realme XT / HEVC', 'ASUS ZenFone Max Pro M1 / HEVC', 'SANTIN halove / H.264', 'Xiaomi Redmi 5 / HEVC', 'Xiaomi Redmi 9C / HEVC', 'Xiaomi Redmi 7A / VP8', 'Huawei Honor 20 Pro / MPEG-4', 'Xiaomi Redmi 9 / H.264', 'vivo Y19 / HEVC', 'Google Pixel 3a / VP9', 'Huawei Honor 20 / H.264', 'Xiaomi Redmi Note 4 / MPEG-4', 'LG X Power / H.264', 'Xiaomi Pocophone F1 / VP9', 'Huawei Honor 8S / HEVC', 'Xiaomi Redmi Note 8T / VP9', 'Huawei P30 / H.264', 'Samsung Galaxy J6 / MPEG-4', 'Xiaomi Redmi Note 8 Pro / HEVC', 'Samsung Galaxy S20 / H.264', 'Asus Google Nexus 7 / MPEG-4', 'Sony Xperia XA1 Plus / HEVC', 'Asus Zenfone Max (M1) ZB555KL / VP8', ],
                title: {text: null}
            },
            yAxis: {
                title: {
                    text: 'Battery delta [%] per hour'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }            
            },
            annotation: {
                xAxis: {
                    text: "Better",
                    direction: "inverse"
                }
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
            },            
            series: [{name: 'video-decoder power consumption', data: [1.1034014667840444, 0.9960781276251057, 0.29658195385733377, 0.3201925457870616, 0.8665287576113823, 0.7802908985741579, 1.257771367110668, 0.9850987329730971, 0.3612502038583054, 1.6798901942374567, 1.1600835246170802, 1.1549933334075435, 1.0982992354921868, 0.6888753187678165, 1.2448913540650837, 1.2237311934580468, 1.4420914153952962, 0.8054326908195273, 1.4568227844923995, 1.546802656799588, 0.8198461534161705, 1.355536083583799, 0.9826947825037144, 0.8762699825507476, 1.1954662552792636, 1.3556863729213973, 0.9977544915579379, 1.6548443254451923, 1.829037465302708, 1.1340528130781324, ]},{name: 'screen power consumption', data: [0.7411915444593493, 0.9197939661515827, 1.635204127981978, 1.7208083975449815, 1.200000000000001, 1.2975591470711219, 1.0042465138610281, 1.3171566977418094, 1.9478411427334725, 0.654055507510738, 1.2023726820926637, 1.349825413579592, 1.419645789791469, 1.8672033626021376, 1.4092214487565349, 1.4951407924246216, 1.2982704153022817, 1.9432890421452107, 1.2927691114366986, 1.2407941956021071, 2.0425789301381068, 1.5189360696685357, 1.9690761137940187, 2.0878767171982076, 1.8154311649016655, 1.6568788085200405, 2.026296829971183, 1.3812578654961798, 1.2138627950688292, 1.9122896481387062, ]},		]
        });
    });

 });