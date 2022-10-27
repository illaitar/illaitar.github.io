$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 1'},
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
            yAxis: {min: 0.0,title: {text: 'PSNR'}},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            series: []
        };

        //$.getJSON('path/to/your/file.json', function (data) {
            //Here you can change any parameters("bar_options.xAxis.categories", "bar_options.series" and so on) to data from your json 
            //Data from json will be stored in object "data"

            //Highcharts.chart('arrow_plot', bar_options);
        //});
        bar_options.xAxis.categories = ['MFDIN L', 'ST-Deint', 'FLAD', 'SwinDI', 'DfRes SA', 'DfRes 122000 G2e 3', 'DfRes', 'EDVR_woTSA', 'MFDIN', 'EDVR', 'Real-Time Deep Deinterlacer', 'NNEDI', 'Vapoursynth EEDI3', 'TDAN', 'DUF', 'MSU Deinterlacer', 'Bob', 'SonyVegas Interpolate Field', 'Vapoursynth TDeintMod', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'Kernel Deinterlacer', 'Weston 3-Field Deinterlacer', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [39.511, 39.486, 39.396, 38.554, 38.515, 38.396, 38.306, 37.804, 37.784, 37.727, 37.634, 37.610, 37.415, 37.359, 37.326, 37.312, 36.994, 36.993, 36.968, 36.836, 36.828, 36.597, 36.524, 36.423, 35.949, 35.949, 35.146, 33.327, 31.022, 30.365, 28.789, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});