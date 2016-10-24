import React,{Component} from 'react';
import  { PieChart, Pie, Sector, Cell } from 'Recharts'
var numeral = require('numeral');

class AssociatedPie extends Component{
	constructor(props) {
		super(props);
		this.state={
			activeIndex:0
		}
		this.onPieEnter=this.onPieEnter.bind(this)
	}
	onPieEnter(data, index) {
		console.log(index)
		this.setState({
			activeIndex: index
		});

  	}
	render(){
    var data2 = this.props.data;
    console.log(data2)
    var data=[{name:'male',2015:data2.male},{name:'female',2015:data2.female}]
     const COLORS = ['#0088FE',  '#FF8042'];
const renderActiveShape = (props) => {

	 const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  /*evaluated value to a specefic format than send it to sector  */
  const val =numeral(value).format('0,0')+" K"
  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
        {val}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
}
		return(
			<div>
			<PieChart width={800} height={300}  onMouseEnter={this.onPieEnter}>
        <Pie
          data={data} 
          cx={400} 
          cy={150} 
          labelLine={false}
          innerRadius={70}
          outerRadius={90} 
          fill="#8884d8"
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          isAnimationActive={false}
          valueKey="2015"
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          	}
        </Pie>
      </PieChart>
			</div>
		);
	
};


};
export default AssociatedPie

