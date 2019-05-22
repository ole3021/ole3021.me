<template>
  <div>
    <Hero/>
    <BlogList/>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import BlogList from '~/components/BlogList.vue'
export default {
  components: {
    Hero,
    BlogList
  }
}
</script>
