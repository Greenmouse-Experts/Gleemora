import React from 'react'
import '../Stylesheet/home.css'
import { Link } from 'react-router-dom'
import Main from './Main'


const Home = () => {
  return (
    <div className="main_page">
        <div className="home">
          <div className="home_text">
            <h2>Navigate your <span>health</span> challenges <br />
          hand-in-hand with <span>celebrities</span> & influential <br />figures who've walked your path</h2>

        <Link className='button_link'>Meet the Celebrity Survivors</Link>
          </div>
        
      </div>
      <Main/>
    </div>
    
  )
}

export default Home