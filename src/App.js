import './StalkMarket.css'
import React from 'react'
import Logo from './components/Logo'
import GenerateTurnips from './components/GenerateTurnips'
import SellTurnips from './components/SellTurnips'
import Inventory from './components/Inventory'
import NextDay from './components/NextDay'


class App extends React.Component {
    constructor(props) {
        super(props)

        let randomPrice = Math.floor(Math.random() * (110 - 50) + 50);

        this.state = {
            turnipPrice: randomPrice,
            bells: 1000,
            day: 'Sunday',
            turnips: 0
        };


    }


    buyTurnips = () => {
        let turnips = this.state.turnips;
        let bells = this.state.bells;
        let turnipPrice = this.state.turnipPrice;
        if (bells > turnipPrice) {
            this.setState({
                bells: bells - turnipPrice,
                turnips: turnips + 1
            });
            console.log(turnipPrice);
        } else {
            console.log('not working');
        }
    }

    sellTurnips = () => {
        let turnips = this.state.turnips;
        let bells = this.state.bells;
        let turnipPrice = this.state.turnipPrice;
        if (turnips > 0) {
            this.setState({
                turnips: turnips - 1,
                bells: bells + turnipPrice
            })
        }

    }

    toNextDay = () => {
        let randomPrice = Math.floor(Math.random() * (110 - 50) + 50);
        if (this.state.day === 'Sunday') {
            this.setState({
                day: 'Monday',
                turnipPrice: randomPrice
            })
        } else if (this.state.day === 'Monday') {
            this.setState({
                day: 'Tuesday',
                turnipPrice: randomPrice
            })
        } else if (this.state.day === 'Tuesday') {
            this.setState({
                day: 'Wednesday',
                turnipPrice: randomPrice
            })
        } else if (this.state.day === 'Wednesday') {
            this.setState({
                day: 'Thursday',
                turnipPrice: randomPrice
            })
        } else if (this.state.day === 'Thursday') {
            this.setState({
                day: 'Friday',
                turnipPrice: randomPrice
            })
        } else if (this.state.day === 'Friday') {
            this.setState({
                day: 'Saturday',
                turnipPrice: randomPrice
            })
        } else if (this.state.day === 'Saturday') {
            this.setState({
                day: 'Sunday',
                turnipPrice: randomPrice,
                turnips: 0
            })
        }
        console.log(this.state.day);
    }

    render() {

        return (
            <div>
                    <div>
                        <div>
                            <div className='background1'>
                                <Logo day={this.state.day} />
                                <GenerateTurnips
                                    day={this.state.day}
                                    turnipPrice={this.state.turnipPrice}
                                    buyTurnips={this.buyTurnips}
                                />
                                <SellTurnips
                                    day={this.state.day}
                                    turnipPrice={this.state.turnipPrice}
                                    sellTurnips={this.sellTurnips}
                                />
                            </div>
                            <NextDay toNextDay={this.toNextDay} day={this.state.day} />
                        </div>
                        <div className='background2'>
                            <Inventory bells={this.state.bells} turnips={this.state.turnips} />
                        </div>
                    </div>
            </div>
        )
    }
}

export default App;