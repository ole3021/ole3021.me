import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import Navigation from '../components/Navigation'
import { blogCategories } from '../utils'

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
    const { props: { currentCategory } } = this
    const categoryNavs = Object.keys(blogCategories).map((name, index) => {
      return <li key={index}
        className={classNames({'is-active': currentCategory === name})}>
        <Link to={`/blogs/${name}`}>{name}</Link>
      </li>
    })

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
    const { props: { currentCategory } } = this
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
                    <small>{blog.created}</small>
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
    const categorySessions = Object.keys(blogCategories).map((name, index) => {
      return (
        <section key={index} className={classNames('section', {'hidden': currentCategory === name})}>
          <div className='container'>
            {blogList(blogCategories[name])}
          </div>
        </section>
      )
    })
    return (
      <div>
        {categorySessions}
      </div>
    )
  }
}

class Blogs extends React.Component {
  render () {
    const { props: { location: { pathname }, params: { category } } } = this

    return (
      <div>
        <section className={classNames('hero', 'is-info')}>
          <Navigation pathname={pathname} />
          <HeroBody />
          <HeroFoot currentCategory={category} />
        </section>
        <BodySection currentCategory={category} />
      </div>
    )
  }
}

export default Blogs
