import './StalkMarket.css'
import Music from './bensound-littleidea.mp3'
import React from 'react'
import Logo from './components/Logo'
import GenerateTurnips from './components/GenerateTurnips'
import SellTurnips from './components/SellTurnips'
import Inventory from './components/Inventory'
import NextDay from './components/NextDay'
import Rules from './components/Rules';


class App extends React.Component {
    constructor(props) {
        super(props)

        let randomPrice = Math.floor(Math.random() * (110 - 50) + 50);

        this.state = {
            turnipPrice: randomPrice,
            bells: 1000,
            day: 'Sunday',
            turnips: 0,
            gameStarted: false
        };


    }

    

    removeRules = () => {
        this.setState({ gameStarted: true })
    }

    newGame = () => {
        let randomPrice = Math.floor(Math.random() * (110 - 50) + 50);
        this.setState({
            bells: 1000,
            turnips: 0,
            day: 'Sunday',
            turnipPrice: randomPrice,
            gameStarted: false
        })
    }

    buyTurnips = () => {
        let turnips = this.state.turnips;
        let bells = this.state.bells;
        let turnipPrice = this.state.turnipPrice;
        if (bells > turnipPrice) {
            this.setState({
                bells: bells - turnipPrice,
                turnips: turnips + 1
            })
        }
        if (turnips === 0 && turnipPrice > bells) {
            alert('Game Over! You ran out of bells! Sorry, press OK to start a New Game!')
            this.newGame();
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
        if (bells > 3000) {
            alert('You won! Click OK to start a New Game!');
            this.newGame();
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
    }

    

    render() {

        return (
            <div>
                <div>
                <audio src={Music} loop autoPlay='true' />
                    {( this.state.gameStarted === false ? <Rules removeRules={this.removeRules}/> : 
                        <div className='background1'>
                        <Logo day={this.state.day} />
                        <div>
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
                </div>)} 
                    
                </div>
                <div className='background2'>
                    <Inventory bells={this.state.bells} turnips={this.state.turnips} />
                </div>
                
            </div>
        )
    }
}

export default App;