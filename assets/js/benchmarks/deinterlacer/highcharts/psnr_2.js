$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 2'},
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
        bar_options.xAxis.categories = ['FLAD', 'DfRes SA', 'DfRes 122000 G2e 3', 'Vapoursynth EEDI3', 'ST-Deint', 'DfRes', 'Vapoursynth TDeintMod', 'MFDIN L', 'NNEDI', 'Bob', 'SonyVegas Interpolate Field', 'SwinDI', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'EDVR_woTSA', 'MSU Deinterlacer', 'YADIF', 'DUF', 'TDAN', 'EDVR', 'MFDIN', 'ASVZZZ Deinterlacer', 'Muksun Deinterlacer', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [50.117, 49.694, 49.434, 49.394, 49.334, 49.247, 49.216, 49.202, 48.945, 48.683, 48.609, 48.513, 48.253, 48.232, 47.525, 46.159, 46.055, 45.850, 45.799, 45.453, 45.295, 43.752, 43.243, 41.956, 41.956, 41.671, 40.857, 38.127, 33.668, 32.665, 31.556, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});