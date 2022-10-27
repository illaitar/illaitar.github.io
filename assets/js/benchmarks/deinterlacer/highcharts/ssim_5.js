$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 5'},
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
        bar_options.xAxis.categories = ['SwinDI', 'FLAD', 'MFDIN L', 'ST-Deint', 'DfRes SA', 'DfRes 122000 G2e 3', 'DfRes', 'MSU Deinterlacer', 'DUF', 'YADIF', 'EDVR', 'Bob', 'EDVR_woTSA', 'SonyVegas Interpolate Field', 'TDAN', 'Real-Time Deep Deinterlacer', 'Vapoursynth EEDI3', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'NNEDI', 'MFDIN', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion and Area Pixel Deinterlacer', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'SSIM', data: [0.948, 0.947, 0.946, 0.936, 0.930, 0.929, 0.928, 0.927, 0.925, 0.925, 0.924, 0.923, 0.923, 0.923, 0.920, 0.919, 0.917, 0.916, 0.914, 0.914, 0.914, 0.911, 0.908, 0.907, 0.903, 0.903, 0.898, 0.896, 0.853, 0.817, 0.766, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});