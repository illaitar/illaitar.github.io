$(function () {

   

    $(document).ready(function() {
        _plot_options = {
        annotation: {
            yAxis: {
                text: "Better"
            }
        },
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        xAxis: {
            title: {
                    text: ''
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'right',
            floating: false,
            //layout: 'vertical',
            //align: 'right',
            //verticalAlign: 'bottom',
            //floating: true,
            //itemStyle: {
            //    "fontSize" : "10px",
            //},
            //width: 340,
            //layout: 'horizontal',
            //y: -50,
        },
        colors: [
            '#5FADF5',
            '#5FF5D2',
            '#E6845E',
            '#E3E645',
            '#000000',
            '#E66ADB',
            '#AB9EE6',
            '#407A5B'
        ],
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
            }
        },
        navigation: {
            buttonOptions: {
                align: 'right',
                verticalAlign: 'top',
                y: 0
            }
        },
        series: [],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        },
        credits: {
            text: 'videoprocessing.ai',
            href: 'https://videoprocessing.ai/'
            },
        };

        function getName(alg) {

            if (alg == "only_compressed") {
                return "only compressed";
            }
            if (alg == "waifu2xAnime") {
                return "waifu2x-anime";
            }
            if (alg == "waifu2xCunet") {
                return "waifu2x-cunet";
            }
            if (alg == "topaz-amq-12") {
                return "amq-12";
            } 
            if (alg == "topaz-ahq-11") {
                return "ahq-11";
            }
            if (alg == "topaz-amqs-1") {
                return "amqs-1";
            }
            return alg;
        }

        var video_select = document.getElementById("subjective_charts_selector_video");
        
        var video_to_name = ['animation_clip_1', 'animation_clip_2', 'skiing_1', 'skiing_2', 'street_show_1', 'street_show_2'];

        var print_video_to_name = ['animation clip (1)', 'animation clip (2)', 'skiing (1)', 'skiing (2)', 'street show (1)', 'street show (2)'];

        var video_name = video_to_name[video_select.selectedIndex];

        var switch_value = document.getElementById("subjective_bitrates_selector");

        var start, end;
        if ($(switch_value).is(':checked')) {
            start = 0;
            end = 7;
        }
        else {
            start = 3;
            end = 6;
        }

        $.getJSON('../assets/json/benchmarks/sr-codecs/subjective_results.json', function (data) {
        	$.each(data[video_name], function( _alg, _val ) {
                
                if (_alg != "only_compressed_540") {
                    let _points = [];
                    let _bitrates = _val['bitrates'];
                    for (let i = start; i < end; ++i) {
                        let b = parseFloat(_bitrates[i].toFixed(3));
                        let v = parseFloat(_val["values"][i].toFixed(3));
                        _points.push([b, v]);
                    }
                    _plot_options.series.push({name: getName(_alg), data: _points});
                }
            });
            _plot_options.title.text = "Bitrate/quality, Sequence: " + print_video_to_name[video_select.selectedIndex] + ", Codec: x264, Metric: Subjective assessment";
            _plot_options.subtitle.text = "";
            _plot_options.yAxis.title.text = "Subjective assessment"
        	_plot_options.xAxis.title.text = "Bitrate (Mbps)";
            Highcharts.chart('subjective_charts_graph', _plot_options);
        });		
    });
});
