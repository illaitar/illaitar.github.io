$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 26'},
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
            yAxis: {min: 0.0,title: {text: 'SSIM'}},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            series: []
        };

        //$.getJSON('path/to/your/file.json', function (data) {
            //Here you can change any parameters("bar_options.xAxis.categories", "bar_options.series" and so on) to data from your json 
            //Data from json will be stored in object "data"

            //Highcharts.chart('arrow_plot', bar_options);
        //});
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'DfRes SA', 'DfRes 122000 G2e 3', 'DfRes', 'SwinDI', 'EDVR_woTSA', 'EDVR', 'MSU Deinterlacer', 'MFDIN', 'DUF', 'TDAN', 'ST-Deint', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Real-Time Deep Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer', 'Adobe Premiere Pro Built-In', 'Motion Compensation Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'NNEDI', 'YADIF', 'Vapoursynth EEDI3', 'SonyVegas Interpolate Field', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'SonyVegas Blend Field', 'PAL Interpolation', ];
        bar_options.series.push({name: 'SSIM', data: [0.997, 0.996, 0.994, 0.993, 0.991, 0.990, 0.988, 0.986, 0.981, 0.981, 0.980, 0.979, 0.970, 0.953, 0.941, 0.938, 0.936, 0.936, 0.935, 0.934, 0.932, 0.931, 0.931, 0.930, 0.930, 0.926, 0.926, 0.903, 0.903, 0.884, 0.877, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});