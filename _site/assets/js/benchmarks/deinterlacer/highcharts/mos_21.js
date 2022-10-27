$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 21'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'DfRes SA', 'MFDIN', 'DfRes', 'MSU Deinterlacer', 'DfRes 122000 G2e 3', 'YADIF', 'Muksun Deinterlacer', 'NNEDI', 'Vapoursynth TDeintMod', 'EDVR_woTSA', 'Weston 3-Field Deinterlacer', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'ST-Deint', 'Vapoursynth EEDI3', 'Bob', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer', 'EDVR', 'DUF', 'TDAN', 'SwinDI', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'FLAD', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [2.125, 1.639, 1.557, 1.505, 1.434, 1.400, 1.391, 1.259, 1.257, 1.207, 1.137, 1.135, 1.113, 1.109, 1.095, 1.056, 1.044, 1.015, 1.008, 0.799, 0.694, 0.567, 0.412, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});