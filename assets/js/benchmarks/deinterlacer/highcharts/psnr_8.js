$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 8'},
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
        bar_options.xAxis.categories = ['FLAD', 'MFDIN L', 'ST-Deint', 'DfRes', 'SwinDI', 'DfRes SA', 'Vapoursynth EEDI3', 'Bob', 'SonyVegas Interpolate Field', 'Vapoursynth TDeintMod', 'DfRes 122000 G2e 3', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Bob-Weave Deinterlacer', 'YADIF', 'MSU Deinterlacer', 'MFDIN', 'ASVZZZ Deinterlacer', 'Muksun Deinterlacer', 'Kernel Deinterlacer', 'DUF', 'TDAN', 'Motion and Area Pixel Deinterlacer', 'EDVR', 'PAL Interpolation', 'EDVR_woTSA', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [43.916, 43.825, 43.791, 43.765, 43.685, 43.545, 43.486, 43.444, 43.420, 43.295, 43.218, 43.210, 43.024, 42.705, 42.416, 42.392, 41.749, 41.551, 40.372, 40.075, 40.075, 39.507, 38.705, 38.699, 38.543, 38.333, 37.605, 36.994, 25.503, 20.729, 17.759, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});