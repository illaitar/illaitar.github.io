---
title: "Automatic sharpness mismatch detection and compensation in stereo"
description: "While watching movies with sharpness mismatch the spectator may lose sense of 3D or even get a headache."
preview_img: /assets/img/vqmt3d/sharpness-mismatch-detection-s3d/example_02.gif
subprojects: correction metrics
---

# Automatic sharpness mismatch detection and compensation in stereo

- Author: Alexander Belous
- Supervisor: Dmitriy Vatolin

## Introduction

{:.center}
![](/assets/img/vqmt3d/sharpness-mismatch-detection-s3d/example04_jack.png)
<div style="text-align: center;">Enlarged fragment of left and right views with visible sharpness mismatch from “Jack the Giant Slayer”</div>

A lot of S3D movies contain artifacts despite large budgets and modern post-processing methods. It is caused by insufficiency in automatization of post-processing and high rate of human errors.

Differences in sharpness between views are usually caused by incorrectly calibrated cameras. While watching movies with sharpness mismatch the spectator may lose sense of 3D, which is the primary goal of stereo, or even get a headache.

## Proposed method
The algorithm estimates the amount of local sharpness mismatch for each stereo pair, trying to fix it if possible.

The steps of the algorithm:
* Alignment of views using optical flow with a custom comparison function;
* Evaluation of sharpness mismatch metric via comparison of DCT coefficients distribution;
* Reconstruction of both views with fixed sharpness mismatch. The reconstruction is performed in regions of high-confidence optical flow.

## Experiments

{:.center}
![](/assets/img/vqmt3d/sharpness-mismatch-detection-s3d/example05_driving.gif)
<div style="text-align: center;">The “Driving Angry” movie: left — input stereo pair, right — corrected stereo pair</div>

We compared our algorithm with a commercial plug-in for Nuke — Ocula 3.0 FocusMatcher on a set of 8 stereo sequences.

Pros over Ocula 3.0:
* Allows restoration of picture with both views' sharpness shifted, while Ocula only allows restoration of one view based on another
* Does not produce new artifacts in the video

{:.center}
![](/assets/img/vqmt3d/sharpness-mismatch-detection-s3d/sharpness_mismatch.png)
<div style="text-align: center;">Results of the proposed algorithm</div>

{:.center}
![](/assets/img/vqmt3d/sharpness-mismatch-detection-s3d/sharpness_mismatch_ocula.png)
<div style="text-align: center;">Results of comparison with Ocula 3.0 (FocusMatching)</div>

Pictures below illustrate the differences between proposed algorithm and FocusMatcher on a single stereo pair. It is notable that FocusMarcher corrupts the background of semi-transparent objects (red boxes), while proposed algorithm doesn't have such an effect.

{:.center}
![](/assets/img/vqmt3d/sharpness-mismatch-detection-s3d/example_01.png)
<div style="text-align: center;">Input views from “Driving Angry”</div>

{:.center}
![](/assets/img/vqmt3d/sharpness-mismatch-detection-s3d/example_02.gif)
<div style="text-align: center;">Result of proposed algorithm (corrected sharpness mismatch, no new artifacts introduced)</div>

{:.center}
![](/assets/img/vqmt3d/sharpness-mismatch-detection-s3d/example_03.gif)
<div style="text-align: center;">Ocula 3.0's result (red boxes contain produced artifacts)</div>

## Results

* Our algorithm automatically corrects significant sharpness mismatch while preserving the quality of original views
* Temporal consistency of applied corrections
* Speed of reconstruction: 1/16 FullHD stereo pairs per second on an Intel Core i5. Detection speed: 3 stereo pairs per second
