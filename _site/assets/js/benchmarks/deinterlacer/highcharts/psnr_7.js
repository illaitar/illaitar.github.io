$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 7'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'DfRes SA', 'DfRes 122000 G2e 3', 'DfRes', 'MSU Deinterlacer', 'EDVR_woTSA', 'EDVR', 'MFDIN', 'DUF', 'TDAN', 'ST-Deint', 'Bob-Weave Deinterlacer', 'YADIF', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Vapoursynth EEDI3', 'Kernel Deinterlacer', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'SwinDI', 'Motion and Area Pixel Deinterlacer', 'Bob', 'SonyVegas Interpolate Field', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'SonyVegas Blend Field', 'Adobe Premiere Pro Built-In', 'Motion Compensation Deinterlacer', 'PAL Interpolation', ];
        bar_options.series.push({name: 'PSNR', data: [46.201, 44.899, 43.179, 42.916, 42.088, 41.444, 41.056, 40.928, 40.844, 40.476, 40.061, 39.460, 38.160, 37.684, 37.668, 37.474, 37.279, 37.230, 37.199, 37.197, 36.955, 36.880, 36.553, 36.513, 36.502, 36.178, 36.178, 35.411, 35.355, 34.702, 34.237, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});