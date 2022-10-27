$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 16'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'DfRes', 'SwinDI', 'MFDIN', 'MSU Deinterlacer', 'NNEDI', 'DfRes SA', 'EDVR_woTSA', 'DfRes 122000 G2e 3', 'ST-Deint', 'Vapoursynth EEDI3', 'Real-Time Deep Deinterlacer', 'Vapoursynth TDeintMod', 'EDVR', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Bob', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'DUF', 'YADIF', 'PAL Interpolation', 'TDAN', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [99.573, 99.229, 97.319, 96.900, 96.723, 95.456, 94.129, 93.727, 92.922, 92.428, 92.062, 91.650, 91.300, 91.117, 90.447, 89.770, 88.907, 88.282, 88.280, 87.353, 87.127, 85.541, 85.541, 84.052, 82.328, 81.993, 78.991, 74.183, 31.653, 22.097, 17.557, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});