$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 14'},
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
        bar_options.xAxis.categories = ['ST-Deint', 'FLAD', 'MFDIN L', 'Vapoursynth TDeintMod', 'DfRes 122000 G2e 3', 'EDVR_woTSA', 'DfRes SA', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'SonyVegas Interpolate Field', 'Bob', 'Vapoursynth EEDI3', 'DUF', 'DfRes', 'Weston 3-Field Deinterlacer', 'EDVR', 'YADIF', 'TDAN', 'MSU Deinterlacer', 'SwinDI', 'NNEDI', 'MFDIN', 'Kernel Deinterlacer (optimal parameters)', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Kernel Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [44.688, 43.758, 43.735, 43.675, 43.407, 43.303, 43.281, 43.145, 42.631, 42.160, 42.158, 42.140, 42.028, 41.954, 41.941, 41.743, 41.708, 41.534, 41.459, 41.154, 40.989, 40.010, 38.459, 38.418, 38.418, 37.789, 37.099, 37.032, 36.830, 35.766, 35.114, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});