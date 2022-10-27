---
title: "Detection of swapped views in S3D movies"
description: "Channel mismatch is hard to detect, but our neural network method shows very high precision."
preview_img: /assets/img/vqmt3d/swapped-views-detection-s3d/swapped_views.png
subprojects: correction metrics
---

# Detection of swapped views in S3D movies
- Author: Sergey Lavrushkin
- Supervisor: Dmitriy Vatolin

## Introduction
Channel mismatch (the result of swapping left and right views) is
a 3D video artifact that can cause major viewer discomfort. This artifact is hard to detect, but can be easily eliminated just by the swap of the views. We have developed a high accuracy neural network method for detecting scenes with channel mismatch.

{:.center}
![](/assets/img/vqmt3d/swapped-views-detection-s3d/swapped_views.png)

{:.center}
![](/assets/img/vqmt3d/swapped-views-detection-s3d/stalingrad_disp.png)
<div style="text-align: center;">“Stalingrad” movie (2013): inverted depth because of swapped views</div>


## Proposed method
Our channel-mismatch detection algorithm is based on five features. We use perspective, disparity distribution, binocular half-occlusion and motion-occlusion criteria alongside the result obtained by the neural network.

These features require the disparity or optical flow map. To obtain them we use a fast local block matching algorithm with posterior filtering based on LRC and image gradient confidence (uniform areas are considered to have low confidence).

The network accepts the left view and disparity map as input. The architecture is a convolutional encoder which is constructed of 5 blocks of convolution and max-pooling layers with two fully-connected layers of size 512 and 2. The network output is the probability of swapped views.

{:.center}
![](/assets/img/vqmt3d/swapped-views-detection-s3d/network_arch.png)
<div style="text-align: center;">The neural network's architecture</div>

The algorithm consists of the following steps:
* Split the input stereo 3D movie into scenes by comparing brightness histograms of frames;
* Compute four heuristical features for each scene --- perspective, disparity distribution, binocular half-occlusions and motion-occlusions;
* Run the neural network on the same sequence;
* Average the five features over all frames in the scene for robustness to outliers;
* Make the final prediction with a logistic-regression model.

We trained the convolutional network for 180.000 iterations on a dataset of 113.000 samples of the left view and disparity map from 7 movies with randomly swapped views. The logistic regression model was also trained on 30.000 samples from these films.

## Experiments
The results of channel mismatch detection in S3D movies are listed below. The analysis showed the swapped views occurred even in high-budget movies (e.g. Avatar).
### How often channel mismatch occurs

| Movie name                      |Release year|Budget, $M|Scenes with CM|Total CM duration, sec|Movie duration, sec|CM percentage|
|------------------------------|:---:|:----:|:--:|:----:|:----:|:-------:|
| The Child's Eye                 | 2010 | $4.5 | 15 | 57.5 | 5823 | 0.9875% |
| The Nutcracker in 3D            | 2010 | $90  | 9  | 28,9 | 6480 | 0,447%  |
| 3D Sex and Zen: Extreme Ecstasy | 2011 | $2.5 | 9  | 23,1 | 6775 | 0,341%  |
| Spy Kids 3D — Game Over         | 2003 | $39  | 5  | 10,3 | 5063 | 0,203%  |
| Sharks 3D                       | 2004 | $5   | 1  | 8,9  | 3073 | 0,290%  |
| Avatar                          | 2009 | $237 | 1  | 3,3  | 9702 | 0,034%  |

### Comparison with other algorithms
The addition of a neural network feature shows great quality improvement in comparison with previously developed algorithms.

| Algorithm          | AUC ROC  | Accuracy| F-measure|
|:------------------:|:--------:|:-------:|:--------:|
| Proposed method [1]     | 0,9963   | 0.9784  | 0.9789   |
| Bokov et al. [2]  | 0,957    | 0.8946  | 0.8928   |
| Shestov et al. [3]  | 0,901    | 0.8378  | 0.8409   |

{:.center}
![](/assets/img/vqmt3d/swapped-views-detection-s3d/algorithm3_pr.png)

## Instead of conclusion
### Channel mismatch perceptibility
A subjective study of channel mismatch perceptibility was conducted.

We composed a test sequence of 56 scenes with swapped views. In addition, the sequence included scenes preceding and following each scene. 59 people took part in the experiment, each participant rated the perceptibility of swapped views for every scene from 1 to 5.


The following two graphs show the dependence between channel mismatch perceptibility and release date in the first case, and movie budget in the second one.

![](/assets/img/vqmt3d/swapped-views-detection-s3d/mismatch_vs_date.png)

Due to a large number of movies without channel mismatch, the situation is improving according to the trends, but the “outliers” (even in 2D-3D conversion) still occur.

![](/assets/img/vqmt3d/swapped-views-detection-s3d/mismatch_vs_budget.png)

Scenes with swapped views are more common for low budget movies.

## Publications

<p><cite>
[1] Sergey Lavrushkin and Dmitriy Vatolin, “Channel-mismatch detection algorithm for stereoscopic video using convolutional neural network,” in Proceedings of the 2018 3DTV Conference: The True Vision — Capture, Transmission and Display of 3D Video (3DTV-CON), 2018, pp. 1–4.
</cite></p>

<p><cite>
[2] Alexander Bokov, Sergey Lavrushkin, Mikhail Erofeev, Dmitriy Vatolin, and Alexey Fedorov, “Toward fully automatic channel-mismatch detection and discomfort prediction for S3D video,” in 2016 International Conference on 3D Imaging (IC3D). IEEE, 2016, pp. 1–7.
</cite></p>

<p><cite>
[3] Alexey Shestov, Alexander Voronov, and Dmitriy Vatolin, “Detection of swapped views in stereo image,” in 22nd GraphiCon International Conference on Computer Graphics and Vision, 2012, pp. 23–27.
</cite></p>
