import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../components.css'
import GenreListContainer from '../genres/Genre.component'
import { FaListUl } from 'react-icons/fa'


function HeaderContainer() {
  
  return (
    <>
      <div className='header-container'>
        <div className='header-name'>
          {/* <span className='mobile-icon' onClick={handleClick}><FaListUl /></span> */}
          <Link to='/' n className='screen'><h2>Naza's Movie Database</h2></Link>
        </div>
        {/* <Link to='/aboutMe'><h3>About Naza</h3></Link> */}
      </div>
      
    </>
  )
}

export default HeaderContainer