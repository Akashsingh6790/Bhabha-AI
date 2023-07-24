'use client'
import React from 'react'
// import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Welcome(){
//   const {text} = useTypewriter({
//     words:["dev","sev","mev"],
//     loop:{},
//   });
    return(
        <div className='flex justify-center items-center'>
      
          
          <div className='text-center w-3/4 pb-12'>
          <div className='text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-orange-400 font-bold pb-5'>Let's democratize AI together</div>
          <span className='text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-white'>Unleash the potential of AI in research. Discover insights, fuel innovation, and shape a transformative future with our cutting-edge tools and technologies</span>
         
          <div className='flex-col md:flex-row items-center justify-center mt-5'>
          <a href="https://dreamqr.art/" target='_blank'>
            <button className=" bg-[#7964F6] hover:text-orange-400 hover:bg-black font-bold p-3 px-7  m-6 border-2 text-lg sm:text-xl lg:text-2xl 2xl:text-3xl rounded-lg justify-center items-center">
              <span>Try Dream-QR</span>
              
            </button>
          </a>
          <a href="https://chatbrowser.io/" target='_blank'>
            <button className=" bg-[#7964F6] hover:text-orange-400 hover:bg-black  font-bold p-3 px-7  m-6 border-2 text-lg sm:text-xl lg:text-2xl 2xl:text-3xl rounded-lg justify-center items-center">
              <span>Try Chat-Browser</span>
              
            </button>
          </a>
          </div>
          </div>

        </div>
    )
};
export default Welcome