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
		numeral(som).format('0.0a')
		this.state = {
			count:'...'
		}
		this.handleCheck=this.handleCheck.bind(this)
	}
	handleCheck(e){
		console.log(e.currentTarget.value)
		const val =e.currentTarget.value
		var som = 0

		if (val ==='both') {
			data.map((result)=>{
				som+=JSON.parse(result.quinz)
			})
			this.setState({
				count:numeral(som).format('0.0a')
			});
		} else if(val ==='female'){
			/*data.map((result)=>{
				if (!JSON.parse(result.male)) {
					som=JSON.parse(result.quinz)
				}
			})*/
			som = data[1].quinz
			this.setState({
				count:numeral(som).format('0.0a')
			});
		}else{
			som = data[0].quinz
			this.setState({
				count:numeral(som).format('0.0a')
			});
		}

	}

	render(){
		return(
			<div>
			<NumberPop count={this.state.count}/>
			
			{/*Checkbox for sexe*/}
			{/*style={{dislay:'none'}}*/}
			<div >
			<Subheader>Sexe</Subheader>
			
			<RadioButtonGroup  name="questions" className='boutonRadio'
			 onChange={this.handleCheck} defaultSelected='both'>
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
			      label="Simple"
			    />
		    </div>
		    <br/>
		    <Divider/>


			</div>
		);
	}
};

export default OverviewCard
