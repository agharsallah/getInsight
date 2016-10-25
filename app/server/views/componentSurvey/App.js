import React from 'react';
import Paper from 'material-ui/Paper';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


	
class App extends React.Component {
  constructor(props) {
    super(props);

  }

   render() {
      return (
         <div>
         <p>  Hi survey</p>

         </div>
      );
   }
}

export default App;