$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 1'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'SwinDI', 'FLAD', 'NNEDI', 'MFDIN', 'ST-Deint', 'DfRes SA', 'DfRes 122000 G2e 3', 'Real-Time Deep Deinterlacer', 'DfRes', 'EDVR_woTSA', 'EDVR', 'Vapoursynth TDeintMod', 'Vapoursynth EEDI3', 'Bob-Weave Deinterlacer', 'DUF', 'TDAN', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Weston 3-Field Deinterlacer', 'MSU Deinterlacer', 'YADIF', 'Bob', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [95.340, 93.361, 92.180, 91.768, 91.435, 91.311, 90.721, 89.648, 89.464, 89.262, 89.194, 89.089, 88.760, 88.262, 88.190, 87.918, 87.869, 86.742, 86.549, 86.262, 85.885, 85.885, 85.625, 85.503, 84.593, 84.491, 83.498, 75.760, 49.979, 45.817, 40.362, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});