<template>
  <div>
    <ArticleCover/>
    <ArticleContent :article="article"/>
  </div>
</template>

<script>
import showdown from 'showdown'
import ArticleCover from '~/components/ArticleCover.vue'
import ArticleContent from '~/components/ArticleContent.vue'

const converter = new showdown.Converter({
  metadata: true
})

export default {
  middleware: 'static-content',
  components: {
    ArticleCover,
    ArticleContent
  },
  computed: {
    article() {
      return converter.makeHtml(
        this.$store.state.articles[this.$route.params.id]
      )
    }
  }
}
</script>
