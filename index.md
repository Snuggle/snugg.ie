---
layout: default
lang-ref: home-page
title: snugg.ie
---
{% for section in site.home_sections %}
  {{ section.content }}
{% endfor %}
