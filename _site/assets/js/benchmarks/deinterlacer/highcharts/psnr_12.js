$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 12'},
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
        bar_options.xAxis.categories = ['Adobe Premiere Pro Built-In', 'SwinDI', 'DfRes SA', 'DfRes 122000 G2e 3', 'ST-Deint', 'EDVR_woTSA', 'EDVR', 'MFDIN L', 'FLAD', 'DUF', 'MFDIN', 'TDAN', 'DfRes', 'MSU Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Weston 3-Field Deinterlacer', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'NNEDI', 'SonyVegas Blend Field', 'Vapoursynth EEDI3', 'Bob', 'SonyVegas Interpolate Field', 'Vapoursynth TDeintMod', 'Motion Compensation Deinterlacer', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'PAL Interpolation', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', ];
        bar_options.series.push({name: 'PSNR', data: [67.855, 53.880, 47.685, 45.509, 43.640, 42.213, 39.337, 34.517, 33.403, 32.126, 30.104, 28.882, 27.449, 26.808, 25.711, 25.167, 24.500, 24.302, 24.010, 23.898, 23.779, 23.700, 23.699, 23.627, 23.573, 23.551, 23.542, 22.974, 22.581, 22.321, 22.321, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});