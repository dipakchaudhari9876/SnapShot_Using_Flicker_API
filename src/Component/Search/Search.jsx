import React, { useContext, useEffect, useState } from 'react'
import Data from '../Display/data'
import { AppContext } from '../../pages/AppContext'

const Search = () => {
    const [imgData,setImgData] = useState([])
    const {arr,text} = useContext(AppContext)
    // useEffect(()=>{
    //     setImgData(imgData)
    // },[])
  return (
    <div className="mountain">
      <h1 className='header'>{text}</h1>
      <div className="image-container">
        {
          arr.length > 0 && arr.map((post) => {
            return (
              <Data key={post.id} {...post} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Search