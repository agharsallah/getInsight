import React,{Component} from 'react';
import  { PieChart, Pie, Sector, Cell } from 'Recharts'


class AssociatedPie extends Component{

	render(){
const data = [{name: 'male', value: 5557968}, {name: 'female', value: 5596404}];
const COLORS = ['#0088FE',  '#FF8042'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>

  );
};
		return(
			<div>
			<PieChart width={800} height={400}  onMouseEnter={this.onPieEnter}>
        <Pie
          data={data} 
          cx={400} 
          cy={100} 
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={90} 
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
			</div>
		)
	}
};
export default AssociatedPie

