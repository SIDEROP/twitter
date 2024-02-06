import "./edit.css"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProfilePost, postUpdate } from '../store/slice/postSlice'

const Edit = ({id,user}) => {
    let dis = useDispatch()
    let [postEdit,SetpostEdit] = useState({_id:id,title:"",comment:""})
    let edit_ = e=>{
        SetpostEdit(pre=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }
  return (
    <div className='editPost__'>
        <form onSubmit={e=>{
            e.preventDefault()
             dis(postUpdate(postEdit))
             setTimeout(()=>{
                dis(getProfilePost(user))
                console.log(user)
              },500)
            }} >
            <label htmlFor="#">
                title:
                <input type="text" name='title' onChange={edit_}/>
            </label>
            <label htmlFor="#">
                comment:
                <input type="text" name='comment' onChange={edit_}/>
            </label>
            <button>Save</button>
        </form>
    </div>
  )
}

export default Edit