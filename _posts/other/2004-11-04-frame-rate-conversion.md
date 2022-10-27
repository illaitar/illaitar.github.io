---
original_url: http://compression.ru/video/frame_rate_conversion/index_en.html
title: MSU Frame Rate Conversion Method
description: Algorithm to double video fps
preview_img: /assets/img/other/frame-rate-conversion/x4.gif
---

<table style="width: 100%">
<tbody>
<tr class="odd">
<td style="text-align: left;"><embed src="/assets/img/other/frame-rate-conversion/samsung.gif" /></td>
<td style="text-align: right;"><embed src="/assets/img/other/frame-rate-conversion/gm_lab_vg.gif" /></td>
</tr>
</tbody>
</table>

# MSU Frame Rate Conversion Method 

* Algorithm, ideas: Dr. Dmitriy Vatolin  
* Algorithm, implementaion: Sergey Grishin

See also:

-   New FRC project: [Advanced FRC
    Project](/other/advanced-frame-rate-converter.html)
-   Public FRC filter: [MSU Frame Rate
    Conversion](/other/frame-rate-conversion.html)

Algorithm allows to double frame rate (fps) of the video stream. This
conversion is performed by calculating and inserting the new frames in
the stream (see picture).

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/other/frame-rate-conversion/x2.gif" alt="fps x2 scheme" /><br />
Double up-conversion of the frame rate</td>
</tr>
</tbody>
</table>

The main advantages of the method are:

-   **high accuracy of motion tracking and compensation**
-   **constant temporal sharpness level of the frames in converted video
    stream**

This is achieved by construction of compensated frames with quarter
pixel accuracy. Such high accuracy is obtained by using of bilinear and
bicubic interpolation. Second advantage means that interpolated frames
have the same sharpness as the original ones. Note that such the feature
is not common for the majority of methods of this kind.

## Examples

Here we present results of comparison of described (MSU), Frame
Repetition (FR) and Linear Interpolation (LI) methods on "akiyo"
sequence. Results include PSNR metric visualization of interpolated
frames in comparison to original ones on the right side. Following is
the color semantics on these images: red color - high difference region,
this difference is visually noticeable; yellow - little less than
previous difference; green and blue - almost unnoticeable difference;
black - no difference.

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/other/frame-rate-conversion/akiyo_9.jpg" alt="akiyo sequence" /><br />
Performance of MSU, LI and FR methods at "akiyo" sequence</td>
</tr>
</tbody>
</table>

On the pictures below there are the frames from sequences with four
times increased frame rate. Such the up-conversion is achieved by
repeated using of FRC method in accordance to picture:

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/other/frame-rate-conversion/x4.gif" alt="akiyo sequence" /><br />
Four times frame rate up-conversion</td>
</tr>
</tbody>
</table>

On the next picture there is the comparison of MSU and LI FRC methods by
the example of conversion of "waterfall" sequence:

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/other/frame-rate-conversion/waterfall_5_msu.jpg" alt="Waterfall.avi MSU x4" /><br />
<img src="/assets/img/other/frame-rate-conversion/waterfall_5_li.jpg" alt="Waterfall.avi LI x4" /><br />
Performance of MSU and LI at "waterfall" sequence</td>
</tr>
</tbody>
</table>

Quality comparison of MSU, LI and FR methods is shown at the graphs
below. In vertical direction there is PSNR quality level of interpolated
frames in comparison to original ones (the higher values of metric means
the higher quality of interpolated frames), in horizontal direction
interpolated frame numbers are marked.

<div class="center" style="text-align: center">
<div>
<embed src="/assets/img/other/frame-rate-conversion/bbc_graph.gif" alt="bbc psnr graph">
<embed src="/assets/img/other/frame-rate-conversion/bus_graph.gif" alt="bus psnr graph">
<embed src="/assets/img/other/frame-rate-conversion/foreman_graph.gif" alt="foreman psnr graph"><br/>
Performance quality of MSU, LI and FR at "BBC", "buc", "foreman" sequences
</div>
</div>

Below there is a comparison of MSU and UCSD (University of California,
San Diego) FRC methods. Sequences with four times increased frame rate
were used for this comparison:

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/other/frame-rate-conversion/dogs_5_msu.jpg" alt="Dogs.avi MSU x4" /><br />
<img src="/assets/img/other/frame-rate-conversion/dogs_5_ucsd.jpg" alt="Dogs.avi UCSD x4" /><br />
Comparison of MSU and UCSD methods by the example of sequence "dogs"</td>
</tr>
</tbody>
</table>

On the pictures below it is easy to see the sharpness difference on
frames, which were calculated by increasing FPS four times:

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/other/frame-rate-conversion/dogs_sharp.jpg" alt="MSU &amp; UCSD sharpness" /><br />
Frames of MSU and UCSD methods for sequence "dogs"</td>
</tr>
</tbody>
</table>

Two sequences where the quality difference of MSU and UCSD methods can
be clearly seen are available for download. In these sequences each
frame contains the same part of frame from sequence processed by FR, MSU
and LI. This method of sequence generation makes comparison of FRC
methods easy and comfortable:

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/other/frame-rate-conversion/triple.jpg" alt="Sample frame" /><br />
Frame from "crowd" sequence for comparing FR, MSU and LI methods</td>
</tr>
</tbody>
</table>

## Download

**Filter unavailable due to contract limitation.** You can license
[Advanced FRC
Project](/other/advanced-frame-rate-converter.html)
result.

-   [Sequence "dogs" for comparing FR, MSU and UCSD (704x464, Divx 4.12,
    2.1
    Mb)](http://compression.ru/video/frame_rate_conversion/video/dogs_x4.avi)
-   [Sequence "crowd" for comparing FR, MSU and UCSD (704x464, Divx
    4.12, 2.6
    Mb)](http://compression.ru/video/frame_rate_conversion/video/crowd_x4.avi)

## Contacts

E-mail: <video@graphics.cs.msu.ru>

-   New FRC project: [Advanced FRC
    Project](/other/advanced-frame-rate-converter.html)
-   Public FRC filter: [MSU Frame Rate
    Conversion](/video_filters/frame-rate-conversion.html)


