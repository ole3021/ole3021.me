import React from 'react'
import classNames from 'classnames'

import { Link } from 'react-router'
import { navFromPath } from '../utils'
import UIkit from 'uikit'

const indexLinks = {
  home: {
    name: 'Home',
    path: ['/'],
    hideOn: ['/', '']
  },
  blogs: {
    name: 'Blogs',
    path: ['blogs', 'post']
  },
  works: {
    name: 'Works',
    path: ['works'],
    disabled: true
  },
  about: {
    name: 'About',
    path: ['about'],
    disabled: true
  }
}
const repoLink = 'https://github.com/ole3021'

class Navigation extends React.Component {
  render () {
    const { props: { pathname } } = this

    const currentNav = navFromPath(pathname)

    const closeModalMenu = e => {
      const MenuModal = UIkit.modal('#modal-menu')
      if (MenuModal.isToggled()) MenuModal.toggle()
    }

    const MenuList = Object.keys(indexLinks).map((linkKey, index) =>
      <li key={index} className={classNames({'uk-active': indexLinks[linkKey].path.indexOf(currentNav) >= 0,
        'uk-invisible': indexLinks[linkKey].hideOn && indexLinks[linkKey].hideOn.indexOf(currentNav) >= 0,
        'uk-disabled': indexLinks[linkKey].disabled})}>
        <Link to={indexLinks[linkKey].path[0] || '404'}>
          {indexLinks[linkKey].name || linkKey.toUppserCase()}
        </Link>
      </li>
    )

    const MenuListMobile = Object.keys(indexLinks).map((linkKey, index) =>
      <li key={index} className={classNames({'uk-active': indexLinks[linkKey].path.indexOf(currentNav) >= 0,
        'uk-invisible': indexLinks[linkKey].hideOn && indexLinks[linkKey].hideOn.indexOf(currentNav) >= 0,
        'uk-disabled': indexLinks[linkKey].disabled})}>
        <Link to={indexLinks[linkKey].path[0] || '404'}>
          <h1>{indexLinks[linkKey].name || linkKey.toUppserCase()}</h1>
        </Link>
      </li>
  )

    return (
      <div data-uk-sticky={'sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; top: 20'}>
        <nav className='uk-navbar-container' data-uk-navbar>
          <div className='uk-navbar-left'>
            <Link to='/' className='uk-navbar-item uk-logo'>
              <b>OLE3021</b>
            </Link>
          </div>
          <div className='uk-navbar-right uk-visible@s'>
            <ul className='uk-navbar-nav'>
              {MenuList}
            </ul>
            <div className='uk-navbar-item'>
              <a href={repoLink} className='uk-icon-button' data-uk-icon={'icon: github'} />
            </div>
          </div>
          <div className='uk-navbar-right uk-hidden@s'>
            <a className='uk-navbar-toggle' data-uk-icon={'icon: menu'} data-uk-toggle={'#modal-menu'} />
            <div id='modal-menu' className='uk-modal-full' data-uk-modal>
              <div className='uk-modal-dialog' onClick={closeModalMenu}>
                <button className='uk-modal-close-full uk-close-large' type='button' data-uk-close />
                <div className='uk-grid-collapse uk-flex-center uk-flex-middle' data-uk-grid>
                  <div className='uk-background-cover uk-padding-large' data-uk-height-viewport />
                  <ul className='uk-nav uk-nav-default uk-nav-center'>
                    {MenuListMobile}
                  </ul>
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
