$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 27'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'DfRes', 'MSU Deinterlacer', 'DfRes 122000 G2e 3', 'DfRes SA', 'SwinDI', 'MFDIN', 'EDVR_woTSA', 'ST-Deint', 'EDVR', 'SonyVegas Interpolate Field', 'Bob', 'DUF', 'Vapoursynth EEDI3', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer', 'TDAN', 'Weston 3-Field Deinterlacer', 'YADIF', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', ];
        bar_options.series.push({name: 'SSIM', data: [0.928, 0.923, 0.918, 0.909, 0.907, 0.907, 0.899, 0.897, 0.894, 0.892, 0.888, 0.887, 0.887, 0.886, 0.886, 0.885, 0.884, 0.882, 0.881, 0.875, 0.872, 0.862, 0.861, 0.858, 0.855, 0.851, 0.851, 0.808, 0.726, 0.717, 0.686, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});