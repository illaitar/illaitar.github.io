$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 17'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'SwinDI', 'DfRes SA', 'DfRes 122000 G2e 3', 'FLAD', 'EDVR_woTSA', 'ST-Deint', 'DUF', 'Vapoursynth TDeintMod', 'Bob-Weave Deinterlacer', 'NNEDI', 'TDAN', 'EDVR', 'MFDIN', 'Real-Time Deep Deinterlacer', 'MSU Deinterlacer', 'Vapoursynth EEDI3', 'DfRes', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'Weston 3-Field Deinterlacer', 'SonyVegas Interpolate Field', 'Motion and Area Pixel Deinterlacer', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [99.576, 99.313, 99.129, 98.914, 98.632, 98.526, 98.374, 97.889, 97.773, 97.702, 97.466, 97.440, 97.389, 96.841, 95.370, 94.475, 94.437, 94.200, 93.864, 93.815, 93.814, 93.202, 93.041, 92.454, 91.045, 89.422, 89.422, 82.659, 58.486, 53.027, 46.644, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});