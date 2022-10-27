---
original_url: http://compression.ru/video/image_restoration/index_en.html
title: Photoshop MSU Image Restoration
description: The plug-in for image processing program Adobe Photoshop CS2
preview_img: /assets/img/filters/image-restoration/airplane_mask.jpg
subprojects: public image
---

# Photoshop MSU Image Restoration

* Project, ideas: Dmitriy Vatolin, Dmitriy Kulikov, Maxim Makhinya  
* Implementation: Keira Ragulina

[**DOWNLOAD**](http://compression.ru/video/image_restoration/src/msu_image_restoration.zip)

The plug-in for image processing program [Adobe Photoshop
CS2](http://www.adobe.com/products/photoshop/family/). Other versions of
Photoshop are not checked.

The filter filling in picked out damaged area using only space data.
This filter is intended to repairing image (removing scratches, spots
and etc), removing undesirable "objects".

**History of versions:**

* 1.5 - add two image restoration algorithms, speed up filter and reduce
number of parameters
* 0.9b - first beta version

## Settings

<div class="center">
    <div><img src="/assets/img/filters/image-restoration/parameters.jpg" alt="Settings of the filter"></div>
</div>

**Algorithm - used algorithm**  

**Block radius** - block radius for compare.  
Choose this radius equal to typical element of damaged area.  
Plug-in works longer with the greater block radius.  
**1 &lt;= Block radius &lt;= 10**  

**Search radius** - radius of similar block search area.  
Choose this radius equal to area radius similar to the damaged area.  
Plug-in works longer with the greater search radius.  
**Block radius + 2 &lt;= Search radius &lt;= 30**  
For Fast algorithm:  
**Block radius + Bondary zone radius + 2 &lt;= Search radius &lt;= 30  
Bondary zone radius = (2 \* Block radius + 1) / 6**

## Examples

#### High quality algorithm

<div class="center">
    <div>
        <img src="/assets/img/filters/image-restoration/airplane_orig.jpg" alt="Source image"><br>
        <i>Source image</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/image-restoration/airplane_mask.jpg" alt="Mask using for image restoration"><br>
        <i>Mask using for image restoration</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/image-restoration/airplane_rest.jpg" alt="Restored image"><br>
        <i>Restored image</i>
    </div>
</div>

#### Normal algorithm

<div class="center">
    <div>
        <img src="/assets/img/filters/image-restoration/orchid_src.jpg" alt="Source image"><br>
        <i>Source image</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/image-restoration/orchid_mask.jpg" alt="Mask using for image restoration"><br>
        <i>Mask using for image restoration</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/image-restoration/orchid_rest.jpg" alt="Restored image"><br>
        <i>Restored image</i>
    </div>
</div>

#### Fast algorithm

<div class="center">
    <div>
        <img src="/assets/img/filters/image-restoration/tower_orig.jpg" alt="Source image"><br>
        <i>Source image</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/image-restoration/tower_mask.jpg" alt="Mask using for image restoration"><br>
        <i>Mask using for image restoration</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/image-restoration/tower_rest.jpg" alt="Restored image"><br>
        <i>Restored image</i>
    </div>
</div>

## Download

- [**Open this file Photoshop CS2. Unpacked in the folder "Plug-Ins".
  Plug-in should appear in menu  
  Filter -&gt; MSU Graphics & Media Lab (at the very bottom). File
  size 60 KB (in
  ZIP)**](http://compression.ru/video/image_restoration/src/msu_image_restoration.zip)
- [Program license for non-commercial
  usage](http://compression.ru/video/license.txt)

For common questions about filter's work and other issues about it please contact us.

E-mail: <video@graphics.cs.msu.ru>

