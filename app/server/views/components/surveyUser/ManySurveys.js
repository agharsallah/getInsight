import React from 'react';
import Paper from 'material-ui/Paper';
import OneSurvey from './OneSurvey'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class ManySurveys extends React.Component{
	render(){
		var surveyItem = this.props.AllSurveys.map((survey)=>{
	      	return (
	          <OneSurvey key={survey._id}  survey={survey} />
	      	);
  		});
		return(
		<Table multiSelectable={false} >

		    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
		      
		      <TableRow striped={false} >
		        <TableHeaderColumn >Survey Name			</TableHeaderColumn>
		        <TableHeaderColumn >Created by		</TableHeaderColumn>
		        <TableHeaderColumn >Action		</TableHeaderColumn>
		        
		      </TableRow>
		    </TableHeader>
		    
		    <TableBody displayRowCheckbox={false} stripedRows={false} showRowHover={true}>

			{surveyItem}

		    </TableBody>
	  </Table>
				

		);
	}
};

export default ManySurveys