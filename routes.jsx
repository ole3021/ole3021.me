import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import NotFound from './pages/NotFound'

export default (
  <Route path='/' mapMenuTitle='Home' component={App}>
    <IndexRoute component={Home} />
    <Route path='blogs' component={Blogs} />

    <Route path='*' component={NotFound} />
  </Route>
)
