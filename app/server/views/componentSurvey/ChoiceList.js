/*this component will let us build a one choice list field*/
/*then when submit button is clicked (from parent) we send the data to server*/
import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Option from './Option'
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Divider from 'material-ui/Divider';
var optionsTab =[]
class ChoiceList extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			optionNum:0,
			question:'what?',
			checkOrRadio:'check',
			optionTab:[]
		}
		this.handleAddOption= this.handleAddOption.bind(this);
		this.handleDeleteOption= this.handleDeleteOption.bind(this);
		this.getOptions= this.getOptions.bind(this);

	}
	componentDidUpdate() {
		//if submit button is clicked then send thee data to server
		console.log('here')
		var formedSurvey={
			surveyName:this.props.surveyname,
			question:this.state.question,
			checkOrRadio:this.state.checkOrRadio,
			options:this.state.optionTab
		}
		console.log(formedSurvey)
		if (this.props.clickedSubmit) {
				$.ajax({
			      url: '/createSurvey',
			      dataType: 'json',
			      type: 'POST',
			      data: formedSurvey

			    });	
		}
	}
	/*this getOptions is passed to Options Component as prop to get the option*/
	
	getOptions(option,index){
		optionsTab[index]=option
		this.setState({optionTab:optionsTab});
	}

	handleAddOption(){
		this.setState({optionNum:this.state.optionNum + 1});
	}

	handleDeleteOption(){
	this.state.optionNum > 0 ? this.setState({optionNum:this.state.optionNum - 1}):console.log('add Row first');
	}

	question = (e) => this.setState({question:e.target.value});
	handleChange = (e) => this.setState({checkOrRadio:e.currentTarget.value});

	render(){
		var rows = []
		for (var i = 0; i < this.state.optionNum; i++) {
			rows.push(<Option 
						key={i} 
						numberOp={i+3} 
						getOptions={this.getOptions}
					 />)
		}
		return(
			<div>
					<div className='choicelist'>
						<h4>Now what's your question </h4>
						<TextField
	     				 hintText="Question ?"
		        		 onChange={this.question}
	     				 fullWidth={true}
	    				/>	
					</div>

					{/*to choose whether survey you want with one or many responses*/}
					<div className='choicelist'>
					<h4>Choice List method</h4>
					 <RadioButtonGroup 
					  	name="selection"
					  	onChange={this.handleChange} 

					  >
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
					<Option 
					label='option 1' 
					getOptions={this.getOptions} 
					numberOp={1}
					/>
					
					<Option 
					label='option 2' 
					getOptions={this.getOptions} 
					numberOp={2}
					/>
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
					<br/><br/>
			</div>
		);
	}
};



export default ChoiceList
