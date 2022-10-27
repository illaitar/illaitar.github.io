$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 19'},
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
        bar_options.xAxis.categories = ['FLAD', 'MFDIN L', 'DfRes', 'DfRes 122000 G2e 3', 'DfRes SA', 'ST-Deint', 'NNEDI', 'Vapoursynth EEDI3', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'Real-Time Deep Deinterlacer', 'SwinDI', 'SonyVegas Interpolate Field', 'Bob', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'MSU Deinterlacer', 'TDAN', 'DUF', 'EDVR_woTSA', 'EDVR', 'MFDIN', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'SSIM', data: [0.993, 0.993, 0.992, 0.992, 0.992, 0.992, 0.991, 0.991, 0.990, 0.990, 0.990, 0.990, 0.989, 0.989, 0.986, 0.985, 0.985, 0.984, 0.983, 0.983, 0.983, 0.982, 0.979, 0.970, 0.958, 0.958, 0.954, 0.911, 0.907, 0.861, 0.811, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});