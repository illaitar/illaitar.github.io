$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 3'},
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
        bar_options.xAxis.categories = ['FLAD', 'MFDIN L', 'DfRes SA', 'NNEDI', 'SwinDI', 'Vapoursynth EEDI3', 'Vapoursynth TDeintMod', 'DfRes', 'DfRes 122000 G2e 3', 'ST-Deint', 'Bob', 'SonyVegas Interpolate Field', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'MSU Deinterlacer', 'EDVR_woTSA', 'MFDIN', 'Weston 3-Field Deinterlacer', 'YADIF', 'DUF', 'Kernel Deinterlacer (optimal parameters)', 'EDVR', 'ASVZZZ Deinterlacer', 'Muksun Deinterlacer', 'TDAN', 'Motion and Area Pixel Deinterlacer', 'Kernel Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'SSIM', data: [0.995, 0.995, 0.995, 0.994, 0.994, 0.994, 0.994, 0.994, 0.994, 0.992, 0.992, 0.992, 0.991, 0.988, 0.987, 0.984, 0.984, 0.980, 0.977, 0.976, 0.975, 0.975, 0.967, 0.967, 0.962, 0.959, 0.953, 0.934, 0.815, 0.783, 0.669, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});