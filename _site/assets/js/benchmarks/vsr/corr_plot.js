$(function () {
    $(document).ready(function() {
    	var bar_options = {
    	    title: {text: ''},
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
	
        var type_select = document.getElementById("corr_selector_type");
        var typeToName = ['pearson', 'spearman'];
        var type_name = typeToName[type_select.selectedIndex];
        
        $.getJSON('../assets/json/benchmarks/vsr/corr_data.json', function (data) {
        	bar_options.title.text = data[type_name]['title'];
        	bar_options.xAxis.categories = data[type_name]["labels"];
        	bar_options.series.push({name: type_name, data: data[type_name]["values"]});
        	bar_options.yAxis.title.text = data[type_name]['ytitle'];
        	Highcharts.chart('corr_plot', bar_options);
        });
        
     	});
});
