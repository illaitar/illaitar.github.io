---
title: MSU Video Frame Interpolation Benchmark Methodology
description: Evaluation Methodology of Video Frame Interpolation Benchmark

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


# Evaluation Methodology of MSU Video Frame Interpolation Benchmark 2022

<div id="buttons"></div>
<script>
	__set_menu_buttons([
	['Home', '/benchmarks/video-frame-interpolation.html'],
	['Participants','video-frame-interpolation-participants.html'], 
    ['Dataset', '/benchmarks/video-frame-interpolation-dataset.html'],
	['Evaluation methodology', '/benchmarks/video-frame-interpolation-methodology.html'],
    ['How to participate', '/benchmarks/video-frame-interpolation.html#participate'],
    ['Contact us', '/benchmarks/video-frame-interpolation.html#contacts']
	], 'Evaluation methodology')
</script>

<div class="current_content" markdown="1">


## Problem definition
Video Frame Interpolation (VFI) algorithms synthesize non-existent images between adjacent frames, with the aim of providing a smooth and consistent visual experience.<br>
Our benchmark will rank these algorithms and determine which is the best by means of interpolation quality.

## Dataset
We present **a new dataset** for this comparison. This was done to ensure that neural network methods do not benefit from training on data that could get into our test sample.<br>
Details about Dataset characteristics and processing you can find in [Dataset tab](/benchmarks/video-frame-interpolation-dataset.html).

## Metrics
#### PSNR
PSNR – commonly used metric based on pixels’ similarity. For metric calculation, we use the implementation from MSU VQMT<sup><a href="#references">[1]</a></sup>. A higher metric value indicates better quality. 

#### SSIM
SSIM – another commonly used metric based on structure similarity. For metric calculation, we use the implementation from MSU VQMT<sup><a href="#references">[1]</a></sup>. A higher metric value indicates better quality.

### MS-SSIM
Multiscale SSIM (MS-SSIM) is conducted over multiple scales through a process of multiple stages of sub-sampling. Implementation from Pytorch MS-SSIM<sup><a href="#references">[2]</a></sup>. A higher metric value indicates better quality. 

### VMAF
VMAF is a perceptual video quality assessment algorithm developed by Netflix. In our benchmark, we calculate VMAF on the Y component in YUV colorspace. For metric calculation, we use MSU VQMT<sup><a href="#references">[1]</a></sup>.

### LPIPS
LPIPS (Learned Perceptual Image Patch Similarity) evaluates the distance between image patches. Higher means further/more different. Lower means more similar. To calculate LPIPS we use Perceptual Similarity Metric implementation proposed in The Unreasonable Effectiveness of Deep Features as a Perceptual Metric<sup><a href="#references">[3]</a></sup>.

## Computational complexity
The tests were performed in Google Colab. Main characteristics:
* GPU: **NVIDIA K80**
* reading and writing images are not taken into account
* **1920×1080** resolution
* interpolation of one frame between the same pair of adjacent frames
* result is **3rd minimum from 100 runs** 

## Subjective comparison
For the subjective comparison we slow down outputs from algorithms in 4 times. For the participants are shown 2 seconds length videos:
* 30 fps for gaming samples
* 60 fps for others

Each one of 413 participants has seen 32 video pairs and had to choose which one of them looks more smooth (option “indistinguishable” is also available). There were 2 verification questions to protect against random answers and bots. We used these valid answers to predict the ranking using the Bradley-Terry model.


<h3 id="references">References</h3>

<ol>
    <li><a href="http://compression.ru/video/quality_measure/video_measurement_tool.html">http://compression.ru/video/quality_measure/video_measurement_tool.html</a></li>
    <li><a href="https://github.com/VainF/pytorch-msssim">Pytorch MS-SSIM</a></li>
    <li><a href="https://richzhang.github.io/PerceptualSimilarity/">https://richzhang.github.io/PerceptualSimilarity/</a></li>
    <!-- <li>R. Zhang, P. Isola, A. A. Efros, E. Shechtman, O. Wang, "The unreasonable effectiveness of deep features as a perceptual metric," in Proceedings of the IEEE conference on computer vision and pattern recognition, 2020, pp.586-595.</li> 
    <li><a href="https://videoprocessing.ai/benchmarks/video-super-resolution.html">https://videoprocessing.ai/benchmarks/video-super-resolution.html</a></li>
    <li><a href="https://docs.opencv.org/3.4/dd/d1a/group__imgproc__feature.html#ga04723e007ed888ddf11d9ba04e2232de">https://docs.opencv.org/3.4/dd/d1a/group__imgproc__feature.html#ga04723e007ed888ddf11d9ba04e2232de</a></li>
    <li><a href="https://en.wikipedia.org/wiki/Canny_edge_detector">https://en.wikipedia.org/wiki/Canny_edge_detector</a></li>
    <li>A. V. Zvezdakova, D. L. Kulikov, S. V. Zvezdakov, D. S. Vatolin, "BSQ-rate: a new approach for video-codec performance comparison and drawbacks of current solutions," in Programming and computer software, vol. 46, 2020, pp.183-194.</li>
    <li><a href="https://videoprocessing.ai/benchmarks/video-super-resolution-methodology.html">https://videoprocessing.ai/benchmarks/video-super-resolution-methodology.html</a></li>
    <li><a href="http://app.subjectify.us/">http://app.subjectify.us/</a></li>
    <li><a href="https://github.com/fraunhoferhhi/vvenc">https://github.com/fraunhoferhhi/vvenc</a></li>
    <li><a href="https://github.com/uavs3/uavs3e">https://github.com/uavs3/uavs3e</a></li>
    <li>A. Antsiferova, A. Yakovenko, N. Safonov, D. Kulikov, A. Gushin, D.Vatolin, "Objective video quality metrics application to video codecs comparisons: choosing the best for subjective quality estimation," in arXiv preprint arXiv:2107.10220, 2021</li>
    <li><a href="https://github.com/alexanderkroner/saliency">https://github.com/alexanderkroner/saliency</a></li>
    <li>A. Kroner, M. Senden, K. Driessens, and R. Goebel, "Contextual encoder-decoder network for visual saliency prediction," in Neural Networks, 129, pp. 261-270, 2020.</li> -->
</ol>


