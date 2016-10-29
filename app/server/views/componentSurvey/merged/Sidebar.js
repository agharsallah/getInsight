import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class Sidebar extends React.Component {
   constructor(props) {
      super(props);
         this.handleChange=this.handleChange.bind(this)
   }
   
   handleChange(e){
    /*so when change happens on the radio boxes I send the
     value to the function that I get as a prop from App.js through param*/
      this.props.onSideChange(e.currentTarget.value)
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

                            <Paper zDepth={3} style ={{height : '500px'}} >
                              <List>
                                <Subheader>Population</Subheader>
                                 <RadioButtonGroup 
                                  name="questions" 
                                  className='boutonRadio' 
                                  onChange={this.handleChange} 
                                  defaultSelected='Population Overview'>
                                    
                                    {resultRows}

                                 </RadioButtonGroup>
                              </List>  
                            </Paper>
          </div>

      );
   }
}

export default Sidebar;