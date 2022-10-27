---
title: "MSU Quality Measurement Tool"
description: "VQMT documentation stub"
permalink: /vqmt/doc-footer/
layout: vqmt-minimal
documentation: true
hidden: true
tag: []
exclude_from_see_also: true
---
<html><head><script>
  function subst() {
      var vars = {};
      var query_strings_from_url = document.location.search.substring(1).split('&');
      for (var query_string in query_strings_from_url) {
          if (query_strings_from_url.hasOwnProperty(query_string)) {
              var temp_var = query_strings_from_url[query_string].split('=', 2);
              vars[temp_var[0]] = decodeURI(temp_var[1]);
          }
      }
      var css_selector_classes = ['page', 'frompage', 'topage', 'webpage', 'section', 'subsection', 'date', 'isodate', 'time', 'title', 'doctitle', 'sitepage', 'sitepages'];
      for (var css_class in css_selector_classes) {
          if (css_selector_classes.hasOwnProperty(css_class)) {
              var element = document.getElementsByClassName(css_selector_classes[css_class]);
              for (var j = 0; j < element.length; ++j) {
                  element[j].textContent = vars[css_selector_classes[css_class]];
              }
          }
      }
  }
  </script></head><body style="border:0; margin: 0;padding-top:10mm;" onload="subst()">
  <table style="border-bottom: 1px solid black; width: 100%; font-size:8pt; text-transform: uppercase;">
    <tr>
      <td class="section"></td>
      <td style="text-align:right">
        Page <span class="page"></span> of <span class="topage"></span>
      </td>
    </tr>
  </table>
  </body></html>