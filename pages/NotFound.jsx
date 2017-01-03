import React from 'react'
import classNames from 'classnames'

import Navigation from '../components/Navigation'

class HeroBody extends React.Component {
  render () {
    return (
      <div className='hero-body'>
        <div className='column'>
          <p className='title'>
            404 - Page Not Fount
          </p>
          <p className='subtitle'>
            Sorry, the page you are looking for is not found.
          </p>
        </div>
      </div>
    )
  }
}

class NotFound extends React.Component {
  render () {
    const { props: { location: { pathname } } } = this

    return (
      <section className={classNames('hero', 'is-warning', 'is-fullheight')}>
        <Navigation pathname={pathname} />
        <HeroBody />
      </section>
    )
  }
}

export default NotFound
