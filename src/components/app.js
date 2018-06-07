import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'
import Footer from './footer'
import Home from '../routes/home'
import Blogs from '../routes/blogs'
import Content from '../routes/content'
import About from '../routes/about'
import Works from '../routes/works'

export default class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Blogs path="/blogs" />
          {/* <Content path="/content/:id" /> */}
          <Works path="/works" />
          <About path="/about" />
        </Router>
        <Footer />
      </div>
    )
  }
}
