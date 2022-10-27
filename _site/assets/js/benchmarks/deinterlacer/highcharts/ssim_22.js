$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 22'},
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
        bar_options.xAxis.categories = ['Bob', 'SonyVegas Interpolate Field', 'DfRes 122000 G2e 3', 'FLAD', 'TDAN', 'DfRes SA', 'EDVR', 'MFDIN L', 'DfRes', 'Bob-Weave Deinterlacer', 'DUF', 'EDVR_woTSA', 'Vapoursynth EEDI3', 'YADIF', 'Weston 3-Field Deinterlacer', 'MSU Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth TDeintMod', 'MFDIN', 'NNEDI', 'Real-Time Deep Deinterlacer', 'ST-Deint', 'Kernel Deinterlacer', 'SwinDI', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Adobe Premiere Pro Built-In', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'SSIM', data: [0.997, 0.997, 0.996, 0.996, 0.996, 0.996, 0.995, 0.995, 0.995, 0.995, 0.995, 0.995, 0.994, 0.994, 0.993, 0.993, 0.992, 0.992, 0.992, 0.992, 0.991, 0.990, 0.990, 0.990, 0.989, 0.989, 0.989, 0.988, 0.985, 0.978, 0.973, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});