$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 6'},
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
        bar_options.xAxis.categories = ['FLAD', 'MFDIN L', 'DfRes 122000 G2e 3', 'DfRes SA', 'EDVR_woTSA', 'ST-Deint', 'EDVR', 'TDAN', 'DUF', 'MFDIN', 'MSU Deinterlacer', 'DfRes', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'YADIF', 'Real-Time Deep Deinterlacer', 'Vapoursynth TDeintMod', 'Motion and Area Pixel Deinterlacer', 'SwinDI', 'Kernel Deinterlacer', 'NNEDI', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth EEDI3', 'PAL Interpolation', 'SonyVegas Interpolate Field', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [38.125, 38.117, 37.914, 37.847, 37.803, 37.690, 37.677, 37.474, 37.205, 36.929, 36.588, 35.730, 35.207, 32.932, 32.700, 32.498, 31.036, 30.928, 30.848, 30.720, 30.357, 30.168, 29.954, 29.714, 29.214, 29.200, 28.932, 28.932, 28.674, 28.460, 27.563, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});