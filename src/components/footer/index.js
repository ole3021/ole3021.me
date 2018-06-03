import { h } from 'preact'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import 'preact-material-components/Theme/style.css'
import style from './style.css'

export default () => {
  return (
    <div>
      <LayoutGrid class="mdc-theme--primary-bg mdc-theme--on-primary">
        <LayoutGrid.Inner>
          <LayoutGrid.Cell cols="4">
            <div>
              <h2>友情链接</h2>
              <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </div>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell cols="4">
            <div>
              <h2>收藏整理</h2>
              <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
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
              <p>
                © 2017 by ole3021 . All Rights Reserved. Powerd by Github Pages,
                React
              </p>
            </div>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell cols="6" class="mdc-layout-grid--align-right">
            <div>
              <p>
                Powerd By <a href="https://pages.github.com/">Github Pages</a>,{' '}
                <a href="https://preactjs.com/">Preact</a>,{' '}
                <a href="https://github.com/ole3021/ghp-blogs">GHBlogs</a>
              </p>
            </div>
          </LayoutGrid.Cell>
        </LayoutGrid.Inner>
      </LayoutGrid>
    </div>
  )
}
