---
original_url: http://compression.ru/video/subtitles_removal/index_en.html
title: VirtualDub MSU Subtitle Remover
description: VirtualDub MSU Subtitle Remover
preview_img: /assets/img/filters/subtitles-removal/preview.gif
subprojects: virtualdub public
---


# VirtualDub MSU Subtitle Remover

* Project, ideas: Dr. Dmitriy Vatolin  
* Version 1.2 (MSU Subtitle&Logo Remover): Dmitriy Kulikov  
* Version 2.0b (MSU Subtitle Remover): Dmitriy Kulikov, Sergey Putilin  
* Version 3.0beta2 (MSU Subtitle Remover): Dmitriy Kulikov, Sergey Putilin, Yuriy Berdnikov

New version of filter for LOGO removal is here [MSU Logo Remover](/video_filters/logo-removal.html)

This filter is a plugin for [VirtualDub (Free!)](http://www.virtualdub.org/)

**New MSU Subtitle Remover 3.0 beta2 is available! [Download filter now](http://compression.ru/video/subtitles_removal/src/msu_subtitle_remover.zip)
Unpack this file in VirtualDub "Plugins" folder.**

Please read [User Manual](/video_filters/subtitles-removal-userguide.html) before E-Mailing us

### What\`s new in 3.0 beta2?

- Fixed bug with "upside-down detection areas"(Thanks for your
  feedback!)
- Fixed minor bugs with highly compressed video
- New processing mode - single pass, no temporary files. Filter
  became more user-friendly

### What\`s new in 3.0 beta?

- New detection algorithm - works up to 2 times faster with less
  memory usage and better quality
- Improved removing algorithm

### Main filter ideas:

- **Static subtitles** - text doesn\`t move for some time
- **2-Pass or single-pass mode** - Detection and removing
- **Possibility of external mask editing**
- **Two subtitle removing methods**
- Blur (Spatial extrapolation)
- Motion compensation for correct subtitle area filling (Effect of
  objects "crawling" over the subtitles)

## Settings

[See filter User's Guide for more
details](/video_filters/subtitles-removal-userguide.html)

![Frame](/assets/img/filters/subtitles-removal/params.png)  
*Screenshots*

## Examples

<img src="/assets/img/filters/subtitles-removal/1.jpg" alt="Frame"><br>
<i>`Cutted` sequence, 10th frame after subtitle appearing, fast linear camera motion</i>

<img src="/assets/img/filters/subtitles-removal/2.jpg" alt="Frame"><br>
<i>`House M.D.` sequence, 12th frame after subtitle appearing, scene change</i>

<img src="/assets/img/filters/subtitles-removal/3.jpg" alt="Frame"><br>
<i>`Friends` sequence, 17th frame after subtitle appearing, camera shaking and slow motion</i>

<img src="/assets/img/filters/subtitles-removal/4.jpg" alt="Frame"><br>
<i>`Anime3` sequence, 17th frame after subtitle appearing, high camera shaking</i>

## Speed tests

<img src="/assets/img/filters/subtitles-removal/speed.gif" alt="Окно настроек"><br>
<i>Speed comparsion of different versions. Measured on AMD Athlon 2200+</i>

## Version history

* 3.0 beta2 - Bugfixes, new single-pass processing mode
* 3.0 beta - Filter completely redesigned: new detection algorithm,
  improved removing algorithm
* 2.2 - 2.2 - fixed bug with VirtualDub crashing
* 2.1 - fixed bug with selecting color for subtitles
* 2.0 - first version of new algorithm

## Download

- [Unpack this file in VirtualDub "Plugins" folder. File size ~150 KB
  (in ZIP)](http://compression.ru/video/subtitles_removal/src/msu_subtitle_remover.zip)
- [Example video (6МB)](http://compression.ru/video/subtitles_removal/subrem_demo.avi)
- [Filter User's Guide. Please, read it!](/video_filters/subtitles-removal-userguide.html)
- [Filter license](http://compression.ru/video/license.txt)
- [Prevous stable version 2.2. (size 133 KB)](http://compression.ru/video/subtitles_removal/src/msu_subrem_22b.zip)

## Contacts

* For common questions about filter's work please contact us: <video@graphics.cs.msu.ru>
* For commercial license of this filter (commercial usage is not free) please contact us: <video-licensing@graphics.cs.msu.ru>
