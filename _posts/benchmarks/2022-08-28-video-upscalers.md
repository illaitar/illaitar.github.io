---
title: MSU Video Upscalers Benchmark 2022
description: The most extensive comparison of video super-resolution (VSR) algorithms by subjective quality
preview_img: /assets/img/benchmarks/upscalers/MSU_VUB.webp
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



{:.center}
# <span id="home"></span> MSU Video Upscalers Benchmark 2022: Quality Enhancement



<div id="buttons"></div>
<script>
	__set_menu_buttons([
	['Home', '#home'],
	['4× Camera', '#4xcamera'],
	['4× Animation', '#4x2d'],
    ['2× Camera', '#2xcamera'],
	['2× Animation', '#2x2d'],
	['How to participate', '#participate'],
	['Personal comparison', '#personal'],
	['Methodology', '/benchmarks/video-upscalers-methodology.html#methodology_home'],
	['Participants','/benchmarks/video-upscalers-participants.html#participants_home']
	], 'Home')
</script>


<style>
	.top_gif{
		display: block;
    	margin: 0 auto;
		width:75%;
	}

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

	.information {
        text-align: center;
    }


</style>



<div class="current_content" markdown="1">


<img class="top_gif" src="/assets/img/benchmarks/upscalers/Top.webp">
<h2 style="text-align:center;">The most extensive comparison of video super-resolution (VSR) algorithms by subjective quality</h2>

<div class="authors">
    <div style="display: flex; flex: 0 0 100% !important;">
	  <div><b>G&M Lab head:</b>&nbsp;</div>
	  <div><b>Dr. Dmitriy Vatolin</b>
	  </div>
	</div>
	<div style="display: flex; flex: 0 0 100% !important;">
	  <div><b>Measurements, analysis:</b>&nbsp;</div>
	  <div><b>Nikolai Karetin,<br>Ivan Molodetskikh</b>
	  </div>
	</div>
</div>

Our benchmark determines **the best upscaling methods** for increasing video resolution and improving visual quality using our compact yet comprehensive dataset.

**Everyone is welcome to participate!** Run your favorite super-resolution method on our compact test video and send us the result to see how well it performs. Check the <a href="#participate">“Submitting”</a> section to learn the details.

<div class="container" style="padding-top: 0px; margin-top: 20px;">
	<div class="product-details" style="width: 29%; padding-bottom: 0px; margin-left: 5px;">
        <h3 style="color: black; text-align: center;">Over 3700 People</h3>
        <p class="information">
          have participated in the verified pairwise subjective comparison
        </p>
    </div>
	<div class="product-details" style="width: 29%; padding-bottom: 0px;">
        <h3 style="color: black; text-align: center;">30 Test Clips</h3>
        <p class="information">
			with both camera-shot<br>and 2D-animated content
        </p>
    </div>
	<div class="product-details" style="width: 29%; padding-bottom: 0px;">
        <h3 style="color: black; text-align: center;">41 Upscalers Tested</h3>
        <p class="information">
			with both 4× and 2× scaling on video with complex distortion
        </p>
    </div>
	<div class="product-details" style="width: 29%; padding-bottom: 0px; margin-left: 5px;">
        <h3 style="color: black; text-align: center;">An Open Visual Comparison</h3>
        <p class="information">
          with original high-resolution fragments available for reference
        </p>
    </div>
    <div class="product-details" style="width: 29%; padding-bottom: 0px;">
        <h3 style="color: black; text-align: center;">Structural Distortion Maps</h3>
        <p class="information">
          with compensated pixel shifts<br>for easy artifacts detection
        </p>
    </div>
	<div class="product-details" style="width: 29%; padding-bottom: 0px;">
        <h3 style="color: black; text-align: center;">Speed/Quality Scatter Plots</h3>
        <p class="information">
          and tables with objective metrics<br>for a comprehensive comparison
        </p>
    </div>
</div>

## What's new

- **August 28th, 2022:** Release of the Benchmark
- **November 9th, 2021:** Beta-version Release

## Introduction

Our benchmark presents the ranking of video upscalers using crowd-sourced subjective comparison. Over 3700 valid participants have selected the most visually appealing upscaling result in many pairwise comparisons.

For evaluating upscaling methods, we also use various metrics (objective quality measures). In addition, we calculate the average FPS (frames per second).

Scroll below for comparison charts, tables, and interactive visual comparisons of upscaling results.


{% include benchmarks/upscalers/lateload.html %}
{% include benchmarks/upscalers/loader.html %}
{% include benchmarks/upscalers/visualization_main.html %}
{% include benchmarks/upscalers/leaderboard_main.html %}
{% include benchmarks/upscalers/charts_main.html %}

## <span id="4xcamera"></span> 4× Camera-Shot Leaderboards
<script>
    TableCreator('4x_camera', data4x, data2x, camera_clips, camera4x_correct)
</script>

## 4× Camera-Shot Visualizations
<script>
    build_vis('4x_camera', coords_4x, camera_clips, data4x)
</script>

## 4× Camera-Shot Charts
<script>
    BuildChart('4x_camera', data4x, data2x, camera_clips, camera4x_correct)
</script>

## <span id="4x2d"></span> 4× 2D-Animated Leaderboards
<script>
    TableCreator('4x_animation', data4x, data2x, animation_clips, animation4x_correct)
</script>

## 4× 2D-Animated Visualizations
<script>
    build_vis('4x_animation', coords_4x, animation_clips, data4x)
</script>

## 4× 2D-Animated Charts
<script>
    BuildChart('4x_animation', data4x, data2x, animation_clips, animation4x_correct)
</script>

## <span id="2xcamera"></span> 2× Camera-Shot Leaderboards
<script>
    TableCreator('2x_camera', data2x, data4x, camera_clips, camera2x_correct)
</script>

## 2× Camera-Shot Visualizations
<script>
    build_vis('2x_camera', coords_2x, camera_clips, data2x)
</script>

## 2× Camera-Shot Charts
<script>
    BuildChart('2x_camera', data2x, data4x, camera_clips, camera2x_correct)
</script>

## <span id="2x2d"></span> 2× 2D-Animated Leaderboards
<script>
    TableCreator('2x_animation', data2x, data4x, animation_clips, animation2x_correct)
</script>

## 2× 2D-Animated Visualizations
<script>
    build_vis('2x_animation', coords_2x, animation_clips, data2x)
</script>

## 2× 2D-Animated Charts
<script>
    BuildChart('2x_animation', data2x, data4x, animation_clips, animation2x_correct)
</script>

## <span id="participate"></span> Submitting

{% include benchmarks/upscalers/submission.html %}

## <span id="form"></span> Get Notifications About the Updates of This Benchmark

Do you want to be the first to discover the best new upscalers? We can notify you about this
benchmark's updates: simply submit your preferred email address using the form below. We promise not to send you unrelated information.

{% include benchmarks/upscalers/form.html %}

## <span id="personal"></span> Personal Upscalers Comparison

{% include benchmarks/upscalers/personal.html %}

## Further Reading

Check the <a href="/benchmarks/video-upscalers-methodology.html">“Methodology”</a> section to learn how we prepare our dataset.

Check the <a href="/benchmarks/video-upscalers-participants.html">“Participants”</a> section to learn which upscalers’ implementations we use.

</div>
