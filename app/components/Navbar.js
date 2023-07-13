'use client'
import Link from 'next/link';

import React from 'react'





function Navbar() {
  
  return (

    <nav className="border-gray-200 h-20 lg:px-6 bg-[#131528] py-5 md:py-1  fixed w-full top-0 z-10">
    <div className="container flex flex-wrap items-center justify-between mx-5">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <img
            src="logo.svg"
            className="h-25"
            alt=""
          />
          <span className="self-center text-3xl font-rubiklso font-bold whitespace-nowrap text-[#f9fafd] -mx-5 "  >
          
            <span>Bhabha</span>
            <span className='relative top-2 text-[#7964F6]'>&#x2022;</span>
            <span>AI</span>
          </span>
        </a>
      </div>
      <div>
        <ul className="flex space-x-4 ">
          <li>
            <Link href="/blog">
              <span className="text-gray-300 hover:underline hover:text-white text-xl hover:u cursor-pointer mx-3 transform hover:-rotate-1 duration-500">Blog</span>
            </Link>
          </li>
          <li>
            <Link href="/product">
              <span className="text-gray-300 hover:underline hover:text-white text-xl hover:u cursor-pointer mx-3">Product</span>
            </Link>
          </li>
          <li>
            <Link href="/API">
              <span className="text-gray-300 hover:underline hover:text-white text-xl hover:u cursor-pointer mx-3 transform hover:-rotate-1 duration-500">API</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="text-gray-300 hover:underline hover:text-white text-xl hover:u cursor-pointer mx-3">About</span>
            </Link>
          </li>
          <li>
          <div className="md:block mx-5 flex transform  ">
          <a href="#">
            <button className="flex px-2.5 pt-px pb-0.5 border-white border-solid border-2 text-xl text-white hover:bg-white hover:text-black justify-center items-center">
              <span>Sign in</span>
              <span className='ml-1 text-lg'>&#8599;</span>
            </button>
          </a>
        </div>
        </li>
          
        </ul>
        

      </div>
    </div>
    
  </nav>


    )};


export default Navbar