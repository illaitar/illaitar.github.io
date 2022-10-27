---
title: "MSU VQMT Version history"
description: "MSU VQMT Version history & Changelog"
preview_img: /assets/img/vqmt/info/preview.jpg
permalink: /vqmt/changelog/
tag: []
COMMENT: " Script for getting options:                                                                      "
COMMENT: " var printItem = function(e) {                                                                    "
COMMENT: "     var type = e.attr('class');                                                                  "
COMMENT: "     var text = e.text().trim();                                                                  "
COMMENT: "                                                                                                  "
COMMENT: "     return '    - type: \"' + type + '\"\n' +                                                      "
COMMENT: "            '      text: ' + JSON.stringify(text) + '\n';                                         "
COMMENT: " }                                                                                                "
COMMENT: "                                                                                                  "
COMMENT: " var printElem = function(e) {                                                                    "
COMMENT: "     var text = e.contents().get(0).nodeValue.trim();                                             "
COMMENT: "     var info = e.find('.ver-info').text().trim();                                                "
COMMENT: "     var date = e.find('.ver-date').text().trim();                                                "
COMMENT: "                                                                                                  "
COMMENT: "     var cont = ''                                                                                "
COMMENT: "     e.children('ul').first().children('li').each(function(i, elem){cont += printItem($(elem))}); "
COMMENT: "     return     '  - ver: ' + text + '\n' +                                                       "
COMMENT: "                '    date: ' + date + '\n' +                                                      "
COMMENT: "                '    info: ' + JSON.stringify(info) + '\n' +                                      "
COMMENT: "                '    active: ' + e.hasClass('active') + '\n' +                                    "
COMMENT: "                '    list:\n' + cont;                                                             "
COMMENT: " }                                                                                                "
COMMENT: "                                                                                                  "
COMMENT: " var res = '';                                                                                    "
COMMENT: " $($0).children('li').each(function(i, elem) {res += printElem($(elem));})                        "
COMMENT: "                                                                                                  "
COMMENT: " console.log(res);                                                                                "
---

{% include vqmt/menu.md %}

## Release notes on VQMT 14.1

### MSU VQMT Python Interface
Since MSU VQMT 14.1 you can use efficient MSU VQMT Python Interface. It demands installed MSU VQMT PRO, Premium, DEMO or Trial version. More information on [project page on PyPI](https://pypi.org/project/msu-vqmt/){:target="_blank"}.

### Color policy changes
Prior to VQMT 14.0, the color policy was to keep colorspace characteristics of an input file. Now the color policy is: find the best color space and convert the input images to that color space.

Now each measurement has a specific color space and all inputs will be converted to that color space. You can also implicitly specify this color space.

Another change is that VQMT will prefer Rec range for YUV and PC range for RGB, unless otherwise implicitly specified.

*Be careful, these changes may affect the values of the metrics.*

### Change of branding
We have changed MSU G&M Lab. logo to new [Video Compression Team](https://compression.ru){:target="_blank"} logo. MSU G&M Lab. remains involved in the development of MSU VQMT and uses it for [benchmarks](https://videoprocessing.ai/benchmarks/){:target="_blank"} and the [annuary Codec compression](https://compression.ru/video/codec_comparison/index_en.html){:target="_blank"}.

![VQMT logo transformation](/assets/img/vqmt/logo_change.svg){:height="120px"}

### FREE version policy changes
The most discussing FREE version limitation was limitation on input files resolution. We cancelled this limitation and now the FREE version can be used with files of any resolutions.

We have the following changes for FREE version policy:
* Limitation on inputs resolution - only files below HD: **cancelled**
* Limitation on color depth - HDR limitations: **changed** - no support for HDR files in VQMT 14 FREE, no HDR metrics in VQMT 14.1 FREE
* Limitation on interface - only BUI version: **kept**
* Limitation on usage in companies - only personal usage: **kept**
* Limitation on implementations - no GPU metrics: **introduced**
* Limitation on Python usage - python imterface only for PRO version: **introduced**

## Changelog

<ul class="open-list changelog-global">
{% for var in site.data.vqmt.version_history.changelog %}
<li class="open-cont {% if var.active %}active{% endif %} changelog">{{var.ver}}<span class="ver-date">{{var.date}}</span>
	<span class="ver-info">{{var.info}}</span>
	<ul>
	{% for item in var.list %}
		{% assign type=item | slice: 0 %}
		{% assign sz=item | size | sub: 2 %}
		{% assign text=item | slice: 2, sz %}
		{% if type == "=" %}
			<li class="section">{{text}}</li>
		{% else %}
			{% case type %}
			  {% when "+" %}
			     {% assign item_class = "n" %}
			     {% assign item_title = "New feature" %}
			  {% when "*" %}
			     {% assign item_class = "f" %}
			     {% assign item_title = "Fixed" %}
			  {% when "!" %}
			     {% assign item_class = "b" %}
			     {% assign item_title = "Known issue" %}
			{% endcase %}
			<li class="{{item_class}}">{{text}}</li>
		{% endif %}
	{% endfor %}
	</ul></li>
{% endfor %}
</ul>