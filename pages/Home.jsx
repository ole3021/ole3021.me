import React from 'react'

class IntroSection extends React.Component {
  render () {
    return (
      <div className='uk-section'>
        <div className='uk-container uk-container-center'>
          <div className='uk-flex uk-flex-column uk-flex-center uk-flex-middle' data-uk-height-viewport={'offset-bottom: 60'}>
            <h1>网站功能建设中，可查阅博客。</h1>
            <h1>Undever development, check the blogs please.</h1>
          </div>
        </div>
      </div>
    )
  }
}

class Home extends React.Component {
  render () {
    return (
      <div>
        <IntroSection />
      </div>
    )
  }
}

export default Home
