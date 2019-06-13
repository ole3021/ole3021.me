export const state = () => {
  return {
    blogList: [],
    articles: {}
  }
}

export const mutations = {
  SET_BLOG_LIST(state, blogList) {
    state.blogList = blogList || []
  },
  SET_ARTICLE(state, id, article) {
    state[id] = article
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
