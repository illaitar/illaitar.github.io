---
title: Automatic local color correction in S3D video
description: How to eliminate color distortion between stereo video views?
preview_img: /assets/img/vqmt3d/local-color-correction-s3d/bird_03.gif
subprojects: correction metrics
---

# Automatic local color correction in S3D video

- Author: Vitaliy Lyudvichenko
- Supervisor: dr. Dmitriy Vatolin


## Introduction
When shooting stereoscopic video, many factors can cause color mismatch between camera views, such as illuminated camera filters, glare, polarized light, etc. We have developed an automatic method for elimination of color mismatch between stereo video views. A comparison with analogues showed that it has a higher-quality result and works faster.

<p><b>Color mismatch in released "Spy Kids 3D: Game Over"</b></p>

![Example of color distortion, "Spy Kids 3D: Game Over", 0:14:19](/assets/img/vqmt3d/local-color-correction-s3d/spy_kids_01.gif)

<p><br/><b>Color difference between views</b></p>

![Color difference between views](/assets/img/vqmt3d/local-color-correction-s3d/spy_kids_02.png)

<p><br/><b>Result of automatic correction by the proposed algorithm</b></p>

![Corrected colors](/assets/img/vqmt3d/local-color-correction-s3d/spy_kids_03.gif)


## Proposed method

The proposed approach includes:
- The algorithm for matching stereo views containing light distortion;
- The global color correction algorithm for the usage at the pre-processing stage during the comparison of stereoscopic views;
- The method for assessing the quality of comparing views;
- The algorithm that, according to the source views, disparity and confidence maps, applies a color conversion to the views, eliminating local inconsistencies between the views.


## Experiments

The algorithm was compared to Ocula&nbsp;3.0 (for&nbsp;Nuke&nbsp;7.0) in Minimum Correction and Average Correction modes, and YuvSoft Stereo Processing Suite Pro&nbsp;1.0 (Adobe After Effects CS&nbsp;5.5)

<p><b>Objective comparison</b></p>

<table class="with-borders">
<thead>
<tr>
<th></th>
<th style="text-align:center">Ocula 3.0 Average</th>
<th style="text-align:center">Ocula 3.0 Minimum</th>
<th style="text-align:center">YuvSoft SPS 1.0</th>
<th style="text-align:center">Proposed method</th>
</tr>
</thead>
<tbody>
<tr>
<td>SSIM</td>
<td style="text-align:center">0.9981</td>
<td style="text-align:center">0.9980</td>
<td style="text-align:center">0.9951</td>
<td style="text-align:center"><strong>0.9992</strong></td>
</tr>
<tr>
<td>Y-PSNR</td>
<td style="text-align:center">31.786</td>
<td style="text-align:center">39.772</td>
<td style="text-align:center">33.289</td>
<td style="text-align:center"><strong>45.707</strong></td>
</tr>
<tr>
<td>Working time, FPS</td>
<td style="text-align:center">0.09</td>
<td style="text-align:center">0.11</td>
<td style="text-align:center">0.25</td>
<td style="text-align:center"><strong>1.37</strong></td>
</tr>
</tbody>
</table>


### Artificially made distortions

<p><b>Before color correction</b></p>

![Artificial distortion](/assets/img/vqmt3d/local-color-correction-s3d/bird_01.gif)

<p><br/><b>Result of the proposed algorithm</b></p>

![Automatically corrected colors](/assets/img/vqmt3d/local-color-correction-s3d/bird_02.gif)

<p><br/><b>Comparison between algorithms (difference with original frame)</b></p>

![Comparison of color difference](/assets/img/vqmt3d/local-color-correction-s3d/bird_03.gif)

### Distortions in real video

<p><b>Frame from "Pirates of the Caribbean: On Stranger Tides" trailer</b></p>

![Distortions in real video](/assets/img/vqmt3d/local-color-correction-s3d/pirates_01.gif)

<p><br/><b>Result of the proposed algorithm</b></p>

![Automatically corrected colors](/assets/img/vqmt3d/local-color-correction-s3d/pirates_02.gif)

<p><br/><b>Comparison between algorithms (difference with compensated frame)</b></p>

![Comparison of color difference](/assets/img/vqmt3d/local-color-correction-s3d/pirates_03.gif)
