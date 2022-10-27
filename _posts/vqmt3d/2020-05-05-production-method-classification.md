---
title: Neural network-based algorithm for classification of stereoscopic video by the production method
description: What method was used to create the 3D scene?
preview_img: /assets/img/vqmt3d/production-method-classification/preview.png
subprojects: metrics
---
# Neural network-based algorithm for classification of stereoscopic video by the production method

- Author: Sergey Zvezdakov
- Supervisor: dr. Dmitriy Vatolin

## Introduction
Creating an efficient and correct algorithm for quality assessment of stereoscopic videos requires knowledge of the method used for its making. Stereoscopic videos, made through different production methods, contain various types of artifacts, so it’s necessary to analyze them with different quality assessment algorithms.


<p><b>Artifacts of stereoscopic shooting</b></p>

![Artifacts of stereoscopic shooting](/assets/img/vqmt3d/production-method-classification/shooting_artifacts.png)

<p><br/><b>Artifacts of 2D-to-3D conversion</b></p>

![Artifacts of 2D-to-3D conversion](/assets/img/vqmt3d/production-method-classification/conversion_artifacts.png)

<p><br/><b>Common artifacts</b></p>

![Common artifacts](/assets/img/vqmt3d/production-method-classification/common_artifacts.png)


## Proposed method

The algorithm classifies stereoscopic video scenes.

Features which can be used for attribution to one of the three main classes are calculated for an input video. Then, using the information obtained from these features, the classifier predicts the production method of the input.

Due to the fact that flat and low-contrast stereoscopic video is uninformative and difficult to classify, it is excluded from analysis.


<p><b>Algorithm scheme</b></p>

![Algorithm scheme](/assets/img/vqmt3d/production-method-classification/algorithm.png)

## Experiments

To find the best parameters, various configurations of features based on VQMT3D were tested:

- VQMT3D — a linear method of support vectors using estimates obtained from the algorithms of the VQMT3D project
- VQMT3D + DH (Linear) — a linear method of support vectors using estimates of the VQMT3D project's algorithms and an estimate of the blurring of the boundaries of objects on the disparity map
- VQMT3D + DH — a neural network using estimates of the VQMT3D project's algorithms and estimation of objects' boundaries blurring on the disparity map
- VQMT3D + DH + DS + FP — a neural network using estimates of the VQMT3D project's algorithms, objects’ boundaries blurring on the disparity map, smoothness of the disparity histogram, and analysis of keystone distortion


<p><b>Conversion/shooting classification results</b></p>

![Conversion/shooting](/assets/img/vqmt3d/production-method-classification/conversion_shooting.png)

<p><br/><b>CGI/conversion classification results</b></p>

![Graphics/conversion](/assets/img/vqmt3d/production-method-classification/CGI_conversion.png)

<p><br/><b>CGI/shooting classification results</b></p>

![Graphics/shooting](/assets/img/vqmt3d/production-method-classification/CGI_shooting.png)


### Results

Within the framework of the VQMT3D project, the proposed algorithm was used to analyze 105&nbsp;full-length stereoscopic movies.

<p><b>Converted scene statistics for shot movies</b></p>

<table class="with-borders">
    <tr>
        <td><strong>Film</strong></td>
        <td><strong>Budget, $K/min</strong></td>
        <td><strong>Number of scenes found</strong></td>
    </tr>
    <tr>
        <td>47 Ronin</td>
        <td>1470</td>
        <td>9</td>
    </tr>
    <tr>
        <td>A Very Harold &amp; Kumar 3D Christmas</td>
        <td>211</td>
        <td>19</td>
    </tr>
    <tr>
        <td>Bait</td>
        <td>301</td>
        <td>11</td>
    </tr>
    <tr>
        <td>Battle of the Year</td>
        <td>181</td>
        <td>24</td>
    </tr>
    <tr>
        <td>Dark Country</td>
        <td>45</td>
        <td>2</td>
    </tr>
    <tr>
        <td>Dredd</td>
        <td>520</td>
        <td>48</td>
    </tr>
    <tr>
        <td>Drive Angry</td>
        <td>480</td>
        <td>2</td>
    </tr>
    <tr>
        <td>Final Destination 5</td>
        <td>434</td>
        <td>4</td>
    </tr>
    <tr>
        <td>Flying Swords of Dragon Gate</td>
        <td>286</td>
        <td>14</td>
    </tr>
    <tr>
        <td>Fright Night</td>
        <td>283</td>
        <td>6</td>
    </tr>
    <tr>
        <td>Ghosts of the Abyss</td>
        <td>213</td>
        <td>14</td>
    </tr>
    <tr>
        <td>Great Canyon Adventure</td>
        <td>Unknown</td>
        <td>4</td>
    </tr>
    <tr>
        <td>Hansel &amp; Gretel: Witch Hunters</td>
        <td>568</td>
        <td>5</td>
    </tr>
    <tr>
        <td>Hugo</td>
        <td>1349</td>
        <td>9</td>
    </tr>
    <tr>
        <td>Jack the Giant Slayer</td>
        <td>1710</td>
        <td>2</td>
    </tr>
    <tr>
        <td>Journey 2: The Mysterious Island</td>
        <td>840</td>
        <td>3</td>
    </tr>
    <tr>
        <td>Katy Perry: Part of Me</td>
        <td>127</td>
        <td>36</td>
    </tr>
    <tr>
        <td>Life of Pi</td>
        <td>944</td>
        <td>6</td>
    </tr>
    <tr>
        <td>One Direction: This Is Us</td>
        <td>93</td>
        <td>20</td>
    </tr>
    <tr>
        <td>Oz the Great and Powerful</td>
        <td>1653</td>
        <td>2</td>
    </tr>
    <tr>
        <td>Pina</td>
        <td>40</td>
        <td>2</td>
    </tr>
    <tr>
        <td>Piranha 3DD</td>
        <td>60</td>
        <td>23</td>
    </tr>
    <tr>
        <td>Pirates of the Caribbean: On Stranger Tides</td>
        <td>1838</td>
        <td>19</td>
    </tr>
    <tr>
        <td>Prometheus</td>
        <td>1048</td>
        <td>5</td>
    </tr>
    <tr>
        <td>Resident Evil: Afterlife</td>
        <td>618</td>
        <td>3</td>
    </tr>
    <tr>
        <td>Resident Evil: Retribution</td>
        <td>677</td>
        <td>3</td>
    </tr>
    <tr>
        <td>Sanctum</td>
        <td>277</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Saw 3D: The Final Chapter</td>
        <td>222</td>
        <td>48</td>
    </tr>
    <tr>
        <td>Sea Rex 3D: Journey to a Prehistoric World</td>
        <td>121</td>
        <td>12</td>
    </tr>
    <tr>
        <td>Silent Hill: Revelation 3D</td>
        <td>210</td>
        <td>3</td>
    </tr>
    <tr>
        <td>Stalingrad</td>
        <td>229</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Step Up Revolution</td>
        <td>333</td>
        <td>7</td>
    </tr>
    <tr>
        <td>Texas Chainsaw 3D</td>
        <td>108</td>
        <td>15</td>
    </tr>
    <tr>
        <td>The Amazing Spider-Man</td>
        <td>1691</td>
        <td>2</td>
    </tr>
    <tr>
        <td>The Darkest Hour</td>
        <td>337</td>
        <td>14</td>
    </tr>
    <tr>
        <td>The Great Gatsby</td>
        <td>739</td>
        <td>1</td>
    </tr>
    <tr>
        <td>The Hobbit: An Unexpected Journey</td>
        <td>1914</td>
        <td>2</td>
    </tr>
    <tr>
        <td>The Legend of Hercules</td>
        <td>707</td>
        <td>16</td>
    </tr>
    <tr>
        <td>Transformers: Dark of the Moon</td>
        <td>1266</td>
        <td>11</td>
    </tr>
    <tr>
        <td>TRON: Legacy</td>
        <td>1360</td>
        <td>17</td>
    </tr>
    <tr>
        <td>Underworld: Awakening</td>
        <td>786</td>
        <td>11</td>
    </tr>
</table>


<p><br/><b>Shooted scene statistics for converted movies</b></p>

<table class="with-borders">
    <tr>
        <td><strong>Film</strong></td>
        <td><strong>Budget, $K/min</strong></td>
        <td><strong>Number of scenes found</strong></td>
    </tr>
    <tr>
        <td>Gulliver’s Travels</td>
        <td>1317</td>
        <td>1</td>
    </tr>
    <tr>
        <td>The Green Hornet</td>
        <td>1008</td>
        <td>40</td>
    </tr>
    <tr>
        <td>Spy Kids: All the Time in the World in 4D</td>
        <td>306</td>
        <td>38</td>
    </tr>
    <tr>
        <td>Thor</td>
        <td>1304</td>
        <td>3</td>
    </tr>
    <tr>
        <td>Priest</td>
        <td>689</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Piranha 3D</td>
        <td>272</td>
        <td>3</td>
    </tr>
</table>
