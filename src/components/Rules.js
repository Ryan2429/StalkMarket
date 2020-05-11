import React from 'react';

const Rules = ( { removeRules } ) => {

    return (
        <div
            style={{
                backgroundImage: `url('https://wallpaperaccess.com/full/164553.png')`,
                zIndex: '1',
                position: 'fixed',
                color: 'black',
                fontFamily: 'Cute Font',
                fontSize: '1rem',
                textAlign: 'left',
                paddingRight: '5%',
                paddingLeft: '5%',
                bottom: 0,
                top: 0,
                left: 0,
                right: 0
            }}
        >
            <h2>Welcome to<span style={{ fontSize: '1.8rem' }}> <u>Stalk Market!</u></span> The following are the rules:</h2>
            <h2><ul>* Earn 3000 bells to win!</ul>
                <ul>* Turnips can be bought but not sold on Sunday. If it is Sunday and you still have turnips they will <i><u>ROT AWAY!</u></i></ul>
                <ul>* If you don't have enough bells to buy turnips, you lose!</ul>
            </h2>
            <button className='startGame' onClick={removeRules}>Press Here To Start!</button>
        </div>
    )
}


export default Rules;