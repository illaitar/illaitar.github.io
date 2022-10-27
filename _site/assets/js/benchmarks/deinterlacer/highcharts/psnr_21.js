$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 21'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'ST-Deint', 'FLAD', 'MSU Deinterlacer', 'DfRes', 'DfRes 122000 G2e 3', 'DfRes SA', 'MFDIN', 'SwinDI', 'EDVR_woTSA', 'Bob', 'SonyVegas Interpolate Field', 'Vapoursynth EEDI3', 'NNEDI', 'Real-Time Deep Deinterlacer', 'EDVR', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'DUF', 'Weston 3-Field Deinterlacer', 'TDAN', 'YADIF', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [30.850, 29.956, 29.761, 29.573, 29.440, 28.842, 28.818, 28.716, 28.613, 28.570, 28.460, 28.459, 28.378, 28.371, 28.351, 28.344, 28.262, 28.189, 28.176, 28.104, 27.955, 27.929, 27.639, 27.410, 27.380, 27.317, 27.317, 25.992, 24.144, 23.173, 22.437, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});