---
title: "MSU Quality Measurement Tool: Basic information"
description: "Basic information"
preview_img: /assets/img/vqmt/info/preview.jpg
tag: []
permalink: /vqmt/basic/
---
{% include vqmt/menu.md %}

{% for item in site.data.vqmt.doc_intro %}
## {{item['name']}}

{{item['content']}}
{% endfor %}