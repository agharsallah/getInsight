import React from 'react';
import Paper from 'material-ui/Paper';
import OverviewCard from './OverviewCard'
import PerCity from './PerCity'
import PerSocial from './PerSocial'


const Card = (props)=>{

	return(
		<div>
			<h2>{props.selectedIs}</h2>
			{console.log(props.selectedIs)}
			{props.selectedIs==='Population Overview' ? <OverviewCard/> :(props.selectedIs==='Population per City'?<PerCity/>:<PerSocial/>)}/
		</div>
	);

}
export default Card
