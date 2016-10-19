import React from 'react';
import Sidebar from './Sidebar'
import data from './question.js'

class App extends React.Component {
   render() {
console.log( data)
      return (
         <div>
         	<Sidebar questions={data.question} />
         </div>
      );
   }
}

export default App;