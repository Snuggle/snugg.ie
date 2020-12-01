---
layout: page
lang-ref: generic-page
title: View my posts
subtitle:
date: 2020-11-29 21:53:00
---
<!-- Content -->
<div class="image main">
	<img src="/assets/images/hug-server/final_cropped.webp" alt="">
</div>
{% capture page_markdown %}
## Hug Server
{% endcapture %}
{% include header-major-special.html %}



<ul>
  <h2>My Pages</h2>
  {% for page in site.pages %}
    <li>
      <a href="{{ page.url }}">{{ page.title }}</a>
    </li>
  {% endfor %}
<hr>
  <h2>My Posts</h2>
    {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
