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
			optionNum:0
		}
		this.handleAddOption= this.handleAddOption.bind(this);
		this.handleDeleteOption= this.handleDeleteOption.bind(this);

	}
	handleAddOption(){
		this.setState({optionNum:this.state.optionNum + 1});
	}

	handleDeleteOption(){
	this.state.optionNum > 0 ? this.setState({optionNum:this.state.optionNum - 1}):console.log('add Row first');
	}
	render(){
		var rows = []
		for (var i = 0; i < this.state.optionNum; i++) {
			rows.push(<Option key={i} numberOp={i+3}/>)
		}
		return(
			<div>
				<div className='col-md-2'></div>
				<Paper className='col-md-8' style={{height:'800px'}} >
					<div className='choicelist'>
					<h4>Choose the name of the survey</h4>
					<TextField
     				 hintText="Title"
     				 fullWidth={true}
    				/>	
					</div>
						<ChoiceList/>			
					
				</Paper>
				<div className='col-md-2'></div>

			</div>
		);
	}
};



export default ChoiceLists