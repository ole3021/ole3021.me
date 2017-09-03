import React from 'react'
import classNames from 'classnames'

import Navigation from '../components/Navigation'

class IntroSection extends React.Component {
  render () {
    return (
      <div className="uk-section-primary uk-section" data-uk-height-viewport>
        <div className="uk-container">
          <h1>网站升级中，可查阅博客。</h1>
          <h1>Undever development, check the blogs please.</h1>
        </div>
      </div>
    )
  }
}

class Home extends React.Component {
  render () {
    const { props: { location: { pathname } } } = this

    return (
    <div>
      <Navigation pathname={pathname} />
      <IntroSection />
    </div>
    )
  }
}

export default Home
