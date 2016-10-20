import React,{Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import NumberPop from './NumberPop';
import data from './data/data'
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
var numeral = require('numeral');

class OverviewCard extends Component{
	constructor(props) {
		super(props);
		this.state = {
			count:'...',
			som:'',
			checked:false,
			radioVal:''
		}
		this.handleCheck=this.handleCheck.bind(this)
		this.handleDetail=this.handleDetail.bind(this)
	}
	handleDetail(){
		console.log(this.state.checked)

		var check = ! this.state.checked;
		this.setState({
			checked:check,
		});
	}
	handleCheck(e){
		const val =e.currentTarget.value
		var som = 0 /*som is a var that contains the number of population */

		/*'quinz' could be coming from the view to indicate the year */
		if (val ==='both') {
			data.map((result)=>{
				som+=JSON.parse(result.quinz)
			})
			this.setState({
				som:numeral(som).format('0,0')+' K',
				count:numeral(som).format('0.0a'),
				radioVal:'total pop is :'
			});
		} else if(val ==='female'){
			/*data.map((result)=>{
				if (!JSON.parse(result.male)) {
					som=JSON.parse(result.quinz)
				}
			})*/
			som = data[1].quinz
			this.setState({
				som:numeral(som).format('0,0')+" K",
				count:numeral(som).format('0.0a'),
				radioVal:'Females is '
			});
		}else{
			som = data[0].quinz
			this.setState({
				som:numeral(som).format('0,0')+" K",
				count:numeral(som).format('0.0a'),
				radioVal:'Males is'
			});
		}

	}

	render(){
		return(
			<div>
			{/*this component shows the number|% of population */}
			<NumberPop 
				count={this.state.count} 
				checked={this.state.checked}
				countD ={this.state.som}
				radioVal={this.state.radioVal}
			/>
			
			{/*Checkbox for sexe*/}
			{/*style={{dislay:'none'}}*/}
			<div >
			<Subheader>Sexe</Subheader>
			
			<RadioButtonGroup  name="questions" className='boutonRadio'
			 onChange={this.handleCheck} >
			<RadioButton
		      label="Female"
		      value="female"
		      style={{marginLeft:'10px'}}
		    />
		    <RadioButton
		      label="Male"
		      style={{marginLeft:'10px'}}
		      value="male"
		    />
		    <RadioButton
		      label="Both"
		      value="both"
		      style={{marginLeft:'10px'}}
		    />
		    </RadioButtonGroup>
		        <Checkbox
			      label="details"
			      onCheck={this.handleDetail}
			      checked={this.state.checked}
			    />
		    </div>
		    <br/>
		    <Divider/>


			</div>
		);
	}
};

export default OverviewCard
