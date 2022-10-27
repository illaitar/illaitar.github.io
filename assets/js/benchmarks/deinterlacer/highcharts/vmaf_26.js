$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 26'},
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
            yAxis: {min: 0.0,title: {text: 'VMAF'}},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            series: []
        };

        //$.getJSON('path/to/your/file.json', function (data) {
            //Here you can change any parameters("bar_options.xAxis.categories", "bar_options.series" and so on) to data from your json 
            //Data from json will be stored in object "data"

            //Highcharts.chart('arrow_plot', bar_options);
        //});
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'SwinDI', 'DfRes SA', 'DfRes 122000 G2e 3', 'EDVR_woTSA', 'MFDIN', 'EDVR', 'DUF', 'DfRes', 'TDAN', 'ST-Deint', 'MSU Deinterlacer', 'Adobe Premiere Pro Built-In', 'Motion Compensation Deinterlacer', 'Bob-Weave Deinterlacer', 'NNEDI', 'Vapoursynth TDeintMod', 'Motion and Area Pixel Deinterlacer', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth EEDI3', 'SonyVegas Interpolate Field', 'YADIF', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [99.796, 97.051, 96.346, 95.976, 94.522, 93.721, 93.536, 93.299, 90.879, 90.224, 88.432, 87.770, 85.750, 80.460, 78.826, 78.116, 75.962, 74.752, 74.741, 74.333, 74.158, 73.913, 73.089, 72.602, 71.641, 69.780, 68.854, 65.236, 65.236, 64.106, 60.542, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});