<template>
  <div>
    <ArticleCover/>
    <ArticleContent :article="article"/>
  </div>
</template>

<script>
import marked from '@pardjs/marked'
import fm from 'front-matter'
import ArticleCover from '~/components/ArticleCover.vue'
import ArticleContent from '~/components/ArticleContent.vue'


marked.setOptions({
  baseUrl: 'https://raw.githubusercontent.com/ole3021/blogs/master/'
})

export default {
  middleware: 'static-content',
  components: {
    ArticleCover,
    ArticleContent
  },
  computed: {
    article() {
      return marked(fm(this.$store.state.articles[this.$route.params.id]).body)
    }
  }
}
</script>
