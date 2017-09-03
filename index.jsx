import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// window.UIkit = UIkit

UIkit.use(Icons);

import routes from './routes'

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
)
