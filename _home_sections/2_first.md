---
label: first
title: First Section
---
<section id="what" class="main special">
    <header class="major">
        <h2>What do you do?</h2>
        <p>Woah, that is a question! Please let me think...</p>
    </header>
    
    <p class="content no-split">I am a bubbly, enthusiastic young lady who is filled with high-energy curiosity ✨ I'm incredibly fleeting, fascinated by many different things each day.<br><br>I work in tech as a software engineer 👩🏽‍💻, fueled by drinking bubble tea 🍵 and have many interests outside of my work meaning I might be doing something different each day. I love so much stuff, I feel as if I could ramble forever about one of my nerdy tid-bits.<br><br>The best way to get to know me is to talk to me! <a href="#where">Feel free to give me a poke whenever I'm around.</a> 👋🏼</p>

    <hr>
    <header>
        <h2>My Recent Posts</h2>
    </header>
  <div class="cards">
    {% for post in site.posts limit:3 %}
      <div class="card"><a href="{{ post.url }}"><img alt="{{ post.title }} - {{ post.subtitle }}" src="{{ site.url }}/assets/images/{{ post.url }}/{{ post.image }}"><div class="card-body"><h2>{{ post.title }}</h2><p>{{ post.subtitle}}</p><h5>{{ post.date | date_to_string }}</h5></div></a></div>
    {% endfor %}
  </div>

  <footer class="major">
            <a href="posts" class="button primary">View All Posts</a>
    </footer>
</section>