export const state = () => {
  return {
    blogList: [],
    articles: {}
  }
}

export const mutations = {
  SET_BLOG_LIST(state, blogList) {
    console.log(`>>> loaded blog list`)
    state.blogList = blogList || []
  },
  SET_ARTICLE(state, article) {
    console.log(`>>> loaded article: [${article.id}]`)
    state.articles[article.id] = article.content
  }
}

export const getters = {
  blogList(state) {
    return state.blogList
  },
  article(state, id) {
    return state.articles[id] || null
  }
}
