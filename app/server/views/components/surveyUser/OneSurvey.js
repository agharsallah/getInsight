import React from 'react';
import Paper from 'material-ui/Paper';
import {TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import {pink500,purple500,blue500} from 'material-ui/styles/colors';
import { Link } from 'react-router';

class OneSurvey extends React.Component{
	render(){
		const {survey,...otherProps} = this.props;
		const linko = '/answer/'+survey._id;

		return(

				<TableRow { ...otherProps } >	
		{otherProps.children[0] /* checkbox passed down from Table-Body*/}

 	      	<TableRowColumn style={{textAlign:'center',fontSize:'15px'}}>{survey.surveyName}</TableRowColumn>
 	      	<TableRowColumn style={{textAlign:'center',fontSize:'15px'}}>{survey.userName}</TableRowColumn>
 	      	<TableRowColumn style={{textAlign:'center',fontSize:'15px'}}>20 pt</TableRowColumn>

 	      	<TableRowColumn style={{textAlign:'center'}}>
 	      		<RaisedButton 
 	      				label="Answer" 
						labelStyle={{color:'white'}} 
 	      				backgroundColor={blue500}
 	      				containerElement={<Link to={linko}/>}

 	      		/>
 	      	</TableRowColumn>
 	    </TableRow>
		);
	}
};

export default OneSurvey