---
title: MSU Video Deblurring Benchmark 2022
description: Learn about the best video deblurring methods and choose the best model
preview_img: /assets/img/benchmarks/deblurring/preview.png
subprojects:

---
<style>
    .container{
        box-shadow: 0 5px 10px 1px grey;
        background: rgba(255, 255, 255, 0.90);
        text-align: center;
        border-radius: 5px;
        overflow: hidden;
        margin: 2.5em auto;
        width: 100%;
    }

    .product-details {
        position: relative;
        text-align: left;
        overflow: hidden;
        padding: 1px 15px;
        height: 100%;
        float: left;
        width: 44%;
    }
    .container .product-details h1{
        display: inline-block;
        position: relative;
        font-size: 20px;
        color: #344055;
        margin: 0;
    }

    .control{
        position: absolute;
        bottom: 20%;
        left: 22.8%;
    }
</style>


<head><base target="_top"></head>
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


{:.center}
# MSU Video Deblurring Benchmark 2022

<div id="buttons"></div>
<script>
    __set_menu_buttons([
    ['Home', '/benchmarks/deblurring.html'],
    ['Participants','/benchmarks/deblurring-participants.html'],
    ['Evaluation methodology', '/benchmarks/deblurring-methodology.html'], 
    ['How to participate', '#participate'],
    ['Contact us', '#contacts']
    ], 'Home')
</script>

<div class="current_content" markdown="1">

{% include benchmarks/deblurring/board.html %}

## What's new
- **24.10.2022** Beta-version Release.

## <span id="charts"></span> Leaderboard

{% include benchmarks/deblurring/leaderboard.html %}

## <span id="charts"></span> Charts
{% include benchmarks/deblurring/plots.html %}

## <span id="visualization"></span> Visualization

{% include benchmarks/deblurring/visualization.html %}

## <span id="Roadmap"></span> Deblurring Benchmark Roadmap
{% include benchmarks/deblurring/roadmap.html %}


## <span id="participate"></span> Submit Your Method
**Verify your method’s ability to restore blurred videos and compare it with other algorithms.**<br>
You can go to <a href="/benchmarks/deblurring-participants.html">the page with information</a> about other participants.
<br>

{% include benchmarks/deblurring/submission.html %}

## <span id="contacts"></span> Contact Us

For questions and propositions, please contact us: <deblurring-benchmark@videoprocessing.ai>

You can subscribe to updates on our benchmark:

{% include benchmarks/deblurring/form.html %}

</div>