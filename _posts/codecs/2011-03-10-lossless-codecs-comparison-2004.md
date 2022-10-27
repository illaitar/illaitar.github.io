---
original_url: http://compression.ru/video/codec_comparison/lossless_codecs_en.html
title: MSU Lossless Video Codecs Comparison
description: Comparison of lossless video codecs.
preview_img: /assets/img/codecs/lossless-codecs-comparison/preview.png
subprojects: reports lossless
---

# MSU Lossless Video Codecs Comparison

* Project head: Dr. Dmitriy Vatolin  
* Testing, charts, analysis: Sergey Grishin  
* Translating: Daria Kalinkina  
* Verification: Stas Soldatov

**See new version of this comparison (March 2007)  
[Lossless Video Codec Comparison
2007](/codecs/lossless-codecs-comparison-2007.html)**

## About comparison

-   Number of test sequences: **9**
-   Number of color spaces considered: **3**
    -   RGB
    -   YUY2
    -   YV12
-   Number of codecs tested: **15**
    1.  Alpary v2.0
    2.  AVIzlib v2.2.3
    3.  CamStudio GZIP v1.0
    4.  CorePNG v0.8.2
    5.  FFV1 ffdshow 08/08/04
    6.  GLZW v1.01
    7.  HuffYUV v2.1.1
    8.  Lagarith v1.0.0.1
    9.  LEAD JPEG v1.0.0.1
    10. LOCO v0.2
    11. MindVid v1.0 beta 1
    12. MSUlab beta v0.2.4
    13. MSUlab v0.5.2
    14. PicVideo JPEG v.2.10.0.29
    15. VBLE beta

**[Download MSU Lossless Video Codecs Comparison (1.36MB,
PDF)](http://compression.ru/video/codec_comparison/pdf/lossless_codecs_test_en.pdf)**

See also:

-   [Big Codecs Comparison
    (May 2003)](/codecs/comparisons.html)
-   [MPEG-4 AVC/H.264 Comparison
    (January 2005)](/codecs/mpeg4-avc-h264-2004.html)

## About the comparison of lossless codecs

**The name of this video codec category declares full quality losses
absence - the decompressed video stream should be completely identical
to original.** Output quality is same for all codecs. Absolute absence
of losses is a very strong requirement, therefore it is often hard to
achieve compression ratios above 3:1. Some of the tested codecs have an
opportunity of work in "lossy" mode; it allows to reach considerably
higher compression degree with rather small losses of quality. However,
**only "fully lossless" mode is considered in the current comparison.**
The only parameter of comparison is the compression level.

Many codecs give an opportunity to adjust the parameter
speed/compression ratio; it allows to tune the codec for the specific
task (real-time capture or the rendering requiring loss minimization).
Only maximum compression ratio result is considered in current work.

Some codecs are capable to accept input data in several color spaces
(RGB, YUY2, YV12, etc.), however, compression is not always "lossless".
Some codecs "silently" perform the conversion of color spaces, thus,
raising a degree of compression. Quality losses coming out of such
conversions are not visible, but surely exist. In the given testing work
codecs is compared separately for various color spaces, thus in each
color space full absence of losses is guaranteed!

**Main parts of the comparison:**

1.  Information about codecs:
    -   Vendor and version
    -   Color space support
    -   Logo presence in compressed video
    -   Registration requirements
   
    and test sequences:
    -   Sequence name
    -   Resolution
    -   Number of frames

2.  Brief codecs description with screenshots
3.  Codecs comparison with analysis of compression ratios for each
    sequence
4.  Codecs comparison with analysis of total compression ratios for each
    codec

<div class="center">
<div>
<img src="/assets/img/codecs/lossless-codecs-comparison/graph_cratio.png" alt="Sequence - Compression ratio" /><br />
Diagram from 3 part of comparison
</div>
</div>

<div class="center">
<div>
<img src="/assets/img/codecs/lossless-codecs-comparison/gr_avgb_rgb.gif" alt="Codec - Compression ratio" /><br />
Compression ratios for codecs for RGB
</div>
</div>

<div class="center">
<div>
<img src="/assets/img/codecs/lossless-codecs-comparison/gr_avgb_yuy2.gif" alt="Codec - Compression ratio" /><br />
Compression ratios for codecs for YUY2
</div>
</div>

<div class="center">
<div>
<img src="/assets/img/codecs/lossless-codecs-comparison/gr_avgb_yv12.gif" alt="Codec - Compression ratio" /><br />
Compression ratios for codecs for YV12
</div>
</div>

## Download

-   [Download MSU Lossless Video Codecs Comparison (1.36MB,
    PDF)](http://compression.ru/video/codec_comparison/pdf/lossless_codecs_test_en.pdf)
-   [Download MSU Lossless Video Codecs Comparison (1.2MB,
    ZIP)](http://compression.ru/video/codec_comparison/zip/lossless_codecs_test_en.zip)

## Contacts

E-mail: <video@graphics.cs.msu.ru>





