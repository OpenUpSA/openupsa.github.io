---
layout: article
author: adi
date: 2015-01-15
title: Gender roles in different fields of medicine
short: In this day and age, gender should be completely irrelevant. But is it?
image: gender-roles-doctors.jpg
extra_js:
  - /js/d3.v3.min.js
  - /js/c3.min.js
  - /js/gender-roles-doctors.js
extra_stylesheets:
  - /css/c3.css
themes:
  - name: liberation
---
<style>
  .chart {
    max-height: 700px;
  }
</style>

I've been playing with a new dataset over the last week. It's amazing what stories you can find in data which are completely unexpected. Last week I found some [interesting revenue models](/articles/valentines-day.html) used by a handful of municipalities in the country using their statements of operating revenue and expenditure. This week I have been looking at the history of gender equality in the medical profession.

I'm still digging into the data so this blog will only be a brief report-back on what I have found so far. Using the register of medical professionals over at the [Health Professionals Council of South Africa](http://hpcsa.co.za), I have been exploring whether there are any strong gender biases within the medical profession.

There are, the graphs below are quite telling.

Firstly, I was curious to see what is the overall picture with respect to gender equality in the medical profession. In this case, I define a medical professional as someone who has been registered as a medical practitioner. For all intents and purposes, this is someone who has a 'Dr' in front of their name.

I plotted the number of doctors who qualify on a yearly basis and compared them by gender. The graph really doesn't need much explanation, the trend is clear.

## Number of doctors qualifying over time

<div id="chart1" class="chart"></div>

Starting from the early- to mid-70s, the proportion of women doctors graduating started to increase. In 1970, only 14% of new doctors were women. That number slowly climbed to 17% in 1980, 24% in 1990, 38% in 2000 and over 50% in 2010. It would be interesting to compare this graph with a similar one for the economy as a whole. I suspect that they might be similar, although the medical practitioner graph would likely be shifted to the right due to a higher barrier to entry and the longer qualifications of doctors.

For this graph, ignore the y-axis. My data set isn't yet complete (collecting data is not easy). The numbers are not correct but the overall trend is.

What happens when we start looking at specialisations? Are there any specialities which favour one gender over another?

Paediatrics surprisingly seems to have been dominated by male doctors until around 2004 when women started taking over the field. (By the way, from now on the y-axis can be trusted, the data for this graph and the ones that follow is complete). Notice that approximately 100 new paediatricians graduate every year.

## Number of paediatricians qualifying over time

<div id="chart4" class="chart"></div>

What about psychiatry?

## Number of psychiatrists qualifying over time

<div id="chart2" class="chart"></div>

The field was almost exclusively male until the mid-80s whereas now, a new generation of women are starting to dominate. Just a quick caveat regarding the interpretation of these graphs. The numbers in each bar represent the graduates for that year. Doctors who graduated in previous years are mostly still practicing so even if new psychiatry graduates are predominantly women, there a still a large proportion of men.

On a somewhat different topic, notice that only 30-40 psychiatrists graduate every year. In total there are only 787 active psychiatrists with only 617 under retirement age. That's 0.66 psychiatrists per 100,000. Compare that with [7.8 in the US](http://www.who.int/mental_health/evidence/atlas/profiles/usa_mh_profile.pdf?ua=1), [22.35 in France](http://www.who.int/mental_health/evidence/atlas/profiles/fra_mh_profile.pdf?ua=1) and [30.77 in Norway](http://www.who.int/mental_health/evidence/atlas/profiles/nor_mh_profile.pdf?ua=1). Comparing with other BRICS countries, [Brazil : 3.07](http://www.who.int/mental_health/evidence/atlas/profiles/bra_mh_profile.pdf?ua=1), [Russia: 11.61](http://www.who.int/mental_health/evidence/atlas/profiles/rus_mh_profile.pdf?ua=1), [India: 0.3](http://www.who.int/mental_health/evidence/atlas/profiles/ind_mh_profile.pdf?ua=1) and [China: 1.53](http://www.who.int/mental_health/evidence/atlas/profiles/chn_mh_profile.pdf?ua=1). We really need to crank out more shrinks.

Here's what it looks like for gynaecologists. It is somewhat biased towards men.

## Number of gynaecologists qualifying over time

<div id="chart5" class="chart"></div>

Finally, the John Waynes of the medical profession, the Surgeons.

## Number of surgeons qualifying over time

<div id="chart3" class="chart"></div>

Of the 1360 or so surgeons in the country, only 117 are women. It seems that this field has been resistant to the forward march of gender equality, not just in South Africa but [outside as well](http://www.solidarity-us.org/node/24). Having asked a surgeon friend of mine why he thought this was the case, he suggested the inflexible and family-unfriendly working hours. Other accounts speak of [raw chauvinism](https://medium.com/@karenmilford/being-female-in-surgery-blood-guts-and-rehabilitating-chauvinists-c5f861b0c3ac).

I'm not going to say anymore on this topic since I don't have any personal insight beyond what the numbers say. This is the real point of this blog. Even though I know very little about the medical profession, I was able learn quite a lot about the trends that are shaping the industry.

I'm hoping to beat this dataset with a stick over the next few months to see what else comes out. If there is anything, I'll let you know.