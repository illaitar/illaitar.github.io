---
original_url: http://compression.ru/video/vqmt3d/press-releases/report8/
title: MSU 3D-video Quality Analysis. Report 8 press release
description:
preview_img: /assets/img/vqmt3d/report8/preview-additional.png
subprojects: reports
---

# MSU Graphics & Media Lab Report #8 on stereo films quality assessment

The largest part of the new report is devoted to the detailed analysis
of geometric inconsistencies, where we focus on rotation and scale
(field-of-view) mismatches between the views in S3D movies. Implicitly
these problems were already analyzed in our previous reports \#1-5
through detection of vertical shifts between the views, but the new
metric is designed to assess the possible origins of the problem
directly. Furthermore, these type of mismatches tend to be more painful
to the viewers compared to plain vertical parallax that was the main
focus of the geometric analysis in the previous reports.

However, the next parts of the report are far more interesting...

It appears to be the case that we are the first to perform a large-scale
evaluation of temporal shift in stereoscopic movies (we welcome any tips
regarding other research in this field). Temporal shift is considered to
be one of the most irritating artifacts, while even small subframe
shifts can be consciously noticed by the viewers, especially in
fast-paced scenes with a lot of motion. Our experiments seem to indicate
that it is the most easily noticeable artifact among all the relatively
common ones. **That's why it is rather surprising that 8 out of 15
natively captured S3D movies that we've evaluated contain at least one
scene with temporal shift.** We have detected 45 of such scenes in
total, several of them even contain more than a half-frame shift, that
could have been easily fixed (at least, partially) in post-production if
those scenes were found at the right time. Moreover, there are software
solutions that can fix subframe temporal discrepancies with a reasonable
level of quality. And now, owing to advances in computer vision
algorithms, it is possible to automatically detect this kind of problems
and we hope that it will become a more widespread practice and help
improve technical quality of S3D movies.

{:.center}
![](/assets/img/vqmt3d/report8/image01.gif)

{:.center}
Image \#1: Example of a temporal shift

{:.center}
![](/assets/img/vqmt3d/report8/image02.png)

{:.center}
Image \#2: Evaluated movies sorted by total duration of scenes with
temporal shift

Also it seems that we are the first to analyze a number of S3D movies
for channel mismatch (scenes with swapped left and right views). It is
certainly a very annoying problem, even more so than temporal shift. And
its detection is further complicated by the fact that it is often hard
to consciously notice channel mismatch, as our brains do a pretty good
job of adapting and compensating for such anomalies. But nonetheless it
definitely can contribute to the overall visual fatigue and headaches
experienced by some viewers after watching S3D movies. Channel mismatch
is obviously very easy to fix, so the main problem lies in its detection
in the right time. **And our results show that it is not that rare: 8
movies out of 25 that we have tested contain at least one scene with
channel mismatch.** We hope that new instruments will enable more
efficient quality control and help bring S3D technical quality to a new
level.

{:.center}
![](/assets/img/vqmt3d/report8/image03.gif)

{:.center}
Image \#3: Example of a channel mismatch

{:.center}
![](/assets/img/vqmt3d/report8/image04.png)

{:.center}
Image \#4: Evaluated movies sorted by total duration of scenes with
channel mismatch

## Acknowledgements

We would like to thank the following people for providing valuable
comments, opinions and feedback, which helped to improve this report (in
alphabetical order):

-   **Nick Brown**, Stereographer, Stereo Supervisor
-   **Ross Copeland**, Online Editor / Stereographer & Colourist,
    Post-Production Consultant
-   **Markus Lanxinger**, Stereographer, Stereoscopic Supervisor
-   **Daniele Pugni**, 3D Motion Graphic Designer Freelancer for Sky 3D
    Channel
-   **Jill Smolin**, Director of Production Education for 3ality
    Technica
-   **Paul Taylor**, Supervising Stereographer

A key motive of our reports is to improve the stereo quality and
therefore to reduce eyestrain and headache. The Graphics & Media Lab
hopes that a high 3D video quality would contribute to a continually
increasing number of people, leaving the modern theaters without
annoyance and with good impressions from the image quality and
storytelling.

Currently we are looking for collaboration on upcoming reports \#9,10.
If you would like to participate by commenting on the draft versions of
the reports, please feel free to contact us:
<3dmovietest@graphics.cs.msu.ru>. If, for some reason, you cannot make
public comments for inclusion in the reports, we would really appreciate
any other kind of feedback.

## Reports overview

Stereo-analysis project
[description](/stereo_quality/)

{% include vqmt3d/reports_overview_table.html %}

## Contacts

For questions and proposition please contact us <3dmovietest@graphics.cs.msu.ru>
