import React from 'react';
import Paper from 'material-ui/Paper';
import OneSurvey from './OneSurvey'

class ManySurveys extends React.Component{
	render(){
		var surveyItem = this.props.AllSurveys.map((survey)=>{
	      	return (
	          <OneSurvey key={survey._id}  survey={survey} />
	      	);
  		});
		return(
			<div>
				<div className="col-md-2"></div>
				{surveyItem}
				<div className="col-md-2"></div>
			</div>
		);
	}
};

export default ManySurveys