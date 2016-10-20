import React from 'react';
import NumberPop from './NumberPop'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class Sidebar extends React.Component {
   constructor(props) {
      super(props);
      this.state={
         selectedValue : ''
         };
         this.handleChange=this.handleChange.bind(this)
   }
   
   handleChange(e){
      console.log('changed')
      this.setState({
         selectedValue:e.currentTarget.value
      });
   }
   render() {
       var resultRows = this.props.questions.map(function(result){
            return (
              
                <RadioButton
                              value={result.Question} 
                              label={result.Question}
                              style={{marginLeft:'15px',marginTop:'7px'}}
                  />
              
            );
       },this);
      
      return (
         <div>
            <div className='col-md-12' style={{width:'99%'}} >
                       <div className=" col-md-3 ">
                              
                            <Paper zDepth={3} style ={{height : '500px'}} >
                              <List>
                                <Subheader>Subject</Subheader>
                                 <RadioButtonGroup name="questions" className='boutonRadio' onChange={this.handleChange}>
                                    
                                    {resultRows}

                                 </RadioButtonGroup>
                              </List>  
                            </Paper>
                        </div>

                        
                      <Paper className=" col-md-9" style={{height:'500px'}} zDepth={3}>
                        <MuiThemeProvider>
                          <NumberPop />
                        </MuiThemeProvider>
                        </Paper>

            </div>    
         </div>

      );
   }
}

export default Sidebar;