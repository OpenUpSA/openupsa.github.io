---
layout: article
author: greg
title: Fresh Data - Police District Population Estimates
date: 2016-09-27
short: |
  We've posted population estimates for Police Districts around the country to make working with crime rates simpler.
image: saps.jpg
tools:
- name: dataportal
types:
- name: howto
themes:
- name: opendata
---
We've been working with crime stats for [YouthExplorer.org.za](http://youthexplorer.org.za) recently and needed population estimates 
for Police Districts across the country. That allows us to calculate a crime rate in a district which makes it easier to compare
different police districts.

* You can download the estimates from our Data Portal at [https://data.code4sa.org/Government/Police-District-population-estimates/vxz2-4rs2](https://data.code4sa.org/Government/Police-District-population-estimates/vxz2-4rs2)

We used the 2011 Census Small Area data to build the estimates and we'll explain how we did it below.

## How we calculated the estimates

We estimated Police District populations using the populations of
the 84 000 or so Small Areas across the country. Small Areas are the smallest
shapes for which Census 2011 data is publicly available and they're small enough
that it's reasonable to assume that the population is evenly spread within
them.

We found the Small Areas that overlap with each District using the
[shapefiles for the Police Districts](https://data.code4sa.org/Government/Police-Station-Boundaries/hr5e-pz98)
and the Small Areas.  We then estimated the population of a District by adding up the
populations of the Small Areas that overlap it, taking into account that some
Small Areas only partially overlap a district. For instance, if only half a
Small Area overlaps with a Police District, then we only count half of that
Small Area's population towards the population of the Police District.

You can [read through the code on GitHub](https://github.com/Code4SA/crime-stats-demystifed/blob/master/refit.py).

## Mapping crimes to other shapes

Now that we have Police District population estimates, we can calculate a crime
rate for each District. We can then map those back to Small Areas using the
same technique as above, giving us an estimate of crimes per Small Area that
takes into account the population of each Small Area.

We can use the technique again to map Small Area crime estimates to other areas
such as wards, municipalities and provinces. This is really useful because it
lets us compare crimes alongside all the Census data that we already have at
ward and municipality level.

In fact, that's exactly what we've done for the youth-related crime indicators
on [YouthExplorer.org.za](http://youthexplorer.org.za).

## It's only an estimate

These numbers are only an estimate and they are based on Census data from 2011.

There is a small amount of error that creeps in during these calculations,
mostly because the two sets of shapefiles don't align perfectly. About 0.16% of
the population is not accounted for in the Police District population estimates
(about 85 000 people out of 51 million).

---

[SAPS photo by HelenOnline](https://commons.wikimedia.org/wiki/File%3ASAPS_Detective_Service_CT.jpg) (Own work) [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons.
