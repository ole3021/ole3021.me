![ole3021](https://cloud.githubusercontent.com/assets/2676686/21916192/cabbdcac-d979-11e6-9136-4d323eb4c14c.png)

# Personal Blog Site
This site have use the idea of [spa-github-pages](https://github.com/rafrex/spa-github-pages) to trick Github pages work with React-Router

The site will dynamically load postInfos and posts before visit the actual page, and rendering dynamically with the data.

## Purpose
The purpose of build this site are list as followes.

* Use Github Pages to host my personal blog site.
* Make create and publish post easily, event without build pages.
* Use React as the main libiary to build pages, and make it flexible enough.
* Keep the porject structure in a clean way.

## Advantages
* Publish post with out build(upload will or edit on Github)
* Path and categories of post are generate dynamicly.
* Pure React and Babel used to build pages
* Use React-Router
* Cleaned structure of projects

## Usage
`npm run start`: start run the local dev server  
`npm run generate`: generate configurations for posts, used to generate path, category and etc.. infos.  
`npm run build`: build static bundle file for Github pages server  

> For post update can just change the markdown post file on github.  
> To Add new post just add markdown post in the folder and manually add configs in [postInfos.yml](https://github.com/ole3021/ole3021.me/blob/master/postInfos.yml)


