import React from 'react'

import Navigation from './Navigation'
import Footer from './Footer'

class App extends React.Component {
  render () {
    const { props: { children, location: { pathname } } } = this

    return (
      <div className='uk-offcanvas-content'>
        <Navigation pathname={pathname} />
        {children}
        <Footer />
      </div>
    )
  }
}

export default App
