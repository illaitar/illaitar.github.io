---
original_url: http://compression.ru/video/codec_comparison/mpeg-2_2006_en.html
title: MSU MPEG-2 Video Decoders Comparison
description: Comparison of MPEG-2 video decoders.
preview_img: /assets/img/codecs/mpeg2-comparison/preview.png
subprojects: reports
---

# MPEG-2 Video Decoders Comparison

* Project head: Dr. Dmitriy Vatolin, Dr. Maxim Smirnov  
* Testing, charts, analysis: Dmitriy Kulikov  
* Translating: Dr. Maxim Smirnov  
* Verification: Alexander Parshin

## MPEG-2 Video Codecs Comparison Objectives

The main task was to comparatively evaluate quality of MPEG-2 decoders
while decoding distorted streams. This question is topical for satellite
broadcasting and, in a lesser degree, for DVD video playback.

**[Download PDF
now!](http://compression.ru/video/codec_comparison/pdf/msu_mpeg_2_decoder_comparison_2006_eng.pdf)**

## Test rules

<div class="center">
<div>
<img src="/assets/img/codecs/mpeg2-comparison/scheme_eng.png" alt="Scheme of conducting decoders testing" /><br />
Scheme of conducting decoders testing
</div>
</div>

- A sequence was encoded in MPEG-2 Elementary Stream with constant 3 Mb/s
bitrate.

- The obtained stream was transformed to the MPEG-2 Transport Stream.

- The data were randomly distorted using a specially written utility. The
probability of introducing bit error was regulated. The first header of
the stream was kept intact in all cases.

- The distorted data were decoded using different decoders and the
obtained sequences were compared with the undistorted decoded sequences
using objective metrics.

- The process of introducing errors, decoding and metrics calculation was
repeated 100 times to achieve more adequate results. This was reasoned
by the fact that opportunity of effective error correction or error
effects mitigation depends in many respects on the error position in a
stream.

- If some decoder failed to decode a frame, the gray frame was inserted in
the output stream. For the sake of per-frame comparison the Y-PSNR value
for such frames was set to 0.

- The metrics values were averaged.

## Tested decoders

- bitcontrol MPEG-2 Video Decoder
- DScaler MPEG2 Video Decoder
- Elecard MPEG-2 Video Decoder
- ffdshow MPEG-4 Video Decoder (libavcodec)
- InterVideo Video Decoder
- Ligos MPEG Video Decoder
- MainConcept MPEG Video Decoder
- Pinnacle MPEG-2 Decoder

## Comparison content

- This comparison was performed on the sequences "Foreman" and "Battle".

- The large amount of data was obtained, the part of them was visualized
and shown in this report.

- As an addition a 7limited encoders test was performed. Its results are
also presented in this report.

- It was discovered that the visual quality of decoded corrupted streams
when using different decoders is quite different.

<div class="center">
<div>
<img src="/assets/img/codecs/mpeg2-comparison/foreman_graph.jpg" alt="Example of result graph" /><br />
Example of result graph
</div>
</div>

## Download

[MSU MPEG-2 Video Decoders Comparison - PDF (2.64
Mb)](http://compression.ru/video/codec_comparison/pdf/msu_mpeg_2_decoder_comparison_2006_eng.pdf)

[MSU MPEG-2 Video Decoders Comparison - ZIP (2.5
Mb)](http://compression.ru/video/codec_comparison/zip/msu_mpeg_2_decoder_comparison_2006_eng.zip)

## Contacts

E-mail: <videocodec-testing@graphics.cs.msu.ru>





