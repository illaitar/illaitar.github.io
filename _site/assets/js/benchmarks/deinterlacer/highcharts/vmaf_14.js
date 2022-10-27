$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 14'},
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
        bar_options.xAxis.categories = ['ST-Deint', 'Vapoursynth TDeintMod', 'MFDIN L', 'NNEDI', 'FLAD', 'Bob-Weave Deinterlacer', 'SwinDI', 'Real-Time Deep Deinterlacer', 'Vapoursynth EEDI3', 'DfRes 122000 G2e 3', 'DfRes SA', 'EDVR_woTSA', 'SonyVegas Interpolate Field', 'Weston 3-Field Deinterlacer', 'Bob', 'DfRes', 'DUF', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'EDVR', 'TDAN', 'MSU Deinterlacer', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'MFDIN', 'PAL Interpolation', 'Adobe Premiere Pro Built-In', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [96.412, 96.251, 96.186, 96.158, 95.682, 95.649, 95.251, 95.173, 95.086, 94.865, 94.785, 94.737, 94.397, 94.346, 93.733, 93.259, 93.190, 92.973, 92.865, 92.664, 92.338, 92.171, 90.175, 90.090, 90.090, 88.759, 88.626, 84.391, 76.272, 76.022, 68.633, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});