---
original_url: http://compression.ru/video/3d_display_video/depth_map_generation_en.html
title: Depth Map Generation and Stereo video creation
description: This technology provides high quality depth map estimation for video
preview_img: /assets/img/filters/depth-map-generation/ex3_depth_cur.gif
---

# Disparity and depth map generation.<br/> Monoscopic video to 3D

* Project: Dr. Dmitriy Vatolin
* Implementation, algorithm: Sergey Grishin, Karen Simonyan,
Alexander Parshin, Konstantin Strelnikov

This technology provides high quality depth map estimation for video.
Our algorithm doesn't require stereo content. Only information from
single view video is used. Algorithm estimates motion in video sequence,
generates disparity map and depth map. Similar technology can be used to
[convert stereo video to multiview 3D
video](/video_filters/stereo-to-multiview.html).

## Description

Algorithm uses spatial and temporal information from consecutive frames
of monoscopic video

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/depth-map-generation/ex1_previous.png" alt="Previous frame" /></td>
<td><img src="/assets/img/filters/depth-map-generation/ex1_current.png" alt="Current frame" /></td>
</tr>
<tr class="even">
<td>Previous frame</td>
<td>Current frame</td>
</tr>
</tbody>
</table>

to estimate disparity map or depth map:

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/depth-map-generation/ex1_depth_cur.gif" alt="Depth map anв current frame" /></td>
</tr>
<tr class="even">
<td>Depth map vs current frame</td>
</tr>
</tbody>
</table>

Also stereo pair or [multiview 3D
video](/video_filters/stereo-to-multiview.html) can
be generated using the depth map:

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/depth-map-generation/ex1_left_right.gif" alt="Stereo pair" /></td>
</tr>
<tr class="even">
<td>Stereo pair</td>
</tr>
</tbody>
</table>

Higher quality of multiview 3D video and depth/disparity map is achieved
when [stereoscopic material is used as the source of
conversion](/video_filters/stereo-to-multiview.html).

## More examples

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/depth-map-generation/ex3_previous.png" alt="Previous frame" /></td>
<td><img src="/assets/img/filters/depth-map-generation/ex3_current.png" alt="Current frame" /></td>
</tr>
<tr class="even">
<td>Previous frame</td>
<td>Current frame</td>
</tr>
</tbody>
</table>

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/depth-map-generation/ex3_depth_cur.gif" alt="Depth map" /></td>
<td><img src="/assets/img/filters/depth-map-generation/ex3_left_right.gif" alt="Stereo pair" /></td>
</tr>
<tr class="even">
<td>Generated depth map vs current frame</td>
<td>Generated stereo pair</td>
</tr>
</tbody>
</table>

## Contacts

For questions and proposition please contact us

E-mail: <3dvideo@compression.ru>