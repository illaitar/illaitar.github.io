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

        Highcharts.chart('playback_zombie_apocalypse_1920x1080_all_top30', {
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
                text: 'Full High-Definition Resolution: Power Consumption Playback of Top 30 Models',
                style: {
                    color: '#000000',
                    fontWeight: 'bold'
                }                
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['Google Pixel 3a / H.264', 'Xiaomi POCO X3 / VP9', 'ZTE Blade 20 Smart / H.264', 'Samsung Galaxy A21s / VP8', 'Realme XT / HEVC', 'Xiaomi Mi A2 Lite / HEVC', 'ZTE BLADE V9 / MPEG-4', 'Xiaomi Redmi 5 / HEVC', 'Xiaomi Redmi 5 Plus / HEVC', 'Huawei Honor 20 / HEVC', 'Huawei Honor 8X / MPEG-4', 'Huawei Honor 20 Pro / HEVC', 'vivo Y11 / VP8', 'Xiaomi Redmi 9C / HEVC', 'Xiaomi Redmi 9 / HEVC', 'Samsung Galaxy S20 / VP9', 'Huawei P30 / HEVC', 'ASUS ZenFone Max Pro M1 / VP8', 'Xiaomi Redmi 7A / VP8', 'Samsung Galaxy A6+ / MPEG-4', 'Xiaomi Pocophone F1 / VP8', 'Xiaomi Redmi Note 7 / MPEG-4', 'vivo Y19 / HEVC', 'Samsung Galaxy A5 / HEVC', 'vivo S1 Pro / VP9', 'Samsung Galaxy Tab A 10.1 / HEVC', 'Huawei Y9 Prime (2019) / MPEG-4', 'vivo S1 / MPEG-4', 'Xiaomi Redmi Note 8T / HEVC', 'Xiaomi Redmi Note 6 Pro / MPEG-4', ],
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
            series: [{name: 'video-decoder power consumption', data: [1.173027746627948, 0.9679251010431589, 1.7271751094944294, 1.4662559018679884, 1.4641296520955525, 1.0901810824849478, 2.094826808619931, 1.7466048434710437, 2.011037683791338, 1.1078950192402852, 0.7527587247089067, 1.2514914939176776, 1.7039781409372878, 1.8963318826402835, 1.9144312079301653, 1.3412366115617274, 1.329743939824135, 1.6045199444408444, 2.0454396359048017, 1.881936224586768, 1.592402063808331, 1.5768459259246774, 2.2768171471609677, 2.6519932991412576, 1.5612709482670342, 1.6998536809559766, 2.0303500722394636, 2.351720437088156, 2.072935669062401, 1.4033378683297792, ]},{name: 'screen power consumption', data: [1.2982704153022817, 1.629578663383369, 0.9197939661515827, 1.2975591470711219, 1.3171566977418094, 1.7208083975449815, 0.8311381885662256, 1.2023726820926637, 1.0042465138610281, 1.9432890421452107, 2.3001431200163327, 1.8672033626021376, 1.4368200836820098, 1.349825413579592, 1.4092214487565349, 2.026296829971183, 2.0878767171982076, 1.8478257623635717, 1.419645789791469, 1.695105929327819, 2.0425789301381068, 2.18510245702632, 1.4951407924246216, 1.2076727783495755, 2.3536180339444046, 2.225134126140383, 1.9314548146876422, 1.6551115361274082, 1.9343847081647083, 2.7912169705991685, ]},		]
        });
    });

 });