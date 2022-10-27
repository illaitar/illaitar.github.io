---
original_url: http://compression.ru/video/ls-codec/index_en.html
title: MSU Lossless Video Codec
description: The codec gives the highest compression ratio in the lossless video compression field.
preview_img: /assets/img/codecs/lossless-video-codec/preview.gif
subprojects: lossless
---

# MSU Lossless Video Codec<br/>gives the highest compression ratio in the lossless video compression field

* Project, ideas: Dmitriy Vatolin  
* Ideas, algorithm realization: Dmitry Popov  
* Ver.0, denoising, motion compensation: Sergey Putilin

**News:**
- \[19.09.2005\] Version 0.6.0 released.  
- \[20.03.2005\] Version 0.5.8 released.  
- \[14.02.2005\] Version 0.5.6 released.  
- \[06.02.2005\] Version 0.5.2 released.  
- \[01.10.2004\] Version 0.2.4 patched - with Uninstall & Win98 support!  
- \[24.09.2004\] Version 0.2.4 released with some installer's bugfixes!**  
[**Download now!
(v0.6.0)**](/codecs/lossless-video-codec-2004.html#Download)

This codec is free for non-commercial use.  
To use it in commercial projects buy a license
[here](http://secure.emetrix.com/order/product.asp?PID=94113038&DID=92287129&ID=&Q=1&DC=&CUR=).

## Changes in version 0.6.0:

-   New compression algorithm implemented. Compression speed increased
    1.5-2 times, decompression speed increased 2-2.5 times!
-   New interface: more simple and clear.
-   Can decompress files created by 0.5.x version, can compress with the
    old algorithm also.

## Changes in version 0.5.8:

-   Now stable in Win98.
-   Visually lossless mode now faster (+10-12%) and with better
    compression

## Changes in version 0.5.6:

-   Compression speed increased 1.7 times!
-   Small fix in compressed image view in VirtualDub.

## Changes in version 0.5.2:

-   Better compression (up to +10%)!
-   Compression speed increased 2.5 times!
-   Added YV12 support. Now taking as input RGB24, RGB32, YUY2, YUYV and
    YV12.
-   Now works in Adobe Premiere.
-   Controllable compressing speed.
-   P-frames can be disabled, key-frames max interval can be set.
-   VirtualDub jobs support.
-   And main advantage - new MSU photo! ;)

**This codec is intended for *lossless* video compression (used for
saving master copies or intermediate rendering results).**

## Several codecs compression ratio comparison

We've compared results of proposed algorithm with other available codecs
results.

The comparison was made mostly on classic sequences frequently used for
codecs comparisons, their descriptions are given below. Also we added
two sequences ms2.avi and ms32.avi taken from "The Matrix: Reloaded"
movie passed through DivX.

<table class="center" style="text-align: left; margin-left: auto; margin-right: auto;" border="0" cellpadding="10" cellspacing="1">
  <tbody>
    <tr>
      <td style="border-style: solid none; border-color: green -moz-use-text-color; border-width: 1.5pt medium 0.75pt; vertical-align: middle; padding-top: 0cm; padding-bottom: 0cm;">
      <p style="margin: 0cm 0cm 0.0001pt;">Caption</p>
      </td>
      <td style="border-style: solid none; border-color: green -moz-use-text-color; border-width: 1.5pt medium 0.75pt; vertical-align: middle; padding-top: 0cm; padding-bottom: 0cm;">
      <p>Resolution and number of frames<br>
</p>
      </td>
      <td style="border-style: solid none; border-color: green -moz-use-text-color; border-width: 1.5pt medium 0.75pt; vertical-align: middle; padding-top: 0cm; padding-bottom: 0cm;">
      <p align="center">File size, Mb</p>
      </td>
    </tr>
    <tr>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt;">bus.avi</p>
      </td>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt;">352x288,
150</p>
      </td>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <div style="text-align: center;"> </div>
      <p class="MsoNormal" style="margin: 0cm 0cm 0.0001pt; text-align: center;">43,52<span style="font-size: 10pt;"></span></p>
      </td>
    </tr>
    <tr>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt;">flower.avi</p>
      </td>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt;">352x288,
250</p>
      </td>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <p class="MsoNormal" style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">72,52<span style="font-size: 10pt;"></span></p>
      </td>
    </tr>
    <tr>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt;">foreman.avi</p>
      </td>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt;">352x288,
300</p>
      </td>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <p class="MsoNormal" style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">87,03<span style="font-size: 10pt;"></span></p>
      </td>
    </tr>
    <tr>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt;">mobl(resized).avi</p>
      </td>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt;">352x288,
373</p>
      </td>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <p class="MsoNormal" style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">108,2<span style="font-size: 10pt;"></span></p>
      </td>
    </tr>
    <tr>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt;">waterfall.avi</p>
      </td>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt;">352x288,
260</p>
      </td>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <p class="MsoNormal" style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">75,42<span style="font-size: 10pt;"></span></p>
      </td>
    </tr>
    <tr>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt;">ms2.avi</p>
      </td>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt;">640<span>x272, 250</span></p>
      </td>
      <td style="border: medium none ; padding: 0cm 5.4pt" valign="top" >
      <p class="MsoNormal" style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">124,52<span style="font-size: 10pt;"></span></p>
      </td>
    </tr>
    <tr>
      <td style="border-style: none none solid; border-color: -moz-use-text-color -moz-use-text-color green; border-width: medium medium 1.5pt; padding: 0cm 5.4pt" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt;">ms32.<span>avi</span></p>
      </td>
      <td style="border-style: none none solid; border-color: -moz-use-text-color -moz-use-text-color green; border-width: medium medium 1.5pt; padding: 0cm 5.4pt" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt;">640<span>x272, 200</span></p>
      </td>
      <td style="border-style: none none solid; border-color: -moz-use-text-color -moz-use-text-color green; border-width: medium medium 1.5pt; padding: 0cm 5.4pt" valign="top" >
      <p class="MsoNormal" style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">99,62<span style="font-size: 10pt;"></span></p>
      </td>
    </tr>
  </tbody>
</table>

Codecs used for the comparison:

<table class="center" style="border: medium none ; text-align: left; margin-left: auto; margin-right: auto; border-collapse: collapse;" border="0" cellpadding="1" cellspacing="1">
  <tbody>
    <tr style="height: 12.75pt;">
      <td style="border-style: solid none; border-color: green -moz-use-text-color; border-width: 1.5pt medium 0.75pt; padding: 0.5pt 0.5pt 0cm" nowrap="nowrap" valign="bottom">
      <p style="margin: 0cm 0cm 0.0001pt;">Lossless codec</p>
      </td>
      <td style="border-style: solid none; border-color: green -moz-use-text-color; border-width: 1.5pt medium 0.75pt; padding: 0cm" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">Version</p>
      </td>
    </tr>
    <tr style="height: 12.75pt;">
      <td style="border: medium none ; padding: 0.5pt 0.5pt 0cm; height: 12.75pt;" nowrap="nowrap" valign="bottom">
      <p style="margin: 0cm 0cm 0.0001pt;">HuffYUV</p>
      </td>
      <td style="border: medium none ; padding: 0cm" valign="top" >
      <p class="MsoNormal" style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">2.1.1<span style="font-size: 10pt;"></span></p>
      </td>
    </tr>
    <tr style="height: 12.75pt;">
      <td style="border: medium none ; padding: 0.5pt 0.5pt 0cm; height: 12.75pt;" nowrap="nowrap" valign="bottom">
      <p style="margin: 0cm 0cm 0.0001pt;">CorePNG</p>
      </td>
      <td style="border: medium none ; padding: 0cm" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">0.8.2</p>
      </td>
    </tr>
    <tr style="height: 12.75pt;">
      <td style="border: medium none ; padding: 0.5pt 0.5pt 0cm; height: 12.75pt;" nowrap="nowrap" valign="bottom">
      <p style="margin: 0cm 0cm 0.0001pt;">Alparysoft Lossless Video Codec</p>
      </td>
      <td style="border: medium none ; padding: 0cm" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">1.6</p>
      </td>
    </tr>
    <tr style="height: 12.75pt;">
      <td style="border: medium none ; padding: 0.5pt 0.5pt 0cm; height: 12.75pt;" nowrap="nowrap" valign="bottom">
      <p style="margin: 0cm 0cm 0.0001pt;">CamCodec</p>
      </td>
      <td style="border: medium none ; padding: 0cm" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">1.0</p>
      </td>
    </tr>
    <tr style="height: 12.75pt;">
      <td style="border: medium none ; padding: 0.5pt 0.5pt 0cm; height: 12.75pt;" nowrap="nowrap" valign="bottom">
      <p style="margin: 0cm 0cm 0.0001pt;">LEAD JPEG</p>
      </td>
      <td style="border: medium none ; padding: 0cm" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">1.0.0.17</p>
      </td>
    </tr>
    <tr style="height: 12.75pt;">
      <td style="border: medium none ; padding: 0.5pt 0.5pt 0cm; height: 12.75pt;" nowrap="nowrap" valign="bottom">
      <p style="margin: 0cm 0cm 0.0001pt;">PicVideo
JPEG</p>
      </td>
      <td style="border: medium none ; padding: 0cm" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">2.10.0.18</p>
      </td>
    </tr>
    <tr style="height: 12.75pt;">
      <td style="border-style: none none solid; border-color: -moz-use-text-color -moz-use-text-color green; border-width: medium medium 1.5pt; padding: 0.5pt 0.5pt 0cm; height: 12.75pt;" nowrap="nowrap" valign="bottom">
      <p style="margin: 0cm 0cm 0.0001pt;">AVIzlib</p>
      </td>
      <td style="border-style: none none solid; border-color: -moz-use-text-color -moz-use-text-color green; border-width: medium medium 1.5pt; padding: 0cm" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">2.2.3</p>
      </td>
    </tr>
    <tr style="height: 12.75pt;">
      <td style="border-style: none none solid; border-color: -moz-use-text-color -moz-use-text-color green; border-width: medium medium 1.5pt; padding: 0.5pt 0.5pt 0cm; height: 12.75pt;" nowrap="nowrap" valign="bottom">
      <p style="margin: 0cm 0cm 0.0001pt;">Lagarith</p>
      </td>
      <td style="border-style: none none solid; border-color: -moz-use-text-color -moz-use-text-color green; border-width: medium medium 1.5pt; padding: 0cm" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">1.3.6</p>
      </td>
    </tr>
    <tr style="height: 12.75pt;">
      <td style="border-style: none none solid; border-color: -moz-use-text-color -moz-use-text-color green; border-width: medium medium 1.5pt; padding: 0.5pt 0.5pt 0cm; height: 12.75pt;" nowrap="nowrap" valign="bottom">
      <p style="margin: 0cm 0cm 0.0001pt;">FFV1 (from ffdshow)</p>
      </td>
      <td style="border-style: none none solid; border-color: -moz-use-text-color -moz-use-text-color green; border-width: medium medium 1.5pt; padding: 0cm" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">19.06.05</p>
      </td>
    </tr>
    <tr style="height: 12.75pt;">
      <td style="border-style: none none solid; border-color: -moz-use-text-color -moz-use-text-color green; border-width: medium medium 1.5pt; padding: 0.5pt 0.5pt 0cm; height: 12.75pt;" nowrap="nowrap" valign="bottom">
      <p style="margin: 0cm 0cm 0.0001pt;">H264 Lossless (from ffdshow)</p>
      </td>
      <td style="border-style: none none solid; border-color: -moz-use-text-color -moz-use-text-color green; border-width: medium medium 1.5pt; padding: 0cm" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">19.06.05</p>
      </td>
    </tr>
    <tr style="height: 12.75pt;">
      <td style="border: medium none ; padding: 0.5pt 0.5pt 0cm; height: 12.75pt;" nowrap="nowrap" valign="bottom">
      <p style="margin: 0cm 0cm 0.0001pt;">MSU Lossless Video Codec</p>
      </td>
      <td style="border: medium none ; padding: 0cm" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">0.2.4</p>
      </td>
    </tr>
    <tr style="height: 12.75pt;">
      <td style="border: medium none ; padding: 0.5pt 0.5pt 0cm; height: 12.75pt;" nowrap="nowrap" valign="bottom">
      <p style="margin: 0cm 0cm 0.0001pt;">MSU Lossless Video Codec</p>
      </td>
      <td style="border: medium none ; padding: 0cm" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">0.5.2</p>
      </td>
    </tr>
    <tr style="height: 12.75pt;">
      <td style="border: medium none ; padding: 0.5pt 0.5pt 0cm; height: 12.75pt;" nowrap="nowrap" valign="bottom">
      <p style="margin: 0cm 0cm 0.0001pt;">MSU Lossless Video Codec</p>
      </td>
      <td style="border: medium none ; padding: 0cm" valign="top" >
      <p style="margin: 0cm 0cm 0.0001pt; text-align: center;" align="center">0.6.0</p>
      </td>
    </tr>
  </tbody>
</table>
<br/>

<div class="center">
<img src="/assets/img/codecs/lossless-video-codec/rgb060.gif">
</div>

<div class="center">
<img src="/assets/img/codecs/lossless-video-codec/yuv060.gif">
</div>

<div class="center">
<img src="/assets/img/codecs/lossless-video-codec/yv060.gif">
</div>

The comparison was made in RGB and YUV color spaces because usually
models used by codecs and their efficiency differ a lot depending on the
color space. Also, not all of the codecs support YUV though it usually
gives a better compression.

As seen from the graphs below, MSU Lossless Video Codec gives **the best
result compared to all of the available codecs**.

## Configuration
<div class="center">
<div>
<img src="/assets/img/codecs/lossless-video-codec/parameters.gif">
<img src="/assets/img/codecs/lossless-video-codec/advanced.gif">
</div>
</div>

In the main configuration dialog you can set two main parameters - video
quality and compression mode. There are following variants of video
quality:

-   **Absolutely lossless** - absolutely lossless mode: the data after
    decompression is bitwise equal to the source data. This mode has the
    smallest compression ratio. Input may be in RGB, YUY2 and YV12
    formats, output will be in the same format as input.
-   **Allow colorspace conversion** - works in YV12 color space. It
    means if you had some video in YV12 format (quite often case) then
    after decompression the data is equal to the source. And if the
    source data were in 24-bit RGB or 16-bit YUY2, then you lose on RGB
    to YUV conversion. This mode leads to much better compression ratio.

    Also the codec has so called "visually lossless" modes. It means
    these modes allow some information losses that are visually
    unnoticeable giving you compression ratio boost. This is done by
    denoising, so all you really lose is the noise. In many cases image
    quality increases.

-   **Allow denoising** - differs from previous one by having a slight
    denoising. Visually image stays the same but compression improves.
-   **Allow stronger denoising** - differs from the previous one by
    stronger denoising. Visually image quality doesn't get worse (in
    most cases it gets better) and the compression ratio grows
    further.  
    You can set up denoising parameters manually to get wanted
    compression/quality ratio. Parameters are set in a separate window
    called by the "Advanced" button.

Compression **Mode** influences compression ratio and
compression/decompression speeds with given quality. You can choose one
of preset parameters sets or the manual tuning mode.

When choosing any variant of quality and compression mode, graphics in
the top side of the window show expected quality, compression ratio,
compression speed and decompression speed.

When compressing interlaced sequences you can turn on the **Compressing
interlaced movie** option. In some cases it improves compression.

The **Advanced** window:  
Again, any changes of parameters cause graphics to show expected
results.

**Compression method** allows you to choose compression algorithm - the
new one or the old one. The new one is much faster on compression and
decompression, but the old one gives better compression on most files
(but on some files the new method works better).

In *Denoising* area you can set denoising parameters for Custom
compression mode.

-   **Temporal denoising threshold** controls the temporal part of
    denoising. Must be a positive integer number. The "Good compression"
    mode has this parameter set to 30, the "High compression" mode - 50.
-   **Spatial denoising intensity** controls the spatial part of
    denoising. Must be a positive real number. The "Good compression"
    mode has this parameter set to 4, the High one - 20.

In *Delta-Frames* area you can set up codec's use of previous frames.

-   **Enable Delta-Frames** turns on delta-frames use. If you turn it
    off, all frames will be key-frames. This will cause growth of file
    size, so don't turn it off unless you're sure you need to.
-   **Force Key-Frames every N frames** tells codec to insert a
    key-frame at least once an N frames.

In *Motion Estimation* you can control compression speed and ratio. You
can use one of presets or set the following options manually.

-   **FullSearch** turns on use of slow but precise algorithm of motion
    compensation. It makes compression much slower but much better.
-   **After DVD or DivX**: turning this option on allows you to compress
    better video which passed through a lossy codec.
-   **PP-frame** - search in pre-previous frame. Makes compression a bit
    slower but better. Recommended to keep it turned on.

<span id="Download"></span>

## Download

**MSU Lossless video codec version 0.6.0 from 19.09.2005**

-   [MSU Lossless video codec 0.6.0, EXE
    installer](http://compression.ru/video/ls-codec/msu-ls-codec.exe)
    (157kb)
-   [MSU Lossless video codec 0.6.0, EXE installer in ZIP (for some
    firewalls)](http://compression.ru/video/ls-codec/msu-ls-codec.zip)
    (126kb)

### Known problems:

-   Behaves badly if you abort compression in VDub.
-   (Please let us know in case of any problems!)

## Contacts

E-mail: <ls-codec@compression.ru>
