import React from 'react'
import { browserHistory } from 'react-router'
import classNames from 'classnames'
import axios from 'axios'
import marked from 'marked'
import yaml from 'js-yaml'

import Navigation from '../components/Navigation'
import Loading from '../components/Loading'

import { buildTitles, getPostArticle } from '../utils'

class HeroBody extends React.Component {
  render () {
    const { props: { post } } = this
    const postTitle = post
      ? <div className='container'>
        <div className='column'>
          <p className='title'>
            {post.title}
          </p>
          <p className='subtitle'>
            {post.meta}
          </p>
        </div>
      </div>
      : null
    return (
      <div className='hero-body'>
        {postTitle}
      </div>
    )
  }
}

class Post extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true,
      blogTitles: null,
      post: null
    }
  }

  componentDidMount () {
    const { props: { params: { title } } } = this
    const postInfoPath = '/postInfos.yml'
    axios.get(postInfoPath).then(({data}) => {
      const posts = yaml.load(data)
      const blogTitles = buildTitles(posts)
      if (blogTitles[title]) {
        const blogUri = blogTitles[title].path
        this.setState({blogTitles: blogTitles})
        axios.get(blogUri).then(({data}) => {
          this.setState({ isLoading: false, post: marked(getPostArticle(data)) })
        })
      } else {
        browserHistory.push('/404')
      }
    })
  }

  render () {
    const { props: { location: { pathname }, params: { title } }, state: { isLoading, blogTitles, post } } = this
    const postPage = <section className='section'>
      <div className='container'>
        <div className='content'>
          <article className='article' dangerouslySetInnerHTML={{__html: post}} />
        </div>
      </div>
    </section>

    return (
      <div>
        <section className={classNames('hero', 'is-info')}>
          <Navigation pathname={pathname} />
          <HeroBody post={blogTitles ? blogTitles[title] : null} />
        </section>
        {isLoading
          ? <Loading />
          : postPage
        }
      </div>
    )
  }
}

export default Post
