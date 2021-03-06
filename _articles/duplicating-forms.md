---
layout: article
author: lailah
title: "How we helped a journalist fill out 26,000 information request forms in under an hour"
date: 2018-04-25
short: A non-technical solution for populating and duplicating application forms.
image: duplicate-forms.jpg
themes:
- name: literacy
featured: true
tools:
- name: trainup
featured: true
---

Non-technical solutions are the best of solutions because of their degree of inclusivity. When our TrainUp team was contacted by a journalist in need of assistance, we sought to find the best (and most comfortable) way for anyone to be able to replicate our efforts — especially the journalist reaching out for help.

**The journalist’s request read:**

_I need to find someone who can assist in building an automated form composer. I have 26,000 entities I need to request information about from a government department. The department has an application form accessible via a microsoft word document and I need to fill in for each entity which includes the name of the entity, a number given to that entity, and reasons why I need the information. Now, I can't manually fill out 26,000 request for information forms, I need it automated in some way._

### Getting started

Knowing how to ask for help, and being able to communicate that succinctly, is vital. When we ask for technical assistance, and we are neither a techie nor an expert in the subject area at hand, our requests are often made up of a combination of conceptual processes and technical assumptions about how those processes can be achieved.

Thus after spending a little time with the journalist consulting on the matter we came to realise that their understanding was that this could only be achieved by building a webapp or a tool of some nature. A tool that is designed to do exactly what they need to have done. That there isn't a non-technical solution readily available that could fulfil the objectives of the request.

In this case, the journalist had access to [TrainUp](https://openup.org.za/trainup/), the training arm of [OpenUp](https://openup.org.za/), as a resource to point them in the right direction, but what if they didn’t?

At OpenUp, we prefer to teach people how to fish rather than sell the fish to them. When it comes to promoting a data literate society I cannot imagine a more sustainable approach. And the more value people can extract from the tools already at their fingertips contributes to reshaping people's relationship with technology, making it easier for them to empower themselves and advance their technical competencies.

Now in order to independently deal with the technical roadblocks we encounter in our work, when we have no where else to turn, we must begin with a process of interrogation. The way we phrase our queries can go a long way in helping us explore viable and realistic solutions. For example I’ll demonstrate this by breaking apart the journalist's request:

_I need to find someone who can assist in building an automated form composer. I have 26,000 entities I need to request information about from a government department._

In the above portion of the request, the journalist had identified the technical process that needs to be automated i.e. the duplication of the application form and the subsequent population of those duplicated forms with the list of 26,000 entities.

Next we need to investigate how we can do this. At this point we have to interrogate our own understanding of what it is we need to do. And we can do this by asking ourselves the following questions:

<ul>
	<li>Of the tools that I commonly use, do any of these tools offer any feature or function that would be able to perform such a task?</li>
	<li>Does the version of the tool I currently have support this feature or function?</li>
	<li>If not, can I update the version I currently have to a older or newer version that does have this feature or function?</li>
</ul>

The above questions are relevant to the above request, and will definitely not apply to each technical roadblock we face. But knowing that in taking the time to formulate the right questions to guide our process, we can draw closer in finding a solution that works for us, or at the very least be certain in knowing that it is out of our capability to solve on our own.

We often forget that when using digital tools such as software, or even the internet, we don’t use it to its full potential. Most software and digital tools are built with a multitude of possible users and uses in mind. And our routine usage of a particular tool is only just one way of utilising the resource that is in front of us.

Bearing this in mind, let's have a look at the solution we provided to the journalist.

### The solution

**Step one: clearly identify the resources you are working with**

Documents

- An official application form document for employment equity reports 
- A PDF document containing a list of 26,000 public entities

Tools

- [Tabula](http://tabula.technology/)
- [Microsoft Excel](https://products.office.com/en-us/excel)
- [Microsoft Word](https://office.live.com/start/Word.aspx)

**Step two: scrape the data**

Before we can populate our forms, we first need the information housed in the public register i.e. the name and number assigned to each of the 26,000 entities. The public register is stored in a PDF format, and the names and numbers of the 26,000 entities, as a table within the PDF. While machine-readable, a PDF is not a format that allows us to work with information as data. Thus in order to work with it as data we have to extract the information from the PDF. This process is known as scraping.

Scraping describes the method to extract data hidden in documents – such as web pages, PDFs, or images and make it useable for further data processing. It is among the most useful skills to have if you set out to investigate data – and most of the time it is not especially challenging. For the most simple methods of scraping you do not even need to know how to write code.

In order to scrape the data from the public register, we used a tool called [Tabula](http://tabula.technology/). We have a tutorial for using Tabula, and various other techniques for [Scraping Data](https://openup.org.za/trainup/scraping.html), that you can access online as part of our [OpenContent](https://openup.org.za/trainup/#open-content) resource.

**Step three: import the data**

Once the data is scraped, and still using Tabula, we can export the data into a CSV (comma separated values) file. This file format can readily be imported into Microsoft Excel and converted to spreadsheet format. To understand more about CSV file formats, and how to import a CSV file into Excel, read our [OpenContent](https://openup.org.za/trainup/#open-content) module on [Data Basics](https://openup.org.za/trainup/data-basics.html).

**Step four: populate and duplicate the forms**

Lastly, we need to use our data, now in spreadsheet format, to populate and duplicate the forms. In order to do this, we will make use of a feature in Microsoft Word called [Mail Merge](https://support.office.com/en-us/article/use-mail-merge-to-create-and-send-bulk-mail-labels-and-envelopes-f488ed5b-b849-4c11-9cff-932c49474705).

One of the functionalities of Mail Merge, and the function needed in order to fulfil our objective, is that it allows you to create a template, and duplicate it while at the same time populating selected areas with content pulled in from your Excel spreadsheet.

There are countless tutorials available online that instruct one of how to make use of Mail Merge. For example, you can follow this Microsoft Support tutorial on [”How to use Mail Merge to create form letters in Word”](https://support.microsoft.com/en-us/help/294683/how-to-use-mail-merge-to-create-form-letters-in-word). You can also conduct a quick Google search to find one or browse Youtube if you prefer instructional videos as a method for learning.

Please note, the same can be achieved using open source tools such as [Google Sheets](https://www.google.com/sheets/about/) paired with a Mail Merge add-on. You can source add-ons by navigating to the Add-ons tab in the Google Sheets toolbar and selecting the “Get add-ons…” option in the dropdown menu. In order to gain access to Google Sheets you will have to have an activated [Google account](https://accounts.google.com/SignUp?hl=en).

### The response

We mailed this four step solution to our journalist and received the following response:

_I have been completely blown away that this is this simple. I was already planning on getting the tech guys to figure out how to automate this. I have used Tabula before, actually I already have it installed, but because I don't use it in my daily work I forget that it can do so much. Mail Merge is the one I had to figure out but that took me 30 minutes or less as well. I'm so glad that I know how to do this now. This is amazing because I have always steered clear of sending bulk PAIA's because of the admin, but with Mail Merge, it seems a whole lot easier. I am truly excited about this, you have no idea._
