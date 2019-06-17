<template>
  <div class="container is-fullhd blog-card">
    <nuxt-link :to="'articles/' + blog.id">
      <div class="columns is-hidden-touch blog-large">
        <aside class="column">
          <figure class="blog-large-cover">
            <img :src="blog.cover" alt="Placeholder image">
          </figure>
        </aside>
        <div class="column content blog-large">
          <h1>{{blog.title}}</h1>
          <div>
            <a>@bulmaio</a>.
            <a href="#">#css</a>
            <a href="#">#responsive</a>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>

      <div class="container is-hidden-desktop blog-small">
        <img class="blog-small-background is-transparent" :src="blog.cover" alt="Placeholder image">
        <div class="content blog-small-info">
          <h1 class="is-1">{{blog.title}}</h1>
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

.blog-card
  overflow: hidden
  margin-bottom: 1.7rem
  height: 20rem
  +mobile
    height: 18rem
  a
    position: relative
    width: 100%
    height: 100%

.blog-large
  aside
    &-cover
      object-fit: cover
      object-position: center center
      height: 100%
      width: 100%


.blog-small
  position: relative
  overflow: hidden
  height: 100%
  &-background
    position: absolute
    object-fit: cover
    object-position: center center
    width: 100%
    height: 100%
  &-info
    position: absolute
    margin-top: 8rem
    width: 80%
    height: 10rem
    background-color: rgba(0, 0, 0, 0.7)
    +mobile
      margin-top: 5rem
      width: 100%
    h1
      padding: 1rem 1rem
      color: white

</style>
