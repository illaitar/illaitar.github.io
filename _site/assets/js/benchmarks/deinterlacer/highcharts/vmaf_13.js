$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 13'},
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
        bar_options.xAxis.categories = ['FLAD', 'Vapoursynth TDeintMod', 'DfRes', 'MFDIN L', 'DfRes 122000 G2e 3', 'DfRes SA', 'SwinDI', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'Vapoursynth EEDI3', 'ST-Deint', 'TDAN', 'SonyVegas Interpolate Field', 'Kernel Deinterlacer (optimal parameters)', 'EDVR_woTSA', 'DUF', 'EDVR', 'MFDIN', 'Weston 3-Field Deinterlacer', 'MSU Deinterlacer', 'Kernel Deinterlacer', 'Bob', 'Motion and Area Pixel Deinterlacer', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [99.987, 99.904, 99.869, 99.860, 99.860, 99.818, 99.812, 99.806, 99.805, 99.787, 99.725, 99.678, 99.589, 99.527, 99.503, 99.336, 99.241, 99.216, 99.162, 98.986, 98.641, 98.519, 97.069, 95.425, 94.851, 93.787, 93.787, 85.724, 61.551, 51.671, 44.870, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});