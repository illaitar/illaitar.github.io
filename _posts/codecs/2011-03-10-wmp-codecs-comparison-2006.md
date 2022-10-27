---
original_url: http://compression.ru/video/codec_comparison/wmp_codecs_comparison_en.html
title: Windows Media Photo (Microsoft HD Photo) and JPEG 2000 Codecs Comparison
description: 
preview_img: /assets/img/codecs/wmp-codecs-comparison/preview.jpg
subprojects: reports image
---

# MSU Windows Media Photo (Microsoft HD Photo) and JPEG 2000 Codecs Comparison 

* Project head: Dr. Dmitriy Vatolin  
* Measurements: Alexey Moskvin  
* Refinement, translation: Oleg Petrov  

## About comparison

Tested codecs:

-   Windows Media Photo
-   9 codecs from last year's [JPEG 2000 Image Codecs
    Comparison](/codecs/jpeg2000-codecs-comparison-2005.html)

[Download MSU Windows Media Photo and JPEG 2000 Codecs Comparison (26
pages in PDF, 4833
KB)](http://compression.ru/video/codec_comparison/pdf/wmp_codec_comparison_en.pdf)

## Goal of WMPhoto testing

WMPhoto is a new format for image compression that is said to have
better quality/compression ratio than that of current standards,
including JPEG 2000. **The main goal of this testing was the
verification of superiority of WMPhoto by comparing it against nine JPEG
2000 codecs from last year's [JPEG 2000 Image Codecs
Comparison](/codecs/jpeg2000-codecs-comparison-2005.html).**

Main comparison parts:

1.  Y-PSNR comparison.
2.  Visual comparison.
3.  Informal comparison.

## PSNR comparison

PSNR is a metric used to compare two pictures: the more per pixel
difference between the pictures is the less is PSNR value. So **the
higher** is the codec's line on the graph **the better** is the
compression quality.

PSNR was measured using the PRO version of [MSU Video Quality
Measurement
Tool](/vqmt/vqmt.html)
(with command line support).

Y-PSNR is the difference in brightness component. There are three graphs
for WMPhoto, they correspond to different values of overlapping
parameter ("l").  
Warning: this is only one of eight graphs from our comparison! All of
them can be found in the PDF with comparison..

<div class="center">
<div>
<img src="/assets/img/codecs/wmp-codecs-comparison/wmp06_y_psnr_jvswmp.png" alt="ACDSee" /><br />
Barbara image, Y-PSNR
</div>
</div>

## Visual codec comparison

In most cases the PSNR value is in accordance with the compression
quality. But sometimes this metric does not reflect presence of some
important visual artefacts. For example, we can't estimate the quality
of the blurring artefacts compensation performed by some codec using
only PSNR metric. Also in some cases it is difficult to say whether 2 dB
differens is significant or not.

That is why in addition to PSNR graphs we use visual comparison of
images compressed by different codecs.

<table class="center" style="text-align: center">
<tbody>
<tr>
<td>
<img src="/assets/img/codecs/wmp-codecs-comparison/wmp06_visual_acdsee_jvswmp.png" alt="ACDSee "> <br/> 
ACDSee 7.0, 18324 bytes
</td>
<td>
<img src="/assets/img/codecs/wmp-codecs-comparison/wmp06_visual_wmphoto_jvswmp.png" alt="WMPhoto "> <br/> 
WMPhoto, 16553 bytes
</td>
</tr>
</tbody>
</table>

_There are samples of images compressed by every codec in PDF with
comparison._

## Download

-   [Download PDF (4833
    KB).](http://compression.ru/video/codec_comparison/pdf/wmp_codec_comparison_en.pdf)
-   [Download PDF (in ZIP, 4164
    KB).](http://compression.ru/video/codec_comparison/zip/wmp_codec_comparison_en.zip)

## Contacts

E-mail: <video@graphics.cs.msu.ru>
