---
title: MSU Video Frame Interpolation Benchmark Dataset
preview_img:
subprojects:
tag: invisible
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


# Dataset of MSU Video Frame Interpolation Benchmark 2022

<div id="buttons"></div>
<script>
	__set_menu_buttons([
	['Home', '/benchmarks/video-frame-interpolation.html'],
	['Participants','video-frame-interpolation-participants.html'], 
    ['Dataset', '/benchmarks/video-frame-interpolation-dataset.html'],
	['Evaluation methodology', '/benchmarks/video-frame-interpolation-methodology.html'],
    ['How to participate', '/benchmarks/video-frame-interpolation.html#participate'],
    ['Contact us', '/benchmarks/video-frame-interpolation.html#contacts']
	], 'Dataset')
</script>

<div class="current_content" markdown="1">

## Dataset preview
{% include benchmarks/vfi/dataset_slider.html %}

## Dataset description

The dataset of MSU VFI Benchmark consists of two parts: **outdoor & indoor shooting** and **gaming content**. Characteristics of **first part**:
* was recorded on **iPhone 11 at 240 FPS**
* **1920×1080** resolution
* **10 videos** with various content and motion:
    * playing dogs
    * skating rink
    * indoor shooting with cat and items
    * textures

Characteristics of **second part**:
* was captured with **OBS at 120 FPS**
* **1920×1080** resolution
* **7 games** including arcades, first-person shooters and racing

For dataset were chosen frame subsequences with **1 second length**:
* 241 frames for videos recorded on camera
* 121 frames for games

## Dataset categories

The dataset is divided into two categories: interpolation from 30 FPS and 60 FPS to the original FPS.

In **30 FPS** category you need to interpolate:
* **7 frames** between every pair of adjacent frames for **240 FPS** videos
* **3 frames** between every pair of adjacent frames for **120 FPS** videos

In **60 FPS** category you need to interpolate:
* **3 frames** between every pair of adjacent frames for **240 FPS** videos
* **1 frame** between every pair of adjacent frames for **120 FPS** videos

Dividing into these categories allows us to pay attention to the algorithms' ability to cope with different time distances between frames.

## Download

Low FPS version of the Dataset is available [here](https://drive.google.com/drive/folders/1d5VXPCL0uxiwpBh-jsbRhuTGvJeK0Q6y?usp=sharing).<br>
Note that the original FPS version of Dataset have not been published and will not be published in the future.
