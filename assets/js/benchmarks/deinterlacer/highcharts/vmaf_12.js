$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 12'},
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
        bar_options.xAxis.categories = ['Adobe Premiere Pro Built-In', 'SwinDI', 'ST-Deint', 'MFDIN L', 'MFDIN', 'Motion and Area Pixel Deinterlacer', 'DfRes SA', 'DfRes 122000 G2e 3', 'EDVR_woTSA', 'NNEDI', 'SonyVegas Blend Field', 'EDVR', 'SonyVegas Interpolate Field', 'Motion Compensation Deinterlacer', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'FLAD', 'DUF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'TDAN', 'DfRes', 'MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'Vapoursynth TDeintMod', 'Vapoursynth EEDI3', 'Bob', 'YADIF', ];
        bar_options.series.push({name: 'VMAF', data: [99.914, 99.912, 99.810, 99.698, 99.318, 99.130, 96.449, 95.938, 94.828, 94.696, 94.506, 93.959, 90.866, 90.324, 90.257, 90.192, 88.853, 87.021, 86.847, 86.847, 84.598, 78.669, 74.248, 72.605, 67.973, 67.296, 66.647, 65.634, 65.078, 62.447, 60.793, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});