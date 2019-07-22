<template>
  <div class="columns">
    <div class="column is-10 is-offset-1 article-content">
      <div class="box">
        <article class="content" v-html="article"></article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['article']
}
</script>


<style lang="sass">
@import "../node_modules/bulma/sass/utilities/_all.sass"

.article-content
  position: absolute
  margin-top: -20rem
  margin-bottom: 5rem
  width: 100%

</style>
