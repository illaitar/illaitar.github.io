$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 27'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'DfRes SA', 'DfRes 122000 G2e 3', 'DfRes', 'MFDIN', 'DUF', 'EDVR', 'EDVR_woTSA', 'MSU Deinterlacer', 'TDAN', 'YADIF', 'ST-Deint', 'NNEDI', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'Muksun Deinterlacer', 'Vapoursynth EEDI3', 'Weston 3-Field Deinterlacer', 'Bob', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'SwinDI', 'ASVZZZ Deinterlacer', 'FLAD', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [2.775, 2.620, 2.569, 2.329, 2.303, 2.068, 1.974, 1.833, 1.653, 1.631, 1.303, 1.288, 1.100, 1.056, 1.038, 0.973, 0.886, 0.813, 0.742, 0.602, 0.560, 0.452, 0.449, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});