import React from 'react'
//the same as var React = require('react') in ES5
import { render } from 'react-dom'
//the same as var render = require('react-dom').render in ES5
import App from '../components/App'

render(
	<App/>,
	document.getElementById('app')
)

