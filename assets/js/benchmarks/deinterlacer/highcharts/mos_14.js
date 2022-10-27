$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 14'},
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
        bar_options.xAxis.categories = ['MFDIN', 'MSU Deinterlacer', 'Muksun Deinterlacer', 'YADIF', 'Kernel Deinterlacer', 'DfRes', 'Bob', 'MFDIN L', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'Vapoursynth EEDI3', 'Weston 3-Field Deinterlacer', 'SonyVegas Interpolate Field', 'DUF', 'DfRes SA', 'DfRes 122000 G2e 3', 'EDVR', 'TDAN', 'Real-Time Deep Deinterlacer', 'NNEDI', 'ST-Deint', 'Vapoursynth TDeintMod', 'EDVR_woTSA', 'SwinDI', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'FLAD', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', 'PAL Interpolation', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [1.768, 1.110, 1.097, 0.966, 0.917, 0.915, 0.859, 0.735, 0.723, 0.692, 0.681, 0.668, 0.658, 0.655, 0.649, 0.646, 0.630, 0.612, 0.607, 0.584, 0.574, 0.559, 0.393, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});