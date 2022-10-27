$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 9'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'DfRes', 'ST-Deint', 'DfRes SA', 'DfRes 122000 G2e 3', 'Vapoursynth EEDI3', 'NNEDI', 'Bob-Weave Deinterlacer', 'SwinDI', 'YADIF', 'Bob', 'SonyVegas Interpolate Field', 'Real-Time Deep Deinterlacer', 'MSU Deinterlacer', 'DUF', 'EDVR', 'Weston 3-Field Deinterlacer', 'Vapoursynth TDeintMod', 'MFDIN', 'TDAN', 'Kernel Deinterlacer (optimal parameters)', 'EDVR_woTSA', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'SSIM', data: [0.995, 0.995, 0.994, 0.994, 0.994, 0.993, 0.993, 0.992, 0.992, 0.992, 0.992, 0.992, 0.992, 0.991, 0.991, 0.990, 0.990, 0.990, 0.989, 0.989, 0.988, 0.988, 0.987, 0.981, 0.975, 0.975, 0.972, 0.951, 0.951, 0.920, 0.907, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});