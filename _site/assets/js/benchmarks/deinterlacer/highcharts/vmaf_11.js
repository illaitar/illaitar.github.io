$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 11'},
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
            yAxis: {min: 0.0,title: {text: 'VMAF'}},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            series: []
        };

        //$.getJSON('path/to/your/file.json', function (data) {
            //Here you can change any parameters("bar_options.xAxis.categories", "bar_options.series" and so on) to data from your json 
            //Data from json will be stored in object "data"

            //Highcharts.chart('arrow_plot', bar_options);
        //});
        bar_options.xAxis.categories = ['SwinDI', 'FLAD', 'MFDIN L', 'ST-Deint', 'DfRes', 'DfRes SA', 'Vapoursynth EEDI3', 'NNEDI', 'Vapoursynth TDeintMod', 'DfRes 122000 G2e 3', 'Real-Time Deep Deinterlacer', 'MFDIN', 'SonyVegas Interpolate Field', 'Bob', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'MSU Deinterlacer', 'Bob-Weave Deinterlacer', 'EDVR', 'EDVR_woTSA', 'Motion and Area Pixel Deinterlacer', 'YADIF', 'DUF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'TDAN', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [64.181, 63.895, 63.544, 58.695, 57.895, 57.834, 57.530, 57.408, 56.526, 56.211, 56.042, 55.526, 54.625, 54.469, 54.414, 54.226, 53.622, 53.004, 52.708, 47.355, 46.876, 46.852, 44.696, 44.535, 43.595, 43.595, 41.027, 38.807, 33.179, 22.500, 16.593, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});