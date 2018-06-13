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
<div class="alert alert-info" role="alert">
  If you don't feel like reading (yet), you can <a target="_blank" href="https://openup.org.za/sa-hospitals-voronoi/">skip ahead check out the tool</a>.
</div>

While browsing through some of the most downloaded datasets on [OpenUp's data portal](https://data.code4sa.org/) (that's how everyone spends their Friday nights, right?), I came across the [South African Hospitals Survey 2011-2012](https://data.code4sa.org/Health/South-African-Hospitals-Survey-2011-2012/ft5b-smjr). It's a list of health care facilities and contains ratings on overall performance, facilities, waiting times, cleanliness, and a lot more.

The dataset also has the coordinates of all these facilities. That got me thinking: if I fall down the stairs and hurt myself, which health care facility is closest to my house? I live in Observatory and [Groote Schuur](https://www.westerncape.gov.za/your_gov/163) is really close. Also nearby is the [Mowbray Maternity Hospital](https://www.westerncape.gov.za/facility/mowbray-maternity-hospital). I cycle by it every day to and from work, but unless while falling down the stairs I accidentally impregnate my girlfriend, a maternity hospital isn't that relevant for me. Still, there must be other hospitals and clinics close by that I don't even know about. I fortunately never had to look for one, but this is something I'd like to know before I'm forced to find out.

## Cleaning the data and using the coordinates

I downloaded the dataset. Cool, so now what?

Column Q of the spreadsheet is titled `Location 1`, which contains the province as well as the longitude and latitude of each facility. That's great, but I don't need the province and I'd like to put the longitude and latitude into its own column.

After cleaning up the coordinates a bit, I can actually start using it to find which facility is closest. But how? One relatively low-tech way is to find the longitude and latitude of my house and subtracting them from the longitudes and latitudes in the dataset. I can then sort by value; whichever is closest to 0 should be closest to my house.

While this approach _sort of_ worked (I discovered Groote Schuur is indeed the closest facility), it's a pain and I can't imagine anyone else doing this. _I_ might now know where to go, but what about others? **I decided to dedicate a bit more time to this and try to build something worthwhile**. Before I started, I needed a [user story](https://en.wikipedia.org/wiki/User_story):

> As someone living in South Africa, I want to be able to easily find the closest health care facility from any given point in order to receive medical attention as quickly as possible

With that in mind, I started thinking about the best way to do this, keeping in mind that _best_ doesn't mean fanciest, flashiest, or even most user-friendly. I'm doing this in my spare time, unfortunately a limited resource. I also haven't done _any_ sort of research into the necessity of such a tool. That's not good practice for a new project, but this is also a pet project and an opportunity for me to learn. Also, as I'm planning on making this an open source tool and sharing it, there might be people with their own geographical data who can make use of this. This lead me to write a second user story:

> As someone with coordinates of points of interests, I want to be able to show the closest one from any given point

## Voronoi diagrams

With the user stories in mind, I decided to make a Voronoi diagram placed on a map. Unless you are particularly fond of visualising (geographical) data, you're probably wondering what those are. Quickly summarised, a Voronoi diagram is **a set of points, each of which are in a region that is closer to that point than to any other**. It's much easier to understand with some visuals:

<video style="width: 100%; margin: 20px 0;" controls preload="metadata" src="/img/articles/voronoi.mp4"></video>

Now let's read the description again: **a set of points, each of which are in a region that is closer to that point than to any other**. The start of the video is a group of black dots. An area is created that expands outwards. What you're left with are regions that are closer to the corresponding point than any other point. That's exactly what we need - the points are the health facilities and anyone living in its corresponding region has that facility as its nearest one.

Voronoi diagrams have many uses. If you want to read more about them I suggest reading [the Wikipedia article](https://en.wikipedia.org/wiki/Voronoi_diagram).

## Voronoi diagram on a map

The concept of a Voronoi diagram is great, but we need to be able to place it on a map somehow. We can do this by using [D3.js](https://d3js.org/) and Leaflet. I followed [a guide by Chris Zetter](https://chriszetter.com/blog/2014/06/15/building-a-voronoi-map-with-d3-and-leaflet/) in order to do this. I'm not going to go through that process; if you are interested in that please read his post for yourself.

Briefly summarised:

- I replaced the CSV file with my own data
- I focused the map on South Africa
- I made all facilities visible from the start

After having done that, I could start exploring! [Check out the tool for yourself](https://openup.org.za/sa-hospitals-voronoi/).

![Big differences in density between the Western Cape and Limpopo](/img/articles/hospitals-voronoi-wc-limpopo.jpg)

A few observations I could quickly make:

- Valkenberg and Alexandra Hospital are very close to my house. I had never heard of them.
- The Northern Cape does not have a lot of health facilities. I know it's also sparesely populated, but some people have to travel _very_ far to get medical attention.
- Limpopo seems busy! I don't know much about Limpopo, but the health facility density seems to beautifully match [their population density](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Limpopo_2011_population_density_map.svg/1228px-Limpopo_2011_population_density_map.svg.png).
- The Western Cape, on the other hand, is awfully empty. More people live there than in Limpopo but the density of health facilities seems way lower.

## User stories

After creating a working version, I thought it was time to see if I have satisfied the user stories:

> As someone living in South Africa, I want to be able to easily find the closest health care facility from any given point in order to receive medical attention as quickly as possible

I feel like I have _almost_ gotten there. This tool definitely makes it easy to find out which health care facility is the closest. You can just zoom in on a given location and it's easy enough to see.

However, the dataset is a few years old and it seems incomplete. I have the feeling it's only showing public facilities. A hunch: maybe the Western Cape has a lot of private facilities which is why it seems so empty. I also noticed a few spots in the ocean, Lesotho, and Swaziland. That can't be right. The data isn't all that clean. Lastly, this map doesn't take into account roads and travel time at all. A hospital might be close by, but if there is a mountain you have to drive around to get to it it might take a while.

Still, I feel like for a first version this is good enough and I would accept this story, though immediately create new stories to deal with the flaws I just pointed out.

> As someone with coordinates of points of interests, I want to be able to show the closest one from any given point

I've put [the project on GitHub](https://github.com/OpenUpSA/sa-hospitals-voronoi) and anyone can fork it to use their own data. [Chris Zetter's guide](https://chriszetter.com/blog/2014/06/15/building-a-voronoi-map-with-d3-and-leaflet/) essentially completes this story. I put the link in the README of this project. His guide was clear enough for me and I think it's clear enough for most.

## Contribute

Contributions to this projects are more than welcome. I've listed a few improvements that can be made in [the project's README](https://github.com/OpenUpSA/sa-hospitals-voronoi). They are:

- Add a search box so users can search by address
- Use a more recent dataset
- Use a more complete dataset which includes non-public facilities, which I believe are (mostly) missing
- Clean up the current dataset - a few facilities are in the ocean, Lesotho, Swaziland
- Add data to the current dataset - many facilities don't have a phone number, properly formatted physical address, email address, etc

Interested? Pull request away!

If you want to work on this with other people, I can highly recommend [attending our community evenings](https://codebridge.org.za/#events-wrap)! They happen [every other Thursday](https://calendar.google.com/calendar/embed?src=srdsesliib1rp1rp0ub6cb3dpg%40group.calendar.google.com&ctz=Africa%2FJohannesburg) at [Codebridge](https://codebridge.org.za/#events-wrap) in Cape Town.

If you want to learn more about cleaning, analysing, and presenting data, look no further than [TrainUp](/trainup/), OpenUp's excellent data training.