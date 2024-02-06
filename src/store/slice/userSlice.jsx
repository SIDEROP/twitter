import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// login user
export let userGet = createAsyncThunk("userGet", async (data,{rejectWithValue})=>{
    let rdb = await fetch(`https://api-teal-eight.vercel.app/api/user/post`,{
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

//create user
export let userPost = createAsyncThunk("userPost", async (data,{rejectWithValue})=>{
    let rdb = await fetch(`https://api-teal-eight.vercel.app/api/user/create`,{
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

// userEdit
export let userEdit = createAsyncThunk("userEdit", async (data,{rejectWithValue})=>{
    let rdb = await fetch(`https://api-teal-eight.vercel.app/api/user/new`,{
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




export let getEditUser = createAsyncThunk("getEditUser", async (data,{rejectWithValue})=>{
    let rdb = await fetch(`https://api-teal-eight.vercel.app/api/user/post`,{
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




export let twitterUser = createSlice({
    name:"twitterUser",
    initialState:{
        loadin:false,
        error:null,
        userData:[],
        user:false,
        userEdi:[]
    },
    reducers:{
       async getIditData(state, action) {
            
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(userGet.pending,(state,action)=>{
            state.loadin = true,
            state.user = false
        })
        .addCase(userGet.fulfilled,(state,action)=>{
            state.loadin = false,
            state.userData = action.payload
            if (state.userData) {
                state.user = true
            }
        })
        .addCase(userGet.rejected,(state,action)=>{
            state.loadin = false,
            state.error = action.payload
        })

        //create user
        builder.addCase(userPost.pending,(state,action)=>{
            state.loadin = true,
            state.user = false
        })
        .addCase(userPost.fulfilled,(state,action)=>{
            state.loadin = false,
            state.userData = action.payload
            if (state.userData) {
                state.user = true
            } else{
                state.user = false
            }
        })
        .addCase(userPost.rejected,(state,action)=>{
            state.loadin = false,
            state.error = action.payload
        })
        //userEdit
        builder.addCase(userEdit.fulfilled,(state,action)=>{
            state.userEdi = action.payload
        })

        // getEditUser
        builder.addCase(getEditUser.fulfilled,(state,action)=>{
            state.userData = action.payload
        })
    }
})
export default twitterUser.reducer