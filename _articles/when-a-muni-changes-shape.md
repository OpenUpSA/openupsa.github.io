---
layout: article
author: jd
title: "What we do when a municipality changes shape"
date: 2017-05-12
short: "In 2016, 29 municipalities in South Africa were created and 40 were disestablished. At OpenUp, we handle these changes by following the principle of “making the common easy, and making the not-so-common possible”."
image: ostrich-fence.jpg
tools:
- name: wazimap
- name: municipalmoney
types:
- name: howwedidit
themes:
- name: tech
- name: opendata
featured: true
---

In 2016, 29 municipalities in South Africa were created, 40 were disestablished and many more experienced boundary changes. This creates challenges for presenting historical and up-to-date statistics and data for the places that change. At OpenUp, we handle this challenge for [Wazimap.co.za](https://wazimap.co.za) and [Municipal Money](https://municipalmoney.gov.za) by following the principle of “making the common easy, and making the not-so-common possible”.

## Wazimap
[Wazimap](https://wazimap.co.za) shows election results and census data specific to wards, municipalities, provinces and the country as a whole. To support analysis of population data from the 2011 census for the changed municipalities, StatsSA re-coded the census data according to the 2016 boundaries. That was possible because their raw form of the census data is point-data - and each point can be coded according to the new ward and municipality it falls within.

We anticipate that visitors to Wazimap are primarily interested in the *current (2016)* boundaries - as a place looks today. A user shouldn’t have to choose between the 2011 and 2016 boundaries before we show them a place’s profile. So, the Wazimap profile page shows data for a place’s 2016 boundary. If the municipality has been disestablished in 2016, it still has a profile on Wazimap but it’ll be as the place looked in 2011.

For example, in 2016 Ikwezi municipality was amalgamated into Dr Beyers Naude municipality. [Ikwezi still has a Wazimap profile](https://wazimap.co.za/profiles/municipality-EC103-ikwezi/) for historical reference using the 2011 boundaries, but [Dr Beyers Naude municipality’s profile](https://wazimap.co.za/profiles/municipality-EC101-dr-beyers-naude/) now uses the updated 2016 boundaries and includes Ikwezi.

### Embedded Charts

In some cases it makes more sense to show historical information. For example, many websites that embed Wazimap charts refer to specific figures from those charts, and so the figures in the embedded charts shouldn’t change. So, embedded Wazimap charts will always show the some data as when the embedded chart was created.

In the [example below from Huffington Post ZA](http://www.huffingtonpost.co.za/2017/04/26/lichtenburg-and-coligny-the-tensions-that-lie-beneath_a_22056700/), 44% of Ditsobotla as of 2011 has flush toilets, while [according to the 2016 boundaries](https://wazimap.co.za/profiles/municipality-NW384-ditsobotla/#toilets) that figure jumps to 48% because the boundaries of Ditsobotla changed.

![screenshot of wazimap chart and quote in huffpost article](/img/articles/wazimap-2016-huffpost-embed.png)


### Election Data

Election data is a bit different to census data because it can’t be re-aligned to the new boundaries. Election results  are specific to the voting stations, wards and municipalities as they were at the time of the election. Many wards changed all over the country, so we decided not to show historical election data at the ward level, as it would be confusing. For municipalities and larger areas, we show a notice when the boundaries relevant to that election are not consistent with those used in the rest of the profile.

<img alt="screenshot of 2016 and 2014 election vs geography version note" src="/img/articles/wazimap-2016-2014-election-note.png" style="width: 350px">


## Municipal Money

A key feature of [Municipal Money](https://municipalmoney.gov.za) is to show a sliding window of a municipality’s historical financial performance. A municipal boundary change will impact an analysis of their performance over time. Municipal Money uses a bright banner to alert the user that a municipality’s boundary has changed, and links to any other impacted municipalities.
![Ikwezi municipality disestablished map](/img/articles/muni-money-ikwezi-disestablished-map.png)

[Disestablished municipalities like Ikwezi](https://municipalmoney.gov.za/profiles/municipality-EC103-ikwezi/) stop submitting data to Treasury after their final closing financial statements, so their profile should stay available, fixed at their latest submissions.

[Newly established municipalities like the as-yet unnamed LIM-345](https://municipalmoney.gov.za/profiles/municipality-LIM345-makhado-thulamela/), however, don’t have any data other than contact information until the first quarter of Section 71 submissions are finalised. In these cases, we show what we can, and explain why their profile looks a little bare at first.


## Municipality Changes are Complicated

There are good governance-related reasons for changing municipal boundaries. However, the changes have an impact on any analysis of municipal statistics, such as census information and financial performance.

Deciding how to react to municipal changes depends on the context and the user. OpenUp’s approach is to try to make the most common use-case quick, easy and simple.
