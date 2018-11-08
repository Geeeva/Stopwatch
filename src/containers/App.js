import React, { Component } from 'react';
import './App.css';
import Stopwatch from './Stopwatch/Stopwatch';
import Footer from '../components/Footer/Footer';
import 'normalize.css';

class App extends Component {
  	render() {
	    return (
	      	<div className="App">
	      		<div className="container-fluid">
                    <div className="container-first">
	        			<Stopwatch />
	        		</div>
	        	</div>
	        	<div className="container-fluid-second">
                    <div className="container-second">
                		<Footer />
                	</div>
                </div>
	      	</div>
	    );
  	}
}

export default App;
