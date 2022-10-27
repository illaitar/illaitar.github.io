$(function () {
    $(document).ready(function() {
	var plot_options = {
	    chart: {
                type: 'scatter',
                zoomType: 'xy',
                spacingBottom: 15,
                spacingTop: 10,
                spacingLeft: 10,
                spacingRight: 10,
                // Explicitly tell the width and height of a chart
                width: null,
                height: null
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: ''
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: '{point.x}, {point.y}'
                    }
                }
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            series: [],
            credits: {
		text: 'videoprocessing.ai',
		href: 'https://videoprocessing.ai/'
	    },
	};
	var test_select = document.getElementById("time_plot_selector_test");
        var metric_select = document.getElementById("time_plot_selector_metric");
        var part_select = document.getElementById("time_plot_selector_part");
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
	
	$.getJSON('../assets/json/benchmarks/vsr/data_time_scatter.json', function (data) {
        	plot_options.title.text = data[params]["title"];
        	plot_options.subtitle.text = data[params]["subtitle"];
        	for (let i = 0; i < data[params]["series"].length; i++) {
		  plot_options.series.push({name: data[params]["series"][i]["name"], data: data[params]["series"][i]["vals"]});
		}
        	plot_options.yAxis.title.text = data[params]["y_title"];
        	plot_options.xAxis.title.text = data[params]["x_title"];
        	Highcharts.chart('time_plot', plot_options);
        });		
    });
 });
