$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 14'},
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
        bar_options.xAxis.categories = ['ST-Deint', 'SonyVegas Interpolate Field', 'Vapoursynth EEDI3', 'NNEDI', 'Bob', 'Vapoursynth TDeintMod', 'FLAD', 'MFDIN L', 'Real-Time Deep Deinterlacer', 'DfRes 122000 G2e 3', 'EDVR_woTSA', 'SwinDI', 'DfRes', 'Bob-Weave Deinterlacer', 'DfRes SA', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'DUF', 'EDVR', 'YADIF', 'TDAN', 'MSU Deinterlacer', 'MFDIN', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'SonyVegas Blend Field', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Adobe Premiere Pro Built-In', 'Motion Compensation Deinterlacer', ];
        bar_options.series.push({name: 'SSIM', data: [0.977, 0.975, 0.975, 0.974, 0.974, 0.973, 0.973, 0.973, 0.972, 0.972, 0.972, 0.972, 0.971, 0.971, 0.971, 0.968, 0.964, 0.962, 0.960, 0.958, 0.957, 0.955, 0.935, 0.930, 0.922, 0.922, 0.902, 0.900, 0.887, 0.859, 0.851, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});