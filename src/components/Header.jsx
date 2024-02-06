import { Link, useNavigate } from "react-router-dom"
import "./header.css"
import React from 'react'
import { useDispatch } from "react-redux"
import { userGet } from "../store/slice/userSlice"

const Header = () => {
  let usedis = useDispatch()
  let useNav = useNavigate()
  return (
    <div className='header'>
      <h1>Twitter</h1>
      <nav>
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