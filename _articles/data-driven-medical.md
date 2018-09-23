---
layout: article
author: adi
title: A deep dive into the medical profession
date: 2017-02-16
name: data-driven-medical
short: A data-driven journey through the medical profession using age, gender, and education.
image: doctors.png
themes:
  - name: liberation
---

I've always been fascinated by the secrets that a dataset can reveal with a little coaxing. The most innocuous dataset can tell such interesting stories by leaking information that you never expected it to hold.

I recently revisited the [Health Professionals Council](http://hpcsa.co.za/) (HPCSA) data on registered healthcare professionals. Using this database, I wrote a [blog](/articles/gender-roles-amongst-doctors.html) two years ago about gender in the medical profession. Armed with some fresh data and a couple of spare hours on a plane I started poking around a little more. I haven't come up with a cohesive story to tell yet but here are some of my observations.

Before I start though, a quick intro into the data. The HPCSA has a useful [feature](http://isystems.hpcsa.co.za/iregister/) on their website where you can look up your doctor to find out about their qualifications, registration, etc. It isn't pretty but very informative:

<img src="/img/articles/med-hpcsa.jpg"/>

You can search by registration number, name, id number, etc...

<img src="/img/articles/med-hpcsa2.png"/>

You can even use wildcards to search in case you don't know how to spell your doctor's name.

There are 1,597 Smiths!

<img src="/img/articles/med-hpcsa3.png"/>


Here we see details for a medical practitioner. Qualified in 1950 from the University of the Witwatersrand with an MB BCh(sic). He registered in 1952 and is supposedly still actively practising medicine. According to this, he should be around 90 right now. I know what you're thinking, hold on to that thought. I'll get back to this later on.

Having access to only one record at a time gives you information about an individual healthcare professional. Once you have the data in bulk, you are able to find out so much more.

I first wanted to get a sense of the big med schools in South Africa. Using the qualification data, I extracted the university name and plotted the number of doctors graduating by university over the years starting from 1966.

<img src="/img/articles/graduations_by_university.svg"/>

The big schools are Pretoria (Tuks), Cape Town (UCT) and Stellenbosch (Stellies). We can see a slight increase in the number of graduates over the years. What really stands out is the number of graduates from KwaZulu Natal (UKZN). We can see a massive increase in the number of graduates starting from 2000 with a 200% increase between 2007 and 2008 from 200 to 400 graduates. Curiously this number drops right down in 2014 by 90%.

I've tried some Google-fu but haven't found an obvious reason for this. I would like to think that it is a glitch in the data but the rest of the data seems to make sense. It's probably worth calling the department to find out exactly what happened but I'm lazy that way.

The next facet that I was interested in was gender equality in the medical profession. How many female doctors graduate every year?

<img src="/img/articles/perc_women.svg"/>

The dotted line at 50% represents gender equality. Below that line we see more men graduating, above it, women dominate the number of graduates. From the 1960s onwards, we see a gradual increase in the proportion of female graduates. By 2000, the universities have achieved gender equality. By 2015, two-thirds of MB ChB graduates were women in the top four med schools. My alma mater, UCT, led the pack in the early 2000s. By around 2010, the ratio of women to men begins to balance out across universities.


<img src="/img/articles/med-cumulative-totals.svg"/>

Looking at the total number of doctors, we see how women have started to close the gap. In 2015, of the approximately 38,000 qualified doctors, women account for 40%. At the current rate, we should expect equality at around 2020 or so.

I have only just started my analysis but here is an interesting finding. Restricting our focus to surgeons we see some eye-opening numbers.

<img src="/img/articles/surgeons-age.png"/>

To start with, there are only 1,621 surgeons in a country of 55,000,000 people. That's only 1 in 34,000. If we divided them up by practitioners who work in the public sector and those in the private sector, I would imagine the number would be far more concerning number.

The graph itself shows the number of surgeons at every age, e.g. there are approximately 15 35-year old surgeons cutting people up right now. That's about how long it takes to qualify as a surgeon. One 30-year old wunderkind earned her MB ChB at 22 and qualified as a surgeon at 29.

Going back to our 90-year old surgeon, I drew a line at the statutory minimum retirement age of 60. Those to the right of the line are either considering retirement or have already packed their scalpels away despite keeping their registrations current with the HPCSA. Given this, we can see that 557 of those 1,600 surgeons may not actually be working as surgeons.

Just for fun, I separated female surgeons from their male counterparts. In contrast to the overall numbers for doctors, women are only now starting to qualify as surgeons. On the plus side, female surgeons are relatively younger than their male counterparts.

I've only scratched the surface here. Going back to the start of this post, I spoke about data holding secrets. Think about what we've done here. A simple database that contains information about doctors gives us insight into the state of med schools, gender equality and a looming healthcare crisis.

I often hear people complaining about a lack of data to answer some question of their's. I challenge that. Oftentimes, the data can be found right under your nose.
