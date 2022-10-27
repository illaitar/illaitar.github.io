$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 5'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'SwinDI', 'ST-Deint', 'DfRes', 'DfRes SA', 'DfRes 122000 G2e 3', 'Real-Time Deep Deinterlacer', 'MSU Deinterlacer', 'NNEDI', 'YADIF', 'Vapoursynth EEDI3', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'DUF', 'MFDIN', 'Bob', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer (optimal parameters)', 'EDVR_woTSA', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'EDVR', 'TDAN', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [39.728, 39.712, 39.388, 39.171, 38.653, 38.530, 38.341, 38.060, 37.603, 37.558, 37.217, 37.149, 36.992, 36.938, 36.932, 36.878, 36.871, 36.867, 36.693, 36.565, 36.520, 36.389, 36.208, 36.208, 35.897, 35.592, 34.993, 34.973, 26.780, 24.384, 21.723, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});