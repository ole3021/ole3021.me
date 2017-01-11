import React from 'react'
import classNames from 'classnames'
import axios from 'axios'
import marked from 'marked'

import Navigation from '../components/Navigation'
import Loading from '../components/Loading'

import { blogTitles } from '../utils'
let article = null

class HeroBody extends React.Component {
  render () {
    const { props: { post } } = this
    return (
      <div className='hero-body'>
        <div className='container'>
          <div className='column'>
            <p className='title'>
              {post.title}
            </p>
            <p className='subtitle'>
              {post.meta}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

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
    const { props: { location: { pathname }, params: { title } }, state: { isLoading } } = this
    const post = <section className='section'>
      <div className='container'>
        <div className='content'>
          <article className='article' dangerouslySetInnerHTML={{__html: article}} />
        </div>
      </div>
    </section>

    return (
      <div>
        <section className={classNames('hero', 'is-info')}>
          <Navigation pathname={pathname} />
          <HeroBody post={blogTitles[title]} />
        </section>
        {isLoading
          ? <Loading />
          : post
        }
      </div>
    )
  }
}

export default Post
