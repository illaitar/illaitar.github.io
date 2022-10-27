$(function () {
    $(document).ready(function() {
    	var bar_options = {
    	    title: {text: ''},
    	    subtitle: {text: ''},
            chart: {
                height: '80%',
                type: 'bar',
                zoomtype: 'xy',
            },
            legend: {
                enabled: false
            },
            xAxis: {
	        title: {
	            text: ''
	        }
	    },
            yAxis: {min: 0.5100672031399144,title: {text: ''}},
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
	
	var test_select = document.getElementById("arrow_selector_test");
        var part_select = document.getElementById("arrow_selector_part");
        var metric_select = document.getElementById("arrow_selector_metric");
        var testToName = ['test1_bicubic', 'test1_bicubic_noise2', 'test1_gauss', 'test1_gauss_noise2',
                    'test2_bicubic', 'test2_bicubic_noise2', 'test2_gauss', 'test2_gauss_noise2', 
                    'test3_bicubic', 'test3_bicubic_noise2', 'test3_gauss', 'test3_gauss_noise2'];
        var partToName = ['full_frame', 'part1', 'part2', 'part3', 'part4', 'part5', 'part6', 'part7', 'part8'];
        var metricToName = ['erqa10', 'erqa20', 'lpips', 'psnr', 'ssim', 'qr', 'subjectify'];
        var test_name = testToName[test_select.selectedIndex];
        var part_name = partToName[part_select.selectedIndex];
        var metric_name = metricToName[metric_select.selectedIndex];
        if (metric_select.selectedIndex === 5) {
        	var params = test_name+'+'+metric_name;
        } else if (metric_select.selectedIndex === 6) {
        	var params = metric_name;
        } else {
        	var params = test_name+'+'+part_name+'+'+metric_name;
        }
        
        $.getJSON('../assets/json/benchmarks/vsr/data_arrow.json', function (data) {
        	bar_options.title.text = data[params]["title"];
        	bar_options.subtitle.text = data[params]["subtitle"];
        	bar_options.xAxis.categories = data[params]["models"];
        	bar_options.series.push({name: data[params]["metric_name"], data: data[params]["metric_values"]});
        	bar_options.yAxis.min = data[params]["min_val"];
        	bar_options.yAxis.title.text = data[params]["metric_name"];
        	Highcharts.chart('arrow_plot', bar_options);
        });
     	});
});
