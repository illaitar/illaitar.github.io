---
original_url: http://compression.ru/video/segmentation/index_en.html
title: Automatic Segmentation
description: Detection and tracking of foreground objects in video 
preview_img: /assets/img/filters/segmentation/mother_f271_yuv.jpg
---

# Automatic Segmentation 

* Algorithm, ideas: Dr. Dmitriy Vatolin  
* Algorithm, implementation: Sergey Grishin,
Kostya Strelnikov, Maxim Makhinya, Sergey Putilin

Interest in advanced interactivity with multimedia data significantly
increased last years. This causes an advent of new standards proposing
functionality for manipulation with multimedia data (an example of
such a standard is MPEG4). That is why segmentation algorithms find its
application in wide range of areas including content-based
representation of multimedia data, improvement of coding efficiency in
video compression standards, sophisticated query and retrieval of video
and other content-based functionalities for multimedia applications.

Our developed algorithm performs detection and tracking of foreground
(FG) objects in video. This is done by calculation of global motion with
further estimation of local motion. Detection of a FG object position is
then performed based on the information about global and local motion.
The principal advantage of the method is its ability to detect a FG
object even in case of ultra slow motion which is not common for
algorithms of this type. Another important advantages include:

-   adjustable speed/quality trade-off
-   several segmentation precision levels
-   does not require manual segmentation

## Examples

This section contains segmentation results of the developed algorithm and
its comparison with an algorithm developed at University of Florida.

The first example (pic. 1, 2) demonstrates result obtained using
'dancer' test video sequence:

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/segmentation/aas_dancer_f68.jpg" alt="Original frame" width="230" height="275" /></td>
<td><img src="/assets/img/filters/segmentation/aas_dancer_f68_s.jpg" alt="Segmentation result" width="230" height="275" /></td>
</tr>
<tr class="even" >
<td><strong>Pic.1</strong> Original frame</td>
<td><strong>Pic.2</strong> Segmentation result</td>
</tr>
</tbody>
</table>

The second example (pic. 3, 4) shows result obtained using 'table
tennis' test video sequence:

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/segmentation/aas_table_f109.jpg" alt="Original frame" width="230" height="272" /></td>
<td><img src="/assets/img/filters/segmentation/aas_table_f109_s.jpg" alt="Segmentation result" width="230" height="272" /></td>
</tr>
<tr class="even">
<td><strong>Pic.3</strong> Original frame</td>
<td><strong>Pic.4</strong> Segmentation result</td>
</tr>
</tbody>
</table>


The next example (pic. 5, 6) shows segmentation result of 'bus' test
video sequence:

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/segmentation/aas_bus_f113.jpg" alt="Original frame" width="352" height="288" /></td>
<td><img src="/assets/img/filters/segmentation/aas_bus_f113_s.jpg" alt="Segmentation result" width="352" height="288" /></td>
</tr>
<tr class="even">
<td><strong>Pic.5</strong> Original frame</td>
<td><strong>Pic.6</strong> Segmentation result</td>
</tr>
</tbody>
</table>

  
Quality comparison of the developed method and the algorithm of University
of Florida is shown in the pictures below. This example shows the results
for a test video sequence 'mother & daughter'. This sequence has two
obstacles for successful segmentation. The first one is the proximity of
colors belonging to different objects. And the second one (obstacle for
foreground-background classification) is very slow motion of FG objects.
Method of University of Florida produces segments consisting of parts
actually belonging to several objects: the blue segment has parts in the
area of woman's silhouette, blue segment points are presented around
woman's head. However this comparison is not fully correct because
the algorithms perform segmentation of different types.

<div class="center">
<div>
<img src="/assets/img/filters/segmentation/mother_f271.jpg" width="352" height="288" /><br/>
<b>Pic.7</b> Original frame
</div>
</div>

<table class="center" style="text-align: center">
<tbody>
<tr style="vertical-align: top">
<td>
<img src="/assets/img/filters/segmentation/mother_f271_florida.jpg" alt="University of Florida result" width="352" height="288" /><br/> 
<b>Pic.8</b> University of Florida result<br/>
(different segments are marked by different colors)
</td>
<td>
<img src="/assets/img/filters/segmentation/mother_f271_yuv.jpg" alt="Proposed method result" width="352" height="288" /><br/>
<b>Pic.9</b> Proposed method result
</td>
</tr>
</tbody>
</table>

## Download

For commercial license of this filter please contact us via

E-mail: <video-licensing@graphics.cs.msu.ru>
