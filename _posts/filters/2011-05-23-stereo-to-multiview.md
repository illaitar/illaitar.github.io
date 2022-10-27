---
original_url: http://compression.ru/video/3d_display_video/index_en.html
title: MSU Stereo To Multiview 3D Video Conversion ( Glasses-free 3D-Displays Video Content creation)
description: Stereo to multiview video conversion algorithm
             for glasses-free autostereoscopic 3D displays
preview_img: /assets/img/filters/stereo-to-multiview/skydiving_stereo_to_multiview.gif
---

# MSU Stereo To Multiview 3D Video Conversion - content creation technology for glasses-free 3D displays

* Project: Dr. Dmitriy Vatolin
* Implementation, algorithm: Sergey Grishin, Karen Simonyan, Sergey Matyunin

## Introduction

Now 3D visualization is a fast developing technology. Autostereoscopic
glasses-free 3D monitors are already available. But video materials for
them are still rare. Most of this video is rendered. 3D video creation
is expensive and complicated task, because glasses-free 3D displays
require several views of the same scene (usually 8-9 views). Stereo
video capture is much easier. Stereo films become more and more popular.
Our lab have developed stereo to multiview video conversion algorithm
for glasses-free autostereoscopic 3D displays. This algorithm makes 3D
video creation problem less complicated.

<div class="center">
<img src="/assets/img/filters/stereo-to-multiview/skydiving_stereo_to_multiview.gif" alt="Stereo to multiview conversion" />
</div>

## Work description

It is necessary to generate intermediate views to convert stereo to
multiview intermediate.

We have developed conversion algorithm and processed several
professionally captured stereo videos. We also researched 3D video
capturing [(more about MSU 3D Video
Capture)](/stereo_quality/3d-video-capturing.html).

<div class="center">
<img src="/assets/img/filters/stereo-to-multiview/2_to_5_views.png" alt="Intermediate views interpolation" />
</div>

Intermediate views generation doesn't use depth map construction and
semitransparent objects processing is correct. We also work on depth and
disparity map generation. It can be used in [monoscopic to 3D video
conversion](/video_filters/depth-map-generation.html).

Our stereo video converting doesn't need iterative processes and it is
suite for stream processing. Real-time realization is possible. We also
work on GPU version of conversion for more acceleration.

It is also possible to create multiview or stereo video from monoscopic
sequences. We developed a conversion algorithm that uses only temporal
and spatial frame information to generate 3D video: [MSU Depth Map
Generation and Stereo video
creation](/video_filters/depth-map-generation.html).

## How to view 3D video

To view 3D images you need autostereoscopic monitor and specialized
player. Depending on how many views does your monitor support you should
download 5-view or 9-view video. View order is also important. You
should choose view order (from left to right OR from right to left)
supported by your player.

<table class="center" style="text-align: center" border="0" cellspacing="5" cellpadding="5">
	<tbody><tr align="center">
		<td colspan="1">
			<b>5 view alignment:</b>
		</td>
		<td colspan="2">
			<b>9 view alignment:</b>
		</td>
	</tr>
	<tr align="center">
		<td><img src="/assets/img/filters/stereo-to-multiview/3x3_5_left.png" alt="5 view alignment. From left to right."></td>
		<td><img src="/assets/img/filters/stereo-to-multiview/3x3_9_left.png" alt="9 view alignment. From left to right."></td>
		<td><img src="/assets/img/filters/stereo-to-multiview/3x3_9_right.png" alt="9 view alignment. From right to left."></td>
	</tr>
	<tr align="center">
        	<td>From left to right</td>
		<td>From left to right</td>
		<td>From right to left</td>
	</tr>
</tbody></table>

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/stereo-to-multiview/skydiving_frame33.jpeg" alt="9-view frame" /></td>
</tr>
<tr class="even">
<td>9-view frame</td>
</tr>
</tbody>
</table>

Conversion output format can be also specified to be a sequence of
numbered views or other appropriate way.

## Download

Here you can download our results.

### MSU 3D video

[MSU 3D Demo Video 5 Views. From left to
right.](http://download.graphicon.ru/video/3D-display/msu_3d_video_5view_left.avi)  
[Frame 600](/assets/img/vqmt3d/3d-video-capturing/msu_3d_video_5view_left_frame600.png)

[MSU 3D Demo Video 5 Views. From right to
left.](http://download.graphicon.ru/video/3D-display/msu_3d_video_5view_right.avi)  
[Frame 600](/assets/img/vqmt3d/3d-video-capturing/msu_3d_video_5view_right_frame600.png)

[MSU 3D Demo Video 9 Views. From left to
right.](http://download.graphicon.ru/video/3D-display/msu_3d_video_9view_left.avi)  
[Frame 600](/assets/img/vqmt3d/3d-video-capturing/msu_3d_video_9view_left_frame600.png)

[MSU 3D Demo Video 9 Views. From right to
left.](http://download.graphicon.ru/video/3D-display/msu_3d_video_9view_right.avi)  
[Frame 600](/assets/img/vqmt3d/3d-video-capturing/msu_3d_video_9view_right_frame600.png)

All videos are encoded by XVID codec.

More about 3D video capturing: [MSU 3D Video
Capture](/stereo_quality/3d-video-capturing.html)

### Other multiview video

<table border="0" cellspacing="5" cellpadding="5" align="center">
	<tbody><tr align="center">
		<td colspan="1"> <b>5 view</b> </td>
		<td colspan="2"> <b>9 view</b> </td>
	</tr>
	<tr align="center">
		<td>
			<b>From left to right</b>
		</td>
		<td>
			<b>From left to right</b>
		</td>
		<td>
			<b>From right to left</b>
		</td>
	</tr><tr align="center">
		<td><p><a href="http://download.graphicon.ru/video/3D-display/Skydiving1_5view_left.avi">Skydiving1 ( 5 Views, left )</a><br><a href="/assets/img/filters/stereo-to-multiview/Skydiving1_5view_left_frame0.png">Frame 0</a></p></td>
		<td><p><a href="http://download.graphicon.ru/video/3D-display/Skydiving1_9view_left.avi">Skydiving1 ( 9 Views, left )</a><br><a href="/assets/img/filters/stereo-to-multiview/Skydiving1_9view_left_frame0.png">Frame 0</a></p></td>
		<td><p><a href="http://download.graphicon.ru/video/3D-display/Skydiving1_9view_right.avi">Skydiving1 ( 9 Views, right )</a><br><a href="/assets/img/filters/stereo-to-multiview/Skydiving1_9view_right_frame0.png">Frame 0</a></p></td>
	</tr>	
	<tr align="center">
		<td><p><a href="http://download.graphicon.ru/video/3D-display/Skydiving2_5view_left.avi">Skydiving2 ( 5 Views, left )</a><br><a href="/assets/img/filters/stereo-to-multiview/Skydiving2_5view_left_frame0.png">Frame 0</a></p></td>
		<td><p><a href="http://download.graphicon.ru/video/3D-display/Skydiving2_9view_left.avi">Skydiving2 ( 9 Views, left )</a><br><a href="/assets/img/filters/stereo-to-multiview/Skydiving2_9view_left_frame0.png">Frame 0</a></p></td>
		<td><p><a href="http://download.graphicon.ru/video/3D-display/Skydiving2_9view_right.avi">Skydiving2 ( 9 Views, right )</a><br><a href="/assets/img/filters/stereo-to-multiview/Skydiving2_9view_right_frame0.png">Frame 0</a></p></td>
	</tr>	
	<tr align="center">
		<td><p><a href="http://download.graphicon.ru/video/3D-display/Skull_Rock_5view_left.avi">Skull_Rock ( 5 Views, left )</a><br><a href="/assets/img/filters/stereo-to-multiview/Skull_rock_5view_left_frame420.png">Frame 420</a></p></td>
		<td><p><a href="http://download.graphicon.ru/video/3D-display/Skull_Rock_9view_left.avi">Skull_Rock ( 9 Views, left )</a><br><a href="/assets/img/filters/stereo-to-multiview/Skull_rock_9view_left_frame420.png">Frame 420</a></p></td>
		<td><p><a href="http://download.graphicon.ru/video/3D-display/Skull_Rock_9view_right.avi">Skull_Rock ( 9 Views, right )</a><br><a href="/assets/img/filters/stereo-to-multiview/Skull_rock_9view_right_frame420.png">Frame 420</a></p></td>
	</tr>
	<tr align="center">
		<td><p><a href="http://download.graphicon.ru/video/3D-display/Heidelberg_5view_left.avi">Heidelberg ( 5 Views, left )</a><br><a href="/assets/img/filters/stereo-to-multiview/Heidelberg_5view_left_frame100.png">Frame 100</a></p></td>
		<td><p><a href="http://download.graphicon.ru/video/3D-display/Heidelberg_9view_left.avi">Heidelberg ( 9 Views, left )</a><br><a href="/assets/img/filters/stereo-to-multiview/Heidelberg_9view_left_frame100.png">Frame 100</a></p></td>
		<td><p><a href="http://download.graphicon.ru/video/3D-display/Heidelberg_9view_right.avi">Heidelberg ( 9 Views, right )</a><br><a href="/assets/img/filters/stereo-to-multiview/Heidelberg_9view_right_frame100.png">Frame 100</a></p></td>
	</tr>
	<tr align="center">
		<td><p><a href="http://download.graphicon.ru/video/3D-display/Mouldpenny_5view_left.avi">Mouldpenny ( 5 Views, left )</a><br><a href="/assets/img/filters/stereo-to-multiview/Mouldpenny_5view_left_frame0.png">Frame 0</a></p></td>
		<td><p><a href="http://download.graphicon.ru/video/3D-display/Mouldpenny_9view_left.avi">Mouldpenny ( 9 Views, left )</a><br><a href="/assets/img/filters/stereo-to-multiview/Mouldpenny_9view_left_frame0.png">Frame 0</a></p></td>
		<td><p><a href="http://download.graphicon.ru/video/3D-display/Mouldpenny_9view_right.avi">Mouldpenny ( 9 Views, right )</a><br><a href="/assets/img/filters/stereo-to-multiview/Mouldpenny_9view_right_frame0.png">Frame 0</a></p></td>
	</tr>
</tbody></table>

Authors of films:  
- Skydiving - Eric Deren, Dzignlight Studios  
- Skull Rock - Red Star Studio  
- Heidelberg, Mouldpenny - Meinolf Amekudzi, Dongleware Verlags GmbH  

## Contacts

For questions and proposition please contact us

E-mail: <3dvideo@compression.ru>
