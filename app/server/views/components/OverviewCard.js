import React,{Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import NumberPop from './NumberPop';
import data from './data/data'
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import AssociatedPie from './AssociatedPie'
import AssociatedChart from './AssociatedChart'
var numeral = require('numeral');

class OverviewCard extends Component{
	constructor(props) {
		super(props);
		this.state = {
			count:'11.2 m',
			percentege:'100%',
			som:'',
			checked:false,
			radioVal:'total pop is'
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
		var per =''
		const quinz="2015"
		/*'quinz' could be coming from the view to indicate the year */
		if (val ==='both') {
			som = data[0].female+data[0].male;
			this.setState({
				som:numeral(som).format('0,0')+' K',
				count:numeral(som).format('0.0a'),
				radioVal:'total pop is :',
				percentege:numeral(1).format('0%')
			});
		} else if(val ==='female'){

			som = data[0].female;
			per=som/(som+data[0].male);
			this.setState({
				som:numeral(som).format('0,0')+" K",
				count:numeral(som).format('0.0a'),
				radioVal:'Females is :',
				percentege:numeral(per).format('0.0%')

			});
		}else{
			som = data[0].male;
			per=som/(som+data[0].female);
			this.setState({
				som:numeral(som).format('0,0')+" K",
				count:numeral(som).format('0.0a'),
				radioVal:'Males is',
				percentege:numeral(per).format('0.0%')

			});
		}

	}

	render(){
		return(
			<div >
			{/*this component shows the number|% of population */}
			<NumberPop 
				count={this.state.count} 
				checked={this.state.checked}
				countD ={this.state.som}
				radioVal={this.state.radioVal}
				percentege={this.state.percentege}
			/>
			
			{/*Checkbox for sexe*/}
			{/*style={{dislay:'none'}}*/}
			<div >
			
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
			      style={{marginLeft:'20px'}}
			    />
		    </div>
		    <br/>
		    <Divider/>

		{/*associated chart*/}
		<Subheader>associated chart (2015)</Subheader>
			<AssociatedPie data={data[4]} ></AssociatedPie>
		<Divider/>
		
		{/*growth chart*/}
		<Subheader>growth chart</Subheader>
			<div className='contain'>
			<AssociatedChart data={data}></AssociatedChart>
			</div>

			</div>
		);
	}
};

export default OverviewCard
