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

        Highcharts.chart('playback_tractor_1280x720_all_top30', {
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
                text: 'High-Definition Resolution: Power Consumption Playback of Top 30 Models',
                style: {
                    color: '#000000',
                    fontWeight: 'bold'
                }                
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['Xiaomi Mi A2 Lite / HEVC', 'ZTE Blade 20 Smart / H.264', 'Xiaomi POCO X3 / HEVC', 'SANTIN halove / H.264', 'Realme XT / HEVC', 'ZTE BLADE V9 / MPEG-4', 'vivo Y11 / H.264', 'Samsung Galaxy A21s / HEVC', 'Huawei Honor 20 Pro / MPEG-4', 'ASUS ZenFone Max Pro M1 / MPEG-4', 'Xiaomi Redmi 9C / HEVC', 'Xiaomi Redmi 9 / HEVC', 'Huawei Honor 20 / HEVC', 'Xiaomi Redmi 7A / VP8', 'Xiaomi Redmi 5 Plus / HEVC', 'Xiaomi Redmi 5 / H.264', 'Google Pixel 3a / VP9', 'vivo Y19 / HEVC', 'Samsung Galaxy S20 / H.264', 'Huawei P30 / HEVC', 'vivo S1 Pro / HEVC', 'Samsung Galaxy A6+ / MPEG-4', 'Huawei Y9 Prime (2019) / H.264', 'Sony Xperia XA1 Plus / HEVC', 'Xiaomi Redmi Note 8T / HEVC', 'LG X Power / H.264', 'vivo S1 / MPEG-4', 'Asus Zenfone Max (M1) ZB555KL / VP8', 'Huawei Honor 8S / HEVC', 'Xiaomi Pocophone F1 / VP9', ],
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
            series: [{name: 'video-decoder power consumption', data: [0.651849417302256, 1.4722149027879636, 0.8861619453312044, 1.8648257203345007, 1.2104092188932385, 1.742517061285278, 1.4530544562896348, 1.3638362013841074, 0.911025356561082, 0.9584841187356643, 1.474647132936422, 1.4720341381246012, 0.9419794418905469, 1.4840606827120288, 1.9217736280862492, 1.460603949538912, 1.73334996896767, 1.6451803088206205, 1.1516089625080737, 1.133930288743938, 0.9548634835755503, 1.6208215084341995, 1.4053343828623603, 2.130859667370757, 1.5590981391562433, 2.155004604234021, 1.7922177468926612, 1.5427561376818524, 1.9425838721081108, 1.447914201794692, ]},{name: 'screen power consumption', data: [1.7208083975449815, 0.9197939661515827, 1.6323913956826734, 0.654055507510738, 1.3171566977418094, 0.8311381885662256, 1.200000000000001, 1.2975591470711219, 1.8672033626021376, 1.8478257623635717, 1.349825413579592, 1.4092214487565349, 1.9432890421452107, 1.419645789791469, 1.0042465138610281, 1.5691156176805199, 1.2982704153022817, 1.4951407924246216, 2.026296829971183, 2.0878767171982076, 2.3536180339444046, 1.695105929327819, 1.9314548146876422, 1.2138627950688292, 1.817814582912524, 1.2407941956021071, 1.6551115361274082, 1.9122896481387062, 1.5189360696685357, 2.0425789301381068, ]},		]
        });
    });

 });