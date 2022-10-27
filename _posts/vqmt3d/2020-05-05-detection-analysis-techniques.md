---
title: Automatic detection and analysis of techniques for 2D to 3D video conversion
description: What conversion methods were used and how much the original frames are distorted?
preview_img: /assets/img/vqmt3d/detection-analysis-techniques/preview.gif
---
# Automatic detection and analysis of techniques for 2D to 3D video conversion

- Author: Polina Pereverzeva
- Supervisor: dr. Dmitriy Vatolin


## Introduction
One of the most common methods of 3D movies creation is conversion from 2D. It is a process, where two separate views for each eye are created from one source image.

The most widely used method for 2D to 3D conversion is warping of a source video according to a depth map — Depth Image-Based Rendering (DIBR). Original image pixels are shifted horizontally depending on the corresponding depth value. But at the same time, unfilled areas appear in occlusions — parts of the image invisible in the original frame. Filling such areas is a difficult task that has not been completely resolved yet.


<p><b>Incorrect filling in occlusions<br>Valerian and the City of a Thousand Planets</b></p>

![Opening areas](/assets/img/vqmt3d/detection-analysis-techniques/opening_areas.png)

<br>

In addition to filling the occlusions, the following conversion methods exist:

- Enlarging the foreground object

<p><b>Enlarged object example<br>Spider-Man: Homecoming</b></p>

![Enlarged object example](/assets/img/vqmt3d/detection-analysis-techniques/enlarged_object.png)

<br>

- Stretching the background beyond the borders of the foreground objects

<p><b>Warped background example<br>Ant-Man</b></p>

![Warped background example](/assets/img/vqmt3d/detection-analysis-techniques/warped_background.png)

<br>

- Removing plot-insignificant objects

<p><b>Deleted object example<br>The Legend of Tarzan</b></p>

![Deleted object example](/assets/img/vqmt3d/detection-analysis-techniques/deleted_object.png)


This method allows to detect the conversion method and to what extent the final frame differs from the source one.

## Proposed method

<p><b>Algorithm scheme</b></p>

![Algorithm scheme](/assets/img/vqmt3d/detection-analysis-techniques/algorithm.png)

## Experiments

To verify the correctness of the classifiers, a test dataset of 35 full-length converted stereoscopic movies containing 4 classes was compiled (1000 examples per class):
- Frames containing only removed objects;
- Frames containing only enlarged objects;
- Frames containing only a deformed background;
- Frames where none of the considered conversion techniques are present.


<p><b>Analysis of the deformed areas boundaries<br>Alice Through the Looking Glass</b></p>

![2D](/assets/img/vqmt3d/detection-analysis-techniques/2D.png)
![Left view](/assets/img/vqmt3d/detection-analysis-techniques/left_view.png)
![Final map](/assets/img/vqmt3d/detection-analysis-techniques/final_map.png)
![Marked borders](/assets/img/vqmt3d/detection-analysis-techniques/marked_borders.png)

Blue indicates the border with a positive depth change, green and red — the border without any depth changes, purple — the border with a negative depth change.

The evaluation of proposed algorithms on the test dataset are presented on the following graph. The classification accuracy was at least 90%.

![Graph](/assets/img/vqmt3d/detection-analysis-techniques/graph.png)

## Results

The average runtime of the proposed method for processing video sequences with a resolution of 960&nbsp;×&nbsp;540 is approximately 1&nbsp;second on a computer with the following characteristics: 3.20&nbsp;GHz Intel&nbsp;Core&nbsp;i5, 8&nbsp;GB&nbsp;RAM.
