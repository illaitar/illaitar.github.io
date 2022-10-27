---
original_url: http://compression.ru/video/ls-codec/screen_capture_codec_en.html
title: MSU Screen Capture Lossless Codec
description: The codec is intended for lossless compression of video taken from computer screen.
preview_img: /assets/img/codecs/screen-capture-lossless-codec/preview.png
subprojects: lossless
---

# MSU Screen Capture Lossless Codec 

* Ideas, implementation: Dmitry Popov  

**News:**  
**\[13.02.2007\] Version 1.2.**  
**\[02.04.2006\] Version 1.1.**  
**\[24.03.2006\] Version 1.0.**  
[**Download!
(v1.2)**](/codecs/screen-capture-lossless-codec.html#Download)

This codec is free for non-commercial use.  
To use it in commercial projects buy a license
[here](http://secure.emetrix.com/order/product.asp?PID=9411326&DID=92287129&ID=&Q=1&DC=&CUR=).
<span id="ChangeLog"></span>

## Changes in version 1.2:

-   Added 16-bit videos support.

## Changes in version 1.1:

-   Support of forcing key frames.
-   Now supports RGB24 and RGB32. Can easily be used in CamStudio.
-   A little better compression. Can play files created with version
    1.0.

**This codec is intended for *lossless* compression of video taken from
computer screen. It may be used for making software presentations, video
lessons and tutorials, recording video from games etc.**

In the future this codec may become a part of [MSU Lossless Video
Codec](/codecs/lossless-video-codec-2004.html).

## Several codecs compression ratio comparison

We've compared results of proposed algorithm with other available codecs
results.

Comparison was made on several sequences captured in DOSBox emulator
from several games (UFO, Jazz Jackrabbit, Test Drive 3, Ultima 6 and
Lemmings). All these games except Lemmings ran in 256 colors mode,
Lemmings ran in 16 colors mode. Sequences descriptions:

<table class="center with-borders" style="text-align: center">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><b>Caption</b></p></td>
<td><p><b>Resolution and number of frames</b></p></td>
</tr>
<tr class="even">
<td><p>geoscape.avi</p></td>
<td><p>320x200, 1971</p></td>
</tr>
<tr class="odd">
<td><p>jazz.avi</p></td>
<td><p>320x200, 1974</p></td>
</tr>
<tr class="even">
<td><p>td3.avi</p></td>
<td><p>320x200, 876</p></td>
</tr>
<tr class="odd">
<td><p>ultima6.avi</p></td>
<td><p>320x200, 2190</p></td>
</tr>
<tr class="even">
<td><p>vgalemmi.avi</p></td>
<td><p>640x350, 4372</p></td>
</tr>
</tbody>
</table>

Here are a couple of frames from those sequences so you can understand
what kind of video we're talking about:  

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/codecs/screen-capture-lossless-codec/ultima.png" alt="ultima6.avi" /></td>
<td><img src="/assets/img/codecs/screen-capture-lossless-codec/jazz.png" alt="jazz.avi" /></td>
</tr>
</tbody>
</table>

Codecs used in comparison are shown in the chart below. In this chart
for each codec it is shown *how many times better than Huffyuv* it
compressed file, i.e. Huffyuv\_file\_size / This\_codec\_file\_size. In
all the codecs maximum compression settings were chosen.

<div style="text-align: center;">
<embed src="/assets/img/codecs/screen-capture-lossless-codec/sc-test.gif">
</div>

Initial sequences were compressed with Zipped Motion Block Video codec
in 8 bits per pixel mode, this is why it's compression ratio is so high.
All the other codecs including MSU Screen Capture Codec worked in RGB24
mode. This chart demonstrates significant advantage of codecs which use
delta-frames compared to the codecs which use only intra frames.

We also compared our codec with TechSmith EnSharpen which "delivers the
highest compression in the industry for screen recording and animated
content"
([link](http://www.techsmith.com/codecs/ensharpen/compression.asp)).  
We took the video sequence (640х480, 214 frames, RGB16) used by
TechSmith to demonstrate its superiority and compressed it with our
codec 2 times better with the same key frame rate, even though EnSharpen
worked in RGB16 and MSU Screen Capture worked in RGB24.  
Resulting file:
[somewins.avi](http://compression.ru/video/ls-codec/somewins.avi) (150
KB).

A frame from this sequence:

<div style="text-align: center;">
<embed src="/assets/img/codecs/screen-capture-lossless-codec/somewins.png">
</div>

Special thanks to Borg No. One for introducing ZMBV codec to us and
inspiration to make a codec for this type of video. <span id="Download"></span>

## Download

**MSU Screen Capture Lossless Codec, version 1.2 from 13.02.2007**

-   [MSU Screen Capture Lossless Codec 1.2, EXE
    installer](http://compression.ru/video/ls-codec/msu-sc-codec.exe)
    (111kb)
-   **[License for MSU VideoGroup
    Software.](http://compression.ru/video/license.txt)**

## Known problems and restrictions:

-   Video image width must be even.
-   (Please let us know if any problems!)

## Contacts

E-mail: <ls-codec@compression.ru>


