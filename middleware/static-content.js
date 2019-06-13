import { StaticContentLoader } from '@pardjs/static-content-loader'

const staticLoader = new StaticContentLoader(
  'https://raw.githubusercontent.com/ole3021/blogs/master/blogs',
  {
    indexFileName: 'customIndex.json',
    timeout: 4000
  }
)

export default async function(context) {
  const { store } = context
  console.log('>>> static content', store.state.blogList)

  if (store.state.blogList && store.state.blogList.length == 0) {
    try {
      const blogList = await staticLoader.fetchIndex()
      console.log('>>> blog list', blogList)
      store.commit('SET_BLOG_LIST', blogList)
    } catch (error) {
      return null
    }
  }
  return
}
