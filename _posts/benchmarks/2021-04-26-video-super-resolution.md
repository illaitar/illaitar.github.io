---
title: MSU Video Super-Resolution Benchmark
description: Discover the newest VSR methods and find the most appropriate method for your tasks
preview_img: /assets/img/benchmarks/vsr/main_page.gif
subprojects:
redirect_from: /vsr/
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

{:.center}
# MSU Video Super-Resolution Benchmark: Detail Restoration — find the best upscaler
<div id="buttons"></div>
<script>
	__set_menu_buttons([
	['Home', '/benchmarks/video-super-resolution.html'],
	['Participants','/benchmarks/video-super-resolution-participants.html'], 
	['Evaluation methodology', '/benchmarks/video-super-resolution-methodology.html'], 
	['How to participate', '#participate'],
    ['Contact us', '#contacts']
	], 'Home')
</script>

<div class="current_content" markdown="1">


{:.center}

### Discover the newest methods and find the most appropriate method for your tasks

<div style="margin-left: 60%;">
	<div><b>Video group head: Dr. Dmitriy Vatolin</b></div>
	<div style="display: flex">
	  <div><b>Measurements, analysis:</b>&nbsp;</div>
	  <div><b>Anastasia Kirillova,<br>Eugene Lyapustin</b>
	  </div>
	</div>
</div>

{% include benchmarks/vsr/attention_image.html %}

## What's new
{% include benchmarks/vsr/news.html %}


## Key features of the Benchmark
*   **New metrics for the detail restoration quality**
    *   Check methods’ ability to restore real details 
*   **The most complex content for restoration task**: faces, text, QR-codes, car numbers, unpatterned textures, small details
    *   See plots and visualizations for particular content types
*   **Different degradation types to lower the resolution**: bicubic interpolation (BI) and Gaussian blurring and downsampling (BD), with and without noise 
    *   Many methods use only one degradation type for their training datasets (e.g. bicubic interpolation) and do not work well on others. **Choose the method that didn’t overfit the test dataset**
*   Subjective comparison of new and popular Super-Resolution methods


## <span id="leaderboard"></span> Leaderboard

{% include benchmarks/vsr/leaderboard.html %}


## <span id="charts"></span> Charts

{% include benchmarks/vsr/plots.html %}


## <span id="visualization"></span> Visualization

{% include benchmarks/vsr/visualization_images.html %}

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


## <span id="participate"></span> Your method submission
**Verify the restoration ability of your VSR algorithm and compare it with state-of-the-art solutions.**<br>
You can see information about all other participants <a href="/benchmarks/video-super-resolution-participants.html">here</a>.


{% include benchmarks/vsr/submission.html %}

<!--See more information on the <a href="/benchmarks/helloworld.html#participate">GitHub page</a>-->

## <span id="contacts"></span> Contact Us
For questions and propositions, please contact us: <vsr-benchmark@videoprocessing.ai>

<!--Feel free to ask any question about our benchmark:

{% include benchmarks/vsr/form.html %}-->

## <span id="cite"></span> Cite Us

To refer to our benchmark or metric ERQA in your work, cite one of our papers:

{% include benchmarks/vsr/cite_us.html %}



</div>
