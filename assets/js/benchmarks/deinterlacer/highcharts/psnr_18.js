$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 18'},
            subtitle: {text: ''},
            chart: {
                type: 'bar',
                zoomType: 'xy'
            },
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
            },
            legend: {
                enabled: false
            },
            xAxis: {
                title: {
                    text: ''
                }
            },
            yAxis: {min: 0.0,title: {text: 'PSNR'}},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            series: []
        };

        //$.getJSON('path/to/your/file.json', function (data) {
            //Here you can change any parameters("bar_options.xAxis.categories", "bar_options.series" and so on) to data from your json 
            //Data from json will be stored in object "data"

            //Highcharts.chart('arrow_plot', bar_options);
        //});
        bar_options.xAxis.categories = ['DfRes SA', 'DfRes 122000 G2e 3', 'FLAD', 'Motion and Area Pixel Deinterlacer', 'EDVR', 'EDVR_woTSA', 'DUF', 'MFDIN L', 'TDAN', 'Vapoursynth TDeintMod', 'ST-Deint', 'Bob-Weave Deinterlacer', 'MSU Deinterlacer', 'YADIF', 'MFDIN', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth EEDI3', 'SwinDI', 'Bob', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer', 'NNEDI', 'DfRes', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Adobe Premiere Pro Built-In', 'Real-Time Deep Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'PSNR', data: [60.934, 59.463, 57.193, 57.053, 56.556, 56.246, 55.510, 55.384, 53.936, 53.935, 53.309, 52.634, 52.309, 51.695, 51.082, 50.894, 50.616, 50.587, 50.355, 49.649, 49.562, 49.066, 48.640, 48.180, 48.149, 48.149, 47.956, 47.933, 39.743, 39.203, 38.894, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});