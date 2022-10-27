$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 9'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'DfRes SA', 'MSU Deinterlacer', 'DfRes', 'Real-Time Deep Deinterlacer', 'ST-Deint', 'DfRes 122000 G2e 3', 'EDVR_woTSA', 'YADIF', 'MFDIN', 'EDVR', 'TDAN', 'DUF', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'Bob-Weave Deinterlacer', 'Vapoursynth EEDI3', 'Vapoursynth TDeintMod', 'NNEDI', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'SonyVegas Interpolate Field', 'Bob', 'SwinDI', 'Motion and Area Pixel Deinterlacer', 'ASVZZZ Deinterlacer', 'FLAD', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [1.213, 1.036, 1.004, 0.982, 0.977, 0.966, 0.949, 0.949, 0.930, 0.892, 0.765, 0.747, 0.691, 0.645, 0.639, 0.576, 0.563, 0.492, 0.452, 0.408, 0.406, 0.395, 0.394, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});