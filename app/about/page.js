import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
 

function about() {
  return (
    <div>
    <Navbar />
    <div className='h-20'></div>
    <div className='bg-[#131528] text-white flex flex-col min-h-screen items-center py-16'>
      <h1>Welcomme to about</h1>
     
    </div>
    <Footer />
    </div>
  )
}

export default about