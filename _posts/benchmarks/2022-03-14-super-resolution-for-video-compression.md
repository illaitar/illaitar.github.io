---
title: MSU Super-Resolution for Video Compression Benchmark 2022
description: Learn about the best SR methods for compressed videos and choose the best model to use with your codec
preview_img: /assets/img/benchmarks/sr-codecs/preview.gif
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
# MSU Super-Resolution for Video Compression Benchmark
<div id="buttons"></div>
<script>
	__set_menu_buttons([
	['Home', '/benchmarks/super-resolution-for-video-compression.html'],
	['Participants','/benchmarks/super-resolution-for-video-compression-participants.html'], 
	['Evaluation methodology', '/benchmarks/super-resolution-for-video-compression-methodology.html'], 
	['How to participate', '#participate'],
    ['Download report', '#report'],
    ['Contact us', '#contacts']
	], 'Home')
</script>

<div class="current_content" markdown="1">

{:.center}
### Discover SR methods for compressed videos and choose the best model to use with your codec
<div style="margin-left: 60%;">
	<div><b>G&M Lab head: Dr. Dmitriy Vatolin</b></div>
	<div><b>Project adviser: Dr. Dmitriy Kulikov</b></div>
	<div style="display: flex">
	  <div><b>Measurements, analysis:</b>&nbsp;</div>
	  <div><b>Evgeniy Bogatyrev,<br>Egor Sklyarov</b>
	  </div>
	</div>
</div>

<br>
<div class="center">
    <div>
        <img style="width:100%" src="/assets/img/benchmarks/sr-codecs/main_plot.svg">
    </div>
</div>

<!--
<div class="container" style="padding-top: 0px; margin-top: 10px;"> 
## Key features of the Benchmark

*   **H.264, H.265, H.266, AV1, AVS3 codec standards** to compress input data
     * Find the method that produces great results working with various codecs
*   **Different objective metrics** ranked by their correlation with the subjective assessment
     * Test your method with metrics that correlate well with subjective score    
*   Visual comparison for more than **90 SR+codec pairs**
     * You can check visually how good each state-of-the-art method is
*   A large set of SR mehtods, which is constantly updated with **new SOTA methods**
</div>
-->
<br>
<div class="container" style="padding-top: 0px; margin-top: 0px;">    
    <!-- <h2 style="align-self: center; padding-bottom: 0px;">Key features of the Benchmark</h2> -->
    <div class="product-details" style="width: 29%; margin-left: 5px; padding-bottom: 0px;">
        <h3 style="color: black; text-align: center;">Diverse dataset</h3>
        <p class="information">
          <ul>
            <li><b>H.264, H.265, H.266, AV1, AVS3</b> codec standards</li>
            <li>More than <b>260 test videos</b></li>
            <li>6 different bitrates</li>
          </ul>
        </p>
    </div>
    <div class="product-details" style="width: 29%; padding-bottom: 0px;">
        <h3 style="color: black; text-align: center;">Various charts</h3>
        <div class="information">
          <ul>
            <li>Visual comparison for more than<br><b>80 SR+codec pairs</b></li>
            <li>RD curves and bar charts<br>for 5 objective metrics</li>
            <li>SR+codec pairs ranked by BSQ-rate</li>
          </ul>
        </div>
    </div>
    <div class="product-details" style="width: 29%; padding-bottom: 0px;">
        <h3 style="color: black; text-align: center;">Extensive report</h3>
        <div class="information">
          <ul>
            <li><b>80+ pages</b> with different plots</li>
            <li>15 SOTA SR methods<br>and 6 objective metrics</li>
            <li>Extensive subjective comparison<br>with <b>5300+ valid participants</b></li>
            <li>Powered by <a href="http://www.subjectify.us/">Subjectify.us</a></li>
          </ul>
        </div>
    </div>
</div>

<br>
<div class="center">
    <div>
        <img style="width:70%" src="/assets/img/benchmarks/sr-codecs/pipeline.png">
        <p><i>The pipeline of our benchmark</i></p>
    </div>
</div>

## What's new
- **21.07.2022** Added [SR codecs](#SRcodecs) to the benchmark. Added MDTVSFA correlation to the [correlation chart](#charts).
- **12.04.2022** Uploaded the results of extensive subjective comparison. See "Subjective score" in [Charts](#charts) section.
- **25.03.2022** Added VRT, BasicVSR, RBPN, and COMISR. Updated [Leaderboards](#leaderboard) and [Visualizations](#visualization) sections.
- **14.03.2022** Uploaded new [dataset](#participate). Updated the [Methodology](/benchmarks/super-resolution-for-video-compression-methodology.html).
- **26.10.2021** Updated the [Methodology](/benchmarks/super-resolution-for-video-compression-methodology.html).
- **12.10.2021** Published [October Report](#report). Added 2 new videos to the dataset. Updated [Charts](#charts) section and [Visualizations](#visualization). 
- **28.09.2021** Improved the [Leaderboards](#leaderboard) section to make it more user-friendly, updated the [Methodology](/benchmarks/super-resolution-for-video-compression-methodology.html) and added ERQAv1.1 metric.
- **21.09.2021** Added 2 new videos to the dataset, new plots to the [Charts](#charts) section, and new [Visualizations](#visualization).
- **14.09.2021** Public beta-version Release.
- **31.08.2021** Alpha-version Release.


<!--
<p>Below you can see the comparison between some SR+codec pairs. FullHD video was downscaled twice and compressed with an approximate bitrate of 600 kbps. Then, Super-Resolution models were applied to the compressed input. In the picture, you can see cropped parts from models' outputs.</p>
<div class="center">
    <div>
        <img style="width:70%" src="/assets/img/benchmarks/sr-codecs/head_pic2.png">
        <p><i>Super-Resolution models paired with different codecs</i></p>
    </div>
</div>
-->

## <span id="charts"></span> Charts

{% include benchmarks/sr-codecs/charts.html %}

{% include benchmarks/sr-codecs/correlation.html %}

{% include benchmarks/sr-codecs/FPS.html %}

## <span id="visualization"></span> Visualization

{% include benchmarks/sr-codecs/visualization.html %}

## <span id="leaderboard"></span> Leaderboards
<!--
{% include benchmarks/sr-codecs/leaderboard.html %}
-->

{% include benchmarks/sr-codecs/leaderboard_pairs.html %}


<!--
<style>
    .paper-preview-container img:hover {
        filter: brightness(80%);
    }

    #paper-preview01 {
        padding: 0;
        clear: both;
        border: 1px solid black;
        box-shadow: 5px 5px 3px #888888;
        width: 150px;
    }
</style>

**Read the Benchmark's paper**


<div style="display: inline-block; text-align: center" class="paper-preview-container">
    <a href="/"><img src="/assets/img/benchmarks/deinterlacer/paper_preview.png" id="paper-preview01"></a><br/>
    <a href="/">Download (pdf)</a>
</div> -->
## <span  id="SRcodecs">SR codecs</span>
{% include benchmarks/sr-codecs/codecs.html %}

## <span id="Roadmap"></span> SR+codec Benchmark Roadmap
{% include benchmarks/sr-codecs/roadmap.html %}

## <span id="participate"></span> Submit your method
**Verify your method’s ability to restore compressed videos and compare it with other algorithms.**<br>
You can go to <a href="/benchmarks/super-resolution-for-video-compression-participants.html">the page with information</a> about other participants.
<br>


{% include benchmarks/sr-codecs/submission.html %}


## <span id="report"></span> Download the Report

{% include benchmarks/sr-codecs/report.html %}

**Videos used in the report:**<br>
* <a href="https://vimeo.com/239189580">The Alberta Retired Teachers’ Association</a> by SAVIAN<br>
* <a href="https://vimeo.com/207867490">First Day</a> by Outside Adventure Media<br>

**Acknowledgements:**<br>
* Subjective comparison was supported by <a href="https://toloka.ai/academy/grants#aaaa-3">Toloka Research Grants Program</a>.<br>


<!--See more information on the <a href="/benchmarks/helloworld.html#participate">GitHub page</a>-->


## <span id="contacts"></span> Contact Us

For questions and propositions, please contact us: <sr-codecs-benchmark@videoprocessing.ai>

You can subscribe to updates on our benchmark:

{% include benchmarks/sr-codecs/form.html %}

</div>