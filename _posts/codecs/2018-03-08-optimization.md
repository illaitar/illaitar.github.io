---
original_url: http://compression.ru/video/video_codec_optimization/index.html
title: Effective Video Transcoding
description: 
preview_img: /assets/img/codecs/optimization/preview.jpg
subprojects: optimization
---
# Video-Based Codec Optimization

## Effective Video Transcoding Project (in cooperation with [CS MSU Graphics & Media Lab](http://graphics.cs.msu.su/))

<div style="text-align: center;">
<embed src="/assets/img/codecs/optimization/evt_logo_demo.png" alt="EVT_logo" width="150"/>
</div>

### Basic info about Effective Video Transcoding

For almost 14 years, Lomonosov MSU Graphics&Media Lab's video group has
been conducting video codecs comparisons. We know that almost always
there is a possibility to find efficient encoding options for every
video. We did a great study and learned how to determine optimal codec
settings for a large number of video classes. After comparing our
encoding options for x264 to the 2015 and 2016 comparisons' options and
standard ones, we received very interesting and promising results.

<table width="100%" cellpadding="10" class="center">
<tbody>
  <tr>
    <td style="text-align: left;">
      15% bitrate savings<br>in average
    </td>
    <td>
      Encoding presets determined by our method <br>beats x264 developers' presets with keeping <br>encoding time and encoded video quality
    </td>
  </tr>
</tbody>
</table>

These results are valuable for options giving **the same or better
objective quality of encoded video** and the same or higher encoding
speed comparing to standard presets. Thus, we can provide optimal
encoding settings that will be a part of pareto optimal RD-curve, that
is "shifted" from given encoder options.

## We developed a way to find optimal encoding settings for a large number of video classes

Percentage of file size reduction in average for a representative
dataset of 77 videos:
<link href="https://www.highcharts.com/highslide/highslide.css" rel="stylesheet" />
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="https://code.highcharts.com/highcharts.js"></script>
<script type="text/javascript" src="https://code.highcharts.com/highcharts-more.js"></script>
<script type="text/javascript" src="https://code.highcharts.com/modules/exporting.js"></script>
<script type="text/javascript" src="https://code.highcharts.com/modules/boost.js"></script>
<script type="text/javascript" src="/assets/js/codecs/charts/video_clusters.js"></script>
<script type="text/javascript" src="/assets/js/codecs/charts/pareto_set.js"></script>
<script type="text/javascript" src="/assets/js/codecs/charts/bitrate_savings.js"></script>


<table width="100%">
<tbody>
  <tr>
    <td style="width:50%">
      <div id="bitrate_savings" style="height:20%">Loading....</div>
    </td>
    <td>
      <ul>
        <li>We don’t declare an “up-to-x%” bitrate reduction — <b>
          average file size reduction is 15% higher</b> comparing to standard x264 presets 
        </li>    
        <li>We find presets that <b>
          do not reduce encoding speed and objective quality of encoded video</b>
          <br>You give limitations, and we guarantee the same or higher objective quality and encoding speed
        </li>
      </ul>
    </td>
  </tr>
</tbody>
</table>


### You use standard presets and don’t believe that it will work for your videos? Give us a chance — request a demo, for free!


1. **Give us your video and preset**  
Send us uncompressed video and encoding settings that you were going to
use for compression<br/>
    <embed src="/assets/img/codecs/optimization/video_file.png" alt="icon" width="30" />


2. **Receive a report**  
with optimal presets for your video and their gain under your preset<br/>
    <embed src="/assets/img/codecs/optimization/report_file.png" alt="icon" width="30" />


3. **Choose and pay**  
We offer additional options for better compression and analysis<br/>
    <embed src="/assets/img/codecs/optimization/credit_card.png" alt="icon" width="40" />


4. **Get encoding settings**  
and encode similar videos with it  
*OR/AND*  
**Get your video**  
compressed with chosen preset<br/>
    <embed src="/assets/img/codecs/optimization/settings_file.png" alt="icon" width="30" />


## Contact
E-mail: <evt@compression.ru>

## Technical info

A more detailed technical report and examples will be available soon in
this section. At the moment we can share a couple of cool charts.

We created a representative dataset of 385 videos chosen from 9000+
FullHD&4K videos

<div id="video_clusters" style="width: 100%; ">Loading....</div>

12 million encoder launches were done on Intel Xeon E3-1125v3

<div id="pareto_set" style="width: 100%; ">Loading....</div>

## About us

Project mentor: Dr. Dmitriy Vatolin  
Project team:

<table class="center" style="text-align: center">
<tbody>
<tr class="odd" style="vertical-align: top">
<td><img src="/assets/img/codecs/optimization/szve.jpg" alt="Sergey Zvezdakov" style="height: 250px;"></td>
<td><img src="/assets/img/codecs/optimization/aant.jpeg" alt="Anastasia Antsiferova" style="height: 250px;"></td>
<td><img src="/assets/img/codecs/optimization/dkon.png" alt="Denis Kondranin" style="height: 250px;"></td>
</tr>
<tr class="even">
<td>Sergey Zvezdakov<br />
<a href="mailto:szvezdakov@graphics.cs.msu.ru">szvezdakov@graphics.cs.msu.ru</a></td>
<td>Anastasia Antsiferova<br />
<a href="mailto:aantsiferova@graphics.cs.msu.ru">aantsiferova@graphics.cs.msu.ru</a></td>
<td>Denis Kondranin<br />
<a href="mailto:denis.kondranin@graphics.cs.msu.ru">denis.kondranin@graphics.cs.msu.ru</a></td>
</tr>
</tbody>
</table>

Thanks to UMNIK and Eureka! Concept programs:

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><img src="/assets/img/codecs/optimization/umnik.png" alt="umnik_logo" style="height: 150px;"></td>
<td><img src="/assets/img/codecs/optimization/eureka.png" alt="eureka_logo" style="height: 150px;"></td>
<td><img src="/assets/img/codecs/optimization/innopraktika.png" alt="innopraktika_logo" style="height: 150px;"></td>
</tr>
</tbody>
</table>


