---
layout: article
author: greg
title: "Collaborating on Open Legislation in Poland, Romania and South Africa"
date: 2018-06-18
short: What we learnt collaborating with Romania and Poland on civic tech for open legislation.
image: open-legislation.jpg
themes:
- name: activecitizenry
- name: tech
- name: liberation
featured: true
tools:
- name: indigo
- name: openbylaws
---

**By: Greg Kempe (OpenUp), Olivia Vereha (Code for Romania), Jan Zankowski & Daniel Macyszyn (ePanstwo Foundation)**

![](https://openup.org.za/img/articles/open-legislation-collaboration/team.jpg)

In May 2018, members of three Code for All organisations - [OpenUp (South Africa)](https://openup.org.za), [Code for Romania](https://code4.ro/) and [ePaństwo Foundation (Poland)](http://epf.org.pl/) spent time at the Code for Romania offices in Bucharest to collaborate on access to law and open legislation. This blog post talks about what we did, what we learnt, what we produced (and what we ate).

We are very grateful to the National Endowment for Democracy (NED) for the grant that supported this collaboration, and to the organisers and volunteers that helped make it happen and welcomed us into their organisations.

## Why Open Legislation

The [Free Access to Law Movement](http://www.fatlm.org/declaration/) began in 1992 and recognises that legal information, including legislation, is a part of humanity’s common heritage and should be freely available to all. Each of our organisations is working on projects related to free access to law in our respective countries, and the collaboration was an opportunity to share ideas, experiences and technology. The end goal was to advance free access to law, in each country, using our collective civic technology expertise.

Free access to the law supports access to justice in a number of ways. For instance,

* Free access supports independent legal practitioners, and in turn their clients, who cannot afford expensive annual fees.
* Understanding draft legislation helps citizens understand how new laws may impact them and supports participation in government processes.
* Insight into the legislative process supports awareness of new laws and provides opportunities to take action against unjust legislation before it is passed.
* Social cohesion is improved when local legislation is readily accessible to communities (such as when you’re trying to tell your neighbour that loud, late-night parties aren’t allowed).
* Comprehensive law research is simplified, supporting improved legislation.

## The Legislative Process

First, we explored the process of creating legislation in each country. While the details differ, the overall process is quite similar (see the process for [South Africa](https://www.parliament.gov.za/how-law-made), [Romania](https://fic.ro/documents/view/Legislative-process-EN) and [Poland](http://opis.sejm.gov.pl/en/procesustawodawczy.php)):

1. There is some motivation for a new law or piece of legislation.
2. A bill is drafted and goes through a number of revisions before being finalised. This process normally involves input from subject area experts, parliament and the public, and is formalised by legislation or parliamentary rules.
3. The final bill is enacted into law and published.
4. The law may amend or repeal other laws, which need to be updated to reflect these changes (called consolidation).

[Each stage involves different parties and has varying degrees of transparency](https://docs.google.com/presentation/d/1yaJs5PXlQztuu8r0UPfgEQ8pSAuyjeJRBvft1rb-b8U/edit). There are different opportunities for openness, each with differing value and motivations.

For instance, in Romania the Parliament makes consolidated legislation available to the public, including point-in-time historical versions, and Code for Romania’s focus is on the bill drafting process of new legislation. A similar consolidation scheme is in place at the Polish parliament. In South Africa, however, the government doesn’t make consolidated legislation available at all and the bill process is more centralised than in Romania, so OpenUp’s focus is on access to enacted legislation.

Understanding one stage of the process helps when creating transparency tools for the other stages. There is overlap in audiences and use-cases that makes it beneficial to explore the stages together.

![](https://openup.org.za/img/articles/open-legislation-collaboration/open-law.jpg)

## What We Did

Code for Romania has one of the largest civic tech volunteer communities in Europe. This gives them an amazing network of professionals and experts that we could lean on to discuss the value and challenges of the projects.

We met with current and past parliamentary staff, law experts and legal professionals to explore the opportunities and challenges of bringing transparency to the legislative process, adding value for stakeholders and increasing public participation. We also discussed projects around the world which serve as inspiration for ours, such as [Fabrique de la Loi](https://lafabriquedelaloi.fr/) (French legislative tracking), [Eur-Lex](http://eur-lex.europa.eu/n-lex/index_en) (European legislation), and [Legislation.gov.uk](http://www.legislation.gov.uk/) (UK legislation).

![](https://openup.org.za/img/articles/open-legislation-collaboration/lunch.jpg)

We held a panel discussion as part of Code for Romania’s community meetup, discussing our projects and the need for transparency and access to the law. The panel was live streamed and is available on [Code for Romania’s facebook page](https://www.facebook.com/code4romania/videos/1817109364976305/).

![](https://openup.org.za/img/articles/open-legislation-collaboration/panel.jpg)

## Ce Zice Legea - What does the law say?

We mapped out the details of the legislative process in Romania, as well as opportunities for helping the institutional technical staff to upload and to make the information available in due time for the citizens to actually get involved and become aware of the proposed legislation. We did this by mapping the process on a whiteboard together with legal and government experts, with a specific focus on the engagement and support opportunities.

The insights gained from this process are being used by Code for Romania in their Ce Zice Legea app. This app is dedicated to law professionals and to regular citizens who need to be up to date with every change in legislation on a particular topic. The tool scrapes around 30 institutional websites that post legislative updates and delivers them to the user in a very simple format, where they can keep up with all the changes the committees and members of Parliament have brought to new or old pieces of legislation. It also allows the user to download all the versions of the proposal at every stage. 

![](https://openup.org.za/img/articles/open-legislation-collaboration/czl.jpg)

In parallel, we are also preparing a legislative dictionary based on crowdsourcing, in collaboration with law experts, in order to help people understand legal terms better. This dictionary will be available in a web responsive form and will also have a Chrome plug-in that people can install to use directly on the websites they visit. The platform also has a section that allows for people to explain more and more terms, that are checked by specialized editors and then added to the dictionary.  

## The Indigo Platform

[The Indigo Platform](https://openup.org.za/indigo) is OpenUp’s open source legislation consolidation and publishing platform. Aimed at legislation editors, it simplifies the process of importing existing legislation, consolidating it, and producing web- and print-friendly outputs which are easy to read and share. Third parties can then use Indigo’s API to pull the legislation content into their websites and tools. For example, OpenUp uses Indigo to power their [OpenByLaws.org.za](https://openbylaws.org.za/) project which makes municipal by-laws readily available to city staff and residents. 

ePaństwo Foundation and OpenUp worked closely to add support for Polish legislation to Indigo. Supporting the Polish legal tradition was relatively straight-forward thanks to Jan’s [breakdown of how Polish legislation is formatted](https://docs.google.com/document/d/1JOMthQQuAz6du9sQBYv1S8drKaIDw4hjbzpbnjb0vX8/edit) (what we call the Polish legal tradition). The Polish legal tradition is highly structured, in fact the format of Polish legislation is [described by its own law](http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000283/O/D20160283.pdf). Using these details, we mapped the structures in [Polish law to appropriate XML elements](https://docs.google.com/document/d/1xr-yCS23INuAcoyvCtO7ZeRNfBkSFlt_LKRCLkyy-hc/edit#) and wrote a new grammar to ensure that Indigo can import Polish documents.

![](https://openup.org.za/img/articles/open-legislation-collaboration/indigo-polish.jpg)

Updating Indigo to support Polish legislation was a useful opportunity to refactor Indigo to be more generic. The changes will make it much simpler to add new countries to Indigo in the future. We changed over 107 files in Indigo ([see the pull request](https://github.com/OpenUpSA/indigo/pull/90)) and 42 files in Slaw ([pull request here](https://github.com/longhotsummer/slaw/pull/17)), a key support library for Indigo.

We also made some major updates to Indigo: fixed bugs, improve documentation, made it easier to manage documents, and give it a bit of a facelift with Bootstrap 4.

## Improving Access to Bills

Daniel and Greg collaborated on helping users access the PDF versions of draft bills as they progress through the lawmaking process. Greg added a feature to the billtracker page of [PMG.org.za](https://pmg.org.za) -- South Africa’s parliamentary monitoring website -- which embeds the PDFs of draft bills and the final act [directly in the page](https://pmg.org.za/bill/654/), making them easier to read. Daniel did similar work for Polish parliamentary monitoring website, [Sejmometr.pl](https://sejmometr.pl/), which is currently being updated and re-implemented, 

## What we ate!

Romania has delicious food with a number of diverse influences. Jan was amazed by the range of jams (walnut jam!) and Greg’s favourite were the baked street snacks.

![](https://openup.org.za/img/articles/open-legislation-collaboration/food.jpg)

## What we learnt for future collaborations

This was Code for All’s first collaboration between three organisations. Some lessons we’ve learnt:

* Three weeks is a good amount of time to get real work done.
Spending time with an organisation and watching them work is more powerful than sharing stories at a conference.
* Processes are easier to re-use and build upon than code.
* Collaborations are complex and require advanced planning and cooperation.
* Have multiple goals for the collaboration. This helps to ensure success since it’s likely you won’t be able to achieve all of them. 
* We need more collaborations!

We’re excited about what we learnt from each other, the tools and processes exchanged, and the way forward for supporting open legislation in our countries.

To find out more about each project you can contact:

* South Africa and the Indigo Platform: Greg Kempe, greg@openup.org.za, or visit https://github.com/OpenUpSA/indigo 
* Romania and Ce Zice Legea: Olivia Vereha, olivia@code4.ro, or visit https://code4.ro/ 
* Poland, ePaństwo Foundation and Sejmometr: Daniel Macyszyn, daniel.macyszyn@epf.org.pl, or visit https://sejmometr.pl/ 
