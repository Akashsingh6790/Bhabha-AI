import { Container } from 'postcss'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#222848] py-1 text-white w-full font-lora">

    <div className="flex flex-col-reverse md:flex md:flex-row">
        <div className="flex justify-center flex-col mx-auto items-center space-y-5 md:flex md:items-start">
        
        <div className='flex-col'>
        <a href="/terms-conditions">
            <div className="hover:underline mt-3">Terms and Conditions</div>
        </a>
        <a href="/terms-conditions">
            <div className="hover:underline mt-3">Refund</div>
        </a>
        <a href="/privacy">
            <div className="hover:underline mt-3">Privacy</div>
        </a>
        </div> 
        </div>

        <div className="flex justify-center flex-col mx-auto items-center">
        
        <div className="flex justify-center items-center text-2xl m-2">contact@bhabha.ai</div>
    <div className="h-12 md:h-11 flex justify-center items center m-2" >
                <a href="https://twitter.com/satpalpatawat" target="_blank" >
                <img src="twitter-icon.svg" className="h-9 m-2" alt="" height={30} width={30}   />
                </a>
                <a href="https://github.com/Ghanshyam-03/Bhabha-AI" target="_blank" >
                <img src="git1.svg" className="h-9 m-2" alt="" height={30} width={30}   />
                </a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" >
                <img src="mail1.png" className="h-9 m-2" alt="" height={30} width={30}   />
                </a>
            </div>
    
    <div className="flex justify-center items-center m-3">
            © Bhabha AI 2023. All Rights reserved.
            </div> 
        
        </div>

        <div className="flex justify-center flex-col mx-auto items-center space-y-5 md:flex md:items-start"> 
        <div className='flex-col'>
        <a href="https://chatbrowser.io/" target='_blank'>
            <div className="hover:underline mt-3">Chat Browser</div>
        </a>
        <a href="https://dreamqr.art/" target='_blank'>
            <div className="hover:underline mt-3">Dream-QR</div>
        </a>
        <a href="/">
            <div className="underline mt-3">Back to top &#8593;</div>
        </a>     
        </div>
        </div>
    </div>
</footer>
  )
}
export default Footer