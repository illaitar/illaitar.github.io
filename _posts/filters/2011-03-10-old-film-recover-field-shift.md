---
original_url: http://compression.ru/video/old_film_recover/field_shift_en.html
title: AviSynth MSU FieldShiftFixerFilter
description: Free AviSynth filter for fixing situation when different lines of source frame are placed in different output frames
preview_img: /assets/img/filters/old-film-recover-field-shift/preview.gif
subprojects: public
---

# AviSynth MSU Field Shift Fixer

* Project, ideas: Dr. Dmitriy Vatolin  
* Implementation: Alexey Moskvin

Free AviSynth filter for fixing situation when different lines of source
frame are placed in different output frames. This often occurs during
movie capture, when odd lines are one frame later than even lines. In
films after PAL-&gt;NTSC conversion there is another problem: in two
neighbour frames odd lines are equal and even are different. The main
idea of this filter is searching for the optimal line's position for
current frame. If this position exists, optimal odd lines are placed
into current frame, otherwise (for example when odd lines are in one
frame after even lines and we are in the last frame) the odd field is
interpolated, or no changes are done (behavior depends on filter's
settings). After applying MSU FieldShiftFixer to sequence visual video
quality is improved, and compression and denoising processes give better
results.

## Examples

Let's consider the filter results on a test sequence "4msu2\_25.avi"

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/old-film-recover-field-shift/before.jpg" alt="Frame from film" /><br />
source frame from 4msu2_25.avi</td>
<td><img src="/assets/img/filters/old-film-recover-field-shift/after.jpg" alt="after Filter" /><br />
after filter works</td>
</tr>
</tbody>
</table>

Comparison with deinterlace filter

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/old-film-recover-field-shift/deinterlace.jpg" alt="Deinterlaced frame" /><br />
after deinterlace filter</td>
<td><img src="/assets/img/filters/old-film-recover-field-shift/fsf.jpg" alt="frame, after filter works" /><br />
after MSU FieldShiftFixer filter</td>
</tr>
</tbody>
</table>

On these two pictures you can see that after applying deinterlace filter
to a sequence a lot of details (especially horizontal) are not
reconstructed as well, as with this filter.

## Settings

Installation:  

1. Download AviSynth (for example from
   [www.avisynth.org](http://www.avisynth.org))
2. Create a script (text file with .avs extension):

```
Avisource("video.avi")
ConvertToYUY2()
LoadPlugin("msu_fieldshiftfixer.dll")
MSU_FieldShiftFixer(16,1,1)
ConvertToRGB24()
```

Each line description:  

1. Avisource("4msu2\_27.avi") - path to movie file
2. ConvertToYUY2() - conversion to YUY2
3. LoadPlugin("msu\_fieldshiftfixer.dll") - loading filter. It could be
   placed anywhere, but if the location of the filter differs from the
   location of .avs script, you should specify absolute or relative (to
   .avs file) path.
4. MSU\_FieldShiftFixer(16,1,1) - processing video with MSU
   FieldShiftFixer filter. The first parameter is the step between even
   lines, which are used in calculation (from 1 till 16). By decreasing
   this parameter, you will decrease processing speed, but you will
   also decrease error propability in the detection of the optimal
   field. Sometimes there is no optimal field for border frames, and if
   the second parameter is set to 1, the odd field in border frames
   will be interpolated. And if this parameter is set to 0, there will
   be no modifications in border frames. By setting the third parameter
   to 1 you prevent situation when one frame is duplicated in two
   neighbour frames.
5. ConvertToRGB24() - conversion to RGB

After these steps open .avs in VirtualDub or another video editor or
viewer.

## Download

- [Filter for AviSynth 2.0 and 2.5. File size 37 KB (in
  ZIP)](http://compression.ru/video/old_film_recover/src/msu_fieldshiftfixer.zip)
- [Filter license](http://compression.ru/video/license.txt)

* For common questions about filter's work please contact us: <video@graphics.cs.msu.ru>
* For commercial license of this filter (commercial usage is not free) please contact us: <video-licensing@graphics.cs.msu.ru>
