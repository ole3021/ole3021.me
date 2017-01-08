import React from 'react'
import axios from 'axios'

import { blogTitles } from '../utils'

class Article extends React.Component {
  componentDidMount () {
    console.log('>>> did Mount');
    axios.get('/_blogs/20170106test.md').then(({data}) => {
      console.log('>>>>> after,', data);
    })
  }

  render () {
    const { props: { params: { title } } } = this
    return (
      <div>
        {title}
      </div>
    )
  }
}

export default Article
