import React from 'react'
import Bannerimages from '../../assets/car.jpg'
const Banner = () => {
  return (
    <div className='bg-cover bg-no-repeat h-screen' style={{backgroundImage:`url(${Bannerimages})`}}>Banner</div>
  )
}

export default Banner