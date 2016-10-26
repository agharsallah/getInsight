/*this component will let us build a one choice list field*/
import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Option from './Option'
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Divider from 'material-ui/Divider';


class ChoiceList extends React.Component{
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
					<div className='choicelist'>
						<h4>Now what's your question </h4>
						<TextField
	     				 hintText="Question ?"
	     				 fullWidth={true}
	    				/>	
					</div>

					{/*to choose whether survey you want with one or many responses*/}
					<div className='choicelist'>
					<h4>Choice List method</h4>
					 <RadioButtonGroup name="selection">
					      <RadioButton
					      	style={{marginTop:'11px'}}
					      	labelStyle={{fontSize:'15px'}}
					        value="Radio"
					        label="user selects only one option"
					      />
					      <RadioButton
					      	style={{marginTop:'11px'}}
					      	labelStyle={{fontSize:'15px'}}
					        value="Checkbox"
					        label="user can selects many options"
					      />
				       </RadioButtonGroup>
				    </div>

					<h4 className='choicelist' >Options</h4>
					<Option label='option 1'/>
					<Option label='option 2'/>
					{rows}

					<div className='choicelist'>
						{/*to add another option button*/}
						<RaisedButton 
						 style={{marginLeft:'20%',marginRight:'5%'}}
						 label="Add another option"
						 primary={true}
						 onTouchTap={this.handleAddOption}
						/>
						
						{/*to delete another option button*/}
						<RaisedButton
						 style={{marginRight:'15%',marginLeft:'10%'}}
						 label="Delete Last option"
						 secondary={true}
						 onTouchTap={this.handleDeleteOption}
						/>
					</div>
			</div>
		);
	}
};



export default ChoiceList
