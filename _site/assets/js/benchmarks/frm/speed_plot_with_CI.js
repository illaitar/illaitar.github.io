$(function () {
    $(document).ready(function() {

        function get_options() {
            var codec_select = document.getElementById("selector_codec");
            var correlation_select = document.getElementById("selector_correlation");

            var codecToName = ['all', 'vvc', 'h264', 'h265', 'av1'];
            var correlationToName = ['spearman', 'pearson', 'kendall'];

            var codec_name = codecToName[codec_select.selectedIndex];
            var correlation_name = correlationToName[correlation_select.selectedIndex];

            var color_switch = document.getElementById("color_planes_selector");
            var weights_switch = document.getElementById("weights_selector");

            return [codec_name, correlation_name];
        }

        var bar_options = {
            title: {text: ''},
            subtitle: {text: ''},
            chart: {
                type: 'scatter',
                height: '80%',
                zoomType: 'xy'
            },
            legend: {
                layout: 'vertical',
                align: 'right', 
                verticalAlign: 'middle'
            },
            xAxis: {
                title: {
                    text: 'FPS'
                },
                type: 'category',
                categories: []
            },
            tooltip: {
                valueDecimals: 4,
                // headerFormat: '',
                // pointFormat: '<b>{point.id}</b><br/>Correlation: {point.y}<br/>FPS: {point.x:1f}<br/>'

                formatter: function () {
                    // console.log(this);
                    if (this.series.userOptions.type == 'errorbar') {
                        return ''
                    }
                    return '<b>' + this.point.id + '</b><br/>Correlation: ' + this.y.toLocaleString(undefined, {maximumFractionDigits: 4})
                     + '<br/>FPS: ' + Math.floor(this.x) + '<br/>'
                },
            },
            yAxis: {title: {text: 'Correlation'}},
            plotOptions: {
                scatter: {  
                    dataLabels: {
                            enabled: false, 
                            format: "{y:.2f} {x:.0f}",
                            allowOverlap: true,
                    },
                    grouping: false,
                },
                errorbar: {
                    dataLabels: {enabled: false},
                    tooltip:    {pointFormat: ''}
                },
                series: {
                    showCheckbox: false,
                    // point: {events: {click: function() {console.log(this); alert('Category: '+ this.category +', value: '+ this.y + 'Series: ' +  this.series.name)}}}
                },
                errorbar: {
                    boxDashStyle: 'Dash',
                    fillColor: '#F0F0E0',
                    lineWidth: 2,
                    stemColor: '#A63400',
                    stemDashStyle: 'dot',
                    stemWidth: 2,
                    whiskerColor: '#3D9200',
                    whiskerLength: '100%',
                    whiskerWidth: 3
                }
            },
            series: [],
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
            },
            series: []
        };
        
        var correlation_name = 'pearson';

        $.getJSON('../assets/json/benchmarks/frm/speed_plot.json', function (data) {
            var dataLen = data[correlation_name]["data"].length;
            for (var ix = 0; ix < dataLen; ix++) {
                bar_options.series.push(data[correlation_name]["data"][ix]);
            }
            Highcharts.chart('speed_plot', bar_options);
        });
     });
});
