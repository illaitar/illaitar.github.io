---
original_url: http://compression.ru/video/noise_estimation/index_en.html
title: VirtualDub MSU Noise Estimation Filter
description: This filter is used to estimate mean noise variance in video sequences
preview_img: /assets/img/filters/noise-estimation/preview.png
subprojects: virtualdub public
---

# VirtualDub MSU Noise Estimation Filter

* Project, idea: Dr. Dmitriy Vatolin, Sergey Grishin  
* Algorithm, implementation: Kumok Boris  
* Updating and additions: Sheludko Victor  

[**DOWNLOAD**](http://compression.ru/video/noise_estimation/src/msu_noise_estimator.zip)

This filter is used to estimate mean noise variance in video sequences.
The result is saved into a log file.

## Settings

<div class="center">
    <div>
        <img src="/assets/img/filters/noise-estimation/config.gif" alt="Settings dialog box"><br>
        <i>The basic menu of the filter</i>
    </div>
</div>

**Noise estimation algorithm** - the algorithm used to estimate noise.
Following modes supported:

- MAD
- Block-Based
- Spatio-temporal gradients
- All algorithms

**Advanced** - configure algorithm details

**Write noise estimates for each frame into file** - path to log file.

Configure algorithm details: Block-Based  

<div class="center">
    <div>
        <img src="/assets/img/filters/noise-estimation/config_1.gif" alt="Block-based advanced dialog box"><br>
        <i>Block-based advanced dialog box</i>
    </div>
</div>

**Block size** - The parameter influencing on speed of work and accuracy
of an estimation. The increase of this parameter reduces accuracy and
reduces time of performance. For video with small homogeneous areas it
is recommended to use smaller values.  

**Search step** - The parameter influencing on speed of work and
stability of an estimation. Great values increase speed of work and
reduce stability of an estimation.  

**Rate** - The parameter influencing on reliability and stability of an
estimation. Great values are reasonable for using for video with the big
homogeneous areas.  

**Margin** - The size of unused edges of the image.  

**Brightness border** - The parameter influencing reliability of an
estimation. For video visually strongly polluted it is recommended to
increase this parameter.  

Configure algorithm details: Spatio-Temporal Gradients  

<div class="center">
    <div>
        <img src="/assets/img/filters/noise-estimation/config_2.gif" alt="Spatio-temporal gradients advanced dialog box"><br>
        <i>Spatio-temporal gradients advanced dialog box</i>
    </div>
</div>

**Evaluation stability** - The parameter influencing on stability of an
estimation. The increase of this parameter increases stability, but
reduces accuracy of an estimation.  

**Brightness border** - The parameter influencing on reliability of an
estimation. For video visually strongly polluted it is recommended to
increase this parameter.  

## Job control & AviSynth

The filter supports Job Control, which allows to use it in AviSynth.
Example:  

```
LoadVirtualDubPlugin("...\VirtualDub\plugins\MSUNoiseEstimator.vdf","MSU_Noise_Estimator", 0)
clip=AVISource("...\clip_input.avi", false, "RGB24")
clip.ConvertToRGB32.MSU_Noise_Estimator("C:\log.csv", 0)
```

**Parameters**

{:.with-borders}
| # | Description | Allowed values |
|---|-------------|----------------|
|0|File|Path to log file|
|1|Algorithm|0 - MAD<br>1 - Block-Based<br>2 - Spatio-Temporal Gradients<br>3 - All algorithms|  

## Examples

Each graph shows the examples of noise detection on 4 video sequences:
the original one and 3 with noise added.  
  
<div class="center">
    <div>
        <img src="/assets/img/filters/noise-estimation/m_graph.gif" alt="&quot;Shattered&quot; test sequence"><br>
        <i>"Shattered" test sequence. Noise was added using MSU Noise Generator v2.1.</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/noise-estimation/m_graph1.gif" alt="&quot;Susie&quot; test sequence with the removed odd frames"><br>
        <i>"Susie" test sequence with the removed odd frames. Noise was added using MSU Noise Generator v2.1.</i>
    </div>
</div>

## Download

[This filter for VirtualDub (112 kb, ZIPped)](http://compression.ru/video/noise_estimation/src/msu_noise_estimator.zip)

* For common questions about filter's work please contact us: <video@graphics.cs.msu.ru>
* For commercial license of this filter (commercial usage is not free) please contact us: <video-licensing@graphics.cs.msu.ru>
