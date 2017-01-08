import React from 'react'

import Footer from './Footer'

class App extends React.Component {
  render () {
    const { props: { children } } = this

    return (
      <div>
        {children}
        <Footer />
      </div>
    )
  }
}

export default App
