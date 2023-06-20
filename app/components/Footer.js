import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#090B17] py-5 text-white w-full">

        <div className="flex justify-between flex-col-reverse md:flex md:flex-row">
            <div className="flex justify-center flex-col mx-auto items-center space-x-5 mt-6 md:flex md:items-start">
            © Bhabha AI 2023. All Rights reserved.
            <div className='flex space-x-8'>
            <a href="/terms-conditions">
                <div className="underline mt-3">Terms and Conditions</div>
            </a>
            <a href="/contact">
                <div className="underline mt-3">Contact</div>
            </a>
            <a href="/terms-conditions">
                <div className="underline mt-3">Refund</div>
            </a>
            <a href="/privacy">
                <div className="underline mt-3">Privacy</div>
            </a>
            </div>
            </div>

            <div className="flex mx-auto space-x-6 md:space-x-8">

            {/* twitter */}
            <div className="h-12 md:h-11">
                <a href="https://twitter.com/satpalpatawat" target="_blank">
                <img src="images/twitter-icon.svg" className="h-9" alt="" />
                </a>
            </div>

            </div>

        </div>
    </footer>

  )
}

export default Footer