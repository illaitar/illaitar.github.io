$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 0'},
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
        bar_options.xAxis.categories = ['DfRes', 'FLAD', 'DfRes 122000 G2e 3', 'SonyVegas Interpolate Field', 'Vapoursynth EEDI3', 'Bob', 'DfRes SA', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'ST-Deint', 'TDAN', 'YADIF', 'NNEDI', 'DUF', 'MFDIN L', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth TDeintMod', 'MSU Deinterlacer', 'EDVR', 'SwinDI', 'Real-Time Deep Deinterlacer', 'EDVR_woTSA', 'MFDIN', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'PAL Interpolation', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'SSIM', data: [0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.997, 0.996, 0.996, 0.996, 0.996, 0.996, 0.996, 0.995, 0.995, 0.994, 0.994, 0.994, 0.994, 0.994, 0.994, 0.992, 0.992, 0.986, 0.979, 0.979, 0.976, 0.968, 0.945, 0.937, 0.933, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});