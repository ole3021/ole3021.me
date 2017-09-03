import React from 'react'
import classNames from 'classnames'

import { Link } from 'react-router'
import { navFromPath } from '../utils'

class Navigation extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isActive: false
    }
  }

  render () {
    const homeLInk = '/'
    const blogsLink = 'blogs'
    const postLink = 'post'
    const worksLink = '/' // works
    const aboutLink = '/' // about
    const repoLink = 'https://github.com/ole3021'

    const { props: { pathname }, state: { isActive } } = this
    const currentNav = navFromPath(pathname)

    return (
      <div className="container">
        <nav className="uk-navbar">
          <div className="uk-navbar-left">
            <Link to={homeLInk} className='uk-navbar-item uk-logo'>
              <b>OLE3021</b>
            </Link>
          </div>
          <div className="uk-navbar-right uk-visible@s">
              <ul className="uk-navbar-nav">
                <li className={classNames({'uk-invisible': currentNav === homeLInk || !currentNav})}>
                  <Link to={homeLInk}>
                    Home
                  </Link>
                </li>
                <li className={classNames({'uk-active': currentNav === blogsLink || currentNav === postLink})}>
                  <Link to={blogsLink}>
                    Blogs
                  </Link>
                </li>
                <li className={classNames("uk-disabled", {'uk-active': currentNav === worksLink})}>
                  <Link to={worksLink}>
                    Works
                  </Link>
                </li>
                <li className={classNames("uk-disabled", {'uk-active': currentNav === aboutLink})}>
                  <Link to={aboutLink}>
                    About
                  </Link>
                </li>
              </ul>
              <div className="uk-navbar-item">
                <a href={repoLink} className="uk-icon-button" data-uk-icon={"icon: github"}></a>
              </div>
          </div>
          <div className="uk-navbar-right uk-hidden@s">
            <a className="uk-navbar-toggle" data-uk-navbar-toggle-icon href="#modal-full" data-uk-icon={"icon: menu"} data-uk-toggle></a>
            <div id="modal-full" className="uk-modal-full" data-uk-modal>
              <div className="uk-modal-dialog">
                <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
                  <div className="uk-grid-collapse uk-flex-middle" data-uk-grid>
                      <div className="uk-background-cover"  data-uk-height-viewport></div>
                      <div className="uk-padding-large">
                        <h1>Menu</h1>
                        <p>menue</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
    )
  }
}

export default Navigation
