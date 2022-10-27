$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 23'},
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
        bar_options.xAxis.categories = ['SwinDI', 'MFDIN L', 'FLAD', 'ST-Deint', 'DfRes SA', 'DfRes', 'DfRes 122000 G2e 3', 'MSU Deinterlacer', 'YADIF', 'DUF', 'TDAN', 'EDVR', 'EDVR_woTSA', 'SonyVegas Interpolate Field', 'Bob', 'Kernel Deinterlacer (optimal parameters)', 'Real-Time Deep Deinterlacer', 'Vapoursynth EEDI3', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer', 'NNEDI', 'Vapoursynth TDeintMod', 'Weston 3-Field Deinterlacer', 'MFDIN', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'SSIM', data: [0.951, 0.950, 0.950, 0.945, 0.935, 0.934, 0.933, 0.932, 0.930, 0.928, 0.928, 0.927, 0.927, 0.926, 0.926, 0.922, 0.922, 0.920, 0.918, 0.917, 0.917, 0.917, 0.917, 0.917, 0.904, 0.904, 0.902, 0.899, 0.885, 0.850, 0.784, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});