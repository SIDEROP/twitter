import "./loging.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userGet, userPost } from "../store/slice/userSlice";

const Loging = () => {
  let useNav = useNavigate()
  let usedis = useDispatch()

  let {loadin,userData,user} = useSelector(state=>state.app)

  let [toggelBtn, toggelSetBtn] = useState(true);

  let [loginData, loginSetData] = useState({username:"",password:""})

  let inputFun = e=>{
    loginSetData(pre=>{
      return {...pre,[e.target.name]:e.target.value}
    })
  }

  let signin = (e)=>{
    e.preventDefault()
    usedis(userGet(loginData))
    loginSetData({username:"",password:""})
  }


  // SignUp lgc

  let [validation,validationSet] = useState(false)
  let [singupData, singupSetData] = useState({username:"",password:""})

  let singupInput = (e)=>{
    singupSetData(pre=>{
      return {...pre,[e.target.name]:e.target.value}
    })
  }


  let singup = (e)=>{
    e.preventDefault()
    if (singupData.username.length >= 4) {
      usedis(userPost(singupData))
    } else{
      validationSet(true)
    }
    
  }
  // useEffect(()=>{
  //   useNav("/")
  // },[user])

  if (user) {
    return null
  }

  return (
    <div className="loginBox" id="loginBox">
      {toggelBtn ? (
        <form className="signin" onSubmit={signin}>
          <div className="user_login">
            <div className="userTit">
              <h2>Login</h2>
            </div>
            <div className="inputUser">
              <div className="userName">
                <label htmlFor="#">userName</label>
                <input type="text" name="username" value={loginData.username} onChange={inputFun}/>
              </div>
            </div>

            <div className="inputUser">
              <div className="userName">
                <label htmlFor="#">password</label>
                <input type="text" name="password" value={loginData.password} onChange={inputFun}/>
              </div>
            </div>

            <div className="submit">
              <button>Login</button>
            </div>
          </div>
        </form>
      ) : (
        <form className="SignUp " onSubmit={singup}>
          <div className="user_login">
            <div className="userTit">
              <h2>SignUp</h2>
            </div>
            <div className="user_profile">
              <label htmlFor="#">img:</label>
              <input type="file" name="" id="" />
            </div>
            <div className="inputUser">
              <div className="userName">
                <label htmlFor="#">userName <span>{validation?"min length 4":null}</span> </label>
                <input type="text" name="username" value={singupData.username} onChange={singupInput}/>
              </div>
            </div>

            <div className="inputUser">
              <div className="userName">
                <label htmlFor="#">password</label>
                <input type="text" name="password" value={singupData.password} onChange={singupInput}/>
              </div>
            </div>

            <div className="submit">
              <button onClick={()=>useNav("/twitter")}>SignUp</button>
            </div>
          </div>
        </form>
      )}
      <div className="userToggel">
        <button onClick={() => toggelSetBtn((pre) => !pre)}>
          {toggelBtn ? "SignUp" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Loging;
