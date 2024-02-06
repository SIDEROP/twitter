import React from 'react'

const Edit = ({id}) => {
    console.log(id)
  return (
    <div>
        <form onSubmit={e=>{
            e.preventDefault()
                
            }} >
            <label htmlFor="#">
                title:
                <input type="text" name='title' />
            </label>
            <label htmlFor="#">
                comment:
                <input type="text" name='comment' />
            </label>
            <button>Save</button>
        </form>
    </div>
  )
}

export default Edit