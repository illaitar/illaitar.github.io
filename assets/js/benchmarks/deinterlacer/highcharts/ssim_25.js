$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 25'},
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
        bar_options.xAxis.categories = ['FLAD', 'MFDIN L', 'DfRes 122000 G2e 3', 'DfRes SA', 'EDVR_woTSA', 'EDVR', 'DfRes', 'TDAN', 'MSU Deinterlacer', 'MFDIN', 'DUF', 'Bob-Weave Deinterlacer', 'ST-Deint', 'Weston 3-Field Deinterlacer', 'YADIF', 'Vapoursynth TDeintMod', 'Motion and Area Pixel Deinterlacer', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Adobe Premiere Pro Built-In', 'PAL Interpolation', 'SwinDI', 'Real-Time Deep Deinterlacer', 'Motion Compensation Deinterlacer', 'NNEDI', 'Vapoursynth EEDI3', 'SonyVegas Interpolate Field', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'SSIM', data: [0.995, 0.995, 0.994, 0.994, 0.993, 0.993, 0.993, 0.992, 0.991, 0.991, 0.991, 0.987, 0.985, 0.982, 0.980, 0.979, 0.978, 0.978, 0.973, 0.972, 0.971, 0.970, 0.970, 0.967, 0.966, 0.964, 0.959, 0.959, 0.943, 0.943, 0.932, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});