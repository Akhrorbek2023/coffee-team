import React from 'react'
import { LogoImage } from '../assets/image'
import { NavLink } from 'react-router-dom'


export const Header = () => {
  return (
    <div className='container'>
        
        <div className='flex justify-between items-center pt-[20px]'>
        <LogoImage/>
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
    </div>
  )
}
