import React from 'react'
/* ama aksh */
function Welcome(){

    return(
        <div className='flex justify-center items-center'>
          <div >
          <img
            src="bgw.jpg"
            className='h-full w-full'
            alt=""
          />
          </div>
          <div className='absolute text-center w-1/2'>
          <div className='text-5xl text-white font-bold'>Let's democratize AI together</div>
          <span className='text-2xl text-white'>Unleash the potential of AI in research. Discover insights, fuel innovation, and shape a transformative future with our cutting-edge tools and technologies</span>
          </div>
        </div>
    )
};
export default Welcome