---
original_url: http://compression.ru/video/super_resolution/super_resolution_en.html
title: MSU Video Super-Resolution Filter
description: This filter increases resolution of video sequence while saving and improving details and reducing artifacts.
preview_img: /assets/img/filters/super-resolution-super-resolution/preview.jpg
---

# MSU Video Super-Resolution Filter

Filter for high-quality video resolution enhancement

* Method ideas: Dr. Dmitriy Vatolin  
* Implementation: Artem Titarenko

**This filter increases resolution of video sequence while saving and
improving details and reducing artifacts.**  

**Main problems of the current approach:**

- **Fixed zooming factor (two times).** Later it will be generalized.
- **No scene change detection.**

## Characteristics

- Processing speed is considerably higher than for other
  SuperResolution approaches known to us
- Upscaling factor should be a power of 2. Other scaling factors are
  also possible, but they result in a relatively lesser quality of
  video due to use of additional common resampling algorithm
- Different presets with various speed/quality trade-off
- Processing is fully automatic
- Processing can be totally consecutive without look ahead at future
  frames
- There is a special algorithm for noisy video upscaling which gives
  smoother images of better visual quality

## Examples

Since the output resolution of video is very large only parts of
sequences are shown.

The first example is from "stefan" sequence:

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/super-resolution-super-resolution/stefan_bic.png" alt="Stefan Bicubic" /><br />
AviSynth Bicubic</td>
<td><img src="/assets/img/filters/super-resolution-super-resolution/stefan_lanc4.png" alt="Stefan Lanczos4" /><br />
AviSynth Lancsoz4</td>
</tr>
<tr class="even">
<td><img src="/assets/img/filters/super-resolution-super-resolution/stefan_topaz.png" alt="Stefan Bicubic" /><br />
Topaz Enhance SR</td>
<td><img src="/assets/img/filters/super-resolution-super-resolution/stefan_sr.png" alt="Stefan Lanczos4" /><br />
<strong>MSU Super-Resolution</strong></td>
</tr>
</tbody>
</table>

The next example is from "news" sequence:

<img src="/assets/img/filters/super-resolution-super-resolution/sr_news_huff.jpg" alt="news"><br>
<i>"news", source video and video processed with MSU Super-Resolution filter<br>
(video is <a href="http://compression.ru/video/super_resolution/videos/sr_news_divx.avi">here</a>, 974 KB)</i>
  
Fragment of the "toy" sequence:

<img src="/assets/img/filters/super-resolution-super-resolution/sr_toy_huff.jpg" alt="news"><br>
<i>"toy", source video and video processed with MSU Super-Resolution filter<br>
(video is <a href="http://compression.ru/video/super_resolution/videos/sr_toy_divx.avi">here</a>, 660 KB)</i>

## Contacts

E-mail: <video@graphics.cs.msu.ru>

Please read [MSU filters
FAQ](/video_filters/video-filters-faq-en.html) before mailing.
