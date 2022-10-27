$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 10'},
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
        bar_options.xAxis.categories = ['Muksun Deinterlacer', 'MSU Deinterlacer', 'MFDIN L', 'DfRes', 'MFDIN', 'DfRes 122000 G2e 3', 'Vapoursynth EEDI3', 'YADIF', 'Real-Time Deep Deinterlacer', 'DfRes SA', 'ST-Deint', 'NNEDI', 'Weston 3-Field Deinterlacer', 'EDVR', 'EDVR_woTSA', 'Vapoursynth TDeintMod', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer (optimal parameters)', 'Bob', 'Bob-Weave Deinterlacer', 'DUF', 'Kernel Deinterlacer', 'TDAN', 'SwinDI', 'Motion and Area Pixel Deinterlacer', 'ASVZZZ Deinterlacer', 'FLAD', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [2.788, 2.786, 2.773, 2.654, 2.635, 2.512, 2.486, 2.470, 2.454, 2.453, 2.406, 2.352, 2.079, 2.068, 2.029, 2.004, 1.952, 1.781, 1.732, 1.668, 1.094, 0.837, 0.476, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});