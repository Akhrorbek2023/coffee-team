import React from 'react'
import { Link } from 'react-router-dom'

export const Work = () => {
    const Box = [
        {
            num:"01",
            title:"Pick your Coffee",
            text:"Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
        },
        {
            num:"02",
            title:"Pick your Coffee",
            text:"Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
        },
        {
            num:"03",
            title:"Pick your Coffee",
            text:"Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
        }
    ]
  return (
    <div>
        <div className='works px-[50px] mt-[150px] py-[50px]'>
            <h1 className='text-[30px]'>How it works</h1>
            <div className='text-start flex mb-10'>
               {
                Box.map((item, index)=>(
                    <div className='mr-[80px] w-[400px]' key={index}>
                    <h1 className='text-[50px] text-orange-600 mb-4'>{item.num}</h1>
                    <h1 className='mb-8'>{item.title}</h1>
                    <p>{item.text}</p>
                    </div>
                ))
               }
            </div>
            <Link className='bg-[#0E8784] text-white px-6 py-3 border rounded ' to={"/plan"}>Create your plane</Link>
        </div>
    </div>
  )
}
