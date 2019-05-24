<template>
  <div class="blogList">
    <div class="columns">
      <div class="column is-four-fifths">
        <BlogListCard/>
        <BlogListCard/>
        <BlogListCard/>
        <BlogListCard/>
        <BlogListCard/>
        <BlogPagination/>
      </div>
      <div class="column">
        <CategoryAside/>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryAside from '~/components/BlogCategoryAside.vue'
import BlogListCard from '~/components/BlogListCard.vue'
import BlogPagination from '~/components/BlogListPagination.vue'

export default {
  components: {
    CategoryAside,
    BlogListCard,
    BlogPagination
  }
}
</script>

<style lang="sass">
.blogList 

  margin: 1.5rem

</style>
