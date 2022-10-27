$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 0'},
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
        bar_options.xAxis.categories = ['NNEDI', 'MFDIN L', 'SwinDI', 'Vapoursynth TDeintMod', 'Bob-Weave Deinterlacer', 'FLAD', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer (optimal parameters)', 'DfRes SA', 'Real-Time Deep Deinterlacer', 'ST-Deint', 'Vapoursynth EEDI3', 'DfRes 122000 G2e 3', 'TDAN', 'DfRes', 'Weston 3-Field Deinterlacer', 'MFDIN', 'Kernel Deinterlacer', 'MSU Deinterlacer', 'Bob', 'DUF', 'YADIF', 'EDVR', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'EDVR_woTSA', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [99.870, 99.870, 99.855, 99.804, 99.798, 99.726, 99.637, 99.622, 99.603, 99.602, 99.602, 99.553, 99.506, 99.350, 99.103, 99.074, 99.013, 98.933, 98.606, 98.554, 97.605, 97.371, 96.875, 95.370, 95.370, 94.944, 94.548, 84.742, 68.345, 62.733, 58.872, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});