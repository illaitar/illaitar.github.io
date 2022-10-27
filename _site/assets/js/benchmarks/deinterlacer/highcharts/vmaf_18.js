$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 18'},
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
        bar_options.xAxis.categories = ['SwinDI', 'MFDIN L', 'NNEDI', 'Motion and Area Pixel Deinterlacer', 'ST-Deint', 'MFDIN', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Vapoursynth TDeintMod', 'DfRes SA', 'FLAD', 'DfRes 122000 G2e 3', 'EDVR', 'EDVR_woTSA', 'DUF', 'ASVZZZ Deinterlacer', 'Muksun Deinterlacer', 'SonyVegas Interpolate Field', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'TDAN', 'MSU Deinterlacer', 'PAL Interpolation', 'DfRes', 'Vapoursynth EEDI3', 'Weston 3-Field Deinterlacer', 'YADIF', 'Bob', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [99.211, 98.940, 98.801, 98.292, 98.037, 98.007, 97.645, 97.568, 97.522, 97.436, 97.372, 97.338, 97.161, 97.052, 97.030, 97.015, 97.015, 96.900, 96.717, 96.600, 96.565, 96.180, 95.926, 95.275, 94.200, 93.888, 93.864, 91.772, 81.440, 71.374, 67.507, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});