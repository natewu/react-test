import { Component } from 'react';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Content from './components/Content';
import About from './pages/About';

class App extends Component{
  render(){
    return(
      <Router>
        <div className="App">
          <div className="container" style={{display:"flex", height:"100vmin"}}>
            <Nav/>
            <div>
              <Route exact path="/" render={props=>(
                <React.Fragment>
                  <Content/>
                </React.Fragment>
              )}/>
              <Route path="/about" component={About}/>
            </div>
          </div>
        </div>
      </Router>
    )  
  }
}

export default App;