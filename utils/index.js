export const buildCategories = posts => posts.reduce((pre, cur) => {
  const category = cur.category ? cur.category : 'None'
  pre.All = pre.All
    ? pre.All.concat([cur])
    : [cur]
  pre[category] = pre[category]
    ? pre[category].concat([cur])
    : [cur]
  return pre
}, {})

export const buildTitles = posts => posts.reduce((pre, cur) => {
  pre[cur.title] = cur
  return pre
}, {})

export const navFromPath = pathname => pathname.startsWith('/')
  ? pathname.substr(1).split('/')[0]
  : pathname.split('/')[0]

export const getPostArticle = post => {
  const yamlStart = post.indexOf('---') + 3
  post = post.slice(yamlStart)
  const yamlEnd = post.indexOf('---') + 3
  return post.slice(yamlEnd)
}
