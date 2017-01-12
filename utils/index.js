export const buildCategories = posts => posts.reduce((pre, cur) => {
  const category = cur.category ? cur.category : '未分类'
  pre[category] = pre[category]
    ? pre[category].concat([cur])
    : [cur]
  return pre
}, {})

export const blogTitles = posts => posts.reduce((pre, cur) => {
  pre[cur.title] = cur
  return pre
}, {})

export const navFromPath = pathname => pathname.startsWith('/')
  ? pathname.substr(1).split('/')[0]
  : pathname.split('/')[0]
