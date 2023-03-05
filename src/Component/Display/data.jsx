import React from 'react'
import './display.css'

const Data = ({url}) => {
  return (
    <div className='img-sec'>
        <img className='img-block' src={url} alt="hello" />
        </div>
  )
}

export default Data