---
original_url: http://compression.ru/video/noise_generation/index_en.html
title: VirtualDub MSU Noise Generation Filter
description: The filter adds artificial noise of one common types (equidistributed, normally distributed, colour stains, echo signal) to video stream
preview_img: /assets/img/filters/noise-generation/foreman_cut_es.jpg
subprojects: virtualdub public
---

# VirtualDub MSU Noise Generation Filter

* Algorithm: Dr. Dmitriy Vatolin, Konstantin Strelnikov  
* Implementation: Konstantin Strelnikov

**New version of filter!**

The filter adds artificial noise of one common types (equidistributed,
normally distributed, colour stains, echo signal) to video stream. It
can be used for testing, debugging and comparison of various denoising
filters.

## Settings

'Settings' dialogue box allows to select type of noise to generation.
Noise intensity can be specified for each colour component (the filter
uses YCrCb colour space). Individual noise parameters also can be
changed for some noise types.

Settings:
  
*Noise type*

1. **Equidistributed** - noise with even distribution
2. **Normaldistributed** - noise with normal distribution
3. **Color stains** - color stains with normal distribution
4. **Echo signal** - as TV echoed signal

*Noise parameters*

1. **Y strength** - Y channel noise strength
2. **Cr strength** - Cr channel noise strength
3. **Cb strength** - Cb channel noise strength
4. **Stain size** - size of stains (for Color stains noise type only)
5. **Echo delay** - echoed signal delay (for Echo signal noise type
   only)

<table>
<tbody>
<tr class="odd">
<td style="text-align: center;"><img src="/assets/img/filters/noise-generation/dlg1.gif" alt="Settings dialogue box" /><br />
Color stains settings</td>
<td style="text-align: center;"><img src="/assets/img/filters/noise-generation/dlg2.gif" alt="Settings dialogue box" /><br />
Echo signal settings</td>
</tr>
</tbody>
</table>

  
*Job and AviSynth* Script example for AviSynth:

```
LoadVirtualDubPlugin("...\Virtual Dub\plugins\MSU_NoiseGenerator.vdf","MSUNoiseGenerator", 0)  
clip=AVISource("MSU.avi", false, "RGB24")
clip.ConvertToRGB32.MSUNoiseGenerator(2, 15, 5, 5,16)
```
  
**First parameter** - noise type: 0 - equidistributed; 1 -
normaldistributed; 2 - color stains; 3 - echo signal  
**Second parameter** - Y channel noise strength (from 0 to 100 in case
Echo signal noise, from 0 to 255 another)  
**Тhird parameter** - Cr channel noise strength (from 0 to 100 in case
Echo signal noise, from 0 to 255 another)  
**Fourth parameter** - Cb channel noise strength (from 0 to 100 in case
Echo signal noise, from 0 to 255 another)  
**Fifth parameter** - stain size in case Color stains noise (from 0 to
64); echo delay in case Echo signal noise (from 0 to 64); not used
anotherю  

## Examples

Next follow example of different noise types for frame 50 of *foreman*
sequence.

<div class="center">
    <div>
        <img src="/assets/img/filters/noise-generation/foreman_src_fn50.jpg" alt="Source frame"><br>
        <i>Source frame</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/noise-generation/foreman_cut_en.jpg" alt="Equidistributed noise"><br>
        <i>Equidistributed: MSUNoiseGenerator(0, 15, 15, 15)</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/noise-generation/foreman_cut_nn.jpg" alt="Normaldistributed noise"><br>
        <i>Normaldistributed: MSUNoiseGenerator(1, 15, 15, 15)</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/noise-generation/foreman_cut_cs.jpg" alt="Color stains"><br>
        <i>Color stains: MSUNoiseGenerator(2, 15, 15, 15,16)</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/noise-generation/foreman_cut_es.jpg" alt="Echo signal"><br>
        <i>Echo signal: MSUNoiseGenerator(3, 25, 0, 0, 32)</i>
    </div>
</div>

Another example is frame No. 100 from *bus* sequence.

<div class="center">
    <div>
        <img src="/assets/img/filters/noise-generation/bus_src_fn100.jpg" alt="Source frame"><br>
        <i>Source frame</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/noise-generation/bus_en.jpg" alt="Equidistributed noise"><br>
        <i>Equidistributed: MSUNoiseGenerator(0, 20, 5, 5)</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/noise-generation/bus_nn.jpg" alt="Normaldistributed noise"><br>
        <i>Normaldistributed: MSUNoiseGenerator(1, 0, 40, 40)</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/noise-generation/bus_cs.jpg" alt="Color stains"><br>
        <i>Color stains: MSUNoiseGenerator(2, 0 , 10, 20,32)</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/noise-generation/bus_es.jpg" alt="Echo signal"><br>  
        <i>Echo signal: MSUNoiseGenerator(3, 30, 0, 0, 16)</i>
    </div>
</div>

## Download

- [This filter for VirtualDub (292 kb,
  ZIPped)](http://compression.ru/video/noise_generation/src/msu_noise_generation.zip)

* For common questions about filter's work please contact us: <video@graphics.cs.msu.ru>
* For commercial license of this filter (commercial usage is not free) please contact us: <video-licensing@graphics.cs.msu.ru>
