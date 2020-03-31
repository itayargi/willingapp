import React, { Component } from 'react'
import {HashRouter as Router, Switch, Link, Route} from 'react-router-dom';


export default class NewRequest_1 extends Component {
    
    render() {
        function Home() {
            return <h2>Home</h2>;
          }
          
          function About() {
            return <h2>About</h2>;
          }
          
          function Users() {
            return <h2>Users</h2>;
          }
        return (
            <div>
                <Router>
      <div>
        <nav>
          
            
              <Link to="/">Home</Link>
            
            
              <Link to="/about">About</Link>
            
            
              <Link to="/users">Users</Link>
            
          
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path='/about' component={()=>{return <About />}}>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
            <input type="text" placeholder="enter"></input>
          </Route>
        </Switch>
      </div>
    </Router>
            </div>
        )
    }
}
