$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 26'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'Adobe Premiere Pro Built-In', 'DfRes SA', 'DfRes 122000 G2e 3', 'SwinDI', 'FLAD', 'EDVR_woTSA', 'EDVR', 'DfRes', 'ST-Deint', 'DUF', 'MFDIN', 'MSU Deinterlacer', 'TDAN', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Real-Time Deep Deinterlacer', 'Motion Compensation Deinterlacer', 'Vapoursynth TDeintMod', 'Motion and Area Pixel Deinterlacer', 'NNEDI', 'Kernel Deinterlacer', 'Vapoursynth EEDI3', 'Kernel Deinterlacer (optimal parameters)', 'Bob', 'SonyVegas Interpolate Field', 'YADIF', 'SonyVegas Blend Field', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', ];
        bar_options.series.push({name: 'PSNR', data: [41.959, 40.013, 39.996, 39.394, 38.898, 38.593, 36.378, 36.150, 34.964, 34.589, 33.301, 32.384, 31.581, 31.273, 27.403, 26.629, 26.510, 26.323, 26.186, 26.170, 26.165, 26.157, 26.099, 26.027, 26.011, 26.010, 25.773, 24.824, 24.518, 24.518, 24.044, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});