export const runtime = 'edge'

import Image from 'next/image'
import Link from 'next/link';
import './globals.css'
import Navbar from './components/navbar';
import Footer from './components/Footer';


export default function home() {
  return (
<div>
        <Navbar />
        <img
            src="Home-Backgroung.jpg"
            className="h-25"
            alt=""
          />
        <Footer />
</div>
  
    
)
  }

 
  
 
