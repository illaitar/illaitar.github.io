---
original_url: http://compression.ru/video/deinterlacing/index_en.html
title: MSU Deinterlacer / New MSU Full FPS High Quality Deinterlacer
description: We designed a new high quality de-interlacing algorithm. This is a full-fps de-interlacer
preview_img: /assets/img/filters/deinterlacing/preview.gif
---

# MSU Deinterlacer

* Project: Dr. Dmitriy Vatolin
* Implementation, ideas: Maxim Makhinya

Most video sources have interlaced formats (DVD video, Digital video
cameras, most standard television transmissions including HDTV, PAL,
SECAM etc.). However, most modern video display technologies are
progressive based (Plasma panels; LCD TV; CRT High Frequency TV; CRT,
LCD displays etc.) and have difficulty displaying interlaced formats.
That is why the proper transformation, called de-interlacing, is
necessary. We designed a new high quality de-interlacing algorithm. This
is a full-fps de-interlacer i.e. it produces one frame for each field
(for example, it converts 25i -&gt; 50p), so temporal stability and
interpolation of low angle edges was even more attended. Moreover this
algorithm is totally automatic. Some comparisons of our algorithm to
other methods can be found below.

## Results

We have tested our deinterlacer using following sequences: Tennis,
Schumacher and Flag (see screenshots below):

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deinterlacing/tst_01_tens.jpg" alt="screenshot from Tennis sequence" /><br />
Tennis sequence</td>
<td><img src="/assets/img/filters/deinterlacing/tst_02_shum.jpg" alt="screenshot from Shumacher sequence" /><br />
Shumacher sequence</td>
<td><img src="/assets/img/filters/deinterlacing/tst_03_flag.jpg" alt="screenshot from Flag sequence" /><br />
Flag sequence</td>
</tr>
</tbody>
</table>

  
Here are zoomed parts of frames from Tennis and Schumacher sequences:

<div class="center">
    <div>
        <img src="/assets/img/filters/deinterlacing/01_00_src.jpg" alt="Original Part of frame 36 from Tennis"><br>
        <i>Original Part of frame 36 from Tennis</i>
    </div>
</div>
  
<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deinterlacing/01_01_smooth.jpg" alt="Smooth Deinterlacing for frame 36 from Tennis" /><br />
Smooth Deinterlacing</td>
<td><img src="/assets/img/filters/deinterlacing/01_02_proposed.jpg" alt="Proposed Deinterlacing for frame 36 from Tennis" /><br />
<strong>Proposed</strong></td>
<td><img src="/assets/img/filters/deinterlacing/01_03_smart.jpg" alt="Smart Deinterlace for frame 36 from Tennis" /><br />
Smart Deinterlace</td>
</tr>
</tbody>
</table>

<div class="center">
    <div>
        <img src="/assets/img/filters/deinterlacing/00_00_src.jpg" alt="Original Part of frame 20 from Schumacher"><br>
        <i>Original Part of frame 20 from Schumacher</i>
    </div>
</div>
  

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deinterlacing/00_01_smooth.jpg" alt="Smooth Deinterlacing for frame 20 from Schumacher" /><br />
Smooth Deinterlacing</td>
<td><img src="/assets/img/filters/deinterlacing/00_02_proposed.jpg" alt="Proposed Deinterlacing for frame 20 from Schumacher" /><br />
<strong>Proposed</strong></td>
<td><img src="/assets/img/filters/deinterlacing/00_03_smart.jpg" alt="Smart Deinterlace for frame 20 from Schumacher" /><br />
Smart Deinterlace</td>
</tr>
</tbody>
</table>

  
This example shows considerable advantage of the proposed method over
Smooth Deinterlacer and Smart Deinterlace on diagonal edges.  
We have also compared our deinterlacer to commercial solutions. The
following example demonstrates our advantage in a really hard case -
YV12 interlaced source:  

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deinterlacing/02_01_bullet.jpg" alt="Boolet Deinterlacer for frame 67 from Flag" /><br />
Boolet Deinterlacer</td>
<td><img src="/assets/img/filters/deinterlacing/02_02_fieldskit.jpg" alt="FieldsKit Deinterlacer for frame 67 from Flag" /><br />
FieldsKit Deinterlacer</td>
<td><img src="/assets/img/filters/deinterlacing/02_03_hicon.jpg" alt="HiCon Deinterlacer for frame 67 from Flag" /><br />
HiCon Deinterlacer</td>
<td><img src="/assets/img/filters/deinterlacing/02_04_proposed.jpg" alt="Proposed Deinterlacer for frame 67 from Flag" /><br />
<strong>Proposed</strong></td>
</tr>
</tbody>
</table>

  
Our algorithm has also a big advantage on low angle edges:  

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deinterlacing/03_01_bullet.jpg" alt="Boolet Deinterlacer for frame 184 from Flag" /><br />
Boolet Deinterlacer</td>
<td><img src="/assets/img/filters/deinterlacing/03_02_fieldskit.jpg" alt="FieldsKit Deinterlacer for frame 184 from Flag" /><br />
FieldsKit Deinterlacer</td>
<td><img src="/assets/img/filters/deinterlacing/03_03_hicon.jpg" alt="HiCon Deinterlacer for frame 184 from Flag" /><br />
HiCon Deinterlacer</td>
<td><img src="/assets/img/filters/deinterlacing/03_04_proposed.jpg" alt="Proposed Deinterlacer for frame 184 from Flag" /><br />
<strong>Proposed</strong></td>
</tr>
</tbody>
</table>

## References

1. Boolet Deinterlacer - RED GIANT Software Deinterlacing
2. FieldsKit Deinterlacer - RE:Vision Effects, Inc. Deinterlacing
3. HiCon Deinterlacer - Fraunhofer Institut HHI Deinterlacing
4. Smooth Deinterlacing - Smooth Deinterlacing by Gunnar Thalin v.1.1
5. Smart Deinterlace - Smart Deinterlace by Donald Graft v.2.8 beta 1

## Download

Please contact us if you are interested in a commercial license.

E-mail: <video@graphics.cs.msu.ru>

Previous Deinterlacing project: [MSU-Samsung Deinterlacing
Project](/video_filters/deinterlacing-samsung.html)
 