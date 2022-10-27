$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 17'},
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
            yAxis: {min: 0.0,title: {text: 'PSNR'}},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            series: []
        };

        //$.getJSON('path/to/your/file.json', function (data) {
            //Here you can change any parameters("bar_options.xAxis.categories", "bar_options.series" and so on) to data from your json 
            //Data from json will be stored in object "data"

            //Highcharts.chart('arrow_plot', bar_options);
        //});
        bar_options.xAxis.categories = ['ST-Deint', 'FLAD', 'MFDIN L', 'DfRes 122000 G2e 3', 'DfRes SA', 'EDVR_woTSA', 'DUF', 'TDAN', 'SwinDI', 'Bob-Weave Deinterlacer', 'EDVR', 'Vapoursynth TDeintMod', 'Real-Time Deep Deinterlacer', 'MSU Deinterlacer', 'NNEDI', 'MFDIN', 'YADIF', 'Vapoursynth EEDI3', 'Weston 3-Field Deinterlacer', 'Bob', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer (optimal parameters)', 'DfRes', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [46.390, 46.150, 46.089, 45.955, 45.937, 45.348, 44.675, 44.541, 44.417, 44.318, 44.018, 43.798, 43.446, 43.216, 43.171, 43.106, 42.962, 42.921, 42.876, 42.544, 42.509, 42.466, 42.126, 41.285, 39.752, 39.746, 39.746, 37.240, 33.824, 33.217, 31.247, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});