const splice = (arr = [], start, length) => {
  arr.splice(start, length)

  return arr
}

export const toggleElement = (id, clsName = 'hidden') => {
  id = id.startsWith('#') ? id : `#${id}`
  const target = document.querySelector(id)
  let targetClass = target.className.split(' ')

  targetClass.indexOf(clsName) >= 0
    ? targetClass = splice(targetClass, targetClass.indexOf(clsName), 1)
    : targetClass.push(clsName)

  target.className = targetClass.join(' ')
}
