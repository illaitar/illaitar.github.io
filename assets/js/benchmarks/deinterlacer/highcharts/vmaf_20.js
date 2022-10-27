$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 20'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'DfRes SA', 'EDVR_woTSA', 'EDVR', 'DfRes 122000 G2e 3', 'SwinDI', 'DUF', 'MFDIN', 'FLAD', 'ST-Deint', 'NNEDI', 'MSU Deinterlacer', 'TDAN', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'DfRes', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'Vapoursynth EEDI3', 'Weston 3-Field Deinterlacer', 'Real-Time Deep Deinterlacer', 'Bob', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'YADIF', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [98.272, 96.948, 96.700, 96.673, 96.550, 96.005, 95.164, 94.469, 92.886, 91.753, 90.779, 90.226, 89.641, 88.572, 88.356, 88.331, 87.382, 84.856, 81.469, 79.031, 78.736, 78.736, 78.250, 77.102, 76.075, 75.219, 74.135, 73.318, 70.352, 68.491, 56.036, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});