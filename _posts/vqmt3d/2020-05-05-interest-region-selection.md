---
title: Method for region of interest selection with noticeable stereoscopic distortions in S3D videos
description: How to find foreground objects that are stuck to the background?
preview_img: /assets/img/vqmt3d/interest-region-selection/preview.png

---
# Method for region of interest selection with noticeable stereoscopic distortions in S3D videos

- Author: Denis Kondranin
- Supervisor: dr. Dmitriy Vatolin

## Introduction

Shooting 3D with two cameras without proper calibration causes geometric and sharpness distortions. The search of such distortions is manual and time-consuming. So, the special algorithm has been developed. It automates the process of fragments' selection in stereoscopic frame containing the most noticeable geometric distortions and inconsistency of views in terms of sharpness.



<p><b><br>Types of distortions</b></p>

![Types of distortions](/assets/img/vqmt3d/interest-region-selection/distortions.png)


<p><b><br>Example of sharpness mismatch</b></p>

![Sharpness mismatch example](/assets/img/vqmt3d/interest-region-selection/preview.png)

<p><b><br>Example of color mismatch<br>Spy Kids 3D: Game Over</b></p>

![Color mismatch example](/assets/img/vqmt3d/interest-region-selection/color_mismatch.gif)

<p><b><br>Example of rotation mismatch<br>Drive Angry</b></p>

![Rotation mismatch example](/assets/img/vqmt3d/interest-region-selection/rotation_mismatch1.png)
![Rotation mismatch example](/assets/img/vqmt3d/interest-region-selection/rotation_mismatch2.jpg)

<p><b><br>Example of scale mismatch</b></p>

![Scale mismatch example](/assets/img/vqmt3d/interest-region-selection/scale_mismatch.gif)

<p><b><br>Example of vertical disparity<br>Journey to the Center of the Earth 3D</b></p>

![Vertical disparity example](/assets/img/vqmt3d/interest-region-selection/vertical_disparity1.png)
![Vertical disparity example](/assets/img/vqmt3d/interest-region-selection/vertical_disparity2.png)

## Proposed method


<p><b>Algorithm scheme</b></p>

![Algorithm scheme](/assets/img/vqmt3d/interest-region-selection/algorithm.png)


The algorithms of region selection for frames, containing scale, rotation and/or sharpness mismatch, were improved through machine learning methods.

![Machine learning](/assets/img/vqmt3d/interest-region-selection/machine_learning.png)

## Experiments

A dataset was created to train the model, which would predict the correctness of the detected region. The dataset was made by human experts who selected regions of interest, and consists of:
- 854 annotated bounding-boxes for scale mismatch;
- 1044 annotated bounding-boxes for rotation mismatch;
- 1064 annotated bounding-boxes for sharpness mismatch.
The model relies on three types of features:
- The output scalar value of the base algorithm;
- The map of local distortions for both views;
- The saliency map, calculated with SAM-ResNet.
Separate models were trained for each type of distortion. Several models were considered:
- Logistic regression;
- Random forest;
- Support vector machine;
- Gradient boosting.
There was no leader among the models: different individual base models showed diverse quality of results, depending on the problem. So we decided to apply stacked generalization, and chose logistic regression as a meta-classifier.


<p><b>The results of classifiers (cross-validation and 95% confidence interval)</b></p>

![The results of classifiers](/assets/img/vqmt3d/interest-region-selection/results.png)
C — regularization weight
𝛄 — kernel parameter

For each type of distortion, we chose the model that showed the best results. The model predicts the region that would likely be selected by an expert.

## Results

To decide whether the machine learning model is better than the baseline algorithm, we marked 100 additional frames and conducted an expert comparison. Two regions with distortions were shown to each participant: one area from the baseline algorithm and one from the machine learning model. The participants were asked to choose which region was better.


<p><b>Comparison of the base algorithm and machine learning model</b></p>

![Comparison](/assets/img/vqmt3d/interest-region-selection/comparison.png)

<p><b><br>The most important features for scale mismatch</b></p>

![The most important features for scale mismatch](/assets/img/vqmt3d/interest-region-selection/features_scale.png)

<p><b><br>The most important features for rotation mismatch</b></p>

![The most important features for rotation mismatch](/assets/img/vqmt3d/interest-region-selection/features_rotation.png)

<p><b><br>The most important features for sharpness mismatch</b></p>

![The most important features for sharpness mismatch](/assets/img/vqmt3d/interest-region-selection/features_sharpness.png)
