$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 2'},
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
        bar_options.xAxis.categories = ['FLAD', 'Vapoursynth EEDI3', 'NNEDI', 'DfRes 122000 G2e 3', 'MFDIN L', 'Vapoursynth TDeintMod', 'DfRes', 'ST-Deint', 'DfRes SA', 'Bob-Weave Deinterlacer', 'Bob', 'SonyVegas Interpolate Field', 'SwinDI', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'EDVR_woTSA', 'MSU Deinterlacer', 'YADIF', 'DUF', 'TDAN', 'EDVR', 'MFDIN', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'SSIM', data: [0.991, 0.991, 0.990, 0.990, 0.990, 0.990, 0.990, 0.990, 0.990, 0.989, 0.989, 0.989, 0.989, 0.989, 0.986, 0.981, 0.981, 0.981, 0.980, 0.979, 0.978, 0.966, 0.964, 0.946, 0.935, 0.935, 0.919, 0.919, 0.902, 0.861, 0.802, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});