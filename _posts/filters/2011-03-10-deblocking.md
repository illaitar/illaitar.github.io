---
original_url: http://compression.ru/video/deblocking/index_en.html
title: VirtualDub MSU Deblocking Filter / Deblocking filter for reducing "blocking-artifact" in video data
description: Filter is intended for recovering quality of video ripped from DVD
preview_img: /assets/img/filters/deblocking/preview.gif
subprojects: virtualdub public
---

# VirtualDub MSU Deblocking Filter v2.2 

* Algorithm: Dmritriy Vatolin  
* Implementation: Sergey Grishin

Filter is intended for recovering quality of video ripped from DVD (for
example, when it contains 4 hours of video data), VideoCD or after
decompressing by H.261, H.263, DivX 3, DivX 4, XviD.

Filter automatically determines the blockiness's strength on the frame
and in the concrete part of it, preserving the maximum of details. Thus,
filter will process marginally when on scenes with slow motion, while it
will smooth very hard in the case of fast motion in the same film.

The main advantage of the filter is that it raises the integral quality
in the most widespread PSNR metric in comparison with original film.
That is, a film after decompression in comparison with original achieves
the lower quality than a film after decompression and deblocking. (But
for all that the original film is not used nowise, only decompressed
data is used.)

### What's new in version v2.0?

New version in "High quality" mode works 2.1 times faster than v1.2 and
2.4 times faster in "High speed" mode.

- Conversions of color spaces optimized (SSE).
- Horizontal deblocking optimized (ММХ).
- New option of adjusting speed/quality parameter are available (25%
  speed improvement).

Quality raised.

- Algorithm of automatic detection of blockiness level improved (more
  details are preserved).
- Chrominance components processing significantly improved.
- All basic deblocking methods changed. Discontinuities along borders
  of blocks is now absent, image looks more "naturally".

### What's new in version v2.1?

- SSE optimization used only if it is supported by processor and OS
- Bug fixed: log is not created now
- Bug fixed: there is now no crashes during processing of frequencies
  in high resolution

### What's new in version v2.2?

- Bug fixed: automatic SSE support detection is now works correctly
- Possibility of manual SSE instructions disabling in case SSE is
  supported by CPU and OS

## Settings

Filter's interface allows to adjust the quality and the speed of
processing. In "High speed" mode optimized version of horizontal
deblocking works, which has slightly lower quality in comparison to
"High quality" mode. In "High speed" mode filter works 25% faster. Using
U-deblock & V-deblock it is possible to turn on/off the processing of
chrominance components (turning these parameters on noticeably raise the
visual quality). Using "SSE instructions" parameter it is possible to
disable SSE if it is supported by the CPU and OS.

Filter supports Job Control, and it can be used from AviSynth. Example:

```
LoadVirtualDubPlugin("...\VirtualDub\plugins\MSU_DeBlock.vdf","Deblock", 0)
clip=AVISource("...\clip_input.avi", false, "RGB24")clip.ConvertToRGB32.Deblock(1, 1, 1, 1)
```

First filter parameter - U component deblocking  
Second filter parameter - V component deblocking  
Third filter parameter - high quality mode  
Forth filter parameter - SSE instructions utilization

<div class="center">
    <div><img src="/assets/img/filters/deblocking/parameters.gif" alt="The Appearance Of The Filter"></div>
</div>

## Examples

Let's consider the maintenance of the filter by the example of the test
video sequence called "Battle"(The part of film "Terminator 2"). Case of
very low bitrate:

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deblocking/b1.jpg" alt="Frame from decompressed film" /><br />
Frame before processing</td>
<td><img src="/assets/img/filters/deblocking/db11.jpg" alt="Processed by the filter v1.2" /><br />
The same frame after processing by version 1.2</td>
<td><img src="/assets/img/filters/deblocking/db12.jpg" alt="Processed by the filter v2.0" /><br />
The same frame after processing by version 2.0</td>
</tr>
</tbody>
</table>

The next sample is an example of processing the sequence "foreman"
(frame 152, compressed using Xvid with bitrate option 50kbs):

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deblocking/b2.jpg" alt="Frame from decompressed film" /><br />
Frame before processing</td>
<td><img src="/assets/img/filters/deblocking/db21.jpg" alt="Processed by the filter v1.2" /><br />
The same frame after processing by version 1.2</td>
<td><img src="/assets/img/filters/deblocking/db22.jpg" alt="Processed by the filter v2.0" /><br />
The same frame after processing by version 2.0</td>
</tr>
</tbody>
</table>

Examples of filter performance on sequence "battle". Samples are placed
in order of increasing of bitrate (frame 65, compressed using Xvid with
bitrate option 100, 300, 500kbs):

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deblocking/b3.jpg" alt="Frame from decompressed film" /><br />
Frame before processing</td>
<td><img src="/assets/img/filters/deblocking/db3.jpg" alt="Processed by the filter" /><br />
The same frame after processing</td>
</tr>
<tr class="even">
<td><img src="/assets/img/filters/deblocking/b4.jpg" alt="Frame from decompressed " /><br />
Frame before processing</td>
<td><img src="/assets/img/filters/deblocking/db4.jpg" alt="Processed by the filter" /><br />
The same frame after processing</td>
</tr>
<tr class="odd">
<td><img src="/assets/img/filters/deblocking/b5.jpg" alt="Frame from decompressed " /><br />
Frame before processing</td>
<td><img src="/assets/img/filters/deblocking/db5.jpg" alt="Processed by the filter" /><br />
The same frame after processing</td>
</tr>
</tbody>
</table>

Let's consider the maintenance of the filter by the example of test
sequence called "Foreman"(frame 155, compressed using Xvid with bitrate
option 50, 75, 100kbs):

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deblocking/b6.jpg" alt="Frame from decompressed film" /><br />
Frame before processing</td>
<td><img src="/assets/img/filters/deblocking/db6.jpg" alt="Processed by the filter" /><br />
The same frame after processing</td>
</tr>
<tr class="even">
<td><img src="/assets/img/filters/deblocking/b7.jpg" alt="Frame from decompressed " /><br />
Frame before processing</td>
<td><img src="/assets/img/filters/deblocking/db7.jpg" alt="Processed by the filter" /><br />
The same frame after processing</td>
</tr>
<tr class="odd">
<td><img src="/assets/img/filters/deblocking/b8.jpg" alt="Frame from decompressed " /><br />
Frame before processing</td>
<td><img src="/assets/img/filters/deblocking/db8.jpg" alt="Processed by the filter" /><br />
The same frame after processing</td>
</tr>
</tbody>
</table>

There is two branches on the graph: the first (Blocked) corresponds to
the film after decompression, the second one (MSU Deblocking) - to the
film after decompressing and deblocking. The Y-direction is graduated by
Y-PSNR metric of the film in comparison to an original one,
noncompressed film. The X-direction is graduated by the bitrate
(kbit/sec). Thus, it is easy to see that the quality of the film after
deblocking is noticeably higher, at that the lower bitrate the higher
difference.

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deblocking/graph.gif" alt="Graph of quality modification depending on the bitrate" /><br />
Raising of the quality after deblocking</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/deblocking/graph2.gif" alt="Graph of quality modification depending on the bitrate" /><br />
Raising of the quality after deblocking</td>
</tr>
</tbody>
</table>

### License

[Program license for non-commercial
usage](http://compression.ru/video/license.txt)

## Download

- [Unpack this file in the folder "Plugins" in VirtualDub directory.
  File size 68 KB (in
  ZIP)](http://compression.ru/video/deblocking/src/msu_deblock.zip)

## See also

- [MSU SmartDeblocking v0.1 filter page (new deblocking
  algorithm)](/video_filters/deblocking-smartdeblocking.html)

## Contacts

* For common questions about filter's work please contact us: <video@graphics.cs.msu.ru>
* For commercial license of this filter (commercial usage is not free) please contact us: <video-licensing@graphics.cs.msu.ru>
