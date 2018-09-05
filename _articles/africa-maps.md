---
layout: article
author: adi
title: ANALYSIS - Why Africa’s larger than maps cause us to think it is 
date: 2016-01-19
short: Maps influence the way we understand the world. The most common map projection is a relic from the Euro-centric colonial days - and as a result Africa appears smaller than it actually is.
image: africa-maps.png
---

 A few weeks ago President Jacob Zuma [stated that all the continents in the world would fit into Africa](http://www.timeslive.co.za/politics/2015/12/10/watch-zuma-fails-at-geography---claims-africa-is-the-largest-continent).
 
 I thought it useful to visualise the process of trying to stuff countries into the African continent. It turned out that [all the countries of the world would fill Africa four times over](https://africacheck.org/spot-check/it-would-take-at-least-4-africas-to-fit-all-the-worlds-continents-president-zuma/) (excluding Antarctica, but I’ll get back to this later).
 
 Unfortunately, this wasn’t a trivial task. You see, the problem is that the world isn’t flat. The maps that we generally use are planar and rectangular while the Earth is a sphere. It’s really difficult to flatten a sphere into a rectangle. Try peeling an orange and you’ll realise what contortions you need to go through in order to do it. Now imagine you were doing that with the Earth. Countries in your rectangular orange peel would barely resemble those on a sphere.
 
 So what to do? The process of converting from a 3D object (say the Earth) into a 2D plane (say a map) is called projection. Imagine you were standing in the middle of a translucent globe with a torch. Standing in the centre and shining your light through the continents would project them onto the wall. Doing this, you would only manage to project a part of the Earth onto the wall.
 
 Suppose you rolled the Earth continually on the wall as you went. That way you would manage to project all the way around the Earth onto your 2D plane. Alternatively, think of the world as a round stamp covered in ink. As you rolled it on a piece of paper, you would leave continent-shaped ink marks on the paper.
 
 <iframe src="https://static.code4sa.org/world-is-not-flat/globe.html" width="300" height="290" frameborder="0" scrolling="no"></iframe>
 
 Such a project would work well enough at the equator but things start to get weird the further you go north or south as shapes begin to stretch. Over the years, cartographers have devised different ways of addressing this problem. Unfortunately, due to our orange peeling problem, each projection needs to make certain compromises.
 
 For instance, [Van der Grinten’s world projection](https://en.wikipedia.org/wiki/Van_der_Grinten_projection) tries to make an aesthetically pleasing map but the result doesn’t maintain the size of countries and shapes tend to distort, especially at the poles.
 
 <img style="margin-bottom: 15px; border: 1px solid #ddd;" src="{{ site.baseurl }}/img/articles/africa-maps/proj_grinten.png"/>
 
 The [Albers equal-area conic projection](https://en.wikipedia.org/wiki/Albers_projection) ensures that areas of countries are preserved but shapes are not. This is a good projection for proving President Zuma’s claim to be incorrect.
 
 <img style="margin-bottom: 15px; border: 1px solid #ddd;" src="{{ site.baseurl }}/img/articles/africa-maps/proj_albers.png"/>
 
 Some of them are plain weird like this Sinu-Mollweide projection.
 
 <img style="margin-bottom: 15px; border: 1px solid #ddd;" src="{{ site.baseurl }}/img/articles/africa-maps/proj_sinu.png"/>
 
 But geometry aside, maps are political and influence the way we understand the world. Here is the standard [Mercator projection](https://en.wikipedia.org/wiki/Mercator_projection) that we are all familiar with.
 
 <iframe src="https://static.code4sa.org/world-is-not-flat/mercator.html" width="100%" height="310" frameborder="0" scrolling="no"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">&#65279;</span></iframe>
 
 Notice how small Africa is? Europe and North America are larger than they should be. The Mercator map is centred on Greenwich – an historic artefact as a result of the publication of a series of maps by a British astronomer. Previously, Paris was considered to be the centre of the map. This map is a relic of Euro-centric colonial days.
 
 Another thing to consider is why north happens to be up? There is no concept of up in space. All of our maps could quite conceivably show Africa at the top and Europe at the bottom. Why not?
 
 <iframe src="https://static.code4sa.org/world-is-not-flat/southup.html" width="100%" height="400" frameborder="0" scrolling="no"></iframe>
 
 It’s somewhat mind-blowing when you look at it but not at all unreasonable. Surprisingly, maps were not always drawn with north at the top. Egyptian maps were oriented with the flow of the Nile which drains into the Mediterranean. Upper Egypt is located further to the south and confusingly, Lower Egypt is to the north.
 
 In fact, some older maps have east at the top. Interestingly, the etymology of the word ‘orientation’ comes from the world Orient, which may explain the reason for east-up maps. (*Note: Read more about this history of map orientation [here](http://america.aljazeera.com/opinions/2014/2/maps-cartographycolonialismnortheurocentricglobe.html)*.)
 
 This north-south divide has negative connotations. South is associated with poverty and lack of development. These negative connotations don’t only apply to the developing world. Northern Italians are considered hard working while Southerners are [lazy and less educated](http://survivinginitaly.com/2014/07/30/northern-italians-versus-southern-italians-are-they-really-that-different/). Our language is also full of positive connotations for “up”, for example “on top of the world” and negative for “down”, such as “down in the dumps”.
 I
 t turns out that upside-down maps are a thing. One of the first of these was produced by an Australian tired of his country being called “Down Under”. He turned the traditional orientation on its head, literally. You can find an interesting article on these subversive maps [here](https://www.flourish.org/upsidedownmap/).
 
 In summary, maps, as with many visualisations, are simply representations of the world through the lens of their creator. The marketing industry is notorious for their use of [misleading graphs and pie charts](http://www.statisticshowto.com/misleading-graphs/). Maps are no less immune to manipulation.
 
 *[Adi Eyal](http://www.twitter.com/SoapSudTycoon) is the director of OpenUp [@OpenUpSA](https://twitter.com/openupsa).*
 
 **Image credits**

Christopher Sessums (https://www.flickr.com/photos/csessums/11427686175/)  
keishkakeishka (https://www.flickr.com/photos/keishka/2752119942/)  
Gerry Machen (https://www.flickr.com/photos/gellscom/13331625404/)  
fdecomite (https://www.flickr.com/photos/fdecomite/17311156985/)  
Mike Bostock