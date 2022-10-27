$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'Correlation of metrics with Subjective assessment'},
            subtitle: {text: ''},
            chart: {
                renderTo: 'container'
            },
            annotation: {
                yAxis: {
                    text: "Better"
                }
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: []
            },
            chart: {
                height: 550,
            },
            yAxis: {min: 0.1, max: 0.9, title: {text: ''}},
            plotOptions: {column: {dataLabels: {enabled: true}}},
            series: [],
            legend: {
                borderRadius: 0,
                borderColor: 'silver',
                enabled: true,
                margin: 30,
                itemMarginTop: 2,
                itemMarginBottom: 2,
                layout: 'horizontal',
            },
            credits:{
                "enabled":true,
                "href":"https://videoprocessing.ai/",
                "text":"videoprocessing.ai",
                "position":{
                    "align":"right",
                    "x":-80,
                    "verticalAlign":"top",
                    "y":70,
                    "alignTo":"plotBox"
                },
                "style" : {
                    "fontSize" : "16px"
                }
            }
        };

        
        bar_options.xAxis.categories = ['ERQA-MDTVSFA*', 'MDTVSFA', 'ERQAv2.0', 'Y-VMAF', 'LPIPS', 'Y-PSNR', 'Y-MS-SSIM'];
        bar_options.series.push({ type: 'column', name: 'Spearman', data: [0.801, 0.644, 0.624, 0.448, 0.431, 0.285, 0.151] }); 
            bar_options.series.push({ type: 'column', name: 'Pearson', data: [0.770, 0.634, 0.582, 0.344, 0.414, 0.187, 0.146] }); 
        Highcharts.chart('correlation_plot', bar_options);
        });
});