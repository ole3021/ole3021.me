import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import App from './components/App'
import Post from './pages/Post'
import Blogs from './pages/Blogs'
import Home from './pages/Home'
import Test from './pages/Test'
import NotFound from './pages/NotFound'

export default (
  <Route path='/' mapMenuTitle='Home' component={App}>
    <IndexRoute component={Home} />

    <Route path='blogs'>
      <IndexRoute component={Blogs} />
      <Route path=':category' component={Blogs} />
    </Route>

    <Route path='post'>
      <IndexRedirect to='/blogs' />
      <Route path=':title' component={Post} />
    </Route>

    <Route path='test' component={Test} />
    <Route path='404' component={NotFound} />

    <Route path='*'>
      <IndexRedirect to='/404' />
    </Route>
  </Route>
)
