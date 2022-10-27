$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 13'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'DfRes', 'DfRes SA', 'DfRes 122000 G2e 3', 'ST-Deint', 'EDVR_woTSA', 'EDVR', 'SwinDI', 'MSU Deinterlacer', 'DUF', 'MFDIN', 'Vapoursynth EEDI3', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Vapoursynth TDeintMod', 'TDAN', 'Bob-Weave Deinterlacer', 'Bob', 'SonyVegas Interpolate Field', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'YADIF', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [46.105, 45.643, 44.155, 43.806, 43.572, 41.587, 41.143, 40.621, 40.461, 40.422, 39.826, 39.724, 39.603, 39.500, 39.410, 39.247, 39.240, 38.957, 38.771, 38.749, 38.223, 38.178, 37.054, 36.778, 34.546, 34.443, 34.443, 31.998, 28.820, 28.165, 26.386, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});