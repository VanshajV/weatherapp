import React from 'react'

export default function InfoCard(props) {
  return (
    <div>
     
        <div className='text-black space-y-2'>
            <h1 className='text-2xl'>{props.title.toUpperCase()}</h1>
            <div className='flex px-6 justify-center space-x-20'>
            <span className='w-40'>CurrentTemp</span>
            <p className='w-40'>{props.CurrentTemp}&#176; C</p>
            </div>
            <div className='flex  px-6 justify-center space-x-20'>
            <span className='w-40'>Feels Like</span>
            <p className='w-40'>{props.feelslike}&#176; C</p>
            </div>
            <div className='flex  px-6 justify-center space-x-20'>
            <span className='w-40'>Wind Speed</span>
            <p className='w-40'>{props.speed}m/s</p>
            </div>
          
      
        </div>
  

        
        
    </div>
  )
}
