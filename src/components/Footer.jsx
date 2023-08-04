import React from 'react'
import { FooterLogo } from '../assets/image'
import { Link, NavLink } from 'react-router-dom'
import Instagram from "../assets/images/instagram.svg"
import Twitter from "../assets/images/twitter.svg"
import Facebook from "../assets/images/facebook.svg"

export const Footer = () => {
  return (
    <div className='bg-black text-white py-[30px]'>
        <div className='container'>
        <div className='flex justify-between items-center'>
        <div className='flex items-center'>
        <div className='mr-[30px]'><FooterLogo/></div>
        <ul className='flex space-x-4 items-center'>
        <li>
          <NavLink className="hover:text-slate-500" to={"/home"}>HOME</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-slate-500" to={"/about"}>ABOUT US</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-slate-500" to={"/plan"}>CREATE YOUR PLANE</NavLink>
        </li>
      </ul>
        </div>
        <div className='flex space-x-4'>
            <Link to={"https://www.instagram.com"}><img src={Instagram} alt="" /></Link>
            <Link to={"https://www.twitter.com"}><img src={Twitter} alt="" /></Link>
            <Link to={"https://www.facebook.com"}><img src={Facebook} alt="" /></Link>

        </div>
        </div>
        </div>
 </div>
  
  )
}
