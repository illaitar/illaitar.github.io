$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 18'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'Bob', 'Weston 3-Field Deinterlacer', 'MFDIN', 'Bob-Weave Deinterlacer', 'TDAN', 'DfRes 122000 G2e 3', 'Vapoursynth EEDI3', 'Real-Time Deep Deinterlacer', 'NNEDI', 'DfRes SA', 'DfRes', 'YADIF', 'DUF', 'MSU Deinterlacer', 'EDVR_woTSA', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'ST-Deint', 'SonyVegas Interpolate Field', 'EDVR', 'Muksun Deinterlacer', 'SwinDI', 'Motion and Area Pixel Deinterlacer', 'ASVZZZ Deinterlacer', 'FLAD', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', 'PAL Interpolation', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [0.824, 0.792, 0.779, 0.720, 0.716, 0.697, 0.688, 0.686, 0.667, 0.654, 0.621, 0.604, 0.596, 0.576, 0.543, 0.526, 0.525, 0.524, 0.507, 0.463, 0.452, 0.440, 0.389, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});