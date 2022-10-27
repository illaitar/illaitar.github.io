$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 7'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'DfRes', 'DfRes SA', 'DfRes 122000 G2e 3', 'MSU Deinterlacer', 'EDVR_woTSA', 'EDVR', 'DUF', 'MFDIN', 'TDAN', 'ST-Deint', 'SwinDI', 'Bob-Weave Deinterlacer', 'YADIF', 'NNEDI', 'Vapoursynth EEDI3', 'Real-Time Deep Deinterlacer', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer (optimal parameters)', 'Bob', 'Kernel Deinterlacer', 'SonyVegas Interpolate Field', 'Weston 3-Field Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'PAL Interpolation', ];
        bar_options.series.push({name: 'SSIM', data: [0.993, 0.992, 0.990, 0.989, 0.988, 0.984, 0.983, 0.982, 0.981, 0.980, 0.979, 0.972, 0.971, 0.971, 0.968, 0.968, 0.968, 0.966, 0.964, 0.964, 0.963, 0.963, 0.963, 0.962, 0.958, 0.958, 0.958, 0.945, 0.944, 0.935, 0.925, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});