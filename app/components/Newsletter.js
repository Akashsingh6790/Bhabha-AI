import React from 'react'

function Newsletter() {
    return (
        
       <div className="bg-white w-full">
        <div className="text-4xl sm:text-5xl 2xl:text-6xl text-purple-700 font-bold text-center pt-9">Follow our journey</div>
       <div className=" bg-white text-xl 2xl:text-2xl text-purple-700 text-center mt-8">Sign Up with your email address to receive news and updates.</div>

     <div className='bg-white flex justify-center'>
      <form className="flex flex-col sm:flex-row justify-center items-center mt-5">
        <input
        type='email'
        placeholder='      Email Address        '
        style={{ width: '275px', height: '50px', border: '1px solid black', margin: '14px'}}
        className='text-black px-4'
        />
       <button className="bg-purple-700  hover:text-orange-400 hover:bg-black text-white font-bold py-3 px-5 rounded mt-4 mb-4">
  Suscribe
</button>
</form>
</div>

<div className='bg-white text-purple-700 text-xl 2xl:text-2xl text-center mt-8 h-full pb-9'>We respect your privacy. Please read our Terms and Conditions & Privacy pages to learn more. </div>





       </div>
       
    )
}
export default Newsletter
