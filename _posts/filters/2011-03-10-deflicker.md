---
original_url: http://compression.ru/video/deflicker/index_en.html
title: VirtualDub MSU Deflicker filter
description: Filter is intended for processing video with flicker effect
preview_img: /assets/img/filters/deflicker/preview.jpg
subprojects: virtualdub public
---

# VirtualDub MSU Deflicker filter

* Project, ideas: Dr. Dmitriy Vatolin  
* Implementation: Kostya Strelnikov

Filter is intended for processing video with flicker effect (fast and
abrupt brightness changes). The effect of flicker is a common
degradation in old movies. Typical example:

<div class="center">
    <div>
        <img src="/assets/img/filters/deflicker/flick_example.jpg" alt="Sequence of frames from movie with flicker"><br>
        <i>Sequence of frames from movie with flicker</i>
    </div>
</div>

Filter is very useful for old movie cleaning task.

## Settings

Filter's interface allows to choose from three work types, and to change
influence degree using ***delicacy*** parameter. You can process frame
by parts in case of irregular flicker (***use break*** mode). If you use
***use blend*** mode then current frame will blend with previous frame
using ***threshold*** parameter. ***Change ground*** parameter sets
initial value for change ground threshold (later threshold will be
defined automatically)

<div class="center">
    <div>
        <img src="/assets/img/filters/deflicker/dialog.gif" alt="Filter settings"><br>
        <i>Filter settings</i>
    </div>
</div>

## Examples

We will compare work of MSU Deflicker filter and Donald Graft's filter.

Let's take as example old movie with World War II chronicles.

<div class="center">
    <div>
        <img src="/assets/img/filters/deflicker/frm_1_from_film_12.jpg" alt="A frame from movie"><br>
        <i>A frame from movie</i>
    </div>
</div>

Let's consider graphs of brightness change by frames.

<div class="center">
    <div><img src="/assets/img/filters/deflicker/graphs_for_film12_en.gif" alt="Brightness change by frames"></div>
</div>

Graph for MSU Deflicker filter has same smoothness as graph of D.Graft's
filter, but MSU Deflicker filter better represents global brightness
change along a movie.

Now let's consider work of the filter in case of frame brightness jump.
We will take other old movie for testing.

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deflicker/frm_18_from_film_02.jpg" alt="frame from the sequence" /></td>
<td><img src="/assets/img/filters/deflicker/frm_19_from_film_02.jpg" alt="next frame from the sequence" /></td>
</tr>
<tr class="even">
<td>A frame from the sequence</td>
<td>The next frame from the sequence</td>
</tr>
</tbody>
</table>

You can compare results of filters below:

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deflicker/frm_19_from_film_02_msu.jpg" alt="frame after MSU Deflicker filter" /></td>
<td><img src="/assets/img/filters/deflicker/frm_19_from_film_02_dg.jpg" alt="frame after Donald Graft&#39;s filter" /></td>
</tr>
<tr class="even">
<td>The frame 19 after MSU Deflicker filter</td>
<td>The frame 19 after Donald Graft's filter</td>
</tr>
</tbody>
</table>

## Download

- [Unpack this file in VirtualDub "Plugins" subfolder. File size is 31
  KB (in
  ZIP)](http://compression.ru/video/deflicker/src/msu_deflicker.zip)
- [Filter license](http://compression.ru/video/license.txt)

## Contacts

* For common questions about filter's work please contact us: <video@graphics.cs.msu.ru>
* For commercial license of this filter (commercial usage is not free) please contact us: <video-licensing@graphics.cs.msu.ru>
