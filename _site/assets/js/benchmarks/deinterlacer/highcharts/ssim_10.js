$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 10'},
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
        bar_options.xAxis.categories = ['NNEDI', 'DfRes 122000 G2e 3', 'YADIF', 'DfRes SA', 'EDVR', 'MFDIN L', 'MSU Deinterlacer', 'Vapoursynth TDeintMod', 'DfRes', 'TDAN', 'Vapoursynth EEDI3', 'FLAD', 'Bob-Weave Deinterlacer', 'DUF', 'EDVR_woTSA', 'ST-Deint', 'MFDIN', 'Real-Time Deep Deinterlacer', 'SwinDI', 'Bob', 'Motion and Area Pixel Deinterlacer', 'Kernel Deinterlacer', 'SonyVegas Interpolate Field', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'SSIM', data: [1.000, 1.000, 1.000, 1.000, 1.000, 1.000, 1.000, 1.000, 1.000, 1.000, 1.000, 1.000, 1.000, 1.000, 1.000, 1.000, 1.000, 1.000, 1.000, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.998, 0.996, 0.996, 0.995, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});