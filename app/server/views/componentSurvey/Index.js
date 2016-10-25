import React from 'react'
import { render } from 'react-dom'
import App from './App.js'

import { Router, Route, browserHistory } from 'react-router';

render((
		<Router history={ browserHistory }>
	    	<Route path="/createSurvey" component={App}/>
 		</Router>
 		),document.querySelector('#surveyx'));
