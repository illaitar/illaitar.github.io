$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 9'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'SwinDI', 'NNEDI', 'FLAD', 'ST-Deint', 'Real-Time Deep Deinterlacer', 'DfRes SA', 'MFDIN', 'DfRes 122000 G2e 3', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'Vapoursynth EEDI3', 'DfRes', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'MSU Deinterlacer', 'Kernel Deinterlacer', 'YADIF', 'EDVR', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'DUF', 'Motion and Area Pixel Deinterlacer', 'TDAN', 'EDVR_woTSA', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [98.221, 97.804, 97.804, 97.141, 96.674, 96.631, 96.272, 96.193, 96.134, 96.060, 96.058, 95.881, 95.274, 93.764, 93.496, 93.457, 92.749, 92.176, 91.922, 91.875, 91.560, 91.557, 91.557, 91.005, 90.561, 90.379, 90.147, 85.351, 52.241, 41.840, 37.043, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});