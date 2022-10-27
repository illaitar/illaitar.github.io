$(function () {
    $(document).ready(function() {
        var bar_options = {
            annotation: {
                xAxis: {
                    text: "Better"
                }
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            chart: {
                height: 500,
                type: 'bar',
                zoomType: 'xy',
                events: {
                    load() {
                      let chart = this,
                        tickLength = chart.xAxis[0].tickPositions.length;
              
                      chart.series.forEach(s => {
                        s.points.forEach(p => {
                          if (p.y == 1) {
                            p.update({
                              color: '#F5A52C'
                            })
                          } else if (p.y == parseInt(p.y, 10)){
                            p.update({
                                color: '#A7A1AD'
                            })
                          } 
                        })
                      })
                    }
                  }
            },
            legend: {
                enabled: false
            },
            xAxis: {
                title: {
                    text: ''
                }
            },
            yAxis: {min: 0, title: {text: ''}},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            series: [],
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
                },
        };

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

        $.getJSON('../assets/json/benchmarks/sr-codecs/bsqrate.json', function (data) {
        	let array = [];
            let labels = [];
            $.each(data[codec_name][video_name][metric_name], function( alg, val ) {
                if (alg != "only_compressed_540" && !(alg == 'iSeeBetter' && (video_name == 'lift' || video_name == 'wedding')) && !(video_name == 'wedding' && alg == "DBVSR" && codec_name == "x264")) {
                    labels.push(getName(alg));
                    array.push(parseFloat(val.toFixed(3)));
                }
            });

            for (let i = 0; i < array.length; ++i) {
                for (let j = 0; j < array.length; ++j) {
                    if (array[i] < array[j]) {
                        let tmp = array[j];
                        array[j] = array[i];
                        array[i] = tmp;

                        tmp = labels[j];
                        labels[j] = labels[i];
                        labels[i] = tmp;
                    }
                }
            }

            bar_options.title.text = "BSQ-rate, Sequence: " + print_video_to_name[video_select.selectedIndex] + ", Codec: " + print_codec_to_name[codec_select.selectedIndex] + ", Metric: " + print_metric_to_name[metric_select.selectedIndex];
            bar_options.subtitle.text = "";
            bar_options.series.push({name: '', data: array});
            bar_options.xAxis.categories = labels;
        	bar_options.yAxis.title.text = "BSQ-rate (" + print_metric_to_name[metric_select.selectedIndex] +  ")";
            Highcharts.chart('charts_bsqrate', bar_options);
        });		
    });
});
