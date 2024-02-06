import { Link, useNavigate } from "react-router-dom"
import "./header.css"
import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { userGet, userSearch } from "../store/slice/userSlice"

const Header = () => {
  let usedis = useDispatch()
  let useNav = useNavigate()
  let [toggel,setToggel] = useState(false)
  return (
    <div className='header'>
      <h1>Twitter</h1>
      <nav>
        {
          toggel && <div className="searchBox">
          <input type="search" onChange={e=>usedis(userSearch(e.target.value))}/>
        </div>
        }
      <button onClick={()=>{
        setToggel(pre=>!pre)
        usedis(userSearch(null))
      }}>search</button>
        <Link to="/twitter"><span className="navLinks">Home</span></Link>
        <Link to="profile"><span className="navLinks">Profile</span></Link>

        <div className="login">
          <button onClick={()=>{
            useNav("/twitter")
            usedis(userGet({username:"",password:""}))
            }}>Logout</button>
        </div>
      </nav>
    </div>
  )
}

export default Header