import React, { useEffect, useState } from 'react'
import Data from '../Display/data'
import { FetchData } from '../Fetchdata'

const Beaches = () => {
  const [arr, setArr] = useState([])
  useEffect(() => {
    const data = async()=>{
      const imgdata = await FetchData('beaches')
      setArr(imgdata)
    }
    data()


  }, [])
  return (
    <div className="beaches">
      <h1 className='header'>Beaches</h1>
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

export default Beaches