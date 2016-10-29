import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

class Sidebar extends React.Component {
   constructor(props) {
      super(props);
      this.state={
        checkValueCity:'',
        checkValueAge:''
      }
         this.handleChangeCity=this.handleChangeCity.bind(this)
         this.handleChangeAge=this.handleChangeAge.bind(this)
         this.handleMerge=this.handleMerge.bind(this)
   }
   
   handleChangeCity(e,isInputChecked){
    if (isInputChecked) {
    this.setState({checkValueCity:e.currentTarget.value});}
    else{this.setState({checkValueCity:''});}
   }  
    handleChangeAge(e,isInputChecked){
      if (isInputChecked) {
        this.setState({checkValueAge:e.currentTarget.value});
      }else{this.setState({checkValueAge:''});}
    }
   handleMerge(){
    /*so when change happens on the radio boxes I send the
     value to the function that I get as a prop from App.js through param*/
           this.props.onSideChange(this.state.checkValueCity,this.state.checkValueAge)
   }
   render() {
/*       var resultRows = this.props.questions.map(function(result){
            return (
              
                <RadioButton
                              value={result.Question} 
                              label={result.Question}
                              style={{marginLeft:'15px',marginTop:'7px'}}
                  />
              
            );
       },this);*/
      
      return (
         <div>

                            <Paper zDepth={3} style ={{height : '500px'}} >
                              <List>
                                <Subheader>Domain X</Subheader>
                                {/* <RadioButtonGroup 
                                  name="questions" 
                                  className='boutonRadio' 
                                  onChange={this.handleChange} 
                                  defaultSelected='Population Overview'>
                                    
                                    {resultRows}

                                 </RadioButtonGroup>*/}
                                      <Checkbox
                                        value='Tunis'
                                        label="this will be autocomplete of cities "
                                        style={{marginLeft:'10px',marginTop:'15px'}}
                                        labelStyle={{fontSize:'15px'}}
                                        onCheck={this.handleChangeCity} 
                                      />
                                      <Checkbox
                                        value='0to4'
                                        label="this will be dropdown of age "
                                        style={{marginLeft:'10px',marginTop:'15px'}}
                                        labelStyle={{fontSize:'15px'}}
                                        onCheck={this.handleChangeAge} 
                                      />
                                      <RaisedButton 
                                       style={{marginLeft:'30%',marginTop:'15px'}}
                                       label="Merge"
                                       onTouchTap={this.handleMerge}
                                       primary={true}
                                      />
                              </List>  
                            </Paper>
          </div>

      );
   }
}

export default Sidebar;