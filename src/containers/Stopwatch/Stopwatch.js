import React, {Component} from 'react';
import './Stopwatch.css';


class Stopwatch extends Component {

	constructor(props){
		super(props);

		this.state = {
			count: 0,
			pause: true,
			clock: 0,
			seconds: 0,
			minutes: 0,
			hours: 0,
			days: 0,
			rotationS: 0,
			rotationM: 0,
			rotationH: 0,
			rotationD: 0
		};
	}

	componentDidMount() {
		this.countStopwatch();
	}

	countStopwatch = () => {

		let counter = setInterval(() => {

			if (!this.state.pause) {
			       	this.setState({
			       		count: this.state.count + 1,
			       		days : Math.floor(this.state.count / (1 * 60 * 60 * 24)),
        				hours : Math.floor((this.state.count % (1 * 60 * 60 * 24)) / (1 * 60 * 60)),
        				minutes : Math.floor((this.state.count % (1 * 60 * 60)) / (1 * 60)),
       					seconds : Math.floor((this.state.count % (1 * 60)) / 1),
			       		rotationS: this.state.rotationS === 359.9 ? 0 : 359.9
			       	});

			       	if(this.state.seconds === 0 && this.state.minutes !== 0) {
			       		this.setState({
			       			rotationM: this.state.rotationM === 359.9 ? 0 : 359.9
			       		});
			       	} else if(this.state.mintes === 0 && this.state.hours !== 0) {
			       		this.setState({
			       			rotationH: this.state.rotationM === 359.9 ? 0 : 359.9
			       		});
			       	} else if(this.state.hours === 0 && this.state.days !== 0) {
			       		this.setState({
			       			rotationH: this.state.rotationM === 359.9 ? 0 : 359.9
			       		});
			       	}
			}
		}
		, 1000);
	}

	startHandler = () => {
		this.setState({
			pause: false,
			count: 1
		})
	}

	pauseHandler = () => {
		this.setState({
			pause: true
		})
	}

	render () {
		return (
			<div className="Stopwatch">
				<h1>{'STOPWATCH'}</h1>
				<p>{'Time spent on this site:'}</p>
				<div className="stopwatch-wrapper">
					<span className="days"
					style={{transition: "transform 0.1s ease-in-out", transform: `rotateX(${this.state.rotationD}deg)`}}>
						{this.state.days}</span>
						<span className="colon">:</span>
					<span className="hours"
					style={{transition: "transform 0.1s ease-in-out", transform: `rotateX(${this.state.rotationH}deg)`}}>
						{this.state.hours}</span>
						<span className="colon">:</span>
					<span className="minutes" 
					style={{transition: "transform 0.1s ease-in-out", transform: `rotateX(${this.state.rotationM}deg)`}}>
 						{this.state.minutes}</span>
						<span className="colon">:</span>
					<span className="seconds"  className="seconds" 
    				style={{transform: `rotateX(${this.state.rotationS}deg)`}}>
 						{this.state.seconds}</span>
				</div>
				<div className="buttons-wrapper">
					<button id="start" onClick={this.startHandler}>START</button>
					<button id="pause" onClick={this.pauseHandler}>PAUSE</button>
				</div>
			</div>
		);
	}
}

export default Stopwatch;