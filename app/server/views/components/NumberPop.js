import React from 'react';
import Paper from 'material-ui/Paper';

 const NumberPop = ()=>{
	    let numberst = 'col-md-4 textst';
	return(
		 <div >
                              <div className=" col-md-4"></div>
                              <Paper 
                              	className={numberst}
                              	style={{ backgroundColor: '#BBDEFB',marginTop:'15px'}}
                              >
                              <p className='texteffect'>number here</p> 
                              </Paper>
                              <div className=" col-md-4"></div>
                              
                     </div>
	);

}
export default NumberPop

