---
label: intro
title: Introduction
---
<section id="who" class="main">
    <div class="spotlight">
        <div class="content">
            <header class="major">
            <h2>Who are you?</h2>
            </header>
            <p>Heya, my name's Evie, but often known as Snuggle! 🙋🏽‍♀️ This is where all of my internet stuff lives — I love and get excited about almost anything. 🦔</p>
            <ul class="actions">
                <li><a href="https://snugg.ie/#where" class="button">Send me a message!</a></li>
            </ul>
        </div>
        <span class="image"><img src="{{ 'https://github.com/Snuggle.png' | absolute_url }}" alt="" id="avatar" /></span>
    </div>

<div id="posts" class="cards" style="height: 500vh">
                <iframe allowfullscreen scrolling="no" sandbox="allow-top-navigation allow-scripts allow-popups allow-popups-to-escape-sandbox" width="100%" height="100%" src="https://posts.snugg.ie/"></iframe>
                <!--{% for post in site.posts limit:3 %}
                <div class="card"><a href="{{ post.url }}"><img alt="{{ post.title }} - {{ post.subtitle }}" src="{{ site.url }}/assets/images/{{ post.url }}/{{ post.image }}"><div class="card-body"><h2>{{ post.title }}</h2><p>{{ post.subtitle}}</p><h5>{{ post.date | date_to_string }}</h5></div></a></div>
                {% endfor %}-->
            </div>
            
    <footer class="major">
            <a href="https://posts.snugg.ie" class="button primary">View More Posts</a>
    </footer>
</section>
