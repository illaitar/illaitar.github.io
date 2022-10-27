$(function () {
    $(document).ready(function() {
        var bar_options = {
            title: {text: 'Correlation of metrics with Subjective assessment via extrapolated BSQ-rate'},
            subtitle: {text: ''},
            chart: {
                renderTo: 'container'
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
            yAxis: {min: -0.4, max: 0.8, title: {text: ''}},
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
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
            }
        };

        
        bar_options.xAxis.categories = ['ERQAv1.0', 'LPIPS', 'Y-VMAF', 'Y-VMAF NEG', 'Y-VMAF (clipped)', 'YUV-MS-SSIM', 'Y-PSNR',]; //'VMAF', 
        bar_options.series.push({ type: 'column', name: 'Spearman', data: [0.73, 0.71, 0.59, 0.55, 0.5, 0.27, -0.1] }); //0.85,
            bar_options.series.push({ type: 'column', name: 'Pearson', data: [0.61, 0.70, 0.62, 0.51, 0.65, 0.21, -0.3] }); //0.79,
        Highcharts.chart('correlation_bsqrate_plot', bar_options);
        });
});