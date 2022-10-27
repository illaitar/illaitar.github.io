$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 4'},
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
        bar_options.xAxis.categories = ['Real-Time Deep Deinterlacer', 'Vapoursynth EEDI3', 'DfRes SA', 'FLAD', 'DfRes 122000 G2e 3', 'DfRes', 'Vapoursynth TDeintMod', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'SwinDI', 'MFDIN L', 'ST-Deint', 'NNEDI', 'YADIF', 'MFDIN', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Bob', 'MSU Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'EDVR_woTSA', 'DUF', 'TDAN', 'EDVR', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [100.000, 100.000, 100.000, 100.000, 100.000, 100.000, 100.000, 99.989, 99.886, 99.807, 99.801, 99.774, 99.772, 99.635, 99.588, 99.550, 99.548, 99.548, 99.380, 99.295, 99.099, 99.099, 98.759, 98.064, 97.561, 97.381, 97.118, 93.098, 58.052, 37.296, 32.125, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});