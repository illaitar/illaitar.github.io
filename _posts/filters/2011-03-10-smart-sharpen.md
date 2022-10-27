---
original_url: http://compression.ru/video/smart_sharpen/index_en.html
title: VirtualDub MSU Smart Sharpen Filter
description: The filter allows to enhance image sharpness with minimum noise amplification
preview_img: /assets/img/filters/smart-sharpen/preview.gif
subprojects: virtualdub public
---

# VirtualDub MSU Smart Sharpen Filter

* Project, ideas: Dr. Dmitriy Vatolin  
* Implementation: Maxim Makhinya  
* Optimization: Denis Kubasov, Alexey Moskvin

**Version 1.4 - parameters loading from JOB file fixed**

The filter allows to enhance image sharpness with minimum noise
amplification.  
**New version works 5-8 times faster than previous!**

## Settings

<div class="center">
    <div><img src="/assets/img/filters/smart-sharpen/parameters.gif" alt="Filter settings"></div>
</div>
  
The set of filters allows you to change filter's intensity. Presets,
which contains "borded" in their names provides additional unsharp
mask.  
New version supports VirtualDub jobs and AviSynth  
Script example for AviSynth

```
LoadVirtualDubPlugin("...\Virtual Dub\plugins\msu_sharpen.vdf","MSUSmartSharpen", 0)  
clip=AVISource("D:\Video\test.avi", false, "RGB24")
clip.ConvertToRGB32.MSUSmartSharpen(4)
```
Parameter for MSUSmartSharpen in the third line of the script is number
of preset (from 0 to 5).

## Examples

Let's feed the filter a portrait of M. Lomonosov and study the results.

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/smart-sharpen/lom_src.jpg" alt="Source image" /><br />
Source image</td>
<td><img src="/assets/img/filters/smart-sharpen/lom_max.jpg" alt="Image processed by Smart Sharpen Filter" /><br />
Image processed by Smart Sharpen Filter</td>
</tr>
</tbody>
</table>

Now let us zoom in to see the differences better:

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/smart-sharpen/lom_cut_hend_src.jpg" alt="A fragment of source image" /><br />
A fragment of source image</td>
<td><img src="/assets/img/filters/smart-sharpen/lom_cut_hend_max.jpg" alt="The fragment processed by Smart Sharpen Filter" /><br />
The fragment processed by Smart Sharpen Filter</td>
</tr>
</tbody>
</table>

One more example with Astronaut test image.

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/smart-sharpen/astro_src.jpg" alt="Source image" /><br />
Source image</td>
<td><img src="/assets/img/filters/smart-sharpen/astro_max.jpg" alt="Image processed by Smart Sharpen Filter" /><br />
Image processed by Smart Sharpen Filter</td>
</tr>
</tbody>
</table>

Consider zoomed fragment of the image:

<div class="center">
    <div>
        <img src="/assets/img/filters/smart-sharpen/astro_cut_src.jpg" alt="A fragment of source image"><br>
        <i>A fragment of source image</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/smart-sharpen/astro_cut_max.jpg" alt="The fragment processed by Smart Sharpen Filter"><br>
        <i>The fragment processed by Smart Sharpen Filter</i>
    </div>
</div>

And one more zoomed fragment of Astronaut image:

<div class="center">
    <div>
        <img src="/assets/img/filters/smart-sharpen/astro_cut1_src.jpg" alt="A fragment of source image"><br>
        <i>A fragment of source image</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/smart-sharpen/astro_cut1_max.jpg" alt="The fragment processed by Smart Sharpen Filter"><br>
        <i>The fragment processed by Smart Sharpen Filter</i>
    </div>
</div>

## Download

- [Open this file VirtualDub. Unpacked in the folder "Plugins". File
  size 40 KB (in
  ZIP)](http://compression.ru/video/smart_sharpen/src/smart_sharpen.zip)
- [Filter license](http://compression.ru/video/license.txt)

* For common questions about filter's work please contact us: <video@graphics.cs.msu.ru>
* For commercial license of this filter (commercial usage is not free) please contact us: <video-licensing@graphics.cs.msu.ru>
