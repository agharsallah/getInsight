import React,{Component} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid,Tooltip,Legend,ResponsiveContainer} from 'Recharts';
const AssociatedChartPerCity = (props)=>{

const data = props.data;
/*[
	{name:'male',2011:5327337,	2012:5379282,	2013:5431735,	2014:5484581,	2015:5557968},
	{name:'female',2011:5347083,	2012:5404972,	2013:5463485,	2014:5522745,	2015:5596404,}
];*/
  	return (
    	<ResponsiveContainer >
    	<LineChart  data={data} style={{marginLeft:'10%'}}>
       <XAxis dataKey="year" padding={{left: 30, right: 30}}/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="male" stroke="#0088FE" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="female" stroke="#FF8042" />
      </LineChart>
      </ResponsiveContainer>
    );
  }
export default AssociatedChartPerCity


