$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 11'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'DfRes SA', 'Muksun Deinterlacer', 'ST-Deint', 'Real-Time Deep Deinterlacer', 'DfRes', 'NNEDI', 'DfRes 122000 G2e 3', 'Vapoursynth EEDI3', 'MSU Deinterlacer', 'Bob', 'MFDIN', 'Bob-Weave Deinterlacer', 'EDVR_woTSA', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'Vapoursynth TDeintMod', 'EDVR', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer', 'DUF', 'Weston 3-Field Deinterlacer', 'TDAN', 'SwinDI', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'FLAD', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [1.456, 1.404, 1.356, 1.290, 1.157, 1.141, 1.123, 1.080, 1.064, 1.014, 1.002, 0.926, 0.901, 0.867, 0.850, 0.849, 0.812, 0.807, 0.801, 0.766, 0.744, 0.634, 0.402, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});