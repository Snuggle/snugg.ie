---
layout: default
lang-ref: home-page
---
{% for section in site.home_sections %}
  {{ section.content }}
{% endfor %}
