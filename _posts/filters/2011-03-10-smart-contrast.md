---
original_url: http://compression.ru/video/smart_contrast/index_en.html
title: VirtualDub MSU Smart Brightness and Contrast Filter
description: The filter allows adjusting image brightness and contrast with minimum loss of details, also supports automatic mode
preview_img: /assets/img/filters/smart-contrast/msu_1.jpg
subprojects: virtualdub public
---

# VirtualDub MSU Smart Brightness and Contrast Filter

* Project, ideas: Dr. Dmitriy Vatolin  
* Version 0.5, intraframe algorithm: Maxim Makhinya  
* Version 1.0, interframe algorithm, bug fixing: Alexey Moskvin  

**Version 1.01 - parameters saving to JOB files fixed**

The filter allows adjusting image brightness and contrast with minimum
loss of details, also supports automatic mode.

**Main features**

- **The filter doesn't shine bright areas, and doesn't move dark areas
  to 0 brightness value**, keeping details in them.
- **Automatic brightness tuning mode, when contrast is set** (useful
  for long mixed films).
- **Automatic brightness & contrast adjust mode** (useful for long
  mixed professionally created films).
- **Color correction feature** - usable for hard contrast correction
  of nearly black-and-white movies.
- **Adjustable intraframe contrast & brightness accuracy.**
- **Controllable noise influence in final parameters** in automatic
  parameters calculation.
- **Careful intrascene modification of parameters.**
- **Automatic detection of scene replacement.**
- **Supports Job Control and AviSynth.**

## Settings

In the filter's setting:

- The set of presets for brightness & contrast (auto correcting manual
  settings, full auto mode, manual settings, some brightness/contrast
  presets)
- Settings for decrease / increase color component of image
- Settings for selecting image borders, which allows to prevent hard
  bright/dark noise influence in filter's work (with set of presets)
- Mode, when global brightness & contrast settings are recalculated
  after scene change only and are become more stable during one scene.

<div class="center">
    <div><img src="/assets/img/filters/smart-contrast/parameters.gif" alt="Filters main window"></div>
</div>

Settings:  
*Brightness & Contrast Settings*  

1. **Contrast** - contrast adjust (&gt;1 - increase, &lt;1 - decrease)
2. **Brightness** - brightness shift
3. **Color Correction** - &gt;0 - increase color component, &lt;0 -
   decrease color component
4. **Intraframe accuracy** - threshold, if it is exceeded brightness &
   contrast coefficients are "blurred" for better details processing

*Advanced Settings*

1. **Histogram calculating** - selecting histogram calculating method
   (for decreasing noise influence).
2. **Threshold percent** - threshold, if you will increase it, the more
   number of details will be processed like a noise
3. **MIN brightness, MAX brightness**- brightness borders. If some
   parts of image will exceed these borders after brightness / contrast
   correction, these parameters will be recalculated.
4. **Scene change detection** - watch on scene replacement
5. **Threshold** - threshold, used for scene replacement detection

Script example for AviSynth

```
LoadVirtualDubPlugin("...\Virtual Dub\plugins\MSU_SmartBrightness.vdf","MSUSmartBrightness", 0)  
clip=AVISource("D:\Video\Samples\MSU.avi", false, "RGB24")
clip.ConvertToRGB32.MSUSmartBrightness(0, 150, 100, 0)
```
  
* First parameter - number of brightness & contrast preset (0 - Auto (1): correcting manual settings, 1 - Auto (2): calculating contrast & brightness etc.)
* Second parameter - value of Contrast, multiplied by 100 (from 50 to 400)
* Third parameter - value of Brightness  
* Fourth parameter - value ColorCorrection, multiplied by 100 (from -100 to 100)

## Examples

We shall compare Smart Brightness and Contrast Filter to Photoshop
filter using a portrait of M. Lomonosov as the first example.

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/smart-contrast/lomonosov_src.jpg" alt="Source image" /><br />
Source image</td>
<td><img src="/assets/img/filters/smart-contrast/lomonosov_phot.jpg" alt="Image processed by Photoshop" /><br />
Image processed by Photoshop</td>
<td><img src="/assets/img/filters/smart-contrast/lomonosov_max.jpg" alt="Image processed by the Filter" /><br />
Image processed by the Filter</td>
</tr>
</tbody>
</table>

Let us zoom in so as to see the differences better and take a close look
at areas outlined in red.

<div class="center">
    <div>
        <img src="/assets/img/filters/smart-contrast/lom_cut_hend_src_select.jpg" alt="Source image"><br>
        <i>Source image</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/smart-contrast/lom_cut_hend_phot.jpg" alt="Image processed by Photoshop"><br>
        <i>Image processed by Photoshop</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/smart-contrast/lom_cut_hend_max.jpg" alt="Image processed by the Filter"><br>
        <i>Image processed by the Filter</i>
    </div>
</div>

The left histogram tells that Photoshop cares little about bright and
dark pixels, it simply washes or blacks them out. The right one tells
that the filter tends to keep maximum detail and takes good care of
bright and dark pixels.

And one more similar example with histograms.

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/smart-contrast/astronaut_cut_src_select.jpg" alt="Source image" /><br />
Source image</td>
<td><img src="/assets/img/filters/smart-contrast/astronaut_cut_src_hist.gif" alt="Histogram of source image" /><br />
Histogram of source image</td>
</tr>
<tr class="even">
<td><img src="/assets/img/filters/smart-contrast/astronaut_cut_phot.jpg" alt="Image processed by Photoshop" /><br />
Image processed by Photoshop</td>
<td><img src="/assets/img/filters/smart-contrast/astronaut_cut_max.jpg" alt="Image processed by the Filter" /><br />
Image processed by the Filter</td>
</tr>
<tr class="odd">
<td><img src="/assets/img/filters/smart-contrast/astronaut_cut_phot_hist.gif" alt="Histogram" /><br />
Histogram</td>
<td><img src="/assets/img/filters/smart-contrast/astronaut_cut_max_hist.gif" alt="Histogram" /><br />
Histogram</td>
</tr>
</tbody>
</table>

<div class="center">
    <div>
        <img src="/assets/img/filters/smart-contrast/msu_1.jpg" alt="MSU_2"><br>
        <i>Frames from sequence MSU.avi:</i>
    </div>
</div>

- Original frames
- Processed with Brightness &amp; Contrast from Photoshop
- Processed with MSU Smart Brightness &amp; Contrast in automatic mode (auto correcting manual settings)

<div class="center">
    <div><img src="/assets/img/filters/smart-contrast/msu_2.jpg" alt="MSU_1"></div>
</div>

## Download

- [Filter for VirtualDub (ZIP, 34
  KB).](http://compression.ru/video/smart_contrast/src/msu_smart_brightness.zip)
  To use, unpack to plugin folder.
- [Filter license](http://compression.ru/video/license.txt)

* For common questions about filter's work please contact us: <video@graphics.cs.msu.ru>
* For commercial license of this filter (commercial usage is not free) please contact us: <video-licensing@graphics.cs.msu.ru>
