---
title: Perspective distortions estimation
description: How to detect a mismatch in the vertical position of the cameras?
preview_img: /assets/img/vqmt3d/perspective-distortions-estimation/preview.png
subprojects: metrics
---
# Perspective distortions estimation

- Author: Alexandra Anzina
- Supervisor: dr. Dmitriy Vatolin


## Introduction
Sometimes, during stereoscopic movie shooting cameras can be installed incorrectly, resulting in a variety of geometric distortions. Particular case of geometric distortions is an artifact that occurs when stereoscopic cameras are vertically misaligned. We propose a new algorithm to detect a mismatch in the vertical position of the cameras.

![Example](/assets/img/vqmt3d/perspective-distortions-estimation/example.png)


## Proposed method
Due to the geometric properties of optics, objects decrease in size proportionally to the distance between the object and camera. This phenomenon is called a linear perspective. In this regard, the algorithm is based on the assumption that, if the vertical position of the cameras does not match, the vertical shift value changes proportionally to the distance.

The algorithm is based on motion estimation and a modified version of RANSAC.


![Algorithm scheme](/assets/img/vqmt3d/perspective-distortions-estimation/algorithm.png)

## Experiments

For the analysis of stereoscopic frames where the artifact was not expressed explicitly, compensation was applied — the horizontal shift of the right image so that the background objects had horizontal disparity values equal to zero.

![Left image](/assets/img/vqmt3d/perspective-distortions-estimation/left_image.jpg)

![Difference](/assets/img/vqmt3d/perspective-distortions-estimation/difference.jpg)

![Compensated difference](/assets/img/vqmt3d/perspective-distortions-estimation/compensated_difference.jpg)


In this work, 14 stereoscopic movies were analyzed and 122 scenes with this artifact were found.

The efficiency of this method was proven on the artificially created test set, the average confidence in the results was approximately 90%. Pearson correlation coefficient between ground truth and algorithm values was 0.993.


![Experimental evaluation](/assets/img/vqmt3d/perspective-distortions-estimation/evalution.png)

A validation dataset was also created, consisting of 200 scenes taken from 4 stereo films.

![Validation](/assets/img/vqmt3d/perspective-distortions-estimation/validation.png)

## Results

The average speed of the algorithm on the Intel&nbsp;Core&nbsp;i7-6500U&nbsp;2.50GHz CPU is 1.04&nbsp;seconds per 960&nbsp;×&nbsp;544 resolution frame with 96.8% of the time spent on calculating the disparity and confidence maps.
