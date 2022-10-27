---
original_url: http://compression.ru/video/codec_comparison/subjective_codecs_comparison_en.html
title: MSU Subjective comparison of modern videocodecs
description: Goals of our assessment are subjective comparison of new versions of popular videocodecs, comparison of results with objective metrics and subjective assessment technology testing
preview_img: /assets/img/codecs/subjective-codecs-comparison/preview.png
subprojects: reports
---

# MSU Subjective Comparison of Modern Video Codecs 

* Project head: Dr. Dmitriy Vatolin  
* Organization of assessment: Alexander Parshin, Petrov Oleg  
* Refinement, translation: Oleg Petrov  
* Verification: Alexander Parshin, Artem Titarenko

## About comparison

Tested codecs:

- DivX 6.0
- Xvid 1.1.0
- x264
- WMV 9.0

Bitrates:

- 690 kbps
- 1024 kbps

Number of sequences: 4

Number of experts: 50

[Download MSU Subjective Comparison of Modern Video Codecs (32 pages in
PDF, 1.38
MB)](http://compression.ru/video/codec_comparison/pdf/msu_subjective_codecs_comparison_en.pdf)

## Goal of subjective comparison

During last few years many comparisons of video, audio and image codecs
were carried out by our Graphics & Media Lab at Moscow State University.
All of them used objective metrics like PSNR, VQM or SSIM. This fact has
raised reasonable questions on adequacy of objective measures to the
subjectively perceived quality, which is the main parameter of a codec's
performance. Goals of our assessment are **subjective comparison of new
versions of popular videocodecs, comparison of results with objective
metrics and subjective assessment technology testing**.

Main comparison parts:

1. Subjective comparison of videocodecs.
2. Comparison of results with objective metrics.

## Subjective comparison

Main quality parameter for a codec - subjective impressions of a viewer
of a compressed video. Latter is the main idea of subjective comparison
methods - quality score for a compressed sequence is the average opinion
of a group of experts on its quality (MOS, Mean Opinion Score).  
There are lots of methodologies of subjective assessment, many of them
are implemented in [MSU Perceptual Video Quality
tool](/vqmt/pvqt-info.html)
that was used for the assessment. Our comparison is using SAMVIQ -
method that was recently developed by EBU (European Broadcasting Union),
PDF with the comparison contains its description. On a graph below you
can see average MOS for all codecs, **the higher the better**. Probably,
XviD results could be improved by switching on deblocking algorithm
(this algorithm isn't used by default).

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/codecs/subjective-codecs-comparison/mos06_mos_eng.png" alt="average MOS" /><br />
Average MOS for all codecs</td>
</tr>
</tbody>
</table>

Following graph illustrates average MOS for each codec and bitrate and
its' 95% confidence intervals.

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/codecs/subjective-codecs-comparison/mos06_mos2_eng.png" alt="average MOS" /><br />
Average MOS for all codecs and bitrates</td>
</tr>
</tbody>
</table>

## Evaluation of objective metrics

PSNR, VQM and SSIM were measured for each sequence with [MSU Video
Quality Measurement
tool](/vqmt/vqmt.html),
description of these metrics can be found [on this
page](/vqmt/info.html).
Note, that "VQM" metric refers to algorithm of Feng Xiao, not proposed
by VQEG objective quality metric. The following graphs illustrate
relation between subjective opinion and an objective metric: if set of
points is close to a straight line, then the metric is adequate to the
subjectively perceived quality (values of PSNR and SSIM were mapped on
MOS scale, see PDF with the comparison for more details).

<table class="center" style="text-align: center">
<tbody>
<tr>
<td>
<img src="/assets/img/codecs/subjective-codecs-comparison/mos06_psnr_eng.png" alt="PSNR ">
</td>
<td>
<img src="/assets/img/codecs/subjective-codecs-comparison/mos06_vqm_eng.png" alt="VQM ">
</td>
</tr>
<tr>
<td colspan="2">
<img src="/assets/img/codecs/subjective-codecs-comparison/mos06_ssim_eng.png" alt="SSIM "><br/>
On our test set SSIM was far more adequate to the subjective opinion than PSNR and VQM
</td>
</tr>
</tbody>
</table>

## Download

-   [MSU Subjective Comparison of Modern Video Codecs - PDF (1.38
    MB)](http://compression.ru/video/codec_comparison/pdf/msu_subjective_codecs_comparison_en.pdf)
-   [MSU Subjective Comparison of Modern Video Codecs - ZIP (1.2
    MB)](http://compression.ru/video/codec_comparison/zip/msu_subjective_codecs_comparison_en.zip)

## Contacts

E-mail: <videocodec-testing@graphics.cs.msu.ru>
