import { StaticContentLoader } from '@pardjs/static-content-loader'

const staticLoader = new StaticContentLoader(
  'https://raw.githubusercontent.com/ole3021/blogs/master/',
  {
    indexFileName: 'customIndex.json',
    timeout: 4000
  }
)

const fetchBlogList = async store => {
  if (store.state.blogList && store.state.blogList.length == 0) {
    const blogList = await staticLoader.fetchIndex()
    store.commit('SET_BLOG_LIST', blogList)
  }
}

const fetchArticle = async (store, articleId) => {
  if (store.state.blogList && store.state.blogList.length == 0) {
    await fetchBlogList(store)
  }

  if (store.state.articles[articleId]) return store.state.articles[articleId]

  const { path: articlePath } = store.state.blogList.find(
    blog => blog.id === articleId
  )

  if (articlePath) {
    const content = await staticLoader.fetchContent(articlePath)

    store.commit('SET_ARTICLE', { id: articleId, content })
  }
}

export default async function(context) {
  const { store, route } = context
  const { name: pathName, params } = route

  if (pathName === 'index') {
    try {
      await fetchBlogList(store)
    } catch (error) {
      console.error('>>> Failed to fetch blogs', error)
      return []
    }
  }

  if (pathName === 'articles-id') {
    try {
      const { id: articleId } = params
      await fetchArticle(store, articleId)
    } catch (error) {
      console.error('>>> Failed to fetch article', error)
      return null
    }
  }
  return
}
