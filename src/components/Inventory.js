import React from 'react'
import '../StalkMarket.css'

const Inventory = ( { bells, turnips } ) => {
    return (
        <div className='container'>
            <div>
            <img src='https://www.models-resource.com/resources/big_icons/36/35107.png' height='300em' width='350em' alt='bells'/>
            <h1 className='bellText'>{bells}</h1>
            <img src='https://wyspstore2.s3.amazonaws.com/thumbs/823851001-th.png' height='300em' width='250em' alt='turnips'/>
            <h1 className='turnipText'>{turnips}</h1>
            </div>
        </div>
    )
}

export default Inventory;