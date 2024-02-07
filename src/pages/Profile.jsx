import React, { useEffect, useState } from 'react'
import "./pagesCss/profile.css"
import { useDispatch, useSelector } from 'react-redux'
import { deleteProfilePost, getProfilePost } from '../store/slice/postSlice'
import { getEditUser, userEdit } from '../store/slice/userSlice'
import Edit from '../components/Edit'

const Profile = () => {
  let dis = useDispatch()
  let {userData} = useSelector(state =>state?.app)
  console.log(userData)
  let {allUseProfiledata} = useSelector(state =>state?.postapp)

  let [editName, editSetName] = useState({_id:"",name:"",status:""})
  let [toggelLo,setToggel] = useState(false)
  let [tooggel,setBtnToggel] = useState(false)

  let [editPost,setEditPost] = useState(null)
  


  useEffect(()=>{
    postGEt()
  },[])
  // useEffect(()=>{
  //   postGEt()
  // },[userData])

  let postGEt = ()=>{
    if (userData) {
      dis(getProfilePost(userData?._id))
   }
  }

  let inputU_ = e=>{
    editSetName(pre=>{
      return {...pre,[e.target.name]:e.target.value,_id:userData?._id}
    })
  }

  let submitEditData = e=>{
    e.preventDefault()
    editName && dis(userEdit(editName))
    setTimeout(()=>{
      dis(getEditUser({username:userData.username,password:userData.password}))
    },500)
  }


  return (
    <div className='Profile'>
      <div className="profileBox">
        <div className="profi_">
          <div className="img">
  
          </div>
        </div>
        <div className='userName_'>
          <h3>@{userData?.username}</h3>
          <h2 >{userData?.name}</h2>
          <h4 >{userData?.status}</h4>
          {
            toggelLo && <form onSubmit={submitEditData} className='editID'>
              <div className='editID'>
                <label htmlFor="#">Name</label>
                <input type="text" name='name' value={editName.name} onChange={inputU_}/>
                <label htmlFor="#">status</label>
                <input type="text" name='status' value={editName.status} onChange={inputU_}/>
                <button>Save</button>
            </div>
            </form>
          }
          <button id='btn__' onClick={()=>setToggel(pre=>!pre)}>{toggelLo?"Cancel":"Edit"}</button>
        </div>
      </div>
      <div className='userPost_'>
        {
          tooggel && <Edit id={editPost} user={userData._id}/>
        }
            {
              allUseProfiledata && allUseProfiledata?.map((val)=>(
                <div className='allUserPro' key={val._id}>
                  <div className='statusUser_'  >
                      {val.title}
                      {console.log(val)}
                  </div>
                  <div className="comment">
                    {val.comment}
                  </div>
                  <div className="edidel">
                    <button onClick={()=>{
                      setBtnToggel(pre=>!pre)
                      setEditPost(val._id)
                    }}>{"Edit"}</button>
                    <button onClick={()=>{
                      dis(deleteProfilePost(val._id))
                      setTimeout(()=>{
                        dis(getProfilePost(userData?._id))
                      },500)
                    }}>Delete</button>
                  </div>
                </div>
              ))
            }
      </div>
    </div>
  )
}

export default Profile