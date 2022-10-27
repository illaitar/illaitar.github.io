$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 0'},
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
        bar_options.xAxis.categories = ['ST-Deint', 'FLAD', 'Kernel Deinterlacer (optimal parameters)', 'DfRes SA', 'DfRes', 'Vapoursynth TDeintMod', 'DfRes 122000 G2e 3', 'MFDIN L', 'TDAN', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'MSU Deinterlacer', 'Bob', 'SonyVegas Interpolate Field', 'Vapoursynth EEDI3', 'YADIF', 'NNEDI', 'MFDIN', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer', 'SwinDI', 'DUF', 'EDVR', 'EDVR_woTSA', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [43.616, 38.754, 38.733, 38.718, 38.700, 38.696, 38.690, 38.685, 38.660, 38.659, 38.653, 38.548, 38.483, 38.467, 38.452, 38.427, 38.425, 38.336, 38.313, 38.277, 38.237, 38.015, 37.881, 37.385, 36.971, 36.971, 36.752, 34.774, 34.027, 32.495, 31.165, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});