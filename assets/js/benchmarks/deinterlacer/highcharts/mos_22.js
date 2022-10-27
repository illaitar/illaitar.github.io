$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 22'},
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
        bar_options.xAxis.categories = ['Real-Time Deep Deinterlacer', 'NNEDI', 'DfRes', 'YADIF', 'Vapoursynth EEDI3', 'Bob-Weave Deinterlacer', 'DfRes 122000 G2e 3', 'MFDIN L', 'DfRes SA', 'MFDIN', 'EDVR_woTSA', 'Muksun Deinterlacer', 'EDVR', 'Kernel Deinterlacer (optimal parameters)', 'MSU Deinterlacer', 'Weston 3-Field Deinterlacer', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer', 'ST-Deint', 'DUF', 'SonyVegas Interpolate Field', 'Bob', 'TDAN', 'ASVZZZ Deinterlacer', 'SwinDI', 'FLAD', 'Motion and Area Pixel Deinterlacer', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', 'PAL Interpolation', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [2.290, 2.213, 2.183, 1.900, 1.605, 1.488, 1.440, 1.416, 1.362, 1.237, 1.231, 1.177, 1.130, 1.045, 1.023, 0.948, 0.938, 0.927, 0.841, 0.840, 0.697, 0.510, 0.415, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});