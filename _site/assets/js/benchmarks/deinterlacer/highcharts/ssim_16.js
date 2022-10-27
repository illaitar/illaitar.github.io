$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 16'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'MSU Deinterlacer', 'DfRes', 'SwinDI', 'DfRes SA', 'MFDIN', 'DfRes 122000 G2e 3', 'EDVR_woTSA', 'ST-Deint', 'Vapoursynth EEDI3', 'NNEDI', 'EDVR', 'Bob', 'Real-Time Deep Deinterlacer', 'SonyVegas Interpolate Field', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer', 'Weston 3-Field Deinterlacer', 'DUF', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'TDAN', 'PAL Interpolation', 'SonyVegas Blend Field', 'Adobe Premiere Pro Built-In', 'Motion Compensation Deinterlacer', ];
        bar_options.series.push({name: 'SSIM', data: [0.976, 0.954, 0.947, 0.944, 0.925, 0.923, 0.923, 0.922, 0.921, 0.918, 0.918, 0.916, 0.913, 0.911, 0.911, 0.911, 0.909, 0.904, 0.904, 0.898, 0.893, 0.891, 0.890, 0.886, 0.886, 0.881, 0.866, 0.855, 0.669, 0.616, 0.613, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});