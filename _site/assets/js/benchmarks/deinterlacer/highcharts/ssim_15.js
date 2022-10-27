$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 15'},
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
        bar_options.xAxis.categories = ['FLAD', 'YADIF', 'MFDIN L', 'NNEDI', 'SwinDI', 'MSU Deinterlacer', 'Vapoursynth TDeintMod', 'DfRes SA', 'DfRes 122000 G2e 3', 'Bob-Weave Deinterlacer', 'Vapoursynth EEDI3', 'DUF', 'EDVR_woTSA', 'DfRes', 'Kernel Deinterlacer (optimal parameters)', 'TDAN', 'Bob', 'ST-Deint', 'SonyVegas Interpolate Field', 'MFDIN', 'Real-Time Deep Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Kernel Deinterlacer', 'EDVR', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Weston 3-Field Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'SSIM', data: [0.999, 0.999, 0.999, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.998, 0.997, 0.997, 0.997, 0.997, 0.996, 0.996, 0.996, 0.996, 0.996, 0.996, 0.996, 0.995, 0.995, 0.995, 0.995, 0.995, 0.993, 0.992, 0.937, 0.929, 0.877, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});