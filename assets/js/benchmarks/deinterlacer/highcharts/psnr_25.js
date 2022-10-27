$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 25'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'DfRes SA', 'DfRes 122000 G2e 3', 'EDVR_woTSA', 'EDVR', 'MFDIN', 'DfRes', 'DUF', 'TDAN', 'MSU Deinterlacer', 'ST-Deint', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'YADIF', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Kernel Deinterlacer (optimal parameters)', 'Motion Compensation Deinterlacer', 'SwinDI', 'Real-Time Deep Deinterlacer', 'Adobe Premiere Pro Built-In', 'NNEDI', 'Vapoursynth EEDI3', 'Bob', 'SonyVegas Interpolate Field', 'SonyVegas Blend Field', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', ];
        bar_options.series.push({name: 'PSNR', data: [41.044, 40.526, 39.755, 39.514, 38.948, 38.866, 38.310, 38.168, 37.939, 37.737, 37.357, 36.341, 34.890, 33.494, 33.001, 32.434, 32.008, 31.839, 31.745, 31.186, 31.028, 30.882, 30.872, 30.514, 30.090, 29.880, 29.271, 29.270, 27.326, 27.187, 27.187, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});