import { h } from 'preact'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import style from './style.css'

export default () => {
  return (
    <div>
      <LayoutGrid class="mdc-theme--primary-bg mdc-theme--on-primary">
        <LayoutGrid.Inner>
          <LayoutGrid.Cell cols="4">
            <div class={style.link}>
              <h2>Blogroll</h2>
              <ul>
                <li>
                  <a href="https://www.chiphell.com/" target="_blank">
                    <b>ChipHell</b>
                  </a>
                </li>
                <li>
                  <a href="https://sspai.com/" target="_blank">
                    <b>少数派</b>
                  </a>
                </li>
              </ul>
            </div>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell cols="4">
            <div class={style.link}>
              <h2>Collection</h2>
              <ul>
                <li>
                  <a
                    href="https://www.guoku.com/tag/name/%E6%9E%9C%E5%BA%93%E6%9C%89%E7%BE%A4%E5%B7%A5%E7%A8%8B%E5%B8%88/"
                    target="_blank"
                  >
                    <b>工程师必备</b>
                  </a>
                </li>
              </ul>
            </div>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell cols="4">
            <div>
              <h2>❤️ York</h2>
            </div>
          </LayoutGrid.Cell>
        </LayoutGrid.Inner>
      </LayoutGrid>

      <LayoutGrid class="mdc-theme--primary-bg mdc-theme--on-primary">
        <LayoutGrid.Inner>
          <LayoutGrid.Cell cols="6" class="mdc-layout-grid--align-left">
            <div>
              <p>© 2018 by ole3021. All Rights Reserved.</p>
            </div>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell cols="6" class="mdc-layout-grid--align-right">
            <div class={style.link}>
              <p>
                Powerd By{' '}
                <a href="https://pages.github.com/" target="_blank">
                  <b>Github Pages</b>
                </a>,{' '}
                <a href="https://preactjs.com/" target="_blank">
                  <b>Preact</b>
                </a>,{' '}
                <a href="https://github.com/ole3021/ghp-blogs" target="_blank">
                  <b>GH-Blogs</b>
                </a>
              </p>
            </div>
          </LayoutGrid.Cell>
        </LayoutGrid.Inner>
      </LayoutGrid>
    </div>
  )
}
