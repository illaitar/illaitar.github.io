---
title: MSU Full-Reference Video Quality Metrics Benchmark 2022
description: Explore newest Full-Reference Video Quality Metrics and find the most appropriate for you.
preview_img: /assets/img/benchmarks/frm/main.png
subprojects:

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
# MSU Full-Reference Video Quality Metrics Benchmark 2022


<div id="buttons"></div>
<script>
    __set_menu_buttons([
    ['Home', '/benchmarks/video-quality-metrics.html'],
    ['Leaderboard','/benchmarks/video-quality-metrics_both.html'], 
    ['Methodology', '/benchmarks/video-quality-metrics_methodology.html'],
    ['Participants', '/benchmarks/video-quality-metrics_participants.html'],
    ['Submission','/benchmarks/video-quality-metrics.html#submit']
    ], 'Home')
</script>

<script>
    __set_menu_buttons([
    ['All metrics', '/benchmarks/video-quality-metrics.html'],
    ['No-Reference metrics', '/benchmarks/no-reference-video-quality-metrics.html'],
    ['Full-Reference metrics','/benchmarks/full-reference-video-quality-metrics.html']
    ], 'Full-Reference metrics')
</script>

<div class="current_content" markdown="1">


<div class="container" style="padding-top: 0px; margin-top: 10px;">    
    <h4 style="padding-bottom: 0px; padding-top: 0px;">Discover the newest metrics and find the most appropriate method for your tasks</h4>
    <div class="textcols">
      <div class="textcols-item1">
        <div> <b>Powered by&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> </div>
        <a target="_blank" href="http://www.subjectify.us/"><img src = "/assets/img/benchmarks/frm/subjectify.png" style="width: 40%;"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div class="textcols-item1" style="text-align: left">
          <div><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;G&M Lab head: Dr. Dmitriy Vatolin<br></b></div>
          <div><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Measurements, analysis:</b></div>
          <div style="display: flex; flex: 0 0 100% !important;">
          <div style="margin-left: 14em">
            <b>Aleksandr Gushchin<br>Anastasia Antsiferova</b>
          </div>
          </div>
      </div>
    </div>
    <br>
    <div class="center" style="padding-bottom: 0px; margin-bottom: 0px;">
        <video autoplay loop muted playsinline width="100%">
            <source src="/assets/img/benchmarks/frm/anim3.webm" type='video/webm'>
        </video>
    </div>
    <div class="product-details" style="width: 29%; margin-left: 2px; padding-bottom: 0px;">
        <h3 style="color: black; text-align: center;">Diverse dataset</h3>
        <p class="information">
          <ul>
            <li><b>40</b> different video codecs of 10 compression standards</li>
            <li><b>2500+</b> compressed streams</li>
            <li><b>780.000+</b> subjective scores</li>
            <li><b>10.000+</b> viewers</li>
            <li>User-generated content</li>
          </ul>
        </p>
    </div>
    <div class="product-details" style="width: 29%; padding-bottom: 0px;">
        <h3 style="color: black; text-align: center;">VQA and IQA metrics</h3>
        <div class="information">
          <ul>
            <li><b>20+</b> metrics without variations</li>
            <li>The biggest leaderboard of neural networks-based video quality metrics</li>
            <!-- <li><b>150+</b> metrics with variations </li> -->
            <li>Calculations over U and V planes</li>
            <li>Metrics with different weighted <br> average for planes</li>
          </ul>
        </div>
    </div>
    <div class="product-details" style="width: 29%; padding-bottom: 0px;">
        <h3 style="color: black; text-align: center;">Various charts</h3>
        <div class="information">
          <ul>
            <li>Bar chart with the overall metrics perfomance</li>
            <li>Comparison on different compression standards with 95% confidence intervals</li>
            <li>Speed-Quality chart </li>
          </ul>
        </div>
    </div>
</div>


## Note

This page is a part of MSU Video Quality Benchmark, which you can find [here](/benchmarks/video-quality-metrics.html).

## Results

The chart below shows the correlation of metrics with subjective scores on our dataset. You can choose the type of correlation and compression standard of codecs used for compression. We recommend that you focus on Spearman's rank correlation coefficient.

{% include benchmarks/frm/plots.html %}

The results of the comparison on different compression standards and different bitrates ranges, as well as full-reference and no-reference metrics detailed analysis, are presented on <a href="/benchmarks/video-quality-metrics_both.html">the leaderboard page</a>. 


## Methodology and dataset

To see all steps of metrics evaluation and the description of our dataset visit <a href="/benchmarks/video-quality-metrics_methodology.html">the methodology page</a>.

## <span id="submit"></span> How to submit your method

<b>Find out the strong and weak sides of your method and compare it to the best commercial and free methods.</b>
<br>
We kindly invite you to participate in our benchmark. To do this follow the steps below:

{% include benchmarks/frm/submission.html %}

<b>Our policy</b>:
<div class="policy">
    <ul>
      <li> We won't publish the results of your method without your permission.</li>
      <li> We share only public samples of our dataset as it is private.</li>
    </ul>
</div>

Information about all other participants you can find in <a href="/benchmarks/video-quality-metrics_participants.html">the participants page</a>.


## <span id="contacts"></span>Contacts

We would highly appreciate any suggestions and ideas on how to improve our benchmark. Please contact us via email: <vqa@videoprocessing.ai>. 

Also you can subscribe to updates on our benchmark:

{% include benchmarks/frm/form.html %}

## <span id="citation"></span>Cite US

{% include benchmarks/frm/cite_us.html %}