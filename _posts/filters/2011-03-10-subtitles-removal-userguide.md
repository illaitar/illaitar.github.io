---
original_url: http://compression.ru/video/subtitles_removal/userguide_en.html
title: VirtualDub MSU Subtitle Remover / UserGuide
description: VirtualDub MSU Subtitle Remover Filter User's Manual
preview_img: /assets/img/filters/subtitles-removal-userguide/preview.gif
subprojects: virtualdub
---

# VirtualDub MSU Subtitle Remover Filter User\`s Manual

[Filter page](/video_filters/subtitles-removal.html)

* Project, ideas: Dr. Dmitriy Vatolin  
* Version 1.2 (MSU Subtitle&Logo Remover): Dmitriy Kulikov  
* Version 2.0b (MSU Subtitle Remover): Dmitriy Kulikov, Sergey Putilin  
* Version 3.0beta2 (MSU Subtitle Remover): Dmitriy Kulikov, Sergey Putilin, Yuriy Berdnikov

## How to remove subtitles - step-by-step

* This filter is designed for VirtualDub (Free!). [Official
site](http://www.virtualdub.org/). There you can find manuals for this
program.
* unzip filter to "Plugins" folder.
* Start VirtualDub and open your video
* Add MSU Subtitle Remover to filters (Video -&gt; Filters -&gt; Add)
* Check "Detect subtitles" button in the filter settings window.
* Make detection pass on video - 3rd button on the panel, "Go with
playback" (or "Output playback" in some VirtualDub versions)(see picture
below). Bright white pixels represents found subtitles, grey zone -
detection area, dark gray - rest part of the frame. Correct your
settings and return to prevous step, if nessesary.
* Check "Detect and remove" button in the filter settings window.
* With "Go with playback" button you can check removing results. Correct
filter settings, if nessesary.
* To save your video, uses File-&gt;SaveAsAvi

<img src="/assets/img/filters/subtitles-removal-userguide/button.png" alt="VirtualDub screenshot">

## Settings

The view of settings window:

<img src="/assets/img/filters/subtitles-removal-userguide/params.png" alt="The view of settings window">

### Processing mode selection

**Detect subtitles** - detect subtitles and write subtitles mask and
additional information to files

**Remove subtitles** - read masks and additional information and remove
subtitle

**Detect and remove** - Run detector and remover at once, without
temporary files.

**Temp folder** - very important parameter! The filter will write to
this folder and will read from it!

**Subtitles detector parameters**  

### Detection Area

*Automatic* - Automatiс mode means working with whole frame; Uncheking
this radiobutton allows yuo to set area manually; smaller area means
much faster work

*Left* - left border of detection area

*Right* - left border of detection area

*Top* - top border of detection area

*Bottom* - bottom border of detection area

Coardinates are measured in pixels from top left corner

**Subtitle Preset** Subtitle type. Please, look only on contrast between
cont and outline colors ano common video quality. If no variand is
applicable, detecion parameters could be set manually.  

**Subtitle Outline Contrast** - Minimal contrast between subtitle and
outline. Lower contrast meaты that more pixels will be marked as
subtitles.

**Subtitle Sensivity** - Subtitle detection threshold. Lower ("High
quality") values means more "strict" checking and less pixels will be
marked.

### Subtitle remover parameters

**Blur/Compensation balance** - Blur threshold. If you decrease this
parameter it could lead to better subtitles removal on scene changes but
decrease the quality of removal for another cases

**Subtitle outline compensation** - If subtitles have "weak" edges (i.e.
half-transparent shadow or glow), some pixels from subtitle edges could
be losed. Morphological operation "Dilation" is used for removing this
artefacts. Lower values means less dilation count and some pixels can be
leaved by remover. Higher values means losing of "non-subtitle" pixels.


[RETURN TO FILTER
PAGE](/video_filters/subtitles-removal.html)
