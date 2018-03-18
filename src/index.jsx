
import React from 'react'
import { render } from 'react-dom'
import App from './js/components/App'
import './style/main.scss'

render(<App />, document.getElementById('app'))

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
      console.log('Registered!')
    })
}
