$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 12'},
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
            yAxis: {min: 0.0,title: {text: 'MOS'}},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            series: []
        };

        //$.getJSON('path/to/your/file.json', function (data) {
            //Here you can change any parameters("bar_options.xAxis.categories", "bar_options.series" and so on) to data from your json 
            //Data from json will be stored in object "data"

            //Highcharts.chart('arrow_plot', bar_options);
        //});
        bar_options.xAxis.categories = ['MFDIN L', 'DfRes 122000 G2e 3', 'EDVR', 'DfRes SA', 'EDVR_woTSA', 'ST-Deint', 'MSU Deinterlacer', 'MFDIN', 'DUF', 'DfRes', 'TDAN', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Vapoursynth EEDI3', 'YADIF', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Vapoursynth TDeintMod', 'Muksun Deinterlacer', 'Kernel Deinterlacer', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer (optimal parameters)', 'Bob', 'SwinDI', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'FLAD', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [1.649, 1.545, 1.434, 1.420, 1.400, 1.362, 1.311, 1.301, 1.284, 1.283, 1.232, 1.175, 1.066, 1.036, 0.986, 0.890, 0.699, 0.690, 0.593, 0.582, 0.452, 0.422, 0.398, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});