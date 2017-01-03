import React from 'react'
import classNames from 'classnames'

import Navigation from '../components/Navigation'

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

class Blogs extends React.Component {
  render () {
    const { props: { location: { pathname } } } = this

    return (
      <section className={classNames('hero', 'is-info')}>
        <Navigation pathname={pathname} />
        <HeroBody />
      </section>

    )
  }
}

export default Blogs
