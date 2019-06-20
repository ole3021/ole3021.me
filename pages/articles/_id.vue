<template>
  <div>
    <ArticleCover/>
    <ArticleContent :article="article"/>
  </div>
</template>

<script>
import fm from 'front-matter'
import MarkdownIt from 'markdown-it'
import ArticleCover from '~/components/ArticleCover.vue'
import ArticleContent from '~/components/ArticleContent.vue'

const md = new MarkdownIt()

export default {
  middleware: 'static-content',
  components: {
    ArticleCover,
    ArticleContent
  },
  computed: {
    article() {
      return md.render(
        fm(this.$store.state.articles[this.$route.params.id]).body
      )
    }
  }
}
</script>
