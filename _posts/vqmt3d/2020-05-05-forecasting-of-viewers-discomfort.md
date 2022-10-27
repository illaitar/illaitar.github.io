---
title: Forecasting of viewers’ discomfort

description: How do distortions in a stereo movie affect the discomfort of viewers?
preview_img: /assets/img/vqmt3d/forecasting-of-viewers-discomfort/preview.jpg

---
# Forecasting of viewers’ discomfort

- Author: Anastasiia Antsiferova
- Supervisor: dr. Dmitriy Vatolin


## Introduction
Nowadays, numerous movies are produced in stereoscopic format. Despite the development of stereoscopic movie production, stereoscopic artifacts causing discomfort right up to headaches continue to appear even in high-budget movies.

In this study, the influence of geometric, color and temporal artifacts was examined.


![Distortions](/assets/img/vqmt3d/forecasting-of-viewers-discomfort/distortions.png)

## Experiments

In a series of experiments, participants were asked to evaluate the level of discomfort while watching a specially prepared stereoscopic video. Over 300 people took part.

<p><b>Experiment comparison</b></p>

{% include vqmt3d/discomfort_study.html %}

<p><b>Experiment process</b></p>

![Experiment process](/assets/img/vqmt3d/forecasting-of-viewers-discomfort/experiment_process.jpg)

![Experiment process](/assets/img/vqmt3d/forecasting-of-viewers-discomfort/experiment_process1.jpg)

![Experiment process](/assets/img/vqmt3d/forecasting-of-viewers-discomfort/glasses.jpg)


<p><br><b>Discomfort level sorted by mean discomfort (red for high)</b></p>

![Experiment results](/assets/img/vqmt3d/forecasting-of-viewers-discomfort/experiment_results.png)

Here “C” is the color mismatch between stereoscopic views, “R” is the rotation mismatch, “T” is the temporal shift and “S” is the scale mismatch. The distortion intensity is indicated by numbers from 0 to 4, where 0 corresponds to the absence of distortion (the original scene was demonstrated).

To solve the problem of assessing the discomfort level, we used machine learning algorithms on the processed experimental data. More than 30,000 configurations were tested on the obtained stratified cross-validation dataset.

The best result was shown by a linear regression model with the Huber loss function and L2–regularization.


## Results

The proposed models were applied to evaluate 60 stereoscopic movies.

The predicted level of discomfort that viewers may experience and the predicted percentage of viewers who will probably feel the discomfort while watching the analyzed movies are illustrated below:


![Level of discomfort](/assets/img/vqmt3d/forecasting-of-viewers-discomfort/level_of_discomfort.png)

![Percentage of viewers](/assets/img/vqmt3d/forecasting-of-viewers-discomfort/percentage_of_viewers.png)

[Learn more...](/datasets/mvdsvd.html)