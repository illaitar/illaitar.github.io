$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 8'},
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
            yAxis: {min: 0.0,title: {text: 'VMAF'}},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            series: []
        };

        //$.getJSON('path/to/your/file.json', function (data) {
            //Here you can change any parameters("bar_options.xAxis.categories", "bar_options.series" and so on) to data from your json 
            //Data from json will be stored in object "data"

            //Highcharts.chart('arrow_plot', bar_options);
        //});
        bar_options.xAxis.categories = ['TDAN', 'Weston 3-Field Deinterlacer', 'DfRes SA', 'MSU Deinterlacer', 'Bob', 'Vapoursynth TDeintMod', 'DfRes', 'DfRes 122000 G2e 3', 'FLAD', 'EDVR', 'Bob-Weave Deinterlacer', 'DUF', 'EDVR_woTSA', 'Vapoursynth EEDI3', 'Real-Time Deep Deinterlacer', 'YADIF', 'ST-Deint', 'NNEDI', 'SwinDI', 'MFDIN L', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'MFDIN', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [100.000, 100.000, 100.000, 100.000, 100.000, 100.000, 100.000, 100.000, 100.000, 100.000, 100.000, 100.000, 100.000, 100.000, 100.000, 100.000, 99.863, 99.853, 99.846, 99.836, 99.746, 99.745, 99.745, 99.703, 99.703, 99.699, 99.680, 99.576, 58.985, 31.451, 28.926, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});