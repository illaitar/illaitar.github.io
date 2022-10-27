---
original_url: http://compression.ru/video/logo_removal/index_en.html
title: VirtualDub MSU Logo Remover
description: The filter is intended to remove logo from films
preview_img: /assets/img/filters/logo-removal/preview.gif
subprojects: virtualdub public
---

# VirtualDub MSU Logo Remover 

* Project, ideas: Dr. Dmitriy Vatolin, Dmitriy Kulikov, Sergey Putilin  
* Version 1.2 (MSU Subtitle&Logo Remover): Dmitriy Kulikov  
* Version 2.xx (MSU Logo Remover): Dmitriy Kulikov, Sergey Putilin  
* Version 3.xx (MSU Logo Remover): Erofeev Mikhail

[**DOWNLOAD
3.0b**](http://compression.ru/video/logo_removal/src/msu_logo_remover.zip)  
[**DOWNLOAD
2.3b**](http://compression.ru/video/logo_removal/src/msu_logo_remover_2_3_b.zip)

**New version of filter!**

The filter is intended to remove logo from films.

This filter works with:

- Static opaque logos
- Semi transparent static logos
- Opaque animated logos

### History of versions:

* 3.0b - semi transparent and animated logos are supported now
* 2.3b - fixed bug with crashing on Intel processors
* 2.2b - fixed grammatical errors
* 2.1b - fixed bug with VirtualDub crashing
* 2.0b - first beta version

## Version 3.0b

**Attention! To remove logos using manually created logo mask use 2.3b
version of filter**

Main filter ideas:

- Automatic logo detection
- Three ways for logo removal:
  - Blur
  - Motion compensation for correct logo area filling (Effect of
    objects "crawling" over the subtitles or logo)
  - Subtraction of semi transparent logo using statistical data

### Examples

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/logo-removal/bbc_before.jpeg" alt="Frame from clip" /><br />
source frame</td>
<td><img src="/assets/img/filters/logo-removal/bbc_after.jpeg" alt="after Filter" /><br />
after filter works</td>
</tr>
<tr class="even">
<td><img src="/assets/img/filters/logo-removal/mtvhd_before.jpeg" alt="Frame from clip" /><br />
source frame</td>
<td><img src="/assets/img/filters/logo-removal/mtvhd_after.jpeg" alt="after Filter" /><br />
after filter works</td>
</tr>
</tbody>
</table>

### Download

- [**Open this file VirtualDub. Unpacked in the folder "Plugins". File
  size 90 KB (in
  ZIP)**](http://compression.ru/video/logo_removal/src/msu_logo_remover.zip)
- [Filter User's Guide in
  pdf](http://compression.ru/video/logo_removal/msu_logoremover_userguide_3_0_b.pdf)
- [Filter work example
  (Youtube.com)](http://www.youtube.com/watch?v=hYeHhAx_WvA)
- [Program license for non-commercial
  usage](http://compression.ru/video/license.txt)

## Version 2.3b and earlier

Main filter ideas:

* Automatic logo detection
* Two modes of work (one-pass and two-pass)
* Two ways for logo removal:
  * Blur
  * Motion compensation for correct logo area filling (Effect of objects "crawling" over the subtitles or logo)
* Possibility for manual mask editing (for two-pass mode)

**[Example in AVI (DivX4) video and comparison with LogoAway & X-Logo
filters (1.5
MB)](http://compression.ru/video/logo_removal/msu_delogo_example.avi)**

**[Example in AVI (DivX4) video and comparison with LogoAway & X-Logo
filters (Google
Video)](http://video.google.com/videoplay?docid=4899111878198542822&q=MSU&pl=true)**

### Settings

<div class="center">
    <div><img src="/assets/img/filters/logo-removal/parameters.jpg" alt="Settings of the filter"></div>
</div>

### Examples

Let's consider job of the filter on a test video sequences.

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/logo-removal/logo_before_.jpg" alt="Frame from film" /><br />
source frame from video sequence Schumacher</td>
<td><img src="/assets/img/filters/logo-removal/logo_after_.jpg" alt="after Filter" /><br />
after filter works</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/logo-removal/logo_before.jpg" alt="Frame from film" /><br />
source frame from video sequence Bus</td>
<td><img src="/assets/img/filters/logo-removal/logo_after.jpg" alt="after Filter" /><br />
after filter works</td>
</tr>
</tbody>
</table>

### Download

- [**Open this file VirtualDub. Unpacked in the folder "Plugins". File
  size 90 KB (in
  ZIP)**](http://compression.ru/video/logo_removal/src/msu_logo_remover_2_3_b.zip)
- [Filter User's Guide in pdf (in zip). File size 589
  KB](http://compression.ru/video/logo_removal/msu_logoremover_userguide.zip)
- [Program license for non-commercial
  usage](http://compression.ru/video/license.txt)

### Contacts

* For common questions about filter's work and other issues about it please contact us: <lsremover@compression.ru>
* For commercial license of this filter (commercial usage is not free) please contact us: <video-licensing@graphics.cs.msu.ru>
