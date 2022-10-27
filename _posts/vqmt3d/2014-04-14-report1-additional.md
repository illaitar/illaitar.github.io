---
original_url: http://compression.ru/video/vqmt3d/press-releases/report1/
title: MSU 3D-video Quality Analysis. Report 1 press release
description:
preview_img: /assets/img/vqmt3d/report1/preview-additional.png
subprojects: reports
---

# MSU Graphics & Media Lab Report #1 on stereo films quality assessment

Graphics & Media Lab CMC of [Lomonosov Moscow State
University](http://www.msu.ru/en/) has about 10 years' experience in
comprehensive analyzing of compressed video. Recently the Graphics &
Media Lab (further: the Lab; in cooperation with [IITP
RAS](http://www.iitp.ru/en/about)) has published
its [first detailed report](/stereo_quality/report1.html) on
Stereo-Film-Quality Analysis within VQMT3D (Video Quality Measurement
Tool for 3D) Project. Meanwhile the Lab is working on the next reports
on stereoscopic video quality estimation. They are expected to be made
public in the second half of 2013.

Stereo and multiview video entertainment has become a very popular
trend. A rapidly growing demand for 3D films after Avatar release
inspired the production houses to create a lot of new stereo content.
But sometimes doing fast doesn't mean doing it well enough. Insufficient
stereo video quality provoked in the audience such 'special effects' as
eyestrain and headache after visiting 3D cinemas. The Lab decided to
analyze five stereo films, captured with stereoscopic camera systems and
to investigate the reasons of the irritating annoyance. Finding just a
set of bad frames is rather a simple task, but it is not a useful result
for a comparative analysis. For achieving a valuable result it's
important to estimate a ratio of bad and well-done frames in a movie.
Such results enable finding the worst frames in one movie or comparing
different films. For the purpose of revealing stereoscopic errors the
Lab developed a unique tool for stereo video quality measurement
(VQMT3D). **Its algorithms are able to discover the key reasons of
visual discomfort from 3D films viewing:**

1.  horizontal disparity
2.  vertical disparity
3.  color mismatch
4.  sharpness mismatch

The free downloadable
[report](/stereo_quality/report1.html#download)
consists of 246 pages and comprises of three main parts:

1.  Thorough description of visual-discomfort potential causes while
    viewing stereo 3D films. Explanation of human vision physics and the
    stereo errors impact on human eyes from an ophthalmologist
    professional point of view.
2.  Detailed analysis of five films. Each film description consists of
    two parts:
    a.  Full per-frame analysis with charts showing metric values for
        each frame
    b.  Visualizations demonstrating artefacts in frames that earned a
        poor rating according to their metrics
3.  Overall film comparison. The charts depict the average metric values
    and distribution of these values in each film.

**Potential reasons of visual distortion, caused by stereo films:**

1.  Accommodation-convergence conflict
2.  Horizontal disparity
3.  Vertical disparity
4.  Interocular differences in contrast/luminance
5.  The effects of blur (symmetric and asymmetric)

**Ross Copeland** (Post Production Stereographer) described the key
artifacts in stereo films and the means of eliminating the errors:

> *Filming 3D is complex, and even the best rigs and crews can end up
with some issues in shots that must then be fixed in postproduction.
Filming for 3DTV programs is far more likely to result in more extreme
errors and mismatches owing to the budget and time constraints of
today's TV programs. Some problems can be fixed easily, some are very
difficult and some cannot be fixed at all. Horizontal and vertical
parallax and color mismatch are the most common issues and are generally
very easy to fix. It may be possible to fix small sharpness or focus
disparities using the proper software, but as with parallax and color,
if the mismatches are extreme, these problems will be more difficult, if
not impossible, to fix. Other issues may also arise, such as keystoning,
edge violations, occlusion, retinal rivalry, light polarization, and
pitch or tilt (also known as the "near-far problem"), among others.
Although I do assess issues visually, I also use software tools with
histograms, waveforms and various display options to help determine the
exact amount of adjustment needed to improve a shot. Additional
development of such tools will help improve 3D filming, making my job
easier and helping produce a much more comfortable viewer experience.*

The proposed evaluation methodology provides a value for each frame of
an evaluated stereo film. An average result for the film Avatar has been
used as a reference value (marked green), because it was the first
popular and high-quality stereoscopic film. These reference-level lines
are especially useful when dealing with rather obscure color and
sharpness mismatch metrics.

Per-frame video evaluation enables detection of the worst frames in a
film or detection of the scenes that should be fixed primarily. Color
and sharpness mismatch values are presented as dimensionless. The values
represent the strength of the color or sharpness difference between two
views of a stereoscopic frame. The greater is the color mismatch, the
higher is the value for this metric. The sharpness mismatch value
depends on the size of the region containing the sharpness mismatch and
the strength of this mismatch.

Demonstration of color-mismatch issues detection in Resident Evil:
Afrerlife using per-frame charts:

{:.center}
![](/assets/img/vqmt3d/report1/per-frame-color-charts.gif)

Horizontal disparity values are measured in percent of frame width.
Vertical disparity is measured in permil (h) of frame width. A permil is
a one-tenth of a percent. A tilt is measured in degrees. Percents and
permils are used to get invariant values relative to the actual frame
width measured in pixels. For vertical disparity, the lower value means
better video quality.

Demonstration of vertical-disparity issues detection in Resident Evil:
Afrerlife using per-frame charts (Image #2):

{:.center}
![](/assets/img/vqmt3d/report1/per-frame-chart-vertical-disparity-problem.png)

The horizontal-disparity charts enable visualization of depth-budget
distribution in Resident Evil: Afterlife for a given frame (Image #3):

{:.center}
![](/assets/img/vqmt3d/report1/per-frame-disparity-chart.png)

## Examples of detected problems

1.  Huge inter-view color and geometry mismatches were detected in
    *Resident Evil: Afrerlife* (Image #4):

    {:.center}
    ![](/assets/img/vqmt3d/report1/res_evil_color_geometry_problem.gif)

2.  Excessive positive parallax artifact: positive disparity of 5%
    limits display size to 55" in *Galapagos: The Enchanted Voyage*. It means that this frame might be painful when
    viewing on a big TV or a 3D projector because of eyes divergence
    (Image #5):

    {:.center}
    ![](/assets/img/vqmt3d/report1/Excessive_parallax_vis.png)

    **Julian Napier** (Director, editor, stereographer) commented about
    an acceptable positive parallax value:

    > "I set out to never exceed a 2% positive parallax, as beyond this
    level, the eyes must diverge beyond what is comfortable. Generally I
    aim for 0.5% to 1% positive; thus, the 2% ceiling gives me some room
    to maneuver if I want or need to shift convergence a little in
    postproduction."

3.  Inter-frame sharpness mismatch was revealed in *Resident Evil:
    Afrerlife* (Images #6-7):

    {:.center}
    ![](/assets/img/vqmt3d/report1/res_evil_color_sharpness_problem_left.png)

    {:.center}
    ![](/assets/img/vqmt3d/report1/res_evil_color_sharpness_problem_right.png)

To compare films with each other the Lab has used the charts of two
types (for each problem-detection metric). The first chart simply shows
average metric values for a set of evaluated films. Image #8 shows an
example chart for color mismatch metric (comparison of 10 movies):

{:.center}
![](/assets/img/vqmt3d/report1/color_mismatch_average_values.png)

The second chart is an integral histogram that enables visualization of
metric values distribution through the film. This histogram requires
some explanations for a better understanding: for example, 50% frames in
*Pirates of the Caribbean: On Stranger Tides* have metrics value below 1.
The film Step Up 3D has 50% frames with metrics value below 10 and
just 3% of frames with a value below 1.

Image #9 depicts an example chart for color mismatch metric (comparison
of 10 movies):

{:.center}
![](/assets/img/vqmt3d/report1/color_integral_histogram.png)

## Acknowledgements

The Lab is grateful for valuable comments contributed by professional
stereographers to this report (in alphabetical order):

-   Ross Copeland
-   Alfredo Gonzalez
-   Srboljub Hetlerovic
-   Jon Karafin
-   Julian Napier

## Analyzed films

-   Pirates of the Caribbean: On Stranger Tides (2011)
-   Resident Evil: Afterlife (2010)
-   Step Up 3D (2010)
-   Galapagos: The Enchanted Voyage (1999)
-   Into the Deep (1994)

A key motive of this report is to improve the stereo quality and
therefore to reduce eye- and headache. The Graphics & Media Lab hopes,
that a high 3D video quality would contribute to a continually
increasing number of people, leaving the modern theaters without
annoyance and with good impressions from the image quality and
storytelling. The [report is available](/stereo_quality/report1.html#download) to
all who may be concerned and interested in improving the quality of
stereoscopic content. The next reports on 3D quality will be published
in the near future on the [website](/stereo_quality/reports/).

## Reports overview

Stereo-analysis project
[description](/stereo_quality/)

{% include vqmt3d/reports_overview_table.html %}

## Contacts

For questions and proposition please contact us <3dmovietest@graphics.cs.msu.ru>
