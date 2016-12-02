import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Index from './pages/Index'

export default (
  <Route path='/' component={Index}>
    <IndexRoute component={Index} />
  </Route>
)
