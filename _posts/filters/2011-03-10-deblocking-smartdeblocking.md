---
original_url: http://compression.ru/video/deblocking/smartdeblocking_en.html
title: VirtualDub MSU Smart Deblocking Filter
description: Filter automatically determines the blockiness' strength on the frame and in the concrete part of it, the processed video contains maximum details from the original video
preview_img: /assets/img/filters/deblocking-smartdeblocking/preview.gif
subprojects: virtualdub
---

# VirtualDub MSU Smart Deblocking Filter 

* Algorithm: Dr. Dmitriy Vatolin, Anton Obuhov, Sergey Grishin  
* Implementation: Anton Obuhov

## About

Filter is intended for recovering quality of video ripped from DVD (for
example, when it contains 4 hours of video data), VideoCD, shot on
cameraphone or after decompressing by DivX, XviD, H.26x (H.261, H.263,
H.264). It performs the accurate blockiness artifact removal, which
appears as the grid of squares laid over the video.

Filter automatically determines the blockiness' strength on the frame
and in the concrete part of it, the processed video contains maximum
details from the original video. The blockiness criterions guarantee the
accurate work of every filter component in both hard and soft blockiness
cases. Thus, filter will process marginally when on scenes with slow
motion, while it will smooth very hard in the case of fast motion in the
same film.

The main advantages of the filter are:

- The processing raises the PSNR quality metric of processed video in
  comparison with the original video
- Real-time processing on 2\*CIF video
- Improved hard blockiness processing (video shot by cameraphones or
  web cameras)
- The unaligned blockiness processing option
- Simple and convenient user interface with the on-the-fly filter
  processing results in the Preview window

The full change list can be found in the "Change log" section.

## Settings

<div class="center">
    <div>
        <img src="/assets/img/filters/deblocking-smartdeblocking/dlgwnd.gif" alt="Filter's interface"><br>
        <i>Filter's interface</i>
    </div>
</div>

Filter's interface allows to adjust the main parameters of processing.  
**Tip:** The "Preview" button allows to instantly observe the results of
filter settings modification.  
**Tip:** You can speed up the processing by unchecking some options.

### Use block preprocessor  
Enables block preprocessing. You can see the example of degraded movie
with a lot of blockiness, deblocked with preprocessing and without it:

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deblocking-smartdeblocking/preproc_src.jpg" /><br />
Decompressed frame</td>
<td><img src="/assets/img/filters/deblocking-smartdeblocking/preproc_off.jpg" /><br />
Without block preprocessing</td>
<td><img src="/assets/img/filters/deblocking-smartdeblocking/preproc_on.jpg" /><br />
With block preprocessing</td>
</tr>
</tbody>
</table>

### Preprocess unaligned  
In case of slow motion unaligned blockiness may appear. Such blockiness
is the problem for the most of deblocking techniques. If the option
"Preprocess unaligned" is checked, the filter searches areas with
unaligned blockiness and processes them. There are some examples
below:  

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deblocking-smartdeblocking/preprocun_src.jpg" /><br />
Decompressed frame</td>
<td><img src="/assets/img/filters/deblocking-smartdeblocking/preprocun_off.jpg" /><br />
Without unaligned<br />
blockiness processing</td>
<td><img src="/assets/img/filters/deblocking-smartdeblocking/preprocun_on.jpg" /><br />
With unaligned<br />
blockiness processing</td>
</tr>
</tbody>
</table>

### Preprocess chroma  
Enables preprocessing of color planes.  
  
<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deblocking-smartdeblocking/preprocchr_src.jpg" /><br />
Decompressed frame</td>
<td><img src="/assets/img/filters/deblocking-smartdeblocking/preprocchr_off.jpg" /><br />
Without chroma preprocessing</td>
<td><img src="/assets/img/filters/deblocking-smartdeblocking/preprocchr_on.jpg" /><br />
With chroma preprocessing</td>
</tr>
</tbody>
</table>

### Process chroma  
Enables processing of color planes.  
  
<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deblocking-smartdeblocking/procchr_src.jpg" /><br />
Decompressed frame</td>
<td><img src="/assets/img/filters/deblocking-smartdeblocking/procchr_off.jpg" /><br />
Without chroma processing</td>
<td><img src="/assets/img/filters/deblocking-smartdeblocking/procchr_on.jpg" /><br />
With chroma processing</td>
</tr>
</tbody>
</table>
  
## Using AviSynth

Filter supports Job Control, and it can be used from AviSynth.
Example:  

```
LoadVirtualDubPlugin("...\MSU_Smart_Deblocking.vdf","MSU_Smart_Deblocking", 0)
clip=AVISource("source.avi", false, "RGB24") 
clip.ConvertToRGB32.MSU_Smart_Deblocking(1, 1, 1, 1)
```

The values passed to the filter in line 3:  
1) Enable block preprocessor (0,1)  
2) Preprocess unaligned (0,1)  
3) Preprocess chroma (0,1)  
4) Process chroma (0,1)

## Examples

Let's take a look on how filter processes the test sequence "Battle"
(XviD, 1-pass, CBR, 100kbs):  

<div class="center">
    <div>
        <img src="/assets/img/filters/deblocking-smartdeblocking/battle608_src.jpg" alt="Decompressed frame"><br>
        <i>Decompressed frame</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/deblocking-smartdeblocking/battle608_msuc.jpg" alt="MSU Deblocking"><br>
        <i>MSU Deblocking</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/deblocking-smartdeblocking/battle608_msus.jpg" alt="MSU Smart Deblocking"><br>
        <i>MSU Smart Deblocking</i>
    </div>
</div>

The next sample is an example of processing the sequence "flower" (XviD,
1-pass, CBR, 100kbs):  
  
<div class="center">
    <div>
        <img src="/assets/img/filters/deblocking-smartdeblocking/flower_src.jpg" alt="Decompressed frame"><br>
        <i>Decompressed frame</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/deblocking-smartdeblocking/flower_msuc.jpg" alt="MSU Deblocking"><br>
        <i>MSU Deblocking</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/deblocking-smartdeblocking/flower_msus.jpg" alt="MSU Smart Deblocking"><br>
        <i>MSU Smart Deblocking</i>
    </div>
</div>


## Download

- [Unpack this file in the folder "Plugins" in VirtualDub directory
  (file size 112
  kb)](http://compression.ru/video/deblocking/src/msu_smartdeblock.zip)

## Change log

**MSU Smart Deblocking 0.8:**  
- Improved block preprocessing algorithm  
- Improved main deblocking algorithm  
- The processing improves the PSNR quality metric of uncompressed and the
- processed videos  
- Speed and memory optimization, in comparison with the version 0.5:
  * without preprocessing - up to 2.7 times
  * with preprocessing - up to 2.4 times
- Real-time processing of 2\*CIF video  
- Simple user interface  
- Removed the "directional filtration" option  
- Fixed problem with yellow hue of the processed video  
  
**MSU Smart Deblocking 0.5:**  
- Improved main deblocking algorithm  
- Improved color processing algorithm  
- Improved blockiness preprocessor  
- Improved unaligned blockiness preprocessor  
- Added directional filtering control (on/off)  
- Added save/load directional filtering parameters in job control  
- Added Edge Sensitivity control  
- Fixed blockiness creation bug in flat background areas  
- Minimal speed optimization  
  
**MSU Smart Deblocking 0.1:**  
- First public release

## See also

- [MSU Deblocking v2.2 filter page, used in comparison
  above](/video_filters/deblocking.html)

## Contacts

* For common questions about filter's work please contact us: <video@graphics.cs.msu.ru>
* For commercial license of this filter (commercial usage is not free) please contact us: <video-licensing@graphics.cs.msu.ru>
