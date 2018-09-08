import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Home from './pages/home/Home'
import registerServiceWorker from './utils/registerServiceWorker'

import './styles/index.scss'

ReactDOM.render(<Home />, document.getElementById('root') as HTMLElement)

registerServiceWorker()
