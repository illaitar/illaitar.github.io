---
original_url: http://compression.ru/video/codec_comparison/introduction_en.html
title: Introduction to Video Codecs Comparison (video codec measurement)
description: Introduction to video codecs comparison.
preview_img: /assets/img/codecs/comparison-introduction/preview.jpg
---

# Introduction to Video Codecs Comparison

## Short introduction

There a lot of different codec comparisons it the internet - long and
short, emotional or not, biased and unprejudiced. But most of the
authors of such comparisons just put two frames from 2 movies nearby,
forgetting following important issues:

### 1. Every codec gives different quality on different frames of same sequence

Different factors play a role here. First of all, all codecs have
bitrate control mechanism that produces quality fluctuations even in
very good implementation. Secondly, user selects bitrate control
strategy, and in CBR case on slow scenes quality will be low, and on
fast ones it will degrade. Thirdly, codecs have a so-called key frame,
whose quality is determined separately and differs from other frames.
Fourthly quality depends on prefiltrations, that is included on all
present-day codecs. That means that on every sufficiently long movie,
taking in account that average movie is about 150000-200000 frames, it
is possible to select very good and very bad frames, especially if
one-pass CBR compression was used, and movie had enough motion. So, if
you have one long movie, codec A and B , approximately equal in quality,
and normal means of comparison automation (or if you like one of the
codecs very much), then it's easy for you to get a documental prove that
codec A s better than B ("just look at those frames!") and codec B s
better than A ("just look at those frames!"). That method is widely
used, alike in press-releases and video processing sites.

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/codecs/comparison-introduction/proval.gif" /><br />
Diagram brings into accord with metrics PSNR (if higher, then better quality).<br />
If you make a comparison on "peak" frames, the VP result will be better then DivX one.<br />
Other frames show the opposite conclusion.</td>
</tr>
</tbody>
</table>

### 2. Different codecs are tuned to different film types.

It is known that some time ago simultaneously existed two different
codecs - DivX 4.1 LowMotion and DivX 4.1 FastMotion. Playback was same,
but their internal parameters were tuned to low and high motion, and
compression produced different results. Note - FORMAT was same in both
cases, but compression was different, so equal size movies had different
quality. Similar devotion to specific data type exists in all codecs.
Some codecs better perform on high bitrates , some better compress low
ones. Some are tuned to high motion, and some better do with low. Codecs
can be tuned to better compress animation or real video. Noisy and clear
movies require separate tuning also. That means, that if you have almost
equal codecs A and B, it is easy to find movies where A is better than B
and vise versa. Curiously this could be same movie, but one could be
taken from DVD and other re-filmed in cinema.

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td markdown="1">
<img src="/assets/img/codecs/comparison-introduction/originall.jpg" alt="Original frame"><br />
Original frame
</td>
<td markdown="1">
<img src="/assets/img/codecs/comparison-introduction/divx3.jpg" alt="Divx 3.1"><br />
Divx 3.1
</td>
<td markdown="1">
<img src="/assets/img/codecs/comparison-introduction/divx5.jpg" alt="Divx 5.1"><br />
Divx 5.1
</td>
</tr>
</tbody>
</table>


This is frames quality in conventional colors (black - no difference
with original,
blue and green - more difference, red - huge difference). If we will use
this frames
for comparison - DivX 3.1 will be better DivX 5.1.

### 3. Compression quality could seriously depend on coding parameters.

Most of the people do not think about it (codec author should think
about everything), but codecs have many parameters, that sometimes can
seriously affect quality (for the same file size). First of all, these
are bitrate strategy parameters, especially selection between
"quality-based" and "bitrate-based" modes. After that prefiltration
parameters play a role. For example, deinterlacing (because some movies
were compressed with MPEG4 in interlaced mode), denoising (noise
reduction), deflicking (removal of effect) and so on. There are
parameters of key frame frequence, B-frame mask, control of prefiltering
dependence from movie. etc. That means that if you have A and B codecs
of approximately equal quality, you can switch one codec's mode to
maximum performance, and second codec mode to maximum quality and
receive two movies of equal size, but unequal quality. One can even put
both movies on his site so everyone could see the difference (like some
companies do) :-). In that case fact that one codec worked 10 times
slower than another somehow becomes lost - why the people (and
journalist) should to know such uninteresting information? In that case
source sequence could not be found (due o size, for sure), and coding
parameters are unknown (and now you know why). Really there are many
more delicate ways to receive "advantage" and even real advantage - for
example there are no criteria to determine how frame skipping is
significant for perception. But these methods are most common. So, if
you study "fooling" methods, you could see that sufficiently large
testing is required for correct comparison. As a minimum it is important
to compare sequences with different characteristic on different
bitrates, while using integral (average) quality characteristics
throughout the sequence. So, let us wish you successful detailed
comparison.

<div class="center">
<div>
<img src="/assets/img/codecs/comparison-introduction/last.gif" alt="frame" /><br />
Quality fall in one of the bitrate in this codec, because it has error in rate control.<br />
This is bitrate unlucky for this codec.
</div>
</div>
Good luck!

## Contacts

E-mail: <video@graphics.cs.msu.ru>
