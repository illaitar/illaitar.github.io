---
title: Video Quality Measurement Tool 3D
permalink: /stereo_quality/
project: vqmt3d
description: "Video Quality Measurement Tool 3D provides automatic analysis and correction of stereoscopic 3D movie artifacts"
order: 4
---

![More than 100 blu-ray discs were tested](/assets/img/vqmt3d/vqmt3d/blurays.jpg)

<div style="margin-left: 40%;">
    <i>
        <div>Projects, ideas: Dr. Dmitriy Vatolin</div>
        <div style="display: flex">
          <div>Implementation:&nbsp;</div>
          <div>Alexander Voronov, Denis Sumin, Marat Arsaev, Vyacheslav Napadovsky, Alexander Bokov, Alexey Fedorov, Alexander Belous, Alexey Shalpegin, Vladimir Yanushkovsky, Sergey Lavrushkin, Anastasia Antsiferova
          </div>
        </div>
        <div>In cooperation with <a href="http://www.iitp.ru/en/about">IITP RAS</a>: Prof. <a href="http://www.iitp.ru/en/users/484.htm">Galina Rozhkova</a></div>
    </i>
</div>

## Introduction

VQMT3D (Video Quality Measurement Tool 3D) project was created to improve stereoscopic films. Our aim is to help filmmakers produce high-quality 3D video by finding inexpensive ways to automatically improve 3D film quality. Technical errors made during production of stereo 3D movies are often neglected, but according to [our experiments](/stereo_quality/forecasting-of-viewers-discomfort.html) these errors cause viewers to experience headaches.



{:.fancyquote}
> I will find it very interesting to go through your report in detail, film by film. I had always thought that a major factor holding back the greater success of stereo 3D cinema could be technical problems like those your group has enumerated.

<div style="margin-left: 40%;">
    <b>John Meritt</b>, Senior Consulting Scientist at The Merritt Group; Founding Chair of the Stereoscopic Displays and Applications Conference
</div>

People stop watching 3D movies after experiencing pain just once. Therefore we focus on finding and fixing technical problems that could potentially cause headaches. These are the key contributions of the project:

### #1 metric collection for stereo quality assessment
We have developed the largest set of metrics that detects technical problems in stereoscopic movies.
- 18 metrics in total
- 14 metrics, including 5 unique ones, provide quality estimation of **2D-to-3D conversion**

### #1 stereoscopic movie quality evaluation
A large-scale evaluation of full-length 3D Blu-ray discs with detailed visualizations of technical errors.
- Over 100 analyzed movies
- 9 reports published for industry professionals
- 3,100 pages in total
- 100 stereographers were contacted, 32 of them contributed to the evaluation

### #1 study of stereoscopic error influence on viewers
The largest study of reaction to stereoscopic errors. The collected data is crucial for research on visual fatigue.
- Over 300 people participated
- 22,200 discomfort scores acquired

## List of Metrics

Our laboratory has been researching stereo quality and stereo artefacts that cause headaches for 11 years. During this time about 20 quality metrics have been created, and some metrics were significantly improved. For example, the metric for detecting swapped channels has gone through 3 generations of improvement (see <a href="/stereo_quality/swapped-views-detection-s3d.html">channel mismatch metric</a>), each time significantly improving accuracy. At the same time, the computational efficiency of the developed metrics remained better than those of our colleagues, which allowed us to actively use them to analyze real movies.

{% include vqmt3d/metrics_list.html %}

## Reports overview

Many stereographers have asked us, for example, if the MSU Scale Mismatch metric value of 4% is high or low for a movie. Originally, we didn’t have a clear answer. So we made a very good attempt to directly connect the values of metrics with perceived discomfort, making, perhaps, the most large-scale study on fragments of real movies with artifacts.

Then we tried to approach this problem from another side. With support from Intel, Cisco and Verizon, we bought more than 150 Blu-ray 3D movies and ran them all through our metrics. This project was complex on both the technical and organizational sides, but as a result we got a clear picture of how different metrics depend on the release date of a movie, its budget and production technology.

<div class="center">
    <img src="/assets/img/vqmt3d/vqmt3d/blurays_reports.jpg" alt="Blu-rays used in the reports"><br>
</div>

{% include vqmt3d/reports_overview_table.html %}


## Viewer discomfort study

We have conducted a study to determine the amount of pain caused to the spectator by each of the stereoscopic error types. The data obtained from our experiment is the largest among similar experiments worldwide.

{:.center}
![The experiment process](/assets/img/vqmt3d/forecasting-of-viewers-discomfort/experiment_process.jpg)

{:.center}
![Passive stereoscopic glasses](/assets/img/vqmt3d/forecasting-of-viewers-discomfort/glasses.jpg)

{% include vqmt3d/discomfort_study.html %}

<span id="visualizations"></span>

## Visualization of stereoscopic errors

Our visualizations distinctly demonstrate the stereoscopic errors. The reports of movie analysis include these visualizations.

<div class="center">
    <div>
        <img src="/assets/img/vqmt3d/vqmt3d/example01_harold_horiz-disp.jpg"><br>
        <i>An example of detected strong horizontal disparity from A Very Harold & Kumar 3D Christmas</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/vqmt3d/vqmt3d/example02_stepup_vertical.jpg"><br>
        <i>An example of detected vertical disparity from Step Up Revolution</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/vqmt3d/vqmt3d/example03_amazing_color.jpg"><br>
        <i>An example of detected color mismatch from The Amazing Spiderman</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/vqmt3d/vqmt3d/example04_alice_sharpness.jpg"><br>
        <i>An example of detected sharpness mismatch from Alice in Wonderland</i>
    </div>
</div>

## Publications

{% include vqmt3d/publications.html %}

## Acknowledgments

We wish to acknowledge the help provided by CMC Faculty of Lomonosov
Moscow State University.  
CMC Faculty provided us with extra computational capabilities and disk
space which was needed for our research.

This work is partially supported by the Intel/Cisco Video Aware Wireless
Network (VAWN) Program and by grant 10-01-00697a from the Russian
Foundation for Basic Research.

Our project “Development of a system for automatic objective quality assessment and correction of stereoscopic video and video in VR180 format” was supported under the START program of <a href="http://fasie.ru">State Fund for Support of Small Enterprises in the Scientific-Technical Fields</a>.

<div style="text-align: center;">
  <a href="http://fasie.ru" class="thumbnail"><img src="/assets/img/vqmt3d/vqmt3d/logo_fasie.png" width="15%" height="15%"></a>
</div>

## Invitation to the Project

We invite stereographers, researchers and proofreaders to join our
3D-film analysis project. We are open for collaboration and appreciate
your ideas and contributions. We love to receive feedback and learn from
the experience of people in the film-production industry.

If you would like to participate, please contact us: <3dmovietest@graphics.cs.msu.ru>

## Contacts

For questions and propositions, please contact us: <3dmovietest@graphics.cs.msu.ru>
