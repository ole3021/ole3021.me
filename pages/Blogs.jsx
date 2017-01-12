import React from 'react'
import { Link, browserHistory } from 'react-router'
import classNames from 'classnames'
import axios from 'axios'
import yaml from 'js-yaml'

import Navigation from '../components/Navigation'
import Loading from '../components/Loading'
import { buildCategories } from '../utils'

class HeroBody extends React.Component {
  render () {
    return (
      <div className='hero-body'>
        <div className='container'>
          <div className='column'>
            <p className='title'>
              Blogs
            </p>
            <p className='subtitle'>
              Personal blogs.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

class HeroFoot extends React.Component {
  render () {
    const { props: { blogCategories, currentCategory } } = this
    const categoryNavs = blogCategories
      ? Object.keys(blogCategories).map((name, index) => {
        return <li key={index}
          className={classNames({'is-active': currentCategory === name})}>
          <Link to={`/blogs/${name}`}>{name.replace('_', ' ')}</Link>
        </li>
      })
      : null
    return (
      <div className='hero-foot'>
        <div className='container'>
          <div className='tabs is-centered is-boxed'>
            <ul>
              {categoryNavs}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

class BodySection extends React.Component {
  render () {
    const { props: { blogCategories, currentCategory } } = this
    const blogList = (blogs) => {
      // Create eacth blog react component
      const blogItems = blogs.map((blog, index) => {
        return (
          <Link key={index} to={`/post/${blog.title}`} className='column is-one-quarter'>
            <section>
              <div className='card is-fullwidth'>
                <div className='card-image'>
                  <figure className='image is-16by9'>
                    <img src={blog.cover} alt='Image' />
                  </figure>
                </div>
                <div className='card-content'>
                  <div className='media'>
                    <div className='media-content'>
                      <p className='title is-4'>{blog.title}</p>
                      <p className='subtitle is-6'>{blog.tags}</p>
                    </div>
                  </div>

                  <div className='content'>
                    {blog.meta}
                    <br />
                    <small>{blog.created.toString}</small>
                  </div>
                </div>
              </div>
            </section>
          </Link>
        )
      }).reduce((pre, blogItem) => {
        // Group blog components for each column
        pre.length === 0
          ? pre.push([blogItem])
          : pre[pre.length - 1].length < 4
            ? pre[pre.length - 1].push(blogItem)
            : pre.push([blogItem])
        return pre
      }, []).map((blogColumn, index) => {
        return (
          <div key={index} className='columns'>
            {blogColumn}
          </div>
        )
      })

      return (
        <div className='content'>
          {blogItems}
        </div>
      )
    }
    const categorySessions = blogCategories
      ? Object.keys(blogCategories).map((name, index) => {
        return (
          <section key={index} className={classNames('section', {'hidden': currentCategory !== name})}>
            <div className='container'>
              {blogList(blogCategories[name])}
            </div>
          </section>
        )
      })
      : <Loading />
    return (
      <div>
        {categorySessions}
      </div>
    )
  }
}

class Blogs extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true,
      blogCategories: null
    }
  }

  componentDidMount () {
    const { props: { params: { category } } } = this
    const postInfoPath = '/postInfos.yml'
    axios.get(postInfoPath).then(({data}) => {
      const posts = yaml.load(data)
      const categories = buildCategories(posts)
      // article = marked(data)
      this.setState({ isLoading: false, blogCategories: categories })
      if (!category) {
        browserHistory.push(`/blogs/${Object.keys(categories)[0]}`)
      }
    })
  }

  render () {
    const { props: { location: { pathname } }, props: { params: { category } }, state: { blogCategories } } = this

    return (
      <div>
        <section className={classNames('hero', 'is-info')}>
          <Navigation pathname={pathname} />
          <HeroBody />
          <HeroFoot currentCategory={category} blogCategories={blogCategories} />
        </section>
        <BodySection currentCategory={category} blogCategories={blogCategories} />
      </div>
    )
  }
}

export default Blogs
