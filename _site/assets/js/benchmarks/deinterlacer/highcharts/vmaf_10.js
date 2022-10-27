$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 10'},
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
        bar_options.xAxis.categories = ['SwinDI', 'MFDIN L', 'FLAD', 'DfRes SA', 'EDVR_woTSA', 'DfRes 122000 G2e 3', 'EDVR', 'ST-Deint', 'MFDIN', 'DUF', 'Real-Time Deep Deinterlacer', 'DfRes', 'Bob-Weave Deinterlacer', 'MSU Deinterlacer', 'NNEDI', 'TDAN', 'Motion and Area Pixel Deinterlacer', 'Vapoursynth TDeintMod', 'YADIF', 'Vapoursynth EEDI3', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'SonyVegas Interpolate Field', 'Bob', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [98.945, 97.810, 97.503, 97.458, 97.279, 97.213, 97.132, 97.079, 96.889, 96.526, 96.195, 96.044, 95.988, 95.955, 95.914, 95.823, 94.973, 94.686, 94.619, 93.789, 93.692, 92.509, 92.509, 91.922, 91.726, 90.599, 90.518, 89.950, 86.406, 85.055, 73.715, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});