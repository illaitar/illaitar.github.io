$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 5'},
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
        bar_options.xAxis.categories = ['MFDIN', 'MFDIN L', 'DfRes', 'DfRes SA', 'Muksun Deinterlacer', 'YADIF', 'MSU Deinterlacer', 'ST-Deint', 'Vapoursynth TDeintMod', 'Vapoursynth EEDI3', 'EDVR', 'SonyVegas Interpolate Field', 'NNEDI', 'DfRes 122000 G2e 3', 'DUF', 'Kernel Deinterlacer', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'EDVR_woTSA', 'Kernel Deinterlacer (optimal parameters)', 'TDAN', 'Weston 3-Field Deinterlacer', 'Bob', 'ASVZZZ Deinterlacer', 'FLAD', 'SwinDI', 'Motion and Area Pixel Deinterlacer', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', 'PAL Interpolation', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [1.445, 1.109, 1.082, 0.948, 0.923, 0.810, 0.800, 0.719, 0.688, 0.675, 0.651, 0.640, 0.618, 0.616, 0.602, 0.597, 0.579, 0.542, 0.525, 0.506, 0.433, 0.426, 0.392, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});