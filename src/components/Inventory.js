import React from 'react'
import '../StalkMarket.css'

const Inventory = ( { bells, turnips } ) => {
    return (
        <div>
            <div className='container'>
            <img src='https://www.models-resource.com/resources/big_icons/36/35107.png' height='300em' width='350em'/>
            <div className='bellText'>{bells}</div>
            <img src='https://wyspstore2.s3.amazonaws.com/thumbs/823851001-th.png' height='300em' width='250em'/>
            <div className='turnipText'>{turnips}</div>
            </div>
        </div>
    )
}

export default Inventory;