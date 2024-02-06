import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Profile from './pages/Profile'

let router = createBrowserRouter([
    {
        path:"twitter/",
        element:<Layout/>,
        children:[
            {
                path:"/twitter/",
                element:<Home/>
            },
            {
                path:"/twitter/profile",
                element:<Profile/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>

)
