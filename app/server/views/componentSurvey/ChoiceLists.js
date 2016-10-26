/*this component will let us build a one choice list field*/
import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import ChoiceList from './ChoiceList'
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Divider from 'material-ui/Divider';


class ChoiceLists extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			questionNum:0
		}
		this.handleDeleteQuestion= this.handleDeleteQuestion.bind(this);
		this.handleAddQuestion= this.handleAddQuestion.bind(this);
		this.handleSubmitSurvey= this.handleSubmitSurvey.bind(this);

	}
	handleAddQuestion(){
		this.setState({questionNum:this.state.questionNum + 1});
	}
	handleDeleteQuestion(){
	this.state.questionNum > 0 ? this.setState({questionNum:this.state.questionNum - 1}):console.log('add Row first');
	}

	handleSubmitSurvey(){
	}
	render(){
		var rows = []
		for (var i = 0; i < this.state.questionNum; i++) {
			rows.push(<ChoiceList key={i} numberOp={i+1}/>)
		}
		return(
			<div>
				<div className='col-md-2'></div>
				<Paper className='col-md-8' style={{height:'auto'}} >
					<div className='choicelist'>
					<h4>Choose the name of the survey</h4>
					<TextField
     				 hintText="Title"
     				 fullWidth={true}
    				/>	
					</div>
						{rows}	

					<div className='choicelist'>
						{/*to add another Question button*/}
						<RaisedButton 
						 style={{marginLeft:'8%'}}
						 label="Add another Question"
						 onTouchTap={this.handleAddQuestion}
						 backgroundColor="#D500F9"
						/>
						
						{/*to delete another option button*/}
						<RaisedButton
						 style={{marginLeft:'8%'}}
						 label="Delete Last Question"
						 onTouchTap={this.handleDeleteQuestion}
						 backgroundColor="#FF1744"
						/>

						{/*to submit survey*/}
						<RaisedButton
						 style={{marginLeft:'8%'}}
						 label="Submit Survey"
						 onTouchTap={this.handleDeleteQuestion}
						 backgroundColor="#76FF03"
						/>
					</div>		
					<br/><br/>
				</Paper>
				<div className='col-md-2'></div>

			</div>
		);
	}
};



export default ChoiceLists