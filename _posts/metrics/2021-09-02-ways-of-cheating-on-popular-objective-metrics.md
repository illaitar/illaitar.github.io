---
title: "PSNR and SSIM: application areas and criticism"
description: "Learn about limits and applicability of the most popular metrics"
preview_img: "/assets/img/metrics/psnr_and_ssim/main.gif"
subprojects: 
---

{:.center}
# Ways of cheating on popular objective metrics: blurring, noise, super-resolution and others

## Introduction

Recently, the Graphics &amp; Media Lab Video Group organized several Super-Resolution (SR) [benchmarks](https://videoprocessing.ai/benchmarks/) and it was necessary to select suitable quality metrics. Subjective comparison showed that the most popular video quality metrics — [PSNR](https://en.wikipedia.org/wiki/Peak_signal-to-noise_ratio) and [SSIM](https://en.wikipedia.org/wiki/Structural_similarity) — are not applicable to this task.

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic1.png">
        <p><i>Fig. 1. Our examples of PSNR negative correlation with visual quality for Super-Resolution task</i></p>
    </div>
</div>

We collected some evidence for PSNR and SSIM inapplicability for SR, they are presented in this article below (section super-resolution).

Despite the drawbacks, PSNR still remains the most popular metric for estimating quality of SR. We analyzed 378 SR papers and it turned out that PSNR dominates at all times.

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic2.png">
        <p><i>Fig. 2. The result of analysis of 378 SR articles</i></p>
    </div>
</div>

Popularity of PSNR, in our opinion, is caused by a number of attractive features:

• simple to compute (the running time of the metrics is a critical factor for many real applications)

• long history of usage (it&#39;s easy to compare performance of new algorithms to elder ones, which were evaluated using only PSNR)

• has clear physical meaning

• mathematically convenient in the context of optimization

Furthermore, there are other applications besides SR in which PSNR and SSIM exhibit weak performance, but are still commonly used. One of the main aims of this article is to summarize the criticisms of PSNR and SSIM. We are also going to cover topics like why so many people use PSNR and SSIM and where the limits of applicability of these metrics are.

## Well-known examples of criticism

An illustrative example of shortcomings of the MSE (hence of the PSNR) is shown in the paper [[1](https://ieeexplore.ieee.org/document/1284395)], where an original image is altered by different types of distortion and the distorted images have obviously different visual quality. However, MSE scores of the distorted images are identical.

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic3.png">
        <p><i>Fig. 3. Comparison of &quot;Boat&quot; images with different types of distortions, all with MSE = 210</i></p>
    </div>
</div>

Another example is found in the paper [[2](https://ieeexplore.ieee.org/document/4775883)]: MSE scores are almost the same, but the visual quality of the right image is much worse. However SSIM handles this more faithfully.

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic4.png">
        <p><i>Fig. 4. Comparison of &quot;Einstein&quot; images with different types of distortions and almost the same MSE</i></p>
    </div>
</div>

According to the authors, it happens because SSIM seeks to measure structural distortion, while MSE does not. And it is what truly sets SSIM apart from PSNR. The human visual system is highly sensitive to structural distortions and easily compensates for nonstructural distortions.

However SSIM suffers from the same problem as PSNR. A similar example when SSIM scores are almost the same, but the visual quality differs a lot, can be found in the article [[3](https://www.researchgate.net/publication/226012211_Experimental_Comparison_of_PSNR_and_SSIM_Metrics_for_Video_Quality_Estimation)].

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic5.png">
        <p><i>Fig. 5. Comparison of &quot;The hills&quot; images with different types of distortions and almost the same SSIM</i></p>
    </div>
</div>

Another funny example of unpredictable SSIM behavior can be found in [[4](https://arxiv.org/pdf/1802.09653.pdf)].

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic6.png">
        <p><i>Fig. 6. Comparison of images with different types of distortions and their SSIM scores</i></p>
    </div>
</div>

Let&#39;s go through all the major types of distortions one at a time and detect advantages and drawbacks of PSNR and SSIM.

## Blurring

As often happens, structural changes such as blurring can occur. But it has been demonstrated in [[5](https://www.researchgate.net/publication/262157566_SSIM_image_quality_metric_for_denoised_images)] that MSE-based metrics may not be able to capture this reality.

When the algorithm causes blurring of images, SSIM reflects this fact more accurately, while MSE remains the same throughout the experiments. For this reason, it may be more appropriate to use the SSIM as a metric for any cases where blur may occur.

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic7.png">
        <p><i>Fig. 7. Comparison of &quot;Lena&quot; images with different amount of blur, all with MSE=255</i></p>
    </div>
</div>

SSIM&#39;s ability to estimate the amount of blur was discussed in the article [[6](https://media.gradebuddy.com/documents/2105719/478f7e3c-c9d4-4fd5-86cf-1d4b862ca0f9.pdf)]. We see a high correlation overall, but between images with SSIM=0.73 and SSIM=0.74, it is not immediately clear that they are about the same in terms of blurring. Most people would say that the image with SSIM=0.74 is more blurred.

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic8.png">
        <p><i>Fig. 8. Comparison of &quot;Cameraman&quot; images with different amount of blur</i></p>
    </div>
</div>

In [[7](https://arxiv.org/pdf/2005.01338v2.pdf)] it has been demonstrated that DISTS and LPIPS metrics are superior to the other IQA (image quality assessment) models in the task of deblurring, when they are used as an objective for optimizing DNNs (deep neural networks).

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic9.png">
        <p><i>Fig. 9. Comparison of images recovered from blurred images by optimizing different IQA models. The best results are highlighted in green</i></p>
    </div>
</div>

## Noise

In the article [[2](https://ieeexplore.ieee.org/document/4775883)] the comparison of MAE and SSIM maps for noisy images is presented. The energy distribution of the MAE is uniform, hence all image pixels are treated equally in the formulation of the MSE. However, the perceived noise level is a space-variant (noise in smooth-intensity regions appears rather severe, yet is visually negligible in other regions containing patterns and textures), which is reflected in the SSIM map.

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic10.png">
        <p><i>Fig. 10. Comparison of MAE and SSIM maps for noisy image</i></p>
    </div>
</div>

In [[3](https://www.researchgate.net/publication/226012211_Experimental_Comparison_of_PSNR_and_SSIM_Metrics_for_Video_Quality_Estimation)] experimental comparison of PSNR and SSIM dependencies on the Gaussian noise is presented. Introduction of Gaussian noise of only 10% causes quite a large decrease of both PSNR and SSIM metrics.

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic11.png">
        <p><i>Fig. 11. Comparison of PSNR and SSIM decreases due to increase in gaussian noise</i></p>
    </div>
</div>

In [[7](https://arxiv.org/pdf/2005.01338v2.pdf)] it has been demonstrated that MS-SSIM is superior to the other IQA (image quality assessment) models in the task of denoising (and has almost identical performance with MAE), when it is used as an objective for optimizing DNNs (deep neural networks).

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic12.png">
        <p><i>Fig. 12. Comparison of images recovered from noisy images by optimizing different IQA models. The best results are highlighted in green</i></p>
    </div>
</div>

## Changes in brightness, contrast, hue and saturation

All these types of distortions aren&#39;t structural. Therefore, it can be assumed that the SSIM poorly catches them, which may or may not be good in particular situations.

Confirmation of this statement is presented in [[3](https://www.researchgate.net/publication/226012211_Experimental_Comparison_of_PSNR_and_SSIM_Metrics_for_Video_Quality_Estimation)] in the form of experimental comparisons of PSNR and SSIM dependences on the changes in brightness and hue. These charts clearly describe the shortcomings that PSNR has. Little changes in brightness and hue have negligible influence on the visual quality and, as it can be seen, on SSIM scores. While for PSNR the opposite is true.

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic13.png">
        <p><i>Fig. 13. Comparison of PSNR and SSIM decreases due to changes in brightness</i></p>
    </div>
</div>

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic14.png">
        <p><i>Fig. 14. Comparison of PSNR and SSIM changes due to changes in hue</i></p>
    </div>
</div>

## Compression

Image compression algorithms traditionally optimize the MSE under the constraint of a limited file size.

In the paper[[8](https://www.researchgate.net/publication/3404638_Scope_of_validity_of_PSNR_in_imagevideo_quality_assessment)] it has been shown that PSNR can be used as a metric when the content and codec are fixed across the test conditions, e.g. in comparing codec optimization settings for a given video content, but PSNR is an unreliable metric when content isn&#39;t fixed. When each video is considered individually, PSNR and subjective quality always increase monotonically with bit rate (more examples in the article). But there is an example where PSNR would indicate that the quality for SRC3 is always higher than the quality of SRC9 at all bit rates, while subjective data shows that this is not true.

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic15.png">
        <p><i>Fig. 15. PSNR and subjective quality variation with bit rate, across contents</i></p>
    </div>
</div>

Also in that article it has been demonstrated that the correlation between PSNR and subjective quality gets worse if PSNR is used across contents, than if PSNR is used for each video separately. It means, although the monotonic relationship between PSNR and subjective quality exists separately per content, it does not exist across contents.

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic16.png">
        <p><i>Fig. 16. Correlation between PSNR and quality per content and across contents</i></p>
    </div>
</div>

This is a well-known drawback of full-reference metrics usage for different content comparisons. In these cases, correlations should be aggregated across content using Fisher transform, or the comparison should be performed with no-reference metrics.

In the article [[2](https://ieeexplore.ieee.org/document/4775883)] the comparison of MAE and SSIM maps for compressed images is presented. There are annoying pseudo-contouring effects (in the sky region) and blocking artifacts (along the boundaries of the building) on the compressed image. These distortions are successfully captured by the SSIM index, yet poorly predicted by the absolute error map. Since absolute error affects MSE evenly in terms of pixel distribution in space, MSE suffers from the same problem.

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic17.png">
        <p><i>Fig. 17. Comparison of MAE and SSIM maps for compressed image</i></p>
    </div>
</div>

Since structural distortions occur after compression, it makes more sense to use SSIM, than PSNR.

In [[7](https://arxiv.org/pdf/2005.01338v2.pdf)] it has been demonstrated that DISTS and LPIPS metrics are superior to the other IQA (image quality assessment) models in the task of compression, when they are used as an objective for optimizing DNNs (deep neural networks).

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic18.png">
        <p><i>Fig. 18. Comparison of images recovered from compressed images by optimizing different IQA models. The best results are highlighted in green</i></p>
    </div>
</div>

## Rotations and spatial shifts

As had been shown in [[2](https://ieeexplore.ieee.org/document/4775883)], PSNR and SSIM are highly sensitive to rotations, spatial shifts and scalings.

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic19.png">
        <p><i>Fig. 19. Comparison of &quot;Einstein&quot; images with rotation, spatial shift and spatial scaling</i></p>
    </div>
</div>

To deal with this problem, a wavelet domain version of SSIM or CW-SSIM was developed [[9](https://ieeexplore.ieee.org/document/1415469)]. As you can see from Fig. 19, CW-SSIM really does a better job with these types of distortions. The disadvantages of this metric should be noted. First, the CW-SSIM does not provide any correspondence information between the pixels of the two images being compared. Second, the method works only when the amount of translation, scaling and rotation is small compared to the wavelet filter size.

## Super-resolution

The inapplicability of PSNR and SSIM for the SR has also been discussed in other studies [[10](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.124.4971&amp;rep=rep1&amp;type=pdf)], [[11](https://ieeexplore.ieee.org/document/4106955)].

Our examples of the inapplicability of the PSNR and MS-SSIM for the SR are presented below. As often happens, the SR algorithms produce pixel shifts and as result in pure form PSNR and SSIM give bad scores. To avoid this problem, a shifted version of the metrics is often used, and our benchmark is no exception [[12](https://videoprocessing.ai/benchmarks/video-super-resolution.html)]. However, even with shift compensation, most metrics have a low correlation with subjective assessment.

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic20.png">
        <p><i>Fig. 20. Our examples of SSIM negative correlation with visual quality for Super-Resolution task</i></p>
    </div>
</div>

Subjective comparisons were made using Subjectify.us on cropped video clips to make it easier for respondents.

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic21.png">
        <p><i>Fig. 21. Our examples of PSNR negative correlation with visual quality for Super-Resolution task</i></p>
    </div>
</div>

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic22.png">
        <p><i>Fig. 22. Our examples of MS-SSIM negative correlation with visual quality for Super-Resolution task</i></p>
    </div>
</div>

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic23.png">
        <p><i>Fig. 23. Our result of analyzing the correlation of metrics with subjective quality for Super-Resolution tasks. The ERQA metric was developed specifically for the benchmark VSR [<a href="https://videoprocessing.ai/benchmarks/video-super-resolution.html">12</a>]</i></p>
    </div>
</div>

Crops for subjective comparison and correlation of metrics are taken from the [Super-Resolution for Video Compression Benchmark](https://videoprocessing.ai/benchmarks/super-resolution-for-video-compression.html).

Currently, there is no metric to verify the ability of SR to restore real details. We are working on this issue and developing our own metric for the task of Super-Resolution as well as assessing SR&#39;s ability to recover video after compression. As you can see from Fig. 23, [ERQA](https://videoprocessing.ai/benchmarks/video-super-resolution-methodology.html#erqa) is superior to other metrics in terms of correlation with subjective assessment.

## Conclusion

It can easily be concluded that the PSNR metric is not a good metric for quality estimation. There are too many parameters that highly influence the PSNR value and barely affect the visual quality (for example little changes in brightness, contrast, hue and saturation). On the other hand, SSIM metric has quite better performance compared to PSNR. But SSIM is almost insensitive to changes in brightness, contrast, hue and saturation.

In general, the number of newly created image quality metrics rises every year.

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic24.jpg">
        <p><i>Fig. 24. Our result of analyzing interest in video quality metrics</i></p>
    </div>
</div>

However, industry and researchers still commonly use classical methods, although there is a lot of criticism. This doesn&#39;t mean that some methods are bad and some are good, you just need to clearly define the boundaries of applicability of any metric. According to our research, we can draw the following conclusion:

PSNR is good for:

- testing different codec optimisation strategies designed to maximise the subjective quality of a specified content (i.e. the content remains the same between the optimisations)
- capturing noise
- capturing changes in brightness, contrast, hue and saturation

but can not be applicated to:

- estimating content-dependent distortions
- capturing blurring
- testing different codec quality when content  doesn&#39;t remain the same between tests
- quality assessment of Super-Resolution algorithms
- capturing rotations and spatial shifts

SSIM is good for:

- estimating content-dependent distortions
- capturing noise
- capturing blurring

but can not be applicated to:

- quality assessment of Super-Resolution algorithms
- capturing rotations and spatial shifts
- capturing changes in brightness, contrast, hue and saturation

New quality metrics are being actively developed now. Recent works in neural network metrics — LPIPS and DISTS — show high correlations with subjective assessment [[7](https://arxiv.org/pdf/2005.01338v2.pdf)].

<div class="center">
    <div>
        <img style="width:80%" src="/assets/img/metrics/psnr_and_ssim/pic25.png">
        <p><i>Fig. 25. SRCC of objective ranking scores from the IQA models against subjective ranking scores</i></p>
    </div>
</div>

Also, special metrics for specific recovery tasks (e.g. SR or deblurring) appear and show better results [[12](https://videoprocessing.ai/benchmarks/video-super-resolution.html)]. You can already find a metric for many tasks that is more suitable than PSNR and SSIM.

## References

[1] Zhou Wang, A. C. Bovik, H. R. Sheikh and E. P. Simoncelli, &quot;Image quality assessment: from error visibility to structural similarity,&quot; in IEEE Transactions on Image Processing, vol. 13, no. 4, pp. 600-612, April 2004, doi: 10.1109/TIP.2003.819861

[https://ieeexplore.ieee.org/document/1284395](https://ieeexplore.ieee.org/document/1284395)

[2] Z. Wang and A. C. Bovik, &quot;Mean squared error: Love it or leave it? A new look at Signal Fidelity Measures,&quot; in IEEE Signal Processing Magazine, vol. 26, no. 1, pp. 98-117, January 2009, doi: 10.1109/MSP.2008.930649.

[https://ieeexplore.ieee.org/document/4775883](https://ieeexplore.ieee.org/document/4775883)

[3] Zoran Kotevski and Pece Mitrevski, &quot;Experimental Comparison of PSNR and SSIM Metrics for Video Quality Estimation,&quot; in book: [ICT Innovations 2009 (pp.357-366)](https://www.researchgate.net/publication/321552739_ICT_Innovations_2009), January 2010, doi:[10.1007/978-3-642-10781-8\_37](http://dx.doi.org/10.1007/978-3-642-10781-8_37)

[https://www.researchgate.net/publication/226012211\_Experimental\_Comparison\_of\_PSNR\_and\_SSIM\_Metrics\_for\_Video\_Quality\_Estimation](https://www.researchgate.net/publication/226012211_Experimental_Comparison_of_PSNR_and_SSIM_Metrics_for_Video_Quality_Estimation)

[4] [Mahmood Sharif](https://arxiv.org/search/cs?searchtype=author&amp;query=Sharif%2C+M), [Lujo Bauer](https://arxiv.org/search/cs?searchtype=author&amp;query=Bauer%2C+L) and [Michael K. Reiter](https://arxiv.org/search/cs?searchtype=author&amp;query=Reiter%2C+M+K), &quot;On the Suitability of Lp-norms for Creating and Preventing Adversarial Examples&quot;, July 2018

[https://arxiv.org/pdf/1802.09653.pdf](https://arxiv.org/pdf/1802.09653.pdf)

[5] Peter Ndajah, Hisakazu Kikuchi, Masahiro Yukawa, Hidenori Watanabe and Shogo Muramatsu,&quot;SSIM Image Quality Metric for Denoised Images&quot; in conference: &quot;Proceedings of the 3rd WSEAS international conference on Visualization, imaging and simulation&quot;, September 3, 2010

[https://www.researchgate.net/publication/262157566\_SSIM\_image\_quality\_metric\_for\_denoised\_images](https://www.researchgate.net/publication/262157566_SSIM_image_quality_metric_for_denoised_images)

[6] Aditya Anchuri, &quot;Image Blur Metrics&quot;, Stanford University, 2011

[https://media.gradebuddy.com/documents/2105719/478f7e3c-c9d4-4fd5-86cf-1d4b862ca0f9.pdf](https://media.gradebuddy.com/documents/2105719/478f7e3c-c9d4-4fd5-86cf-1d4b862ca0f9.pdf)

[7] Keyan Ding, Kede Ma, Shiqi Wang and Eero P. Simoncelli, &quot;Comparison of Image Quality Models for Optimization of Image Processing Systems&quot;, May 5, 2020

[https://arxiv.org/pdf/2005.01338v2.pdf](https://arxiv.org/pdf/2005.01338v2.pdf)

[8] [Q. Huynh-Thu](https://www.researchgate.net/scientific-contributions/Quan-Huynh-Thu-74895678) and[Mohammed Ghanbari](https://www.researchgate.net/profile/Mohammed-Ghanbari), &quot;Scope of validity of PSNR in image/video quality assessment&quot;, February 2008, doi: [10.1049/el:20080522](http://dx.doi.org/10.1049/el:20080522)

[https://www.researchgate.net/publication/3404638\_Scope\_of\_validity\_of\_PSNR\_in\_imagevideo\_quality\_assessment](https://www.researchgate.net/publication/3404638_Scope_of_validity_of_PSNR_in_imagevideo_quality_assessment)

[9] Z. Wang and E.P. Simoncelli, &quot;Translation insensitive image similarity in complex wavelet domain,&quot; in Proc. IEEE Int. Conf. Acoustics, Speech, Signal Processing, Mar. 2005, pp. 573–576, doi: 10.1109/ICASSP.2005.1415469

[https://ieeexplore.ieee.org/document/1415469](https://ieeexplore.ieee.org/document/1415469)

[10] Amy R. Reibman and Thilo Schaper, &quot;Subjective performance evaluation of super-resolution image enhancement&quot;, January 2006

[http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.124.4971&amp;rep=rep1&amp;type=pdf](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.124.4971&amp;rep=rep1&amp;type=pdf)

[11] A. R. Reibman, R. M. Bell and S. Gray, &quot;Quality assessment for super-resolution image enhancement,&quot; in _2006 International Conference on Image Processing_, 2006, pp. 2017-2020, doi: 10.1109/ICIP.2006.312895.

[https://ieeexplore.ieee.org/document/4106955](https://ieeexplore.ieee.org/document/4106955)

[12] [https://videoprocessing.ai/benchmarks/video-super-resolution.html](https://videoprocessing.ai/benchmarks/video-super-resolution.html)
