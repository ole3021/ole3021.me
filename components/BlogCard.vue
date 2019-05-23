<template>
  <div class="container is-fullhd blog-card-container">
    <figure class="cover-image">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
    <div class="content blog-intro">
      <h1>Some Title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.
      </p>
      <a>@bulmaio</a>.
      <a href="#">#css</a>
      <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</template>

<style lang="sass">
@import "../node_modules/bulma/sass/utilities/_all.sass"

.blog-card-container 
  overflow: hidden
  margin-bottom: 2rem
  +desktop
    min-height: 16rem
    // max-height: 16rem


.cover-image
  object-fit: cover
  height: 16rem
  // height: 30rem


.cover-image img

  
.blog-intro
  height: 100%
  padding: 1rem 2rem
  

</style>
