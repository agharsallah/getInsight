import React,{Component} from 'react';
import Paper from 'material-ui/Paper';

class NumberPop extends Component{

	render(){
		let numberst = 'col-md-4 textst';
		let numberDetailst = 'col-md-4 textst';
		let display  = this.props.checked ?'block':'none';
		let col  = 'col-md-1';
		return(
			<div >
             	<div className=" col-md-3" style={{height: '150px'}}></div>
             	
             	{/*this paper to show number*/}
	             	<Paper 
	                   className={numberst}
	                   zDepth={0}
	                >
	             	<h3 style={{color:'green'}}> {this.props.radioVal}</h3>
	             	<p className='texteffect'>{this.props.count}</p> 
	             	</Paper>
	             	
	             {/*this paper to show details*/}
	             	<Paper 
	                   className={numberDetailst}
	                   zDepth={0}
	                   style={{height: '150px'}}
	                >
	                <h3 style={{color:'green'}}>Details</h3>
	             	<p className='detaileffect'>{this.props.countD}</p> 
	             	<p className='detaileffect'>{this.props.percentege}</p> 
	             	</Paper>
             	<div className={col} style={{height: '150px'}}></div>
    		</div>
		);
	}
};
export default NumberPop

