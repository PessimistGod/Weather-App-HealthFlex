import React from 'react'
import Sun from './Sun'

const LoadingSpinner = () => {
  return (
    <div className='min-h-[80vh] flex justify-center items-center'>

    <div className='loader ease-linear w-40 h-40 '><Sun/></div>
    </div>
  )
}

export default LoadingSpinner
