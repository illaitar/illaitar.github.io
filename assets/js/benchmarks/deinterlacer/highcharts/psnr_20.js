$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 20'},
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
        bar_options.xAxis.categories = ['DfRes SA', 'EDVR_woTSA', 'EDVR', 'DfRes 122000 G2e 3', 'SwinDI', 'DUF', 'Adobe Premiere Pro Built-In', 'MFDIN L', 'ST-Deint', 'FLAD', 'TDAN', 'MSU Deinterlacer', 'MFDIN', 'DfRes', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'NNEDI', 'Vapoursynth EEDI3', 'Vapoursynth TDeintMod', 'Real-Time Deep Deinterlacer', 'SonyVegas Interpolate Field', 'Bob', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'Motion Compensation Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'PSNR', data: [52.008, 50.745, 50.730, 49.964, 44.628, 44.576, 44.040, 41.010, 38.818, 36.699, 34.485, 34.061, 33.368, 30.675, 27.302, 25.905, 25.817, 25.727, 25.497, 25.474, 25.210, 25.046, 25.046, 24.885, 24.850, 23.542, 23.017, 22.069, 22.069, 21.909, 20.456, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});