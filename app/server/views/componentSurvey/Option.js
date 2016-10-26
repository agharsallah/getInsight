/*this small component will allow to add an option field in the form builder*/
import React from 'react';
import TextField from 'material-ui/TextField';

class Option extends React.Component{
	//constructor here
	render(){
		const labell = 'option '+ this.props.numberOp
		return(
		<div className='choicelist'>
			<TextField
     			hintText={(this.props.label!== undefined)?this.props.label:labell}
     			fullWidth={true}
    		/>	
		</div>
	);
	}
};

export default Option