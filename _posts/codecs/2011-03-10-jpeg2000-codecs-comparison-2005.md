---
original_url: http://compression.ru/video/codec_comparison/jpeg2000_codecs_comparison_en.html
title: JPEG 2000 Image Codecs Comparison
description: JPEG 2000 image codecs comparison
preview_img: /assets/img/codecs/jpeg2000-codecs-comparison/preview.png
subprojects: reports image
---

# MSU JPEG 2000 Image Codecs Comparison 

* Project head: Dr. Dmitriy Vatolin
* Measuring: Alexey Moskvin
* Refinement, translation: Oleg Petrov
* Verification: Artem Titarenko

## About comparison

Tested codecs:

-   JASPER 1.701.0
-   ACDSee 7.0
-   Leadtools JPEG 2000 Photoshop plug-in 1.0
-   Morgan JPEG 2000 toolbox 1.2 rev 0.0
-   Lurawave 2.1.10.04
-   Kdu\_compress 4.5.2
-   JPEG 2000 Compressor (Anything 3D) 1.00.000
-   Elecard Wavelet 3.0 Beta
-   Photoshop CS2 ‘native’ plug-in 1.6

[Download MSU JPEG 2000 Image Codecs Comparison (27 pages in PDF, 2.01
MB)](http://compression.ru/video/codec_comparison/pdf/jpeg2000_codec_comparison_en.pdf)

Nine codecs have been tested on four images with six compression rates,
216 resulting images.

## Goal of JPEG 2000 codecs testing

JPEG 2000 is a new format for image compression. It was developed to
replace popular JPEG format and has a lot of advantages: higher
compression ratios are available, lossless mode, progressive downloads,
error correction, etc.. **The main goal of this testing was the
comparison of compression quality of available JPEG 2000 codecs: is
there any significant difference between implementations of this
standard?**

Main comparison parts:

1.  Y-PSNR comparison.
2.  Visual comparison.
3.  Informal comparison.

## PSNR comparison

PSNR is a metric used to compare two pictures: the more per pixel
difference between the pictures is the less is PSNR value. So **the
higher** is the codec's line on the graph **the better** is the
compression quality.

PSNR was measured using [MSU Video Quality Measurement
Tool](http://compression.ru/video/quality_measure/video_measurement_tool.html).

Y-PSNR is the difference in brightness component. One JPEG codec is also
plotted on graphs. On the following graph one can see that JPEG is far
behind the JPEG 2000.  
Warning: this is only one of eight graphs from our comparison! All of
them can be found in the PDF with comparison.

<div class="center">
<div>
<img src="/assets/img/codecs/jpeg2000-codecs-comparison/y_psnr.png" alt="ACDSee" /><br />
Barbara image, Y-PSNR
</div>
</div>

## Visual codec comparison

In most cases the PSNR value is in accordance with the compression
quality. But sometimes this metric does not reflect presence of some
important visual artifacts. For example, we can't estimate the quality
of the blurring artifacts compensation performed by some codec using
only PSNR metric. Also in some cases it is difficult to say whether 2 dB
difference is significant or not.

That is why in addition to PSNR graphs we use visual comparison of
images compressed by different codecs.

<table class="center" style="text-align: center">
<tbody>
<tr>
<td>
<img src="/assets/img/codecs/jpeg2000-codecs-comparison/visual_acdsee.png" alt="ACDSee "><br/>
ACDSee 7.0, 18324 bytes
</td>
<td>
<img src="/assets/img/codecs/jpeg2000-codecs-comparison/visual_photoshop.png" alt="Photoshop CS2 "><br/>  
Photoshop CS2 plug-in 1.6, 18669 bytes
</td>
</tr>
</tbody>
</table>

On these images one can easily see that on this test picture Photoshop
CS produces more artifacts than ACDSee.  
There are samples of images compressed by every codec in PDF with
comparison.

## Download

-   [Download PDF (2.01
    MB).](http://compression.ru/video/codec_comparison/pdf/jpeg2000_codec_comparison_en.pdf)
-   [Download PDF (in ZIP, 1.9
    MB).](http://compression.ru/video/codec_comparison/pdf/jpeg2000_codec_comparison_en.zip)

## Contacts

E-mail: <video@graphics.cs.msu.ru>
