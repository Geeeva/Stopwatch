import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import First from '../components/First/First';
import Second from '../components/Second/Second';
import Third from '../components/Third/Third';
import Fourth from '../components/Fourth/Fourth';
import Fifth from '../components/Fifth/Fifth';

class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    
    render() {
        return (
            <Router>
                <div className="App">
                    <h1>Routing Demonstration</h1>
                    <ul className="navigation">
                        <NavLink className="first" to="/1">First page</NavLink>
                        <NavLink className="second" to="/2">Second page</NavLink>
                        <NavLink className="third" to="/3">Third page</NavLink>
                        <NavLink className="fourth" to="/4">Fourth page</NavLink>
                        <NavLink className="fifth" to="/5">Fifth page</NavLink>
                    </ul>

                    <Route className="Home" path="/" exact strict render={
                        () => {
                        return (<h1>Welcome Home</h1>);
                    }}/>


                    <Route className="First" path="/1" exact strict component={First}/>

                    <Route className="Second" path="/2" exact strict component={Second}/>

                    <Route className="Third" path="/3" exact strict component={Third}/>

                    <Route className="Fourth" path="/4" exact strict component={Fourth}/>

                    <Route className="Fifth" path="/5" exact strict component={Fifth}/>
                </div>
            </Router>
        );
    }
}

export default App;
