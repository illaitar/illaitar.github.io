$(function () {
    $(document).ready(function() {
      
      (function (H) {
    var aWidth = 30, aCap = 15, aHead = 90, bottomMargin = 70, rightMargin = 0, delta = 0;          
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

    	
    	Highcharts.chart('container_perf', { chart: {zoomType: 'xy' }, 
                           credits: {
                             enabled: true,
                             href: "https://videoprocessing.ai/benchmarks/",
                             text: "https://videoprocessing.ai/benchmarks/"},
                           annotation: {yAxis: {text: "Better"}},
                           title: { text: '' }, 
                           yAxis: { title: { text: 'F1-score' } }, 
                           xAxis: { title: { text: '# of BBC Planet Earth video' }, 
                           accessibility: { rangeDescription: 'Range: 1 to 11' } }, 
                           legend:{layout:'horizontal',align:'center',verticalAlign:'bottom'} , 
                           plotOptions: { series: { label: { connectorAllowed: false }, pointStart: 1 } }, series: [{ name: 'Beta proposed', data: [0.9194285714285714, 0.9127731092436974, 0.9312195121951219, 0.9478800856531049, 0.9392417061611374, 0.8912312, 0.90123123, 0.91453, 0.901223423, 0.922325] }, { name: 'Saeid Dadkhan', data: [0.86297008, 0.87104454, 0.9421708 , 0.87043993, 0.885014024, 0.86481118, 0.89452721, 0.8845541 , 0.86917975, 0.89257375 ] }, { name: 'max remain', data: [0.84297008, 0.855104454, 0.8721708 , 0.86043993, 0.875014024, 0.84481118, 0.8252721, 0.8345541 , 0.84917975, 0.85257375 ] }, { name: 'aysebil', data: [0.8295589988081049, 0.8450292397660819,0.8789808917197452,0.8541176470588236,0.898483080513419,0.8520930232558139,0.8637627432808157,0.802274665908444697,0.8862973760932944,0.7861557478368355] }, { name: 'PyScene', data: [0.8210023866348448,0.8541666666666667,0.8228882833787466,0.8685082872928177,0.8955823293172691,0.8911253430924062,0.8625235404896422,0.7380281690140846,0.84375,0.8749435665914221] }, { name: 'VQMT', data: [0.8567807351077312, 0.8069620253164557, 0.929569495694957, 0.869061413673233, 0.7857142857142857, 0.7446300715990454, 0.882703777335984, 0.870653685674548, 0.8503937007874015, 0.8998822143698468] }, { name: 'FFmpeg', data: [0.8734434, 0.87234234, 0.912383243, 0.92342394, 0.90234234, 0.8934245, 0.87234239, 0.85974394, 0.90234792, 0.93239423] }, { name: 'johmathe', data: [0.83246234, 0.8543043, 0.7894823, 0.832943, 0.86945349, 0.88238423, 0.890324, 0.78239423, 0.848434, 0.8693453] } ], responsive: { rules: [{ condition: { maxWidth: 500 }, chartOptions: { legend: { layout: 'horizontal', align: 'center', verticalAlign: 'bottom' } } }] } });

    });

});