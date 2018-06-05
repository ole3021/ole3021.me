import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'
import Home from './home'
import Blogs from './blogs'
import Works from './works'
import About from './about'
import Profile from './profile'
import Footer from './footer'
import Content from './content'

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
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
          <Works path="/works" />
          <About path="/about" />
          <Content path="/content/:id" />
        </Router>
        <Footer />
      </div>
    )
  }
}
