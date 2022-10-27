$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 18'},
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
        bar_options.xAxis.categories = ['DfRes SA', 'DfRes 122000 G2e 3', 'EDVR_woTSA', 'DUF', 'EDVR', 'FLAD', 'Vapoursynth TDeintMod', 'YADIF', 'SonyVegas Interpolate Field', 'MFDIN L', 'TDAN', 'Vapoursynth EEDI3', 'DfRes', 'Bob', 'Bob-Weave Deinterlacer', 'ST-Deint', 'MSU Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'SwinDI', 'NNEDI', 'MFDIN', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'SSIM', data: [0.999, 0.999, 0.999, 0.999, 0.999, 0.999, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.997, 0.997, 0.997, 0.997, 0.997, 0.996, 0.996, 0.990, 0.990, 0.990, 0.990, 0.953, 0.952, 0.935, 0.852, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});