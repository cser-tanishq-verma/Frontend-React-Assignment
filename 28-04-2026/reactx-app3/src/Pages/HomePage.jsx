import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h1> This is HomePage</h1>
      <div>
      <Link to ="/">Hero Hero</Link>
      <Link to ="kitchen">Kitchen</Link>
      </div>
      <Outlet/>
      <h3>This is end of HomePage</h3>
    </>
  )
}

export default HomePage
