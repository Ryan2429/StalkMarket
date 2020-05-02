import React from 'react';

const GenerateTurnips = ({ day, turnipPrice, buyTurnips }) => {

    return (
        <div>

            {(day === 'Sunday' ? <div>
                <button 
                onClick={buyTurnips} 
                className='buyTurnips'>Click To Buy Turnips!
                <br/>
                The turnip price today is: {turnipPrice} bells
                </button>
            </div>
                : null)}
        </div>

    );
}


export default GenerateTurnips;