$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 23'},
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
        bar_options.xAxis.categories = ['ST-Deint', 'MFDIN L', 'FLAD', 'SwinDI', 'DfRes SA', 'DfRes', 'DfRes 122000 G2e 3', 'MSU Deinterlacer', 'YADIF', 'EDVR_woTSA', 'DUF', 'TDAN', 'Vapoursynth EEDI3', 'NNEDI', 'Real-Time Deep Deinterlacer', 'SonyVegas Interpolate Field', 'EDVR', 'Bob', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth TDeintMod', 'Weston 3-Field Deinterlacer', 'MFDIN', 'Kernel Deinterlacer', 'PAL Interpolation', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [42.154, 41.934, 41.825, 41.160, 40.810, 40.755, 40.581, 39.883, 39.757, 39.720, 39.596, 39.569, 39.373, 39.368, 39.350, 39.302, 39.300, 39.299, 39.254, 39.234, 39.185, 39.089, 38.981, 38.910, 37.205, 37.003, 37.003, 36.880, 29.965, 28.447, 26.408, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});