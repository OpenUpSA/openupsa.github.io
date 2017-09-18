---
layout: article
author: adi
title: Liberate, then let users lead
date: 2017-09-18
short: It's the <i>civic</i> that decides whether and how the tech will work.
image: liberate-lead.jpg
types:
themes:
- name: tech
tools:
- name: mpr
---
It never ceases to surprise me how people, technologists in particular, find solutions and then search for problems to solve. Despite knowing better, I have found myself doing the same thing. I often realise that I am developing a tool that addresses a problem that no-one really has. Programmers like to talk about [premature optimisation](https://en.wikipedia.org/wiki/Program_optimization) being the root of all evil. I think that premature “solutioning” (I was assured that is this actually a real word) is a more common problem.

Having said that, it is important to accept that the world is complex, and there is often no way to anticipate how your contribution can affect it. There is a certain beauty in that. Once we concede this and design for complexity, we create a space for the emergence of something better, far beyond our initial goals.

## Case in point: MPR

Take [MPR](https://mpr.code4sa.org/), a medicine price comparison tool that I built in 2013. Most people don’t know that medicine prices are regulated in South Africa. The so-called [single exit price](https://www.health-e.org.za/wp-content/uploads/2014/06/Draft-Regulations-Relating-to-a-Transparent-Pricing-System-for-Medicines-and-Scheduled-Substances.pdf) determines the ceiling price for every medicine (except schedules 1, 6, 7 and 8). Pharmacists are not allowed to sell a medicine for more than the single exit price. They are, however, permitted to charge a dispensing fee. The size of that fee is determined by the price of the medicine. For instance, at the time of writing, a medicine costing less than R107.15 could attract a maximum dispensing fee of R11.00 + 46% of the cost of the medicine. As the price of the medicine goes up, the formula changes, with a lower percentage.

![Screengrab of MPR](/img/articles/liberate-lead-1.png)

The data is regularly published by the Department of Health on their [website](http://mpr.gov.za). Being an open data nerd, I felt that it was my duty to liberate the data from its spreadsheet and build an app. I thought that it would be an indispensable tool for consumers, waiting to catch pharmacists illegally overcharging their customers. Over the years, the tool has become very popular with thousands of monthly visitors, many of whom are returning users. In all of that time, I haven’t heard of a single instance where a patient was overcharged.

To be honest, I mostly forgot about the website. One day, while migrating servers, the tool stopped working. Within an hour, I received an email from a doctor expressing his regret that the site was no longer available. Excited to be contacted by a real user, I asked him how he was using it. I received this email:

> “I work in a mixed-income neighbourhood and being able to figure out what works for my patients’ budgets is extremely helpful — there’s is no point in prescribing medicine that the patient cannot afford to buy. Please keep up the good work.”

That took my breath away. As a programmer, it’s not often that your projects help improve lives. As a result of this email, I built a feature that allows users to find generic medicines, i.e. medicines with identical active ingredients to brand name versions.

![Screengrab of MPR](/img/articles/liberate-lead-2.png)

## Unexpected use cases

Subsequently I have received numerous emails telling me about the different ways the tool is being used. A foreign researcher found it to be the only online source of medicines registered in South Africa. A local activist used it to collect evidence that informed [advocacy](http://www.fixthepatentlaws.org/wp-content/uploads/2016/09/MSF-FTPL-report-FINAL-VERSION.pdf) around pharmaceutical patents. A number of companies who provide medical information services use it — including one that helps patients claim money back from their medical aid providers. A group of doctors (previously at _Médecins Sans Frontières_) integrated it into their app which was used by doctors to provide appropriate therapies.

I have been contacted by two pharmaceutical companies as well. The first was a message from their sales department clarifying pricing, since they were keeping tabs on the pricing of their competition. The second was an angry email telling me that doctors were accusing their sales team of inflating their prices because their prices didn’t match up with those in the app.

Most recently, another doctor emailed me saying that apart from the prices, the doctors in his practice regularly use it to quickly look up the ingredients in a particular medicine. This also amazed me. [MIMS](http://www.mims.co.za/) has long been the trusted source of information about medicines. Despite the fact that MIMS have their own mobile application, the MPR tool was somehow their preferred source. This is confirmed by the analytics that show certain users accessing the tool dozens of times every day.

In short, the tool was a success, and a complete failure. Its _raison d’etre_ turned out to be ill-conceived.

It is worth asking then, what went wrong?

Clearly, the original problem that the tool sought to fix did not actually exist. I found a dataset and wrapped it up in a mobile-friendly website. I also created a narrative for myself about why it was an important thing to do. The jury is still out on whether unscrupulous pharmacists are overcharging consumers. There is, of course, a perverse incentive for pharmacists to offer expensive medicines when cheaper alternatives exist since their profit margin is higher on these. However, I haven’t seen any evidence to support the idea that this is happening.

## Just do it

There is another lesson that we should capture, namely that you should ‘just do it’. Don’t overplan or agonise about whether you are making the right design choices. Create, publish and observe. With very few exceptions, your initial idea is almost certainly wrong. The only way to test this, however, is to put it out there and learn.

Just do it, but there is one caveat: This experimentation needs to be cheap and fast. I wrote the bulk of the code on a trans-Atlantic flight on a dimmed screen while watching my laptop battery level dip below 10%. Planning and developing an idea over a period of months is a great way to guarantee disappointment and a lot of money wasted.

This observation is not new, the [Lean](https://en.wikipedia.org/wiki/Lean_thinking) movement has been speaking about this for many years. It is however worth repeating. These principles apply as much in civic tech as they do anywhere else. Perhaps even more so in the civic tech space. Bank websites, online retailers, and content management systems are, to a large extent, solved problems. As civic technologists, we work in a messy world, developing tools that might otherwise have never existed before. There is value in these tools, and in the liberated data that enables them, but their use and usefulness isn’t always strictly up to us. Remembering that can recenter us on the “civic” in civic tech.

<small>Image source: Pixabay</small>