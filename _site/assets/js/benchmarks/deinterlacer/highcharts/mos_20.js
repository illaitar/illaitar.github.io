$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 20'},
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
        bar_options.xAxis.categories = ['DUF', 'MFDIN L', 'EDVR_woTSA', 'EDVR', 'DfRes 122000 G2e 3', 'DfRes SA', 'MSU Deinterlacer', 'DfRes', 'MFDIN', 'ST-Deint', 'TDAN', 'YADIF', 'NNEDI', 'Vapoursynth EEDI3', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth TDeintMod', 'Bob', 'SonyVegas Interpolate Field', 'SwinDI', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'FLAD', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [1.920, 1.904, 1.744, 1.739, 1.709, 1.672, 1.597, 1.557, 1.542, 1.490, 1.483, 1.336, 1.098, 0.988, 0.959, 0.951, 0.791, 0.718, 0.697, 0.652, 0.616, 0.420, 0.408, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});