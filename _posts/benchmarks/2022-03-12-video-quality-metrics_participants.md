---
title: MSU Video Quality Metrics Benchmark 2021 Participants
description: 
preview_img: 
subprojects:
tag: invisible

---

<link rel="stylesheet" href="/assets/css/benchmarks/style.css">
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8"
   src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js"></script>
<link rel="stylesheet" href="/assets/css/benchmarks/upscalers/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">



{:.center}
# Participants of the MSU Video Quality Metrics Benchmark

<div id="buttons"></div>
<script>
	__set_menu_buttons([
	['Home', '/benchmarks/video-quality-metrics.html'],
	['Leaderboard','/benchmarks/video-quality-metrics_both.html'], 
	['Methodology', '/benchmarks/video-quality-metrics_methodology.html'],
    ['Participants', '/benchmarks/video-quality-metrics_participants.html'],
    ['Submission','/benchmarks/video-quality-metrics.html#submit']
	], 'Participants')
</script>
<div class="current_content" markdown="1">

<div id="leaderboard_id">
    <div class="datatable-container">
      <div class="datatable-center">
          <table id="correlation_table" class="datatable display" style="background-color: #ffffff; width:90%">
              <thead>
                  <tr style="font-size: large; background-color: #3d6f96">
                      <th style="background-color: #3d6f96"></th>
                  </tr>
              </thead>
              <tbody></tbody>
          </table>
      </div>
    </div>
    <script>function onChangeHelper() {
        $.getJSON('../assets/json/benchmarks/frm/participants_page.json', function (data) {

            let table = document.getElementById('correlation_table');

            table.innerHTML = data['data'];

            $('#correlation_table').DataTable().destroy();

            $('#correlation_table').DataTable({
                searching: false,
                ordering: true,
                lengthChange: false,
                paging: false,
                bInfo : false,
                dom: 'Blfrtip',
            });
        });
    }

    onChangeHelper();

    </script>

</div>

</div>
