$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 3'},
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
        bar_options.xAxis.categories = ['Real-Time Deep Deinterlacer', 'DfRes 122000 G2e 3', 'DfRes SA', 'Vapoursynth TDeintMod', 'Vapoursynth EEDI3', 'DfRes', 'FLAD', 'Weston 3-Field Deinterlacer', 'SwinDI', 'NNEDI', 'MFDIN L', 'Bob', 'Bob-Weave Deinterlacer', 'ST-Deint', 'MFDIN', 'EDVR_woTSA', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer (optimal parameters)', 'MSU Deinterlacer', 'Kernel Deinterlacer', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'EDVR', 'DUF', 'PAL Interpolation', 'TDAN', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [100.000, 100.000, 100.000, 100.000, 100.000, 100.000, 100.000, 99.952, 99.908, 99.906, 99.901, 99.898, 99.877, 99.854, 99.801, 99.780, 99.732, 99.677, 99.538, 99.093, 98.578, 98.399, 98.399, 98.368, 97.277, 96.165, 95.670, 91.631, 63.265, 45.897, 37.997, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});