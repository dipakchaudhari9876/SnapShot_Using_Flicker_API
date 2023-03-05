import React, { useRef, useState, useEffect, useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
import './navbar.css'
import { FetchData } from '../Fetchdata';
import { AppContext } from '../../pages/AppContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate()
  const {dispatch } = useContext(AppContext)
  const [err,setError] = useState("")

  const HandleSubmit = () => {
    if (searchText) {
      const data = async () => {
        const imgdata = await FetchData(searchText)
        dispatch({
          type: 'Search',
          data: imgdata,
          text: searchText
        })
        navigate('/search')
        setSearchText("")
      }
      data()
      setError('')
      
    }else{
      setError('Please type what to search')
    }
  }

  // useEffect(()=>{
  //   if(searchText){
  //     const data = async () => {
  //       const imgdata = await FetchData(searchText)
  //       dispatch({
  //         type:'Search',
  //         data:imgdata,
  //         text:searchText
  //       })
  //       navigate('/search')
  //       searchData.current=""
  //     }
  //     data()
  //   }
  // },[searchText])


  return (
    <div className="navbar-cont">
      <div className="logo">SnapShot</div>
      {err && <p style={{color:'red'}}>{err}</p>}
      <div className="navbar-search">
        <input type="text"
          placeholder='Search'
          className='input-text'
          //  onChange={(e)=>{
          //   searchData.current = e.target.value
          //  }}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
          value={searchText}
        />
        <button
          className='btn-search'
          //  onClick={()=>{setSearchText(searchData.current)}}
          onClick={HandleSubmit}
        ><SearchIcon /></button>
      </div>
      
      <div className="container">
        <Link className='navbar-sec' to={'/'}>Mountain</Link>
        <Link className='navbar-sec' to={'/beaches'}>Beaches</Link>
        <Link className='navbar-sec' to={'/bird'}>Bird</Link>
        <Link className='navbar-sec' to={'/food'}>Food</Link>
      </div>
    </div>
  )
}

export default Navbar