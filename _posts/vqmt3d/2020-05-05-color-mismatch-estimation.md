---
title: Automatic color mismatch estimation in S3D videos using confidence maps
description: How to detect color distortion between the angles of a 3D video?
preview_img: /assets/img/vqmt3d/color-mismatch-estimation/preview.gif
subprojects: metrics
---
# Automatic color mismatch estimation in S3D videos using confidence maps

- Author: Stanislav Grokholsky
- Supervisor: dr. Dmitriy Vatolin



## Introduction

Usually, the cause of discomfort while watching stereoscopic video is the mismatch between the left and right views. One of the most common types of distortion is color mismatch between stereoscopic views.

We propose a new confidence-map-based algorithm that automatically detects the frames containing color distortions between two views of a stereoscopic video.

![Preview](/assets/img/vqmt3d/color-mismatch-estimation/preview.gif)

## Proposed method

Usage of confidence maps allows to detect the unreliable disparity values and therefore decreases the amount of false positives produced by our approach.

The proposed algorithm is a modified baseline model that consists of the following stages:
1. Global color correction of the right view
2. Matching of the right and left views
3. Compensation of the left view to the right based on the results of the comparison
4. Cutting off part of the minimum and maximum difference values between the right and compensated left views, filtering views to restore the discarded values
5. Calculation the normalized sum of squared difference values

A significant difference from the previous version of the algorithm is the use of confidence maps, that significantly reduces the number of algorithm's false positives. Additionally, the value filtering algorithm in step 4 of the basic algorithm was modified, and mean square error (MSE) function was replaced with the sum of absolute differences&nbsp;(SAD).


![Example](/assets/img/vqmt3d/color-mismatch-estimation/example.jpg)

<p><b>a — left view <br>
b — right view<br>
c — compensated left view<br>
d — visualization of the result of the basic algorithm<br>
e — visualization of the result using confidence<br>
f — visualization of the confidence map</b></p>


## Experiments

Comparisons were based on samples of scenes from 105 stereoscopic movies. Only scenes, where the values of the baseline algorithm exceeded the preset threshold, were selected. The sample size was 957 frames. Then, all selected frames were manually classified as true positive and false positive.
<p><b>Comparison of the basic algorithm with various modifications</b></p>

![Comparison](/assets/img/vqmt3d/color-mismatch-estimation/comparison.png)

During testing, the proposed modifications showed better results compared to the basic version of the algorithm.
