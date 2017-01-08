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

class IntroSection extends React.Component {
  render () {
    return (
      <section className='hero'>
        <div className='hero-body'>
          <div className='container'>
            <nav className='columns'>
              <div className='column has-text-centered'>
                <span className='icon is-large'>
                  <i className='fa fa-archive' />
                </span>
                <p className='title is-4'><strong>Collection</strong></p>
                <p className='subtitle'>Awesome articles and resources</p>
              </div>
              <div className='column has-text-centered'>
                <span className='icon is-large'>
                  <i className='fa fa-code' />
                </span>
                <p className='title is-4'><strong>Code</strong></p>
                <p className='subtitle'>Sharing and communication</p>
              </div>
              <div className='column has-text-centered'>
                <span className='icon is-large'>
                  <i className='fa fa-flask' />
                </span>
                <p className='title is-4'><strong>Experiment</strong></p>
                <p className='subtitle'>New features and tech</p>
              </div>
            </nav>
          </div>
        </div>
      </section>
    )
  }
}

class Home extends React.Component {
  render () {
    const { props: { location: { pathname } } } = this

    return (
      <div>
        <section className={classNames('hero', 'is-info', 'is-large')}>
          <Navigation pathname={pathname} />
          <HeroBody />
        </section>
        <IntroSection />
      </div>

    )
  }
}

export default Home
