$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 26'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'DfRes SA', 'DfRes 122000 G2e 3', 'DfRes', 'EDVR', 'EDVR_woTSA', 'DUF', 'ST-Deint', 'MSU Deinterlacer', 'MFDIN', 'TDAN', 'YADIF', 'Real-Time Deep Deinterlacer', 'NNEDI', 'Bob-Weave Deinterlacer', 'Vapoursynth EEDI3', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer', 'Bob', 'SonyVegas Interpolate Field', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer (optimal parameters)', 'Muksun Deinterlacer', 'SwinDI', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'FLAD', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [4.698, 4.535, 4.519, 4.148, 3.741, 3.400, 3.134, 3.046, 2.583, 2.547, 2.173, 1.450, 1.343, 1.315, 1.075, 1.034, 0.930, 0.876, 0.824, 0.708, 0.683, 0.598, 0.547, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});