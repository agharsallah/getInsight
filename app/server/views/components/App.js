import React from 'react';
import Sidebar from './Sidebar'
import data from './question.js'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
	
class App extends React.Component {
   render() {
console.log( data)
      return (
         <div>
         	<MuiThemeProvider>
         		<Sidebar questions={data.question} />
         	</MuiThemeProvider>

         </div>
      );
   }
}

export default App;