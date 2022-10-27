$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'Overall PSNR'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'DfRes SA', 'FLAD', 'DfRes 122000 G2e 3', 'ST-Deint', 'SwinDI', 'EDVR_woTSA', 'EDVR', 'DfRes', 'MSU Deinterlacer', 'DUF', 'MFDIN', 'Bob-Weave Deinterlacer', 'TDAN', 'Vapoursynth TDeintMod', 'NNEDI', 'Vapoursynth EEDI3', 'Real-Time Deep Deinterlacer', 'YADIF', 'Weston 3-Field Deinterlacer', 'Bob', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Adobe Premiere Pro Built-In', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'PSNR', data: [42.547, 42.177, 41.964, 41.891, 40.974, 39.812, 39.686, 39.337, 39.247, 38.556, 38.512, 38.494, 37.948, 37.625, 37.617, 37.099, 37.061, 37.031, 36.918, 36.788, 36.668, 36.649, 36.449, 35.712, 35.278, 34.486, 34.486, 32.901, 30.772, 29.259, 28.344, ]});
        Highcharts.chart('overall-plot', bar_options);
        });
});