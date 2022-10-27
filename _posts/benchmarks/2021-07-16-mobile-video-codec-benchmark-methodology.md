---
title: MSU Mobile Video Codec Benchmark Methodology
description: The methodology of MSU Mobile Video Codec Benchmark
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
<script type="text/javascript"  src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

# Evaluation methodology of MSU Mobile Video Codec Benchmark
<div id="buttons"></div>
<script>
	__set_menu_buttons([
	['Home', '/benchmarks/mobile-video-codec-benchmark.html'],
	['Benchmarking Methodology','/benchmarks/mobile-video-codec-benchmark-methodology.html'], 
	['Mobile Video Codec Ranking', '/benchmarks/mobile-video-codec-benchmark.html#ranking'], 
	['How to Benchmark New Device', '/benchmarks/mobile-video-codec-benchmark.html#how_to_benchmark'],
    ['Cite Us', '/benchmarks/mobile-video-codec-benchmark.html#cite'],
    ['Contact us', '/benchmarks/mobile-video-codec-benchmark.html#contacts']
	], 'Benchmarking Methodology')
</script>

<div class="current_content" markdown="1">



## Power Estimation Method

We propose a software-based method for estimating the power consumption of video decoders on various Android devices. 
The main idea is to retrieve the devices battery level and to access video-decoders using the Android BatteryManager and Media APIs.
The formula for computing the relative battery consumption [%] when decoding the entire bitstream and 
the formula for computing the average decoding speed [frames per second] are as follows:

$$\Delta_{seq} = \frac{B_0 - B_1}{(N_1 - N_0)n_{seq} + n_1 - n_0} \cdot n_{seq},$$

$$\upsilon = \frac{(N_1 - N_0)n_{seq} + n_1 - n_0}{T_1 - T_0},$$

where the retrieved battery levels are $$B_0$$ and $$B_1$$ at times $$T_0$$ and $$T_1$$ [seconds], respectively, corresponding to decoding iterations
$$N_0$$ and $$N_1$$ and frame indices $$n_0$$ and $$n_1$$.

For benchmarking it computes two valuable power metrics. The first is relative battery consumption per hour of playback $$\Delta_{play}$$
[% per hour], which lets end-users estimate how long they can watch video in autonomous mode. The second is videodecoding
energy per hour, $$\Delta_{decode}$$ [mA], which helps Android-device manufacturers estimate the power efficiency of
hardware video-decoders. Note that $$\Delta_{seq}$$ includes the energy that the display consumes. We define the display power
consumption per hour as $$\Delta_{screen}$$ [% per hour] and compute it using the same approach by which we track battery-level
changes on a device in idle mode with its display on. We calculate $$\Delta_{play}$$ as follows:

$$\Delta_{play} = \Delta_{seq} \cdot \frac{fps}{n} \cdot 3600 + \Delta_{screen} \max \left(0; 1 - \frac{fps}{\upsilon}\right),$$

where $$n$$ is the number of frames in the sequence and $$fps$$ is the number of frames per second required for playback. 
The equation for $$\Delta_{play}$$ includes a term $$\Delta_{screen} \max \left(0; 1 - \frac{fps}{\upsilon}\right)$$ compensating 
the energy that the display consumes for some time when decoding is complete in case of $$\upsilon > fps$$. 
Note that $$\upsilon \geq fps$$ is required for normal playback. The formula to compute $$\Delta_{decode}$$ [mA] is the following:

$$\Delta_{decode} = V \left(\Delta_{seq} \cdot \frac{\upsilon}{n} \cdot 3600 - \Delta_{screen} \right),$$

where $$V$$ is a battery capacity [mAh]. Both metrics, $$\Delta_{play}$$ and $$\Delta_{decode}$$, can help to benchmark mobile devices and videodecoders.

## Video Workload

{% include benchmarks/mvc/workload.html %}

The benchmark tests hardware, software and hybrid video-decoders of six standards (AV1, HEVC, VP9, H.264, VP8, and MPEG-4) available on Android devices.
To estimate the power consumption, we selected three video sequences of SD, HD and Full HD resolution and encoded them for each compression standard
using FFmpeg. The video sequences were encoded for the streaming case with a fixed-cadence group of picture (GOP), GOP-length equal to two seconds,
three references for motion compensation, two B-frames, and maximum bitrate equal to 1.2 of the average bitrate.

The settings restrict to use the Main Profile for H.264 and HEVC with Level 4.2 that supports selected resolutions, frame-rate, and maximum bitrate 
on all Android 5.0 and higher devices. Our choice of video sequences is based on their distinctive spatial and temporal complexities. 
Defining the averages of these complexities are the mean spatial perceptual information, $$SI_{mean}$$, and the mean temporal perceptual information, 
$$TI_{mean}$$. Table below lists the $$SI_{mean}$$, $$TI_{mean}$$ and the average bitrate for each video.

{:.fancytable}
| Video         |      Resolution      |  $$SI_{mean}$$ |   $$TI_{mean}$$   |  Bitrate (Kbps)   |
|---------------|----------------------|----------------|-------------------|-------------------|
| **Shakewalk** |  $$640\times480$$    | 0.058          |    124.76         |    2560           |
| **Tractor**   |  $$1280\times720$$   | 0.071          |    100.57         |    5120           |
| **Zombie**    |  $$1920\times1080$$  | 0.073          |    104.66         |    12288          |

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    extensions: [
      "MathMenu.js",
      "MathZoom.js",
      "AssistiveMML.js",
      "a11y/accessibility-menu.js"
    ],
    jax: ["input/TeX", "output/CommonHTML"],
    TeX: {
      extensions: [
        "AMSmath.js",
        "AMSsymbols.js",
        "noErrors.js",
        "noUndefined.js",
      ]
    }
  });
</script>
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

</div>