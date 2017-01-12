import * as fs from 'fs'
import { sync as globSync } from 'glob'

const POST_PATTERN = './_posts/**/*.md'
const POST_INFO_FILE = './postInfos.yml'

const parseInfo = post => {
  if (post.startsWith('---') || post.startsWith('= yaml =')) {
    const postParts = post.split('---')
    return postParts[1].split('\n').reduce((pre, cur) => {
      if (cur) {
        pre = pre.concat([cur])
      }
      return pre
    }, [])
  } else {
    return null
  }
}

const generateYaml = infos => infos.reduce((pre, cur) => {
  if (!pre) {
    pre += '- ' + cur.join('\n  ')
  } else {
    pre += '\n- ' + cur.join('\n  ')
  }
  return pre
}, '')

const blogPaths = []
const infos = globSync(POST_PATTERN)
  .map(filename => {
    // console.log('>>> filename', filename);
    blogPaths.push(filename.slice(1))
    return fs.readFileSync(filename, 'utf8')
  })
  .map(file => parseInfo(file))
  .reduce((pre, cur, currentIndex) => {
    // Remove null from array
    if (cur) {
      cur.push(`path: ${blogPaths[currentIndex]}`)
      pre = pre.concat([cur])
    }
    return pre
  }, [])

fs.writeFileSync(POST_INFO_FILE, generateYaml(infos))
console.log('>>> post config build completed.')
