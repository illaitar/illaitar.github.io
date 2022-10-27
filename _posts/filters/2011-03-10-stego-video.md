---
original_url: http://compression.ru/video/stego_video/index_en.html
title: VirtualDub MSU StegoVideo filter (video steganography) / standalone executable
description: Unique tool for hiding information in video (VirtualDub filter/standalone executable)
preview_img: /assets/img/filters/stego-video/preview.png
subprojects: virtualdub public
---

# MSU StegoVideo

* Project, ideas: Dr. Dmitriy Vatolin  
* Implementation: Oleg Petrov

Unique tool for hiding information in video (VirtualDub filter/standalone executable)

MSU StegoVideo allows hiding any file in a video sequence.  
Different popular codecs were analyzed and an algorithm, providing the
smallest data loss after compression, was chosen. Convolutional codes
with Viterbi decoding are used to correct occurred errors.

**Main features:**

- **Small video distortions after hiding info.**
- **It is possible to extract info after video compression.**
- **Information is protected with passcode.**
- **Unique.**

## Settings

You can use MSU StegoVideo as [VirtualDub
filter](http://compression.ru/video/stego_video/src/msu_stegovideo.zip)
or as standalone [.exe
program](http://compression.ru/video/stego_video/src/msu_stegovideo_exe.zip),
independent from VirtualDub. Click links below for instructions:  

[Instructions for standalone
program](/video_filters/stego-video-program-settings.html)

[Instructions for VirtualDub
filter](/video_filters/stego-video-filter-settings.html)

## Examples

This is an example of extracted info.  
\# denotes symbol with mistake. In real file you will see any symbol in
this place.

```
Data hiding, a form of 
steganography, embeds
data into digital media for 
the purpose of identification,
annotation, and copyright.
```
*Source text*

```
Data hiding, a form of 
steg#####aphy, e#beds
d#ta into digital #edia for 
th# purpose of identificat###,
a####ation, and cop#ri###.
```
*Source text hidden in film compressed by DivX  
bitrate 700, framesize 512x384, data redundancy 6.*

```
Data##i##ng, a form of 
steganography, embeds
data into digital media for
the #urpose of identification,
annotation, and copyright.
```
*Source text hidden in film compressed by DivX  
bitrate 700, framesize 512x384, data redundancy 9.*

The number of errors decreases when you increase redundancy!
  
This is an example of distortions in video with info.

<div class="center">
    <div>
        <img src="/assets/img/filters/stego-video/source.jpg" alt="Source frame"><br>
        <i>Source frame</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/stego-video/with-info.jpg" alt="Source frame with hidden info"><br>
        <i>Source frame with hidden info</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/stego-video/compressed.jpg" alt="Compressed frame with hidden info (DivX5 768)"><br>
        <i>Compressed frame with hidden info - information was completely recovered!</i>
    </div>
</div>

Quality of information extracted from compressed video depends on codec,
data redundancy and frame size. The greater information redundancy, the
greater probability of extracting file info without errors.

<div class="center">
    <div>
        <img src="/assets/img/filters/stego-video/diag_xvid.gif" alt="XviD"><br>
        <i>"%of bytes saved - bitrate" dependency for XviD</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/stego-video/diag_divx.gif" alt="DivX"><br>
        <i>"%of bytes saved - bitrate" dependency for DivX</i>
    </div>
</div>

## Download

- [MSU StegoVideo as independent .exe(ZIP, 129
  KB).](http://compression.ru/video/stego_video/src/msu_stegovideo_exe.zip)
- [MSU StegoVideo as VirtualDub filter(ZIP, 57
  KB).](http://compression.ru/video/stego_video/src/msu_stegovideo.zip)
- [Instructions for using program without
  VirtualDub](/video_filters/stego-video-program-settings.html)
- [Instructions for using program with
  VirtualDub](/video_filters/stego-video-filter-settings.html)
- [Filter license](http://compression.ru/video/license.txt)

* For common questions about filter's work please contact us: <video@graphics.cs.msu.ru>
* For commercial license of this filter (commercial usage is not free) please contact us: <video-licensing@graphics.cs.msu.ru>
