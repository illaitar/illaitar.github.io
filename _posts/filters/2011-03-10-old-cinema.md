---
original_url: http://compression.ru/video/old_cinema/index_en.html
title: VirtualDub MSU Old Cinema Filter 2.0
description: This filter is intended to achieve an "Old cinema" effect
preview_img: /assets/img/filters/old-cinema/half.jpg
subprojects: virtualdub public
---

# VirtualDub MSU OldCinema Filter 2.0

* Algorithm: Dr. Dmitriy Vatolin  
* Implementation: Vladimir Popov, Nikolai Trunichkin

This filter is intended to achieve an "Old cinema" effect. You can vary
color correction algorithm and add various artifacts, so video looks
like "chronicle".

## Features

- Several color correction types
- Vertical Stripes
- Small and large noise
- Emulsion exfoliation effect

## Changes in version 2.0

- Improved vertical scratch generation algorithm
- Added large spots generation algotithm
- Added new color correction algorithms
- Improved spots: black and white, and various sizes
- Added image flicking

## Settings

Filter has simple and advanced settings:

<div class="center">
    <div><img src="/assets/img/filters/old-cinema/mainwindow.jpg" alt="Filter settings"></div>
</div>

Filter supports VirtualDub job control, so it is usable in AviSynth.
Example:

```
LoadVirtualDubPlugin("..\VirtualDub\plugins\MSU Old cinema.vdf","Old_cinema", 0)
clip=AVISource("D:\work\video\film.avi", false, "RGB24")
return clip.ConvertToRGB32.Old_cinema(247, 223, 181, 0, 1, 10, 10, 15, 70, 3, 20, 5, 50, 150, 0, 1, 100)
```

## Filter parameters

<div class="center">
    <div><img src="/assets/img/filters/old-cinema/settings_avisynth.jpg" alt="Parameters filter"></div>
</div>

**Filter parameters:**  

- **16\.** Color correction  
  No Changes - there is no color correction  
  Manual Linear - linear transform from color to black&white video  
  **1\.** Red - Correct red color  
  **2\.** Green - Correct green color  
  **3\.** Blue - Correction Blue parameter  
  Yellow Shift - colors are faded to yellow  
  Blue Shift - colors are faded to blue  
- **Fade effect**  
  **4\.** True/False activate effect transfer from "Color cinema" to
  "Old cinema"  
  **5\.** If True then we transfer from "Color cinema" to "Old cinema",
  if False then transfer from "Old cinema" to "Color cinema"  
  **6\.** Start frame number  
  **7\.** Duration of transfer (in frames)  
- **Roller\`s track**  
  **8\.** Number of tracks  
  **9\.** Clarity tracks  
- **Scratch settings**  
  **10\.** Number of scratches  
  **11\.** Probability of scratch  
  **12\.** How many frames scratch will be shown  
  **13\.** Clearness of scratch  
  **17\.** Scratch thickness
- Border fade  
  **14\.** Shape of ellipse. If this parameter is greater, ellipse
  transforms into rectangle  
  **15\.** Fade sharpness. If this parameter is greater, pixels outside
  ellipse fade less
- Show noise - display large noise
- Screen shivering
- Effect light lamp - colours are faded at the image border
- Random noise on screen - display small noise
- Flicking - light intensity is changes randomly
- Big noise - display large spots

## Examples

Let's consider results of the filter on a test sequence "Foreman".

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/old-cinema/normal-1.jpg" alt="Frame from film" /><br />
source frame from "Foreman"sequence</td>
<td><img src="/assets/img/filters/old-cinema/old-1.jpg" alt="after Filter" /><br />
after MSU Old Cinema, use "Yellow shift" color correction</td>
</tr>
</tbody>
</table>

The next example demonstrates the usage of the "Real old cinema" preset.
Certainly, you can adjust the amount of noise, spot, scratches and other
types of artifacts regardless of the preset as every film features its
own adjustments.

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/old-cinema/normal-2.jpg" alt="sourse frame, from film Terminator-2" /><br />
source frame from "Foreman" sequence</td>
<td><img src="/assets/img/filters/old-cinema/old-2.jpg" alt="frame, after filter works" /><br />
after filter MSU Old Cinema work<br />
(preset "Real old cinema")</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/old-cinema/normal-3.jpg" alt="исходный кадр из фильма" /><br />
source frame from "Flower" sequence</td>
<td><img src="/assets/img/filters/old-cinema/old-3.jpg" alt="кадр, обработанный MSU Old cinema" /><br />
after filter MSU Old Cinema work<br />
(preset "Real old cinema")</td>
</tr>
</tbody>
</table>

<div class="center">
    <div><img src="/assets/img/filters/old-cinema/half.jpg" alt=""></div>
</div>

## Download

- [Filter "MSU Old Cinema 2.0". Open this file with VirtualDub.
  Unpacked in the folder "Plugins". File size 85.0 KB (in
  ZIP)](http://compression.ru/video/old_cinema/src/msu_oldcinema.zip)
- [Previous faster version of filter "MSU Old Cinema 1.7". File size
  46.0 KB (in
  ZIP)](http://compression.ru/video/old_cinema/src/msu_oldcinema_17.zip)
- [Filter license](http://compression.ru/video/license.txt)

* For common questions about filter's work please contact us: <video@graphics.cs.msu.ru>
* For commercial license of this filter (commercial usage is not free) please contact us: <video-licensing@graphics.cs.msu.ru>
