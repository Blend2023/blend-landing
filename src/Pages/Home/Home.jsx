import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
      <Link to={'/login'}>login Up</Link>
      <br />
      <Link to={'/signup'}>Sign Up</Link>
    </div>
  )
}

export default Home