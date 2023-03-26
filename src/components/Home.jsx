import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=''>
      <h2 className='text-center font-bold text-xl py-6 text-white/80'>Welcome to Pizza Joint</h2>
      <Link to='/base' className='flex justify-center'>
      <button className='text-white py-[10px] px-[30px] rounded-[50px] border-2 border-white cursor-pointer opacity-[0.7]'>
        Create You Pizza
      </button>
        
      </Link>
    </div>
  )
}

export default Home