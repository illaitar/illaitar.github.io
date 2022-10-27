$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 15'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'YADIF', 'FLAD', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'ST-Deint', 'DfRes 122000 G2e 3', 'Kernel Deinterlacer', 'MSU Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'DfRes SA', 'MFDIN', 'SwinDI', 'PAL Interpolation', 'TDAN', 'EDVR', 'DUF', 'Real-Time Deep Deinterlacer', 'DfRes', 'NNEDI', 'EDVR_woTSA', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Vapoursynth EEDI3', 'Adobe Premiere Pro Built-In', 'Bob', 'SonyVegas Interpolate Field', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'PSNR', data: [53.984, 53.564, 51.703, 50.197, 49.200, 47.072, 46.856, 46.794, 46.424, 46.139, 45.861, 45.417, 44.808, 43.566, 43.255, 43.107, 42.264, 42.157, 41.918, 41.443, 40.868, 40.715, 39.844, 38.995, 38.995, 38.839, 37.670, 37.232, 37.224, 34.845, 27.790, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});