import React, {useEffect, useState } from 'react'
import { FetchData } from '../Fetchdata'
import Data from '../Display/data'

const Mountain = () => {

  const [arr, setArr] = useState([])
  useEffect(() => {
    const data = async () => {
      const imgdata = await FetchData('mountain')
      setArr(imgdata)
    }
    data()
  }, [])

  return (
    <div className="mountain">
      <h1 className='header'>Mountain</h1>
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

export default Mountain