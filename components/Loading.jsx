import React from 'react'
import anime from 'animejs'

class Loading extends React.Component {
  componentDidMount () {
    anime({
      targets: '.block',
      translateX: '18rem',
      scale: [0.75, 0.9],
      delay: (el, index) => {
        return index * 80
      },
      direction: 'alternate',
      loop: true
    })
  }

  render () {
    return (
      <section className='hero'>
        <div className='hero-body'>
          <div className='loading-container'>
            <div className='loading'>
              <div className='block notification is-success' />
              <div className='block notification is-warning' />
              <div className='block notification is-danger' />
            </div>

          </div>
        </div>
      </section>

    )
  }
}

export default Loading
