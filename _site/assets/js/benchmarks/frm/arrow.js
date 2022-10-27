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
            /*
            var data_combination;
            if ($(color_switch).is(':checked') && $(weights_switch).is(':checked')) {
                data_combination = 'all';
            }
            else if (!$(color_switch).is(':checked') && $(weights_switch).is(':checked')) {
                data_combination = 'without_color_planes';
            }
            else if ($(color_switch).is(':checked') && !$(weights_switch).is(':checked')) {
                data_combination = 'without_weights';
            }
            else {
                data_combination = 'without_weights&without_color_planes';
            }
            */

            return ['all', codec_name, correlation_name];
        }

        var bar_options = {
            title: {text: ''},
            subtitle: {text: ''},
            chart: {
                height: '80%',
                type: 'bar',
                zoomType: 'xy',
                /*events: {
                    load: function() {
                        var chart = this;
                        var last_elem = Highcharts.charts.length-1;
                        // find chart that we need to change by title
                        for (let i = Highcharts.charts.length - 1; i >= 0; i--) {
                            var t = Highcharts.charts[i].userOptions.title.text;
                            if (t.includes("correlation for codecs of")) {
                                last_elem = i;
                                break;
                            }
                        }

                        var data = Highcharts.charts[last_elem].userOptions.series;

                        var amount_of_metrics = get_max_elem(data);
                        // console.log(Highcharts.charts[last_elem].userOptions);

                        chart.renderer.text('The chart contains ' + amount_of_metrics + ' metrics', 810, 715)
                        .css({
                            fontSize: '10px',
                            color: '#666666'
                        })
                        .add();


                        function get_max_elem(data) {
                            var length = data.length;

                            var x_coords = [];
                            for (var i = 0; i < length; i++) {
                                var amount_of_metrics = data[i].data.length;
                                x_coords.push(data[i].data[amount_of_metrics-1].x);
                            }
                            return Math.max.apply(null, x_coords);
                        }
                    }
                }*/
            },
            legend: {
                enabled: true
            },
            tooltip: {
                valueDecimals: 4
            },
            xAxis: {
                title: {
                    text: ''
                },
                type: 'category',
                categories: []
            },
            yAxis: {title: {text: ''}},
            plotOptions: {
                bar: {  
                    dataLabels: {
                            enabled: true, 
                            format: "{y:.4f}",
                            allowOverlap: true,
                    },
                    grouping: false,
                },
                series: {
                    showCheckbox: false,
                    events: {
                        legendItemClick: function () {
                            var last_elem = Highcharts.charts.length-1;

                            // find chart that we need to change by title
                            for (let i = Highcharts.charts.length - 1; i >= 0; i--) {
                                var t = Highcharts.charts[i].userOptions.title.text;
                                if (t.includes("correlation for codecs of")) {
                                    last_elem = i;
                                    break;
                                }
                            }

                            
                            ret = change_after_hide(Highcharts.charts[last_elem].userOptions.series, this);

                            Highcharts.charts[last_elem].userOptions.series = ret[0];
                            Highcharts.charts[last_elem].userOptions.xAxis.categories = ret[1];

                            Highcharts.charts[last_elem].userOptions.plotOptions.bar.dataLabels.allowOverlap = ret[1].length > 50;


                            var min_ = get_min_of_series(Highcharts.charts[last_elem].userOptions.series, this);
                            Highcharts.charts[last_elem].yAxis[0].setExtremes(min_,null);
                            Highcharts.charts[last_elem].render();
                            Highcharts.charts[last_elem].redraw();


                            // find minimum value of y coord to set extremes or plot
                            function get_min_of_series(series, category) {
                                var cur_category_clicked = category.index;
                                var y_coords = [];

                                var length = category.chart.series.length;
                                for (let i = 0; i < length; i++) {
                                    if (  (category.chart.series[i].visible && i != cur_category_clicked) 
                                      || (!category.chart.series[i].visible && i == cur_category_clicked)) {
                                        y_coords.push(category.chart.series[i].yData);
                                    }
                                }
                                y_coords = y_coords.flat().flat().sort(function (a, b) {  return b - a;  });
                                return y_coords[y_coords.length-1];
                            }

                            function change_after_hide(series, category) {
                                var cur_category_clicked = category.index;
                                var visibility_of_cur_category = !category.visible;
                                var x_coords = category.xData;
                                var y_coords = [];

                                var length = category.chart.series.length;
                                for (let i = 0; i < length; i++) {
                                    if (  (category.chart.series[i].visible && i != cur_category_clicked) 
                                      || (!category.chart.series[i].visible && i == cur_category_clicked)) {
                                        y_coords.push(category.chart.series[i].yData);
                                    }
                                }
                                y_coords = y_coords.flat().flat().sort(function (a, b) {  return b - a;  });

                                labels = Array(y_coords.length);
                                for (var cat in category.chart.series) {
                                    if (  (category.chart.series[cat].visible && cat != cur_category_clicked) 
                                      || (!category.chart.series[cat].visible && cat == cur_category_clicked)) {
                                        var len = category.chart.series[cat].xData.length;
                                        for (let i = 0; i < len; i++) {
                                            var old_x = series[cat]['data'][i].x;
                                            var new_x = y_coords.indexOf(series[cat]['data'][i].y);
                                            series[cat]['data'][i].x = new_x;// y_coords.indexOf(series[cat]['data'][i].x);
                                            y_coords[new_x] = -1;

                                            labels[new_x] = series[cat]['data'][i].name;
                                        }
                                    }
                                    else {                                      
                                        var len = category.chart.series[cat].xData.length;
                                        for (let i = 0; i < len; i++) {
                                            series[cat]['data'][i].x = -1;
                                        }
                                    }
                                }

                                return [series, labels]
                            }
                        }
                    }
                }
            },
            series: [],
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
            },
            series: []
        };
        
        data_combination = get_options()

        data_shown = data_combination[0];
        codec_name = data_combination[1];
        correlation_name = data_combination[2];

        json_path = '../assets/json/benchmarks/frm/data_for_barchart.json';
        
        current_url = window.location.href;
        if (current_url.includes('no-reference-video-quality-metrics.html') || current_url.includes('nrm.html')) {            json_path = '../assets/json/benchmarks/frm/nrm/data_for_barchart.json';
            bar_options.legend.enabled = false;
            // bar_options.plotOptions.series.events = {};
            data_shown = 'all';
        } else if (current_url.includes('full-reference-video-quality-metrics.html') || current_url.includes('frm.html')) {            json_path = '../assets/json/benchmarks/frm/frm/data_for_barchart.json';
            // bar_options.chart.events = {};
            // bar_options.plotOptions.series.events = {};
            data_shown = 'all';
        }
        console.log(data_shown);


        $.getJSON(json_path, function (data) {
            bar_options.title.text       = data[data_shown][codec_name][correlation_name]["title"];
            // bar_options.subtitle.text    = data[data_shown][codec_name][correlation_name]["subtitle"];
            // bar_options.xAxis.categories = data[data_shown][codec_name][correlation_name]["metrics"];
            var dataLen = data[data_shown][codec_name][correlation_name]["data"].length;
            for (var ix = 0; ix < dataLen; ix++) {
                bar_options.series.push(data[data_shown][codec_name][correlation_name]["data"][ix]);
            }
            bar_options.yAxis.title.text = data[data_shown][codec_name][correlation_name]["yAxis_title"];
            Highcharts.chart('leaderboard_plot', bar_options);
        });
     });
});
