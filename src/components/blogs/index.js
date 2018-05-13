import { h, Component } from 'preact'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import 'preact-material-components/LayoutGrid/style.css'
import Card from 'preact-material-components/Card'
import 'preact-material-components/Card/style.css'
import 'preact-material-components/Button/style.css'
import style from './style.css'

export default class Blogs extends Component {
  render() {
    return (
      <div class={style.blogs}>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell desktopCols="4" tabletCols="4" phoneCols="6">
              <Card>
                <Card.Media class={style.cardMedia} />
                <div class={style.cardInfo}>
                  <h2 class=" mdc-typography--title">
                    自建ShadowSocks服务备忘录
                  </h2>
                  <div class=" mdc-typography--caption">
                    通过手动在虚拟云主机上搭建实现ShadowSocks服务，并使用Google
                    BBR来加速访问速度。
                  </div>
                </div>
              </Card>
            </LayoutGrid.Cell>
            <LayoutGrid.Cell desktopCols="4" tabletCols="4" phoneCols="6">
              <Card>
                <Card.Media class={style.cardMedia} />
                <div class={style.cardInfo}>
                  <h2 class=" mdc-typography--title">
                    自建ShadowSocks服务备忘录
                  </h2>
                  <div class=" mdc-typography--caption">
                    通过手动在虚拟云主机上搭建实现ShadowSocks服务，并使用Google
                    BBR来加速访问速度。
                    通过手动在虚拟云主机上搭建实现ShadowSocks服务，并使用Google
                    BBR来加速访问速度。
                    通过手动在虚拟云主机上搭建实现ShadowSocks服务，并使用Google
                    BBR来加速访问速度。
                  </div>
                </div>
              </Card>
            </LayoutGrid.Cell>
            <LayoutGrid.Cell desktopCols="4" tabletCols="4" phoneCols="6">
              <Card>
                <Card.Media class={style.cardMedia} />
                <div class={style.cardInfo}>
                  <h2 class=" mdc-typography--title">
                    自建ShadowSocks服务备忘录
                  </h2>
                  <div class=" mdc-typography--caption">
                    通过手动在虚拟云主机上搭建实现ShadowSocks服务，并使用Google
                    BBR来加速访问速度。
                  </div>
                </div>
              </Card>
            </LayoutGrid.Cell>
            <LayoutGrid.Cell desktopCols="4" tabletCols="4" phoneCols="6">
              <Card>
                <Card.Media class={style.cardMedia} />
                <div class={style.cardInfo}>
                  <h2 class=" mdc-typography--title">
                    自建ShadowSocks服务备忘录
                  </h2>
                  <div class=" mdc-typography--caption">
                    通过手动在虚拟云主机上搭建实现ShadowSocks服务，并使用Google
                    BBR来加速访问速度。
                  </div>
                </div>
              </Card>
            </LayoutGrid.Cell>
            <LayoutGrid.Cell desktopCols="4" tabletCols="4" phoneCols="6">
              <Card>
                <Card.Media class={style.cardMedia} />
                <div class={style.cardInfo}>
                  <h2 class=" mdc-typography--title">
                    自建ShadowSocks服务备忘录
                  </h2>
                  <div class=" mdc-typography--caption">
                    通过手动在虚拟云主机上搭建实现ShadowSocks服务，并使用Google
                    BBR来加速访问速度。
                  </div>
                </div>
              </Card>
            </LayoutGrid.Cell>
            <LayoutGrid.Cell desktopCols="4" tabletCols="4" phoneCols="6">
              <Card>
                <Card.Media class={style.cardMedia} />
                <div class={style.cardInfo}>
                  <h2 class=" mdc-typography--title">
                    自建ShadowSocks服务备忘录
                  </h2>
                  <div class=" mdc-typography--caption">
                    通过手动在虚拟云主机上搭建实现ShadowSocks服务，并使用Google
                    BBR来加速访问速度。
                  </div>
                </div>
              </Card>
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    )
  }
}
