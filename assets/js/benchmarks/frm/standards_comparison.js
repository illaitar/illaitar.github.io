$(function () {
    $(document).ready(function() {
        var chart_options = {
            title: {text: ''},
            subtitle: {text: ''},
            chart: {
                height: '80%',
                zoomType: 'x',
                events: {
                    load: function() {
                        var chart = this;

                        var last_elem = Highcharts.charts.length-1;
                        var data = Highcharts.charts[last_elem].userOptions.series;

                        var amount_of_metrics = Highcharts.charts[last_elem].userOptions.xAxis.categories.length;

                        chart.renderer.text('The chart contains ' + amount_of_metrics + ' metrics', 810, 735)
                        .css({
                            fontSize: '10px',
                            color: '#666666'
                        })
                        .add();
                    }
                }
            },
            legend: {
                enabled: true
            },
            tooltip: {
                valueDecimals: 4,
                split: true,

                formatter: function () {
                    // The first returned item is the header, subsequent items are the
                    // points
                    var points = []
                    for(var i = 0; i < this.points.length; i ++) {
                        if (i%2 == 0) {
                            points.push(this.points[i]);
                        } else {
                            points.push(0);
                        }
                    }


                    return ['<b>' + this.x + '</b>'].concat(
                        points ?
                            points.map(function (point) {
                                // доверительный интервал
                                if (point == 0) {
                                    return ''
                                }

                                var c, s;

                                switch (point.series.name) {
                                    case 'All': c = 55; s = 2829; break;
                                    case 'AV1': c = 10; s = 550; break;
                                    case 'H.264': c = 3; s = 297;  break;
                                    case 'H.265': c = 28; s = 1377; break;
                                    case 'VVC': c = 5; s = 240; break;
                                }
                                return '<b>' + point.series.name + '</b> (' + c + ' codecs, ' + s + 
                                ' streams)<br/>Correlation: ' + point.y.toLocaleString(undefined, {maximumFractionDigits: 4});
                            }) : []
                    );
                },
            },
            xAxis: {
                title: {
                    text: ''
                },
                categories: [],
                gridLineWidth: 1,
            },
            yAxis: {title: {text: ''}},//, min: 0.5
            plotOptions: {
                series: {}
            },
            series: [],
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
            }
        };

        var correlation_select = document.getElementById("selector_correlation_standards1");

        var correlationToName = ['spearman', 'pearson', 'kendall'];

        var correlation_name = correlationToName[correlation_select.selectedIndex];
        // console.log(correlation_name);

        var simplify_switch = document.getElementById("simplify_selector1");
        var type = 'all';
        if ($(simplify_switch).is(':checked')) {
            type = 'simplify';
        }


        var current_url = window.location.href;
        var json_path = '../assets/json/benchmarks/frm/data_for_standards_comparison.json';
        if (current_url.includes('nrm.html')) {
            json_path = '../assets/json/benchmarks/frm/nrm/data_for_standards_comparison.json';
        } else if (current_url.includes('frm.html')) {
            json_path = '../assets/json/benchmarks/frm/frm/data_for_standards_comparison.json';
        } 
        
        $.getJSON(json_path, function (data) {
            // chart_options.title.text       = data[data_shown][codec_name][correlation_name]["title"];
            // chart_options.subtitle.text    = data[data_shown][codec_name][correlation_name]["subtitle"];
            chart_options.xAxis.categories = data[type][correlation_name]['labels'];
            var dataLen = data[type][correlation_name]["data"].length;
            for (var ix = 0; ix < dataLen; ix++) {
                chart_options.series.push(data[type][correlation_name]["data"][ix]);
            }
            chart_options.yAxis.title.text = '<p style="font-size: 18px">' + data[type][correlation_name]["y_title"] + '</p>';
            Highcharts.chart('plot_standards1', chart_options);
        });
     });
});
