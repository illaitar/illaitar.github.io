$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 19'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'MFDIN', 'DfRes', 'Vapoursynth EEDI3', 'DfRes 122000 G2e 3', 'DfRes SA', 'Real-Time Deep Deinterlacer', 'NNEDI', 'Muksun Deinterlacer', 'YADIF', 'MSU Deinterlacer', 'SonyVegas Interpolate Field', 'Vapoursynth TDeintMod', 'ST-Deint', 'Bob-Weave Deinterlacer', 'Bob', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'TDAN', 'DUF', 'EDVR', 'EDVR_woTSA', 'ASVZZZ Deinterlacer', 'SwinDI', 'FLAD', 'Motion and Area Pixel Deinterlacer', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [2.149, 2.008, 1.948, 1.898, 1.897, 1.895, 1.723, 1.665, 1.589, 1.587, 1.523, 1.489, 1.478, 1.327, 1.307, 1.181, 1.061, 0.989, 0.974, 0.575, 0.478, 0.445, 0.433, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});