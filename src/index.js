import { h, render } from 'preact'
import 'preact/devtools'

import './style/index' // Import SASS

if (process.env.NODE_ENV === 'production') require('./pwa')

import App from './components/app'

const mountNode = document.getElementById('root')

render(<App />, mountNode, mountNode.lastChild)
