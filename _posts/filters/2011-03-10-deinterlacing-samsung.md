---
original_url: http://compression.ru/video/deinterlacing_samsung/index_en.html
title: MSU-Samsung Deinterlacing Project (to deinterlace video)
description: The filter is designed to suppress comb effect, also known as interlacing, in motion pictures
preview_img: /assets/img/filters/deinterlacing-samsung/tennis.jpg
---

# MSU-Samsung Deinterlacing Project

<table>
<tbody>
<tr class="odd">
<td style="text-align: left;"><img src="/assets/img/filters/deinterlacing-samsung/samsung.gif" /></td>
<td style="text-align: right;"><img src="/assets/img/filters/deinterlacing-samsung/gm_lab_vg.gif" /></td>
</tr>
</tbody>
</table>

* Method ideas, project: Dr. Dmitriy Vatolin
* Implementation, ideas: Denis Kubasov, Sergey Putilin, Maxim Makhinya

The filter is designed to suppress comb effect, also known as
interlacing, in motion pictures. As opposed to other available filters,
MSU Deinterlacing uses a balanced combination of 8 filters to ensure
better picture quality.

## Examples

We shall compare MSU Deinterlacing Filter to Smart Deinterlace (one of
the best available filters written by Donald Graft) using 3 test
sequences.

The first example is frame No. 9 from sequence 'Helicopter'.

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deinterlacing-samsung/helicopter_9_src.jpg" alt="A frame from the sequence" /><br />
A frame from the sequence</td>
<td><img src="/assets/img/filters/deinterlacing-samsung/helicopter_9_cut_src_select.jpg" alt="A fragment of the frame" /><br />
A fragment of the frame</td>
</tr>
<tr class="even">
<td><img src="/assets/img/filters/deinterlacing-samsung/helicopter_9_cut_msu.jpg" alt="The fragment processed by MSU Deinterlacing" /><br />
The fragment processed by MSU Deinterlacing</td>
<td><img src="/assets/img/filters/deinterlacing-samsung/helicopter_9_cut_smart.jpg" alt="The fragment processed by Smart Deinterlace" /><br />
The fragment processed by Smart Deinterlace</td>
</tr>
</tbody>
</table>

It's easy to see that image feature outlined in red looks much better on
the left picture. Smart Deinterlace made it blocky, while MSU
Deinterlacing did better job at image reconstruction.

The next example:

<div class="center">
    <div>
        <img src="/assets/img/filters/deinterlacing-samsung/flag_src.jpg" alt="A frame from the sequence"><br>
        <i>A frame from the sequence</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/deinterlacing-samsung/flag_msu.jpg" alt="The frame processed by MSU Deinterlacing"><br>
        <i>The frame processed by MSU Deinterlacing</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/deinterlacing-samsung/flag_smart.jpg" alt="The frame processed by Smart Deinterlace"><br>
        <i>The frame processed by Smart Deinterlace</i>
    </div>
</div>

Consider fragment of the frame:

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deinterlacing-samsung/flag_msu_cut.jpg" alt=" The fragment processed by MSU Deinterlacing" /><br />
The fragment processed by MSU Deinterlacing</td>
<td><img src="/assets/img/filters/deinterlacing-samsung/flag_smart_cut.jpg" alt=" The fragment processed by Smart Deinterlace" /><br />
The fragment processed by Smart Deinterlace</td>
</tr>
</tbody>
</table>

The next example is fragment of frame No. 92 from Schumacher sequence.

<div class="center">
    <div>
        <img src="/assets/img/filters/deinterlacing-samsung/shumacher_92_cut1_src.jpg" alt="A fragment of the frame"><br>
        <i>A fragment of the frame</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/deinterlacing-samsung/shumacher_92_cut1_msu.jpg" alt="The fragment processed by MSU Deinterlacing"><br>
        <i>The fragment processed by MSU Deinterlacing</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/deinterlacing-samsung/shumacher_92_cut1_smart.jpg" alt="The fragment processed by Smart Deinterlace"><br>
        <i>The fragment processed by Smart Deinterlace</i>
    </div>
</div>

Frames from sequences tennis & mobl:  
AlparySoft, Decomb and MSU SMC deinterlacer.

<div class="center">
    <div><img src="/assets/img/filters/deinterlacing-samsung/tennis.jpg" alt="AlparySoft, Decomb, MSU"></div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/deinterlacing-samsung/mobl.jpg" alt="AlparySoft, Decomb, MSU"><br>
        <i>AlparySoft, Decomb, MSU</i>
    </div>
</div>

## Download

**This filter was developed from October 2002 to May 2003 by group and
from May 2003 in collaboration with SAIT (Samsung Advanced Institute of
Technology) so currently filter is unavailable due to contract
limitations.**

- [Deinterlacing filters comparison on tennis (DivX 4,
  1.4Mb)](http://compression.ru/video/deinterlacing_samsung/tennis.avi)
- [Deinterlacing filters comparison on mobl (DivX 4,
  1.8Mb)](http://compression.ru/video/deinterlacing_samsung/mobl.avi)

E-mail: <video@graphics.cs.msu.ru>

Please read [MSU filters FAQ](/video_filters/video-filters-faq-en.html) before mailing.

**New Deinterlacing project: [MSU Deinterlacer](/video_filters/deinterlacing.html)**
