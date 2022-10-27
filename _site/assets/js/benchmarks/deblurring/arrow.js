$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: ''},
            subtitle: {text: ''},
            chart: {
                type: 'bar'
            },
            legend: {
                enabled: false
            },
            xAxis: {
                title: {
                    text: ''
                }
            },
            yAxis: {min: 0.5100672031399144,title: {text: ''}},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            series: [],
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
            },
        };

        //var script = document.currentScript ||
        ///*Polyfill*/ Array.prototype.slice.call(document.getElementsByTagName('script')).pop();

        //var params = (script.getAttribute('data-params') || '').split(/, */);
        //params = document.getElementsByTagName('script').getAttribute('data-params');

        var video_select = document.getElementById("arrow_selector_video");
        var metric_select = document.getElementById("arrow_selector_metric");

        var videoToName = ['mean', '4k_arabic_3.mp4', '4k_astro_7.mp4', '4k_blanket_3.mp4', '4k_camry_3.mp4', '4k_dhard_3.mp4', '4k_dice_4.mp4', '4k_dice_5.mp4', '4k_dolphin_4.mp4', '4k_dragon_3.mp4', '4k_falling_4.mp4', '4k_hlullaby_3.mp4', '4k_hlullaby_4.mp4', '4k_knots_4.mp4', '4k_lullaby_7.mp4', '4k_martian_3.mp4', '4k_minerals_4.mp4', '4k_mtg_3.mp4', '4k_naturemort_3.mp4', '4k_penguin_5.mp4', '4k_racer_3.mp4', '4k_rolling_3.mp4', '4k_shuttle_6.mp4', '4k_stirling_5.mp4'];
        var videoToName2 = ['mean', 'Arabic', 'Astro', 'Blanket', 'Camry', 'Dolphin dynamic', 'Dice', 'Dice flat', 'Dolphin static', 'Dragon', 'Falling', 'Lullaby & Stirling', 'Lullaby & Stirling 2', 'Knots', 'Lullaby', 'Martian', 'Minerals', 'MTG', 'Naturemort', 'Ball', 'Racer', 'Rolling', 'Shuttle', 'Stirling'];
        var metricToName = ['psnr', 'ssim', 'vmaf', 'lpips', 'erqa'];
        var test_name = videoToName[video_select.selectedIndex];
        var test_name2 = videoToName2[video_select.selectedIndex];
        var metric_name = metricToName[metric_select.selectedIndex];

        params = test_name + '_' + metric_name;

        $.getJSON('../assets/json/benchmarks/deblurring/data_arrow.json', function (data) {
            bar_options.title.text = data[params]["title"] + ", " + test_name2;
            // bar_options.subtitle.text =
            values_ = data[params]["metric_values"];
            models_ = data[params]["models"];
            // if (metric_name == 'lpips'){
            //     if (test_name == 'mean'){
            //         //console.log(params)
            //     } else {
            //         values_.reverse();
            //         models_.reverse();
            //     }
            // }
            bar_options.xAxis.categories = models_;
            bar_options.series.push({name: data[params]["metric_name"], data: values_});
            bar_options.yAxis.min = data[params]["min_val"];
            bar_options.yAxis.title.text = data[params]["metric_name"];
            console.log(params);
            Highcharts.chart('arrow_plot', bar_options);
        });
    });
});
