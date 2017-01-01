import React from 'react'
import classNames from 'classnames'

import Navigation from '../components/Navigation'

class HeroBody extends React.Component {
  render () {
    return (
      <div className='hero-body'>
        bodad
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
