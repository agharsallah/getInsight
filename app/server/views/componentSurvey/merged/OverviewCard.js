import React,{Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import NumberPop from './NumberPop';

import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
/*import AssociatedPie from './AssociatedPie'
import AssociatedChart from './AssociatedChart'*/
var numeral = require('numeral');
import popPerCity from './data/popPerCity'
import popPerTranche from './data/popPerTranche'

class OverviewCard extends Component{
	constructor(props) {
		super(props);
		this.state = {
			count:'',
			percentege:'',
			som:'',
			checked:true,
			radioVal:'choose an option(s) from sidebar',
			
			checkValueCity:'',
        	checkValueAge:''

		}
		this.handleCheck=this.handleCheck.bind(this)
		this.handleDetail=this.handleDetail.bind(this)
	}
	componentWillMount() {
		console.log(this.props.checked)
		this.setState({checked:this.props.checked});
	}

	componentDidUpdate() {
				//if one of the checkbox values is changed from empty or both show me the number
			if (this.state.checked) {
				if ((this.props.checkedCity!=='') || (this.props.checkValueAge!=='')) {
					if (this.props.checkedCity!=='') {
						const city = this.props.checkedCity
						var som = popPerCity[0][city]
						var total = popPerCity[0].total.replace(/,/g , "");
						var per = (parseInt(som)/parseInt(total))
						console.log(total)
						this.setState({checkValueCity:this.props.checkedCity,});
						this.setState({checked:false});
			this.setState({
				som:numeral(som).format('0,0')+' K',
				count:numeral(som).format('0.0a'),
				radioVal:'the number of pop in '+city,
				percentege:numeral(per).format('0%')
			});
					}else if(this.props.checkValueAge!==''){
						this.setState({checkValueAge:this.props.checkValueAge});
					}else{
						this.setState({checkValueCity:this.props.checkedCity});
						this.setState({checkValueAge:this.props.checkValueAge});
					}
				}
			}
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
				radioVal:'Female is :',
				percentege:numeral(per).format('0.0%')

			});
		}else{
			som = data[0].male;
			per=som/(som+data[0].female);
			this.setState({
				som:numeral(som).format('0,0')+" K",
				count:numeral(som).format('0.0a'),
				radioVal:'Male is',
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
			
			{/*Checkbox for population sexe*/}
			{/*style={{dislay:'none'}}*/}
{/*			<div >
			
			<RadioButtonGroup 
			defaultSelected='both' 
			name="questions" 
			className='boutonRadio'
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
		    <Divider/>*/}

		{/*associated chart*/}
		{/*<Subheader>associated chart (2015)</Subheader>
			<AssociatedPie data={data[4]} ></AssociatedPie>
		<Divider/>*/}
		
		{/*growth chart*/}
		
		<Subheader>growth chart</Subheader>
		Under Dev
{/*			<div className='contain'>
			<AssociatedChart data={data}></AssociatedChart>
			</div>*/}

			</div>
		);
	}
};

export default OverviewCard
