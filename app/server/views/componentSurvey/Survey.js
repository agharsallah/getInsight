import React from 'react';
import ChoiceLists from './ChoiceLists'

import Paper from 'material-ui/Paper';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



	
class Survey extends React.Component {
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

export default Survey;