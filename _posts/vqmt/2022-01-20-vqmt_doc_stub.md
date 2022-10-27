---
title: "MSU Quality Measurement Tool"
description: "VQMT documentation stub"
permalink: /vqmt/doc-stub/
layout: vqmt-minimal
hidden: true
documentation: true
tag: []
exclude_from_see_also: true
---
<html>
<head>
<meta charset="utf-8"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>

<style>
html{
}
body{
	font-family: 'Roboto', sans-serif;
	font-size: 10pt;
	font-weight: 150;
}
h2{background: black; color: white; display: block; font-size: 12pt; padding: 1.5mm 5mm;}
h1,h2,h3,h4{page-break-before: always;}
h1+h2,h2+h3,h3+h4{
	page-break-before: avoid !important;
}
p{
	text-align: justify;
}
p.h5{
	display: block;
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;}
a{color: black!important;}
table{
	width: 100%;
	font-size: inherit;
}
.border-table, .border-table>thead>tr>th, .border-table>tbody>tr>td{
  border: 1px solid black;
  border-collapse: collapse;
}
.border-table>thead>tr>th, .border-table>tbody>tr>td {
	padding: 5pt;
}
ul p{
	margin: 0;
}
.metric-examples img{
	display: block;
	margin: -1cm auto;
	page-break-before: always;
	page-break-inside: avoid;
	width: 87%;
}
</style>
</head>
<body markdown="1">

## Overview

{% for item in site.data.vqmt.doc_intro %}
### {{item['name']}}

{{item['content']}}
{% endfor %}

## Changelog

{% for var in site.data.vqmt.version_history.changelog %}
<p><b>{{var.ver}}</b> ({{var.date}}). {{var.info}}</p>
<table>
	{% for item in var.list %}
		<tr>
		{% assign type=item | slice: 0 %}
		{% assign sz=item | size | sub: 2 %}
		{% assign text=item | slice: 2, sz %}
		{% if type == "=" %}
			<td colspan="2" style="border: 0"><b>{{text}}</b></td>
		{% else %}
			<td style="width: 16pt; border: 0; text-align:center; vertical-align: baseline;">
			{% case type %}
			  {% when "+" %}+
			  {% when "*" %}*
			  {% when "!" %}!
			{% endcase %}
			</td>
			<td style="border: 0; vertical-align: baseline;">{{text}}</td>
		{% endif %}
		</tr>
	{% endfor %}
	</table>
{% endfor %}

## Command-line Help

### Alphabet index

<table class="border-table">
<thead>
<tr>
<th>Command</th><th>Category</th><th>Short description</th>
</tr>
</thead>
<tbody>
{% for cmd in site.data.vqmt.vqmt_auto_doc["cli-help"].commands %}
<tr>
{% assign section=cmd[1].section %}
<td><a href="#cmd{{ cmd[0] }}" markdown="1">{{ cmd[1].key}}</a></td>
<td>{{ site.data.vqmt.vqmt_auto_doc["cli-help"].categories[section].name }}</td>
<td markdown="1"> {{ cmd[1].description}} 
</td></tr>
{% endfor %}
</tbody></table>

{% for sect in site.data.vqmt.vqmt_auto_doc["cli-help"].categories %}
### {{ sect[1].name }}

{{ sect[1].description }}

<table class="border-table">
<thead>
<tr>
<th>Usage</th><th>Description</th>
</tr>
</thead>
<tbody>
{% for command_name in sect[1].commands %}
{% assign command=site.data.vqmt.vqmt_auto_doc["cli-help"].commands[command_name] %}
<tr>
<td style="width:30%"><a name="cmd{{ command_name }}"></a>
<p markdown="1">{{ command.usage }}
</p></td>
<td markdown="1">{{ command.help }}
</td>
</tr>
{% endfor %}
</tbody>
</table>

{% endfor %}

## JSON configuration description

{{ site.data.vqmt.vqmt_auto_doc.config_md }}

## Metric's reference

{% for group in site.data.vqmt.metrics_reference %}
### {{ group[1].title }}

{% for metric in group[1].metrics %}
	{% assign g = group[0] %}
	{% assign m = metric[0] %}
	{% include vqmt/metric-description-doc.md id=m group=g %}
{% endfor %}
{% endfor %}

<!-- Final secton(s) -->

{% for item in site.data.vqmt.doc_final %}
## {{item['name']}}

{{item['content']}}
{% endfor %}


<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    extensions: [
      "MathMenu.js",
      "MathZoom.js",
      "AssistiveMML.js",
      "a11y/accessibility-menu.js"
    ],
    "CommonHTML": {scale: 200},
    jax: ["input/TeX", "output/CommonHTML"],
    TeX: {
      extensions: [
        "AMSmath.js",
        "AMSsymbols.js",
        "noErrors.js",
        "noUndefined.js",
      ]
    }
  });
  MathJax.Hub.Queue(["Rerender", MathJax.Hub], function () {window.status="finished"});
</script>
<script type="text/javascript" async
src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"></script>
</body>
</html>