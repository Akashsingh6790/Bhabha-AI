export const runtime = 'edge'

import Image from 'next/image'
import Link from 'next/link';
import './globals.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Newsletter from './components/Newsletter';


export default function home() {
  return (
<div>
        
        <Navbar />
        
        <div className='h-20'></div>
        <div className='min-h-screen bg-[#131528]'>
        <Welcome />
        </div>
        <Newsletter/>
        <Footer />
</div>
  
    
)
  }

 
  
 
