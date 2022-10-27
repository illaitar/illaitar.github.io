---
title: Temporal shift estimation for stereoscopic videos
description: How to take into account geometric distortions in the estimation of the temporal shift?
preview_img: /assets/img/vqmt3d/temporal-shift-estimation/preview.gif
subprojects: metrics
---

# Temporal shift estimation for stereoscopic videos

- Author: Aleksandr Ploshkin
- Supervisor: dr. Dmitriy Vatolin


## Introduction

Video synchronization is a fundamental computer-vision task necessary for a wide range of applications. A 3D video involves two streams, which show the scene from different angles simultaneously. It was demonstrated that desynchronization between streams causes severe discomfort for people watching the stereo video.

We propose a temporal shift (time difference) estimation method. In this method we assume that the temporal shift and geometric distortion between the two streams are constant throughout each scene. The result of the algorithm is a shift value measured in fractions of frame steps (inverted FPS).

<p><b>Example of a detected shot with temporal shift<br>Drive Angry</b></p>
<div align="left" >
  <p><img src="/assets/img/vqmt3d/temporal-shift-estimation/drive_angry.gif"/></p>
</div>

We approached the task as a regression problem by constructing an equation that describes the spatio-temporal dependency using the motion disparity and stereo parallax vectors.

The proposed algorithm consists of the following two main stages:
1. Calculate the stereo parallax and motion vectors using a block-based matching for each stereo frame;
2. Estimate model parameters from motion vectors with high confidence using the RANSAC algorithm.

Stereoscopic video can employ horizontal disparity by design in order to achieve the stereo effect, but vertical disparity is always the result of spatio-temporal misalignment. The algorithm uses this assumption to restore a temporal shift value from vectors’ vertical components. The detailed algorithm description is published in [[1]](#1).

<p><b>A histogram of founded values. The tangent of the slope is the shift value in frames’ fractions</b></p>
<div align="left" >
  <p><img src="/assets/img/vqmt3d/temporal-shift-estimation/histogram.png"/></p>
</div>


## Experiments
The algorithm has been tested on our synthetically created dataset. The video set contained 396 stereoscopic scenes with frame rate of 30 FPS from only converted stereoscopic movies, as they did not contain temporal shifts. The frames were subsampled to simulate the temporal shift (e.g. taking only even frames for the left view and uneven frames for the right view results in a shift of 0.5 frames). The final dataset consisted of subsampled views, resulting in a relative temporal shift by ±{0.25, 0.5, 1.0, 2.0} frames.

The comparison of the current algorithm with the previous work shows a significant gain. The error was calculated as the absolute difference between the target and estimated shift values in the frame steps. The evaluation problem was addressed as a classification of whether the error was below a threshold value. In the experiments, the least noticeable value of the time shift was estimated to be 0.10 frames, and it was used as a threshold error value for comparing algorithms.


<style type="text/css">
#wrap {
   width:100%;
   margin:0 auto;
}
#left_col {
   float:left;
   width:50%;
}
#right_col {
   float:right;
   width:50%;
}
</style>

<div id="wrap">
    <div id="left_col">
        <p><img src="/assets/img/vqmt3d/temporal-shift-estimation/error.png" align="left"/></p>
    </div>
    <div id="right_col">
        <p><img src="/assets/img/vqmt3d/temporal-shift-estimation/accuracy.png" align="right"/></p>
    </div>
    <p><div style="text-align: center; clear: both;"><b>The comparison of proposed algorithm with our previous work <a href="#1">[1]</a>.  Left: the relation between the temporal shift accuracy and the estimation error threshold; Right: the exact scores for error threshold value equal to 0.10 frames.</b>
    </div></p>
</div>

Additionally, we’ve processed 60 full-length stereoscopic movies and revealed 198 scenes with temporal shift value at least 0.10 frames. Further examples can be found in our VQMT3D reports <a href="/stereo_quality/report8.html">8</a> and <a href="/stereo_quality/report9.html">9</a>.

<p><b>Histogram of revealed scenes with temporal shift</b></p>

<div align="left" >
  <p><img src="/assets/img/vqmt3d/temporal-shift-estimation/temporal_shift.png"/></p>
</div>


## Results

* Developed a temporal shift estimation algorithm
    * Speed: 0.9 FPS at Intel Core i7-4700HQ CPU
    * Accuracy: 0.9798 for 0.1 frames error threshold
* Revealed 198 shifted scenes in 60 feature-length stereoscopic movies

## Publications



<a id="1">1.</a> Ploshkin, A., and Vatolin, D.,<br>
<b>&ldquo;Accurate method of temporal-shift estimation for 3D video,&rdquo;</b> [<a href="https://istina.msu.ru/download/172728093/1iwpfY:OtcJLggCDeUg3b7-O1kM2U3McX8/">pdf</a>]<br>
2018-3DTV-Conference: 3D at any scale and any perspective (3DTV-CON),<br/>2018. <a href="https://doi.org/10.1109/3DTV.2018.8478431">doi:10.1109/3DTV.2018.8478431</a>
