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
            <a className="uk-navbar-toggle" data-uk-icon={"icon: menu"} data-uk-toggle={"#modal-menu"}></a>
            <div id="modal-menu" className="uk-modal-full" data-uk-modal>
              <div className="uk-modal-dialog">
                <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
                  <div className="uk-grid-collapse uk-flex-center uk-flex-middle" data-uk-grid>
                      <div className="uk-background-cover"  data-uk-height-viewport></div>
                      <div className="uk-padding-large">
                        <ul className="uk-nav uk-nav-default uk-nav-center">
                          <li className={classNames({'uk-invisible': currentNav === homeLInk || !currentNav})}>
                            <a href={homeLInk}>
                              <h1>Home</h1>
                            </a>
                          </li>
                          <li className={classNames({'uk-active': currentNav === blogsLink || currentNav === postLink})}>
                            <a href={blogsLink}>
                              <h1>Blogs</h1>
                            </a>
                          </li>
                          <li className={classNames("uk-disabled", {'uk-active': currentNav === worksLink})}>
                            <a href={worksLink}>
                              <h1>Works</h1>
                            </a>
                          </li>
                          <li className={classNames("uk-disabled", {'uk-active': currentNav === aboutLink})}>
                            <a href={aboutLink}>
                              <h1>About</h1>
                            </a>
                          </li>
                        </ul>
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
