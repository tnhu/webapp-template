import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Home from './pages/home/Home'
import registerServiceWorker from './utils/registerServiceWorker'

ReactDOM.render(<Home />, document.getElementById('root') as HTMLElement)

registerServiceWorker()
