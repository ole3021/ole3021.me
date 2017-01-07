import React from 'react'
import classNames from 'classnames'
import blogConfigs from 'json!yaml!../blogConfigs.yml'

import Navigation from '../components/Navigation'

const allCategories = blogConfigs.reduce((pre, cur) => {
  const category = cur.category ? cur.category : '未分类'
  pre[category] = pre[category]
    ? pre[category].concat([cur])
    : [cur]
  return pre
}, {})

class HeroBody extends React.Component {
  render () {
    return (
      <div className='hero-body'>
        <div className='column'>
          <p className='title'>
            Blogs
          </p>
          <p className='subtitle'>
            Personal blogs.
          </p>
        </div>
      </div>
    )
  }
}

class HeroFoot extends React.Component {
  render () {
    const categoryNavs = Object.keys(allCategories).map((name, index) => {
      return <li key={index}><a>{name}</a></li>
    })
    return (
      <div className='hero-foot'>
        <div className='container'>
          <div className='tabs is-centered'>
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
    const blogList = (blogs) => {
      const blogItems = blogs.map((blog, index) => {
        return (
          <div key={index} className='column is-one-quarter'>
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
          </div>
        )
      }).reduce((pre, blogItem) => {
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
    const categorySessions = Object.keys(allCategories).map((name, index) => {
      return (
        <section id={name} className='section'>
          {blogList(allCategories[name])}
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
    const { props: { location: { pathname } } } = this

    return (
      <div>
        <section className={classNames('hero', 'is-info')}>
          <Navigation pathname={pathname} />
          <HeroBody />
          <HeroFoot />
        </section>
        <BodySection />
      </div>
    )
  }
}

export default Blogs
