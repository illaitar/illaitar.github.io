---
title: "Geometric distortions analysis and correction"
description: "Automatic correction of vertical disparity, rotation mismatch and scale mismatch."
preview_img: /assets/img/vqmt3d/geometric-distortions-correction-s3d/example01_silent.gif
subprojects: correction metrics
---

# Geometric distortions analysis and correction

- Author: Alexey Shalpegin
- Supervisor: Dmitriy Vatolin

## Introduction

Production of low-budget modern S3D movies is prone to errors --- bad camera calibration, lack of synchronization. Such errors cause distortions --- the left and right video streams may be out of sync, have color differences and geometric distortions. These problems make viewing uncomfortable and in some cases cause a headache. Distortion correction enhances the movie's quality and increases viewing comfort. The following distortions are analyzed:

{:.center}
![](/assets/img/vqmt3d/geometric-distortions-correction-s3d/example01_silent.gif)
<div style="text-align: center;">Rotation mismatch (degrees)</div>

{:.center}
![](/assets/img/vqmt3d/geometric-distortions-correction-s3d/example02_journey.gif)
<div style="text-align: center;">Scale mismatch (percents)</div>

{:.center}
![](/assets/img/vqmt3d/geometric-distortions-correction-s3d/example03_harold.png)
<div style="text-align: center;">Vertical disparity (percents of frame width)</div>

We have developed a method for evaluation and correction of these inconsistencies.

## Distortion estimation and correction

{:.center}
![](/assets/img/vqmt3d/geometric-distortions-correction-s3d/algorithm.png)

The input data should be two time-synchronized videos of left and right camera views. The algorithm is as follows:
* Block stereo matching with quarter-pixel precision;
* Filtering of correspondence vectors based on image contrast and LRC;
* Estimation of affine correction transform parameters via modified RANSAC search;
* Scene change detection and per-scene application of correction transforms.

## Experiments

### Distortion estimation
Testing of distortion estimation was performed on multiple scenes from the stereo version of "Titanic". As the S3D version of this movie was produced via conversion, there are no geometric distortions. We introduced artificial distortions and compared the result of our algorithm with true values.


|                      |True value|Algorithm's estimate|
|:--------------------:|:--------:|:------------------:|
|       Rotation       |   0.5    |0.498—0.503         |
|       Scaling        | 0.0182   |0.0177—0.0186       |
| Vertical disparity   |   5.3    |5.2                 |


### Distortion correction
We have compared distortions after correction by the proposed algorithm and two commercial products --- Ocula Vertical Aligner and Nuke: YUVSoft Stereo Correction. Post-correction distortions were estimated using our method.

|                      |Our method|Ocula               |Stereo Correction|
|:--------------------:|:--------:|:------------------:|:---------------:|
|       Rotation       |   0      |0.0—0.5             |0.0              |
|       Scaling        |   0      |0.0000—0.0004       |0.0175—0.0185    |
|Vertical disparity    |   0      |0.0                 |-0.15            |

Both of the commercial products were outperformed by our algorithm. In the case of Ocula Vertical Aligner the rotation distortion of the corrected video linearly decreases for the first 150 frames, while our algorithm fully corrects the distortion.

### Movie quality assessment

We have compared the quality of 105 stereoscopic movies of different types with our distortion estimation algorithm --- movies that have been shot with stereo rigs, converted from 2D and created using computer graphics. Recent movies generally show improved quality.

{:.center}
![](/assets/img/vqmt3d/geometric-distortions-correction-s3d/scale_vs_release.png)

{:.center}
![](/assets/img/vqmt3d/geometric-distortions-correction-s3d/rot_vs_release.png)

## Results

* The proposed algorithm estimates and corrects rotation mismatch, scale mismatch and vertical disparity distortions and outperforms available commercial products
* The proposed correction method proved to be temporally consistent
* On an Intel Core i7-950 the distortion estimation implementation runs at 1 second per stereo pair. Parallel execution is available
* Video correction algorithm has been implemented as an AviSynth plugin
