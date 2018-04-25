---
layout: article
author: lailah
title: "Populating and duplicating forms: a non-technical solution"
date: 2018-25-04
short: "When our TrainUp team was contacted by a journalist in need of assistance, we sought to find the best (and most comfortable) way for anyone to be able to replicate our efforts."
image: OpenData.jpg
types:
themes:
- name: literacy
tools:
- name: trainup
---

Non-technical solutions are the best of solutions because of their degree of inclusivity. When our TrainUp team was contacted by a journalist in need of assistance, we sought to find the best (and most comfortable) way for anyone to be able to replicate our efforts — especially the journalist reaching out for help.

The request read:

> I need to find someone who can assist in building an automated form composer. I have 26,000 entities I need to request information about from a government department. The department has a form I need to fill in for each entity which includes the name of the entity, a number given to that entity, and reasons why I need the information. Now, I can't manually fill out 26,000 forms, I need it automated in some way.

### Getting started

Knowing how to ask for help, and being able to communicate that succinctly, is vital. When we ask for technical assistance, and we are either not a techie nor an expert in the subject area at hand, our requests are often made up of a combination of conceptual processes and technical assumptions about how those processes can be achieved.

Thus after spending a little time with the journalist consulting on the matter we came to realise that their understanding was that this could only be achieved by building a webapp or a tool of some nature that was designed to do exactly what they needed to have done. That there wasn’t a non-technical solution readily available that could fulfill the objectives of the request.

In this case, the journalist had access to [TrainUp](https://openup.org.za/trainup/), the training arm of [OpenUp](https://openup.org.za/), as a resource to point them in the right direction, but what if they didn’t?

At OpenUp, we prefer to teach people how to fish rather than sell the fish to them. When it comes to promoting a data literate society I cannot imagine a more sustainable approach. And the more value people can extract from the tools already at their fingertips contributes to reshaping people’s relationship with technology, making it easier for them to empower themselves and advance their technical competencies.

In order to independently deal with the technical roadblocks we encounter in our work begins with a process of interrogation. The way we phrase our queries can go a long way in helping us explore viable and realistic solutions. For example I’ll demonstrate by break apart the request:

> I need to find someone who can assist in building an automated form composer. I have 26,000 entities I need to request information about from a government department.

In the above portion of the request, the journalist had identified the technical process that needs to be automated i.e. the duplication of forms.

Next we need to investigate how we can do this. At this point we have to interrogate our own understanding of what it is we need to do. And we can do this by asking ourselves the following set of questions:

<ul>
	<li>Of the tools that I commonly use, do any of these tools offer any feature or function that would be able to perform such a task?</li>
	<li>Does the version of the tool I currently have support this feature or function?</li>
	<li>If not, can I update the version I currently have?</li>
</ul>

Now the above questions are relevant to the above request, and will definitely not apply to each technical roadblock we face. But knowing that through taking the time to formulate the right questions to guide our process, we will draw closer in finding a solution that works for us, or certain in knowing that it is out of our capability to achieve.

We often forget that when using digital tools such as software, or even the internet, we often don’t use it to its fullest extent. Most software and digital tools are built with a multitude of possible users and uses in mind. And our routine usage of a particular tool is often only just one way of utilising the resource that is in front of us.

Bearing this in mind, let’s have a look at the solution we provided to the journalist.

### The solution

### Step one: clearly identify the materials you are working with

Documents

<ul>
	<li>An official application for employment equity report form</li>
	<li>A PDF document containing a list of 26,000 public entities</li>
</ul>

Tools

<ul>
	<li><a href="http://tabula.technology/">Tabula</a></li>
	<li><a href="https://products.office.com/en-us/excel">Microsoft Excel</a></li>
	<li><a href="https://office.live.com/start/Word.aspx">Microsoft Word</a></li>
</ul>

### Step two: scrape the data

Before we can populate our forms, we first need the information housed in the public register. This information is stored in PDF format as a table. PDF format, while machine-readable, is not in the form we need it to be in so that we can work with it as data. In order to work with it as data we have to extract the information from the PDF. This process is known as scraping.

Scraping describes the method to extract data hidden in documents – such as web pages, PDFs, or images and make it useable for further data processing. It is among the most useful skills to have if you set out to investigate data – and most of the time it is not especially challenging. For the most simple methods of scraping you do not even need to know how to write code.

In order to scrape the data from the public register, we used a tool called [Tabula](http://tabula.technology/). We have a tutorial for using Tabula, and various other techniques for [Scraping Data](https://openup.org.za/trainup/scraping.html), that you can access online as part of our [OpenContent](https://openup.org.za/trainup/#open-content) resource.

### Step three: import the data

Once the data is scraped, and still using Tabula, we can export the data into a CSV (comma separated values) file. This file format can readily be imported into Microsoft Excel and converted to spreadsheet format. To understand more about CSV file formats, and how to import a CSV file into Excel, read our [OpenContent](https://openup.org.za/trainup/#open-content) module on [Data Basics](https://openup.org.za/trainup/data-basics.html).

### Step four: populate and duplicate the forms

Lastly, we need to use our data, now in spreadsheet format, to populate and duplicate the forms. In order to do this, we will make use of a feature in Microsoft Word called [Mail Merge](https://support.office.com/en-us/article/use-mail-merge-to-create-and-send-bulk-mail-labels-and-envelopes-f488ed5b-b849-4c11-9cff-932c49474705).

One of the functionalities of Mail Merge, and the function needed in order to fulfil our objective, is that it allows you to create a template, and duplicate it while at the same time populating selected areas with content pulled in from your Excel spreadsheet.

There are countless tutorials available online that instruct one of how to make use of Mail Merge. For example, you can follow this Microsoft Support tutorial on [”How to use Mail Merge to create form letters in Word”](https://support.microsoft.com/en-us/help/294683/how-to-use-mail-merge-to-create-form-letters-in-word). You can conduct a quick Google search to find one or browse Youtube if you prefer instructional videos as a method of learning.

Please note, the same can be achieved using [Google Sheets](https://www.google.com/sheets/about/) along with a Mail Merge add-on. You can source add-ons by navigating to the Add-ons tab in the Google Sheets toolbar and selecting the “Get add-ons…” option in the dropdown menu. In order to gain access to Google Sheets you will have to have an activated [Google account](https://accounts.google.com/SignUp?hl=en).

### The response

We mailed this four step solution to our journalist and received the following response:

> I have been completely blown away that this is this simple. I was already planning on getting the tech guys to figure out how to automate this. I have used Tabula before, actually I already have it installed, but because I don't use it in my daily work I forget that it can do so much. Mail Merge is the one I had to figure out but that took me 30 minutes or less as well. I'm so glad that I know how to do this now. This is amazing because I have always steered clear of sending bulk PAIA's because of the admin, but with Mail Merge, it seems a whole lot easier. I am truly excited about this, you have no idea.
