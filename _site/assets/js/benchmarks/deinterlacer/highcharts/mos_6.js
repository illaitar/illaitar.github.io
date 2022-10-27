$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 6'},
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
        bar_options.xAxis.categories = ['MFDIN', 'DfRes', 'MFDIN L', 'Bob-Weave Deinterlacer', 'DfRes SA', 'Vapoursynth EEDI3', 'MSU Deinterlacer', 'DfRes 122000 G2e 3', 'YADIF', 'SonyVegas Interpolate Field', 'NNEDI', 'Muksun Deinterlacer', 'Real-Time Deep Deinterlacer', 'Bob', 'Vapoursynth TDeintMod', 'ST-Deint', 'EDVR_woTSA', 'DUF', 'EDVR', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'TDAN', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'SwinDI', 'ASVZZZ Deinterlacer', 'FLAD', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [2.214, 2.107, 2.038, 1.981, 1.965, 1.965, 1.949, 1.882, 1.878, 1.859, 1.819, 1.796, 1.714, 1.679, 1.675, 1.592, 1.550, 1.469, 1.303, 1.241, 1.205, 1.202, 0.442, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});