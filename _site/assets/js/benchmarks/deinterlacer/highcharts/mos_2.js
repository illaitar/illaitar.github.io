$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 2'},
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
        bar_options.xAxis.categories = ['MFDIN', 'YADIF', 'DfRes', 'TDAN', 'EDVR', 'EDVR_woTSA', 'Weston 3-Field Deinterlacer', 'MFDIN L', 'Vapoursynth EEDI3', 'Muksun Deinterlacer', 'Kernel Deinterlacer', 'DUF', 'DfRes SA', 'SonyVegas Interpolate Field', 'Bob-Weave Deinterlacer', 'Bob', 'DfRes 122000 G2e 3', 'Vapoursynth TDeintMod', 'ST-Deint', 'NNEDI', 'Kernel Deinterlacer (optimal parameters)', 'MSU Deinterlacer', 'Real-Time Deep Deinterlacer', 'SwinDI', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'FLAD', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', 'PAL Interpolation', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [1.092, 0.737, 0.652, 0.644, 0.640, 0.639, 0.607, 0.597, 0.557, 0.557, 0.551, 0.548, 0.497, 0.482, 0.474, 0.473, 0.472, 0.445, 0.444, 0.444, 0.428, 0.426, 0.379, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});