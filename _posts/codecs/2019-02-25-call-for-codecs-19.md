---
original_url: http://compression.ru/video/codec_comparison/call_for_codecs_19.html
title: Call for HEVC codecs 2019
description: Fourteen modern video codec comparison
preview_img: /assets/img/codecs/call-for-codecs-19/preview.png
---
# MSU Annual Video Codecs Comparison 2019: Call for codecs

***All industry professionals will know about your codec’s success!***
  
## Fourteen modern video codecs comparison<br />For real researchers, developers and professional users in field of high-end video compression

### Important Dates

<table class="center" style="text-align: center">
<tbody>
<tr class="odd">
<td><strong>March, 10</strong></td>
<td><strong>Deadline for receipt of a codec with required presets</strong></td>
</tr>
</tbody>
</table>

Participants are to provide a codec's name (and the name of encoding standard if not H.265/HEVC), a company name, and list of use cases in which they want to participate
<div class="center">
<a href="/codecs/call-for-codecs-19.html#participate"><embed src="/assets/img/codecs/call-for-codecs-19/Apply-Now-Button.png" width="250" /> </a>
</div>

**March, 1**
- Deadline for applications

<s>February, 25</s> **March, 10**
- Deadline for settling technical problems with codec’s functioning

**March, 25**
- Short comparison report release

**August (the day will be announced)**
- Draft version of report that will be sent to all participants

**August (the day will be announced)**
- Deadline for reception of comments to the draft

**August (the day will be announced)**
- Comparison report release

  

## About Annual MSU Video Codecs Comparisons

MSU team has up to 21 years of experience in video codec analysis,
testing and optimization. Some facts about previous MSU Video Codecs
Comparisons:
- There were **more than 400.000 downloads** of previous H.264/MPEG-4 AVC
and H.265/HEVC video codec comparisons reports
- Many **codecs' bugs were found** and reported to developers
- **210+ encoders** were tested
- More than **35 private reports for codec developers** (description of
codec's weak and strong points) after public report versions

### Structure of this page:

-   [**New in 2019 MSU Video Codecs
    Comparison**](/codecs/call-for-codecs-19.html#new_in_2019)
-   [Task of the
    Comparison](/codecs/call-for-codecs-19.html#comparison_task)
-   [Typical Scope of
    Test](/codecs/call-for-codecs-19.html#scope_of_test)
    -   Summary report topics
    -   Comparison methodology main points
-   [Encoders analysis
    methodology](/codecs/call-for-codecs-19.html#methodology)
    -   [Comparison
        Rules](/codecs/call-for-codecs-19.html#comparison_rules)
    -   [Test Hardware
        Characteristics](/codecs/call-for-codecs-19.html#hardware)
    -   [Encoding speed
        requirements](/codecs/call-for-codecs-19.html#encoding_speed)
    -   [Codec
        Requirements](/codecs/call-for-codecs-19.html#codec_requirements)
    -   [Developers
        Deliverables](/codecs/call-for-codecs-19.html#deliverables)
-   [**Apply for 2019 MSU Video Codecs
    Comparison!**](/codecs/call-for-codecs-19.html#participate)

[**Survey: "What would you like to see in comparison
reports?"**](/codecs/call-for-codecs-19.html#Survey_about_future_reports)  
  
[Special thanks to our
sponsors](/codecs/call-for-codecs-19.html#thanks)  
[Contact
information](/codecs/call-for-codecs-19.html#contacts)

<span id="new_in_2019"></span>

## New features in MSU Video Codecs Comparison

<table class="center" style="text-align: center">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd" style="vertical-align: top;">
<td style="text-align: right;">Since 2019</td>
<td style="text-align: left;"><ul>
<li>Increasing the number of test videos up to 100+, adding UGC (user-generated) videos </li>(vlogs, noise videos, etc.)
<li>Open to compare cloud-based solutions</li>
<li>Enlarging of video collection</li>
<li>Going to use new no-reference metrics</li>
</ul></td>
</tr>
<tr class="even" style="vertical-align: top;">
<td style="text-align: right;">Since 2018</td>
<td style="text-align: left;"><ul>
<li>Increased target bitrates for comparison on 4K videos</li>
<li>Started to use VMAF objective metric</li>
<li>Upgraded <a href="/codecs/call-for-codecs-19.html#hardware">testing hardware</a> to </li>Coffee Lake
<li>Enlarged video collection (15833 videos)</li>
</ul></td>
</tr>
<tr class="odd" style="vertical-align: top;">
<td style="text-align: right;">Since 2017</td>
<td style="text-align: left;"><ul>
<li>Started to perform subjective comparisons with hundreds of observers</li>
<li>Started to compare AV1</li>
<li>Enlarged video collection (9299 videos)</li>
</ul></td>
</tr>
<tr class="even" style="vertical-align: top;">
<td style="text-align: right;">Since 2016</td>
<td style="text-align: left;"><ul>
<li>New methodology of videos selection</li>
<li>New video collection (2909 videos)</li>
</ul></td>
</tr>
</tbody>
</table>

<span id="comparison_task"></span>

## Task of the Comparison

**We perform comparative unbiased analysis** for

-   software implementations
-   hardware (GPU-based) implementations
-   cloud-based implementations

of H.265/HEVC video coding standard and compare it to the best
implementations of other video coding standards (H.264/MPEG-4 AVC, AV1,
VP9, VP8, MPEG-4 and other) using objective metrics (SSIM, VMAF, PSNR
and other).

With MSU Codecs Comparison **developers can verify the perfomance of
their codec**. We share test sequences, encoding parameters (presets)
and encoder versions so all developers can reproduce the results of the
comparison. Participation with publishing of all results is FREE.

<span id="scope_of_test"></span>

## Scope of Test

**Summary report topics:**

-   Objective measurements + **Subjective analysis**
-   Encoding time
-   Bitrate keeping for evaluating rate-control mechanism
-   Speed/Quality trade-off analysis
-   Averaged objective results analysis
-   Leaders in different use-cases

**Comparison methodology main points:**

-   25-30 HD video sequences (main report) + 10-12 4K video sequences
    (report appendix).  
    Number of videos may be increased (up to 100+) and depends on the
    number of participated codecs. This year UGC (user-generated
    content) videos may be also added to the test set.
-   SSIM, PSNR, VMAF objective metrics and subjective evaluation
-   3 color-planes (Y,U,V) and integral metric values
-   3 various use-cases (Fast, Universal and Ripping) differ by
    speed/quality trade-off + special use-case for comparison on 4K
    videos. Also plan to use special Ultra-Ripping use-case (for
    comparison with AV1).
-   8-10 different target bitrates (1-12 Mbps for HD and 2-20 Mbps for
    4K)
-   Prosumer-level modern hardware
-   Fully automatic testing system
-   7000+ result figures, PDF and HTML reports

<span id="methodology"></span>

## Encoders analysis rules

## Comparison Rules

<span id="comparison_rules"></span> This year encoder developers send us
a bundle of same presets (with different speed/quality characteristics)
for all use-cases.  
**Please pay attention that we will use multi-core CPU for encoding, so
you can use multi-threading**

-   Decoding is performed with reference decoder (for H.264/AVC and
    H.265/HEVC only). For other standards participants should provide
    decoder
-   We don't limit GOP size and intra-period
-   We don’t limit number of passes in the encoding. Total encoding time
    should fulfill
-   VBR mode is used during all tests (other modes are discussed
    individually)
-   Before results' publishing each developer will receive the results
    of its codec and competitive free open-source codecs. Developers of
    each codec can validate the results and write a comment (one
    paragraph) about the comparison results which will be included in
    the report
-   **Participation is free with publication of the results**
    -   You can join comparison for free if you agree that your codec's
        results will be published
    -   **Private participation. Compare your codec with world leaders
        staying incognito!** If your company wants to know results of
        your codec's testing with possibility to exclude them from
        publication and information disclosure, you should pay for
        measurements and report preparing before comparison begins
-   Enterprise version of comparison report is available for direct
    participants for free
-   All participants will receive following deliverables to verify the
    results for free:
    -   video sequences used in comparison
    -   binaries of all free encoders used in comparison to verify the
        results
    -   all raw video quality metric and encoding speed data for its
        encoder and for all of free encoders used in comparison
-   We are willing to completely or partially delete information about
    some codec in the public version of comparison report only in
    exceptional cases (e.g. critical errors in the codec)

## <span id="hardware">Test Hardware Characteristics</span>

Next hardware for codecs testing will be used:

-   **CPU:** Intel Socket 1151 Core i7 8700K (Coffee Lake) (3.7Ghz,
    6C12T, TDP 95W)
-   **Mainboard:** ASRock Z370M Pro4
-   **RAM:** Crucial CT16G4DFD824A 2x16GB (totally 32 GB) DIMM DDR4
    2400MHz CL15
-   **OS:** Windows 10 x64

## <span id="encoding_speed">Encoding speed requirements</span>

For encoder alignment selected presets should provide following encoding
speed.  
All speed requirements are checked at video sequence encoded at 6Mbps:

-   Fast/High Density — 1080@60fps
-   Universal/Broadcast VQ — 1080p@25fps
-   Ripping/Pristine VQ — 1080p@1fps and SSIM-RD curve better than
    x264-veryslow
-   For subjective comparison: 1080p@1fps
-   For comparison on 4K videos: 20fps
-   Ultra-Ripping 1080p@0.005fps

## <span id="codec_requirements">Codec Requirements</span>
- Presets for different speed requirements should be provided by the
developers
- Codec should allow to set arbitrary bitrate of resulting stream in VBR
mode
- Preferable codec interface - console codec version (with batch
processing support — bitrate and file names must be possible to assign
from the command line)
- Encoder should be compatible with reference decoder

## <span id="deliverables">Developers Deliverables</span>

Following deliverables should be provided by each developer:
- Codec files (CLI executable file is preferable)
- Codec's presets

<span id="participate"></span>

# Take part in MSU codecs comparison!

### Deepest codecs review: 5 reports, including subjective with 1000+ viewers and 7000+ charts

If you want to participate with several codecs, please list them and
point their standards via checkboxes.

<span id="Survey_about_future_reports"></span>
<script type="text/javascript">
    var GForm = function(a, b, c) {
    $("form", a).on("submit", function(d) {
        if (d.isDefaultPrevented())
            return !1;
        var e = {};
        var standards = [];
        var use_cases = [];
        var participation_type = '';
        $(":input", a).each(function() {
            var a = b[this.name];
            if (this.name.substr(0, 8) == 'standard') {
                if (this.name.substr(9, 5) == 'other') {
                    e['entry.827013180.other_option_response'] = this.value;
                    standards.push('__other_option__');
                }
                if (this.checked) {
                    standards.push(this.id);
                }
            }
            else if (this.name.substr(0, 8) == 'use_case') {
                if (this.name.substr(9, 5) == 'other') {
                    e['entry.609840944.other_option_response'] = this.value;
                    use_cases.push('__other_option__');
                }
                if (this.checked) {
                    use_cases.push(this.id);
                }
            }
            else if (this.name.substr(0, 18) == 'participation_type') {
                console.log(this.id);
                console.log(this.value);
                if (this.checked) {
                    participation_type = this.id;
                }
            }
            else {
                e[a] = this.value;
            }
        });
        e['entry.827013180'] = standards;
        e['entry.609840944'] = use_cases;
        e['entry.825091883'] = participation_type;
        console.log(e);
        var f = function() {
            $(".success", a).removeClass("hidden"),
            $("form", a).addClass("hidden")
            //ga("send", "event", "form-submit", a.attr("id"), a.attr("id"))
        };
        $('#form')[0].reset();
        $("#request_alert").show();
        var data = $.param(e, true);
        console.log(data);
        return $.post(c, data, null, 'jsonp').done(f).fail(f), !1
    })
    };
    $(function(){
    var a = "https://docs.google.com/forms/d/e/1FAIpQLSeP62CvvBXEEvoJAndFskcAEbIVl5ImbGiBkuGMuZKovIFRYQ/formResponse";
    var b = {
        'email': 'entry.472649987',
        'codec_name': 'entry.2011710210',
        'standard': 'entry.827013180',
        'company': 'entry.1708093531',
        'use_cases': 'entry.609840944',
        'participation_type': 'entry.825091883'
    };
    GForm($("#call_for_codecs_form"), b, a);
    return false;
    });
</script>

{% include codecs/call-for-codecs-19/form.html %}

## What would you like to see in MSU Codecs Comparison reports?

{% include codecs/call-for-codecs-19/feedback-form.html %}

<span id="thanks"></span>

## Thanks

Special thanks to the following contributors of our previous comparisons

  

<table class="center" style="text-align: center">
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="text-align: center;"><embed src="/assets/img/codecs/call-for-codecs-19/intel_logo.png" alt="Intel" width="100" /></td>
<td style="text-align: center;"><a href="https://www.huawei.com/"><embed src="/assets/img/codecs/call-for-codecs-19/huawei_logo.jpg" alt="Huawei" width="140" /></a></td>
<td style="text-align: center;"><embed src="/assets/img/codecs/call-for-codecs-19/tencent_logo.png" alt="Tencent" width="130" /></td>
<td style="text-align: center;"><embed src="/assets/img/codecs/call-for-codecs-19/google_logo.png" alt="Google" width="100" /></td>
</tr>
<tr class="even">
<td style="text-align: center;"><embed src="/assets/img/codecs/call-for-codecs-19/telecast_logo.jpg" alt="Telecast" width="100" /></td>
<td style="text-align: center;"><embed src="/assets/img/codecs/call-for-codecs-19/mainconcept_logo.jpg" alt="MainConcept" width="100" /></td>
<td style="text-align: center;"><embed src="/assets/img/codecs/call-for-codecs-19/vitec_logo.jpg" alt="Vitec" width="100" /></td>
<td style="text-align: center;"><embed src="/assets/img/codecs/call-for-codecs-19/nvidia_logo.png" alt="NVidia" width="100" /></td>
</tr>
<tr class="odd">
<td style="text-align: center;"><a href="http://www.adobe.com"><embed src="/assets/img/codecs/call-for-codecs-19/adobe_logo.png" alt="Adobe" width="100" /></a></td>
<td style="text-align: center;"><a href="http://www.amd.com"><embed src="/assets/img/codecs/call-for-codecs-19/amd_logo.png" alt="AMD" width="100" /></a></td>
<td style="text-align: center;"><embed src="/assets/img/codecs/call-for-codecs-19/netflix_logo.jpg" alt="Netflix" width="100" /></td>
<td style="text-align: center;"><embed src="/assets/img/codecs/call-for-codecs-19/dolby_logo.png" alt="Dolby" width="100" /></td>
</tr>
<tr class="even">
<td style="text-align: center;"><a href="http://www.qualcomm.com"><embed src="/assets/img/codecs/call-for-codecs-19/qualcomm_logo.png" alt="Qualcomm" width="100" /></a></td>
<td style="text-align: center;"><embed src="/assets/img/codecs/call-for-codecs-19/ati_logo.png" alt="ATI" width="100" /></td>
<td style="text-align: center;"><embed src="/assets/img/codecs/call-for-codecs-19/elgato_logo.png" alt="Elgato" width="100" /></td>
<td style="text-align: center;"><embed src="/assets/img/codecs/call-for-codecs-19/isphone_logo.png" alt="ISPhone" width="100" /></td>
</tr>
<tr class="odd">
<td style="text-align: center;"><embed src="/assets/img/codecs/call-for-codecs-19/voceweb_logo.png" alt="Voceweb" width="100" /></td>
<td style="text-align: center;"><embed src="/assets/img/codecs/call-for-codecs-19/tata_logo.png" alt="Tata Elxsi " width="100" /></td>
<td style="text-align: center;"><embed src="/assets/img/codecs/call-for-codecs-19/dicas_logo.png" alt="dicas" width="100" /></td>
<td style="text-align: center;"><embed src="/assets/img/codecs/call-for-codecs-19/kddi_logo.png" alt="KDDI R&amp;D labs" width="100" /></td>
</tr>
<tr class="even">
<td style="text-align: center;"><embed src="/assets/img/codecs/call-for-codecs-19/octasic_logo.png" alt="Octasic" width="100" /></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
</tbody>
</table>

<span id="contacts"></span>

## Contacts

E-mail: <videocodec-testing@graphics.cs.msu.ru>
