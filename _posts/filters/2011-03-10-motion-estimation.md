---
original_url: http://compression.ru/video/motion_estimation/index_en.html
title: VirtualDub MSU Motion Estimation Filter
description: The filter performs multiframe and singleframe motion estimation and compensation in a video stream
preview_img: /assets/img/filters/motion-estimation/susi_residual_1.jpg
subprojects: virtualdub public
---

# VirtualDub MSU Motion Estimation Filter

* Project, idea: Dr. Dmitriy Vatolin  
* Algorithm: Karen Simonyan, Sergey Grishin  
* Implementation: Karen Simonyan  


* MSU Motion Estimation 1.0:  
  * Multiframe motion estimation was added  
  * Filter speedup  
  * Filter interface modified
* MSU Motion Estimation 0.5:  
  * The filter was rewritten from scratch  
  * Algorithm is improved  
  * Filter interface modified  
* MSU Motion Estimation 0.1:  
  * The first public release  

The filter performs multiframe and singleframe motion estimation and
compensation in a video stream. It allows to show macroblocks'
partition, motion vectors and the accuracy of motion vectors as well.

## Settings  

<div class="center">
    <div>
        <img src="/assets/img/filters/motion-estimation/parameters_main.gif" alt="Main filter settings"><br>
        <i>Filter configuration, "Main" property page (the main settings)</i>
    </div>
</div>

**Motion estimation preset** - the preset of motion estimation.  

**Motion estimation algorithm** - the algorithm of motion estimation
from the previous frame.

**Block sizes** - Block sizes used in motion estimation.  
*Maximum block size* - maximum size of a block.  
*Minimum block size* - minimum size of a block.  

**Precision** - precision of motion vector search.  
*Horizontal precision* - horizontal precision of motion vector search.  
    Pixel - pixel precision.  
    Half pixel - half pixel precision.  
    Quarter pixel - quarter pixel precision.  
*Vertical precision* - vertical precision of motion vector search.  
    Pixel - pixel precision.  
    Half pixel - half pixel precision.  
    Quarter pixel - quarter pixel precision.  

**Halfpel interpolation algorithm** - the algorithm of half pixel
interpolation.  

**Number of reference frames** - number of frames, from which motion
estimation is performed. Can take on values from 1 to 10. If 1 reference
frame is selected, singleframe motion estimation is performed.  

**Search radius** - radius of motion vector search area.  
  *Horizontal* - maximum length of motion vector's horizontal
projection. Can take on values from 1 to 100.  
  *Vertical* - maximum length of motion vector's vertical projection.
Can take on values from 1 to 100.  

**Output** - output of the filter.  
  *Compensated frame* - show frame after motion compensation.  
  *Residual after motion compensation* - show the residual between the
original frame and the compensated one.  
  *Residual without motion compensation* - show the residual between the
original frame and the previous one.  

**Borders allowed** - allow compensation from blocks, exceeding the
frame borders.  

<div class="center">
    <div>
        <img src="/assets/img/filters/motion-estimation/parameters_extras.gif" alt="Extra filter settings"><br>
        <i>Filter configuration, "Extras" property page (the additional settings)</i>
    </div>
</div>

**Colorspace** - the colorspace to perform motion estimation in.  

**Output settings** - settings of filter output.  
  *Show MVs* - show motion vectors. The mode is unavailable if *Show
residual without motion compensation* is chosen or the number of
reference frames exceeds 1. The vectors are displayed in different
colors depending on their accuracy if *Force MV's constant color* isn't
chosen.  
  *Show MBs* - show macroblocks' partition. Macroblocks are
drawn in the same color as motion vectors.  
  *Color blocks according to accuracy* - color blocks depending on
motion vector accuracy.  
  *Force MV's constant color* - draw motion vectors in a specified color
not depending on motion vector accuracy.  
  
  *Integer-pixel MV color* - the color of pixel precision motion vectors
and corresponding blocks.  
  *Half-pixel MV color* - the color of half-pixel precision motion
vectors and corresponding blocks.  
  *Quarter-pixel MV color* - the color of quarter-pixel precision motion
vectors and corresponding blocks.  
  *MV color* - the color of all motion vectors, if *Force MV's constant
color* is chosen.  

**Log** - logging of filter statistics.  
The following indexes are saved: the time of filter execution, FPS, the
algorithm of motion estimation, motion vector search area, allowed block
sizes, a mean number of SAD calculations per pixel.  
  *Save log* - save the log in a log-file.  
  *Choose file* - choose a log-file.  

### Job control & AviSynth

The filter supports Job Control, which allows to use it in AviSynth.
Example:  

```
LoadVirtualDubPlugin("...\VirtualDub\plugins\MSU_Motion_Estimation.vdf","MSU_Motion_Estimation", 0)
clip=AVISource("...\clip_input.avi", false, "RGB24")
clip.ConvertToRGB32.MSU_Motion_Estimation(0,16,4,2,2,0,1,32,32,0,1,0,0,0,0,"C:\\statistics.txt")
```

**Parameters**

{:.with-borders}
| # | Description | Allowed values |
|---|-------------|----------------|
|1|Motion estimation algorithm|0 - MSU<br>1 - Full search|
|2|Maximum block size|16 - 16x16<br>8 - 8x8<br>4 - 4x4|
|3|Minimum block size|16 - 16x16<br>8 - 8x8<br>4 - 4x4|
|4|Horizontal precision|0 -pixel precision<br>1 - half pixel precision<br>2 - quarter pixel precision|
|5|Vertical precision|0 -pixel precision<br>1 - half pixel precision<br>2 - quarter pixel precision|
|6|Halfpel interpolation algorithm|0 - 6-tap filter (H.264)<br>1 - bilinear interpolation|
|7|Number of reference frames|from 1 to 10|
|8|Horizontal maximum motion|from 1 to 100|
|9|Vertical maximum motion|from 1 to 100|
|10|Output|0 - compensated frame<br>1 - residual after compensation<br>2 - residual without compensation|
|11|Borders allowed|0 - forbid compensation from blocks, exceeding the frame borders<br>1 - allow compensation from blocks, exceeding the frame borders|
|12|Colorspace|0 - YUV<br>1 - YV12<br>2 - RGB|  
|13|Show MVs|This parameter is ignored in the case of *Output = 2* or *Number of reference frames &gt; 1*<br><br>0 - don't show motion vectors<br>1 - show motion vectors|
|14|Show MBs|0 - don't show macroblocks' partition<br>1 - show macroblocks' partition|
|15|Save log|0 - don't save statistics to a log-file<br>1 - save statistics to a log-file|
|16|File|path to the log-file|

## Examples

#### "Foreman" test sequence, 16x16 block size.

<div class="center">
    <div>
        <img src="/assets/img/filters/motion-estimation/foreman_src_1.jpg" alt="A frame from the sequence"><br>
        <i>A frame from the sequence</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/motion-estimation/foreman_src_2.jpg" alt="The next frame from the sequence"><br>
        <i>The next frame from the sequence</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/motion-estimation/foreman_mv.jpg" alt="Compensated frame with motion vectors"><br>
        <i>Compensated frame with motion vectors, blocks are colored according to motion vectors' accuracy</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/motion-estimation/foreman_residual_1.jpg" alt="Residual without motion compensation"><br>
        <i>Residual without motion compensation</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/motion-estimation/foreman_residual_2.jpg" alt="Residual after motion compensation"><br>
        <i>Residual after motion compensation</i>
    </div>
</div>

#### "Susie" test sequence, 16x16 - 4x4 block sizes.

<div class="center">
    <div>
        <img src="/assets/img/filters/motion-estimation/susi_src_1.jpg" alt="A frame from the sequence"><br>
        <i>A frame from the sequence</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/motion-estimation/susi_src_2.jpg" alt="The next frame from the sequence"><br>
        <i>The next frame from the sequence</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/motion-estimation/susi_mv.jpg" alt="Compensated frame with motion vectors"><br>
        <i>Compensated frame with motion vectors and macroblocks' partition</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/motion-estimation/susi_residual_1.jpg" alt="Residual without motion compensation"><br>
        <i>Residual without motion compensation</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/motion-estimation/susi_residual_2.jpg" alt="Residual after motion compensation"><br>
        <i>Residual after motion compensation</i>
    </div>
</div>

## Download

[This filter for VirtualDub (148 kb, ZIPped)](http://compression.ru/video/motion_estimation/src/motion_estimation.zip)

* For common questions about filter's work please contact us: <video@graphics.cs.msu.ru>
* For commercial license of this filter (commercial usage is not free) please contact us: <video-licensing@graphics.cs.msu.ru>
 