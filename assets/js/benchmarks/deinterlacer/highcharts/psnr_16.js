$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 16'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'MSU Deinterlacer', 'DfRes', 'ST-Deint', 'MFDIN', 'SwinDI', 'DfRes 122000 G2e 3', 'EDVR_woTSA', 'DfRes SA', 'Vapoursynth EEDI3', 'NNEDI', 'SonyVegas Interpolate Field', 'Bob', 'Real-Time Deep Deinterlacer', 'EDVR', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'YADIF', 'Motion and Area Pixel Deinterlacer', 'DUF', 'PAL Interpolation', 'TDAN', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [33.929, 30.462, 29.813, 29.404, 28.839, 28.397, 28.131, 27.826, 27.772, 27.711, 27.642, 27.574, 27.483, 27.483, 27.356, 27.340, 27.267, 27.256, 27.040, 27.001, 26.789, 26.468, 26.468, 26.354, 26.264, 26.085, 25.559, 25.055, 21.265, 19.651, 18.916, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});