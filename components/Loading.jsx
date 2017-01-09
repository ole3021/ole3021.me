import React from 'react'
import anime from 'animejs'

class Loading extends React.Component {
  componentDidMount () {
    anime({
      targets: ['.blue', '.green'],
      translateX: '13rem',
      rotate: 180,
      borderRadius: '8px',
      duration: 2000,
      loop: true
    })
  }

  render () {
    return (
      <div>
        loading...
        <div className='block green' />
        <div className='block green' />
      </div>
    )
  }
}

export default Loading
