---
layout: article
author: guus
title: Using survey data to find the nearest hospital
date: 2018-05-29
short: I used the South African Hospitals Survey to create a Voronoi map, with which you can find the hospital closest to you
image: hospitals-voronoi.jpg
themes:
- name: tech
---
While browsing through some of the most downloaded datasets on [OpenUp's data portal](https://data.code4sa.org/) (that's how everyone spends their Friday nights, right?), I came across the [South African Hospitals Survey 2011-2012](https://data.code4sa.org/Health/South-African-Hospitals-Survey-2011-2012/ft5b-smjr). It's a list of health care facilities and contains ratings on overall performance, facilities, waiting times, cleanliness, and a lot more.

The dataset also has the coordinates of all these facilities. That got me thinking: if I fall down the stairs and hurt myself, which health care facility is closest to my house? I live in Observatory and [Groote Schuur](https://www.westerncape.gov.za/your_gov/163) is really close. Also nearby is the [Mowbray Maternity Hospital](https://www.westerncape.gov.za/facility/mowbray-maternity-hospital). I cycle by it every day to and from work, but unless while falling down the stairs I accidentally impregnate my girlfriend, a maternity hospital isn't that relevant for me. Still, there must be other hospitals and clinics close by that I don't even know about. I fortunately never had to look for one, but this is something I'd like to know before I'm forced to find out.

## Cleaning the data and using the coordinates

I downloaded the dataset. Cool, so now what?

Column Q of the spreadsheet is titled `Location 1`, which contains the province as well as the longitude and latitude of each facility. That's great, but I don't need the province and I'd like to put the longitude and latitude into its own column.

After cleaning up the coordinates a bit, I can actually start using it to find which facility is closest. But how? One relatively low-tech way is to find the longitude and latitude of my house and subtracting them from the longitudes and latitudes in the dataset. I can then sort by value; whichever is closest to 0 should be closest to my house.

While this approach _sort of_ worked (I discovered Groote Schuur is indeed the closest facility), it's a pain and I can't imagine anyone else doing this. _I_ might know where to go, but what about the average person? **I decided to dedicate a bit more time to this and try to build something worthwhile**. Before I started, I needed a [user story](https://en.wikipedia.org/wiki/User_story):

> As someone living in South Africa, I want to be able to easily find the closest health care facility from any given point in order to receive medical attention as quickly as possible

With that in mind, I started thinking about the best way to do this, keeping in mind that _best_ doesn't mean fanciest, flashiest, or even most user-friendly. I'm doing this in my spare time, unfortunately a limited resource. I also haven't done _any_ sort of research into the necessity of such a tool. That's not good practice for a new project, but this is also a pet project and an opportunity for me to learn. Also, as I'm planning on making this an open source tool and sharing it, there might be people with their own geographical data who can make use of this. This lead me to write a second user story:

> As someone with coordinates of points of interests, I want to be able to show the closest one from any given point

## Voronoi diagrams

With the user stories in mind, I decided to make a Voronoi diagram placed on a map. Unless you are particularly fond of visualising geographical data, you're probably wondering what those are. Quickly summarised, a Voronoi diagram is **a set of points, each of which are in a region that is closer to that point than to any other**. It's much easier to understand with some visuals:

<video style="width: 100%; margin: 20px 0;" controls preload="metadata" src="/img/articles/voronoi.mp4"></video>

Now let's read the description again: **a set of points, each of which are in a region that is closer to that point than to any other**. The start of the video is a group of black dots. An area is created that expands outwards. What you're left with are regions that are closer to the corresponding point than any other point. That's exactly what we need - the points are the health facilities and anyone living in its corresponding region has that facility as its nearest one.

Voronoi diagrams have many uses. If you want to read more about them I suggest reading [the Wikipedia article](https://en.wikipedia.org/wiki/Voronoi_diagram).

## Placing a Voronoi diagram on a map

The concept of a Voronoi diagram is great, but we need to be able to place it on a map somehow. We can do this by using [D3.js](https://d3js.org/) and Leaflet. I followed [a guide by Chris Zetter](https://chriszetter.com/blog/2014/06/15/building-a-voronoi-map-with-d3-and-leaflet/) in order to do this. I'm not going to go through _his_ process; if you are interested in that please read his post for yourself. Rather, I will explain what _I_ did in order to create a Voronoi map using the hospital survey data.

