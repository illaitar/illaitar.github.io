$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'Overall VMAF'},
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
        bar_options.xAxis.categories = ['MFDIN L', 'FLAD', 'SwinDI', 'DfRes SA', 'DfRes 122000 G2e 3', 'MFDIN', 'ST-Deint', 'EDVR_woTSA', 'NNEDI', 'DfRes', 'EDVR', 'MSU Deinterlacer', 'DUF', 'Bob-Weave Deinterlacer', 'Vapoursynth TDeintMod', 'Real-Time Deep Deinterlacer', 'Kernel Deinterlacer (optimal parameters)', 'Kernel Deinterlacer', 'SonyVegas Interpolate Field', 'Vapoursynth EEDI3', 'TDAN', 'Weston 3-Field Deinterlacer', 'Motion and Area Pixel Deinterlacer', 'Bob', 'YADIF', 'Muksun Deinterlacer', 'ASVZZZ Deinterlacer', 'PAL Interpolation', 'Motion Compensation Deinterlacer', 'Adobe Premiere Pro Built-In', 'SonyVegas Blend Field', ];
        bar_options.series.push({name: 'VMAF', data: [97.429, 95.836, 95.268, 95.177, 94.848, 94.455, 94.445, 93.327, 93.246, 93.212, 92.805, 92.141, 91.595, 91.309, 91.044, 90.964, 90.757, 90.250, 90.151, 90.122, 89.876, 89.625, 88.882, 87.242, 87.240, 86.873, 86.873, 82.662, 64.436, 57.538, 49.308, ]});
        Highcharts.chart('overall-plot', bar_options);
        });
});