$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 16'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'YADIF', 'DfRes SA', 'DfRes', 'MSU Deinterlacer', 'MFDIN', 'ST-Deint', 'Bob-Weave Deinterlacer', 'EDVR_woTSA', 'Real-Time Deep Deinterlacer', 'DfRes 122000 G2e 3', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'SonyVegas Interpolate Field', 'EDVR', 'Bob', 'Weston 3-Field Deinterlacer', 'NNEDI', 'Vapoursynth EEDI3', 'Kernel Deinterlacer (optimal parameters)', 'DUF', 'TDAN', 'ASVZZZ Deinterlacer', 'SwinDI', 'FLAD', 'Motion and Area Pixel Deinterlacer', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [1.678, 1.333, 1.251, 1.191, 1.175, 1.119, 1.079, 1.076, 1.067, 1.044, 1.044, 1.035, 0.991, 0.949, 0.921, 0.870, 0.865, 0.812, 0.809, 0.776, 0.709, 0.677, 0.405, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});