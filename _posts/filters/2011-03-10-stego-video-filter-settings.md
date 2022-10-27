---
original_url: http://compression.ru/video/stego_video/filter_settings_en.html
title: VirtualDub MSU StegoVideo - filter settings
description: Unique tool for hiding information in video (VirtualDub filter/standalone executable)
preview_img: /assets/img/filters/stego-video-filter-settings/preview.png
subprojects: virtualdub
---

# MSU StegoVideo

* Project, ideas: Dr. Dmitriy Vatolin  
* Implementation: Oleg Petrov

Unique tool for hiding information in video (VirtualDub filter/standalone executable)

Here you can see description of MSU StegoVideo tool settings if you want
to use it as VirtualDub filter.  
Go to [main tool page](/video_filters/stego-video.html) for a general info about this tool
or go to [program settings
page](/video_filters/stego-video-program-settings.html)
if you want to use this tool as standalone program.

## Installation

In
[msu\_stegovideo.zip](http://compression.ru/video/stego_video/src/msu_stegovideo.zip)
you can find "MSU\_stego\_video.vdf". Unpack this file in the folder
"plugins" in VirtualDub folder.

## Filter Settings

<div class="center">
    <div>
        <img src="/assets/img/filters/stego-video-filter-settings/parameters.gif" alt="Hiding settings"><br>
        <i>Hiding settings</i>
    </div>
</div>  

1. **Frame size & compression bitrate** - Required if you want to set
   data redundancy automatically (can be left blank if you want to set
   it manually)
2. **File** - Choose file that you want to hide (small \*.txt files are
   recommended).
3. **Frame number** - Number of frames required to hide all file (if
   you want, you can hide part of your file).
4. **Weak noise - strong noise** - Power of video distortions. Decrease
   it if distortion is too high (100 recommended).
5. **more data - less data** - Data redundancy. Increasing data
   redundancy decreases amount of data that will be hidden into each
   frame and probability of error.

<div class="center">
    <div><img src="/assets/img/filters/stego-video-filter-settings/passcode.gif" alt="Passcode"></div>
</div>

You will see the window above if you press OK and "Hide file into video"
is chosen. You will need this passcode to extract file from video.  

<div class="center">
    <div>
        <img src="/assets/img/filters/stego-video-filter-settings/parameters2.gif" alt="Extraction options"><br>
        <i>Extraction settings</i>
    </div>
</div>

1. **Passcode** - You get this passcode when you hide file.
2. **File** - Choose file where you want to save info.

## Download

- [MSU StegoVideo as independent .exe(ZIP, 129
  KB).](http://compression.ru/video/stego_video/src/msu_stegovideo_exe.zip)
- [MSU StegoVideo as VirtualDub filter(ZIP, 57
  KB).](http://compression.ru/video/stego_video/src/msu_stegovideo.zip)
- [Main tool
  page](/video_filters/stego-video.html)
- [Program settings
  page](/video_filters/stego-video-program-settings.html)
- [Filter license](http://compression.ru/video/license.txt)

E-mail: <video@graphics.cs.msu.ru>
