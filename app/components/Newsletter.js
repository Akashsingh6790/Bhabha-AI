import React from 'react'

function Newsletter() {
    return (
        
       <div className="bg-white w-full"> <div className="text-5xl text-purple-700  text-center">Follow our journey</div>
       <div className=" bg-white text-xl text-purple-700 bg-black text-center mt-8">Sign Up with your email address to receive news and updates.</div>

     <div className='bg-white h-20'> <form className="flex justify-center mt-5">
       
        <input
        type='email'
        placeholder='Email Address'
        style={{ width: '150px', height: '50px', border: '1px solid black', margin: '14px'}}

        />
       <button className="bg-purple-700 hover:bg-purple-400 text-white font-bold py-1 px-2 rounded mt-4 mb-4">
  Sign Up
</button>
       
       
       
       </form>
</div>

<div className='bg-white text-purple-700 text-xl text-center mt-8 h-full'>We respect your privacy. Please read our Terms and Conditions & Privacy pages to learn more. </div>





       </div>
       
    )
}
export default Newsletter