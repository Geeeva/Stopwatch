import React, { Component } from 'react';
import OrderItem from '../.././components/OrderItem/OrderItem';
import './OrderList.css';

class OrderList extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            total: 0,
            activeIndex: '',
            activePrice: 0,
            fire: false
        }
    }

    additionHandler = (price, name) => {

        let priceString = price.toFixed(2);
        let priceNumber = parseInt(priceString);

        this.setState({
            total: this.state.total + priceNumber
        })
    }

    deductionHandler = (price) => {
        let priceString = price.toFixed(2);
        let priceNumber = parseInt(priceString);

        if(this.state.total - priceNumber < 0) {
            this.setState({
                total: 0
            })
        } else {
            this.setState({
            total: this.state.total - priceNumber
            })
        }
    }

    toggleHandler = (index, price) => {
        this.setState({ 
            activeIndex: index,
            activePrice: price
        });
    }

    render() {
        const orderItems = this.props.items.map((item, index) => {
            const active = this.state.activeIndex;
            return <OrderItem
                key={index}
                name={item.name} 
                price={item.price}
                priceAdded={this.additionHandler}
                priceDeducted={this.deductionHandler}
                active={index === active} 
                clicked={this.toggleHandler.bind(this, index, item.price, item.name)}
            />
        });

        return (
            <div className="order-items-wrapper">
                <svg id="arc" viewBox="0 0 1922 100.2">
                    <path id="arc-stroke" fill="none" stroke="#BCBCBE" strokeWidth="5" 
       strokeMiterlimit="10" d="M1591.4,115.8c-196.6-61.1-405.6-93.9-622.1-93.9c-218.8,0-430,33.3-628.5,95.3"/>
                </svg>
                <svg id="arc-sm" viewBox="0 0 771.8 44.4">
                    <path fill="none" stroke="#BCBCBE" strokeWidth="5" 
                    strokeMiterlimit="10" d="M766.6,46.6C643.2,24,516.1,12.2,386.3,12.2 C255.5,12.2,127.6,24,3.4,46.8"/>
                </svg>
                <h3>List of available PS4 games</h3>
                
                <p>Pls. select the game you are intersted in and increase the quantity by pressing plus or minus</p>
                <div className="order-items">
                    {orderItems}
                    <button onClick={this.additionHandler.bind(this, this.state.activePrice)} className="plus"><b>+</b></button>
                    {/*<button 
                    onAnimationEnd={() => this.setState({fire: false})}
                    onClick={()=> 
                        {this.additionHandler.bind(this, this.state.activePrice);
                        this.setState({fire: true});
                        }} 

                    className={"cbutton cbutton--effect-radomir" + (this.state.fire ? " cbutton--click" : "" )}

                     ><b>+</b></button>*/}
                    <button onClick={this.deductionHandler.bind(this, this.state.activePrice)} className="minus"><b>-</b></button>
                    <b><p id="total-price">{'TOTAL'} {this.state.total}{'\u20AC'}</p></b>
                </div>
            </div>
        );
    }
}

export default OrderList;