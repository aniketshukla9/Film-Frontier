import React from 'react'
import notfound from '/no_signal.gif'

const Notfound = () => {
    return (
        <div className='w-full h-full flex  bg-black justify-center items-center'>
            <img className='w-[90vh]' src={notfound} alt="" />
        </div>
      )  
}

export default Notfound;