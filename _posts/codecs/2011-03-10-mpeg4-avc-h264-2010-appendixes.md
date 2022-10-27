---
original_url: http://compression.ru/video/codec_comparison/h264_2010/appendixes.html
title: MPEG-4 AVC/H.264 Video Codecs Comparison 2010 - Appendixes
description: Appendixes for MPEG-4 AVC/H.264 video codecs comparison in 2010
preview_img: /assets/img/codecs/mpeg4-avc-h264-2010-appendixes/preview.png
subprojects: reports avc
---
# MPEG-4 AVC/H.264 Video Codecs Comparison 2010 - Appendixes

* Project head: Dr. Dmitriy Vatolin
* Measurements, analysis: Dr. Dmitriy Kulikov, Alexander Parshin

[Return to H.264 Video Codec Comparison
Report](/codecs/mpeg4-avc-h264-2010.html)

## Table of Contents
* TOC
{:toc}

## Appendix 1. Subjective Comparison and Psycho-visual Enhancements

### Brief Description

In this work, we analyzed video codecs not only with help of objective
metrics, but also using subjective comparisons using SAMVIQ (Subjective
Assessment Method for Video Quality evaluation) methodology. This new
method was created by the EBU (European Broadcasting Union).

Another task in this part of comparison was to analyze the psycho-visual
enhancement quality during encoding. We tested five video codecs, and
one codec was tested with two almost identical presets: one without
psycho-visual enhancement and another with psycho-visual enhancement.

- Methodology: SAMVIQ
- Number of experts: 42
- Number of sequences: 5
- Number of codecs (presets): 6

### SAMVIQ Description

During testing, each expert is able to play any sequence from the test
set and give it a mark, and he is able to play a reference video. Marks
are in the range of 0 to 100. More information about the methodology can
be found in the publication SAMVIQ: _A new EBU methodology for video
quality evaluations in multimedia_ (Kozamernik, F., Steinmann, V., Sunna,
P. and Wyckens, E., SMPTE journal, 2005 04 April).

### Subjective Assessment Description

Forty-two experts participated in this subjective assessment. The
experts represent a variety of individuals: males and females of ages 18
to 40 who are PC users or video and graphics experts. Each user watched
five video groups, with eight videos in each group. Each video group
contains six encoded videos and one reference video (the viewers were
unaware of which type they were viewing), as well as a reference video
specified as such. Users gave each video a mark of 0 to 100, and the
marks for all users and sequences were averaged. Some extreme results
were discarded before obtaining the final result.

### Video Sequences

Five different video sequences were used in this comparison.

**"Battle"**

- Sequence title: MPEG-4 AVC/H.264 Video Codecs Comparison 2010 - Appendixes
- Resolution: 1280x544
- Number of frames: 586
- Color space: RGB24
- Frames per second: 25

This sequence is a fragment from the beginning of the movie Terminator 2.
The compression of this sequence is the most difficult among all of
the sequences in the analysis. This difficulty is mainly due to three
reasons: continual brightness variation (resulting from explosions and
laser flashes as seen in the picture above), very fast motion and
frequent scene changes. These characteristics often cause codecs to
compress frames as I-frames.

**"Football"**

- Sequence title: MPEG-4 AVC/H.264 Video Codecs Comparison 2010 - Appendixes
- Resolution: 1280x720
- Number of frames: 564
- Color space: RGB24
- Frames per second: 25

This sequence is a part of sports telecast. The sequence has a high
contrast level, strong motion and rich colors.

**"Italy"**

- Sequence title: MPEG-4 AVC/H.264 Video Codecs Comparison 2010 - Appendixes
- Resolution: 1280x720
- Number of frames: 493
- Color space: RGB24
- Frames per second: 25

This sequence has many scenes with fading transitions between them. This
fading can cause encoding difficulties. The sequence contains many sharp
details.

**"Quadbike"**

- Sequence title: MPEG-4 AVC/H.264 Video Codecs Comparison 2010 - Appendixes
- Resolution: 1280x720
- Number of frames: 562
- Color space: RGB24
- Frames per second: 25

This sequence has slow motion with an almost static camera and few scene
changes.

**"Simpsons"**

- Sequence title: MPEG-4 AVC/H.264 Video Codecs Comparison 2010 - Appendixes
- Resolution: 1280x528
- Number of frames: 514
- Color space: RGB24
- Frames per second: 25

This sequence is a part of the Simpsons animated movie; it has high
contrast and different types of motion.

### Video Codecs

Five codecs were used in the comparison:

- DivX MPEG-4 ASP
- DivX H.264
- Elecard
- MainConcept
- x264 (two presets: with psycho-visual enhancement and without)

### Results

Full results could be found in professional version of this report:
[H.264 Comparison Report Pro 2010 - Enterprise
edition](/codecs/mpeg4-avc-h264-2010.html#version_comparison)  
This version contains only one-sequence results

**"Football" Sequence**

For the "Football" sequence, x264 provides the highest quality. x264
with psycho-visual enhancement provides very similar (almost
undistinguishable) results. The codecs can be rated by visual quality as
follows:

1.  x264 with psycho-visual enhancement
2.  x264
3.  MainConcept
4.  DivX H.264
5.  Elecard
6.  DivX ASP

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/mos_football.png" alt="Mean opinion score (MOS), 'Football' sequence">
</div>

All subjective comparison results could be found in  
[H.264 Comparison Report Pro 2010 - Enterprise
edition](/codecs/mpeg4-avc-h264-2010.html#version_comparison)

<span id="Appendix_2"></span>

## Appendix 2. x264 Over-years Comparison

The quality of an H.264 codec, over several years, can be compared for a
given video sequence. The x264 encoder was chosen for this task because
it is present in almost every MSU VIDEO MPEG-4 AVC/H.264 codec
comparison, and it produces good results compared with other encoders.
Next figures show the position of the x264 codec compared with other
codecs for the “Battle” sequence. For all years except 2005, x264 shows
the best results. For years 2006–2009, we have shown results using
Y-SSIM as the quality metric; for 2005, we did not use this as the main
metric. In light of these results, x264 could be a good reference
encoder for analyzing the overall progress of H.264 encoders over time.

Next figure shows the RD curve for the “Battle” sequence using x264
encoders from different years. The best encoder is this year’s x264; the
worst is the 2005 version.

Using SSIM, the codecs can be ranked as follows:

1.  x264 (2010)
2.  x264 (2009)
3.  x264 (2007)
4.  x264 (2006)
5.  x264 (2005)

These results are shown in next figure. This figure indicates that the
overall progress is very good, and that the x264 encoder has increased
in speed and quality over recent years. But the old x264 does not use
multithreading, so encoding speed varies considerably.

Interestingly, if Y-PSNR is used as the quality metric, x264 does not
exhibit the kind of progress shown in previous figure. This difference
is because for past years, the x264 developers specified, for use in
testing, the presets optimized for the SSIM metric. Also, note that no
encoder (among the different x264 versions) produces the best results
simultaneously for both SSIM and PSNR.

The bitrate handling mechanism for the x264 encoder is quite good for
each version, as following figure indicates. Results for previous x264
versions (0.98 of target bitrate) could be explained by a different
interpretation of kbps (1,024 versus 1,000 bits per second).

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/x264_over_years_bh.png" alt="Bitrate handling for different x264 encoder versions ">
</div>

The per-frame analysis presented in following figure shows that the main
encoding mechanism did not changed significantly.

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/x264_over_years_pf.png" alt="Per-frame analysis for different x264 versions—'Battle' sequence, 700kbps ">
</div>

<span id="Appendix_3"></span>

## Appendix 3. Theora vs. x264 Single-thread Comparison

Multithreaded encoding is not supported by the Theora encoder, but CPUs
with four cores are used for the tests. This situation leads to an
incorrect speed comparison between Theora and other codecs. To eliminate
this disparity, we have turned on the x264 encoder’s single-thread mode
and compared the results with those of Theora. The overall speed/quality
trade-off for “Movies” and “HDTV” use cases is depicted in next figures.

The main conclusion is that even in single-thread mode, Theora is a
little bit slower and produces much poorer quality than does x264. <span id="Appendix_4"></span>

## Appendix 4. Test Set of Video Sequences

### Movie Sequences

**"Ice Age"**

- Sequence title: MPEG-4 AVC/H.264 Video Codecs Comparison 2010 - Appendixes
- Resolution: 720x480
- Number of frames: 2014
- Color space: YV12
- Frames per second: 24
- Source: MPEG-2 (DVD9), 5.7Mbps

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/ice_age.jpg" alt="Ice Age sequence, frame
500 ">
</div>

This sequence is a fragment from the Ice Age 3 animated movie. This
movie has low-contrast portions and high-contrast portions, and it has
many types of motion: camera panning, slow motion and very fast motion.
Also, it has a scene with colors that differ completely from those of
other scenes. Small black letterboxes appear at the top and bottom of
the video.

**"Indiana Jones"**

- Sequence title: MPEG-4 AVC/H.264 Video Codecs Comparison 2010 - Appendixes
- Resolution: 704x288
- Number of frames: 5000
- Color space: YV12
- Frames per second: 30
- Source: MPEG-2 (DVD)

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/indiana_jones.jpg" alt="Indiana Jones sequence, frame 1 ">
</div>

This sequence is a fragment from the Indiana Jones movie. Compression of
this sequence is difficult for two main reasons: the presence of
low-contrast scenes and the high level of motion in different scenes.
Also, several scenes have very different types of motion, ranging from
almost static scenes with talking people to scenes with strong motion
(for example, the scene where stones fall).

**"State Enemy"**

- Sequence title: MPEG-4 AVC/H.264 Video Codecs Comparison 2010 - Appendixes
- Resolution: 720x304
- Number of frames: 6500
- Color space: YV12
- Frames per second: 24
- Source: MPEG-2 (DVD)

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/state_enemy.jpg" alt="State Enemy sequence, frame
1115 ">
</div>

This sequence is a fragment from the Enemy of the State movie. This
sequence includes outdoor scenes with strong motion at the beginning
when the bicyclist runs, as well as scenes with low motion and indoor
scenes with normal motion. This sequence has scenes with different
lighting conditions.

**"Up"**

- Sequence title: MPEG-4 AVC/H.264 Video Codecs Comparison 2010 - Appendixes
- Resolution: 720x480
- Number of frames: 1920
- Color space: YV12
- Frames per second: 24
- Source: MPEG-2 (DVD9), 6.5Mbps

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/up.jpg" alt="Up sequence, frame 638 ">
</div>

This sequence is a fragment from the Up animated movie. The sequence
contains low-contrast scenes with almost static brightness and
high-colored scenes, and it contains many scenes with a few frames that
include quick scene changes.

### HDTV Sequences

**"Amazon"**

- Sequence title: MPEG-4 AVC/H.264 Video Codecs Comparison 2010 - Appendixes
- Resolution: 1280x720
- Number of frames: 1200
- Color space: YV12
- Frames per second: 24
- Source: Windows Media (6.4Mbps)

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/amazon.jpg" alt="Amazon sequence, frame 200 ">
</div>

This sequence contains scenes with the camera panning over a landscape
view of the Amazon; also, some scene changes take place with the camera
panning again. The video frames consist of many edges and high-contrast,
sharp details, such as leaves and branches. This sequence was downloaded
from the Microsoft website:
http://www.microsoft.com/windows/windowsmedia/musicandvideo/hdvideo/contentshowcase.aspx

**"Iron Man"**

- Sequence title: MPEG-4 AVC/H.264 Video Codecs Comparison 2010 - Appendixes
- Resolution: 1920x1080
- Number of frames: 600
- Color space: YV12
- Frames per second: 24
- Source: H.264, 14Mbps

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/iron_man.jpg" alt="Iron Man sequence, frame 455 ">
</div>

This sequence is a part of the Iron Man 2 movie trailer. It has
low-brightness scenes at the beginning, followed by a scene with very
fast motion and scenes with slow camera panning. Some frames are very
blurry. Also, the sequence contains scenes with flashing lights, which
could be a big problem for some encoders. Black letterboxes appear at
the top and bottom of the video.

**"Mobile Calendar"**

- Sequence title: MPEG-4 AVC/H.264 Video Codecs Comparison 2010 - Appendixes
- Resolution: 1280x720
- Number of frames: 504
- Color space: YV12
- Frames per second: 50
- Source: Uncompressed, progressive

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/mobile_calendar.jpg" alt="Mobile Calendar sequence, frame 416 ">
</div>

This close-up sequence is similar to “Mobile&Calendar” and includes a
moving calendar with text and a detailed photo of the Vasa ship. It also
includes a moving train with colorful toys. The background has two types
of wallpaper: one is brown with details, and the other is yellow with
drawn figures. The sequence is very detailed and is normally demanding.
The main potential compression difficulty is the many small, sharp
details on the calendar and on the background.

**"Troy"**

- Sequence title: MPEG-4 AVC/H.264 Video Codecs Comparison 2010 - Appendixes
- Resolution: 1920x1072
- Number of frames: 300
- Color space: YV12
- Frames per second: 24
- Source: MPEG-2

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/troy.jpg" alt="Troy sequence, frame 1 ">
</div>

This sequence is a fragment of the “Troy” movie and contains three parts
with sharp scene changes. The video includes medium scene motion and
slow camera motion. In terms of compression, this sequence is difficult
to compress because of the many small details.

<span id="Appendix_5"></span>

## Appendix 5. Tested Codecs and Presets

### Codecs

**DivX AVC/H.264 Video Encoder**

- Console encoding program version 1.1.1.6
- Presets were chosen by ourselves to meet the comparison requirements

    _**Remarks**: Owing to our choice of presets, the results for the DivX
    H.264 encoder could be slightly diminished compared with the case where
    the developers provide the presets._

**Elecard AVC Video Encoder 8-bit edition**

- Console encoding program version 2.1.022202.091207
- Codec and presets were provided by Elecard Ltd Company specifically for
this test

**Intel® MediaSDK AVC/H.264**

- Console encoding program, version 1.10.1.15
- Codec and presets were provided by Intel Corp. specifically for this
test

**MainConcept AVC/H.264 Video Encoder Console Application**

- Console encoding version 8.5.0
- Codec and presets were provided by MainConcept AG Company specifically
for this test

**Microsoft Expression Encoder 3**

- GUI encoding program
- Presets chosen ourselves for the analysis

    _**Remarks**: Owing to a long initial GUI loading time, the encoding time
    for Microsoft Expression Encoder is significantly higher than for other
    encoders. Unfortunately, we were unable to encode multiple files without
    the GUI loading each time. This is likely one of reasons for the
    encoder’s poor time results._

**Theora encoder**

- Console encoding program
- Both encoder and decoder were provided by developers
    
    _**Remarks**: Theora’s low encoding speed is explained by the version’s
    lack of multithreading support. Thus, Theora was tested in single-thread
    mode._

**x264**

- Console encoding program version core:85 r1442M 781d300

- Codec and presets were provided by developers specifically for this test
    
    _**Remarks**: The presets provided by the developers for this comparison
    were specifically chosen for the SSIM metric_

### Presets

The table below lists the settings used in this comparison for all of
the codecs.

<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/presets1.gif" alt="Presets ">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/presets2.gif" alt="Presets ">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/presets3.gif" alt="Presets ">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/presets4.gif" alt="Presets ">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/presets5.gif" alt="Presets ">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/presets6.gif" alt="Presets ">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/presets7.gif" alt="Presets ">

<span id="Appendix_6"></span>

## Appendix 6. Figures Explanation

The main charts in this comparison are classical RD curves
(quality/bitrate graphs) and relative bitrate/relative time charts.
Additionally, bitrate handling charts (ratio of real and target
bitrates) and per-frame quality charts were also used.

### RD curves

These charts show variation in codec quality by bitrate or file size.
For this metric, a higher curve presumably indicates better quality

### Relative Bitrate/Relative Time Charts

Relative bitrate/relative time charts show the dependence on relative
encoding time of the average bitrate for a fixed quality output. The
Y-axis shows the ratio of the bitrate of the codec under test to that of
the reference codec for a fixed quality. A lower value (that is, the
higher the value is on the graph) indicates a better-performing codec.
For example, a value of 0.7 means that codec under test can encode the
sequence under test in a file that is 30% smaller than that encoded by
the reference codec.

The X-axis shows the relative encoding time for the codec under test.
Larger values indicate a slower codec. For example, a value of 2.5 means
that the codec under test works 2.5 times slower, on average, than the
reference codec.

#### Graph Example

The following figures shows a case where these graphs can be useful. In
the top left graph, it is apparent that the “Green” codec encodes with
significantly better quality than the “Black” codec. On the other hand,
the top right graph shows that the “Green” codec is slightly slower.
Relative bitrate/relative time graphs can be useful in precisely these
situations: it is clearly visible in the bottom graph that one of the
codecs is slower, but yields higher visual quality, and that the other
codec is faster, but yields lower visual quality.

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/graph_example.png" alt="Average relative
bitrate ">
</div>

As a result of these advantages, relative bitrate/relative time graphs
are used frequently in this report since they assist in the evaluation
of the codecs in the test set, especially when number of codecs is
large.

A more detailed description of the preparation of these graphs is given
below.

### Bitrates Ratio with the Same Quality

The first step in computing the average bitrate ratio for a fixed
quality is inversion of the axes of the bitrate/quality graph (see next
figure). All further computations are performed using the inverted
graph.

The second step involves averaging the interval over which the quality
axis is chosen. Averaging is performed only over those segments for
which there are results for both codecs. This limitation is due to the
difficulty of developing extrapolation methods for classic RD curves;
nevertheless, for interpolation of RD curves, even linear methods are
acceptable.

The final step is calculation of the area under the curves in the chosen
interpolation segment and determination of their ratio (see next
figure). This result is an average bitrate ratio for a fixed quality for
the two codecs. If more than two codecs are considered, then one of them
is defined as a reference codec and the quality of others is compared to
that of the reference.

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/graph_example_2.png" alt="RD curves
comparison ">
</div>

### Relative Codec Encoding Time Computation

To compute the relative processing time of two codecs for a particular
video sequence, the encoding time is calculated for both codecs (the
encoding times are summed for all bitrates) and the ratio is taken. For
three or more codecs, one codec is chosen as a reference and the ratio
of its encoding time to that of the others is calculated.

For multiple sequences, each codec is assigned an arithmetic mean of
average relative encoding times for each sequence.

<span id="Appendix_7"></span>

## Appendix 7. Objective Quality Metrics Description

### SSIM (Structural SIMilarity)

#### Brief Description

The original [paper on the SSIM metric](http://ieeexplore.ieee.org/iel5/83/28667/01284395.pdf)
was published by Wang, et al (Zhou Wang, Alan
Conrad Bovik, Hamid Rahim Sheikh and Eero P. Simoncelli, “Image Quality
Assessment: From Error Visibility to Structural Similarity,” IEEE
Transactions on Image Processing, Vol. 13, No. 4, April 2004).

The SSIM author homepage is found at the following URL:
[http://www.cns.nyu.edu/~lcv/ssim](http://www.cns.nyu.edu/~lcv/ssim/)

The scheme of SSIM calculation can be presented as follows. The main
idea that underlies the structural similarity (SSIM) index is comparison
of the distortion of three image components:

- Luminance
- Contrast
- Structure

The final formula, after combining these comparisons, is the following:

<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/ssim.png" alt="ssim ">

_L_ is the dynamic range of the pixel values (255 for 8-bit grayscale
images), and _K<sub>1</sub>, K<sub>2</sub> &lt;&lt; 1._

The values K<sub>1</sub> = 0.01 and K<sub>2</sub> = 0.03 were used for
the comparison presented in this report, and the matrix filled with a
value “1” in each position to form a filter for the result map.

For the implementation used in this comparison, one SSIM value
corresponds to two sequences. The value is in the range \[-1, 1\], with
higher values being more desirable (a value of 1 corresponds to
identical frames). One of the advantages of the SSIM metric is that it
better represents human visual perception than does PSNR. SSIM is more
complex, however, and takes more time to calculate.

#### Examples

The following is an example of an SSIM result for an original and
processed (compressed with lossy compression) image. The resulting value
of 0.9 demonstrates that the two images are very similar.

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/ssim_example.png" alt="SSIM example for compressed
image ">
</div>

The following are more examples how various types of distortion
influence the SSIM value.

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/foreman_ssim.gif" alt="Original and processed images (for SSIM
example)">
</div>

The SSIM values for the Y-plane for these images are given below.

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/foreman_ssim_values.gif" alt="SSIM values for original and processed
images ">
</div>

### PSNR (Peak Signal-to-Noise Ratio)

#### Brief Description

This metric, which is often used in actual practice, is called the peak
signal-to-noise ratio, or PSNR.

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/psnr.png" alt="PSNR ">
</div>

Generally, this metric has the same form as the mean square error (MSE),
but it is more convenient to use because of the logarithmic scale. It
still has the same disadvantages as the MSE metric, however.

In MSU Video Quality Measurement Tool the PSNR can be calculated for all
YUV and RGB components and for the L component of LUV color space. The
PSNR value is quick and easy to calculate, but it is sometimes
inappropriate as relates to human visual perception.

A maximum deviation of 255 is used for the PSNR for the RGB and YUV
color components because, in YUV files, there is 1 byte for each color
component. The maximum possible difference, therefore, is 255. For the
LUV color space, the maximum deviation is 100.

The values of the PSNR in the LUV color space are in the range \[0,
100\]; the value 100 means that the frames are identical.

#### Examples

PSNR visualization uses different colors for better visual
representation:

- Black — value is very small (99 – 100)
- Blue — value is small (35 – 99)
- Green — value is moderate (20 – 35)
- Yellow — value is high (17 – 20)
- Red — value is very high (0 – 17)

The following is an example of the PSNR metric:

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/psnr_example.gif" alt="PSNR example for two frames ">
</div>

The following are further examples demonstrating how various distortions
can influence the PSNR value.

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/foreman_psnr.gif" alt="Original and processed images (for PSNR example)">
</div>

Next are the PSNR values for the Y–plane for these images

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/foreman_psnr_values.gif" alt="PSNR values for original and processed images ">
</div>

<span id="Appendix_8"></span>

## Appendix 8. VP8, x264 and XviD comparison

This appendix includes results for [VP8
encoder](http://www.webmproject.org/) comparison with x264 and XviD.  
**VP8 encoder does not met our speed requirements for this comparison**,
but we have included this codec due to many users requests. We would
like to express our gratitude to VP8 developers for provding codec and
presets and their help with presets tuning.

### RD-curves

#### Movies

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/vp8_rd_ice.png">
</div>

#### HDTV

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/vp8_rd_amazon.png">
</div>

### Bitrate handling

#### Movies

Bitrate handling for VP8 encoder for movies is very good. Here are the
results for Movies.

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/vp8_bh_ice.png">
</div>

#### HDTV

Bitrate handling for VP8 encoder for HDTV is quite good, except Troy
sequence at low bitrates. Here are the results for HDTV.

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/vp8_bh_amazon.png">
</div>

### Speed/Quality trade-off

#### Movies

Comparing VP8 to XviD, VP8 is 5-25 times slower with 10-30% better
quality (lower bitrate for the same quality). When comparing VP8 and
x264 VP8 also shows 5-25 lower encoding speed with 20-30% lower quality
at average. For example x264 High-Speed preset is faster and has higher
quality than any of VP8 presets at average.

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/vp8_tradeoff_ice.png">
</div>

#### HDTV

Comparing VP8 to XviD, VP8 is 5-20 times slower with 10-20% better
quality (lower bitrate for the same quality). When comapring VP8 and
x264 VP8 shows 5-20 lower encoding speed with almost the same quality,
excluding x624 High-Quality preset. The results for HDTV

<div class="center">
<img src="/assets/img/codecs/mpeg4-avc-h264-2010-appendixes/vp8_tradeoff_amazon.png">
</div>

### Presets

<div class="center" style="text-align: center">
<table class="center" border="" style="border-collapse: collapse; text-align: center" cellspacing="1" cellpadding="7" bordercolor="#CCCCCC">
    <colgroup>
    <col style="width: 50%" />
    <col style="width: 50%" />
    </colgroup>
<tbody><tr>
    <th>Name</th>
    <th>Encoding parameters</th>
</tr>
<tr>
    <td>good1</td>
    <td>
    First pass:<br>
         -p 2 --pass=1 --fpf=tmp.fpf --threads=4 --good --cpu-used=1 --end-usage=0 --auto-alt-ref=1  -v --minsection-pct=5 --maxsection-pct=800 --lag-in-frames=16 --kf-min-dist=0 --kf-max-dist=999999 --token-parts=2 --static-thresh=0 --min-q=0 --max-q=63
    <p>
    Second pass:<br>
         -p 2 --pass=2 --fpf=tmp.fpf --threads=4 --good --cpu-used=1 --end-usage=0 --auto-alt-ref=1 -v --minsection-pct=5 --maxsection-pct=800 --lag-in-frames=16 --kf-min-dist=0 --kf-max-dist=999999 --token-parts=2 --static-thresh=0 --min-q=0 
         --max-q=63
    </p>
    </td>
</tr>
<tr>
    <td>good2</td>
    <td>The same as good1, but --cpu-used=2</td>
</tr>
<tr>
    <td>good3</td>
    <td>--cpu-used=3</td>
</tr>
<tr>
    <td>good4</td>
    <td>--cpu-used=5</td>
</tr>
<tr>
    <td>good5</td>
    <td>--cpu-used=5</td>
</tr>
<tr>
    <td>best</td>
    <td>The same as good1, but --best instead of --good and without --cpu-used</td>
</tr>
</tbody></table>
</div>

### Comments from VP8 Developers

_We've been following the MSU tests since they began and respect the
group's work. One issue we noticed in the test is that most input
sequences were previously compressed using other codecs. These sequences
have an inherent bias against VP8 in recompression tests. As pointed out
by other developers, H.264 and MPEG-like encoders have slight advantages
in reproducing some of their own typical artifacts, which helps their
objective measurement numbers but not necessarily visual quality. This
is reflected by relatively better results for VP8 on the only
uncompressed input sequence, "mobile calendar."_

_Even with this limitation, VP8 delivered respectable results against
other encoders, especially considering this is the first time VP8 has
been included in the test and VP8 has not been specifically optimized
for SSIM as some other codecs have._

_To date, WebM developers have focused on the VP8 decoder performance and
are only starting to optimize the encoder for speed. The WebM project
has only been underway for three weeks, and we believe that our encoder
speed will improve significantly in the near future._

[Return to H.264 Video Codec Comparison
Report](/codecs/mpeg4-avc-h264-2010.html)

## Contacts

E-mail: <videocodec-testing@graphics.cs.msu.ru>
