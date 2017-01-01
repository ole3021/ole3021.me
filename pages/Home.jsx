import React from 'react'
import classNames from 'classnames'

import Navigation from '../components/Navigation'

class HeroBody extends React.Component {
  render () {
    return (
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h1 className='title'>
            Under Development
          </h1>
          <h2 className='subtitle'>
            Coming Soon....
          </h2>
        </div>
      </div>
    )
  }
}

class Home extends React.Component {
  render () {
    const { props: { location: { pathname } } } = this

    return (
      <section className={classNames('hero', 'is-info', 'is-large')}>
        <Navigation pathname={pathname} />
        <HeroBody />
      </section>
    )
  }
}

export default Home
