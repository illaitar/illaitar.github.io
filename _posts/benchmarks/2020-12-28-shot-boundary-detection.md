---
title: MSU Shot Boundary Detection Benchmark 2020
description: Discover the best Shot Boundary Detection method for your case 
preview_img: /assets/img/benchmarks/sbd/fade.gif
subprojects:
---

<link rel="stylesheet" href="/assets/css/benchmarks/sbd/style.css">
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8"
   src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js"></script>
<script type="text/javascript"  src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

{:.center}
# MSU Shot Boundary Detection Benchmark 2020 — selecting the best plugin

<div id="buttons"></div>
<script>
	__set_menu_buttons([
	['Home', '/benchmarks/shot-boundary-detection.html'],
	['Participants','/benchmarks/shot-boundary-detection-participants.html'], 
	['Evaluation methodology', '#methodology'], 
	['How to submit', '#how_to_submit']
	], 'Home')
</script>
<div class="current_content" markdown="1">


{:.center}
## Comprehensive analysis of shot boundary detection methods

{% include benchmarks/sbd/top_images.html %}

<div style="margin-left: 60%;">
    <div><b>Video group head: Dr. Dmitriy Vatolin</b></div>
    <div style="display: flex">
      <div><b>Measurements, analysis:</b>&nbsp;</div>
      <div><b>Aleksandr Gushchin,<br>Anastasia Antsiferova</b>
      </div>
    </div>
</div>

This benchmark designed to evaluate different algorithms of the Shot Boundary Detection task.
The benchmark provides an opportunity to test your own algorithm for detection of cuts, dissolves, wipes and fades scene transition.



## What's new

- **02.09.2021** Added PyScene-v2 and GStreamer
- **11.09.2021** Added NITS-CV-Lab
- **05.05.2021** main Release
- **16.12.2020** beta-version Release

## Key features of the Benchmark


*   **Extensive and diverse datasets** for shot-boundary detection testing:
    *   *31 videos* from 2 datasets: RAI, MSU CC and 19 manually marked up open source videos
    *   *1287 minutes* with 10883 shot transitions
    *   Cut, dissolve and fade transitions, complex scenes with high spatial and temporal complexity
*   **Beautiful and easy-interpreting visualizations** of most common quality metrics for each category of scene transitions:
    * F1 score, Precision and Recall
    * Speed performance depending on the resolution of the input video stream 


To participate in our benchmark, please follow instructions in the [How to submit](#how-to-submit) section.

We appreciate new ideas. Please, write us an e-mail to <sbd-benchmark@videoprocessing.ai>


## <span id="leaderboard"></span> Leaderboard

The table below shows a comparison of SBD algorithms by F1 score and speed.

{% include benchmarks/sbd/leaderboard.html %}

## Performance Charts

{% include benchmarks/sbd/performance_plots.html %}

## <span id="methodology"></span> Methodology

### Definitions

* Shot — the continuous footage or sequence between two edits or cuts
	* Cut Transitions — a sudden abrupt transition from one shot to another
		* In this case we mark the first frame of a new shot as shot with cut transition

{% include benchmarks/sbd/definitions_1.html %}

* Gradual Transitions — two shots are combined using chromatic, spatial or spatial-chromatic effects which gradually replace one shot by another
	* In this case we mark a continuous series of frames as a gradual transition. Algorithms must detect exactly one frame as a gradual transition from this series

{% include benchmarks/sbd/definitions_2.html %}

* Fade-out and fade-in Transitions are used to describe a transition to and from a blank image

### Video Dataset

Our dataset is constantly being updated. Now it consists of 50 videos with a total duration about 1287 minutes with approximately 10883 scene transitions (7501 abrupt and 3382 gradual).

Our collection contains videos from popular RAI dataset, videos from MSU codecs comparison 2019 and 2020 test sets, and also videos collected from different sources. Our analysis has shown that groud truth in RAI contains imperfections, which we fixed in our collections. Dataset were extended by replacing every cut scene transition in these datasets with fades and dissolves. We manually marked up 19 videos from open-source with total length of 950+ minutes using [Yandex.Toloka](https://toloka.yandex.ru/). 

Final dataset contains videos with different resolutions from 360×288 to 1920×1080 in MP4 and MKV formats. Videos include samples in rgb scale or in grayscale with FPS from 23 to 60.

{% include benchmarks/sbd/dataset.html %}


## <span id="participate"></span> Evaluation Steps

{% include benchmarks/sbd/evaluation.html %}

## <span id="how_to_submit"></span> How to submit

Send us an email to <sbd-benchmark@videoprocessing.ai> with the following:

* File with .exe extension with your algorithm and instructions to run it from console. When launched from console we expect your file to have following options:
    * `-i` — path to input video
    * `-o` — path to output of your algorithm
    * `-t` — threshold, if it required in your algorithm
* If you give us permission to publish results of your algorithm.

* (Optional) Any addition information about your algorithm.

* (Optional) If you would like us to tune the parameters of your method, write in instruction how can we change these parameters.

You can verify results on [RAI dataset](https://aimagelab.ing.unimore.it/imagelab/researchActivity.asp?idActivity=19).

If you have any suggestions or ideas how to improve our benchmark, please write us an e-mail on <sbd-benchmark@videoprocessing.ai>.


## Cite us

{% include benchmarks/sbd/cite_us.html %}

## Contacts

For questions and propositions, please contact us: <sbd-benchmark@videoprocessing.ml>

Also you can subscribe to updates on our benchmark:

{% include benchmarks/sbd/form.html %}


</div>