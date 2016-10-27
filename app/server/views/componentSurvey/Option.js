/*this small component will allow to add an option field in the form builder*/
/*then the data written in the option is sent to the parent through a props.function*/
import React from 'react';
import TextField from 'material-ui/TextField';

class Option extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			option:''
		}
		this.localOptionFun= this.localOptionFun.bind(this);
	}


	localOptionFun(e){
		//push to a array the value of this option with 
		//the number of option as index to the getoption function
		var index = this.props.numberOp;
		var option=e.currentTarget.value
		this.props.getOptions(option,index);
		this.setState({option:e.currentTarget.value});
	}
	render(){
		const labell = 'option '+ this.props.numberOp
		return(
		<div className='choicelist'>
			<TextField
     			hintText={(this.props.label!== undefined)?this.props.label:labell}
     			fullWidth={true}
     			onChange={this.localOptionFun}
    		/>	
		</div>
	);
	}
};

export default Option