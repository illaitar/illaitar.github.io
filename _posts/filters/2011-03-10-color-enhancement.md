---
original_url: http://compression.ru/video/color_enhancement/index_en.html
title: MSU Color Enhancement
description: MSU Color Enhancement filter
preview_img: /assets/img/filters/color-enhancement/preview.gif
subprojects: public
---

# MSU Color Enhancement 

* Project, ideas: Dr. Dmitriy Vatolin, Dmitriy Kulikov, Valentina Rudneva  
* Implementation: Valentina Rudneva

[**DOWNLOAD**](http://compression.ru/video/color_enhancement/src/msu_color_enhancement.zip) 

**New filter version!**

Project now is in beta-testing stage

Filter is used for video quality improving:

- [HDR (High Dynamic
  Range)](http://en.wikipedia.org/wiki/High_dynamic_range_imaging)
  compression
- Shadowed colors and details restoring
- Light-struck colors and details restoring
- Faded colors restoring

## Settings

New version improvements:

- Speed
- Interface usability
- Frame processing algorithm is switched to more efficient HDR frames
  rendering

Settings dialog allows to change:

- Frame illumination only
- Frame colors only
- Frame illumination and colors simultaneously

<div class="center">
    <div>
        <img src="/assets/img/filters/color-enhancement/filter.jpg" alt="Settings of the filter"><br>
        <i>Filter's interface</i>
    </div>
</div>

*Correct illumination*

<div class="center">
    <div>
        <img src="/assets/img/filters/color-enhancement/filter_illumination.jpg" alt="Filter's interface - illumination enhancement"><br>
        <i>Filter's interface - illumination enhancement</i>
    </div>
</div>

1. Source image has very bright and very dark region - Processing image
   has HDR frames. Control using makes contrast low.
2. Brighten dark region - Allows to illuminate dark frame regions. Dark
   regions won't be processed if control value is equal to zero.
3. Reduce bright region - Allows to restore light-struck frame regions.
   Light regions won't be processed if control value is equal to zero.

*Correct colors*

<div class="center">
    <div>
        <img src="/assets/img/filters/color-enhancement/filter_color.jpg" alt="Filter's interface - color enhancement"><br>
        <i>Filter's interface - color enhancement</i>
    </div>
</div>

1. Correct colors - Saturation setting control. If value is set in zero
   saturation won't be changed. **Note: recommended in use with Auto
   Levels.**
2. Auto levels - Automatic levels correction. One reflects source frame
   illumination to all allowed illumination range.

Let's consider job of the filter on a test rollers.

## Examples

### Filter work examples on HDR frames

<table style="text-align: center">
<tbody>
<tr>
<td><img src="/assets/img/filters/color-enhancement/example1_before.jpg" alt="Frame from film" id="IMG2" /><br />
Source image</td>
<td><img src="/assets/img/filters/color-enhancement/example1_after.jpg" alt="After Filter" /><br />
Image processed by MSU Color Enhancement</td>
</tr>

<tr>
<td><img src="/assets/img/filters/color-enhancement/example2_before.jpg" alt="Frame from film" /><br />
Source image</td>
<td><img src="/assets/img/filters/color-enhancement/example2_after.jpg" alt="After Filter" /><br />
Image processed by MSU Color Enhancement</td>
</tr>

<tr>
<td><img src="/assets/img/filters/color-enhancement/example3_before.jpg" alt="Frame from film" /><br />
Source image</td>
<td><img src="/assets/img/filters/color-enhancement/example3_after.jpg" alt="After Filter" /><br />
Image processed by MSU Color Enhancement</td>
</tr>
</tbody>
</table>

### Filter work examples on faded frames

<table style="text-align: center">
<tbody>
<tr style="vertical-align: top">
<td><img src="/assets/img/filters/color-enhancement/example4_before.jpg" alt="Frame from film" id="IMG2" /><br />
Source image</td>
<td><img src="/assets/img/filters/color-enhancement/example4_after.jpg" alt="After Filter" /><br />
Image processed by MSU Color Enhancement</td>
<td><img src="/assets/img/filters/color-enhancement/example4_saturation.jpg" alt="After saturation" /><br />
After saturation</td>
</tr>

<tr style="vertical-align: top">
<td><img src="/assets/img/filters/color-enhancement/example5_before.jpg" alt="Frame from film" id="IMG2" /><br />
Source image</td>
<td><img src="/assets/img/filters/color-enhancement/example5_after.jpg" alt="After Filter" /><br />
Image processed by MSU Color Enhancement</td>
<td><img src="/assets/img/filters/color-enhancement/example5_saturation.jpg" alt="After saturation" /><br />
After saturation</td>
</tr>

<tr style="vertical-align: top">
<td><img src="/assets/img/filters/color-enhancement/example6_before.jpg" alt="Frame from film" id="IMG2" /><br />
Source image</td>
<td><img src="/assets/img/filters/color-enhancement/example6_after.jpg" alt="After Filter" /><br />
Image processed by MSU Color Enhancement</td>
<td><img src="/assets/img/filters/color-enhancement/example6_saturation.jpg" alt="After saturation" /><br />
After saturation</td>
</tr>
</tbody>
</table>

## Download

- [Unpack this file into the VirtualDub "Plugins" folder. File size
  115 KB (in
  ZIP)](http://compression.ru/video/color_enhancement/src/msu_color_enhancement.zip)
- [Old Color Restoration filter
  page](/video_filters/old-color-restoration.html)

## Contants

* For common questions about filter's work please contact us: <color-filter@graphics.cs.msu.ru>
* For commercial license of this filter (commercial usage is not free) please contact us: <video-licensing@graphics.cs.msu.ru>
