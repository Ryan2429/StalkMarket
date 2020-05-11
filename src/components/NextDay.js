import React from 'react'

const NextDay = ( { toNextDay } ) => {
    return (
    <button 
    className='nextDay' 
    onClick={toNextDay}>Proceed to the next day!</button>
    )
}

export default NextDay;