---
title: MSU Mobile Video Codecs Benchmark 2021
description: Discover Android devices with the longest video playback time and find the most power-efficient video-decoder on your Android device and 
preview_img: /assets/img/benchmarks/mvc/mvc_preview480x270.png
subprojects:
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
<script type="text/javascript"  src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

{:.center}
# MSU Mobile Video Codecs Benchmark

<div id="buttons"></div>
<script>
	__set_menu_buttons([
	['Home', '/benchmarks/mobile-video-codec-benchmark.html'],
	['Benchmarking Methodology','/benchmarks/mobile-video-codec-benchmark-methodology.html'], 
	['Mobile Video Codec Ranking', '/benchmarks/mobile-video-codec-benchmark.html#ranking'], 
	['How to Benchmark New Device', '/benchmarks/mobile-video-codec-benchmark.html#how_to_benchmark'],
    ['Cite Us', '/benchmarks/mobile-video-codec-benchmark.html#cite'],
    ['Contact us', '/benchmarks/mobile-video-codec-benchmark.html#contacts']
	], 'Home')
</script>

<div class="current_content" markdown="1">

<div style="margin-left: 60%;">
    <div><b>Video group head: Dr. Dmitriy Vatolin</b></div>
    <div style="display: flex">
      <div><b>Measurements, analysis:</b>&nbsp;</div>
      <div><b>Roman Kazantsev</b>
      </div>
    </div>
</div>

{:.center}
## Find the most power-efficient video-decoder on your Android device

{% include benchmarks/mvc/top_images.html %}

## What's New

- **October 1, 2021** Beta-version Release

## Key Features of the Benchmark

*   **Speed and power efficiency measurement.** The benchmark estimates key indicators (power efficiency and speed) to find the best mobile video-decoder on a given Android device
*   **Video playback time increase by up to 22 hours.** Use of video-decoder we recommend prolongs offline video playback duration by up to 22 hours
*   **147 Android models, 6 compression standards.** The benchmark ranking supports the biggest number of Android devices and contains 147 models, 
six compression standards (MPEG-4, H.264, VP8, VP9, HEVC, and AV1), and three resolutions (SD, HD, and Full HD)

## <span id="ranking"></span> Mobile Video-Decoder Ranking

{% include benchmarks/mvc/plots.html %}

## <span id="how_to_benchmark"></span> How to Benchmark New Device

The basic rules to the benchmarking:

* In order to get the benchmarking started, the device must have battery charge between 85% and 95%
* The device must not be used during the benchmarking so it is recommended to run the test at night time during sleep

{% include benchmarks/mvc/how_to_benchmark_images.html %}

Perform the following steps to benchmark:

1. Install [the benchmark](https://play.google.com/store/apps/details?id=ru.msu.cs.graphics.veqe_mobile).
2. Charge the device battery from 85% up to 95% and launch the application.
3. If the first testing cycle, click the button *START*, type your nickname and click a button *NEXT* to start the testing. 
Otherwise, click a button *CONTINUE*.
4. Do not use the device while the test is running. The test will take about 6--8 hours. 
Once the testing is complete the application displays a table with the current results.
5. Go back to the main menu. If the main menu contains a button *CONTINUE*, the testing is not complete for all video-decoders 
and you need to proceed to step 2 for the next testing cycle. Otherwise, the testing is complete and you can click *VIEW RESULTS* to see the whole results.

Also, you can download the benchmark via this QR code:
<div class="left">
<img src="/assets/img/benchmarks/mvc/mvc_qrcode.png" style="width: 15%; height: auto;" alt="Download the benchmark using this QR code"><br/>
</div>

## <span id="cite"></span> Cite Us

To refer to our benchmark in your work, cite our paper:

{% include benchmarks/mvc/cite_us.html %}

## <span id="contacts"></span> Contact Us

For questions and proposals, please contact us: <mvc-benchmark@videoprocessing.ai>

</div>