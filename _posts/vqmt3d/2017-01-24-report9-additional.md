---
original_url: http://compression.ru/video/vqmt3d/press-releases/report9/
title: MSU 3D-video Quality Analysis. Report 9 press release
description:
preview_img: /assets/img/vqmt3d/report9/preview-additional.png
subprojects: reports
---

# MSU Graphics & Media Lab Report \#9 on stereo films quality assessment

VQMT3D project continues publishing its updates. This time 9th report
includes a detailed analysis of 105 stereo movies re: time shifts
between camera views. The most interesting part of the report regards 2
new automatic quality analysis tools for stereoscopic video, which were
used for a large-scale analysis of 105 stereo movies.

{:.center}
![](/assets/img/vqmt3d/report9/image1.jpg)

{:.center}
Image \#1: Blu-ray boxes with discs that were used for 105 films
analysis.

The metric for time shift detection alongside with the detailed
description was presented by the authors in the previous report, where
its results were demonstrated on the analysis of a considerably smaller
number of movies. The new report demonstrates the outcomes of working on
a large-scale analysis of 105 movies. Time shift was detected in the
majority of the movies analyzed, with the maximum of 2 frames and the
median of 1 frame exactly. Time shift was evident in most contemporary
blockbusters. For example, *Pirates of the Caribbean: On Stranger Tides*
had two scenes of this kind. Interestingly, one of the detected scenes
was clearly produced by the means of 2D-3D conversion, which serves as
proof of sloppy editing.

These convincing results give the authors evidence that the development
of computer vision technologies may help us completely get rid of the
problem of time shifts throughout production stage.

{:.center}
![](/assets/img/vqmt3d/report9/image2.gif)

{:.center}
Image \#2: Example of a temporal shift

The most interesting part of the report is dedicated to our new metric
for converted movie analysis. More and more movies are being produced in
this way, which calls for creation of analytics tools that are able to
detect artefacts unseen in natural environment. Our new instrument
allows to detect a common problem of low-quality conversion, when 3D
movie-makers ignore small objects (usually in the background) and do not
assign them a distinct depth. As a consequence, those objects look stuck
to background.

This problem is hard to detect automatically, because the algorithm
should estimate distance from each object to the camera and compare its
estimate with the depth map used in the conversion process (which in
turn should be constructed by a separate stereo-matching algorithm).
Thus, a number of fundamental problems of computer vision are involved.
Therefore, the proposed approach is based on a simplifying assumption
that moving objects should have different depth from the background.

Using the abovementioned approach the authors managed to detect numerous
stuck-to-background objects with some notable artifacts found even in
blockbuster movies (28 out of 105 analyzed movies had budgets over \$100
million). The report showcases the examples of problems and offers
detailed case studies with comments from industry professionals.

{:.center}
![](/assets/img/vqmt3d/report9/image3.gif)

{:.center}
Image \#3: Example of a stuck-to-background object

Last but not least, the report provides a method of scene classification
by production type - shooting, conversion, computer graphics. 2D-to-3D
conversion technique is more and more commonly used not only for
creating full-length 3D movies, but also for converting individual
scenes in natively captured movies. In the majority of cases this method
is applied when one of the original views was somehow damaged. Another
case is when converted movies are enriched with captured scenes to cut
down expenses. Usually those are simple scenes (panoramic views) shot by
the second unit team. In both cases such scenes are made as an
afterthought which causes quality deterioration and makes them more
interesting to analyse. The algorithm developed by the authors allows to
quickly detect converted scenes in captured movies (and vice versa) and
improve movie analysis quality by using different algorithms for
captured and converted scenes.

The report offers a vast number of examples of converted scenes in
natively captured movies (and the other way round) and includes S3D
industry professionals' comments. All the analyzed movies are included
in overall bar charts with scenes sorted by production type, which
allows to evaluate the general relationship between the technologies in
use today.

{:.center}
![](/assets/img/vqmt3d/report9/image4.gif)

{:.center}
Image \#4: Example of a scene converted from 2D that was detected in
natively captured film Bait

## Links

You can download the ninth report here: [download report](/stereo_quality/report9.html#download). Note, that the full report is
**absolutely free** but download is available **only** for industry
professionals (due to publication of real mistakes in the
post-production process).

## Acknowledgements

We would like to thank the following people for providing valuable
comments, opinions and feedback, which helped to improve this report (in
alphabetical order):

-   **Alaric Hamacher**, Stereographer, Director, Professor at Kwangwoon
    University
-   **Srboljub Hetlerovic**, Stereographer, VFX supervisor
-   **Takashi Kawai**, Professor in the Department of Intermedia Art and
    Science at Waseda University
-   **John Merritt**, Senior Consulting Scientist at The Merritt Group
-   **Daniele Pugni**, 3D-Motion Graphic Designer for Sky 3D Channel —
    Sky Italia SRL
-   **Pan Vafeiadis**, Senior Lecturer in Visual Effects, Nuke Trainer,
    and Senior Stereoscopic Compositor

A key motive of our reports is to improve the stereo quality and
therefore to reduce eyestrain and headache. The Graphics & Media Lab
hopes that a high 3D video quality would contribute to a continually
increasing number of people, leaving the modern theaters without
annoyance and with good impressions from the image quality and
storytelling.

Currently we are looking for collaboration on upcoming reports. If you
would like to participate by commenting on the draft versions of the
reports, please feel free to contact us:
<3dmovietest@graphics.cs.msu.ru>. If, for some reason, you cannot make
public comments for inclusion in the reports, we would really appreciate
any other kind of feedback.

## Reports overview

Stereo-analysis project
[description](/stereo_quality/)

{% include vqmt3d/reports_overview_table.html %}

## Contacts

For questions and proposition please contact us <3dmovietest@graphics.cs.msu.ru>
