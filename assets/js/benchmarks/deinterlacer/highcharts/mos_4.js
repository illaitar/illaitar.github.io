$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 4'},
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
        bar_options.xAxis.categories = ['DfRes SA', 'DfRes 122000 G2e 3', 'MFDIN', 'DfRes', 'Real-Time Deep Deinterlacer', 'MFDIN L', 'ST-Deint', 'NNEDI', 'YADIF', 'Vapoursynth EEDI3', 'MSU Deinterlacer', 'Vapoursynth TDeintMod', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer', 'SonyVegas Interpolate Field', 'Weston 3-Field Deinterlacer', 'Bob', 'Kernel Deinterlacer (optimal parameters)', 'EDVR_woTSA', 'Muksun Deinterlacer', 'EDVR', 'DUF', 'TDAN', 'Motion Compensation Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'FLAD', 'SwinDI', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [2.302, 2.153, 2.144, 2.060, 2.022, 1.990, 1.941, 1.793, 1.761, 1.637, 1.547, 1.509, 1.373, 1.216, 1.167, 1.139, 1.013, 0.998, 0.900, 0.730, 0.500, 0.493, 0.430, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});