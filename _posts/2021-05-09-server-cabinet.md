---
layout: page-no-navbar
lang-ref: generic-page
title: My Server Cabinet/Coffee Table
subtitle: "Let's build a DIY Server Cabinet Together!"
image: server-cabinet.jpg
date: 2021-05-09 17:49:00
images: /assets/images/posts/server-cabinet
---
<!-- Content -->
<div class="image main">
	<img src="{{ site.url }}/assets/images/{{ page.url }}/{{ page.image }}" alt="A picture showing the inside of the finished/final cabinet.">
</div>

<!--
## Hug Server Cabinet

-->




# My Server Cabinet/Coffee Table
## The Idea

Now after [building a server](/posts/hug-server) for self-hosting things, there's no-where to put it! Most server cabinets that people can buy online are either _way too expensive_ or way too big 'n' heavy to ship properly. So, how could I make a cabinet of my own yet still make it functional?

I wanted to avoid the ever-popular [LackRack](https://wiki.eth0.nl/index.php/LackRack) where people buy [an Ikea table](https://www.ikea.com/us/en/p/lack-side-table-black-20011408/) to use as their server rack, which even comes with a [handy instruction manual](http://eth-0.nl/lackrack.pdf), as it doesn't actually have any proper mounting holes. I didn't like the thought of screwing all this expensive equipment directly into into the particle wood and also not being able to use the sliding rails that come with many server chassis. I was also planning to add a heavy [UPS](https://en.wikipedia.org/wiki/Uninterruptible_power_supply) at some point, which also ruled out this option.



I was fortunate to have a lot of spare wood lying around from an old shed that had to be demolished, so I was thinking...

How could I make a server cabinet of my own? And have it be functional? Perhaps even more functional than most server cabinets, which just sit in the corner of a basement and collect dust?

A wild idea appeared!

> <div>💡 Make the server cabinet also be a coffee table!</div>


----



## Let's get going...
### Cut some wood!



We need to follow a plan, some kind of plan, but a plan! One thing that would be incredibly useful is a hinged door at the front, as a lot of server cabinets have glass front doors. Another useful addition would be a removable panel at the back for moving cables around and managing things easier.

Next we need to look into how we could rack-mount things. Thankfully, I could find a set of [12U](https://en.wikipedia.org/wiki/Rack_unit) server mounting strips online, which would mean that my cabinet's internal height would be roughly 53.34cm. The next part was also to start constructing the basic frame out of sticks o' wood, making a rough 'O' shape for each side.

Most of this project was just finding things that were lying around and using those. For example, we used No. 10 x 2-1/2" 5mm x 60mm Woodscrews and No. 8 x 1-1/4" 4mm x 30mm Woodscrews. Why? They were lying around and they worked!


{% capture page_markdown %} 
![A diagram showing the concept of the cabinet. Showing a hinged door, a removable back, mounting posts and a coffee cup placed on top.](/assets/images/posts/server-cabinet//ServerCabinetConcept.svg){:class="image fit photo"}
![A test fit of the frame against the server. The server is also covered in a plastic bag to prevent damage from rain.](/assets/images/posts/server-cabinet//test-width.jpg){:class="image fit photo"}
![Another test fit of the server but this time within a shed](/assets/images/posts/server-cabinet//test-fit.jpg){:class="image fit photo"}
![Three basic sticks of wood which are beginning a frame](/assets/images/posts/server-cabinet//basic-frame.jpg){:class="image fit photo"}
{% endcapture %}
{% include photo-gallery.html %}

---


## Frame done, let's start planking!



<span class="image fit"><a href="{{ page.images }}/frame-completed.jpg"><img src="{{ page.images }}/frame-completed.jpg" alt="A picture showing the frame being completed with the server mounted inside using rails"></a></span>

(Note how we're using [the server](/posts/hug-server) as a guideline for the exact width needed! Easier and more accurate than measuring by center-widths.)

Next we can start measuring things up. I would need two different types of plank. One long length for planking up the sides and another shorter one for planking up the front/rear doors. From this point, it was all sanding, adding screws, hinges and a lot of re-measuring to make sure things went right.

### It's just like LEGO!

<span class="image fit"><a href="{{ page.images }}/measure.jpg"><img src="{{ page.images }}/measure.jpg" alt="A picture of me measuring planks of wood and labelling them"></a></span>


<div class="box alt">
<div class="row gtr-uniform">
	<div class="col-5"><span class="image fit"><a href="{{ page.images }}/planks-all-cut.jpg"><img src="{{ page.images }}/planks-all-cut.jpg" alt="An image of all of the planks of wood completed, resting inside the in-progress cabinet"></a></span></div>

	<div class="col-7"><span class="image fit"><a href="{{ page.images }}/structure.jpg"><img src="{{ page.images }}/structure.jpg" alt="Adding a cross-brace to the server cabinet for improved structural support"></a></span></div>

	<div class="col-6"><span class="image fit"><a href="{{ page.images }}/added-treatment.jpg"><img src="{{ page.images }}/added-treatment.jpg" alt="A picture showing the cabinet being treated with wood-stain"></a></span></div>

	<div class="col-6"><span class="image fit"><a href="{{ page.images }}/first-side.jpg"><img src="{{ page.images }}/first-side.jpg" alt="Looking through the cabinet"></a></span></div>



	<div class="col-6"><span class="image fit"><a href="{{ page.images }}/planked.jpg"><img src="{{ page.images }}/planked.jpg" alt="A picture of the almost finished server cabinet, just missing doors"></a></span></div>


	<div class="col-6"><span class="image fit"><a href="{{ page.images }}/added-door.jpg"><img src="{{ page.images }}/added-door.jpg" alt="An a picture of the server cabinet basically all finished, besides minor touchups"></a></span></div>
</div>
</div>

## Finally Finished!
<div class="box alt">
<div class="row gtr-uniform">
	<div class="col-7"><span class="image fit"><a href="{{ page.images }}/server-cabinet.jpg"><img src="{{ page.images }}/server-cabinet.jpg" alt="Inside the server cabinet, showing the cross brace and all the internal walls"></a></span></div>

	<div class="col-5"><span class="image fit"><a href="{{ page.images }}/at-home.jpg"><img src="{{ page.images }}/at-home.jpg" alt="The server cabinet in-use, with the hug server and a UPS mounted inside"></a></span></div>
</div>
</div>

----



This project was loads of fun and it's super useful, it's now in the middle of our living room and sees constant daily use, for multiple purposes! In terms of thermals, everything is pretty alright due to plenty of gaps all over. One thing to keep in mind though, is that noise needs to be kept to a minimum and you might even need to replace some of the fans inside of server components.

And finally, thank you so much for all the help putting this together and sawing so much wood, [@cinnabyn](https://twitter.com/cinnabyn)!


Would I do it again? **Yes!**



## And 12 months later...	
![A final picture of how things have progressed after twelve months, showing the original UPS and server mounted within, as well as a bluetooth temperature sensor, a PDU, a Unifi Security Gateway Pro and a bunch of cables]({{ page.images }}/server-cabinet-filled.jpg){:class="image fit"}

