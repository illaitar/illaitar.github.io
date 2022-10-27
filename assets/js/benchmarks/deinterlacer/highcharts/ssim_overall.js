$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'Overall SSIM'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'DfRes SA', 'DfRes 122000 G2e 3', 'DfRes', 'SwinDI', 'ST-Deint', 'MSU Deinterlacer', 'EDVR_woTSA', 'EDVR', 'DUF', 'MFDIN', 'Vapoursynth EEDI3', 'NNEDI', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'TDAN', 'Bob', 'Vapoursynth TDeintMod', 'SonyVegas Interpolate Field', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'SSIM', data: [0.977, 0.975, 0.969, 0.969, 0.968, 0.967, 0.965, 0.963, 0.961, 0.959, 0.957, 0.956, 0.954, 0.954, 0.953, 0.953, 0.952, 0.951, 0.951, 0.951, 0.947, 0.947, 0.945, 0.939, 0.932, 0.928, 0.928, 0.901, 0.856, 0.830, 0.813, ]});
        Highcharts.chart('overall-plot', bar_options);
        });
});