---
original_url: http://compression.ru/video/super_resolution/super_precision_en.html
title: MSU Super-Precision Filter
description: Filter is intended for increasing the colour depth of video (bits per pixel) while preserving details and borders.
preview_img: /assets/img/filters/super-resolution-super-precision/preview.gif
---

# MSU Super-Precision Filter
Filter for colour-depth enhancing

* Method ideas: Dr. Dmitriy Vatolin  
* Implementation: Artem Titarenko

**Filter is intended for increasing the colour depth of video (bits per
pixel) while preserving details and borders.**  

Main problem of this method is slow processing speed. But it can be
applied with [MSU
Super-Resolution](/video_filters/video-super-resolution.html)
filter - in this case temporary results of the latter filter will be
used by the former, and they will work together slightly slower than
each taken separately.

## Examples

Filter is applied for colour depth increasing from 5 to 8 bits per
channel. All examples are presented as extracted video frames and video
sequences. Video codec **DivX 4.12** in Quality-based mode was used for
compression.  

The first example is from "amelie" sequence:

<img src="/assets/img/filters/super-resolution-super-precision/sp_amelie_src.jpg" alt="Source frame (5 bits per channel)"><br>
<i>Source frame (5 bits per channel)</i>

<img src="/assets/img/filters/super-resolution-super-precision/sp_amelie_out.jpg" alt="Processed frame (8 bits per channel)"><br>
<i>Processed with MSU Super-Precision filter (8 bits per channel)</i>

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_amelie_src_hist.jpg" alt="Histogram of source frame" /><br />
<i>Histogram of source frame</i></td>
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_amelie_out_hist.jpg" alt="Histogram of processed frame" /><br />
<i>Histogram of processed frame</i></td>
</tr>
</tbody>
</table>

Video is
[here](http://compression.ru/video/super_resolution/videos/sp_amelie_2_divx.avi)
(872 KB).

  
The next example is from "toy" sequence:

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_toy_1_src.jpg" alt="Source frame (5 bits per channel)" /><br />
Source frame<br />
<i>(5 bits per channel)</i></td>
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_toy_1_out.jpg" alt="Processed frame (8 bits per channel)" /><br />
Processed with MSU Super-Precision filter<br />
<i>(8 bits per channel)</i></td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_toy_1_src_hist.jpg" alt="Histogram of source frame" /><br />
<i>Histogram of source frame</i></td>
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_toy_1_out_hist.jpg" alt="Histogram of processed frame" /><br />
<i>Histogram of processed frame</i></td>
</tr>
</tbody>
</table>

  

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_toy_2_src.jpg" alt="Source frame (5 bits per channel)" /><br />
<i>Source frame<br />
(5 bits per channel)</i></td>
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_toy_2_out.jpg" alt="Processed frame (8 bits per channel)" /><br />
<i>Processed with MSU Super-Precision filter<br />
(8 bits per channel)</i></td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_toy_2_src_hist.jpg" alt="Histogram of source frame" /><br />
<i>Histogram of source frame</i></td>
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_toy_2_out_hist.jpg" alt="Histogram of processed frame" /><br />
<i>Histogram of processed frame</i></td>
</tr>
</tbody>
</table>

Video is
[here](http://compression.ru/video/super_resolution/videos/sp_toy_divx.avi)
(742 KB).

  
The next example is from "mobile" sequence:

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_mobile_1_src.jpg" alt="Source frame (5 bits per channel)" /><br />
Source frame<br />
(5 bits per channel)</td>
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_mobile_1_out.jpg" alt="Processed frame (8 bits per channel)" /><br />
Processed with MSU Super-Precision filter<br />
(8 bits per channel)</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_mobile_1_src_hist.jpg" alt="Histogram of source frame" /><br />
Histogram of source frame</td>
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_mobile_1_out_hist.jpg" alt="Histogram of processed frame" /><br />
Histogram of processed frame</td>
</tr>
</tbody>
</table>

  

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_mobile_2_src.jpg" alt="Source frame (5 bits per channel)" /><br />
Source frame<br />
(5 bits per channel)</td>
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_mobile_2_out.jpg" alt="Processed frame (8 bits per channel)" /><br />
Processed with MSU Super-Precision filter<br />
(8 bits per channel)</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_mobile_2_src_hist.jpg" alt="Histogram of source frame" /><br />
Histogram of source frame</td>
<td><img src="/assets/img/filters/super-resolution-super-precision/sp_mobile_2_out_hist.jpg" alt="Histogram of processed frame" /><br />
Histogram of processed frame</td>
</tr>
</tbody>
</table>

## Contacts

E-mail: <video@graphics.cs.msu.ru>

Please read [MSU filters
FAQ](/video_filters/video-filters-faq.html) before mailing.
