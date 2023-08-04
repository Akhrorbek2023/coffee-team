import React from 'react'
import { BoxImage } from '../assets/image'



import { Banner } from '../components/Banner'
import { Choose } from '../components/Choose'
import { Collection } from '../components/Collection'
import { Work } from '../components/Work'

export const Home = () => {
  return (
    <>
    <div className='cotainer'>
        <Banner/>
        <Collection/>
        <Choose/>
        <Work/>
    </div>
    </>
  )
}
