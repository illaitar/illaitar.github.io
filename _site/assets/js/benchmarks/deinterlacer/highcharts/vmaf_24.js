$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 24'},
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
        bar_options.xAxis.categories = ['FLAD', 'DfRes', 'MFDIN L', 'DfRes SA', 'SwinDI', 'DfRes 122000 G2e 3', 'MFDIN', 'EDVR_woTSA', 'EDVR', 'NNEDI', 'MSU Deinterlacer', 'ST-Deint', 'Vapoursynth EEDI3', 'Real-Time Deep Deinterlacer', 'DUF', 'Vapoursynth TDeintMod', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'TDAN', 'SonyVegas Interpolate Field', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'YADIF', 'Bob', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [100.000, 99.933, 99.791, 99.727, 99.628, 99.597, 99.486, 99.377, 99.206, 97.965, 97.807, 97.074, 96.071, 95.801, 95.445, 94.789, 94.148, 94.137, 93.510, 93.123, 93.007, 92.183, 90.249, 90.249, 89.588, 89.454, 88.970, 83.335, 50.892, 45.437, 36.877, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});