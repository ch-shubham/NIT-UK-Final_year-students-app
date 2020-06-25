import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';



import About from './Components/About';
import Students from './Components/ECE';
import Home from './Components/Home/home';
import Nav from './Components/Nav';


function App() {
  return (
      <Router>

        <div className='App'>
          <Nav />
          <Switch>
              <Route path='/' exact component={Home} /> 
              <Route path='/about' component={About} />
              <Route path='/shop' component={Students} />
          </Switch>
        </div>
        
      </Router>
    
  );
}

export default App;
