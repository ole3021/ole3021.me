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
    const categories = Object.keys(allCategories).map((name, index) => {
      return <li key={index}><a>{name}</a></li>
    })
    return (
      <div className='hero-foot'>
        <div className='container'>
          <div className='tabs is-centered'>
            <ul>
              {categories}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

class Blogs extends React.Component {
  render () {
    const { props: { location: { pathname } } } = this

    return (
      <section className={classNames('hero', 'is-info')}>
        <Navigation pathname={pathname} />
        <HeroBody />
        <HeroFoot />
      </section>

    )
  }
}

export default Blogs
