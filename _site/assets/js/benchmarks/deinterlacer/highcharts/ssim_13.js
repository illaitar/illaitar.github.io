$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 13'},
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
            yAxis: {min: 0.0,title: {text: 'SSIM'}},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            series: []
        };

        //$.getJSON('path/to/your/file.json', function (data) {
            //Here you can change any parameters("bar_options.xAxis.categories", "bar_options.series" and so on) to data from your json 
            //Data from json will be stored in object "data"

            //Highcharts.chart('arrow_plot', bar_options);
        //});
        bar_options.xAxis.categories = ['FLAD', 'MFDIN L', 'DfRes', 'DfRes 122000 G2e 3', 'DfRes SA', 'ST-Deint', 'EDVR_woTSA', 'SwinDI', 'Vapoursynth EEDI3', 'MSU Deinterlacer', 'NNEDI', 'Vapoursynth TDeintMod', 'EDVR', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'Bob', 'DUF', 'SonyVegas Interpolate Field', 'TDAN', 'Weston 3-Field Deinterlacer', 'MFDIN', 'Kernel Deinterlacer (optimal parameters)', 'YADIF', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'SSIM', data: [0.994, 0.994, 0.993, 0.992, 0.992, 0.988, 0.987, 0.987, 0.986, 0.986, 0.986, 0.985, 0.985, 0.985, 0.984, 0.983, 0.983, 0.983, 0.982, 0.981, 0.981, 0.980, 0.975, 0.968, 0.949, 0.948, 0.948, 0.904, 0.844, 0.791, 0.759, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});