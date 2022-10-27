$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 15'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'ST-Deint', 'DfRes SA', 'YADIF', 'MSU Deinterlacer', 'DfRes 122000 G2e 3', 'MFDIN', 'DfRes', 'NNEDI', 'Muksun Deinterlacer', 'Real-Time Deep Deinterlacer', 'Vapoursynth TDeintMod', 'EDVR_woTSA', 'DUF', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'EDVR', 'Kernel Deinterlacer', 'TDAN', 'Vapoursynth EEDI3', 'Bob', 'Kernel Deinterlacer (optimal parameters)', 'SonyVegas Interpolate Field', 'ASVZZZ Deinterlacer', 'SwinDI', 'FLAD', 'Motion and Area Pixel Deinterlacer', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [2.469, 2.442, 2.411, 2.349, 2.283, 2.231, 2.111, 2.058, 1.942, 1.935, 1.846, 1.819, 1.379, 1.179, 1.179, 1.137, 1.114, 0.967, 0.889, 0.836, 0.663, 0.542, 0.458, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});