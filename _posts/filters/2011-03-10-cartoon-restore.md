---
original_url: http://compression.ru/video/cartoon_restore/index_en.htm
title: MSU Cartoon Restore Filter
description: The filter is designed for quality improvement of compressed cartoons like video by deleting ringing artifacts
preview_img: /assets/img/filters/cartoon-restore/preview.gif
subprojects: public
---

# MSU Cartoon Restore Filter 2.0 beta

* Method ideas: Dr. Dmitriy Vatolin,  Alexander Parshin  
* Implementation: Alexey Moiseytsev, Arsaev Marat

**One of the most prominent coding artifacts in highly compressed
animated video are the ringing artifacts. Ringing noise preferably
manifest itself around edges due to coarse quantization. The filter is
designed for quality improvement of compressed cartoons like video by
deleting ringing artifacts.**

## Change Log

***Version 2.0b***  
\[+\] Added GPU implementation.  
\[+\] Filter performance increased  

***Version 1.3***  
\[+\] GUI improvement  
\[+\] Added motion adaptive mode (filter speedup!)  
\[+\] Added new algorithm Image Similarity (beta version)

***Version 1.1***  
\[+\] First filter release

## Comparison with version 1.3

for configuration: Inter Core2Duo T7300 2.0GHz, Nvidia 8600M GT, 2.0GB
RAM, ForceWare 174.31

<div class="center">
    <div><img src="/assets/img/filters/cartoon-restore/comparison.gif" alt="Comparison"></div>
</div>

## Settings

### Simple mode

<div class="center">
    <div><img src="/assets/img/filters/cartoon-restore/filterOptionsSimple.gif" alt="Filter's main window"></div>
</div>

This mode allows you select one of several presets, without additional
manual filter tuning. "GPU Usage" checkbox will enable GPU mode if
available. Simple mode settings:

- **Algorithm Quality** - Select algorithm by quality. One can select
  algorithm according to desired speed/quality tradeoff.
- **Compression Artefacts** - Set quantity of compression artifacts in
  processed cartoon.
- **Motion Adaptive** - Turn this feature on to spedup algorithms in
  cartoons with slow motion. The same option is available in the
  advanced mode
- **Use GPU** - This enables GPU mode, if available

### Advanced mode

This mode allows configure filter manually and get best quality for
particular video. For all methods "Use GPU" checkbox enables GPU mode.

Combo box "Method" allows select one of four implemented algorithms.

### Simple Adaptive Filter

<div class="center">
    <div><img src="/assets/img/filters/cartoon-restore/filterOptionsSAF.gif" alt="Filter's main window"></div>
</div>

**Filter parameters:**

- **Smoothness** - Allows to control strength of filtration.
- **Quantization Threshold** - Controls amount of ringing artifacts in
  source video.

### Fuzzy Adaptive Filter

<div class="center">
    <div><img src="/assets/img/filters/cartoon-restore/filterOptionsFuzzy.gif" alt="Filter's main window"></div>
</div>

The filtration strength depends on amount of details in each block. Left
sliders correspond to blocks without details, and right sliders
correspond to edge blocks.

There are some presets, which allow quickly selecting filter
configuration (use "Preset" list).

#### Multipass Bilateral Filter

<div class="center">
    <div><img src="/assets/img/filters/cartoon-restore/filterOptionsBilateral.gif" alt="Filter's main window"></div>
</div>

**Filter parameters:**

- **Iterations**  
  If this parameter is greater, more texture details replace by flat
  regions.
- **Geometric Dispersion**  
  Allows to change filter size.
- **Photometric Dispersion**  
  Allows to control amount of ringing artifacts.

Also some general presets can be selected.

### Similarity DB Filter (beta version)

*We are still working on this algorithm quality improvement. This
version can demonstrate suboptimal results!*

<div class="center">
    <div><img src="/assets/img/filters/cartoon-restore/filterOptionsSimilarity.gif" alt="Filter's main window"></div>
</div>

The **Strength** parameter of the filter sets strength of a filtration
of video.  
This filter requires the additional **artifact.db** file.

## Job control and integration with AviSynth

Filter supports VirtualDub Job Control, and it can be used from
[AviSynth](http://avisynth.org/). Some examples are listed below.

**Simple Adaptive Filter:**

```
LoadVirtualDubPlugin("MSU_cartoon_restore.vdf","MSUCartoonRestore", 0) 

clip=AVISource("D:\work\video\film.avi", false, "RGB24")

clip.ConvertToRGB32.MSUCartoonRestore("simple", Smoothness, Threshold, GPUUsage)
```

- Smoothness - Integer between 1 and 15. Sets filter strength.
- Threshold - Integer between 1 and 100. Estimates amount of ringing
  artifacts in source video.
- GPUUsage - 0 or 1. This will enable GPU mode if available.

**Fuzzy Adaptive Filter:**

```
LoadVirtualDubPlugin("MSU_cartoon_restore.vdf","MSUCartoonRestore", 0) 

clip=AVISource("D:\work\video\film.avi", false, "RGB24")

clip.ConvertToRGB32.MSUCartoonRestore("fuzzy", Strength10, Strength20, Strength30, Strength40, Strength50,  
                          Strength60, Strength70, Strength80, Strength90, Strength100, ShowBlockType)
```

- Strength\* - Integers between 0 and 32. Sets filter strength depends
  on block type.
- ShowBlockType - 0 or 1 (optional). Turns on visualization of block
  types.
- GPUUsage - 0 or 1. This will enable GPU mode if available.

**Multipass Bilateral Filter:**

```
LoadVirtualDubPlugin("MSU_cartoon_restore.vdf","MSUCartoonRestore", 0) 

clip=AVISource("D:\work\video\film.avi", false, "RGB24")

clip.ConvertToRGB32.MSUCartoonRestore("bilateral", Iterations, GeometricDispersion, PhotometricDispersion)
```        

- Iterations - Integer between 1 and 5. Sets the number of passes.
- GeometricDispersion - Integer between 0 and 75. Sets the filter
  size.
- PhotometricDispersion - Integer between 0 and 200. Estimates amount
  of ringing artifacts in source video.
- GPUUsage - 0 or 1. This will enable GPU mode if available.

## Examples

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/cartoon-restore/bukashki2_enlaged_before.jpg" alt="Source frame" /><br />
Source frame</td>
<td><img src="/assets/img/filters/cartoon-restore/bukashki2_enlaged_after.jpg" alt="MSU Cartoon Restore" /><br />
Frame processed by MSU Cartoon Restore</td>
</tr>
<tr class="even">
<td><img src="/assets/img/filters/cartoon-restore/bukashki2_enlaged2_before.jpg" alt="Source frame" /><br />
Source frame</td>
<td><img src="/assets/img/filters/cartoon-restore/bukashki2_enlaged2_after.jpg" alt="MSU Cartoon Restore" /><br />
Frame processed by MSU Cartoon Restore</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/cartoon-restore/planetes_src.jpg" alt="Source frame" /><br />
Source frame</td>
<td><img src="/assets/img/filters/cartoon-restore/planetes_fil_saf.jpg" alt="MSU Cartoon Restore: Simple Adaptive Filter" /><br />
Simple Adaptive Filter</td>
</tr>
<tr class="even">
<td><img src="/assets/img/filters/cartoon-restore/planetes_fil_fuzzy.jpg" alt="MSU Cartoon Restore: Fuzzy Adaptive Filter" /><br />
Fuzzy Adaptive Filter</td>
<td><img src="/assets/img/filters/cartoon-restore/planetes_fil_bilateral.jpg" alt="MSU Cartoon Restore: Multipass Bilateral FIlter" /><br />
Multipass Bilateral FIlter</td>
</tr>
</tbody>
</table>

## Download

- [MSU Cartoon Restore 2.0 beta (1 Mb,
  ZIP).](http://compression.ru/video/cartoon_restore/src/msu_cartoon_restore.zip)  
- [MSU Cartoon Restore 2.0 beta without Similarity DB (180 KB,
  ZIP).](http://compression.ru/video/cartoon_restore/src/msu_cartoon_restore_wodb.zip)  
  Unpack this file into the "Plugins" folder of VirtualDub directory.
- Last stable release - [MSU Cartoon Restore 1.3 (950 KB,
  ZIP).](http://compression.ru/video/cartoon_restore/src/msu_cartoon_restore_old.zip)  
  Unpack this file into the "Plugins" folder of VirtualDub directory.

E-mail: <video@graphics.cs.msu.ru>

Please read [MSU filters FAQ](/video_filters/video-filters-faq-en.html) before mailing.
.
