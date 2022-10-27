$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 21'},
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
            yAxis: {min: 0.0,title: {text: 'SSIM'}},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            series: []
        };

        //$.getJSON('path/to/your/file.json', function (data) {
            //Here you can change any parameters("bar_options.xAxis.categories", "bar_options.series" and so on) to data from your json 
            //Data from json will be stored in object "data"

            //Highcharts.chart('arrow_plot', bar_options);
        //});
        bar_options.xAxis.categories = ['MFDIN L', 'MSU Deinterlacer', 'FLAD', 'DfRes', 'ST-Deint', 'DfRes 122000 G2e 3', 'DfRes SA', 'EDVR_woTSA', 'Bob', 'SonyVegas Interpolate Field', 'SwinDI', 'Vapoursynth EEDI3', 'NNEDI', 'Real-Time Deep Deinterlacer', 'EDVR', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer', 'MFDIN', 'DUF', 'Weston 3-Field Deinterlacer', 'TDAN', 'YADIF', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', ];
        bar_options.series.push({name: 'SSIM', data: [0.906, 0.883, 0.882, 0.876, 0.864, 0.860, 0.858, 0.855, 0.854, 0.854, 0.853, 0.852, 0.851, 0.851, 0.850, 0.848, 0.848, 0.846, 0.842, 0.842, 0.839, 0.838, 0.829, 0.818, 0.818, 0.812, 0.812, 0.750, 0.621, 0.617, 0.579, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});