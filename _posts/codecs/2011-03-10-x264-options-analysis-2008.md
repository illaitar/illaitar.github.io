---
original_url: http://compression.ru/video/codec_comparison/x264_options_analysis_08_en.html
title: Options Analysis of MPEG-4 AVC/H.264 Codec x264
description: We have analyzed x264 (version r938) - one of the best codecs of MPEG-4 AVC/H.264 video coding standard.
preview_img: /assets/img/codecs/x264-options-analysis/preview.png
subprojects: reports avc
---

# Options Analysis of MPEG-4 AVC/H.264 Codec x264

* Project head: Dr. Dmitriy Vatolin  
* Testing, charts, analysis: Alexander Parshin, Vladimir Popov, Kira
Ragulina  

[**DOWNLOAD**](/codecs/x264-options-analysis-2008.html#download)

## x264 Codec

We have analyzed x264 (version r938) - one of the best codecs of MPEG-4
AVC/H.264 video coding standard. This codec demonstrates great results
of both quality and speed of encoding according to our previous [MPEG-4
AVC/H.264 codec
comparisons](/codecs/mpeg4-avc-h264-2007.html).
Number of codec options were analysed to find their best values and
codec's optimal presets.

The following options were considered:

- Macroblocks partitions selection (\--partitions)
- Number of B-frames (\--bframes)
- Number of reference frames (\--ref)
- Motion Estimation method (\--me)
- Algorithm of subpixel compensation usage (\--subme)
- Mixing of predictions from different frames (\--mixed-refs)
- Weighted predictions in B-frames (\--weightb)

## Report Contents

The report contain the following sections:
- List of optimal presets for different encoding speed
- Codec options analysis using colored point clouds
- Codec options analysis using speed/quality tradeoff
- Codec options analysis using convex-hull elumination

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td style="text-align: center;"><img src="/assets/img/codecs/x264-options-analysis/presets_point_cloud.png" alt="Presets point cloud" /></td>
</tr>
<tr class="even">
<td style="text-align: center;">Presets quality and speed. Each point is tested preset.<br/>X axis is encoding speed, Y axis is average bitrate for the same quality.</td>
</tr>
</tbody>
</table>

## Main Results

Main results of this work are the following:

- List of optimal presets. Those presets can be used for better encoding
of your video.
- Recommendations for presets usage for different encoding speed.
- Conclusions about methods implementations efficiency related to other
implemented methods.

We offer commercial evaluations of codec's parameters set similar to
this one. [Write us an
e-mail](/codecs/x264-options-analysis-2008.html#contacts)
for more details. <span id="download"></span>

## Download

[x264 options analysis, PDF, EN, 1.73
MB](http://compression.ru/video/codec_comparison/pdf/x264_options_analysis_08.pdf)

## Thanks

Special thanks to the following contributors of this work

  

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/codecs/x264-options-analysis/intel_logo.gif" alt="Intel" /></td>
<td><img src="/assets/img/codecs/x264-options-analysis/rfbr.gif" alt="RFBR" /></td>
</tr>
</tbody>
</table>

<span id="contacts"></span>

## Contacts

E-mail: <videocodec-testing@graphics.cs.msu.ru>
