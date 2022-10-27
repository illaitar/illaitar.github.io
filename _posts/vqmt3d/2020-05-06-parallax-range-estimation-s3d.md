---
title: "Parallax range estimation in S3D video"
description: "The parallax range should be both comfortable and entertaining for spectators."
preview_img: /assets/img/vqmt3d/parallax-range-estimation-s3d/negative_parallax.png
subprojects: metrics
---

# Parallax range estimation in S3D video

## Introduction

The parallax in S3D video is defined as the offset of a pixel in the right view relative to its position in the left view. This offset is commonly denoted as a percentage of screen width. If a pixel's position in the right view is to the right of its position in the left view (**positive parallax**), we perceive the point further than the screen:

{:.center}
![](/assets/img/vqmt3d/parallax-range-estimation-s3d/positive_parallax.png)

At zero parallax the pixel's depth corresponds to the screen level. Pixels with **negative parallax** are viewed closer than the screen:

{:.center}
![](/assets/img/vqmt3d/parallax-range-estimation-s3d/negative_parallax.png)

To get a point infinitely far away, we should make the parallax equal to the distance between the eyes. If the parallax is higher than that distance, the point becomes "father than infinite", which is impossible in real life and can cause pain to the viewer:

{:.center}
![](/assets/img/vqmt3d/parallax-range-estimation-s3d/infinite_parallax.png)

We can easily observe that a 3D movie will have huge parallaxes when watched on a cinema screen because the screen width is big in comparison with the pupillary distance. If we watch the **same** movie on a mobile 3D-capable monitor, the screen width and hence parallaxes would be small (that is why mobile screens have "small depth"):

{:.center}
![](/assets/img/vqmt3d/parallax-range-estimation-s3d/mobile_cinema.png)

Estimating the range of parallaxes can show us how well the movie will be perceived.

## Proposed method
We propose a method for estimating parallax distribution. The method's outline is as follows:
* A stereo matching algorithm is used to determine disparity between left and right views;
* A histogram of lengths of matching vectors is computed;
* The histogram is cut off at the ends to eliminate outliers.

The resulting histogram shows the range of parallaxes in the movie.

## Experiments
We estimated parallaxes in 105 movies. The following diagram depicts average extreme negative and positive disparities for each movie relative to its release date:

{:.center}
![](/assets/img/vqmt3d/parallax-range-estimation-s3d/depth_vs_release01.png)

The "Avatar" movie (2009) was selected as a baseline in parallax range comparison, with parallaxes from -0.5 percent of screen width to 1.0, which is the most comfortable range. Some recent movies are still far from the ideal parallax distribution.

{:.center}
![](/assets/img/vqmt3d/parallax-range-estimation-s3d/depth_vs_release02.png)
<div style="text-align: center;">Magnified portions of the diagram</div>

{:.center}
![](/assets/img/vqmt3d/parallax-range-estimation-s3d/depth_vs_release03.png)

{:.center}
![](/assets/img/vqmt3d/parallax-range-estimation-s3d/depth_scene_chart.png)
<div style="text-align: center;">An analysis of per-scene ranges of parallaxes</div>

Each column represents a movie. Bottom red bars mean almost flat scenes, while top red bars mean excessively large parallaxes.
