$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 7'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'DfRes', 'DfRes SA', 'MSU Deinterlacer', 'DfRes 122000 G2e 3', 'MFDIN', 'EDVR', 'EDVR_woTSA', 'Real-Time Deep Deinterlacer', 'Vapoursynth TDeintMod', 'YADIF', 'NNEDI', 'TDAN', 'Bob-Weave Deinterlacer', 'DUF', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'SonyVegas Interpolate Field', 'Weston 3-Field Deinterlacer', 'ST-Deint', 'Muksun Deinterlacer', 'Vapoursynth EEDI3', 'Bob', 'ASVZZZ Deinterlacer', 'SwinDI', 'FLAD', 'Motion and Area Pixel Deinterlacer', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', 'PAL Interpolation', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [1.794, 1.631, 1.616, 1.592, 1.395, 1.382, 1.153, 1.142, 0.980, 0.935, 0.932, 0.855, 0.794, 0.783, 0.766, 0.708, 0.677, 0.664, 0.657, 0.641, 0.624, 0.606, 0.405, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});