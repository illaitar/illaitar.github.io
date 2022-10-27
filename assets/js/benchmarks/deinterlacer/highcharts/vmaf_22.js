$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 22'},
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
        bar_options.xAxis.categories = ['NNEDI', 'SwinDI', 'Vapoursynth EEDI3', 'Weston 3-Field Deinterlacer', 'Bob-Weave Deinterlacer', 'FLAD', 'MFDIN L', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'SonyVegas Interpolate Field', 'DfRes SA', 'DfRes 122000 G2e 3', 'DfRes', 'TDAN', 'YADIF', 'DUF', 'EDVR', 'Bob', 'Kernel Deinterlacer', 'Vapoursynth TDeintMod', 'EDVR_woTSA', 'MFDIN', 'ST-Deint', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'MSU Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Adobe Premiere Pro Built-In', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [99.789, 99.774, 99.650, 99.046, 98.848, 98.732, 98.713, 98.615, 98.165, 98.027, 97.985, 97.940, 97.847, 97.763, 97.689, 97.663, 97.633, 97.624, 97.526, 97.401, 97.395, 97.345, 97.260, 97.133, 97.133, 97.123, 97.036, 95.940, 95.781, 95.113, 81.942, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});