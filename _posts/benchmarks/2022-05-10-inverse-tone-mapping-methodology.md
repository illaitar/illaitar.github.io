---
title: MSU HDR Video Reconstruction Benchmark Methodology
description: Evaluation Methodology of MSU HDR Video Reconstruction Benchmark

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

# Evaluation Methodology of MSU HDR Video Reconstruction Benchmark 2022: HLG
<div id="buttons"></div>
<script>
	__set_menu_buttons([
	['Home', '/benchmarks/inverse-tone-mapping.html'],
	['Participants','/benchmarks/inverse-tone-mapping-participants.html'], 
    ['Dataset', '/benchmarks/inverse-tone-mapping-dataset.html'],
	['Evaluation methodology', '/benchmarks/inverse-tone-mapping-methodology.html'],
    ['Contact us', '/benchmarks/inverse-tone-mapping.html#contacts']
	], 'Evaluation methodology')
</script>

<div class="current_content" markdown="1">

## Problem Definition
High Dynamic Range (HDR) reconstruction is the process of obtaining HDR photos or videos from their standard dynamic range (SDR) versions. This problem can be approached in different ways, and the purpose of this particular benchmark is to find the best method of HDR video restoration in terms of human evaluation.
In the context of video restoration, it is important not only to restore the brightness of the pixels, but also to increase the bit rate and expand the color space.

## Why do we need PQ and HLG?
[What is PQ?](https://en.wikipedia.org/wiki/Perceptual_quantizer)<br>
[What is HLG?](https://en.wikipedia.org/wiki/Hybrid_log–gamma)<br>

These gamma curves are the most popular and are used in different cases. HLG is used in television broadcasting. PQ for showing movies.
Since these curves are significantly different, they preserve details differently in different brightness levels. In addition, HLG partially repeats the usual Rec.709 gamut, so video recovery for it may be easier.
Please note that we use PQ to calculate some metrics, despite the fact that the purpose of the recovery is HLG. This is done because this gamma curve better reflects a person's perception of brightness, which results in a greater correlation of metrics with subjective assessments.
At the moment, we have published a study of only the HLG part.<br>
**The part with the study of PQ-HDR video reconstruction will be published soon.**

## Dataset
We present a **new private dataset** for this comparison. This was done to ensure that neural network methods do not benefit from training on data that could get into our test sample. The authors of the article ["How to cheat with metrics in single-image HDR reconstruction"](https://openaccess.thecvf.com/content/ICCV2021W/LCI/papers/Eilertsen_How_To_Cheat_With_Metrics_in_Single-Image_HDR_Reconstruction_ICCVW_2021_paper.pdf) describe this problem in detail. Here we provide the key characteristics of Dataset.<br>
<p>
<img width="50%" src="https://storage.videoprocessing.ai/benchmarks/itm/visualizations/info/dataset_info.webp">
</p>
SDR* – tonemapped HDR video

More details about Dataset characteristics and processing you can find in [Dataset tab](/benchmarks/inverse-tone-mapping-dataset.html).

## Metrics

<p align="center">
<img width="100%" src="https://storage.videoprocessing.ai/benchmarks/itm/visualizations/info/metrics.webp">
</p>

References:<br>
* [MSU VQMT](https://compression.ru/video/quality_measure/video_measurement_tool.html)<br>
* [FovVideoVDP](https://github.com/gfxdisp/FovVideoVDP)<br>
* [HDR-VDP-3](https://sourceforge.net/projects/hdrvdp/files/hdrvdp/3.0.6/)<br>

## Evaluation
### Splitting into frames
Each SDR video was divided into frames with the command<br>

```shell
ffmpeg -i in.mov %04d.png
```

This was done due to the fact that all (except [Maxon](https://www.maxon.net/en/red-giant-complete/magic-bullet-suite/colorista) at the moment) methods take individual images as input.
In all methods, where it is possible to set the option to restore video, it was set.

### Video generation
Different methods are trained to give output video frames in different formats. The target format of our benchmark:
* Maximum brightness: 1000 nits
* Color space: Rec.2020<br>

Therefore, for each algorithm the output was processed individually with **Davinci Resolve 17** using the built-in Color Space Transform tool.<br>
We use Color Space Transform twice: for encoding with the HLG gamma curve and for encoding with the PQ gamma curve. We use the first one as a preparation for the future subjective comparison. The second one is used for metrics calculations.<br>
We use gamma curve PQ instead of HLG to calculate metrics because it was shown in the studies that this approach allows to calculate metrics that were developed for SDR content in the most correct way.<br>
The details of the output of each method are described below. Each bullet describes the process of converting the luminance and color space to the one we require. As mentioned above, after that we encode the video with two different gamma curves.
* **HDR-CNN, ExpNet, DeepHDR**<br>
These methods predict relative HDR luminance values in the range [0,1] with a linear gamma curve and do not change the color space.
We use Luminance Mapping to map the value of 1 (which corresponds to 100 nit) to 1000 nit. Since the output of these methods is in 32-bit .exr format, this conversion does not produce banding if the low bits are filled with significant information.
We also change the color space, since these methods do not restore Rec.2020.

* **SingleHDR, HDRToolbox***<br>
The output frames of these methods are in linear gamma and have absolute luminance values in the range [0, 10000] nit. So we use Luminance Mapping from 10000 nit to 1000 nit and change the color space to Rec.2020.

* **Maxon**<br>
For testing the "Highlight Boost" option was set to the maximum value (100), then the standard video export procedure was performed.

* **HDRTVNet**<br>
This method is specifically designed to restore a video with a PQ gamma curve. Since the default luminance values for this curve are 10000 nit we used Luminance Mapping from 10000 nit to 1000 nit. We do not change the color space for this method since its output is already in Rec.2020.

* **GT**<br>
Since the camera we shot the dataset with applies the ITU-R BT.2100 HLG gamma curve, we re-encode the video to "SMPTE ST 2084 1000 nit" in order to calculate the metrics.


On pictures below you can see all Color Space Transform settings:
<br>
{% include benchmarks/itm/info.html %}
<br>
HDRToolbox* – a group of methods implemented in HDRToolbox: Akyuz, Kuo, Huo, HuoPhys, KovOliv

This way we obtain a unified output of all methods (including GT) and then use the [MSU VQMT](https://compression.ru/video/quality_measure/video_measurement_tool.html) utility and official metrics repositories to calculate the results.

This stage is very important and if the pixel values are interpreted incorrectly, the metric values may be distorted, so you should include the detailed instruction for video rendering in your benchmark submission.