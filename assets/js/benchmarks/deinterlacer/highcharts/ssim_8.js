$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 8'},
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
        bar_options.xAxis.categories = ['FLAD', 'ST-Deint', 'DfRes', 'SwinDI', 'SonyVegas Interpolate Field', 'MFDIN L', 'Bob', 'DfRes SA', 'DfRes 122000 G2e 3', 'Vapoursynth EEDI3', 'Vapoursynth TDeintMod', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'MSU Deinterlacer', 'YADIF', 'DUF', 'TDAN', 'EDVR', 'EDVR_woTSA', 'Kernel Deinterlacer', 'MFDIN', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'SSIM', data: [0.978, 0.978, 0.977, 0.977, 0.977, 0.977, 0.977, 0.977, 0.976, 0.976, 0.975, 0.975, 0.974, 0.973, 0.973, 0.972, 0.971, 0.971, 0.967, 0.966, 0.965, 0.959, 0.958, 0.958, 0.953, 0.952, 0.952, 0.937, 0.802, 0.722, 0.495, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});