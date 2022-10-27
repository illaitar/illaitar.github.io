---
title: "Detection of stereo window violation"
description: "How to find objects that are present only in one view?"
preview_img: /assets/img/vqmt3d/stereo-window-violation/scheme.png
subprojects: metrics
---

# Detection of stereo window violation

- Author: Alexander Bokov
- Supervisor: dr. Dmitriy Vatolin

## Introduction

In stereoscopic videos, when an object has negative parallax (appears to be close to the spectator) and moves in or out of the frame, some portions of the object are present in only one view. This edge violation causes discomfort and cumulative peripheral eyestrain for the viewers.

<div class="center">
    <div>
        <img src="/assets/img/vqmt3d/stereo-window-violation/scheme.png"><br>
        <i>Window violation: a part of the house is visible in the left view, but is not represented in the right view</i>
    </div>
</div>

To fix the stereo window violation, stereographers use the floating window technique, which removes the portions of the object which do not have correspondences in the other view. The resulting cropped stereopair provides a more immersive experience and removes confusing peripheral signals to the viewer's brain.

<div class="center">
    <div>
        <img src="/assets/img/vqmt3d/stereo-window-violation/example-correction.jpg"><br>
        <i>Left column – original stereopair, right column – stereopair with floating window applied</i>
    </div>
</div>

We provide two different metrics for stereo window violation analysis: stereo window placement comfort measured in MSU-StereoWindowComfort-2014 and quality of stereo window violations handling measured in MSU-StereoViolationHandling-2014.

The MSU-StereoWindowComfort-2014 metric aims to assess viewing comfort. It takes into account both average stereo window violation noticeability (which depends on the size and sharpness of edge-violating object) and average depth distribution across the movie (we consider an imbalanced parallax range shifted towards positive values to be less comfortable). Thus, the metric penalizes movies that achieved low stereo window violation noticeability by means of placing nearly all the content behind the screen.

The MSU-StereoViolationHandling-2014 metric is more technical. It is designed to measure how well potentially problematic negative parallax content is handled across the given movie. Proper use of floating windows and placing all negative parallax content far from screen edges are both considered to be acceptable techniques.

## Experiments

<div class="center">
    <div>
        <img src="/assets/img/vqmt3d/stereo-window-violation/example-dolphin.gif"><br>
        <i>A severe window violation example in “Dolphin Tale” movie</i>
    </div>
</div>

Much more real-life examples can be found in our <a href="/stereo_quality/report6.html">report 6</a> and <a href="/stereo_quality/report7.html">report 7</a>. Overall comparisons will soon be available in report 10 under <a href="/stereo_quality/reports">all reports</a>.

We computed the proposed metrics for 105 movies. The following diagrams depict the metric value for each movie relative to its release date:

<div class="center">
    <img src="/assets/img/vqmt3d/stereo-window-violation/graph1.png"><br>
</div>

<div class="center">
    <div>
        <img src="/assets/img/vqmt3d/stereo-window-violation/graph2.png"><br>
        <i>A magnified portion of the diagram</i>
    </div>
</div>

<div class="center">
    <img src="/assets/img/vqmt3d/stereo-window-violation/graph3.png"><br>
</div>

<div class="center">
    <div>
        <img src="/assets/img/vqmt3d/stereo-window-violation/graph4.png"><br>
        <i>A magnified portion of the diagram</i>
    </div>
</div>
