$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 6'},
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
        bar_options.xAxis.categories = ['DfRes 122000 G2e 3', 'DfRes SA', 'FLAD', 'MFDIN L', 'EDVR', 'EDVR_woTSA', 'DUF', 'TDAN', 'ST-Deint', 'MSU Deinterlacer', 'DfRes', 'Bob-Weave Deinterlacer', 'MFDIN', 'YADIF', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'SwinDI', 'NNEDI', 'Vapoursynth TDeintMod', 'Motion and Area Pixel Deinterlacer', 'Vapoursynth EEDI3', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'SonyVegas Interpolate Field', 'Bob', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'SonyVegas Blend Field', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'SSIM', data: [0.987, 0.987, 0.987, 0.986, 0.985, 0.985, 0.984, 0.984, 0.983, 0.981, 0.981, 0.976, 0.976, 0.966, 0.965, 0.962, 0.962, 0.955, 0.952, 0.948, 0.947, 0.945, 0.944, 0.940, 0.940, 0.927, 0.927, 0.923, 0.922, 0.910, 0.908, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});