$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 11'},
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
            yAxis: {min: 0.0,title: {text: 'PSNR'}},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            series: []
        };

        //$.getJSON('path/to/your/file.json', function (data) {
            //Here you can change any parameters("bar_options.xAxis.categories", "bar_options.series" and so on) to data from your json 
            //Data from json will be stored in object "data"

            //Highcharts.chart('arrow_plot', bar_options);
        //});
        bar_options.xAxis.categories = ['FLAD', 'MFDIN L', 'SwinDI', 'ST-Deint', 'DfRes SA', 'DfRes 122000 G2e 3', 'DfRes', 'NNEDI', 'MFDIN', 'Vapoursynth EEDI3', 'MSU Deinterlacer', 'Real-Time Deep Deinterlacer', 'Bob', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'EDVR', 'Vapoursynth TDeintMod', 'EDVR_woTSA', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'DUF', 'YADIF', 'Motion and Area Pixel Deinterlacer', 'TDAN', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [20.545, 20.404, 20.298, 20.232, 19.705, 19.495, 18.854, 18.668, 18.627, 18.474, 18.435, 18.340, 18.211, 18.211, 18.102, 18.064, 17.884, 17.753, 17.726, 17.706, 17.653, 17.632, 17.601, 17.555, 17.397, 17.294, 17.294, 16.708, 15.720, 14.640, 14.367, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});