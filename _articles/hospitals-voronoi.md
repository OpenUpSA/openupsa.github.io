---
layout: article
author: guus
title: Using survey data to find your nearest hospital
date: 2018-05-29
short: I used the South African Hospitals Survey to create a Voronoi map, with which you can find the hospital closest to you
image: hospitals-voronoi.jpg
themes:
- name: tech
---
While browsing through some of the most downloaded datasets on [OpenUp's data portal](https://data.code4sa.org/) (that's how everyone spends their Friday nights, right?), I came across the [South African Hospitals Survey 2011-2012](https://data.code4sa.org/Health/South-African-Hospitals-Survey-2011-2012/ft5b-smjr). It's a list of health care facilities and contains ratings on overall performance, facilities, waiting times, cleanliness, and a lot more.

The dataset also has the coordinates of all these facilities. That got me thinking: if I fall down the stairs and hurt myself, which health care facility is closest to my house? I live in Observatory and [Groote Schuur](https://www.westerncape.gov.za/your_gov/163) is really close. Also nearby is the [Mowbray Maternity Hospital](https://www.westerncape.gov.za/facility/mowbray-maternity-hospital), I cycle by it every day to and from work. But unless while falling down the stairs I accidentally impregnate my girlfriend, a maternity hospital isn't that relevant for me. There must be other hospitals and clinics close by that I don't even know about. I fortunately never had to look for one, but this is something I'd like to know before I'm forced to find out.

## Cleaning the data and using the coordinates

I downloaded the dataset. Cool, so now what?

Column Q of the spreadsheet is titled `Location 1`, which contains the province as well as the longitude and latitude of each facility. That's great, but I don't need the province and I'd like to put the longitude and latitude into its own column.



After cleaning up the coordinates a bit, I can actually start using it to find which facility is closest. But how? One relatively low-tech way is to find the longitude and latitude of my house and subtracting them from the longitudes and latitudes in the dataset. I can then sort by value; whichever is closest to 0 should be closest to my house?

While this approach _sort of_ worked, it's a pain and I can't imagine anyone else doing this. _I_ might know where to go, but what about the average person? I decided to dedicate a bit more time to this and try to build something worthwhile. Before I started, I needed a user story:

> As someone living in South Africa, I want to be able to quickly find the closest health care facility from any given point

