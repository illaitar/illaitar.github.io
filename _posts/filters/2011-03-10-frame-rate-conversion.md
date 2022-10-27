---
original_url: http://compression.ru/video/frame_rate_conversion/index_en_msu.html
title: AviSynth MSU Frame Rate Conversion Filter
description: The filter is intended for video frame rate up-conversion
preview_img: /assets/img/filters/frame-rate-conversion/preview.gif
subprojects: public
---

# AviSynth MSU Frame Rate Conversion Filter

* Project, idea: Dr. Dmitriy Vatolin  
* Algorithm: Karen Simonyan, Sergey Grishin  
* Implementation: Karen Simonyan  

The filter is intended for video frame rate up-conversion. It increases
the frame rate integer times. It allows, for example, to convert a video
with 15 fps into a video with 30 fps.

## Usage

To use the plugin, copy MSU\_FRC.dll file to "plugins" directory in
AviSynth install folder or use the function *LoadPlugin* directly from
the script.

AviSynth script example:

```
AviSource("video.avi")
ConvertToYV12().MSU_FRC(4, "slow")
```

The input video must be in YV12 colorspace.  
To convert a video into YV12 colorspace use *ConvertToYV12.*  

The width and the height of the input video must be multiples of 16.  
To resize a video use *Crop* and/or *AddBorders.*  

### Parameters

{:.with-borders}
| # | Description | Allowed values |
|---|-------------|----------------|
|1|Interpolation factor|Any positive number|
|2|Preset|*fast* - higher speed, lower quality<br>*medium* - medium speed, medium quality<br>*slow* - lower speed, better quality<br><br>*slow* preset is used by default| 

**AviSynth webpage** <http://avisynth.org>

## Examples

Test sequence "matrix". Interpolation factor is 4, *slow* preset.

<div class="center">
    <div>
        <img src="/assets/img/filters/frame-rate-conversion/msu_matrix_src.gif" alt="Video fragment before FRC"><br>
        <i>Fragment of the "matrix" sequence (2 frames)</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/frame-rate-conversion/msu_matrix_frc.gif" alt="Video fragment after FRC"><br>
        <i>After processing the fragment on the left by the FRC filter the frame rate increased 4 times</i>
    </div>
</div>

## Objective comparison with other algorithms

The figure below demonstrates the results of the objective comparison.
The objective quality of processed sequences for various methods was
measured using Y-PSNR. During PSNR calculation only interpolated frames
were used. In order to do so the original video sequences were first
decimated with factor 2 and then decimated frames were interpolated
using FRC. After that the interpolated frames were compared with the
original ones using Y-PSNR metric.  
Vertical axis is marked by average Y-PSNR values for each sequence, the
horizontal one - by the names of test video sequences. It can be seen
that the developed algorithm shows the best objective quality on most
sequences.

<div class="center">
    <div>
        <img src="/assets/img/filters/frame-rate-conversion/msu_comparison_en.png" alt="Objective comparison"><br>
        <i>FRC Y-PSNR comparison</i>
    </div>
</div>

## Download

The filter was tested on AviSynth v2.57  

- [Filter for AviSynth (85 KB,
  ZIPped)](http://compression.ru/video/frame_rate_conversion/src/msu_frc.zip)
- [AviSynth 2.57 source code (2.6 MB,
  ZIPped)](http://compression.ru/video/frame_rate_conversion/src/Avisynth_257_src.zip)

## Contacts

* For common questions about filter's work please contact us: <video@graphics.cs.msu.ru>
* For commercial license of this filter (commercial usage is not free) please contact us: <video-licensing@graphics.cs.msu.ru>

## See also:

- Commercial FRC Project 2004: [MSU FRC Project
  2004](/other/frame-rate-conversion.html)
- Commercial FRC Project 2006: [MSU FRC Project
  2006](/other/advanced-frame-rate-converter.html)
