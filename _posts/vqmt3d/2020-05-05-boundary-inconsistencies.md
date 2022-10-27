---
title: Detection of object boundary inconsistencies between 2D-3D conversion results and depth maps
description: How to find foreground objects that are stuck to the background?
preview_img: /assets/img/vqmt3d/boundary-inconsistencies/preview.png
subprojects: metrics
---
# Detection of object boundary inconsistencies between 2D-3D conversion results and depth maps

- Author: Stanislav Dolganov
- Supervisor: dr. Dmitriy Vatolin

## Introduction
The creation of S3D movies by converting 2D captured footage requires the high-quality depth maps. In case of inaccurate depth maps’ usage during the conversion different types of artifacts can occur. Such artifacts can make the viewing experience significantly worse even if it appears only in the background.

Our method extracts information about motion in the scene and detects conversion-related discrepancies between motion strength and depth.

An example of a scene containing a defect found by the proposed method: the foreground object was merged with the background.


![Example](/assets/img/vqmt3d/boundary-inconsistencies/example.png)


## Proposed method

<p><b>Algorithm scheme</b></p>

![Algorithm scheme](/assets/img/vqmt3d/boundary-inconsistencies/algorithm.png)

The disparity map estimation step may be skipped if the original depth map is available.

## Experiments

The algorithm was tested on 39&nbsp;converted stereoscopic feature movies. As a result, 125&nbsp;scenes with this artifact were found.

The number of scenes with notable artifacts found during the analysis of feature movies are illustrated below.

![Number of scenes](/assets/img/vqmt3d/boundary-inconsistencies/number_of_scenes.png)

The examples of detected scenes are listed below. In these scenes, foreground objects merge with the background.

![Example](/assets/img/vqmt3d/boundary-inconsistencies/detected.png)
