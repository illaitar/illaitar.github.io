---
title: "Depth continuity estimation in S3D video"
description: "How smooth is the depth transition between scenes?"
preview_img: /assets/img/vqmt3d/depth-continuity-s3d/scheme.png
subprojects: metrics
---

# Depth continuity estimation in S3D video

- Author: Alexander Bokov
- Supervisor: dr. Dmitriy Vatolin

## Introduction

One of the features that contribute to a movie's visual quality is the arrangement of objects in the scene. The most important (salient) objects are usually placed near the center of the screen, and sudden changes of the region of visual attention are avoided to make the watching experience more comfortable.
In stereoscopic videos, the same requirement applies to the depth field. We have developed a metric for estimating the smoothness of transitions in disparity during scene cuts.

Here is an illustration of the depth continuity metric. For each frame of the video we plot the parallax range, expressed in percent of frame width. Brighter areas on the chart correspond to more common disparity values in the shot. The top example shows well-aligned shots, the depth jump cut will not cause any discomfort. The bottom example contains a noticeable depth jump cut that could have become better upon more careful alignment.

<div class="center">
    <img src="/assets/img/vqmt3d/depth-continuity-s3d/scheme.png"><br>
</div>

The developed metric aims to estimate the depth jumps while assuming a simple visual saliency model based on two cues: center prior and defocus. The final value produced by the metric for a movie is dimensionless; higher values indicate more frequent and intense depth jump cuts throughout the movie.

## Experiments

We computed the overall depth continuity metric for 105 movies (detailed analysis will soon be available in report 10 under <a href="/stereo_quality/reports">all reports</a>). The following diagram depicts the metric value for each movie relative to its release date:

<div class="center">
    <img src="/assets/img/vqmt3d/depth-continuity-s3d/graph1.png"><br>
</div>

<div class="center">
    <img src="/assets/img/vqmt3d/depth-continuity-s3d/graph2.png"><br>
</div>
<div style="text-align: center;">A magnified portion of the diagram</div>
