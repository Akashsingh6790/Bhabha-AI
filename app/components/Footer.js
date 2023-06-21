import React from 'react'



function Footer() {
  return (
    <footer className="bg-[#090B17] py-5 text-white w-full h-120">
    
<section className=" flex-column justify-around mt-40">
<div >Terms And Conditions</div>
  <div> Contacts</div>
  <div > Refund</div>
  <div>Privacy</div>
    
    </section>
    <div className="flex justify-center items-center h-16 ">Contact@Bhabha.AI</div>
    <div className="h-12 md:h-11 flex justify-center items center h-16 " >
                <a href="https://twitter.com/satpalpatawat" target="_blank" >
                <img src="twitter.png" className="h-9" alt="" height={30} width={30}   />
                </a>
                <a href="https://github.com/Ghanshyam-03/Bhabha-AI" target="_blank" >
                <img src="github.png" className="h-9" alt="" height={30} width={30}   />
                </a>
                <a href="gsrajput2002@gmail.com" target="_blank" >
                <img src="gmail.png" className="h-9" alt="" height={30} width={30}   />
                </a>
            </div>
    
    <div className="flex justify-center items-center h-16">
            © Bhabha AI 2023. All Rights reserved.
            </div>   
            
    </footer>

  )
}

export default Footer