import React, { Component } from 'react';
import OrderList from './OrderList/OrderList';
import Footer from '.././components/Footer/Footer';
import './App.css';

class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    
    render() {
        const gamesList = [
            {name: 'Shadow of the Tomb Raider', price: 42.99},
            {name: 'Shadow of Mordor', price: 16.50},
            {name: 'Attack of Titan 2', price: 25.50},
            {name: 'Payday 2', price: 22.98},
            {name: 'Spider-Man', price: 46.99},
            {name: 'Assasin Creed Odyssey', price: 46.99},
            {name: 'EVOLVE - First Person Shooter', price: 29.00},
            {name: 'Soul Calibur VI', price: 54.00},
            {name: 'Yakuza Kiwami', price: 34.99 },
            {name: 'Operation Warcade', price: 21.00}
        ]

        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="container">   
                       <h1>PS4 GAMES</h1>
                       <OrderList items={gamesList}/>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
