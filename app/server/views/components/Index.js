import React from 'react'
import { render } from 'react-dom'
import App from './App.js'
import Survey from './surveyUser/Survey.js'

import { Router, Route, browserHistory } from 'react-router';

render((
		<Router history={ browserHistory }>
	    	<Route path="/home" component={App}/>
	    	<Route path="/checkSurvey" component={Survey}/>
 		</Router>
 		),document.querySelector('#reactx'));
