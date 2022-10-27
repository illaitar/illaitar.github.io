---
original_url: http://compression.ru/video/grain_degrain/index_en.html
title: Grain-Degrain Project / Technology for removing and applying of film grain
description: We developed new methods of removing and applying of the film grain
preview_img: /assets/img/filters/grain-degrain/00_05_DTs_src.jpg
---

# Grain-Degrain Project

* Project: Dr. Dmitriy Vatolin
* Implementation, ideas: Konstantin Strelnikov, Maxim Makhinya

We developed new methods of removing and applying of the film grain
(specific type of noise that is usually present in materials that were
captured from film). Our methods allow extraction of film grain
information from video and using it for applying of the grain that is
very similar to original.  
Some examples and explanation you can find below.

## Results

Here are three examples of film grain from real video, it could be
easily seen that film grain has another structure than digital noise. In
most cases film grain makes video more natural and also masks some small
artifacts:

<div class="center">
    <div>
        <img src="/assets/img/filters/grain-degrain/00_01_DA_src.jpg" alt="Original frame from DA sequence"><br>
        <i>Frame from DA sequence (720x353)</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/grain-degrain/00_03_MI_src.jpg" alt="Original frame from MI sequence"><br>
        <i>Frame from MI sequence (640x272)</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/grain-degrain/00_05_DTs_src.jpg" alt="Original frame from DTs sequence"><br>
        <i>Frame from DTs sequence (1920x1088)</i>
    </div>
</div>

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/grain-degrain/00_02_DA_large.jpg" alt="Scaled part of frame from DA" /><br />
Scaled part of frame from DA</td>
<td><img src="/assets/img/filters/grain-degrain/00_04_MI_large.jpg" alt="Scaled part of frame from MI" /><br />
Scaled part of frame from MI</td>
<td><img src="/assets/img/filters/grain-degrain/00_06_DTs_lagre.jpg" alt="Scaled part of frame from DTs" /><br />
Scaled part of frame from DTs</td>
</tr>
</tbody>
</table>

  
We have developed several methods for film grain removal including
temporal and spatial noise filtration; you can find few examples below:

<div class="center">
    <div>
        <img src="/assets/img/filters/grain-degrain/01_01_DA_src.jpg" alt="Source fragment from DA"><br>
        <i>Source fragment from DA</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/grain-degrain/01_02_DA_denoised.jpg" alt="Grain removal results"><br>
        <i>Grain removal results</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/grain-degrain/01_03_MI_src.jpg" alt="Source fragment from MI"><br>
        <i>Source fragment from MI</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/grain-degrain/01_04_MI_denoised.jpg" alt="Grain removal results"><br>
        <i>Grain removal results</i>
    </div>
</div>


<div class="center">
    <div>
        <img src="/assets/img/filters/grain-degrain/01_05_DTs_src.jpg" alt="Source fragment from DTs"><br>
        <i>Source fragment from DTs</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/grain-degrain/01_06_DTs_denoised.jpg" alt="Grain removal results"><br>
        <i>Grain removal results</i>
    </div>
</div>

  
We are proposing two types of grain parameters estimation:

- Noise parameters estimation
- Finding the best matching pattern in the predefined database

And three types of grain generation:

- Using estimated noise parameters
- Using patches from database
- Using analytical approximation of grain structure

An example of visual comparison for grain generation you can find below:

<div class="center">
    <div>
        <img src="/assets/img/filters/grain-degrain/02_01_DA_src.jpg" alt="Source fragment from DA"><br>
        <i>Source fragment from DA</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/grain-degrain/02_02_DA_regrained.jpg" alt="Regraining results"><br>
        <i>Regraining results</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/grain-degrain/02_03_MI_src.jpg" alt="Source fragment from MI"><br>
        <i>Source fragment from MI</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/grain-degrain/02_04_MI_regrained.jpg" alt="Grain removal results"><br>
        <i>Regraining results</i>
    </div>
</div>

  
We have obtained these results by original video de-graining,
determining grain parameters and applying grain to the de-grained video.
Structures of grain in the regrained frames look very similar to the
original sources.  
  
The following example shows how **regraining technique helps to increase
quality and makes compression artifacts significantly less noticeable**:

<table>
<tbody>
<tr class="odd">
<td><img src="/assets/img/filters/grain-degrain/02_05_DA_src.jpg" alt="Source fragment from DA" /><br />
Source fragment from DA</td>
<td><img src="/assets/img/filters/grain-degrain/02_06_DA_regrained.jpg" alt="Grain removal results" /><br />
Regraining results</td>
</tr>
</tbody>
</table>

These methods provides possibility to add grain to any other video,
making it more natural (for example adding grain to synthetic video).
This also makes compressed video look better especially in case when
original grain was corrupted by lossy video encoder.

## Download

Please contact us if you are interested in a commercial license.

E-mail: <video@graphics.cs.msu.ru>
