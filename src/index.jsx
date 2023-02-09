import './index.css'
import './fonts/fonts.css'

import Content from './components/Content/Content'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Content />
    </Router>
  </React.StrictMode>,
)
