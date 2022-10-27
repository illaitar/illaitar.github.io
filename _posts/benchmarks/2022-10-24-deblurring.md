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
# MSU Video Deblurring Benchmark 

<div id="buttons"></div>
<script>
    __set_menu_buttons([
    ['Home', '/benchmarks/deblurring.html'],
    ['Participants','/benchmarks/deblurring-participants.html'], 
    ['Dataset','/benchmarks/deblurring-dataset.html'], 
    ['Evaluation methodology', '/benchmarks/deblurring-methodology.html'], 
    ['How to participate', '#participate'],
    ['Contact us', '#contacts']
    ], 'Home')
</script>

<div class="current_content" markdown="1">

{% include benchmarks/deblurring/board.html %}

<!-- 
<br>
<div class="center">
    <div>
        <img style="width:100%" src="/assets/img/benchmarks/deblurring/preview.gif">
    </div>
</div>

{:.center}
<h2>Discover the best open-source deblurring methods</h2>
<div style="margin-left: 50%;">
    <div><b>G&M Lab head: Dr. Dmitriy Vatolin</b></div>
    <div style="display: flex">
      <div><b>Measurements, analysis:</b>&nbsp;</div>
      <div><b>Nikita Alutis, Egor Chistov</b>
      </div>
    </div>
    <div><b>Consultant: Mikhail Dremin</b></div>
</div> -->
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
<!-- <br>
<div class="container" style="padding-top: 0px; margin-top: 0px;">    
    <div class="product-details" style="width: 29%; margin-left: 5px; padding-bottom: 0px;">
        <h3 style="color: black; text-align: center;">Real motion blur dataset</h3>
        <p class="information">
          <ul>
            <li>23 videos</li>
            <li>Local blur areas</li>
            <li>Different motion types</li>
          </ul>
        </p>
    </div>
</div> -->
   <!--  <div class="product-details" style="width: 29%; padding-bottom: 0px;">
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
          </ul>
        </div>
    </div> -->


<!-- <br>
<div class="center">
    <div>
        <img style="width:70%" src="/assets/img/benchmarks/sr-codecs/pipeline.png">
        <p><i>The pipeline of our benchmark</i></p>
    </div>
</div> -->

## What's new
- **24.10.2022** Beta-version Release.


<!--
<p>Below you can see the comparison between some SR+codec pairs. FullHD video was downscaled twice and compressed with an approximate bitrate of 600 kbps. Then, Super-Resolution models were applied to the compressed input. In the picture, you can see cropped parts from models' outputs.</p>
<div class="center">
    <div>
        <img style="width:70%" src="/assets/img/benchmarks/sr-codecs/head_pic2.png">
        <p><i>Super-Resolution models paired with different codecs</i></p>
    </div>
</div>
-->

## <span id="charts"></span> Leaderboard

{% include benchmarks/deblurring/leaderboard.html %}

## <span id="charts"></span> Charts
{% include benchmarks/deblurring/plots.html %}

## <span id="visualization"></span> Visualization

{% include benchmarks/deblurring/visualization.html %}



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
## <span id="Roadmap"></span> Deblurring Benchmark Roadmap
{% include benchmarks/deblurring/roadmap.html %}


## <span id="participate"></span> Submit your method
**Verify your method’s ability to restore blurred videos and compare it with other algorithms.**<br>
You can go to <a href="/benchmarks/deblurring-participants.html">the page with information</a> about other participants.
<br>


{% include benchmarks/deblurring/submission.html %}


<!-- **Acknowledgements:**<br>
* Subjective comparison was supported by <a href="https://toloka.ai/academy/grants#aaaa-3">Toloka Research Grants Program</a>.<br>

 -->
<!--See more information on the <a href="/benchmarks/helloworld.html#participate">GitHub page</a>-->


## <span id="contacts"></span> Contact Us

For questions and propositions, please contact us: <deblurring-benchmark@videoprocessing.ai>

You can subscribe to updates on our benchmark:

{% include benchmarks/deblurring/form.html %}

</div>