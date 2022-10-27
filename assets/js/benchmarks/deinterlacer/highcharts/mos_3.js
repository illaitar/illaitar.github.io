$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 3'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'Weston 3-Field Deinterlacer', 'Muksun Deinterlacer', 'Real-Time Deep Deinterlacer', 'YADIF', 'MSU Deinterlacer', 'DfRes 122000 G2e 3', 'MFDIN', 'Vapoursynth EEDI3', 'SonyVegas Interpolate Field', 'Vapoursynth TDeintMod', 'DfRes', 'NNEDI', 'DfRes SA', 'Bob-Weave Deinterlacer', 'Bob', 'EDVR', 'ST-Deint', 'EDVR_woTSA', 'DUF', 'Kernel Deinterlacer', 'TDAN', 'Kernel Deinterlacer (optimal parameters)', 'SwinDI', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'FLAD', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [1.261, 1.230, 1.186, 1.177, 1.159, 1.144, 1.121, 1.065, 1.054, 1.045, 1.025, 1.021, 1.010, 1.006, 1.000, 0.951, 0.914, 0.906, 0.707, 0.626, 0.498, 0.468, 0.397, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});