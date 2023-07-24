'use client'
import Link from 'next/link';

import React from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {useState} from "react";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () =>{
      setMenuOpen(!menuOpen);
  }

  return (

      <nav className='fixed w-full z-10 h-24 shadow-xl bg-[#181a2b]'>
      <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
        <div>
        <Link href="/" className="flex items-center">
          <img
            src="logo.svg"
            className="h-25"
            alt=""
          />
          <span className="self-center text-2xl sm:text-3xl 2xl:text-4xl font-rubiklso font-bold whitespace-nowrap text-white -mx-5 "  >
          
            <span>Bhabha</span>
            <span className='relative top-2 text-[#7964F6]'>&#x2022;</span>
            <span>AI</span>
          </span>
        </Link>
        </div>
        <div className="hidden md:flex">
        <ul className="hidden md:flex space-x-2">
          <li>
            <Link href="/blog">
              <span className="text-gray-300 hover:underline hover:text-white text-xl 2xl:text-2xl hover:u cursor-pointer mx-3 transform hover:-rotate-1 duration-500">Blog</span>
            </Link>
          </li>
          <li>
            <Link href="/product">
              <span className="text-gray-300 hover:underline hover:text-white text-xl 2xl:text-2xl hover:u cursor-pointer mx-3">Product</span>
            </Link>
          </li>
          <li>
            <Link href="/API">
              <span className="text-gray-300 hover:underline hover:text-white text-xl 2xl:text-2xl hover:u cursor-pointer mx-3 transform hover:-rotate-1 duration-500">API</span>
            </Link>
          </li>
          <li className='hidden lg:flex'>
            <Link href="/about">
              <span className="text-gray-300 hover:underline hover:text-white text-xl 2xl:text-2xl hover:u cursor-pointer mx-3">About</span>
            </Link>
          </li>
          <li>
          <div className=" mx-5 flex transform  ">
          <a href="#">
            <button className="flex px-2.5 pt-px pb-0.5 border-white border-solid border-2 text-xl 2xl:text-2xl text-white hover:text-orange-400 justify-center items-center">
              <span>Sign in</span>
              <span className='ml-1 text-lg'>&#8599;</span>
            </button>
          </a>
        </div>
        </li>
          
        </ul>
        </div>
        <div onClick={handleNav} className='md:hidden cursor-pointer pl-24'>
          <AiOutlineMenu size={30} />
        </div>
      </div>
      <div className={
        menuOpen
        ? "fixed left-0 top-0 w-[100%] md:hidden h-screen bg-slate-900 p-5 duration-500 "
        : "fixed left-[100%] top-0 p-10 ease-in duration-500"
      }>
        <div className='flex w-full items-center justify-between pb-7'>
        
        <div className='flex items-center justify-items-start -ml-9'>
        <Link href="/" className="flex items-center">
          <img
            src="logo.svg"
            className="h-20"
            alt=""
          />
          <span className="text-2xl font-rubiklso font-bold whitespace-nowrap text-white -mx-5 "  >
          
            <span>Bhabha</span>
            <span className='relative top-2 text-[#7964F6]'>&#x2022;</span>
            <span>AI</span>
          </span>
        </Link>
        </div>
        <div onClick={handleNav} className='cursor-pointer justify-items-end'>
          <AiOutlineClose size={30} />
        </div>
        </div>
        
        <div className='flex-col justify-center items-center py-4'>
          <ul>
           <hr></hr>
            <Link href="/">
              <li
              onClick={() => setMenuOpen(false)}
              className='py-2.5 font-bold cursor-pointer text-xl hover:underline'
              >
              Home
              </li>
            </Link>
            <hr></hr>
            <Link href="/blog">
              <li
              onClick={() => setMenuOpen(false)}
              className='py-2.5 font-bold cursor-pointer text-xl hover:underline'
              >
              Blog
              </li>
            </Link>
            <hr></hr>
            <Link href="/product">
              <li
              onClick={() => setMenuOpen(false)}
              className='py-2.5 font-bold cursor-pointer text-xl hover:underline'
              >
              Product
              </li>
            </Link>
            <hr></hr>
            <Link href="/API">
              <li
              onClick={() => setMenuOpen(false)}
              className='py-2.5 font-bold cursor-pointer text-xl hover:underline'
              >
              API
              </li>
            </Link>
            <hr></hr>
            <Link href="/about">
              <li
              onClick={() => setMenuOpen(false)}
              className='py-2.5 font-bold cursor-pointer text-xl hover:underline'
              >
              About
              </li>
            </Link>
            <hr></hr>
            <li className='pt-16 flex justify-center items-center align-middle justify-items-center'>
          <div className=" mx-5 flex transform  ">
          <a href="#">
            <button className="flex px-2.5 pt-px pb-0.5 border-white border-solid border-2 text-2xl hover:text-white text-orange-400 justify-center items-center">
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