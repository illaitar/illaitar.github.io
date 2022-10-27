$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 24'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'DfRes', 'DfRes SA', 'DfRes 122000 G2e 3', 'EDVR_woTSA', 'SwinDI', 'MSU Deinterlacer', 'EDVR', 'MFDIN', 'Vapoursynth EEDI3', 'ST-Deint', 'DUF', 'NNEDI', 'Real-Time Deep Deinterlacer', 'TDAN', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'Bob', 'SonyVegas Interpolate Field', 'YADIF', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'SSIM', data: [0.987, 0.983, 0.980, 0.974, 0.973, 0.970, 0.969, 0.969, 0.965, 0.965, 0.959, 0.958, 0.955, 0.954, 0.950, 0.950, 0.943, 0.941, 0.941, 0.941, 0.940, 0.935, 0.928, 0.926, 0.924, 0.924, 0.917, 0.886, 0.785, 0.726, 0.698, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});