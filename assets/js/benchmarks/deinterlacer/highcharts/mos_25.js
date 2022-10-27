$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 25'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'DfRes 122000 G2e 3', 'DfRes SA', 'DfRes', 'MFDIN', 'MSU Deinterlacer', 'EDVR_woTSA', 'EDVR', 'YADIF', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'Real-Time Deep Deinterlacer', 'NNEDI', 'Vapoursynth EEDI3', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'TDAN', 'DUF', 'Bob', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer', 'ST-Deint', 'Muksun Deinterlacer', 'SwinDI', 'Motion and Area Pixel Deinterlacer', 'ASVZZZ Deinterlacer', 'FLAD', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', 'PAL Interpolation', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [2.488, 2.404, 2.371, 2.312, 2.227, 2.058, 1.935, 1.858, 1.823, 1.658, 1.602, 1.552, 1.534, 1.379, 1.371, 1.284, 1.273, 1.269, 1.197, 1.185, 0.974, 0.583, 0.450, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});