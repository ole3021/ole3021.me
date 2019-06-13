<template>
  <div class="container is-fullhd blog-card-container">
    <nuxt-link :to="'articles/' + blog.id">
      <figure class="cover-image">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
      <div class="content is-hidden-touch is-flex blog-intro-side">
        <h1>{{blog.title}}</h1>
        <div>
          <a>@bulmaio</a>.
          <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <div class="content is-hidden-desktop blog-intro-bottom">
        <div class="box">
          <h1>{{blog.title}}</h1>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['blog']
}
</script>


<style lang="sass">
@import "../node_modules/bulma/sass/utilities/_all.sass"

.blog-card-container 
  overflow: hidden
  margin-bottom: 2rem
  +desktop
    min-height: 16rem
  +touch
    min-height: 8rem
    max-height: 16rem
  +mobile
    min-height: 16rem
    max-height: 16rem

.cover-image
  object-fit: cover
  height: 16rem

.blog-intro-side
  flex-direction: column
  justify-content: space-between
  height: 16rem
  width: 40rem
  margin-bottom: 0rem !important
  +desktop
    padding: 1rem 1rem
    
.blog-intro-bottom
  width: 100%
  padding: 2rem 2rem


.blog-intro-bottom .box
  overflow: hidden
  margin-top: -7rem 
  height: 7rem
  border-radius: 0
  box-shadow: 0 0 0  

</style>
