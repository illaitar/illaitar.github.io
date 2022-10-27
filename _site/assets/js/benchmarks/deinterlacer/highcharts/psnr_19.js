$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 19'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'ST-Deint', 'DfRes SA', 'DfRes 122000 G2e 3', 'DfRes', 'SwinDI', 'NNEDI', 'Vapoursynth EEDI3', 'Vapoursynth TDeintMod', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'Bob', 'SonyVegas Interpolate Field', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'MFDIN', 'MSU Deinterlacer', 'YADIF', 'Kernel Deinterlacer', 'DUF', 'EDVR_woTSA', 'TDAN', 'EDVR', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [46.294, 46.211, 45.939, 45.387, 45.250, 44.926, 44.725, 44.291, 43.885, 43.827, 43.822, 43.606, 43.041, 43.023, 42.671, 42.252, 41.849, 41.578, 41.391, 40.552, 39.959, 39.959, 39.901, 39.629, 38.831, 38.831, 38.038, 35.455, 29.770, 29.241, 26.616, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});