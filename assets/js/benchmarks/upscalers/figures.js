
Highcharts.SVGRenderer.prototype.symbols.pentagon=function(x,y,w,h){
    return['M',x+w*0.5,y+h*0.0,'L',x+w*0.0245,y+h*0.3455,'L',x+w*0.2061,y+h*0.9045,'L',x+w*0.7939,y+h*0.9045,'L',x+w*0.9755,y+h*0.3455,'L',x+w*0.5,y+h*0.0,'Z']
};
if (Highcharts.VMLRenderer){
    Highcharts.VMLRenderer.prototype.symbols.pentagon=Highcharts.SVGRenderer.prototype.symbols.pentagon;
}
//Highcharts.setOptions({symbols:['triangle','square','diamond','circle', 'triangle-down', 'pentagon']});
    