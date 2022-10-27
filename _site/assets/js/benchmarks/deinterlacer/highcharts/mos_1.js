$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 1'},
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
        bar_options.xAxis.categories = ['MFDIN', 'MFDIN L', 'DfRes SA', 'YADIF', 'ST-Deint', 'DfRes 122000 G2e 3', 'MSU Deinterlacer', 'DfRes', 'EDVR', 'Real-Time Deep Deinterlacer', 'EDVR_woTSA', 'DUF', 'Muksun Deinterlacer', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'TDAN', 'Bob', 'NNEDI', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer (optimal parameters)', 'SonyVegas Interpolate Field', 'Vapoursynth EEDI3', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'SwinDI', 'ASVZZZ Deinterlacer', 'FLAD', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [1.695, 1.599, 1.328, 1.214, 1.029, 1.021, 1.013, 0.984, 0.965, 0.946, 0.887, 0.885, 0.848, 0.768, 0.727, 0.692, 0.668, 0.640, 0.621, 0.593, 0.584, 0.525, 0.397, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});