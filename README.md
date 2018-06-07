# openup.github.io

## Local development

Install Jekyll and dependencies with

    bundle install

Then run the Jekyll server with

    bundle exec jekyll serve --watch

The site should then be running on http://localhost:4000/ and will reflect changes as you make them.

## Deployment

The site is served by github pages, so to deploy to production simply:

    git push

## Maintenance

### Projects
""


### Articles

Articles / blog posts are in the `_articles` directory and written in Markdown. Using its [basic syntax](https://www.markdownguide.org/basic-syntax) is easy enough for anyone, even those who aren't familiar with Markdown.

##### Front matter / metadata

| Variable   | Options                                                                                                                          | Description                                                                                                                                                        |
|------------|----------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| layout     | article                                                                                                                          | The layout of the page. It has to be `article` unless you want it to be displayed differently for some reason                                                      |
| author     | The `name` of anyone listed in `_team`. Their `name` is the same as the file name                                                | The author of the article                                                                                                                                          |
| title      | Any string. If you use any special characters wrap it in double quotation marks `"string"`                                       | The title of the article                                                                                                                                           |
| date       | In the `YYYY-MM-DD` format                                                                                                       | The date the article was written                                                                                                                                   |
| short      | Any string, preferably limited to 150 characters. If you use any special characters wrap it in double quotation marks `"string"` | A summary of the article                                                                                                                                           |
| image      | The name and extension of the file (`image.jpg`). The file itself should be placed in `/img/articles`                            | The main image used for the article. Used for the link to the article and on when shared                                                                           |
| tools      | Any tool in `_tools`. Can be multiple, can be zero. Use on new line like `- name: wazimap`.                                      | The related tool(s)                                                                                                                                                |
| themes     | Any theme in `_themes`. Can be multiple, can be zero. Use on new line like `- name: tech`.                                       | The related theme(s)                                                                                                                                               |
| featured   | `true` or do not include variable                                                                                               | If related tool is featured on `/tools/index.html`, this article will be shown next to its logo                                                                    |
| hide-image | `true` or do not include variable                                                                                                | Whether or not the main image should be hidden when reading the article itself. Image will still be shown elsewhere. Useful if the article starts off with a video |