import React,{Component} from 'react';
import Paper from 'material-ui/Paper';

class NumberPop extends Component{

	render(){
		let numberst = 'col-md-4 textst';
		return(
			<div >
             	<div className=" col-md-4" style={{height: '100px'}}></div>
             	<Paper 
                   className={numberst}
                   zDepth={0}
                >
             	<p className='texteffect'>{this.props.count}</p> 
             	</Paper>
             	<div className=" col-md-4" style={{height: '100px'}}></div>
    		</div>
		);
	}
};
export default NumberPop

