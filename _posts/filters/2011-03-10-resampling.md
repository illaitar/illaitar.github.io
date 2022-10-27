---
original_url: http://compression.ru/video/resampling/index_en.html
title: High quality image and video resampling
description: At the end of October 2002 we have started the project on "High quality image and video resampling", supported by Samsung Advanced Institute of Technology
preview_img: /assets/img/filters/resampling/scaling.png
---

# High quality image and video resampling

Researchers: Alexey Lukin, Andrey Krylov, Anastasia Koulikova, Dmitriy Vatolin, Sergey Putilin

At the end of October 2002 we have started the project on "High quality
image and video resampling", supported by Samsung Advanced Institute of
Technology (<http://www.sait.samsung.co.kr/>). The project's goal was to
design a new high-quality method for resampling of images and video.

The tasks of the project include:

- Design of resampling method.
- Design and implementation of image quality metrics.
- Design of methods and metrics for evaluation of quality of different
  resampling algorithms and extensive testing of available resampling
  algorithms.

<div class="center">
    <div>
        <img src="/assets/img/filters/resampling/scaling.png" alt="Example of resampling of the image"><br>
        <i>Example of resampling of the image (down and up) using different algorithms (last two are our)</i>
    </div>
</div>

Our image resampling algorithm, G&M Lab Impress, has the following
advantages over the standard methods:

- High sharpness of resulting images and good anti-aliasing.
- Adjustable ratio between different resampling artifacts (blurriness,
  aliasing, ringing).
- Absence of sub-pixel shifts in the resulting image.
- "Extra Sharpness" feature for sharpness increase in the process of
  resampling.
- Possibility of effective hardware implementation.

Several metrics were implemented during the project (including
LUV-metrics accounting for Contrast Sensitivity Function). One metric
for measurement of image bluring-sharpening can be particularly
interesting for future research.

<div class="center">
    <div>
        <img src="/assets/img/filters/resampling/foreman_metric.jpg" alt="Example of bluring-sharpening metric"><br>
        <i>Example of bluring-sharpening metric</i>
    </div>
</div>

Extensive testing of different image resampling algorithms has been
performed. Seven "mira" test vector images were created for testing
tasks. 9 photos provided by SAIT were also used. These 16 images have
been processed using 18 resampling methods, (including methods of well
known video-processing tool VirtualDub resampling methods and of Adobe
Photoshop 7.0). Totally we have performed more than 1500 measurements
for different methods, images and resolutions.

<div class="center">
    <div>
        <img src="/assets/img/filters/resampling/measure_scale1.jpg" alt="Different resampling methods metric example"><br>
        <i>Different resampling methods metric example</i>
    </div>
</div>

These images are obtained by comparison of scaled image with the
original image (rasterized from vector image using Adobe Photoshop).
Black color stands for no difference. Blue colors stand for slight
differences. Green, yellow and red colors stand for more noticeable,
significant differences.

<div class="center">
    <div>
        <img src="/assets/img/filters/resampling/measure_scale2.jpg" alt="Testing image for subpixel shift detection usage"><br>
        <i>Testing image for subpixel shift detection usage</i>
    </div>
</div>

E-mail: <video@graphics.cs.msu.ru>

Please read [MSU filters FAQ](/video_filters/video-filters-faq-en.html) before mailing.
