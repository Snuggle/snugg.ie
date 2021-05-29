---
layout: page
lang-ref: generic-page
title: View my posts
subtitle:
date: 2021-02-16 23:59:53
---
<!-- Content -->
{% capture page_markdown %}
# All My Posts, Newest First
{% endcapture %}
{% include header-major-special.html %}
<ul>
  <div class="cards">
    {% for post in site.posts %}
    {% assign loopindex = forloop.index %}
    {% if loopindex == 1 %}
      <div class="card card-big"><a href="{{ post.url }}"><img alt="{{ post.title }} - {{ post.subtitle }}" src="{{ site.url }}/assets/images/{{ post.url }}/{{ post.image }}"><div class="card-body"><h2>{{ post.title }}</h2><p>{{ post.subtitle}}</p><h5>- {{ post.date | date_to_string }}</h5></div></a></div>
    {% else %}
      <div class="card card-small"><a href="{{ post.url }}"><img alt="{{ post.title }} - {{ post.subtitle }}" src="{{ site.url }}/assets/images/{{ post.url }}/{{ post.image }}"><div class="card-body"><h2>{{ post.title }}</h2><p>{{ post.subtitle}}</p><h5>- {{ post.date | date_to_string }}</h5></div></a></div>
    {% endif %}
    {% endfor %}
  </div>
  <hr>
  <h2>Text List of Posts</h2>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.date | date_to_string }} · <strong>{{ post.title }}</strong></a>
    </li>
  {% endfor %}
</ul>
