---
original_url: http://compression.ru/video/frame_rate_conversion/index_en_frcn.html
title: Advanced Frame Rate Converter (AFRC)
description: FRC algorithm increases the total number
             of frames in the video sequence
preview_img: /assets/img/other/advanced-frame-rate-converter/preview.gif
---

# Advanced Frame Rate Converter (AFRC)

* Algorithm, ideas: Dr. Dmitriy Vatolin  
* Algorithm, implementation: Sergey Grishin

FRC (Frame Rate Conversion) algorithms are used in compression, video
format conversion, quality enhancement, stereo vision, etc. The most
popular application is format conversion. This is the case when FRC is
used in order to convert the frame rate of video stream. It is needed
for example in order to playback 50Hz video sequence using TV set with
100Hz frame rate. FRC makes the motion of objects smoother and therefore
more pleasant for eyes. It allows to slow down the playback speed thus
making the objects' movements more evident.

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/other/advanced-frame-rate-converter/N_Conversion.gif" alt="FRC scheme" width="244" height="461" /><br />
<strong>Pic.1</strong> Basic scheme of FRC</td>
</tr>
</tbody>
</table>

FRC algorithm increases the total number of frames in the video
sequence. This is performed by inserting new frames (interpolated
frames) between each pair of neighbor frames of original video sequence
(see pic.1). The number of interpolated frames between each pair of
original frames is defined by the interpolation factor. Interpolation
factor is a user defined parameter and can be equal to any positive
integer number.

Main advantage of developed algorithm is using of several quality
enhancement techniques such as adaptive artifact masking, black stripe
processing and occlusion tracking:

-   **adaptive artifact masking** technique allows to make artifacts
    less noticeable for eyes thus increasing the integral quality of
    processed video;
-   **black stripe processing** allows to avoid artifacts which are
    commonly appeared in interpolated frames in case of black stripe
    presented near frame edges;
-   **occlusion tracking** performs high quality restoration of
    interpolated frames near edges in case of presence of motion with
    direction to/from the frame edge.

## Examples

This section contains performance results of developed algorithm and its
comparison with methods of other companies.

First example (pic. 2-4) demonstrates result obtained using 'schumacher'
test video sequence. Interpolated frame (see pic. 4) is calculated by
developed algorithm using two reference frames (pic. 2,3). Presented
interpolated frame located in the centre position in time domain between
reference frames.

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><embed src="/assets/img/other/advanced-frame-rate-converter/schum_prv.jpg" width="374" height="278" /><br />
<strong>Pic.2</strong> Previous reference frame</td>
<td><embed src="/assets/img/other/advanced-frame-rate-converter/schum_nxt.jpg" width="374" height="278" /><br />
<strong>Pic.3</strong> Next reference frame</td>
</tr>
</tbody>
</table>

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><embed src="/assets/img/other/advanced-frame-rate-converter/schum_int.jpg" width="374" height="278" /><br />
<strong>Pic.4</strong> Interpolated frame</td>
</tr>
</tbody>
</table>

  
Quality comparison of the developed method and other companies' methods
is shown at the pictures below. First example shows performance result
for test video sequence 'stefan'. Interpolated frames are obtained
during conversion of input video stream with interpolation factor
equaling 2. The number of interpolated frame in output video sequence is 339.

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/other/advanced-frame-rate-converter/stefan_x2_f338.jpg" alt="Previous reference frame" width="278" height="384" /><br />
<strong>Pic.5</strong> Previous reference frame</td>
<td><img src="/assets/img/other/advanced-frame-rate-converter/stefan_x2_f340.jpg" alt="Next reference frame" width="278" height="384" /><br />
<strong>Pic.6</strong> Next reference frame</td>
</tr>
</tbody>
</table>

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/other/advanced-frame-rate-converter/stefan_x2_f339_retimer.jpg" alt="Retimer result" width="278" height="384" /><br />
<strong>Pic.7</strong> Retimer result</td>
<td><img src="/assets/img/other/advanced-frame-rate-converter/stefan_x2_f339_dynapel.jpg" alt="Motion Perfect result" width="278" height="384" /><br />
<strong>Pic.8</strong> Motion Perfect result</td>
</tr>
<tr class="even">
<td><img src="/assets/img/other/advanced-frame-rate-converter/stefan_x2_f339_twixtor.jpg" alt="Twixtor result" width="278" height="384" /><br />
<strong>Pic.9</strong> Twixtor result</td>
<td><img src="/assets/img/other/advanced-frame-rate-converter/stefan_x2_f339_afrc.jpg" alt="AFRC result" width="278" height="384" /><br />
<strong>Pic.10</strong> AFRC result</td>
</tr>
</tbody>
</table>

  
Next example shows performance result for test video sequence 'foreman'.
Interpolated frames are obtained during x1 conversion (sequence is
firstly decimated with factor 2 and decimated frames are then
interpolated) of input video stream. The number of interpolated frame in
output video sequence is 171.

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/other/advanced-frame-rate-converter/foreman_x1_f170.jpg" alt="Previous reference frame" width="217" height="288" /><br />
<strong>Pic.11</strong> Previous reference frame</td>
<td><embed src="/assets/img/other/advanced-frame-rate-converter/foreman_x1_f172.jpg" width="217" height="288" /><br />
<strong>Pic.12</strong> Next reference frame</td>
</tr>
</tbody>
</table>

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/other/advanced-frame-rate-converter/foreman_x1_f171_retimer.jpg" alt="Retimer result" width="217" height="288" /><br />
<strong>Pic.13</strong> Retimer result</td>
<td><img src="/assets/img/other/advanced-frame-rate-converter/foreman_x1_f171_dynapel.jpg" alt="Motion Perfect result" width="217" height="288" /><br />
<strong>Pic.14</strong> Motion Perfect result</td>
</tr>
<tr class="even">
<td><img src="/assets/img/other/advanced-frame-rate-converter/foreman_x1_f171_twixtor.jpg" alt="Twixtor result" width="217" height="288" /><br />
<strong>Pic.15</strong> Twixtor result</td>
<td><img src="/assets/img/other/advanced-frame-rate-converter/foreman_x1_f171_afrc.jpg" alt="AFRC result" width="217" height="288" /><br />
<strong>Pic.16</strong> AFRC result</td>
</tr>
</tbody>
</table>


Next diagram (see pic. 17) demonstrates the results of objective
comparison. The objective quality of processed sequences for various
methods was measured using Y-PSNR. During PSNR calculation only
interpolated frames had been used. In order to do that original video
sequences are first decimated with factor 2 and then decimated frames
are recovered using FRC. After that interpolated frames are compared
with frames from original video sequences using Y-PSNR metric.  
Vertical axis is marked with average Y-PSNR values for each sequence,
horizontal one - by test sequences' names. As it can be clearly seen the
developed algorithm (AFRC) shows the best objective quality result.

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/other/advanced-frame-rate-converter/psnr_graph.gif" alt="Diagram" width="601" height="356" /><br />
<strong>Pic. 17</strong> Objective comparison result</td>
</tr>
</tbody>
</table>

## Publications

-   D.Vatolin, S.Grishin, "N-times Video Frame-rate Up-conversion
    Algorithm based on Pixel Motion Compensation with Occlusions
    Processing", "Graphicon", International Conference on Computer
    Graphics & Vision, conference, July 2006, pp. 112-119. (Russian)
-   D.Vatolin, S.Grishin, "Video Frame Rate Conversion Method Based on
    Compensated Frames Interpolation", "New Information Technologies in
    Automated Systems", Seminar at M.V.Keldysh Institute of Applied
    Mathematics, March 2006, pp. 32-46. (Russian)

## Download

For commercial license of this filter please contact us via

E-mail: <video-licensing@graphics.cs.msu.ru>

-   Previous FRC project: [MSU FRC
    Project](/other/frame-rate-conversion.html)
-   Public FRC filter: [MSU Frame Rate
    Conversion](/video_filters/frame-rate-conversion.html)





