import blogConfigs from 'json!yaml!../blogConfigs.yml'

export const blogCategories = blogConfigs.reduce((pre, cur) => {
  const category = cur.category ? cur.category : '未分类'
  pre[category] = pre[category]
    ? pre[category].concat([cur])
    : [cur]
  return pre
}, {})

export const blogTitles = blogConfigs.reduce((pre, cur) => {
  pre[cur.title] = cur
  return pre
}, {})
