---
original_url: http://compression.ru/video/stego_video/program_settings_en.html
title: MSU StegoVideo - standalone program settings
description: Unique tool for hiding information in video (VirtualDub filter/standalone executable)
preview_img: /assets/img/filters/stego-video-program-settings/preview.png
---

# MSU StegoVideo

* Project, ideas: Dr. Dmitriy Vatolin  
* Implementation: Oleg Petrov

Here you can see description of MSU StegoVideo tool settings if you want
to use it as standalone program.  
Go to [main tool page](/video_filters/stego-video.html) for a general info about this tool
or go to [filter settings
page](/video_filters/stego-video-filter-settings.html)
if you want to use this tool as VirtualDub filter.

## Installation

Unpack
[msu\_stegovideo\_exe.zip](http://compression.ru/video/stego_video/src/msu_stegovideo_exe.zip)
in any folder and run "MSU\_stego\_video.exe".

## Hiding information

*1. Choose mode*  

<div class="center">
    <div><img src="/assets/img/filters/stego-video-program-settings/hiding-1.gif" alt="Choose mode"></div>
</div>

When you start program, you should choose what you want to do: to
extract file from video or to hide file in video. Check "Hide file in
video" and click "Next".

*2. Choose files*  

<div class="center">
    <div><img src="/assets/img/filters/stego-video-program-settings/hiding-2.gif" alt="Choose files"></div>
</div>

On this step you should choose file that you want to hide (small \*.txt
files recommended), video file in which info will be hidden and file for
resulting video. Video files must have ".avi" extension.

*3. Choose compression mode*  

<div class="center">
    <div><img src="/assets/img/filters/stego-video-program-settings/hiding-3.gif" alt="Choose compression mode"></div>
</div>

Check box on this step if you want to compress video with info (you will
be adviced to choose codec later). Warning: some info can be lost after
compression! Don't use very low bitrates; bitrates from 800 kbps are
recommended.

*4. Choose hiding parameters*  

<div class="center">
    <div><img src="/assets/img/filters/stego-video-program-settings/hiding-4.gif" alt="Hiding parameters"></div>
</div>

**Noise level** - Power of video distortions. Decrease it if distortion
is too high (100 recommended).

**Data redundancy** - Increasing data redundancy decreases amount of
data that will be hidden into each frame and probability of error.

You can generate optimal parameters automatically, in this case you'll
have to fill in planned compression bitrate.

*5. Save passcode*  

<div class="center">
    <div><img src="/assets/img/filters/stego-video-program-settings/hiding-5.gif" alt="Passcode"></div>
</div>

*6. Hiding info*  

<div class="center">
    <div><img src="/assets/img/filters/stego-video-program-settings/hiding-6.gif" alt="Hiding info"></div>
</div>

## Extracting information

*1. Choose mode*  

<div class="center">
    <div><img src="/assets/img/filters/stego-video-program-settings/extracting-1.gif" alt="Choose mode"></div>
</div>

Start the program. To extract file from video check "Extract file from
video" and click "Next".

*2. Choose files*  

<div class="center">
    <div><img src="/assets/img/filters/stego-video-program-settings/extracting-2.gif" alt="Choose files"></div>
</div>

On this step you should choose file from which you want to extract
information and file in which you want to save it. Video file must have
".avi" extension.

*3. Enter passcode.*  

<div class="center">
    <div><img src="/assets/img/filters/stego-video-program-settings/extracting-3.gif" alt="Passcode"></div>
</div>

*4. Extracting info.*  

<div class="center">
    <div><img src="/assets/img/filters/stego-video-program-settings/extracting-4.gif" alt="Extracting info"></div>
</div>

## Download

- [MSU StegoVideo as independent .exe(ZIP, 129
  KB).](http://compression.ru/video/stego_video/src/msu_stegovideo_exe.zip)
- [MSU StegoVideo as VirtualDub filter(ZIP, 57
  KB).](http://compression.ru/video/stego_video/src/msu_stegovideo.zip)
- [Main tool
  page](/video_filters/stego-video.html)
- [Filter settings
  page](/video_filters/stego-video-filter-settings.html)
- [Program license](http://compression.ru/video/license.txt)

E-mail: <video@graphics.cs.msu.ru>

