---
title: MSU Video Quality Metrics Benchmark 2021 Methodology
description: 
preview_img: 
subprojects:
tag: invisible

---

<link rel="stylesheet" href="/assets/css/benchmarks/style.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8"
  src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js"></script>
<link rel="stylesheet" href="/assets/css/benchmarks/upscalers/style.css">



{:.center}
#  Data and Analysis for No-Reference Metrics 

<div id="buttons"></div>
<script>
    __set_menu_buttons([
    ['Home', '/benchmarks/video-quality-metrics.html'],
    ['Leaderboard','/benchmarks/video-quality-metrics_both.html'], 
    ['Methodology', '/benchmarks/video-quality-metrics_methodology.html'],
    ['Participants', '/benchmarks/video-quality-metrics_participants.html'],
    ['Submission','/benchmarks/video-quality-metrics.html#submit']
    ], 'Leaderboard')
</script>

<script>
    __set_menu_buttons([
    ['All metrics', '/benchmarks/video-quality-metrics_both.html'],
    ['No-Reference metrics', '/benchmarks/video-quality-metrics_nrm.html'],
    ['Full-Reference metrics','/benchmarks/video-quality-metrics_frm.html#submit']
    ], 'No-Reference metrics')
</script>

<div class="current_content" markdown="1">

## Leaderboard

The chart below shows the correlation of metrics with subjective scores on our dataset. You can choose the type of correlation and the compression standard of codecs used for compression. We recommend that you focus on Spearman's rank correlation coefficient.

{% include benchmarks/frm/plots.html %}
 
Tabel below shows the correlations of metrics with subjective scores on our dataset. 
Click on the labels to sort the table.

{% include benchmarks/frm/leaderboard_table.html %}

## Metrics performance on different compression standards 

Below you can see the comparison of the metrics performance on videos compressed by codecs with different compression standards.
Click simplify to hide variation of metrics.

{% include benchmarks/frm/standards_comparison.html %}

## Speed-Quality Plot

The chart below shows Speed-Quality characteristics of metrics.

{% include benchmarks/frm/speed_plot.html %}

## <span id="contacts"></span>Submitting

To submit your method please visit [this](/benchmarks/video-quality-metrics.html#submit) section of the home page.

## <span id="contacts"></span>Contacts

We would highly appreciate any suggestions and ideas on how to improve our benchmark. Please contact us via email: <vqa@videoprocessing.ai>.
