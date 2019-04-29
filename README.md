# OpenUp.org.za

## Local development

Install Jekyll and dependencies with

    bundle install

Then run the Jekyll server with

    bundle exec jekyll serve --watch

The site should then be running on http://localhost:4000/ and will reflect changes as you make them.

### Using Vagrant

```shell
vagrant up
vagrant ssh -c 'cd /vagrant && bundle exec jekyll serve --force_polling --host 0.0.0.0'
```

## Deployment

The site is served by GitHub Pages, so to deploy to production simply:

    git push

## Maintenance

### Tools

Tools are in the `_tools` directory. They are listed on the tools page (`tools/index.html`).

#### Featured tool

On the tools page, you can choose which tool is shown prominently at the top with a list of articles by changing the `featured-tool` variable in the front matter. Use the non-human name for the tool (the file name in `_tools`).

#### Image

The image for a tool has to be squared and placed in `img/tools`. The existing ones are 500 x 500 pixels and around 50 kB. Would be great to keep aiming for that. The tools page shows all tools and corresponding images, so large images could make that page slow.

#### Front matter / metadata

\* mandatory variable

| Variable              | Options                                                                                                                                                                                                                                                                          | Description                                                                                                      |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| `layout` *            | `tool`                                                                                                                                                                                                                                                                           | The layout of the page. It has to be `tool` unless you want it to be displayed differently for some reason       |
| `name` *              | A string, lowercase and with no spaces. Seperate words with a dash `-`                                                                                                                                                                                                           | The simple name of the tool, used to refer to it by non-humans                                                   |
| `title` *             | Any string. If you use any special characters wrap it in double quotation marks `"string"`                                                                                                                                                                                       | The human name of the tool                                                                                       |
| `external-url` *      | Any valid URL                                                                                                                                                                                                                                                                    | The homepage of the tool itself                                                                                  |
| `Image` *             | The name and extension of the file (`image.jpg`). The file itself should be placed in `/img/tools`                                                                                                                                                                               | The main image used for the tool. Used for the link to the tool and when shared                                  |
| `logo` *              | The name and extension of the file (`image.jpg`). The file itself should be placed in `/img/tools`                                                                                                                                                                               | An optional logo of the tool. Placed in front of the title on the tool’s page                                    |
| `Oneliner` *          | Any string. If you use any special characters wrap it in double quotation marks `"string"`                                                                                                                                                                                       | A short, catchy sentence. Placed at the top of the tool’s page and used as a description when the page is shared |
| `Opener` *            | Any string. If you use any special characters wrap it in double quotation marks `"string"`                                                                                                                                                                                       | Opening sentence of the tool’s description on its page                                                           |
| `tool-info` *         | Any string. At least one, most tools have three. Place on new line like <br> `- bullet: National and Provincial election results from 2011 and 2014`.                                                                                                                            | Bullet points of what the tool is about, what it can be used for, and other pertinent information                |
| `slideshow` *         | The name and extension of the file (`image.jpg`). Must be at least two. The file itself should be placed in `/img/tools`. Place on new line like <br> `- image: wm1.jpg`.                                                                                                        | Screenshots of the tool that are displayed on the tool’s page                                                    |
| `videos`              | The ID of the video on YouTube. Place on new line like <br> `- id: lXKDBoRSqxo`                                                                                                                                                                                                  | An embedded video on the tool’s page                                                                             |
| `creators`            | The `name` of anyone listed in `_team`. Their `name` is the same as the file name. Place on new line like <br> `- name: adi`                                                                                                                                                     | OpenUp team members who worked on this project                                                                   |
| `external-creators`   | Their full name, file name, and valid url. The image itself should be in `/img/team`. Place on new lines for each, like <br> `- name: Peter Koen` <br> <code>&nbsp;</code>`image: peter.jpg` <br> <code>&nbsp;</code>`external-url: http://pondo.co`                              | Individuals that contributed extensively on the projects who aren’t part of the OpenUp team                      |
| `collaborators`       | The proper name, file name, and valid url. The image itself should be in `/img/collaborators`. Place on new lines for each, like <br> `- name: Open Society Foundations` <br> <code>&nbsp;</code>`image: osf.png` <br> <code>&nbsp;</code>`external-url: http://www.osf.org.za/` | Any collaborating organisation that supported the project                                                        |

### Articles

Articles / blog posts are in the `_articles` directory and written in Markdown. Using its [basic syntax](https://www.markdownguide.org/basic-syntax) is easy enough for anyone, even those who aren't familiar with Markdown.

#### Main image
The main image for an article _must_ be 750 x 450 pixels or an equal ratio thereof and placed in `img/articles`. Please keep them up to 50 kB. Bigger than 100 kB is entirely unnecessary and a waste of bandwidth. [Imagemagick](https://www.imagemagick.org/) is your friend. If someone has used a file that is correct in terms of resolution but with a file size that is larger than necessary, try `-define`:

```
convert input.jpg -define jpeg:extent=50kb output.jpg
```

This will reduce the quality of the file and create one that is around 50 kB. You can use it in combination with other commands. More information [on StackOverflow](https://stackoverflow.com/questions/6917219/imagemagick-scale-jpeg-image-with-a-maximum-file-size#11920384).

#### Inline links and images

Make use of what Markdown can do! Headers, links, images, tables... it's really quite a lot. It's also straight forward enough that anyone in the organisation can use it properly, meaning you don't have to waste time editing what they wrote. [StackEdit](https://stackedit.io/app) is an online Markdown editor that can be of great help.

#### HTML is always an option

If Markdown isn't enough, know that you can always use HTML. Remember though that you can't use Markdown within HTML tags.

#### Front matter / metadata

\* mandatory variable

| Variable     | Options                                                                                                                          | Description                                                                                                                                                        |
|--------------|----------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `layout` *   | `article`                                                                                                                        | The layout of the page. It has to be `article` unless you want it to be displayed differently for some reason                                                      |
| `author` *   | The `name` of anyone listed in `_team`. Their `name` is the same as the file name                                                | The author of the article                                                                                                                                          |
| `title` *    | Any string. If you use any special characters wrap it in double quotation marks `"string"`                                       | The title of the article                                                                                                                                           |
| `date` *     | In the `YYYY-MM-DD` format                                                                                                       | The date the article was written                                                                                                                                   |
| `short` *    | Any string, preferably limited to 150 characters. If you use any special characters wrap it in double quotation marks `"string"` | A summary of the article                                                                                                                                           |
| `image` *    | The name and extension of the file (`image.jpg`). The file itself should be placed in `/img/articles`                            | The main image used for the article. Used for the link to the article and when shared                                                                              |
| `tools`      | Any tool in `_tools`. Can be multiple, can be zero. Place on new line like <br> `- name: wazimap`                                | The related tool(s)                                                                                                                                                |
| `themes`     | Any theme in `_themes`. Can be multiple, can be zero. Place on new line like <br> `- name: tech`                                 | The related theme(s)                                                                                                                                               |
| `featured`   | `true` or do not include variable                                                                                                | If related tool is featured on `/tools/index.html`, this article will be shown next to its logo                                                                    |
| `hide-image` | `true` or do not include variable                                                                                                | Whether or not the main image should be hidden when reading the article itself. Image will still be shown elsewhere. Useful if the article starts off with a video |

### Team members

Team members are in the `_team` directory. Their images are in `img/team`.

#### Image

The image for a team member has to be squared and placed in `img/team`. The name must correspond with the `name` in the team member's metadata. The existing ones are 350 x 350 pixels and around 40 kB. Would be great to keep aiming for that. The team page shows all team members, so large images could make that page slow.

#### Front matter / metadata

\* mandatory variable

| Variable      | Options                                                                                                       | Description                                                                                                |
|---------------|---------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| `layout` *    | `team`                                                                                                        | The layout of the page. It has to be `team` unless you want it to be displayed differently for some reason |
| `full-name` * | Any string. If you use any special characters wrap it in double quotation marks `"string"`                    | The person’s full name                                                                                     |
| `name` *      | A string, normally the first name of the person. Lowercase and with no spaces. Seperate words with a dash `-` | The simple name of the person, used to refer to it by non-humans                                           |
| `position` *  | Any string. If you use any special characters wrap it in double quotation marks `"string"`                    | The position of the person in the organisation                                                             |
| `email` *     | A valid email address like `adi@openup.org.za`                                                                | The email address of the person                                                                            |
| `biography` * | A string. Place on new line like  <br> `- highlight: Can sink shots from way dowtown`                         | A short highlight of that person’s (professional) life. Listed under their photo on their profile page     |
| `statement` * | Any string. If you use any special characters wrap it in double quotation marks `"string"`                    | A long-ish statement about how a person got to OpenUp, and why she/he works there                          |

### Visualisations

Visualisations are in the `_visualisations` directory. Their images are in `img/visualisations`.

#### Image

The image for a visualisation has to be squared and placed in `img/visualisations`. The existing ones are 500 x 500 pixels and around 40 kB. Would be great to keep aiming for that. The visulisations page shows all visualisations, so large images could make that page slow.

#### Front matter / metadata

\* mandatory variable

| Variable         | Options                                                                                                                          | Description                                                                                          |
|------------------|----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `name` *         | A string. Lowercase and with no spaces. Seperate words with a dash `-`                                                           | The simple name of the visualisation, used to refer to it by non-humans                              |
| `title` *        | Any string. If you use any special characters wrap it in double quotation marks `"string"`                                       | The title of the visualisation                                                                       |
| `external-url` * | Any valid URL                                                                                                                    | The homepage of the visualistion itself. Can also be the article in which the visualisation was used |
| `source-url`     | Any valid URL                                                                                                                    | The URL of the source of the visualisation, usually the GitHub repository                            |
| `image` *        | The name and extension of the file (`image.jpg`). The file itself should be placed in `/img/visualisations`                      | The image used for the visualisation                                                                 |
| `summary` *      | Any string, preferably limited to 150 characters. If you use any special characters wrap it in double quotation marks `"string"` | A summary of what the visualisation is about                                                         |

### Other content

Stylesheets that won't change can be placed in `_sass`. `main.scss`, in `css`, is the principal file for style changes.

The plumbing for `types` of articles exists. It works exactly the same way as `themes`. You can create a `_types` directory, add some markdown to it for each type, and replicate the tags like they're done for `themes`. It was removed because it turned out we didn't really need it, but it's there in case it's useful in the future.

`_academy` is a directory with stories from the old journalism academy.

`_miscellaneous` is a directory where you can put orphaned (mini)sites. It's a good place for OpenUp projects that for one reason or another no longer have a home, yet are still something we want to show people. If possible, it's probably better if these projects have a repository of their own, but using this directory can be a big time saver.
