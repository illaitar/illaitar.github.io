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

        var videoToName = ['mean', '1.mov', '2.mov', '3.mov', '4.mov', '5.mov', '6.mov', '7.mov', '8.mov', '9.mov', '10.mov', '11.mov', '12.mov', '13.mov', '14.mov', '15.mov', '16.mov', '17.mov', '18.mov', '19.mov', '20.mov'];
        var metricToName = ['hdr-vdp-3', 'hdr-vqm',  'hdr-psnr', 'hdr-ssim', 'pq-niqe', 'pq-psnr', 'pq-ssim', 'pq-vmaf', 'shifted-hdr-psnr', 'fovvideovdp'];
        var test_name = videoToName[video_select.selectedIndex];
        var metric_name = metricToName[metric_select.selectedIndex];

        params = test_name + '_' + metric_name;

        $.getJSON('../assets/json/benchmarks/itm/data_arrow.json', function (data) {
            bar_options.title.text = data[params]["subtitle"];
            // bar_options.subtitle.text =
            bar_options.xAxis.categories = data[params]["methods"];
            bar_options.series.push({name: data[params]["metric_name"], data: data[params]["metric_values"]});
            bar_options.yAxis.min = data[params]["min_val"];
            bar_options.yAxis.title.text = data[params]["metric_name"];
            console.log(params);
            Highcharts.chart('arrow_plot', bar_options);
        });
    });
});
