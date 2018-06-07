import { h, Component } from 'preact'
import { Link } from 'preact-router'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import Card from 'preact-material-components/Card'
import 'preact-material-components/LayoutGrid/style.css'
import 'preact-material-components/Card/style.css'
import style from './style.css'
import loki from 'lokijs'
import axios from 'axios'

export default class Blogs extends Component {
  constructor() {
    super()

    this.state.blogs = null
  }

  componentDidMount() {
    if (!this.blogs) {
      const db = new loki('./blogs.db', {
        env: 'BROWSER'
      })

      axios({
        method: 'GET',
        url: 'https://raw.githubusercontent.com/ole3021/blogs/master/blogs.db',
        responseType: 'stream'
      }).then(({ data }) => {
        db.loadJSON(JSON.stringify(data))

        this.setState({ blogs: db.getCollection('blogs') })
      })
    }
  }

  render(props, state) {
    if (state.blogs) {
      return (
        <div class={style.blogs}>
          <LayoutGrid>
            <LayoutGrid.Inner>
              {state.blogs.data.map(info => (
                <LayoutGrid.Cell desktopCols="4" tabletCols="4" phoneCols="6">
                  <Link href={`/content/${info._id}`}>
                    <Card>
                      <Card.Media class={style.cardMedia} />
                      <div class={style.cardInfo}>
                        <h2 class=" mdc-typography--title">
                          {info.meta.title || info.name}
                        </h2>
                        <div class=" mdc-typography--caption">
                          {info.meta.meta}
                        </div>
                      </div>
                    </Card>
                  </Link>
                </LayoutGrid.Cell>
              ))}
            </LayoutGrid.Inner>
          </LayoutGrid>
        </div>
      )
    } else {
      return <div class={style.blogs}>Loading</div>
    }
  }
}
