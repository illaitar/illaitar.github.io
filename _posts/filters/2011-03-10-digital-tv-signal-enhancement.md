---
original_url: http://compression.ru/video/intel_dtv/index_en.html
title: MSU Digital TV Signal Enhancement
description: Fast and flexible algorithm for image denoising
preview_img: /assets/img/filters/digital-tv-signal-enhancement/30_src_large.jpg
---

# MSU Digital TV Signal Enhancement

<table style="width: 100%">
<tbody>
<tr class="odd">
<td style="text-align: left;"><embed src="/assets/img/filters/digital-tv-signal-enhancement/intel_logo.gif"/></td>
<td style="text-align: right;"><embed src="/assets/img/filters/digital-tv-signal-enhancement/gm_lab_vg.gif"/></td>
</tr>
</tbody>
</table>

* Project: Dr. Dmitriy Vatolin
* Implementation, ideas: Maxim Makhinya
* Implementation: Kalinkina Daria

In this project a new fast and flexible algorithm for image denoising
was developed. It could be easily used to enhance image and video
corrupted by strong compression. This technique can be adapted to use in
de-blocking and Gibbs phenomenon reduction algorithms (de-blocking and
de-ringing algorithms). Since the fastest way to reduce noise in an
image is averaging pixels using only neighbor pixels which are similar
in some way to the current pixel, we designed a new method of averaging
that surpasses already known methods in visual quality as well as in
speed. One of the advantages of our method is the usage of the local
window of a small radius to reduce small or middle strength noise,
another one is a simple measure for pixels' similarity determination
which can be used in both spatial and motion compensation-based temporal
denoising methods. During the project we also showed how proposed
technique can be optimized to reduce number of computationally expensive
operations for using it on DSP-like processors.

## Results

We have tested our fast variant of spatial noise reduction filter by
applying it to different color videos after adding Gaussian noise of
different levels. Such a procedure allows comparing denoised video to
original one. We use standard PSNR measure to estimate denoising
quality, for each test video sequence this measure was calculated for
every frame and then averaged. Average results of comparison with other
well-known spatial algorithms are presented bellow. We use six different
video sequences and three different noise levels for each of them. First
three-five letters in the test sequences’ names in figure below
designate abbreviated name of a test sequence, and numbers in the test
sequences’ names mean value of Gauss variance of added Gauss Zero Mean
noise. Proposed method shows good results on all test sequences.

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/digital-tv-signal-enhancement/cmp_graph.gif" alt="Numerical comparison of proposed method to other well-known algorithms" /><br />
Numerical comparison of proposed method to other well-known algorithms</td>
</tr>
</tbody>
</table>

  
In addition to high PSNR values, proposed algorithm shows good visual
quality.

Next example illustrates a source frame from “shattered” sequence,
up-scaled part of it is used in visual comparison between different
methods. This example proves that proposed method can efficiently
suppress noise without decreasing overall image sharpness and
over-blurring.

<div class="center">
<div>
<img src="/assets/img/filters/digital-tv-signal-enhancement/10_src_large.jpg" alt="A frame from the
sequence "><br/>  
A frame from the "shattered" sequence
</div>
</div>

<table class="center" style="text-align: center">
<tbody>
<tr class="odd" style="vertical-align: top">
<td><img src="/assets/img/filters/digital-tv-signal-enhancement/11_src.png" alt="An up-scaled part of frame from &#39;shattered&#39; sequence with original noise" /><br />
An up-scaled part of frame from “shattered”<br />
sequence with original noise</td>
<td><img src="/assets/img/filters/digital-tv-signal-enhancement/12_prop.png" alt="After proposed method" /><br />
After proposed method</td>
</tr>
<tr class="even">
<td><img src="/assets/img/filters/digital-tv-signal-enhancement/13_mont.png" alt="After Monte Carlo denoising" /><br />
After Monte Carlo denoising</td>
<td><img src="/assets/img/filters/digital-tv-signal-enhancement/14_fuzzy.png" alt="After FUZZY denoising" /><br />
After FUZZY denoising</td>
</tr>
<tr class="odd">
<td><img src="/assets/img/filters/digital-tv-signal-enhancement/15_knn.png" alt="After KNN denoising" /><br />
After KNN denoising</td>
<td><img src="/assets/img/filters/digital-tv-signal-enhancement/16_fuels.png" alt="After FUELS denoising" /><br />
After FUELS denoising</td>
</tr>
</tbody>
</table>

  
The following two examples show how proposed method can be used for
enhancement of images corrupted by strong compression.

<div class="center">
<div>
<img src="/assets/img/filters/digital-tv-signal-enhancement/20_src_large.jpg" alt=" Original
frame "><br/> 
Original frame
</div>
</div>

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/digital-tv-signal-enhancement/21_src.png" alt="An up-scaled part of source frame with original artefacts" /><br />
An up-scaled part of source frame<br />
with original artefacts</td>
<td><img src="/assets/img/filters/digital-tv-signal-enhancement/22_prop.png" alt="Recovered sample using proposed algorithm" /><br />
Recovered sample<br />
using proposed algorithm</td>
</tr>
</tbody>
</table>

  
This is a vivid example of how proposed method can be used in
de-blocking applications. To achieve such results we set up denoising
strength to large value.

Next example shows another useful property of developed method — it
removes effects that are visually similar to Gibbs phenomenon, which can
be often seen in strongly compressed images in areas around sharp edges.
We also pay attention to another interesting property of the algorithm:
example shows that processed image, besides being cleaned from
artifacts, is even sharper than the original one. We have applied our
method twice to obtain this result.

<div class="center">
<div>
<img src="/assets/img/filters/digital-tv-signal-enhancement/30_src_large.jpg" alt=" Original
frame "> <br/>
Original frame
</div>
</div>


<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td>
<img src="/assets/img/filters/digital-tv-signal-enhancement/31_src.png" alt="An up-scaled part of source frame with original
artefacts "><br/>
An up-scaled part of source frame <br/> 
with original artefacts</td>
<td>
<img src="/assets/img/filters/digital-tv-signal-enhancement/32_prop.png" alt="Recovered sample using proposed
algorithm "> <br/>
Recovered sample  <br/>
using proposed algorithm</td>
</tr>
</tbody>
</table>


## Acknowledgements

We would like to express our gratitude to Intel Corporation, that
supported this work, and personally to Tiehan Lu and Walid Ali.
Additional thanks to Computer Graphics and Multimedia at Moscow State
University and personally to Bayakovski Yuri.

## References

1.  H.B. Mitchell and N. Mashkit, “Noise smoothing by a fast k-nearest
    neighbour algorithm” // Signal Processing: Image Communication, vol.
    4, pp. 227–232, 1992.
2.  Ruifeng Xu and Sumanta N. Pattanaik, “A Novel Monte Carlo Noise
    Reduction Operator” // IEEE Computer Graphics and Applications, 2005
3.  C. Tomasi and R. Manduchi, “Bilateral Filtering for Gray and Color
    Images,” Proc. IEEE 6th Int’l Conf. Computer Vision (ICCV), IEEE CS
    Press, 1998, pp. 839-846.
4.  Torsten Seemann and Peter Tischer, “Structure Preserving Noise
    Filtering of Images using Explicit Local Segmentation” // IEEE
    Pattern Recognition, 1998, 16-20 Aug, Vol. 2, pp.1610-1612
5.  Dimitri Van De Ville, Mike Nachtegael, Dietrich Van der Weken,
    Etienne E. Kerre Wilfried Philips, and Ignace Lemahieu, “Noise
    Reduction by Fuzzy Image Filtering” // IEEE Transactions On Fuzzy
    Systems, Vol. 11, No. 4, August 2003 429

## Download

**This algorithm was developed in collaboration with Intel so currently
it is unavailable due to contract limitations.**

## Contacts

E-mail: <video@graphics.cs.msu.ru>

Please read [MSU filters
FAQ](/video_filters/video-filters-faq-en.html) before mailing.
