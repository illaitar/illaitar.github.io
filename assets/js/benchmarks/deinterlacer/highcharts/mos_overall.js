$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'Overall MOS'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'MFDIN', 'DfRes SA', 'DfRes', 'DfRes 122000 G2e 3', 'MSU Deinterlacer', 'YADIF', 'ST-Deint', 'Real-Time Deep Deinterlacer', 'EDVR_woTSA', 'EDVR', 'NNEDI', 'Vapoursynth EEDI3', 'Muksun Deinterlacer', 'Bob-Weave Deinterlacer', 'DUF', 'Vapoursynth TDeintMod', 'TDAN', 'Weston 3-Field Deinterlacer', 'SonyVegas Interpolate Field', 'Bob', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'SwinDI', 'ASVZZZ Deinterlacer', 'FLAD', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [1.110, 1.007, 0.981, 0.965, 0.898, 0.768, 0.672, 0.590, 0.581, 0.543, 0.521, 0.511, 0.427, 0.400, 0.377, 0.373, 0.284, 0.258, 0.240, 0.178, 0.143, 0.095, 0.076, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('overall-plot', bar_options);
        });
});