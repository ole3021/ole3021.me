import React from 'react'

class App extends React.Component {
  render () {
    const { props: { children } } = this

    return (
      <div>
        {children}
      </div>
    )
  }
}

export default App
