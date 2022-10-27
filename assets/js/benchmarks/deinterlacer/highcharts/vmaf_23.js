$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 23'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'DfRes 122000 G2e 3', 'MFDIN', 'SwinDI', 'DfRes SA', 'DfRes', 'NNEDI', 'MSU Deinterlacer', 'EDVR_woTSA', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'ST-Deint', 'EDVR', 'Vapoursynth TDeintMod', 'DUF', 'Kernel Deinterlacer', 'TDAN', 'Motion and Area Pixel Deinterlacer', 'Vapoursynth EEDI3', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'SonyVegas Interpolate Field', 'PAL Interpolation', 'Bob', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [99.259, 98.958, 98.912, 98.868, 98.805, 98.602, 98.600, 98.539, 98.350, 98.287, 98.277, 98.169, 98.163, 98.141, 97.972, 97.871, 97.816, 97.723, 97.705, 97.445, 97.395, 97.127, 97.115, 96.878, 96.878, 96.501, 95.839, 95.573, 80.005, 79.877, 71.150, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});