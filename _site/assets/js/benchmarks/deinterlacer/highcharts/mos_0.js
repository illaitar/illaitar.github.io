$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'MOS on sequence # 0'},
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
        bar_options.xAxis.categories = ['Real-Time Deep Deinterlacer', 'MFDIN L', 'MSU Deinterlacer', 'DfRes 122000 G2e 3', 'DfRes SA', 'TDAN', 'Vapoursynth TDeintMod', 'ST-Deint', 'DfRes', 'MFDIN', 'Bob-Weave Deinterlacer', 'YADIF', 'NNEDI', 'Kernel Deinterlacer', 'Muksun Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'DUF', 'Weston 3-Field Deinterlacer', 'Vapoursynth EEDI3', 'SonyVegas Interpolate Field', 'Bob', 'EDVR', 'EDVR_woTSA', 'Motion Compensation Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'FLAD', 'SwinDI', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'MOS', data: [1.350, 1.254, 1.230, 1.214, 1.205, 1.202, 1.169, 1.140, 1.086, 1.049, 1.023, 0.966, 0.943, 0.941, 0.928, 0.927, 0.827, 0.824, 0.783, 0.688, 0.667, 0.656, 0.400, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});