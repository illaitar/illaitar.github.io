$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 9'},
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
        bar_options.xAxis.categories = ['ST-Deint', 'MFDIN L', 'FLAD', 'DfRes SA', 'DfRes', 'DfRes 122000 G2e 3', 'SwinDI', 'Vapoursynth EEDI3', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'MFDIN', 'MSU Deinterlacer', 'YADIF', 'Bob', 'SonyVegas Interpolate Field', 'Vapoursynth TDeintMod', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'DUF', 'EDVR', 'Kernel Deinterlacer', 'TDAN', 'EDVR_woTSA', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [47.668, 47.266, 47.145, 46.019, 45.927, 45.861, 45.698, 45.555, 45.339, 44.918, 44.819, 44.698, 44.629, 44.531, 44.495, 44.478, 44.380, 44.239, 43.935, 43.467, 43.382, 42.963, 42.725, 42.505, 42.135, 42.135, 41.012, 38.649, 33.373, 32.656, 29.894, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});