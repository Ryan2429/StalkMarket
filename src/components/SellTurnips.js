import React from 'react';

const SellTurnips = ({ day, turnipPrice, sellTurnips }) => {
    return (
        <div>

            {(day !== 'Sunday' ? <div>
                <button
                    onClick={sellTurnips}
                    className='sellTurnips'>Click To Sell Turnips!
                <br />
                The turnip price today is: {turnipPrice} bells
                </button>
            </div>
                : null)}
                </div>

    );
}

export default SellTurnips;