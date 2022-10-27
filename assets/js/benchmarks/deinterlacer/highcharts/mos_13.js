$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 13'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'DfRes', 'DfRes SA', 'MFDIN', 'DfRes 122000 G2e 3', 'TDAN', 'EDVR', 'DUF', 'EDVR_woTSA', 'MSU Deinterlacer', 'YADIF', 'ST-Deint', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'NNEDI', 'Vapoursynth TDeintMod', 'Vapoursynth EEDI3', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'Bob', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'SwinDI', 'Motion and Area Pixel Deinterlacer', 'ASVZZZ Deinterlacer', 'FLAD', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [2.817, 2.658, 2.542, 2.421, 2.363, 2.316, 2.272, 2.213, 2.125, 1.957, 1.689, 1.514, 1.509, 1.461, 1.345, 1.103, 1.077, 1.031, 0.718, 0.673, 0.629, 0.474, 0.464, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});