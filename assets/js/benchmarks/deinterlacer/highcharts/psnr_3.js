$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'PSNR on sequence # 3'},
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
        bar_options.xAxis.categories = ['FLAD', 'DfRes SA', 'MFDIN L', 'DfRes 122000 G2e 3', 'DfRes', 'SwinDI', 'Vapoursynth TDeintMod', 'Vapoursynth EEDI3', 'NNEDI', 'ST-Deint', 'Bob', 'SonyVegas Interpolate Field', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'Weston 3-Field Deinterlacer', 'MFDIN', 'MSU Deinterlacer', 'YADIF', 'EDVR_woTSA', 'Kernel Deinterlacer (optimal parameters)', 'EDVR', 'DUF', 'ASVZZZ Deinterlacer', 'Muksun Deinterlacer', 'TDAN', 'Kernel Deinterlacer', 'PAL Interpolation', 'Motion and Area Pixel Deinterlacer', 'Motion Compensation Deinterlacer', 'SonyVegas Blend Field', 'Adobe Premiere Pro Built-In', ];
        bar_options.series.push({name: 'PSNR', data: [48.566, 48.289, 47.781, 47.628, 47.447, 47.284, 46.999, 46.966, 46.603, 46.052, 45.493, 45.415, 44.739, 43.614, 43.184, 42.983, 40.955, 40.570, 40.529, 39.839, 39.170, 38.985, 38.481, 38.481, 37.152, 36.315, 36.018, 35.203, 25.694, 20.501, 17.623, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});