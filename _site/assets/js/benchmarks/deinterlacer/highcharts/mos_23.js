$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 23'},
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
            yAxis: {min: 0.0,title: {text: 'MOS'}},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            series: []
        };

        //$.getJSON('path/to/your/file.json', function (data) {
            //Here you can change any parameters("bar_options.xAxis.categories", "bar_options.series" and so on) to data from your json 
            //Data from json will be stored in object "data"

            //Highcharts.chart('arrow_plot', bar_options);
        //});
        bar_options.xAxis.categories = ['MFDIN', 'DfRes 122000 G2e 3', 'MFDIN L', 'ST-Deint', 'DfRes SA', 'EDVR_woTSA', 'DfRes', 'EDVR', 'YADIF', 'MSU Deinterlacer', 'TDAN', 'Real-Time Deep Deinterlacer', 'Muksun Deinterlacer', 'Vapoursynth EEDI3', 'DUF', 'Kernel Deinterlacer', 'NNEDI', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Bob', 'SonyVegas Interpolate Field', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer (optimal parameters)', 'ASVZZZ Deinterlacer', 'SwinDI', 'Motion and Area Pixel Deinterlacer', 'FLAD', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [2.206, 1.587, 1.538, 1.511, 1.465, 1.441, 1.365, 1.346, 1.264, 1.264, 1.230, 1.067, 1.017, 0.992, 0.991, 0.906, 0.899, 0.860, 0.835, 0.613, 0.551, 0.476, 0.403, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});