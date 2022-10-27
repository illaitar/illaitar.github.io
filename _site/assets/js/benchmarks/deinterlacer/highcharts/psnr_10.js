$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 10'},
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
        bar_options.xAxis.categories = ['FLAD', 'MFDIN L', 'DfRes SA', 'DfRes 122000 G2e 3', 'EDVR', 'EDVR_woTSA', 'MFDIN', 'ST-Deint', 'Bob-Weave Deinterlacer', 'MSU Deinterlacer', 'DUF', 'NNEDI', 'DfRes', 'YADIF', 'Real-Time Deep Deinterlacer', 'TDAN', 'Weston 3-Field Deinterlacer', 'Vapoursynth TDeintMod', 'Motion and Area Pixel Deinterlacer', 'Vapoursynth EEDI3', 'SwinDI', 'Kernel Deinterlacer (optimal parameters)', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Kernel Deinterlacer', 'Bob', 'SonyVegas Interpolate Field', 'Motion Compensation Deinterlacer', 'PAL Interpolation', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'PSNR', data: [60.920, 60.611, 58.873, 58.736, 57.240, 56.980, 56.598, 56.069, 53.313, 53.164, 52.946, 52.853, 52.224, 52.192, 51.537, 51.208, 50.738, 50.037, 49.940, 49.463, 48.319, 48.281, 47.908, 47.908, 47.579, 47.136, 47.136, 43.465, 43.267, 40.470, 40.089, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});