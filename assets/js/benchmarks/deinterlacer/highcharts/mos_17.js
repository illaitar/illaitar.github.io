$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 17'},
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
        bar_options.xAxis.categories = ['MFDIN', 'DfRes SA', 'MSU Deinterlacer', 'DfRes', 'MFDIN L', 'Muksun Deinterlacer', 'EDVR_woTSA', 'YADIF', 'DfRes 122000 G2e 3', 'ST-Deint', 'TDAN', 'Vapoursynth EEDI3', 'DUF', 'Real-Time Deep Deinterlacer', 'EDVR', 'Kernel Deinterlacer', 'SonyVegas Interpolate Field', 'Bob-Weave Deinterlacer', 'NNEDI', 'Bob', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'Vapoursynth TDeintMod', 'ASVZZZ Deinterlacer', 'SwinDI', 'Motion and Area Pixel Deinterlacer', 'FLAD', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [2.207, 1.583, 1.537, 1.470, 1.403, 1.403, 1.251, 1.208, 1.186, 1.127, 1.112, 1.017, 0.990, 0.984, 0.895, 0.846, 0.776, 0.761, 0.707, 0.526, 0.506, 0.497, 0.409, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});