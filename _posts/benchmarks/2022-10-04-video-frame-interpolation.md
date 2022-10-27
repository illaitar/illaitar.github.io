---
title: MSU Video Frame Interpolation Benchmark 2022
description: Discover the best algorithm to make high-quality and smooth slow motion videos
preview_img: /assets/img/benchmarks/vfi/main.webp
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
<link rel="stylesheet" href="/assets/css/benchmarks/upscalers/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


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
        padding: 15px 15px;
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


    @media (max-width: 420px) { 
        .container .product-details > p {
            font-size: 4.5vw;
        }
        .product-details {
            padding: 0px 0px 20px 20px;
        }
        .container .product-details h1{
            margin-top: 10px;
            font-size: 4.5vw;
        }
    }
</style>

<style method="text/css">
  .textcols {
    white-space: nowrap;
  }
  .textcols-item {
    white-space: normal;  
    display: inline-block;
    width: 31%;
    vertical-align: top;
    /*background: #fff2e1;*/
  }
  .textcols-item1 {
    white-space: normal;  
    display: inline-block;
    width: 48%;
    vertical-align: top;
    /*background: #fff2e1;*/
  }
  .textcols .textcols-item:first-child {
    margin-right: 4%;
  }
</style>


{:.center}
# MSU Video Frame Interpolation Benchmark

<div id="buttons"></div>
<script>
	__set_menu_buttons([
	['Home', '/benchmarks/video-frame-interpolation.html'],
	['Participants','video-frame-interpolation-participants.html'], 
    ['Dataset', '/benchmarks/video-frame-interpolation-dataset.html'],
	['Evaluation methodology', '/benchmarks/video-frame-interpolation-methodology.html'],
    ['How to participate', '#participate'],
    ['Contact us', '#contacts']
	], 'Home')
</script>
<div class="current_content" markdown="1">



<!--
## What's new 111111
- **25.03.2022** Added VRT, BasicVSR, RBPN, and COMISR. Updated [Leaderboards](#leaderboard) and [Visualizations](#visualization) sections.
- **14.03.2022** Uploaded new [dataset](#participate). Updated the [Methodology](/benchmarks/super-resolution-for-video-compression-methodology.html).
- **26.10.2021** Updated the [Methodology](/benchmarks/super-resolution-for-video-compression-methodology.html).
- **12.10.2021** Published [October Report](#report). Added 2 new videos to the dataset. Updated [Charts](#charts) section and [Visualizations](#visualization). 
- **28.09.2021** Improved the [Leaderboards](#leaderboard) section to make it more user-friendly, updated the [Methodology](/benchmarks/super-resolution-for-video-compression-methodology.html) and added ERQAv1.1 metric
- **21.09.2021** Added 2 new videos to the dataset, new plots to the [Charts](#charts) section, and new [Visualizations](#visualization)
- **14.09.2021** Public beta-version Release
- **31.08.2021** Alpha-version Release 
-->

<!-- <div class="current_content" markdown="1"> -->

{% include benchmarks/vfi/board.html %}

## <span id="leaderboard"></span> Leaderboard

{% include benchmarks/vfi/leaderboard_pairs.html %}

## <span id="charts"></span> Charts

{% include benchmarks/vfi/charts.html %}

## <span id="visualizations"></span> Visualizations

{% include benchmarks/vfi/visualization_images.html %}

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
**Verify the interpolation ability of your Video Frame Interpolation algorithm and compare it with other solutions.**
You can see information about other participants [here](/benchmarks/video-frame-interpolation-participants.html).


{% include benchmarks/vfi/submission.html %}
## <span id="contacts"></span>Contacts

We would highly appreciate any suggestions and ideas on how to improve our benchmark. For questions and propositions, please contact us: <vfi-benchmark@videoprocessing.ai>

Also you can subscribe to updates on our benchmark:

{% include benchmarks/vfi/form.html %}
