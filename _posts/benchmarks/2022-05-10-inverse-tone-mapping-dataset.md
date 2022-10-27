---
title: MSU HDR Video Reconstruction Benchmark Dataset
preview_img:
subprojects:
tag: invisible
---

<link rel="stylesheet" href="/assets/css/benchmarks/style.css">
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8"
    src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js"></script>

# Dataset of MSU HDR Video Reconstruction Benchmark 2022: HLG
<div id="buttons"></div>
<script>
	__set_menu_buttons([
	['Home', '/benchmarks/inverse-tone-mapping.html'],
	['Participants','/benchmarks/inverse-tone-mapping-participants.html'], 
    ['Dataset', '/benchmarks/inverse-tone-mapping-dataset.html'],
	['Evaluation methodology', '/benchmarks/inverse-tone-mapping-methodology.html'],
    ['Contact us', '/benchmarks/inverse-tone-mapping.html#contacts']
	], 'Dataset')
</script>

<div class="current_content" markdown="1">


## Dataset preview
{% include benchmarks/itm/dataset_slider.html %}

## Camera


We used a <a href="https://fujifilm-x.com/en-us/products/cameras/x-t4/">**Fujifilm XT-4**</a> camera for filming.<br>

<p>
<img width="50%" src="https://storage.videoprocessing.ai/benchmarks/itm/visualizations/info/dataset_info.webp">
</p>
SDR* – tonemapped HDR video

## Selection

{% include benchmarks/itm/dataset_selection.html %}


## Preprocessing
After shooting, all videos are transcoded with **Apple ProRes 422 HQ** codec. We do not use raw files as the ProRes losses are insignificant for our task. We can easily work with such files in **Davinci Resolve**.<br>
Unless otherwise specified, we always use Apple ProRes 422 HQ in this work, including for storing method results.

## Tone Mapping
As in other works on the topic of Inverse Tone Mapping, we need to get SDR versions of HDR video. We have tested traditional tonemappers such as Reinhard, Mantiuk, Drago, and others. We have also collected statistics on articles in the field, and it turned out that the most popular method is Reinhard. However, its results were of insufficient quality for us. Therefore, we gave up using traditional approaches.<br>
We settled on the **HDR Tools** utility integrated into **FinalCut 10.6**. It has no disadvantages of Reinhard and others:
* It is **fully automatic** and does not require any manual adjustments, except for the input and output gamma curve
* It gives a significantly **more natural-looking** video.

We did not conduct subjective research on this topic and we have found no other studies showing that HDR Tools is the best tonmapping method. However, perhaps we will do that research in the future.
## Download

SDR version of the Dataset is available <a href="https://drive.google.com/drive/folders/1P0VEwllQaYOgWMnjDrnbjAiGJFv2FFNM?usp=sharing">here</a>.<br>
Note that the HDR version of Dataset have **not been published** and will **not be published** in the future.
