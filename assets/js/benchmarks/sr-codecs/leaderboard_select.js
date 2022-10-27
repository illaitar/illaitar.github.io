$(function () {
    $(document).ready(function() {
    	
    	
	//var script = document.currentScript || 
	///*Polyfill*/ Array.prototype.slice.call(document.getElementsByTagName('script')).pop();

	//var params = (script.getAttribute('data-params') || '').split(/, */);
	//params = document.getElementsByTagName('script').getAttribute('data-params');
	
        var metric_select = document.getElementById("leaderboard_selector_metric");
        var metricToName = ['ERQA', 'PSNR', 'MSSSIM', 'VMAFCLIPPED', 'VMAFNEG', 'LPIPS'];
        var metric_name = metricToName[metric_select.selectedIndex];

		//var table = $('#leaderboard_table').DataTable();
		//table.destroy();


		//var table_body = document.getElementById("leaderboard_table_body");
		//table_body.innerHTML = "";
		let table = document.getElementById("leaderboard_table");
            let table_parent = document.getElementById("leaderboard_table_wrapper");
            
            table.remove();

            let new_table = document.createElement("table");
            new_table.setAttribute("id", "leaderboard_table");
            new_table.setAttribute("class", "datatable display");
            new_table.setAttribute("style", "background-color: #d4d4d4");


            $("#leaderboard_table thead").append('<tr style="font-size: 95%; background-color: #3d6f96">' +    
                    '<th style="background-color: #3d6f96">Model</th>' +
                    '<th style="background-color: #3d6f96">x264</th>' +
                    '<th style="background-color: #3d6f96">x265</th>' +
                    '<th style="background-color: #3d6f96">libaom-av1</th>' +
                    '<th style="background-color: #3d6f96">vvenc</th>' +
                    '<th style="background-color: #3d6f96">uasv3e</th>' +
                '</tr>'
            );

            metric_name = 'METRIC';
            $("#leaderboard_table tbody").append('<tr>' + 
                "<td>" + metric_name + "</td>" +
                "<td>1</td>" +
                "<td>2</td>" +
                "<td>3</td>" +
                "<td>4</td>" +
                "<td>5</td>" +
                "</tr>" +
                '<tr>' + 
                "<td>" + metric_name + "</td>" +
                "<td>10</td>" +
                "<td>2</td>" +
                "<td>3</td>" +
                "<td>4</td>" +
                "<td>0</td>" +
                "</tr>"
                );

            //let table_body = document.getElementById("leaderboard_table_body");
    
            //table_body.remove();
            //let new_plot = document.createElement('tbody');
            //new_plot.setAttribute("id", "leaderboard_table_body");


            
            table_parent.appendChild(table);
        
        $.getJSON('../assets/json/benchmarks/sr-codecs/leaderboard_data.json', function (data) {
        	
			
			




		

        });
        
     	});
});
