import * as fs from 'fs'
import { sync as globSync } from 'glob'

const POST_PATTERN = './_posts/**/*.md'

const parseInfo = post => {
  if (post.startsWith('---') || post.startsWith('= yaml =')) {
    const postParts = post.split('---')
    return postParts[1]
  } else {
    return ''
  }
}

const infos = globSync(POST_PATTERN)
  .map(filename => fs.readFileSync(filename, 'utf8'))
  .map(file => parseInfo(file))

console.log('>>> result', infos);
console.log('>>> build complete');
