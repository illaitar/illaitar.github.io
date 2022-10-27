$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 17'},
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
        bar_options.xAxis.categories = ['ST-Deint', 'DfRes 122000 G2e 3', 'FLAD', 'DfRes SA', 'MFDIN L', 'SwinDI', 'EDVR_woTSA', 'Vapoursynth EEDI3', 'Bob', 'SonyVegas Interpolate Field', 'NNEDI', 'Bob-Weave Deinterlacer', 'DUF', 'Real-Time Deep Deinterlacer', 'DfRes', 'TDAN', 'Vapoursynth TDeintMod', 'EDVR', 'Weston 3-Field Deinterlacer', 'MSU Deinterlacer', 'YADIF', 'Kernel Deinterlacer (optimal parameters)', 'MFDIN', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'SSIM', data: [0.987, 0.986, 0.986, 0.985, 0.985, 0.984, 0.984, 0.984, 0.983, 0.983, 0.983, 0.983, 0.983, 0.983, 0.983, 0.982, 0.981, 0.981, 0.980, 0.979, 0.979, 0.977, 0.972, 0.964, 0.957, 0.957, 0.954, 0.934, 0.931, 0.899, 0.890, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});