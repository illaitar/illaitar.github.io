$(function () {
    $(document).ready(function() {
    	var bar_options = {
    	    title: {text: 'The difference between metric values on BI and BD degradation'},
    	    subtitle: {text: ''},
            chart: {
                type: 'bar'
            },
            legend: {
                enabled: false
            },
            xAxis: {
	        title: {
	            text: ''
	        }
	    },
            yAxis: {title: {text: ''}},
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            series: [],
            credits: {
		text: 'videoprocessing.ai',
		href: 'https://videoprocessing.ai/'
	    },
    	};
    	
	//var script = document.currentScript || 
	///*Polyfill*/ Array.prototype.slice.call(document.getElementsByTagName('script')).pop();

	//var params = (script.getAttribute('data-params') || '').split(/, */);
	//params = document.getElementsByTagName('script').getAttribute('data-params');
	
        var metric_select = document.getElementById("dif_plot_selector_metric");
        var metricToName = ['erqa10', 'erqa20', 'lpips', 'psnr', 'ssim', 'qr'];
        var metric_name = metricToName[metric_select.selectedIndex];
        
        $.getJSON('../assets/json/benchmarks/vsr/metrics_dif.json', function (data) {
        	bar_options.xAxis.categories = data[metric_name]["models"];
        	bar_options.series.push({name: data[metric_name]["metric_name"], data: data[metric_name]["values"]});
        	bar_options.yAxis.title.text = data[metric_name]["ytitle"];
        	Highcharts.chart('dif_plot', bar_options);
        });
        
     	});
});
