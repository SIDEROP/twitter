import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// get all post

export let postGetAll = createAsyncThunk("postGetAll", async (data,{rejectWithValue})=>{
    let rdb = await fetch(`https://api-teal-eight.vercel.app/api/post/get`)
    
    try {
        let dat = await rdb.json()
        return dat
    } catch (error) {
        return rejectWithValue(error)
    }
})

// login user
export let postPost = createAsyncThunk("postPost", async (data,{rejectWithValue})=>{
    let rdb = await fetch(`https://api-teal-eight.vercel.app/api/post/post`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(data)
    })
    

    try {
        let dat = await rdb.json()
        return dat
    } catch (error) {
        return rejectWithValue(error)
    }
})

// get all post userProfile
export let getProfilePost = createAsyncThunk("getProfilePost", async (data,{rejectWithValue})=>{
    let rdb = await fetch(`https://api-teal-eight.vercel.app/api/post/allpost/${data}`,{
        method:"POST"
    })
    

    try {
        let dat = await rdb.json()
        return dat
    } catch (error) {
        return rejectWithValue(error)
    }
})

// delete post
export let deleteProfilePost = createAsyncThunk("deleteProfilePost", async (data,{rejectWithValue})=>{
    let rdb = await fetch(`https://api-teal-eight.vercel.app/api/post/delete/${data}`,{
        method:"DELETE"
    })
    

    try {
        let dat = await rdb.json()
        return dat
    } catch (error) {
        return rejectWithValue(error)
    }
})




export let twitterPost = createSlice({
    name:"twitterPost",
    initialState:{
        loadin:false,
        error:null,
        postUserdata:[],
        allUseProfiledata:[],
        delete:[]
    },
    reducers:(state,action)=>{

    },
    extraReducers:(builder)=>{

        //create post user
        builder.addCase(postPost.pending,(state,action)=>{
            state.loadin = true
        })
        .addCase(postPost.fulfilled,(state,action)=>{
            state.loadin = false,
            state.postUserdata.push( action.payload)
        })
        .addCase(postPost.rejected,(state,action)=>{
            state.loadin = false,
            state.error = action.payload
        })

        //get all post
        builder.addCase(postGetAll.pending,(state,action)=>{
            state.loadin = true
        })
        .addCase(postGetAll.fulfilled,(state,action)=>{
            state.loadin = false,
            state.postUserdata = action.payload
        })
        .addCase(postGetAll.rejected,(state,action)=>{
            state.loadin = false,
            state.error = action.payload
        })

        // get all post userProfile
        builder.addCase(getProfilePost.pending,(state,action)=>{
            state.loadin = true
        })
        .addCase(getProfilePost.fulfilled,(state,action)=>{
            state.loadin = false,
            state.allUseProfiledata = action.payload
        })
        .addCase(getProfilePost.rejected,(state,action)=>{
            state.loadin = false,
            state.error = action.payload
        })

        // delete post
        builder.addCase(deleteProfilePost.fulfilled,(state,action)=>{
            state.loadin = false,
            state.delete = action.payload
        })
    }
})

export default twitterPost.reducer