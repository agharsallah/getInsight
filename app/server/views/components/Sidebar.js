import React from 'react';
import {RadioGroup, Radio} from 'react-radio-group'
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
   	let cssclassNamees = 'col-md-10'
       var resultRows = this.props.questions.map(function(result){
            return (
               <div>
               <input 
                              value={result.Question} 
                              checked={this.state.selectedValue === result.Question}
                              type="radio" 
                              onChange={this.handleChange}/>
                              <label>{result.Question}</label>
                              </div>
            );
       },this);
      return (
         <div>
         <div className='col-md-1'></div>
         <div className={cssclassNamees}>
            <div className="container">
               <div className="row">
                    <div className=" well col-xs-6 col-md-3 ">
                           
                     {resultRows}
                     

                    </div>
                  <div className=" col-xs-12 col-sm-4 col-md-8">
                      <h3><span className="glyphicon glyphicon-align-left" aria-hidden="true"></span> Lab / Radiologi</h3>
                        <div className="panel panel-default">
                            <div className="panel-heading"><h4>hi</h4></div>
                        </div>
                  </div>
               </div>
            </div>

         </div>
         <div className='col-md-1'></div>
         </div>
      );
   }
}

export default Sidebar;