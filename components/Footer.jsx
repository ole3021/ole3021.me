import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <div>
        <div className="uk-container uk-flex">
          <div className="uk-width-1-3">
            <div className="uk-flex-column">
              <h4>友情链接</h4>
              <div className="uk-flex-center"><a target='_blank' href='https://www.chiphell.com/'>ChipHell</a></div>
              <div><a target='_blank' href='http://sspai.com/'>少数派</a></div>              
            </div>
          </div>
          <div className="uk-width-1-3">
            <h4>收藏整理</h4>
            <div><a target='_blank' href='http://www.guoku.com/tag/name/%E6%9E%9C%E5%BA%93%E6%9C%89%E7%BE%A4%E5%B7%A5%E7%A8%8B%E5%B8%88/'>工程师必备</a></div>
          </div>
          <div className="uk-width-1-3">
            <h4><span className="uk-margin-small-right" data-uk-icon={"icon: heart"}></span>York</h4>
            <p>爱生活，爱编程，去创造和使用美好的东西...</p>
          </div>
        </div>
        <hr className="uk-divider" />
        <div className="uk-container">
          <div className='uk-align-left'>
            © 2017 by ole3021 . All Rights Reserved.
          </div>
          <div className='uk-align-right'>
            Powerd by <a target='_blank' href='https://pages.github.com/'>Github Pages</a>, <a target='_blank' href='https://facebook.github.io/react/'>React</a>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Footer
