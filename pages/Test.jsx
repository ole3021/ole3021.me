import React from 'react'
import classNames from 'classnames'

import Navigation from '../components/Navigation'
import Loading from '../components/Loading'

class HeroBody extends React.Component {
  render () {
    return (
      <div className='hero-body'>
        <div className='column'>
          <p className='title'>
            Test
          </p>
          <p className='subtitle'>
            Test Page
          </p>
        </div>
      </div>
    )
  }
}

class Post extends React.Component {
  render () {
    const { props: { location: { pathname } } } = this

    return (
      <div>
        <section className={classNames('hero', 'is-danger')}>
          <Navigation pathname={pathname} />
          <HeroBody />
        </section>
        <section className='section'>
          <div className='container'>
            <h1 className='title'>Loading Component</h1>
            <h2 className='subtitle'>
              A Loading Component Based on anime.js
            </h2>
            <hr />
            <div className='content'>
              <Loading />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Post
