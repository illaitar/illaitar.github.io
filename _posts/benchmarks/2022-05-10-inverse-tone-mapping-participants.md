---
title: MSU HDR Video Reconstruction Benchmark Participants
description: List of participants of MSU HDR Video Reconstruction Benchmark

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

# List of participants of MSU HDR Video Reconstruction Benchmark 2022: HLG
<div id="buttons"></div>
<script>
	__set_menu_buttons([
	['Home', '/benchmarks/inverse-tone-mapping.html'],
	['Participants','/benchmarks/inverse-tone-mapping-participants.html'], 
    ['Dataset', '/benchmarks/inverse-tone-mapping-dataset.html'],
	['Evaluation methodology', '/benchmarks/inverse-tone-mapping-methodology.html'],
    ['Contact us', '/benchmarks/inverse-tone-mapping.html#contacts']
	], 'Participants')
</script>

<div class="current_content" markdown="1">

{% include benchmarks/itm/separate_participants.html %}

## Overview of neural network method architectures

### HDRCNN
UNet-VGG-16 with skip connections neural network.

<img src="https://storage.videoprocessing.ai/benchmarks/itm/architectures/hdrcnn.webp"/>

### HDRTVNet
3 sequentially trained networks:
* Custom architecture 
* ResNet 
* UNet based GAN

<img src="https://storage.videoprocessing.ai/benchmarks/itm/architectures/hdrtv.webp"/>

### ExpandNet
* Neural network with three parallel branches. They differ in the size of the convolution core
* Concatenation followed by convolution processing

<img src="https://storage.videoprocessing.ai/benchmarks/itm/architectures/expnet.webp"/>

### DeepHDR
UNet-VGG-like with skip connections neural network.
<img src="https://storage.videoprocessing.ai/benchmarks/itm/architectures/deephdr.webp"/>

### SingleHDR
Network which is divided into two parts: linearization and restoration.
* Linearization: custom architecture
* Restoration: ResNet

<img src="https://storage.videoprocessing.ai/benchmarks/itm/architectures/SingleHDR1.webp"> <br>
<img src="https://storage.videoprocessing.ai/benchmarks/itm/architectures/SingleHDR2.webp">
