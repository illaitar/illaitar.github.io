$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 8'},
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
        bar_options.xAxis.categories = ['MFDIN', 'YADIF', 'ST-Deint', 'DfRes SA', 'DfRes', 'SonyVegas Interpolate Field', 'DfRes 122000 G2e 3', 'Bob-Weave Deinterlacer', 'MSU Deinterlacer', 'NNEDI', 'Bob', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'Vapoursynth EEDI3', 'Vapoursynth TDeintMod', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'MFDIN L', 'DUF', 'EDVR', 'TDAN', 'Kernel Deinterlacer', 'EDVR_woTSA', 'SwinDI', 'Motion and Area Pixel Deinterlacer', 'ASVZZZ Deinterlacer', 'FLAD', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [1.511, 1.322, 1.301, 1.251, 1.249, 1.234, 1.207, 1.201, 1.160, 1.155, 1.133, 1.132, 1.087, 1.082, 1.068, 1.047, 1.041, 0.938, 0.819, 0.692, 0.676, 0.403, 0.397, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});