import React from 'react'
import Quelity from "../assets/images/box-espresso.svg"
import Benefits from "../assets/images/box-gift.svg"
import Shipping from "../assets/images/box-car.svg"

export const Choose = () => {
    const Box = [
        {
            image:Quelity,
            title:"Best quality",
            text:"Discover an endless variety of the world’s best artisan coffee from each of our roasters."
        },
        {
            image:Benefits,
            title:"Exclusive benefits",
            text:"Special offers and swag when you subscribe, including 30% off your first shipment."
        },
        {
            image:Shipping,
            title:"Free shipping",
            text:"We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
        }
    ]
  return (
    <div><div className='choose text-center bg-slate-700 text-white pt-[100px]'>
    <div className='w-[540px] mx-auto'>
    <h2 className='text-[40px] mb-[40px]'>Why choose us?</h2>
    <p className='mb-[80px]'>A large part of our role is choosing which particular coffees will be featured 
       in our range. This means working closely with the best coffee growers to give 
       you a more impactful experience on every level.</p>
    </div>
    <div className='flex justify-center space-x-[115px] py-[50]'>
    {
        Box.map((item, index)=>(
            <div className='box text-center w-[310px] bg-[#0E8784] text-white py-10 rounded pt-[100px] mb-[-100px]' key={index}>
            <img className='mb-4 mx-auto' src={item.image} alt="" />
            <h2 className='font-bold text-xl w-[150px] mx-auto mb-3'>{item.title}</h2>
            <p className='w-[270px] mx-auto text-slate-300'>{item.text}</p>
            </div>
        ))
    }
    </div>
</div></div>
  )
}
