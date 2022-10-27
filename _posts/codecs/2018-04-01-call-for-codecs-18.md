---
original_url: http://compression.ru/video/codec_comparison/call_for_codecs_18.html
title: Call for HEVC codecs 2018
description: 
preview_img: /assets/img/codecs/call-for-codecs-18/preview.png
---
# Call for fourth MSU HEVC codecs comparison - 2018

## Thirteenth modern video codec comparison<br/>For real researchers, developers and professional users in field of high-end video compression

UPDATE 06/03/2018

Hardware info and speed requirements is
[anounced](/codecs/call-for-codecs-18.html#hardware)  
Developers could send codec with presets to <videocodec-testing@graphics.cs.msu.ru>

### Important Dates

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><strong>March, <del>5</del> 18</strong></td>
<td><strong>Deadline for applications</strong></td>
</tr>
</tbody>
</table>

Participant has to send us name of codec (with name of encoding standard
if not HEVC), name of company and number of presets that he wants to
use.

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><strong>March, 31</strong></td>
<td>Deadline for receipt of a codec with required presets</td>
</tr>
<tr class="even">
<td><strong>April, 25</strong></td>
<td>Deadline for settling technical problems with codec’s functioning</td>
</tr>
<tr class="odd">
<td><strong>August, 7</strong></td>
<td>Draft version of report that will be sent to all participants</td>
</tr>
<tr class="even">
<td><strong>August, 14</strong></td>
<td>Deadline for reception of comments to the draft</td>
</tr>
<tr class="odd">
<td><strong>August, 25</strong></td>
<td>Comparison report release</td>
</tr>
</tbody>
</table>

### Task of the Comparison

  

To perform comparative unbiased analysis of the current software and
hardware (GPU-based) implementations of HEVC/H.265 video coding standard
and compare it to the best implementations of other video coding
standards (H.264/MPEG-4 AVC, VP9, VP8 and MPEG-4) using objective
metrics.

### Typical Scope of Test

**Summary report topics:**

-   Objective measurements + **Subjective analysis**
-   Encoding time
-   Bitrate keeping
-   Speed/Quality trade-off analysis
-   Averaged objective results analysis
-   Leaders in different use-cases

**Comparison methodology main points:**

-   2 metrics: SSIM and PSNR + **New objective metrics: VMAF, NIQE**
-   3 color-planes (Y,U,V) and integral metric values
-   25-30 HD video sequences (main report) + 10-12 4K video sequences
    (report appendix)
-   prosumer-level modern hardware
-   8-10 different target bitrates (1-12 Mbps for HD and 2-16 Mbps for
    4K)
-   3 various use-cases (Fast, Universal and Ripping) differ by
    speed/quality trade-off
-   fully automatic testing system
-   5000+ result figures

## Software and methodology for encoder analysis

MSU team has up to 21 years of experience in video codec analysis,
testing, optimization. Here are some facts about the Previous MSU Video
Codecs Comparisons:
- There were more than 400.000 downloads of previous H.264 and HEVC video
codec comparisons results
- Many codec's bugs were found and reported to developers
- More than 25 private reports for codec developers (describe weak and
strong points for codec) after public report versions
- Here you can see [Selected comments for MPEG-4 AVC/H.264 video codecs
comparison](/codecs/mpeg4-avc-h264-2004-comments.html)

In addition, you can check out some useful links about previous video
codec comparisons:
- [MSU HEVC/H.265 Video Codec Comparison -
2017](http://compression.ru/video/codec_comparison/hevc_2017/)
- [Eighth Annual MSU MPEG-4 AVC/H.264 Video Codec
Comparison](http://compression.ru/video/codec_comparison/h264_2012/)
- [See all our
comparisons](/codecs/comparisons.html)

### Comparison Rules

This year encoder developers send us a bundle of same presets (with
different speed/quality characteristics) for all use-cases.

**Please pay attention that we will use multi-core CPU for encoding, so
you can use multi-threading.**
- Decoding is performed with reference decoder.
- We do not limit GOP size and intra-period.
- Before results' publishing each developer will receive the results of
its codec and competitive free codecs. Developers of each codec can
write a comment (one paragraph) about the comparison results. That
comment will be included in the report.
- We are willing to completely or partially delete information about some
codec in the public version of comparison report only in exceptional
cases (e.g. critical errors in a codec).
- The participation is free with results publishing
    - You can join comparison for free if you agree that your codec's results
    will be published.
    - If your company wants to receive results of your codec testing with
    possibility to exclude it results from publication and information
    disclosure, you should pay for measurements and report preparing before
    comparison begins.
- Enterprise version of comparison report is available for direct
participants for free
- All participants will receive following deliverables to verify the
results for free:
    - video sequences used in comparison
    - binaries of all free encoders used in comparison to verify the results
    - all raw video quality metric and encoding speed data for its encoder and
    for all of free encoders used in comparison

<span id="hardware"></span> <span id="hardware"></span>

### Test Hardware Characteristics

Next hardware for codec testing will be used:

-   **CPU:** Intel Socket 1151 Core i7 8700K (Coffee Lake) (3.7Ghz,
    6C12T, TDP 95W)
-   **Mainboard:** ASRock Z370M Pro4
-   **RAM:** Crucial CT16G4DFD824A 16GB DIMM DDR4 2400MHz CL15
-   **OS:** Windows 10 x64

<span id="speed"></span>

### Encoding speed requirements

For encoder alignment selected presets should provide following encoding
speed:  
All speed requirements are for 1080p sequence encoded at 6Mbps:

-   Fast/High Density — 1080@60fps
-   Universal/Broadcast VQ — 1080p@25fps
-   Ripping/Pristine VQ — 1080p@1fps and SSIM-RD curve better than
    x264-veryslow

### Codec Requirements
- Presets for different speed requirements should be provided by the
developers
- Codec should allow to set arbitrary bitrate of resulting stream
- Preferable codec interface - console codec version (with batch
processing support — bitrate and file names must be possible to assign
from the command line).
- Encoder should be compatible with reference decoder

### Developers Deliverables

Following deliverables should be provided by each developer:
- Codec files (CLI executable file is preferable).
- Short description of codec parameters.
- Codec's presets.

## Thanks

Special thanks to the following contributors of our previous comparisons

  

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/codecs/call-for-codecs-18/google_logo.png" alt="Google" /></td>
<td><img src="/assets/img/codecs/call-for-codecs-18/intel_logo.png" alt="Intel" /></td>
<td><a href="http://www.amd.com"><img src="/assets/img/codecs/call-for-codecs-18/amd_logo.png" alt="AMD" /></a></td>
<td><img src="/assets/img/codecs/call-for-codecs-18/nvidia_logo.png" alt="NVidia" /></td>
</tr>
<tr class="even">
<td><img src="/assets/img/codecs/call-for-codecs-18/ati_logo.png" alt="ATI" /></td>
<td><a href="http://www.adobe.com"><img src="/assets/img/codecs/call-for-codecs-18/adobe_logo.png" alt="Adobe" /></a></td>
<td><img src="/assets/img/codecs/call-for-codecs-18/isphone_logo.png" alt="ISPhone" /></td>
<td><img src="/assets/img/codecs/call-for-codecs-18/dicas_logo.png" alt="dicas" /></td>
</tr>
<tr class="odd">
<td><img src="/assets/img/codecs/call-for-codecs-18/kddi_logo.png" alt="KDDI R&amp;D labs" /></td>
<td><img src="/assets/img/codecs/call-for-codecs-18/dolby_logo.png" alt="Dolby" /></td>
<td><img src="/assets/img/codecs/call-for-codecs-18/tata_logo.png" alt="Tata Elxsi " /></td>
<td><img src="/assets/img/codecs/call-for-codecs-18/octasic_logo.png" alt="Octasic" /></td>
</tr>
<tr class="even">
<td><a href="http://www.qualcomm.com"><img src="/assets/img/codecs/call-for-codecs-18/qualcomm_logo.png" alt="Qualcomm" /></a></td>
<td><img src="/assets/img/codecs/call-for-codecs-18/voceweb_logo.png" alt="Voceweb" /></td>
<td><img src="/assets/img/codecs/call-for-codecs-18/elgato_logo.png" alt="Elgato" /></td>
<td></td>
</tr>
</tbody>
</table>

## Contacts

E-mail: <videocodec-testing@graphics.cs.msu.ru>
