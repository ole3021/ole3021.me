import React from 'react'
import axios from 'axios'
import marked from 'marked'

import { blogTitles } from '../utils'
let article = null

class Post extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    const { props: { params: { title } } } = this
    const uri = blogTitles[title].path
    axios.get(uri).then(({data}) => {
      article = marked(data)
      this.setState({ isLoading: false })
    })
  }

  render () {
    const { state: { isLoading } } = this
    const loadingScreen = <div>Loading</div>
    return (
      <div>
        {isLoading
          ? loadingScreen
          : <div className='content' dangerouslySetInnerHTML={{__html: article}} />
        }
      </div>
    )
  }
}

export default Post
