import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Loging from '../components/Loging'

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Loging/>
    </>
  )
}

export default Layout