$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'VMAF on sequence # 19'},
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
        bar_options.xAxis.categories = ['FLAD', 'MFDIN L', 'SwinDI', 'NNEDI', 'Real-Time Deep Deinterlacer', 'Bob-Weave Deinterlacer', 'DfRes 122000 G2e 3', 'ST-Deint', 'Vapoursynth TDeintMod', 'DfRes SA', 'DfRes', 'MFDIN', 'SonyVegas Interpolate Field', 'Vapoursynth EEDI3', 'Kernel Deinterlacer (optimal parameters)', 'Weston 3-Field Deinterlacer', 'Kernel Deinterlacer', 'MSU Deinterlacer', 'Bob', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'EDVR_woTSA', 'DUF', 'Motion and Area Pixel Deinterlacer', 'EDVR', 'TDAN', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [99.944, 99.856, 99.845, 99.839, 99.823, 99.774, 99.771, 99.760, 99.739, 99.724, 99.711, 99.641, 99.421, 99.407, 99.298, 98.791, 98.579, 97.990, 97.561, 96.747, 96.626, 96.626, 96.549, 96.229, 95.843, 95.685, 95.088, 88.247, 53.600, 36.742, 32.292, ]});
        Highcharts.chart('perf-plot', bar_options);
        });
});