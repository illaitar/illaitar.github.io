---
title: MSU HDR Video Reconstruction Benchmark 2022
description: The most comprehensive comparison of HDR video reconstruction methods
preview_img: /assets/img/benchmarks/itm/main.webp
subprojects:
tag:
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



# MSU HDR Video Reconstruction Benchmark 2022: HLG 

<div id="buttons"></div>
<script>
	__set_menu_buttons([
	['Home', '/benchmarks/inverse-tone-mapping.html'],
	['Participants','/benchmarks/inverse-tone-mapping-participants.html'], 
    ['Dataset', '/benchmarks/inverse-tone-mapping-dataset.html'],
	['Evaluation methodology', '/benchmarks/inverse-tone-mapping-methodology.html'],
    ['Contact us', '#contacts']
	], 'Home')
</script>

<div class="current_content" markdown="1">

{% include benchmarks/itm/board.html %}

## <span id="leaderboard"></span> Leaderboard
{% include benchmarks/itm/leaderboard.html %}

## <span id="charts"></span> Charts
{% include benchmarks/itm/plots.html %}

## <span id="charts"></span> Results
{% include benchmarks/itm/youtube_results.html %}

## <span id="visualization"></span> Visualization
{% include benchmarks/itm/visualization_images.html %}

<style type="text/css">
    .paper-preview-container img:hover {
        filter: brightness(80%);
    }

    .paper-preview01 {
        padding: 0;
        clear: both;
        border: 1px solid black;
        box-shadow: 5px 5px 3px #888888;
        width: 150px;
    }
</style>

## <span id="participate"></span> Your method submission
**Verify the restoration ability of your HDR Video Reconstruction algorithm and compare it with state-of-the-art solutions.**
You can see information about all other participants [here](/benchmarks/inverse-tone-mapping-participants.html).


{% include benchmarks/itm/submission.html %}
## <span id="contacts"></span>Contacts

We would highly appreciate any suggestions and ideas on how to improve our benchmark. For questions and propositions, please contact us: <itm-benchmark@videoprocessing.ai>

Also you can subscribe to updates on our benchmark:

{% include benchmarks/itm/form.html %}
