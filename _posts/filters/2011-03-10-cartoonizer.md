---
original_url: http://compression.ru/video/cartoonizer/index_en.html
title: VirtualDub MSU Cartoonizer Filter / Converts Movies into Cartoons
description: The filter is designed for painting, drawing and animated cartoon rendering
preview_img: /assets/img/filters/cartoonizer/primer5.jpg
subprojects: virtualdub public
---

# VirtualDub MSU Cartoonizer Filter (Converts Movies into Cartoons)

[Gallery of results](/video_filters/cartoonizer-gallery.html)

* Algorithm: Dr. Dmitriy Vatolin, Michail Burkhinov, Konstantin Strelnikov  
* Implementation: Michail Burkhinov

**MSU Cartoonizer v 3.0:**  
- Filled Segments Rendering Added  
- Edge rendering for Faces Improved  
- Performance Optimized  
- Preview button Added

**MSU Cartoonizer v 2.0:**
- Colored and gray scale Pencil Drawing
- Edge rendering for Painting Improved 
- Color saturation control Added
- Job control Added
  
**MSU Cartoonizer v 1.0:**  
- First public release

The filter is designed for painting, drawing and animated cartoon
rendering. MSU Cartoonizer filter has many parameters, which allows to
obtain very interesting results. This is the first filter developed by
Graphics & Media Lab referring to non-photorealistic rendering area.

[More examples of MSU Cartoonizer usage can be seen in the
gallery](/video_filters/cartoonizer-gallery.html)

## Settings

<div class="center">
    <div><img src="/assets/img/filters/cartoonizer/parametrs.gif" alt="Interface of the filter"></div>
</div>
  
Interface of the filter allows to choose Cartoonizing mode. It can be
either "Painting", "Filled Segments" or "Drawing".

### Following settings can be modified in "Painting" mode: 

**Brush Size**  
Allows to control size of the brush, which painting is made by. Small
brushes make the frame more detailed, thus allowing image to be more
realistic. It is recommended to apply small brushes to the video with
small resolution. Large brushes make the image more blurred, thus
increasing non-photorealistic effect. It is better to apply large
brushes to the video with large resolution or in case when small details
are not very important and maximum painting effect is needed. It is
necessary to take into account, that small details may disappear.
Sometimes, to receive better results, it is useful to increase
resolution of the video. It can be done by means of Virtual Dub's
internal filter - *resize*.

**Brush Wetness**  
Controls wetness of a brush. In fact, allows to change accuracy of
strokes.

**Color Randomization**  
Adds variety to color luminance of strokes. This setting allows to
achieve better results on monochromatic areas of the image.

**Color Saturation**  
Changes Saturation of resulting image. Usually cartoons are bright and
colorful, this setting allows to increase or decrease level of these
parameters.

**Show Edges**  
This setting allows to render edges using crayon. Options of edge
rendering can be modified in Pencil Edge Options.

### The following settings can be modified in "Filled Segments" mode: 

**Number of Segments**  
Allows to control number of the rendered segments.

**Color Saturation**  
Changes Saturation of resulting image. Usually cartoons are bright and
colorful, this setting allows to increase or decrease level of these
parameters.

**Show Edges**  
This setting allows to render edges using crayon. Options of edge
rendering can be modified in Pencil Edge Options.

### The following settings can be modified in "Drawing" mode: 

**Pencil Type**  
Allows to choose the type of a pencil, which a cartoon is rendered by.
It may be Crayon (Colored) or Pencil (Non-Colored).

**Number of Edges**  
Controls the amount of rendered edges.

**Edge Brightness**  
Controls brightness of the edges for non-colored pencil and saturation
of the strokes for colored pencil.

**Edge Thickness**  
Controls edge thickness.

**Edge Accuracy**  
Controls accuracy of edge rendering. The left side of the bar
corresponds to precise strokes.

**Use Face Detection**  
If enabled, this setting allows to improve edge rendering for Faces.

### General Settings:

**Process each N frame**  
Allows to control the amount of processed frames. Each N-th frame is
processed, other frames are duplicated. This parameter is used to
reduce realism of the processed video, and also to decrease shaking.

## Features of the filter:

The new version supports job contol allowing the filter to be used by
AviSynth.

##  Examples of using filter in AviSynth:

**Example of a script for Painting:**

```
LoadVirtualDubPlugin("MSU_Cartoonizer.vdf","MSU_Cartoonizer", 0)  
clip=AVISource("test.avi", false, "RGB24")
clip.ConvertToRGB32.MSU_Cartoonizer(0, ShowEdges, EdgeAmount, EdgeBrightness, EdgeThickness, EdgeAccuracy, 
UseFaceDetection, BrushSize, BrushWetness, ColorRandom, ColorSaturation, ProcessEachNframe)
```

- ShowEdges - sets visibility of the edges. ShowEdges can be  0 -
  invisible edges  and 1 - visible edges.
- EdgeAmount - integer between 0 and 10. Sets the amount of edges.
- EdgeBrightness - integer between 0 and 10. Sets the edge brightness.
  Default value is 5.
- EdgeThickness - integer between 1 and 4. Sets the edge thickness,
  1 - thin edges and 4 - thick edges.
- EdgeAccuracy - integer between 1 and 4. Sets the stroke accuracy,
  1 - maximum edge accuracy and 4 - minimum edge accuracy.
- UseFaceDetection - allows improved edge rendering for Faces.
  UseFaceDetection can be 0 -  do not use improved edge rendering for
  Faces,  1 - use improved edge rendering for Faces.
- BrushSize - integer between 1 and 10. Sets the size of a brush.
- BrushWetness - integer between 0 and 10. Sets the brush wetness.
- ColorRandom - integer between 0 and 10. Sets the color
  randomization.
- ColorSaturation - integer between 0 and 10. Sets the color
  saturation. Default value is 5.
- ProcessEachNframe - integer between 1 and 10. Sets the amount of
  processed frames.

**Example of a script for Filled Segments:**

```
LoadVirtualDubPlugin("MSU_Cartoonizer.vdf", "MSU_Cartoonizer", 0)
clip= AVISource("test.avi",false,"RGB24") 
clip.ConvertToRGB32.MSU_Cartoonizer(1, ShowEdges, EdgeAmount, EdgeBrightness, EdgeThickness, EdgeAccuracy, 
UseFaceDetection, SegmentAmount, ColorSaturation, ProcessEachNframe)
```

- ShowEdges - sets visibility of the edges. ShowEdges can be  0 -
  invisible edges  and 1 - visible edges.
- EdgeAmount - integer between 0 and 10. Sets the amount of edges.
- EdgeBrightness - integer between 0 and 10. Sets the edge brightness.
  Default value is 5.
- EdgeThickness - integer between 1 and 4. Sets the edge thickness,
  1 - thin edges and 4 - thick edges.
- EdgeAccuracy - integer between 1 and 4. Sets the stroke accuracy,
  1 - maximum edge accuracy and 4 - minimum edge accuracy.
- UseFaceDetection - sets improved edge rendering for Faces.
  UseFaceDetection can be 0 -  not use improved edge rendering for
  Faces,  1 - use improved edge rendering for Faces.
- SegmentAmount - integer between 1 and 10. Sets the amount of
  rendered segments.
- ColorSaturation - integer between 0 and 10. Sets the color
  saturation. Default value is 5.
- ProcessEachNframe - integer between 1 and 10. Sets the amount of
  processed frames.

**Example of a script for Drawing:**

```
LoadVirtualDubPlugin("MSU_Cartoonizer.vdf", "MSU_Cartoonizer", 0)
clip= AVISource("test.avi",false,"RGB24") 
clip.ConvertToRGB32.MSU_Cartoonizer(2, PencilType, EdgeAmount, EdgeBrightness, EdgeThickness, EdgeAccuracy, 
UseFaceDetection, ProcessEachNframe)
```

- PenciType - Sets the Pencil Type. PencilType can be 0 - Crayon
  (Colored)  and 1 - Pencil (Non-Colored).
- EdgeAmount - integer between 0 and 10. Sets the amount of edges.
- EdgeBrightness - integer between 0 and 10. Sets the edge brightness.
  Default value is 5.
- EdgeThickness - integer between 1 and 4. Sets the edge thickness,
  1 - thin edges and 4 - thick edges.
- EdgeAccuracy - integer between 1 and 4. Sets the stroke accuracy,
  1 - maximum edge accuracy and 4 - minimum edge accuracy.
- ProcessEachNframe - integer between 1 and 10. Sets the amount of
  processed frames.

## Examples

#### Painting

<div class="center">
    <div>
        <img src="/assets/img/filters/cartoonizer/primer1.jpg" alt="Girl and dog"><br>
        <i>Girl and dog</i>
    </div>
</div>

#### Filled Segments

<div class="center">
    <div>
        <img src="/assets/img/filters/cartoonizer/primer5.jpg" alt="Jennifer Aniston"><br>
        <i>Jennifer Aniston</i>
    </div>
</div>

#### Painting and Drawing

<div class="center">
    <div>
        <img src="/assets/img/filters/cartoonizer/primer2.jpg" alt="Adriana Sklenarikova"><br>
        <i>Adriana Sklenarikova</i>
    </div>
</div>

#### The image showing results of using MSU Cartoonizer for landscapes

<div class="center">
    <div>
        <img src="/assets/img/filters/cartoonizer/primer3.jpg" alt="Landscape"><br>
        <i>Landscape</i>
    </div>
</div>

#### Animated Cartoon Rendering using MSU Cartoonizer

<div class="center">
    <div>
        <img src="/assets/img/filters/cartoonizer/lotr1.gif" alt="Fragment from movie The Lord of the Ring: The Fellow Ship of the Ring"><br>
        <i>Fragment from movie The Lord of the Ring: The Fellow Ship of the Ring</i>
    </div>
</div>

<div class="center">
    <div>
        <img src="/assets/img/filters/cartoonizer/susi.gif" alt="Pencil Drawing for the Susi movie"><br>
        <i>Pencil Drawing for the Susi movie</i>
    </div>
</div>

**You can see other examples of MSU Cartoonizer usage in the
[gallery](/video_filters/cartoonizer-gallery.html).**

## Download

- [MSU\_Cartoonizer 3.0. Unpack this file into the "Plugins" folder of
  VirtualDub directory. File size 283 KB (in
  ZIP)](http://compression.ru/video/cartoonizer/src/msu_cartoonizer.zip)
- [Filter license](http://compression.ru/video/license.txt)
- [MSU\_Cartoonizer 2.0. File size 272 KB (in
  ZIP)](http://compression.ru/video/cartoonizer/src/msu_cartoonizer_v2.zip)
- [MSU\_Cartoonizer 1.0. File size 126 KB (in
  ZIP)](http://compression.ru/video/cartoonizer/src/msu_cartoonizer_v1.zip)

## Contacts

* For common questions about filter's work please contact us: <video@graphics.cs.msu.ru>
* For commercial license of this filter (commercial usage is not free) please contact us: <video-licensing@graphics.cs.msu.ru>
