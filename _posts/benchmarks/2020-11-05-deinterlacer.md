---
title: MSU Deinterlacer Benchmark
description: The most comprehensive comparison of deinterlacing methods
preview_img: /assets/img/benchmarks/deinterlacer/deinterlacing_preview480x270.png
subprojects:
---

<link rel="stylesheet" href="/assets/css/benchmarks/deinterlacer/style.css">
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8"
   src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js"></script>

<style>

    table.deint {
        display: table;
    }

    .highcharts-a11y-proxy-group-legend ul {
        display: none;
    }
</style>

{:.center}
# MSU Deinterlacer Benchmark — selecting the best deinterlacing filter

<div id="buttons"></div>
<script>
	__set_menu_buttons([
	['Home', '/benchmarks/deinterlacer.html'],
	['Participants','/benchmarks/deinterlacer-participants.html'], 
	['Evaluation methodology', '#methodology'], 
	['How to participate', '#participate'],
    ['Contact us', '#contacts']
	], 'Home')
</script>

<div class="current_content" markdown="1">


{:.center}
## The most comprehensive comparison of deinterlacing methods
<div style="margin-left: 60%;">
	<div><b>Video group head: Dr. Dmitriy Vatolin</b></div>
	<div style="display: flex">
	  <div><b>Measurements, analysis:</b>&nbsp;</div>
	  <div><b>Alexey Zelentsov,<br>Dmitriy Konovalchuk</b>
	  </div>
	</div>
</div>


## What's new

- **26.11.2020** Beta-version Release
- **22.12.2020** Added VS EEDI3, VS TDeintMod, MC Deinterlacer. Tuned Kernel Deinterlacer
- **07.07.2021** New 2021 Dataset
- **01.09.2021** New Leader! DfRes 122000 G2e 3 Deinterlacer
- **17.09.2021** Added MFDIN, Adobe Premiere Pro Built-IN
- **22.09.2021** Added Sony Vegas Built-In
- **06.10.2021** Added subjective comparison results (MOS)
- **13.10.2021** Added EDVR, EDVR_toWSA, TDAN, DUF, new versions of DfRes and MFDIN. New Leader! MFDIN L Deinterlacer
- **04.11.2021** Added ST-Deint
- **24.11.2021** Added subjective scores for EDVR, EDVR_toWSA, TDAN, DUF, ST-Deint, new versions of DfRes and MFDIN
- **16.02.2022** Added SwinDI
- **11.08.2022** Added FLAD

## Key features of the Benchmark


*   **For Deinterlacing methods' users**
    *   Choose deinterlacing method that is **the best for your speed and quality requirements**
    *   Discover **the newest deinterlacing methods’ achievements**

*   **For Researchers and Developers**
    *   **Quickly get comprehensive comparison results for your paper** with our tables, visual comparison tools and performance plots
    *   **Check the performance** of your deinterlacing method on the complex cases


To submit deinterlacing method, please, follow 3 simple steps in the the [Deinterlacer Submission](#participate) section

We appreciate new ideas. Please, write us an e-mail to <deinterlacer-benchmark@videoprocessing.ai>



## <span id="leaderboard"></span> Half FrameRate Leaderboard

The table below shows a comparison of deinterlacers by PSNR, SSIM metrics and by speed.

{% include benchmarks/deinterlacer/leaderboard.html %}

## Full FrameRate Leaderboard

{% include benchmarks/deinterlacer/double_leaderboard.html %}


## Visualization

In this section you can see a frame, a crop from this frame, and also MSU VQMT PSNR Visualization of this crop.

{% include benchmarks/deinterlacer/visualization_images.html %}

## Charts

{% include benchmarks/deinterlacer/plots.html %}

## Cross-PSNR

In this section you can see PSNR between the output of chosen deinterlacer and the others

{% include benchmarks/deinterlacer/cross_psnr_table.html %}

## <span id="methodology"></span> Evaluation methodology

{% include benchmarks/deinterlacer/evaluation_methodology.html %}


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


## <span id="participate"></span> Deinterlacer Submission

{% include benchmarks/deinterlacer/submission.html %}

<!--See more information on the <a href="/benchmarks/helloworld.html#participate">GitHub page</a>-->

## <span id="contacts"></span>Contacts

For questions and propositions, please contact us: <deinterlacer-benchmark@videoprocessing.ai>

</div>