<template>
  <div class="box">
    <article class="content article-content" v-html="article"></article>
  </div>
</template>

<script>
export default {
  props: ['article']
}
</script>


<style lang="sass">
@import "../node_modules/bulma/sass/utilities/_all.sass"

.box
  position: absolute
  z-index: 0
  +desktop
    font-size: $size-large
    margin: 4rem 9rem
    margin-top: -20rem 
  +touch
    font-size: $size-medium
    margin: 2rem 6rem
    margin-top: -20rem 
  +mobile
    font-size: $size-small
    margin: 1rem 1rem
    margin-top: -20rem 

.article-content
  margin: 1rem 1rem
</style>
