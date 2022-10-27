(function (H) {
                var aWidth = 30, aCap = 15, aHead = 50, bottomMargin = 60, rightMargin = 80;
                
                var gAnnotation = function(Ax,Ay,Bx,By, Tx,Ty,Tfi, opts, rnd, objects) {
                    if(!opts) return;
                    if(opts.direction && opts.direction == 'inverse' ) {
                        var t;
                        t = Ax; Ax = Bx; Bx = t;
                        t = Ay; Ay = By; By = t;
                    }
                    var ar = rnd.path(drawArrow(Ax, Ay,
                                               Bx, By,
                                               aWidth, aCap, aHead));
                    
                    ar.attr({stroke: 'black','stroke-width': 2}).add();
                   
                    objects.push(ar);
                 
                    if(opts.text) {
                        var txt = rnd.text(opts.text,Tx, Ty);
                    
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
                                    this.plotLeft+ this.plotWidth, this.plotTop + this.plotHeight + 80,
                                    this.plotLeft + this.plotWidth / 2, this.plotTop + this.plotHeight+80 + 4, 0,
                                    this.userOptions.annotation.xAxis,rnd,this.annotation);

                    gAnnotation(
                                    this.plotLeft + this.plotWidth + 50, this.plotTop + this.plotHeight,
                                    this.plotLeft + this.plotWidth + 50, this.plotTop,
                                    this.plotLeft + this.plotWidth + 50 + 4, this.plotTop + this.plotHeight/2, 270,
                                    this.userOptions.annotation.yAxis,rnd,this.annotation);                                
                }); 
}(Highcharts));
        $(function(){
            Highcharts.setOptions({"lang": {}, "global": {}});
            var option = {"yAxis": {"title": {"text": "Average relative bitrate"}, min: 80, max : 100}, 
 "series": [{"data": [
                {"name": "Standard presets", "y": 100.0, "color": "#009fe8"}, 
                {"name": "x264 developers' presets 2015", "y": 94.9, "color": "#009fe8"}, 
                {"name": "x264 developers' presets 2016", "y": 92.5, "color": "#009fe8"}, 
                {"name": "Our presets", "y": 84.4, "color": "#00a793"}
                ]}],
 "title": {"text": ""}, 
 "chart": {"type": "bar", "renderTo": "bitrate_savings", height: '70%'}, 
 "legend": {"enabled": false}, 
 "exporting": { "enabled": false },
 "plotOptions": {"bar":{"pointPadding":0,"groupPadding":0,"pointWidth":20}, "series": {"tooltip": {"pointFormat": "<span style=\"font-size: 11px\">{point.name} file size is {point.y}%</span>", "valueDecimals": 1, "headerFormat": ""}}}, 
 "credits": {"enabled": false}, 
 "annotation": {"xAxis": {"text": "Bitrate reduction", "direction": "inverse"}}, 
 "xAxis": {"title": {"text": ""}, "type": "category"}};
            var chart = new Highcharts.Chart(option);        
    });