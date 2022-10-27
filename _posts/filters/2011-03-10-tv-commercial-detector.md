---
original_url: http://compression.ru/video/tv_commercial_detector/index_en.html
title: MSU TV Commercial Detector / TV Commercial Detection Tool
description: MSU TV Commercial Detector is a tool for TV Commercial Detection.
preview_img: /assets/img/filters/tv-commercial-detector/preview.png
subprojects: public
see_also:
  - '/other/film-comparison.html'
---

# MSU TV Commercial Detector

* Project: Dr. Dmitriy Vatolin
* Implementation, ideas: Alexander Voronov 

#### Project Assistance
You can help us by providing broadcasting samples (sports, movies, talk-shows, etc.) with uncut commercial. Mail to <no-tv-ad@compression.ru>.

## Introduction

<img src="/assets/img/filters/tv-commercial-detector/tv_ad.png" alt="No ad!" height="128">

Commercial breaks take up to 20% time of broadcasting. When you record
television programmes for home collection, it is reasonable to cut out
commercial blocks in order to reduce size of the videofile and keep your
time, that is usually spent on fast forwarding of advertisements.
Commercial breaks can be detected by estimating special features of
segments and by tracking of tv-channel logo.

## MSU TV Commercial Detector

MSU TV Commercial Detector is a tool for TV Commercial Detection.
Program uses videofiles with broadcasting as input. After processing it
writes AviSynth script with marking showing what videoframes to exclude.

<img src="/assets/img/filters/tv-commercial-detector/howto-small.png" alt="Work of algorithm" height="256"><br>
<i>Work of algorithm</i>

## Instruction

You need to install AviSynth for normal work of program. You can
download it from official site [avisynth.org](http://avisynth.org/).

Program is launched from command line. You need to enter only one
parameter: name of the processing file.  
**Example:**

```
msu-commdetector.exe example.mpg
```

Program will create avs file to open video and then will proceed to
work. When program is launched without paremeters it tries to open file
"source.avs" in home folder. The result of program work will be a
textfile "result.txt" with marking of commercial block by frames and avs
script removing these commercial blocks from video. Made avs file can be
opened with any program working with avi (for example: VirtualDub,
MeGUI, AviDemux, etc.).

<img src="/assets/img/filters/tv-commercial-detector/screenshot.png" alt="Program screenshot"><br>
<i>Program screenshot</i>

<img src="/assets/img/filters/tv-commercial-detector/logo_results.png" alt="Result of work with logo matching"><br>
<img src="/assets/img/filters/tv-commercial-detector/nonlogo_results.png" alt="Result of work without logo matching"><br>
<i>Examples of work</i>

## Advanced settings

In file *commdetector.ini* you can specify advanced settings.  

```
AnalyzeLogo = 0
```

Don't perform logo extraction. Useful for TV channels where logo doesn't
fade for commercial time or in cases when program gives result that
don't seem to be truth.

```
ExtractCommercial = 1
```

To create avs script including only commercial. May be useful for
checking whether program is working correctly or not.

```
WriteDebugScript = 1
```

To create avs script where every block is subscribed as commercial or
non-commercial.

Sometimes program yields wrong results by reason of incorrect work of
installed in system MPEG-2 decoder. You may use external decoder to
solve the problem. Download [archive (1.45
MB)](http://avisynth.org/warpenterprises/files/ffmpegsource_20071006.zip)
and unpack its content to folder c:\\Program Files\\AviSynth
2.5\\plugins\\  
Also it's necessary to specify in settings file using of external
decoder:

```
ExternalDecoder = 1
```

## Download

[MSU TV Commercial Detector 0.2 alpha (100
KB)](http://compression.ru/video/tv_commercial_detector/src/msu_tv_commercial_detector.zip)

## Contacts

If you find an error in program work or you have any suggestion, please
contact us.  
Also we will be very thankful if you provide records of broadcasting for
us.

E-mail: <no-tv-ad@compression.ru>
