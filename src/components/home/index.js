import { h } from 'preact'
import 'preact-material-components/Theme/style.css'
import style from './style.css'

export default () => {
  return (
    <div class={style.home}>
      <header class="header mdc-theme--primary-bg mdc-theme--on-primary">
        <div class={style.container}>
          <h1>Stay hunry, Stay foolish</h1>
          <h3>
            An agile developer focus on backen-end and machine-learning, love to
            build tools that can solve real life problem.
          </h3>
        </div>
      </header>
      <h1>Home</h1>
      <p>This is the Home component.</p>
    </div>
  )
}
