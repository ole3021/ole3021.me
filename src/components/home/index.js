import { h } from 'preact'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import 'preact-material-components/Theme/style.css'
import style from './style.css'

export default () => {
  return (
    <div class={style.home}>
      <LayoutGrid class={style.container}>
        <LayoutGrid.Cell class="mdc-theme--primary-bg mdc-theme--on-primary">
          <header>
            <h1>Stay hunry, Stay foolish</h1>
            <h3>
              An agile developer focus on backen-end and machine-learning, love
              to build tools that can solve real life problem.
            </h3>
          </header>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell class="mdc-theme--secondary-bg mdc-theme--on-primary">
          <header>
            <h1>Stay hunry, Stay foolish</h1>
            <h3>
              An agile developer focus on backen-end and machine-learning, love
              to build tools that can solve real life problem.
            </h3>
          </header>
        </LayoutGrid.Cell>
      </LayoutGrid>
    </div>
  )
}
