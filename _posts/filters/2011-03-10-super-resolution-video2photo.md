---
original_url: http://compression.ru/video/super_resolution/video2photo_en.html
title: MSU Video2Photo Super-Resolution Filter
description: This filter is intended to create stills from videos with high resolution and good quality.
preview_img: /assets/img/filters/super-resolution-video2photo/preview.gif
subprojects: image
---

# MSU Video2Photo Super-Resolution Filter

### Filter for making quality freeze-frames!

* Method ideas: Dr. Dmitriy Vatolin  
* Implementation: Artem Titarenko*

**This filter is intended to create stills from videos with high
resolution and good quality.**  
Improvement is achieved not only due to information from one frame but
also using it in the whole video sequence.

Main problem of this filter is slow speed.

## Examples

Here is the comparison of MSU Video2Photo filter results with original
frames increased by factor of 2 and bicubic resize method.  
Only freeze-frames and corresponding frames of source videos are shown,
other frames are omitted.

First example is the 4-th frame of test sequence "news":

![Source
frame](/assets/img/filters/super-resolution-video2photo/news_src2x.jpg)  
<i>Source frame</i>

![Bicubic-resized
frame](/assets/img/filters/super-resolution-video2photo/news_bic.jpg)  
<i>Bicubic-resized frame</i>

![Processed with MSU Video2Photo
frame](/assets/img/filters/super-resolution-video2photo/news_out.jpg)  
<i>Processed with MSU Video2Photo frame<i>

![Source
frame](/assets/img/filters/super-resolution-video2photo/news_src2x_2.jpg)  
<i>Source frame</i>

![Bicubic-resized
frame](/assets/img/filters/super-resolution-video2photo/news_bic_2.jpg)  
<i>Bicubic-resized frame</i>

![Processed with MSU Video2Photo
frame](/assets/img/filters/super-resolution-video2photo/news_out_2.jpg)  
<i>Processed with MSU Video2Photo frame</i>

Further pictures are fragments of frame from the "mobile" sequence:

![Source
frame](/assets/img/filters/super-resolution-video2photo/mobl_2_src2x.jpg)  
<i>Source frame</i>

![Bicubic-resized
frame](/assets/img/filters/super-resolution-video2photo/mobl_2_src_bic.jpg)  
<i>Bicubic-resized frame</i>

![Processed with MSU Video2Photo
frame](/assets/img/filters/super-resolution-video2photo/mobl_2_out.jpg)  
<i>Processed with MSU Video2Photo frame<i>

Another example is the 4-th frame of "foreman" sequence:

![Source
frame](/assets/img/filters/super-resolution-video2photo/foreman_src2x.jpg)  
<i>Source frame</i>

![Bicubic-resized
frame](/assets/img/filters/super-resolution-video2photo/foreman_src2x_bic.jpg)  
<i>Bicubic-resized frame</i>

![Processed with MSU Video2Photo
frame](/assets/img/filters/super-resolution-video2photo/foreman_out.jpg)  
<i>Processed with MSU Video2Photo frame</i>

  
And the frame from the "src\_ref\_625" sequence:

![Source
frame](/assets/img/filters/super-resolution-video2photo/ref625_src2x.jpg)  
<i>Source frame</i>

![Bicubic-resized
frame](/assets/img/filters/super-resolution-video2photo/ref625_bic.jpg)  
<i>Bicubic-resized frame</i>

![Processed with MSU Video2Photo
frame](/assets/img/filters/super-resolution-video2photo/ref625_out.jpg)  
<i>Processed with<br>
MSU Video2Photo frame</i>

## Contacts

E-mail: <video@graphics.cs.msu.ru>

Please read [MSU filters
FAQ](/video_filters/video-filters-faq-en.html) before mailing.
