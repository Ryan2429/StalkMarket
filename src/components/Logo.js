import React from 'react';

const Logo = ({ day }) => {
    return (
        <div>
            <div>
                <h1 className='logo-font'>STALK MARKET</h1>
                <h4 className='logo-font-smaller' style={{lineHeight: 1}}>Buy turnips to begin playing!
                                                                    <br/>Get 3000 bells to win!</h4>
                <h5 className='today'>Today is {day}!</h5>
            </div>
        </div>
    )
}

export default Logo;