import React from 'react';
import data from './question.js'
import Card from './Card';
import Sidebar from './Sidebar'
import Paper from 'material-ui/Paper';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


	
class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state={
      selectedSide:''
    };

  }
      sideChange(clicked){
          this.setState({
            selectedSide:clicked
          });
      }

   render() {
    const sideChange = (clicked)=>{this.sideChange(clicked)}
      return (
         <div>
         	<MuiThemeProvider>
         		<div className='col-md-12' style={{width:'99%'}} >
                  
                  {/*sidebar*/}
                  <div className=" col-md-3" >
         			<Sidebar questions={data.question} onSideChange={sideChange}/>
         		  </div> 
         		
         		{/*right part now became container to diffrent subject*/}
         		<Paper className=" col-md-9" style={{height:'auto'}} zDepth={3}>
                    <Card selectedIs={this.state.selectedSide} />
                </Paper>

         		</div>
         	</MuiThemeProvider>

         </div>
      );
   }
}

export default App;