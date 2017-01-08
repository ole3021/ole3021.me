import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import App from './components/App'
import Article from './pages/Article'
import Blogs from './pages/Blogs'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import { blogCategories } from './utils'
const defaultCategory = Object.keys(blogCategories)[0]

export default (
  <Route path='/' mapMenuTitle='Home' component={App}>
    <IndexRoute component={Home} />

    <Route path='blogs'>
      <IndexRedirect to={`/blogs/${defaultCategory}`} />
      <Route path=':category' component={Blogs} />
    </Route>

    <Route path='article'>
      <IndexRedirect to='/blogs' />
      <Route path=':title' component={Article} />
    </Route>

    <Route path='*' component={NotFound} />
  </Route>
)
