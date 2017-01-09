import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import App from './components/App'
import Post from './pages/Post'
import Blogs from './pages/Blogs'
import Home from './pages/Home'
import Test from './pages/Test'
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

    <Route path='post'>
      <IndexRedirect to='/blogs' />
      <Route path=':title' component={Post} />
    </Route>

    <Route path='test' component={Test} />

    <Route path='*' component={NotFound} />
  </Route>
)
