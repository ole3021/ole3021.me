<template>
  <div class="blogList">
    <div class="columns">
      <div class="column is-four-fifths">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
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

export default {
  components: {
    CategoryAside,
    BlogCard
  }
}
</script>
