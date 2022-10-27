$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 15'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'MSU Deinterlacer', 'YADIF', 'Vapoursynth TDeintMod', 'ST-Deint', 'DfRes 122000 G2e 3', 'DfRes SA', 'Bob-Weave Deinterlacer', 'SwinDI', 'MFDIN', 'PAL Interpolation', 'Motion and Area Pixel Deinterlacer', 'EDVR_woTSA', 'DUF', 'EDVR', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'TDAN', 'Real-Time Deep Deinterlacer', 'DfRes', 'NNEDI', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Vapoursynth EEDI3', 'Bob', 'SonyVegas Interpolate Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [98.357, 98.148, 97.555, 97.549, 97.420, 97.400, 97.386, 97.355, 96.970, 96.906, 96.789, 96.053, 95.934, 95.848, 95.769, 95.728, 95.166, 95.158, 94.874, 94.552, 93.915, 93.445, 92.575, 91.974, 91.974, 91.759, 90.234, 90.083, 74.839, 69.869, 56.883, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});