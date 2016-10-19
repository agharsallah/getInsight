import React from 'react';
import {RadioGroup, Radio} from 'react-radio-group'

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
            <div className='col-md-12'>
                       <div className=" col-md-4 ">
                              
                            <Paper >
                              <List>
                                <Subheader>Questions</Subheader>
                                 <RadioButtonGroup 
                                   name="questions" 
                                   className='boutonRadio'
                                   onChange={this.handleChange}
                                 >
                                    {resultRows}

                                 </RadioButtonGroup>
                              </List>  
                            </Paper>
                        
                        </div>
                        
                     <div className=" col-md-8">
                           <div className="panel panel-default">
                               <div className="panel-heading"><h4>hi</h4></div>
                           </div>
                     </div>
            </div>    
         </div>

      );
   }
}

export default Sidebar;