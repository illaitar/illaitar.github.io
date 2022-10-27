$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 4'},
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
        bar_options.xAxis.categories = ['DfRes SA', 'FLAD', 'MFDIN L', 'ST-Deint', 'DfRes 122000 G2e 3', 'Vapoursynth EEDI3', 'DfRes', 'Real-Time Deep Deinterlacer', 'NNEDI', 'Bob', 'Vapoursynth TDeintMod', 'SonyVegas Interpolate Field', 'SwinDI', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'EDVR_woTSA', 'MSU Deinterlacer', 'YADIF', 'DUF', 'TDAN', 'EDVR', 'MFDIN', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'SSIM', data: [0.986, 0.986, 0.986, 0.986, 0.985, 0.985, 0.985, 0.984, 0.984, 0.983, 0.983, 0.983, 0.983, 0.982, 0.979, 0.979, 0.976, 0.976, 0.976, 0.975, 0.975, 0.972, 0.971, 0.967, 0.953, 0.953, 0.951, 0.914, 0.852, 0.789, 0.742, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});