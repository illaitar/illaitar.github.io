$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 5'},
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
        bar_options.xAxis.categories = ['SwinDI', 'MFDIN L', 'NNEDI', 'DfRes SA', 'FLAD', 'DfRes 122000 G2e 3', 'Real-Time Deep Deinterlacer', 'ST-Deint', 'DfRes', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'Vapoursynth EEDI3', 'MFDIN', 'MSU Deinterlacer', 'EDVR_woTSA', 'Kernel Deinterlacer (optimal parameters)', 'SonyVegas Interpolate Field', 'ASVZZZ Deinterlacer', 'Muksun Deinterlacer', 'Kernel Deinterlacer', 'Weston 3-Field Deinterlacer', 'DUF', 'Motion and Area Pixel Deinterlacer', 'YADIF', 'EDVR', 'Bob', 'PAL Interpolation', 'TDAN', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [99.333, 99.265, 99.079, 98.783, 98.639, 98.552, 98.224, 98.183, 98.147, 97.151, 96.957, 96.867, 96.693, 96.079, 95.750, 95.555, 95.488, 95.329, 95.329, 95.275, 95.234, 94.679, 94.460, 94.420, 93.896, 93.829, 92.622, 91.242, 52.872, 41.542, 35.598, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});