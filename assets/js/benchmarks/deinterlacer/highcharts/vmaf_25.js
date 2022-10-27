$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 25'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'MFDIN', 'DfRes SA', 'DfRes 122000 G2e 3', 'EDVR_woTSA', 'EDVR', 'TDAN', 'DUF', 'MSU Deinterlacer', 'ST-Deint', 'DfRes', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'SwinDI', 'Weston 3-Field Deinterlacer', 'YADIF', 'Adobe Premiere Pro Built-In', 'Motion and Area Pixel Deinterlacer', 'Kernel Deinterlacer', 'PAL Interpolation', 'Real-Time Deep Deinterlacer', 'NNEDI', 'Motion Compensation Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth EEDI3', 'SonyVegas Interpolate Field', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [98.513, 97.607, 97.214, 97.047, 96.723, 96.427, 96.401, 95.493, 95.279, 94.402, 94.248, 93.780, 92.456, 90.441, 89.890, 89.818, 89.394, 88.876, 88.773, 88.302, 88.300, 88.077, 87.506, 87.249, 86.507, 86.122, 82.320, 81.705, 76.408, 76.408, 68.280, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});