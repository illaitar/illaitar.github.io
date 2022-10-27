$(function(){
	var default_metric = 'psnr';

	var loadMetric = function(metr_name) {
		$('#metric_list>li>a').removeClass('selected');
		$(findItemByMetricName(metr_name)).addClass('selected');
		$("#metric_info").load("/vqmt/metrics/" + metr_name, function(a, status, b) {
			if (status=="success") {
				setupMetricExamplesAll();
				MathJax.Hub.Typeset();
				repositionMetricMenu();
			}
		});
	}

	var findItemByMetricName = function(metr_name) {
		var found;

		$('#metric_list>li>a').each(function(){
			if ($(this).attr('metric_name') == metr_name) {
				found = this;
				return false;
			}
		});

		return found;
	}

	$("#metric_list>li>a").on("click", function(e){
		var metr_name = $(this).attr("metric_name");
		window.location.hash = '#' + metr_name;
		loadMetric(metr_name);
	});

	var repositionMetricMenu = function() {
		var global_offset = window.pageYOffset;
		var global_height = $(window).height();
		var menu_offset = $('#metric_list').offset().top;
		var menu_height = $('#metric_list').outerHeight();
		var parent_offset = $('#metric_list').parent().offset().top;
		var parent_height = $('#metric_list').parent().outerHeight();

		var dst_offset;

		// menu_offset2 = dst_offset + parent_offset
		if (menu_height <= global_height) {
			if(menu_offset < global_offset) {
				dst_offset = global_offset - parent_offset;	
			}
			else if (menu_offset + menu_height > global_offset + global_height) {
				// dst_offset + parent_offset + menu_height = global_offset + global_height
				dst_offset = global_offset + global_height - menu_height - parent_offset;
			}
		}
		else {
			if (menu_offset + menu_height < global_offset + global_height) {
				// dst_offset + parent_offset + menu_height = global_offset + global_height
				dst_offset = global_offset + global_height - menu_height - parent_offset;
			}
			else if(menu_offset > global_offset) {
				dst_offset = global_offset - parent_offset;	
			}
		}

		if (dst_offset!==undefined) {
			dst_offset = Math.round(Math.max(0, Math.min(parent_height - menu_height, dst_offset)));
			$('#metric_list').css({top:dst_offset+'px'});
			//document.getElementById('metric_list').style.top = dst_offset+'px';
			//console.log(dst_offset);
		}
	};
	$( window ).scroll(repositionMetricMenu);

	var loadByHash = function() {
		if (window.location.hash == '' || window.location.hash[0]!='#')
			return false;

		var metr_name = window.location.hash.substr(1);
		var item = findItemByMetricName(metr_name);

		if (item!==undefined) {
			loadMetric($(item).attr('metric_name'));
			return true;
		}

		return false;
	}

	$(window).on('hashchange', function() {
	    loadByHash();
	});
		
	var loaded = loadByHash();

	if (!loaded) {
		loadMetric(default_metric);
	}

});