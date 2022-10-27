---
original_url: http://compression.ru/video/denoising/index_en.html
title: MSU Denoiser Filter
description: The filter is designed for noisy video stream processing, video quality improvement, or video preprocessing
preview_img: /assets/img/filters/denoising/preview.gif
subprojects: public
---

# MSU Denoiser Filter

* Algorithm, ideas: Dr. Dmitriy Vatolin, Dmitriy Kulikov  
* Implementation: Sergey Putilin, Ilya Tsvetkov

**[Version
2.5.1](/video_filters/denoising.html#changelog)
released**

The filter is designed for noisy video stream processing, video quality
improvement, or video preprocessing (e.g. for preprocessing before
compression or deinterlacing). The filter implementation is able to use
GPU processing power to increase the processing speed.

<a href="http://compression.ru/video/denoising/src/msu_denoiser.zip"><strong>DOWNLOAD</strong></a> &mdash; Free version for <strong>non-commercial</strong> home usage only

## Change log

**Version 2.5.1 ([Download it
now](http://compression.ru/video/denoising/src/msu_denoiser.zip))**

- Processing quality test added to warn users about possible artifacts
- Fixed a lot of filter crashes

**Version 2.5**

- New algorithm for high definition video (HDTV) processing added
- Automatic noise estimation
- Shot detection to reduce artifacts during temporal denoising
- Cg libraries are not used any more

**Version 2.0 beta**

- First version with support for fast video processing using GPU
- New interface

## Settings

By default filter uses automatic noise estimation and is ready for video
processing without any manual setup. In this mode user can slightly
correct denoising strength to achieve necessary results Automatic noise
estimation checkbox controls this mode.

<div class="center">
    <div>
        <img src="/assets/img/filters/denoising/parameters.gif" alt="Filter parameters dialog box"><br>
        <i>Filter parameters dialog box</i>
    </div>
</div>

Setting the checkbox you can select GPU or CPU versions of algorithm.

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/denoising/gpu-available.gif" alt="GPU-mode is available" width="302" height="220" /><br />
GPU-mode is available, so you can use GPU for video processing (this feature is optional)</td>
<td><img src="/assets/img/filters/denoising/gpu-inavailable.gif" alt="GPU-mode is not available" width="302" height="220" /><br />
GPU-mode is unavailable. The most probable reason is that your computer does not meet the minimum system requirements of the filter</td>
</tr>
</tbody>
</table>

Note that not all graphic-cards are supported. We recommend to use ATI
Radeon X700 or higher and nVidia Geforce 6600 or higher. The filter
requires OpenGL 2.1 support. **We strongly recommend installing the
latest video-drivers when using GPU-mode to achieve better
performance.**

Some GPUs does not provide required accuracy and video will be processed
with some visual artifacts. So at filter startup certain test are run
and the user will be warned in the case of possible quality issues:

<div class="center">
    <div>
        <img src="/assets/img/filters/denoising/gpu-issue.gif" alt="Filter parameters dialog box"><br>
        <i>Filter parameters dialog box</i>
    </div>
</div>

Filter provides two different algorithms for video denoising (selection
is made via Algorithms list):

- **MSU Denoiser** — algorithm used in previous versions of filter.  
  ![MSU Denoiser algorithm](/assets/img/filters/denoising/msu.gif)  
  The filter suppresses noise in both spatial and temporal domains.
  Filter effect is specified for each type of denoising in the
  dialogue box as shown. Checkboxes help to set required combination
  of domains, thus enabling spatial-only or temporal-only denoising.  
  The new feature of 2.5 release is careful scene change processing.
  The filter detects shots to prevent artifacts of temporal denoising,
  but can also reduce the performance, especially when high
  performance GPU is used.

- **Bilateral** — new algorithm which is implemented in three variants  
  corresponding to different performance/quality ratios. This
  algorithm is most suitable for HD video denoising because of its
  quality.  
  ![Bilateral algorithm](/assets/img/filters/denoising/bilateral.gif)

Filter supports Job Control and can be used with
[AviSynth](http://www.avisynth.org). Here is an example:

```
LoadVirtualDubPlugin("..\VirtualDub\plugins\MSUDenoiser251.vdf", "MSUDenoiser", 1)
clip = AviSource("video.avi")
clip.ConvertToRGB32.MSUDenoiser(algorithm, gpuMode, correction, shotDetection)
```

Parameters:

- algorithm:
  - 0 — MSU Denoiser;
  - 1 — Bilateral, small region (fast);
  - 2 — Bilateral, medium;
  - 3 — Bilateral, big region (best quality);
- gpuMode — if set to 0, CPU is used; GPU otherwise;
- correction — manual correction for automatic mode (50 corresponds to
  no correction);
- shotDetection — careful scene change processing (for MSU Denoiser
  algorithm only).

## Examples

Let's consider filter operation on “Suzie” sequence first. The sequence
is quite noisy in spatial and temporal domains. Here is a visual
comparison of source frame and the frame processed by MSU Denoiser:

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/denoising/susi_noise.jpg" alt="Source frame with noise" /><br />
Source frame with noise</td>
<td><img src="/assets/img/filters/denoising/susi_denoised.jpg" alt="Frame processed with MSU Denoiser" /><br />
Frame processed with MSU Denoiser (made with “High Noise” preset that emphasizes filter effect)</td>
</tr>
</tbody>
</table>

## Performance comparison

Here is a comparison between two versions of MSU Denoiser: old version
without GPU processing and new version with GPU processing

<div class="center">
    <div>
        <img src="/assets/img/filters/denoising/speed.gif" alt="Processing speed graph"><br>
        <i>Comparison of filter processing speed on different hardware</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/denoising/increase.gif" alt="Performance gain graph"><br>
        <i>Processing speed gain of GPU-mode compared with CPU (Pentium 4 3.4 GHz) version of algorithm</i>
    </div>
</div>

## Installation

To use the filter download the archive using the link given below and
extract its content into [VitualDub](http://www.virtualdub.org/) plugins
directory.

## Download

- Filter for VirtualDub
  - [Version 2.5.1 with GPU processing (117 KB,
    ZIP)](http://compression.ru/video/denoising/src/msu_denoiser.zip)  
    GPU usage provides up to 7 times processing speed increase
  - <span class="small">[Version 2.0 beta (1.2 MB,
    ZIP)](http://compression.ru/video/denoising/src/msu_denoiser_20.zip)</span>
  - <span class="small">[Version 1.61 without GPU processing (80 KB,
    ZIP)](http://compression.ru/video/denoising/src/msu_denoiser_161.zip)</span>
- Documentation
  - [Comparison of video
    denoisers, 2007.](http://www.yuvsoft.com/pdf/Video_Denoiser_Comparison.pdf)
  - [Description and comparison of noise suppression methods used in
    other available
    filters.](http://compression.ru/video/denoising/denoising.pdf)
  - [Description of MSU Denoiser (free) & MSU Noise Removal
    filters.](http://compression.ru/video/denoising/msu_denoising.pdf)  
    In this report we show how MSU Noise Removal usage can increase
    compression up to 30% with **better** visual quality.
- Licenses
  - [Program license for non-commercial
    usage](http://compression.ru/video/license.txt)

E-mail:

* For common questions about MSU Denoiser filter, please contact us: <denoiserfilter@compression.ru>
*For commercial license of this filter (commercial usage is not free), please contact us: <video-licensing@graphics.cs.msu.ru>
