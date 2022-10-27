$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 12'},
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
        bar_options.xAxis.categories = ['Adobe Premiere Pro Built-In', 'SwinDI', 'ST-Deint', 'DfRes 122000 G2e 3', 'DfRes SA', 'EDVR_woTSA', 'EDVR', 'MFDIN L', 'FLAD', 'DUF', 'MFDIN', 'TDAN', 'DfRes', 'MSU Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Weston 3-Field Deinterlacer', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'NNEDI', 'Vapoursynth EEDI3', 'Vapoursynth TDeintMod', 'SonyVegas Interpolate Field', 'Bob', 'SonyVegas Blend Field', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion Compensation Deinterlacer', 'PAL Interpolation', ];
        bar_options.series.push({name: 'SSIM', data: [1.000, 0.999, 0.999, 0.998, 0.998, 0.995, 0.992, 0.991, 0.989, 0.980, 0.980, 0.972, 0.972, 0.959, 0.950, 0.931, 0.930, 0.928, 0.921, 0.919, 0.917, 0.914, 0.914, 0.913, 0.907, 0.906, 0.902, 0.902, 0.902, 0.896, 0.868, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});