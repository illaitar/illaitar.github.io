function create_charts(lengths, types, moved_to, fps, shorter_name, longer_name, frames) {
	var from = document.getElementById("from");
	var to = document.getElementById("to");

	var COLORS = {
		match: 'rgb(43, 144, 143)',
		new: 'rgb(144, 237, 125)',
		moved: 'rgb(124, 181, 236)',
		transparent: 'rgba(0, 0, 0, 0)'
	};

	function generate_comparison_data(lengths, types, moved_to, fps) {
		function play_from(start_time) {
			from.currentTime = start_time;
			from.play();
		}

		function play_to(start_time) {
			to.currentTime = start_time;
			to.play();
		}

		var TYPE = {
			"match": 0,
			"moved_left": 1,
			"moved_right": 2,
			"new_left": 3,
			"new_right": 4
		};

		function timestamp(seconds) {
			hours = Math.floor(seconds / 3600)
			seconds %= 3600
			minutes = Math.floor(seconds / 60)
			seconds %= 60
			temp = seconds;
			seconds = Math.floor(seconds);
			milliseconds = Math.round((temp - seconds) * 1000);

			if (minutes >= 10)
				minutes = "" + minutes;
			else
				minutes = "0" + minutes;

			if (seconds >= 10)
				seconds = "" + seconds;
			else
				seconds = "0" + seconds;

			if (milliseconds >= 100)
				milliseconds = "" + milliseconds;
			else if (milliseconds > 10)
				milliseconds = "0" + milliseconds;
			else
				milliseconds = "00" + milliseconds;

			return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
		}

		function generate_data(left_frame, right_frame, length, t, fps, index, right) {
			var frame = null;
			if (right)
				frame = right_frame;
			else
				frame = left_frame;

			var start = frame / fps;
			var end = (frame + length) / fps;
			var name = timestamp(start) + '–' + timestamp(end);

			var className = '';
			var color = null;
			if (right) {
				if (t == TYPE['new_left'] || t == TYPE['moved_left']) {
					className = 'invisible';
					color = COLORS.transparent;
				} else if (t == TYPE['match']) {
					color = COLORS.match;
				} else if (t == TYPE['new_right']) {
					color = COLORS.new;
				} else {
					color = COLORS.moved;
				}
			} else {
				if (t == TYPE['new_right'] || t == TYPE['moved_right']) {
					className = 'invisible';
					color = COLORS.transparent;
				} else if (t == TYPE['match']) {
					color = COLORS.match;
				} else if (t == TYPE['new_left']) {
					color = COLORS.new;
				} else {
					color = COLORS.moved;
				}
			}

			var events = {};
			if (className != 'invisible') {
				if (color == COLORS.match) {
					events.mouseOver = function(event) {
						make_all_transparent();
						make_opaque_by_index(index, 0);
						make_opaque_by_index(index, 1);
					};
					events.mouseOut = function(event) {
						make_all_opaque();
					};
					events.click = function(event) {
						play_from(left_frame / fps);
						play_to(right_frame / fps);
					};
				} else if (t == TYPE['new_left']) {
					events.click = function(event) {
						play_from(left_frame / fps);
					};
				} else if (t == TYPE['new_right']) {
					events.click = function(event) {
						play_to(right_frame / fps);
					};
				} else {
					events.mouseOut = function(event) {
						make_all_opaque();
					};
				}
			}

			return {
				name: name,
				y: length,
				className: className,
				color: color,
				events: events
			};
		}

		function make_transparent(point) {
			point.graphic.addClass("transparent");
		}

		function make_opaque(point) {
			point.graphic.removeClass("transparent");
		}

		function make_transparent_by_index(i, j) {
			make_transparent(chart.series[i].data[j]);
			make_transparent(master.series[i].data[j]);
		}

		function make_opaque_by_index(i, j) {
			make_opaque(chart.series[i].data[j]);
			make_opaque(master.series[i].data[j]);
		}

		function make_all_transparent() {
			var series = chart.series;
			var series_master = master.series;
			var length = series.length;

			for (var j = 0; j < length; j++) {
				var s = series[j];
				var d = s.data;

				make_transparent(d[0]);
				make_transparent(d[1]);

				var s = series_master[j];
				var d = s.data;

				make_transparent(d[0]);
				make_transparent(d[1]);
			}
		}

		function make_all_opaque() {
			var series = chart.series;
			var series_master = master.series;
			var length = series.length;

			for (var j = 0; j < length; j++) {
				var s = series[j];
				var d = s.data;

				make_opaque(d[0]);
				make_opaque(d[1]);

				var s = series_master[j];
				var d = s.data;

				make_opaque(d[0]);
				make_opaque(d[1]);
			}
		}

		var rv = [];
		var left_frame = 0, right_frame = 0;
		var left_frame_cache = [], right_frame_cache = [];

		for (var i = 0; i < lengths.length; i += 1) {
			var length = lengths[i];
			var t = types[i];

			left_frame_cache.push(left_frame);
			right_frame_cache.push(right_frame);

			rv.push({
				data: [
					generate_data(left_frame, right_frame, length, t, fps, lengths.length - i - 1, false),
					generate_data(left_frame, right_frame, length, t, fps, lengths.length - i - 1, true)
				]
			});

			if (t == TYPE['match'] || t == TYPE['new_left'] || t == TYPE['moved_left'])
				left_frame += length;
			if (t == TYPE['match'] || t == TYPE['new_right'] || t == TYPE['moved_right'])
				right_frame += length;
		}

		var moved_i = 0;
		for (var i = 0; i < types.length; i += 1) {
			var t = types[i];

			if (t == TYPE['moved_left']) {
				var move_target = moved_to[moved_i];
				moved_i += 1;

				(function() {
					var events = rv[i].data[0].events;
					var a = lengths.length - i - 1;
					var b = lengths.length - move_target - 1;
					var c = left_frame_cache[i] / fps;
					var d = right_frame_cache[move_target] / fps;
					events.mouseOver = function(event) {
						make_all_transparent();
						make_opaque_by_index(a, 0);
						make_opaque_by_index(b, 1);
					};
					events.click = function(event) {
						play_from(c);
						play_to(d);
					};
				})();
			} else if (t == TYPE['moved_right']) {
				var move_target = moved_to[moved_i];
				moved_i += 1;

				(function() {
					var events = rv[i].data[1].events;
					var a = lengths.length - move_target - 1;
					var b = lengths.length - i - 1;
					var c = left_frame_cache[move_target] / fps;
					var d = right_frame_cache[i] / fps;
					events.mouseOver = function(event) {
						make_all_transparent();
						make_opaque_by_index(a, 0);
						make_opaque_by_index(b, 1);
					};
					events.click = function(event) {
						play_from(c);
						play_to(d);
					};
				})();
			}
		}

		rv.reverse();
		return rv;
	}

	var playback_position_indicators = [];

	function create_detail(data, master) {
		chart = Highcharts.chart('detail-container', {
			chart: {
				type: 'bar',
				zoomType: 'y',
				events: {
					selection: function(event) {
						var yAxis = event.yAxis;
						var extremes;

						if (yAxis) {
							extremes = yAxis[0];
						} else {
							extremes = master.yAxis[0].getExtremes();
						}

						set_master_bands(extremes.min, extremes.max);
					}
				}
			},
			title: {
				text: null
			},
			credits: {
				enabled: false
			},
			xAxis: {
				categories: [shorter_name, longer_name]
			},
			yAxis: {
				min: 0,
				maxPadding: 0,
				endOnTick: false,
				gridLineWidth: 0,
				title: {
					text: null
				}
			},
			legend: {
				enabled: false
			},
			plotOptions: {
				series: {
					stacking: 'normal',
					groupPadding: 0
				}
			},
			tooltip: {
				formatter: function() {
					if (this.point.name == '')
						return false;

					return this.point.name + '<br /><b>' + this.y + '</b> ' + frames;
				}
			},
			series: data
		}, function(detail) {
			var chart = detail,
			    left_value = 10,
			    right_value = 12;

			var axis = detail.yAxis[0],
			    left_position = axis.toPixels(left_value),
			    right_position = axis.toPixels(right_value),
			    height = (chart.chartHeight - axis.bottom - axis.top) / 2;

			playback_position_indicators[0] = detail.renderer.rect(
				0,
				axis.top,
				5,
				height
			).attr({
				fill: '#f45b5b',
				zIndex: 4
			}).add();

			playback_position_indicators[1] = detail.renderer.rect(
				0,
				axis.top + height,
				5,
				height
			).attr({
				fill: '#f45b5b',
				zIndex: 4
			}).add();
		});
	}
	
	var data = generate_comparison_data(lengths, types, moved_to, fps);
	master = Highcharts.chart('master-container', {
		chart: {
			type: 'bar',
			zoomType: 'y',
			events: {
				selection: function (event) {
					var extremesObject = event.yAxis[0],
						min = extremesObject.min,
						max = extremesObject.max;

					set_master_bands(min, max);

					chart.yAxis[0].setExtremes(min, max);

					if (!chart.resetZoomButton)
						chart.showResetZoom();

					return false;
				}
			}
		},
		title: {
			text: null
		},
		xAxis: {
			visible: false
		},
		yAxis: {
			gridLineWidth: 0,
			min: 0,
			maxPadding: 0,
			endOnTick: false,
			title: {
				text: null
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			series: {
				stacking: 'normal'
			}
		},
		tooltip: {
			formatter: function() {
				return false;
			}
		},
		series: data,
		exporting: {
		    enabled: false
		}
	}, function(master) {
		create_detail(data, master);

		master.yAxis[0].addPlotBand({
			id: 'mask',
			from: 0,
			to: master.yAxis[0].getExtremes().max,
			color: 'rgba(102, 133, 194, 0.3)'
		});
	});

	function set_master_bands(min, max) {
		yAxis = master.yAxis[0];

		yAxis.removePlotBand('mask');
		yAxis.addPlotBand({
			id: 'mask',
			from: min,
			to: max,
			color: 'rgba(102, 133, 194, 0.3)'
		});
	}

	function frame_to_position(right, frame) {
		var position = 0;

		for (var i = data.length - 1; i > 0; i -= 1) {
			var segment = null;
			if (right) {
				segment = data[i].data[1];
			} else {
				segment = data[i].data[0];
			}

			if (segment.color == COLORS.transparent) {
				position += segment.y;
				continue;
			}

			if (frame >= segment.y) {
				frame -= segment.y;
				position += segment.y;
				continue;
			}

			return position + frame;
		}
	}

	function move_playback_positions() {
		var axis = chart.yAxis[0],
		    left_value = frame_to_position(false, from.currentTime * fps),
		    right_value = frame_to_position(true, to.currentTime * fps);

		var left_position = axis.toPixels(left_value),
		    right_position = axis.toPixels(right_value);

		playback_position_indicators[0].translate(left_position, 0);
		playback_position_indicators[1].translate(right_position, 0);

		if (left_position < axis.left || left_position >= axis.left + axis.width) {
			playback_position_indicators[0].hide();
		} else {
			playback_position_indicators[0].show();
		}

		if (right_position < axis.left || right_position >= axis.left + axis.width) {
			playback_position_indicators[1].hide();
		} else {
			playback_position_indicators[1].show();
		}

		window.requestAnimationFrame(move_playback_positions);
	}
	
	window.requestAnimationFrame(move_playback_positions);
}
