$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 27'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'MFDIN', 'DfRes', 'DfRes SA', 'MSU Deinterlacer', 'DfRes 122000 G2e 3', 'ST-Deint', 'EDVR_woTSA', 'SwinDI', 'EDVR', 'NNEDI', 'Vapoursynth TDeintMod', 'Bob-Weave Deinterlacer', 'Real-Time Deep Deinterlacer', 'Vapoursynth EEDI3', 'DUF', 'Kernel Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'SonyVegas Interpolate Field', 'Bob', 'TDAN', 'Motion and Area Pixel Deinterlacer', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [96.186, 90.663, 87.171, 86.668, 84.915, 84.770, 84.108, 82.879, 81.525, 81.133, 80.997, 79.528, 78.815, 78.000, 77.908, 77.106, 76.582, 76.020, 75.990, 75.982, 75.507, 73.717, 73.431, 72.771, 69.616, 67.916, 67.916, 62.484, 43.402, 40.423, 31.545, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});