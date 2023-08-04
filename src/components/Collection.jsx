import React from 'react'
import Pocket from "../assets/images/grand-espresso.svg"

export const Collection = () => {
    const Box = [
        {
            image:Pocket,
            title:"Gran Expresso",
            text:"Light and flavorful blend with cocoa and black pepper for an intense experience"
        },
        {
            image:Pocket,
            title:"Planalto",
            text:"Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
        },
        {
            image:Pocket,
            title:"Piccolo",
            text:"Mild and smooth blend featuring notes of toasted almond and dried cherry"
        },
        {
            image:Pocket,
            title:"Danche",
            text:"Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
        }
    ]
  return (
    <div className='collection px-[50px] pb-[80px]'>
            <div className='banner'>
            </div>
            <div className='holder flex justify-center gap-6 mt-[-100px]'>
                {
                    Box.map((item, index)=>(
                        <div className='box text-center w-[270px]' key={index}>
                    <img className='mb-4' src={item.image} alt="" />
                    <h2 className='font-bold text-xl w-[150px] mx-auto mb-3'>{item.title}</h2>
                    <p className='w-[270px]'>{item.text}</p>
                       </div>
                    ))
                }
            </div>
        </div>
  )
}
