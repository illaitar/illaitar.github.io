$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 20'},
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
        bar_options.xAxis.categories = ['DfRes 122000 G2e 3', 'DfRes SA', 'EDVR', 'MFDIN L', 'EDVR_woTSA', 'DUF', 'FLAD', 'MSU Deinterlacer', 'TDAN', 'DfRes', 'MFDIN', 'SwinDI', 'ST-Deint', 'Bob-Weave Deinterlacer', 'NNEDI', 'Vapoursynth EEDI3', 'Vapoursynth TDeintMod', 'Weston 3-Field Deinterlacer', 'Real-Time Deep Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Bob', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Adobe Premiere Pro Built-In', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'SSIM', data: [1.000, 1.000, 0.998, 0.998, 0.998, 0.995, 0.995, 0.990, 0.990, 0.988, 0.985, 0.980, 0.977, 0.961, 0.945, 0.943, 0.943, 0.939, 0.939, 0.937, 0.936, 0.936, 0.931, 0.931, 0.911, 0.887, 0.887, 0.849, 0.804, 0.770, 0.756, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});