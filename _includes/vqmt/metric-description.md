{% capture SUBST_STDSET %}{% include vqmt/hover-help.html text="standard set" contentClass="stdhelp-avg-std" %}{% endcapture %}
{% capture SUBST_FULL_REFERENCE %}{% include vqmt/hover-help.html text="full-reference" contentClass="stdhelp-full-reference" %}{% endcapture %}
{% capture SUBST_NO_REFERENCE %}{% include vqmt/hover-help.html text="no-reference" contentClass="stdhelp-no-reference" %}{% endcapture %}
{% capture SUBST_IMAGE %}{% include vqmt/hover-help.html text="image" contentClass="stdhelp-image-metric" %}{% endcapture %}
{% capture SUBST_TEMPORAL %}{% include vqmt/hover-help.html text="temporal" contentClass="stdhelp-temporal-metric" %}{% endcapture %}
{% capture SUBST_VQMT_MT %}{% include vqmt/hover-help.html text="CPU multithreaded" contentClass="stdhelp-cpu-multithreaded" %}{% endcapture %}
{% capture SUBST_VQMT_OPENCL %}{% include vqmt/hover-help.html text="OpenCL" contentClass="stdhelp-opencl" %}{% endcapture %}
{% capture SUBST_VQMT_CUDA %}{% include vqmt/hover-help.html text="CUDA" contentClass="stdhelp-cuda" %}{% endcapture %}
{% assign metric=site.data.vqmt.metrics_reference[include.group].metrics[include.id] %}
{% assign resolutions="hd:HD 720p,fullhd:FullHD 1080p,4k:4K 2160p" | split: ',' %}

<a name="{{ include.id }}" id="{{ include.id }}"></a>
{: .no_toc}
## {{ metric.title }}

#### General info
{: .no_toc}

<dl class="properties">
{% for var in metric.info %}
<dt>{{var[0]}}</dt>
<dd markdown="1">{{var[1] | replace: "%STDSET%", SUBST_STDSET | replace: "%FULL_REFERENCE%", SUBST_FULL_REFERENCE | replace: "%NO_REFERENCE%", SUBST_NO_REFERENCE | replace: "%IMAGE%", SUBST_IMAGE | replace: "%TEMPORAL%", SUBST_TEMPORAL | replace: "%VQMT_MT%", SUBST_VQMT_MT | replace: "%VQMT_OPENCL%", SUBST_VQMT_OPENCL  | replace: "%VQMT_CUDA%", SUBST_VQMT_CUDA }}</dd>
{% endfor %}
</dl>

#### Algorithm description
{: .no_toc}

{{ metric.description }}

#### Benchmark
{: .no_toc}

<div class="benchmark-choose">
  Choose benchmark:
  <select class="benchmark-choose" metric="{{ include.id }}">
{% for benchmark in site.data.vqmt.metric_benchmarks %}  	
    <option value="{{ benchmark[0] }}"{% if benchmark[0]==site.data.vqmt.actual_info.default_benchmark %} selected{% endif %}>VQMT {{ benchmark[1].info.vqmt.version.maj }}.{{ benchmark[1].info.vqmt.version.min }} on {{ benchmark[1].info.system.cores }} cores, GPU: {{ benchmark[1].info.vqmt.devs.OpenCL }}</option>
{% endfor %}
  </select>
</div>

{% for benchmark in site.data.vqmt.metric_benchmarks %}
<div benchmark_name="{{ benchmark[0] }}" class="benchmark-table{% if benchmark[0]==site.data.vqmt.actual_info.default_benchmark %} selected{% endif %}" formetric="{{ include.id }}">
<table class="table-info table-striped">
  <thead>
    <tr>
      <th>Implementation <span class="red-foot-note"></span></th>
      <th>System &amp; settings</th>
      <th>Colors</th>
      <th>Resolution</th>
      <th>FPS</th>
      <th>Sec. per frame</th>
    </tr>
  </thead>
  <tbody>
{% for bench_info in metric.benchmarks %}
{% for resolution in resolutions %}
	{% assign res_kv=resolution | split: ':' %}
	{% assign res=res_kv[0] %}
	{% assign idx0=bench_info.indexes[0] %}
	{% assign idx1=bench_info.indexes[1] %}
	{% assign idx2=bench_info.indexes[2] %}
	{% assign idx3=bench_info.indexes[3] %}
	{%- if benchmark[1].result[idx0][idx1][idx2][idx3][res] contains "fps" -%}
	    <tr>
	      <td>VQMT {{ benchmark[1].info.vqmt.version.maj }}.{{ benchmark[1].info.vqmt.version.min }} {{ bench_info.impl }}</td>
	      <td>{{ bench_info.system }}</td>
	      <td>{{ idx2 }}</td>
	      <td>{{ res_kv[1] }}</td>
	      <td>{{ benchmark[1].result[idx0][idx1][idx2][idx3][res]["fps"] | round: 2 }}</td>
	      <td>{{ benchmark[1].result[idx0][idx1][idx2][idx3][res]["spf"] | round: 3 }}</td>
	    </tr>
	{%- endif -%}
{% endfor %}
{% endfor %}
  </tbody>
</table>
{% capture table_text %}Measurements were done on VQMT {{ benchmark[1].info.vqmt.version.full }} PRO for {{ benchmark[1].info.system.name }}.<br />CPU: {{ benchmark[1].info.system.cpu_names }}, {{ benchmark[1].info.system.cores }} cores<br />GPU: {{ benchmark[1].info.vqmt.devs.OpenCL }}<br />Values can vary depending on system configuration, input format and other factors{% endcapture %}
{%include vqmt/red-footnote.html tableText=table_text%}
</div>
{% endfor %}

{% for example in metric.examples %}
#### Example {{ example.subtitle }}
{: .no_toc}

{% assign example_info=site.data.vqmt.visualizations[example.key] %}
{%include vqmt/image-examples.html
	metric = example.title
	imgroot = "//storage.videoprocessing.ai/vqmt/metric_images_rev2/"
	examples=example_info %}
{% endfor %}

#### Legacy notes
{: .no_toc}

{{ metric.legacy_notes }}

[](#top){: .toplink }