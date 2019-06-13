<template>
  <div>
    <ArticleCover/>
    <ArticleContent/>
  </div>
</template>

<script>
import ArticleCover from '~/components/ArticleCover.vue'
import ArticleContent from '~/components/ArticleContent.vue'

export default {
  middleware: 'static-content',
  components: {
    ArticleCover,
    ArticleContent
  }
}
</script>
