$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 27'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'DfRes', 'MSU Deinterlacer', 'DfRes SA', 'DfRes 122000 G2e 3', 'MFDIN', 'ST-Deint', 'EDVR_woTSA', 'SwinDI', 'EDVR', 'DUF', 'NNEDI', 'SonyVegas Interpolate Field', 'Vapoursynth EEDI3', 'Bob', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Vapoursynth TDeintMod', 'Bob-Weave Deinterlacer', 'TDAN', 'Weston 3-Field Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [32.192, 31.446, 30.660, 29.914, 29.864, 29.780, 29.615, 29.473, 28.896, 28.868, 28.639, 28.065, 28.039, 27.984, 27.984, 27.984, 27.849, 27.818, 27.756, 27.739, 27.604, 27.394, 27.191, 26.969, 26.554, 26.454, 26.454, 25.600, 23.926, 22.462, 22.246, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});