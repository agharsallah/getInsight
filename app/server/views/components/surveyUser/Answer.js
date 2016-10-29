import React from 'react';
import io from'socket.io-client' ;
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Question from './Question'
var _ = require ('lodash');

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';

class Answer extends React.Component{
		constructor(props) {
		super(props);
		this.state={
			surveyParts:[{
    "userId" : "580ec099a6158a9c0a9c2879",
    "userName" : "admin",
    "surveyName" : "potato survey",
    "question" : "do u eat potato ?",
    "checkOrRadio" : "Checkbox",
    "options" : [ 
        "maybe", 
        "yes", 
        "no"
    ]
}]
		}
		this.socket = io();
	}
	    componentWillMount() {

    		//gets the Survey parts from the DB
    		this.socket.emit('surveyToAnswerId',this.props.params.surveyId)
			this.socket.on('surveyParts', (surveys) => {
                 this.setState({surveyParts:surveys});
      		})
  		}
	render(){
		const survey = this.state.surveyParts;
		const options = survey[0].options
		console.log(options)
/*		var radioItem = survey[0].options.map((radioLabel)=>{
	      	return (
	          <RadioButton key={survey._id}  label={radioLabel}  />
	      	);
  		});*/
  		var checkboxItem = options.map((checkboxLabel)=>{
	      	return (
	          <Checkbox key={_.uniqueId()}  label={checkboxLabel}  />
	      	);
  		});
		return(
			<MuiThemeProvider>
			<div>
			<div className='col-md-2'></div>
			<Paper className='col-md-8'>
					<div className='choicelist'>
						<p className='title'>{survey[0].surveyName}</p>
					</div>
					<Divider/>

					{/*<Question surveyQuestion={survey} />*/}
					<div className='choicelist'>
						<h4 >{survey[0].question}</h4>
					</div>
					{checkboxItem}
{/*			{survey[0].checkOrRadio === 'Radio'?console.log('radio'):{checkboxItem}}
*/}
			</Paper>
			<div className='col-md-2'></div>
			</div>
			</MuiThemeProvider>
		);
	}
};
export default Answer