$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 21'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'NNEDI', 'FLAD', 'ST-Deint', 'SwinDI', 'MFDIN', 'DfRes', 'Vapoursynth TDeintMod', 'MSU Deinterlacer', 'Real-Time Deep Deinterlacer', 'Vapoursynth EEDI3', 'EDVR_woTSA', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'DfRes SA', 'DfRes 122000 G2e 3', 'Kernel Deinterlacer', 'EDVR', 'Weston 3-Field Deinterlacer', 'Bob', 'DUF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'TDAN', 'YADIF', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [96.409, 90.192, 89.197, 88.887, 88.880, 88.767, 87.345, 86.901, 86.707, 86.660, 86.122, 85.890, 85.608, 85.365, 85.256, 85.192, 84.950, 84.871, 84.685, 84.210, 82.351, 80.415, 80.156, 80.156, 79.456, 77.581, 77.197, 68.149, 45.275, 29.883, 24.347, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});