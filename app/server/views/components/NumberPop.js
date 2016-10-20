import React,{Component} from 'react';
import Paper from 'material-ui/Paper';

class NumberPop extends Component{

	render(){
		let numberst = 'col-md-5 textst';
		let display  = this.props.checked ?'block':'none';
		let col  = this.props.checked ?'col-md-1':'col-md-6';
		return(
			<div >
             	<div className=" col-md-1" style={{height: '100px'}}></div>
             	{/*this paper to show number*/}
             	<div>
	             	<Paper 
	                   className={numberst}
	                   zDepth={0}
	                >
	             	<h3>the number of {this.props.radioVal}</h3>
	             	<p className='texteffect'>{this.props.count}</p> 
	             	</Paper>
	             	{/*this paper to show details*/}
	             	<Paper 
	                   className={numberst}
	                   zDepth={0}
	                   style={{display: display,height: '100px'}}
	                >
	             	<p className='texteffect'>{this.props.countD}</p> 
	             	</Paper>
             	</div>
             	<div className={col} style={{height: '100px'}}></div>
    		</div>
		);
	}
};
export default NumberPop

