$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 1'},
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
        bar_options.xAxis.categories = ['FLAD', 'MFDIN L', 'SwinDI', 'ST-Deint', 'DfRes 122000 G2e 3', 'DfRes SA', 'DfRes', 'MSU Deinterlacer', 'DUF', 'EDVR_woTSA', 'TDAN', 'EDVR', 'Bob', 'SonyVegas Interpolate Field', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth EEDI3', 'YADIF', 'NNEDI', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'MFDIN', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Adobe Premiere Pro Built-In', 'Motion Compensation Deinterlacer', ];
        bar_options.series.push({name: 'SSIM', data: [0.972, 0.972, 0.971, 0.970, 0.967, 0.967, 0.966, 0.965, 0.964, 0.964, 0.963, 0.963, 0.962, 0.962, 0.962, 0.961, 0.961, 0.961, 0.960, 0.959, 0.959, 0.958, 0.957, 0.956, 0.956, 0.955, 0.950, 0.930, 0.928, 0.912, 0.905, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});