

import React from 'react'

const Header = () => {
  return (
    <div className='HeaderSection'>
        <div className='left'>
            <div className="title">
                <h2>UrbanVibe</h2>
                <img src="assets/log shopping.png" alt="" />
            </div>
        </div>
        <div className='center'>
            <ul>
                <li>Woman</li>
                <li>Men</li>
                <li>Children</li>
                <li>Beauty</li>              
            </ul>
        </div>
        <div className="search">
            <input type="text" placeholder='search..' />
        </div>
        <div className='right'>
            <div className='signin'>
                signin/signup
            </div>
            <div className='cart'>
                Cart
            </div>
        </div>
    </div>
  )
}

export default Header