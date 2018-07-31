import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from 'react-dom'
import App from './js/components/App'
import './style/main.scss'

render(
	<Router>
		<App />
	</Router>,
	document.getElementById('app')
)

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/service-worker.js')
			.then(registration => {
				console.log('SW registered: ', registration)
			}).catch(registrationError => {
				console.log('SW registration failed: ', registrationError)
			})
	})
}
