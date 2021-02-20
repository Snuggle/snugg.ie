---
layout: page
lang-ref: generic-page
title: View my posts
subtitle:
date: 2021-02-16 23:59:53
---
<!-- Content -->
{% capture page_markdown %}
## All My Posts
{% endcapture %}
{% include header-major-special.html %}



<ul>
    {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
  <hr>
  {% for post in site.posts %}
    {% assign loopindex = forloop.index | modulo: 3 %}
    {% if loopindex == 1 %}
      <div class="cards">
        <div class="card"><a href="{{ post.url }}"><img src="{{ site.url }}/assets/images/posts/{{ post.image }}"><div class="card-body"><h2>{{ loopindex }}</h2><p>{{ post.subtitle}}</p><h5>- {{ post.date | date_to_string }}</h5></div></a></div>
    {% else %}
        <div class="card"><a href="{{ post.url }}"><img src="{{ site.url }}/assets/images/posts/{{ post.image }}"><div class="card-body"><h2>{{ loopindex }}</h2><p>{{ post.subtitle}}</p><h5>- {{ post.date | date_to_string }}</h5></div></a></div>
        
        {% if loopindex == 0 %}
          </div>
        {% endif %}
    {% endif %}

{% endfor %}

 