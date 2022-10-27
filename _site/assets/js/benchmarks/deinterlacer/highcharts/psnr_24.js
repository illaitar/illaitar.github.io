$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 24'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'DfRes', 'DfRes SA', 'DfRes 122000 G2e 3', 'EDVR_woTSA', 'SwinDI', 'MFDIN', 'EDVR', 'MSU Deinterlacer', 'ST-Deint', 'DUF', 'Vapoursynth EEDI3', 'TDAN', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'YADIF', 'Vapoursynth TDeintMod', 'Bob', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Weston 3-Field Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [39.037, 37.384, 36.077, 34.742, 34.650, 34.106, 33.785, 33.637, 33.159, 32.923, 32.565, 31.650, 31.473, 31.134, 31.095, 30.653, 30.023, 29.930, 29.733, 29.662, 29.661, 29.623, 29.552, 29.361, 29.361, 29.255, 28.550, 27.699, 23.824, 22.463, 21.588, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});