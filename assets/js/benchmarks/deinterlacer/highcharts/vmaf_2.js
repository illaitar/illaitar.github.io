$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 2'},
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
            yAxis: {min: 0.0,title: {text: 'VMAF'}},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            series: []
        };

        //$.getJSON('path/to/your/file.json', function (data) {
            //Here you can change any parameters("bar_options.xAxis.categories", "bar_options.series" and so on) to data from your json 
            //Data from json will be stored in object "data"

            //Highcharts.chart('arrow_plot', bar_options);
        //});
        bar_options.xAxis.categories = ['NNEDI', 'MFDIN L', 'SwinDI', 'ST-Deint', 'FLAD', 'SonyVegas Interpolate Field', 'Vapoursynth TDeintMod', 'Real-Time Deep Deinterlacer', 'DfRes SA', 'Vapoursynth EEDI3', 'Bob-Weave Deinterlacer', 'DfRes 122000 G2e 3', 'Kernel Deinterlacer (optimal parameters)', 'DfRes', 'Weston 3-Field Deinterlacer', 'Bob', 'YADIF', 'MSU Deinterlacer', 'EDVR_woTSA', 'DUF', 'TDAN', 'Kernel Deinterlacer', 'EDVR', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'MFDIN', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [99.776, 99.751, 99.741, 99.718, 99.562, 99.464, 99.463, 99.333, 99.317, 99.295, 99.231, 99.228, 99.217, 98.982, 98.888, 98.377, 95.274, 95.014, 94.569, 94.434, 93.787, 93.125, 91.385, 90.459, 90.459, 90.261, 88.747, 86.686, 53.147, 39.985, 36.630, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});