import React, { useEffect, useState } from 'react'
import './pagesCss/home.css'
import { useDispatch, useSelector } from 'react-redux'
import { postGetAll, postPost } from '../store/slice/postSlice'

const Home = () => {
  let {user} = useSelector(state=>state.app)
  let {userData,userSearch} = useSelector(state =>state?.app)
  let disPa = useDispatch()
  let {postUserdata, loadin} = useSelector(state =>state.postapp)

  let [ postData,setPostdata] = useState({user_id:"",name:"",title:"code step by step...",comment:""})

  let UserPostInput = e=>{
    setPostdata(pre=>{
      return {...pre,[e.target.name]:e.target.value,user_id:userData?._id,name:userData?.username}
    })
  }


  let postSub = e=>{
    e.preventDefault()
    disPa(postPost(postData))
  }

  useEffect(()=>{
    disPa(postGetAll())
  },[])


  if (!user) {
    return null
  }
  
  return (
    <div className='Home'>
      <div className="searchApi">
      {
            userSearch && userSearch.map(val=>(
                <h3>@{val.username}</h3>
            ))
      }
      </div>
      <div className="postBox">
        <div className="userPost">
            <form className='formUser' onSubmit={postSub}>
              <div className="status">
                <label htmlFor="#">title</label>
                <input type="text" placeholder='title' name='title' value={postData.title} onChange={UserPostInput}/>
              </div>
              <div className='comment'>
                <label htmlFor="#">comment</label>
                <textarea name="comment" cols="10" rows="5" value={postData.comment} placeholder="What's on your mind?" onChange={UserPostInput}></textarea>
              </div>
              <div className='btnPost'>
                <button>Send</button>
              </div>
            </form>
        </div>
        <div className="allpost">
          {
            postUserdata && postUserdata?.map((val)=>(
              <div className='allUserPro' key={val._id}>
                <h3 className='statusName_'>@{val.name}</h3>
                <div className='statusUser_'>
                    {val.title}
                </div>
                <div className="comment">
                  {val.comment}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home