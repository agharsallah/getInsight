
import React from 'react';
import data from './merged/question.js'
import OverviewCard from './merged/OverviewCard';
import Sidebar from './merged/Sidebar'
import Paper from 'material-ui/Paper';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


  
class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state={
      selectedSide:'Population Overview',
      checkValueCity:'',
      checkValueAge:''
    };

  }
      sideChange(checkedCity,checkedAge){
          this.setState({
            checkValueCity:checkedCity,
            checkValueAge:checkedAge
          });
      }

   render() {
    const sideChange = (checkedCity,checkedAge)=>{this.sideChange(checkedCity,checkedAge)}
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
                    <OverviewCard checkedCity={this.state.checkValueCity} checkValueAge={this.state.checkValueAge} />
                </Paper>

            </div>
          </MuiThemeProvider>

         </div>
      );
   }
}

export default App;