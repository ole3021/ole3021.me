import React from 'react'
import { browserHistory } from 'react-router'
import classNames from 'classnames'
import axios from 'axios'
import marked from 'marked'
import yaml from 'js-yaml'

import Loading from '../components/Loading'

import { buildTitles, getPostArticle, buildSubTitles } from '../utils'

class Title extends React.Component {
  render () {
    const { props: { post } } = this
    const postTitle = post
      ? <article className="uk-article">
          <h1 className="uk-article-title">{post.title}</h1>
          <p className="uk-article-meta">{post.meta}</p>
        </article>
      : null
    return (
      <div className='uk-container'>
        {postTitle}
      </div>
    )
  }
}

class Content extends React.Component {
  render () {
    const { props: { post } } = this
    return (
      <div data-uk-grid>
        <div className="uk-width-2-3@l uk-width-3-3@s">
          <article className='uk-article' dangerouslySetInnerHTML={{__html: post}} />
        </div>
        <div className="uk-width-1-3@l">
          <div className="info">
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

    return (
      <div className="uk-container">
        {/* <Title post={blogTitles ? blogTitles[title] : null} /> */}
        {isLoading ? <Loading /> : <Content post={post} />}
      </div>
    )
  }
}

export default Post
