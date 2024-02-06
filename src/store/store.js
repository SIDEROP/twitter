import { configureStore } from "@reduxjs/toolkit";
import twitterUser  from "./slice/userSlice";
import  twitterPost  from "./slice/postSlice";

export let store = configureStore({
    reducer:{
        app:twitterUser,
        postapp:twitterPost
    }
})