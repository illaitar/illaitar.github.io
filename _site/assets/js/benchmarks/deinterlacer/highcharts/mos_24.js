$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 24'},
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
        bar_options.xAxis.categories = ['DfRes SA', 'DfRes', 'MFDIN L', 'DfRes 122000 G2e 3', 'EDVR_woTSA', 'MFDIN', 'EDVR', 'MSU Deinterlacer', 'ST-Deint', 'Real-Time Deep Deinterlacer', 'NNEDI', 'Vapoursynth EEDI3', 'YADIF', 'DUF', 'Muksun Deinterlacer', 'TDAN', 'SonyVegas Interpolate Field', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Bob', 'Vapoursynth TDeintMod', 'SwinDI', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'FLAD', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [3.993, 3.943, 3.898, 3.513, 3.215, 3.136, 3.048, 2.966, 2.336, 2.284, 2.246, 2.217, 2.105, 1.942, 1.794, 1.616, 1.047, 0.842, 0.828, 0.769, 0.761, 0.747, 0.516, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});