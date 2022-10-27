$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 7'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'DfRes SA', 'DfRes 122000 G2e 3', 'DfRes', 'EDVR', 'MFDIN', 'EDVR_woTSA', 'DUF', 'MSU Deinterlacer', 'TDAN', 'ST-Deint', 'SwinDI', 'NNEDI', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'Vapoursynth EEDI3', 'Vapoursynth TDeintMod', 'Weston 3-Field Deinterlacer', 'YADIF', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Motion and Area Pixel Deinterlacer', 'SonyVegas Interpolate Field', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Bob', 'Adobe Premiere Pro Built-In', 'Motion Compensation Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [96.535, 94.835, 93.368, 92.980, 92.446, 90.986, 90.966, 90.965, 90.376, 89.984, 89.910, 88.561, 87.491, 86.386, 86.315, 85.321, 84.146, 83.973, 83.247, 82.351, 80.980, 80.950, 80.803, 79.101, 78.735, 78.735, 78.392, 78.321, 75.903, 70.784, 67.638, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});