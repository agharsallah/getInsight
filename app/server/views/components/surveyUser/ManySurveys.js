import React from 'react';
import Paper from 'material-ui/Paper';
import OneSurvey from './OneSurvey'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class ManySurveys extends React.Component{
	render(){
		var surveyItem = this.props.AllSurveys.map((survey)=>{
	      	return (
	          <OneSurvey key={survey._id}  survey={survey}  />
	      	);
  		});
		return(
			<div>
		<Table multiSelectable={false} >

		    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
		      
		      <TableRow striped={false} >
		        <TableHeaderColumn style={{textAlign:'center',fontSize:'15px'}}>Survey Name			</TableHeaderColumn>
		        <TableHeaderColumn style={{textAlign:'center',fontSize:'15px'}}>Created by		</TableHeaderColumn>
		        <TableHeaderColumn style={{textAlign:'center',fontSize:'15px'}}>points		</TableHeaderColumn>
		        <TableHeaderColumn style={{textAlign:'center',fontSize:'15px'}}>Action		</TableHeaderColumn>
		      </TableRow>
		    </TableHeader>
		    
		    <TableBody displayRowCheckbox={false} stripedRows={false} showRowHover={true}>

			{surveyItem}

		    </TableBody>
	  </Table>
	  			

			</div>	

		);
	}
};

export default ManySurveys