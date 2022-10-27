---
title: MSU Video Frame Interpolation Benchmark Participants
description: List of participants of MSU Video Frame Interpolation Benchmark
title: MSU Video Frame Interpolation Benchmark Participants
description: The list of participants of MSU Video Frame Interpolation Benchmark
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

# List of participants of MSU Video Frame Interpolation Benchmark 2022

<div id="buttons"></div>
<script>
	__set_menu_buttons([
	['Home', '/benchmarks/video-frame-interpolation.html'],
	['Participants','video-frame-interpolation-participants.html'], 
    ['Dataset', '/benchmarks/video-frame-interpolation-dataset.html'],
	['Evaluation methodology', '/benchmarks/video-frame-interpolation-methodology.html'],
    ['How to participate', '/benchmarks/video-frame-interpolation.html#participate'],
    ['Contact us', '/benchmarks/video-frame-interpolation.html#contacts']
	], 'Participants')
</script>

<div class="current_content" markdown="1">


{% include benchmarks/vfi/participants.html %}

## Overview of architectures

### CAIN
* PixelShuffle
* Channel attention
* No optical flow computation module

<img src="https://storage.videoprocessing.ai/benchmarks/vfi/architectures/cain.webp"/>

### RIFE
* IFNet for approximation of intermediate optical flows
* RefineNet for final refinement

<img src="https://storage.videoprocessing.ai/benchmarks/vfi/architectures/rife.webp"/>

### XVFI
The XVFI-Net is based on a recursive multi-scale shared structure that consists of two cascaded modules for bidirectional optical flow learning between two input frames (BiOF-I) and for bidirectional optical flow learning from target to input frames (BiOF-T).

<img src="https://storage.videoprocessing.ai/benchmarks/vfi/architectures/xvfi.webp"/>

### Frame Averaging
A simple weigted sum of two adjucent frames with different coefficients. 

### Frame Repeating
The left frame in each pair of neighbors was taken and repeated N times.