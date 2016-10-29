import React from 'react';
import ManyServeys from './/ManySurveys';
import io from'socket.io-client' ;

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class Survey extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			AllSurveys:[]
		}
		this.socket = io();
	}
	    componentWillMount() {
    		this.socket.on('connect',this.connect.bind(this));
    
   			 //gets the Survey object from the DB
			this.socket.on('AllSurveys', (surveys) => {
                 this.setState({AllSurveys:surveys});
      		})
  		}
  		
  		connect(){
   		 console.log('connected');
 		 }

	render(){
		return(
			<MuiThemeProvider>
			<ManyServeys AllSurveys={this.state.AllSurveys} />
         	</MuiThemeProvider>

		);
	}
};
export default Survey
