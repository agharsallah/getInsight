import React from 'react';
import data from './question.js'
import OverviewCard from './OverviewCard';
import Sidebar from './Sidebar'
import Paper from 'material-ui/Paper';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


	
class App extends React.Component {
   render() {
console.log( data)
      return (
         <div>
         	<MuiThemeProvider>
         		<div className='col-md-12' style={{width:'99%'}} >
                  
                  {/*sidebar*/}
                  <div className=" col-md-3" >
         			<Sidebar questions={data.question} />
         		  </div> 
         		
         		{/*right part*/}
         		<Paper className=" col-md-9" style={{height:'auto'}} zDepth={3}>
                    <OverviewCard />
                </Paper>

         		</div>
         	</MuiThemeProvider>

         </div>
      );
   }
}

export default App;