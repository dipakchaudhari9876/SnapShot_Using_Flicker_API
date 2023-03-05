import React, {useEffect,useState } from 'react'
import Data from '../Display/data'
import { FetchData } from '../Fetchdata'

const Bird = () => {

  const [arr, setArr] = useState([])
  useEffect(()=>{
    const data = async()=>{
      const imgdata = await FetchData('bird')
      setArr(imgdata)
    }
    data()
  },[])
  return (
    <div className="bird">
        <h1 className='header'>Bird</h1>
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

export default Bird