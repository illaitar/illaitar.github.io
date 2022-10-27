$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 4'},
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
        bar_options.xAxis.categories = ['ST-Deint', 'MFDIN L', 'FLAD', 'SwinDI', 'DfRes SA', 'DfRes', 'DfRes 122000 G2e 3', 'NNEDI', 'Vapoursynth EEDI3', 'Real-Time Deep Deinterlacer', 'Vapoursynth TDeintMod', 'Bob-Weave Deinterlacer', 'Bob', 'SonyVegas Interpolate Field', 'MFDIN', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'MSU Deinterlacer', 'YADIF', 'Kernel Deinterlacer', 'EDVR_woTSA', 'TDAN', 'DUF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'EDVR', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [42.463, 42.204, 42.051, 41.498, 41.421, 41.303, 41.277, 40.798, 40.547, 40.467, 39.836, 39.310, 39.212, 39.209, 38.852, 38.781, 38.745, 38.140, 38.108, 37.902, 36.732, 36.606, 36.569, 36.273, 36.273, 35.694, 35.504, 33.380, 26.881, 25.915, 23.219, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});