<template>
  <div class="blogList">
    <div class="columns">
      <div class="column is-four-fifths">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
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
import BlogCard from '~/components/BlogCard.vue'
import BlogPagination from '~/components/BlogListPagination.vue'

export default {
  components: {
    CategoryAside,
    BlogCard,
    BlogPagination
  }
}
</script>

<style lang="sass">
.blogList 

  margin: 1.5rem

</style>
