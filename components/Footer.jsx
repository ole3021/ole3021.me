import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <footer className='footer'>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <h5 className='title is-5'>友情链接</h5>
              <ul>
                <li><a target='_blank' href='https://www.chiphell.com/'>ChipHell</a></li>
                <li><a target='_blank' href='http://sspai.com/'>少数派</a></li>
              </ul>
            </div>
            <div className='column'>
              <h5 className='title is-5'>收藏整理</h5>
              <ul>
                <li><a target='_blank' href='http://www.guoku.com/tag/name/%E6%9E%9C%E5%BA%93%E6%9C%89%E7%BE%A4%E5%B7%A5%E7%A8%8B%E5%B8%88/'>工程师必备</a></li>
              </ul>
            </div>
            <div className='column'>
              <h5 className='title is-5'><i className='fa fa-heart red' /> York</h5>
              <p>爱生活，爱编程，去创造和使用美好的东西...</p>
            </div>
            <div className='column'>
              <h5 className='title is-5'>FOLLOW ME</h5>
                <span className='icon'>
                  <a target='_blank' href='https://github.com/ole3021'>
                    <i className='fa fa-github fa-lg' />
                  </a>
                </span>
                <span className='icon'>
                  <a target='_blank' href='https://cn.linkedin.com/in/ole3021'>
                    <i className='fa fa-linkedin fa-lg' />
                  </a>
                </span>
                <span className='icon'>
                  <a target='_blank' href='http://weibo.com/ole3021'>
                    <i className='fa fa-weibo fa-lg' />
                  </a>
                </span>
            </div>
          </div>
          <div className='level'>
            <p className='level-left'>
              ©&nbsp;2017&nbsp;by&nbsp;<a target='_blank' href='http://ole3021.me/' alt='Oliver Wang'>ole3021</a>. All Rights Reserved.
            </p>
            <p className='level-right'>
              Powerd&nbsp;by&nbsp;<a target='_blank' href='https://github.com/'>Github</a>, <a target='_blank' href='https://facebook.github.io/react/'>React</a>
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
