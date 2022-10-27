$(function () {

    $(document).ready(function() {
        plot_options = {
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
        toolpit: {
            pointFormat: '{series.name}: <b>{point.y %.3}</b>'
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                }
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

        var codec_select = document.getElementById("charts_selector_codec");
        var metric_select = document.getElementById("charts_selector_metric");
        var video_select = document.getElementById("charts_selector_video");
        
        var codec_to_name = ['x264', 'x265', 'libaom-av1', 'H.266', 'AVS3'];
        var metric_to_name = ['ERQA', 'VMAFCLIPPED', 'VMAFNEG', 'PSNR', 'MSSSIM', 'LPIPS'];
        var video_to_name = ['animation_clip', 'glass', 'lift', 'professor', 'skiing', 'street_show', 'wedding'];

        var print_codec_to_name = ['x264', 'x265', 'aomenc', 'VVenC', 'uavs3e'];
        var print_metric_to_name = ['ERQA', 'Y-VMAF', 'Y-VMAF NEG', 'Y-PSNR', 'YUV-MS-SSIM', 'LPIPS'];

        var print_video_to_name = ['animation clip', 'glass', 'lift', 'professor', 'skiing', 'street show', 'wedding'];

        var codec_name = codec_to_name[codec_select.selectedIndex];
        var metric_name = metric_to_name[metric_select.selectedIndex];
        var video_name = video_to_name[video_select.selectedIndex];

        var switch_value = document.getElementById("bitrates_selector");

        var number;
        if ($(switch_value).is(':checked')) {
            number = 5;
        }
        else {
            number = 7;
        }
        //plot_options.series.push({name: "Hide All", visible: false})
        $.getJSON('../assets/json/benchmarks/sr-codecs/curves.json', function (data) {
        	$.each(data[codec_name][video_name][metric_name], function( alg, val ) {
                
                if (alg != "only_compressed_540" && !(alg == 'iSeeBetter' && (video_name == 'lift' || video_name == 'wedding')) && !(video_name == 'wedding' && alg == "DBVSR" && codec_name == "x264")) {
                    let points = [];
                    let bitrates = data[codec_name][video_name]["bitrates"][alg];
                    for (let i = 0; i < number; ++i) {
                        let b = parseFloat(bitrates[i].toFixed(3));
                        let v = parseFloat(val[i].toFixed(3));
                        points.push([b, v]);
                    }
                    plot_options.series.push({name: getName(alg), data: points});
                }
            });
            
            plot_options.title.text = "Bitrate/quality, Sequence: " + print_video_to_name[video_select.selectedIndex] + ", Codec: " + print_codec_to_name[codec_select.selectedIndex] + ", Metric: " + print_metric_to_name[metric_select.selectedIndex];
            plot_options.subtitle.text =  "";
            plot_options.yAxis.title.text = print_metric_to_name[metric_select.selectedIndex];
        	plot_options.xAxis.title.text = "Bitrate (Mbps)";
            Highcharts.chart('charts_graph', plot_options);
        });		
    });
});
