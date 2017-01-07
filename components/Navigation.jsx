import React from 'react'
import classNames from 'classnames'

import { Link } from 'react-router'

class Navigation extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isActive: false
    }
  }

  render () {
    const homeLInk = '/'
    const blogsLink = '/blogs'
    const worksLink = '/works'
    const aboutLink = '/about'
    const repoLink = 'https://github.com/ole3021'

    const { props: { pathname }, state: { isActive } } = this

    return (
      <div className='hero-head'>
        <header className='nav'>
          <div className='container'>
            <div className='nav-left'>
              <Link to={homeLInk} className='nav-item is-brand'>
                <b>OLE3021</b>
              </Link>
            </div>
            <span className={classNames('nav-toggle', {'is-active': isActive})}
              onClick={() => { this.setState({'isActive': !isActive}) }}>
              <span />
              <span />
              <span />
            </span>
            <div className={classNames('nav-right', 'nav-menu',
              {'is-active': isActive})}>
              <Link to={homeLInk} className={classNames('nav-item',
                {'is-active': pathname === homeLInk})}>
                Home
              </Link>
              <Link to={blogsLink} className={classNames('nav-item',
                {'is-active': pathname === blogsLink})}>
                Blogs
              </Link>
              <Link to={worksLink} className={classNames('nav-item',
                {'is-active': pathname === worksLink})}>
                Works
              </Link>
              <Link to={aboutLink} className={classNames('nav-item',
                {'is-active': pathname === aboutLink})}>
                About
              </Link>
              <span className='nav-item'>
                <span className='icon'>
                  <a target='_blank' href={repoLink}>
                    <i className='fa fa-github' />
                  </a>
                </span>
              </span>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Navigation
