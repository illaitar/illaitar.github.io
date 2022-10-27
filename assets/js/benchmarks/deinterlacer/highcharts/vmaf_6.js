$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 6'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'DfRes SA', 'MFDIN', 'EDVR_woTSA', 'DfRes 122000 G2e 3', 'EDVR', 'TDAN', 'DUF', 'DfRes', 'ST-Deint', 'MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'SwinDI', 'NNEDI', 'Vapoursynth TDeintMod', 'YADIF', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth EEDI3', 'SonyVegas Interpolate Field', 'Motion and Area Pixel Deinterlacer', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [99.146, 97.000, 96.774, 96.728, 96.481, 96.475, 96.274, 96.200, 95.852, 95.728, 95.582, 94.005, 92.150, 90.394, 89.692, 89.620, 88.765, 87.538, 86.192, 84.982, 84.182, 83.393, 80.591, 80.094, 78.070, 77.778, 77.778, 72.769, 69.839, 68.283, 55.523, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});