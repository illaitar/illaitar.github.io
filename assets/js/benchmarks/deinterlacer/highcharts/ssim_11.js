$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'SSIM on sequence # 11'},
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
        bar_options.xAxis.categories = ['FLAD', 'SwinDI', 'MFDIN L', 'DfRes SA', 'DfRes 122000 G2e 3', 'DfRes', 'ST-Deint', 'NNEDI', 'Vapoursynth EEDI3', 'MFDIN', 'MSU Deinterlacer', 'Real-Time Deep Deinterlacer', 'Bob', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer (optimal parameters)', 'Vapoursynth TDeintMod', 'EDVR', 'Kernel Deinterlacer', 'EDVR_woTSA', 'Motion and Area Pixel Deinterlacer', 'Bob-Weave Deinterlacer', 'DUF', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Weston 3-Field Deinterlacer', 'TDAN', 'PAL Interpolation', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', 'Motion Compensation Deinterlacer', ];
        bar_options.series.push({name: 'SSIM', data: [0.848, 0.846, 0.842, 0.816, 0.804, 0.785, 0.781, 0.773, 0.771, 0.762, 0.755, 0.754, 0.741, 0.741, 0.728, 0.726, 0.725, 0.725, 0.719, 0.714, 0.712, 0.711, 0.708, 0.704, 0.704, 0.695, 0.682, 0.663, 0.485, 0.402, 0.379, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});