import React from 'react'

function Index () {
  return (
    <section className='hero is-info is-large'>
      <div className='hero-head'>
        <header className='nav'>
          <div className='container'>
            <div className='nav-left'>
              <a className='nav-item is-brand'>
                OLE3021
              </a>
            </div>
            <span className='nav-toggle'>
              <span />
              <span />
              <span />
            </span>
            <div className='nav-right nav-menu'>
              <a className='nav-item is-active'>
                Home
              </a>
              <a className='nav-item'>
                Blogs
              </a>
              <a className='nav-item'>
                Works
              </a>
              <a className='nav-item'>
                About
              </a>
              <span className='nav-item'>
                <span className='icon'>
                  <i className='fa fa-github' />
                </span>
              </span>
            </div>
          </div>
        </header>
      </div>

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
    </section>
  )
}

export default Index
