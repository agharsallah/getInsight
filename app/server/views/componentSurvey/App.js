import React from 'react';
import ChoiceLists from './ChoiceLists'

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
          <MuiThemeProvider>
            <ChoiceLists/>
          </MuiThemeProvider>
         </div>
      );
   }
}

export default App;