import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Content from './components/Content'
import '../node_modules/recharts'; 
import '../node_modules/@fortawesome/react-fontawesome'

import 'bootstrap/dist/css/bootstrap.min.css'
import {DataProvider} from './components/Context'


class App extends React.Component{
  render(){
    return(
      <DataProvider>
      <div className="App">
        <Router>
          <Content/>
        </Router>
        
      </div>
    </DataProvider>
    )
  }
}
export default App;
