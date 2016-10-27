import React from 'react';
import Paper from 'material-ui/Paper';

class OneSurvey extends React.Component{
	render(){
		const survey = this.props.survey

		return(
				<div className="col-md-8">
				<p>{survey.surveyName}</p>
				</div>
		);
	}
};

export default OneSurvey