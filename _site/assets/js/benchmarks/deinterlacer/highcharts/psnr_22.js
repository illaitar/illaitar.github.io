$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 22'},
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
        bar_options.xAxis.categories = ['Bob', 'SonyVegas Interpolate Field', 'DfRes 122000 G2e 3', 'DfRes SA', 'FLAD', 'TDAN', 'MFDIN L', 'DUF', 'EDVR', 'EDVR_woTSA', 'Bob-Weave Deinterlacer', 'MSU Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'MFDIN', 'Vapoursynth TDeintMod', 'YADIF', 'ST-Deint', 'Kernel Deinterlacer', 'DfRes', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Weston 3-Field Deinterlacer', 'Vapoursynth EEDI3', 'PAL Interpolation', 'Adobe Premiere Pro Built-In', 'NNEDI', 'Real-Time Deep Deinterlacer', 'SwinDI', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'PSNR', data: [51.645, 51.505, 50.475, 50.463, 50.085, 49.852, 49.723, 49.173, 49.171, 48.997, 48.285, 48.040, 47.832, 47.603, 47.483, 47.303, 46.893, 46.820, 46.306, 45.973, 45.973, 45.907, 45.762, 45.487, 43.395, 43.138, 42.837, 42.014, 41.996, 40.610, 38.333, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});