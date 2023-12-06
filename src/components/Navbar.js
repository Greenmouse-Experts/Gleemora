import React, {useState} from 'react'
import '../Stylesheet/home.css'
import { Link } from 'react-router-dom'
import {HashLink } from 'react-router-hash-link'

const Navbar = () => {
  
  const [fix, setFix] = useState(false)

  function setFixed() {
    if (window.scrollY >= 0) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener("scroll", setFixed)

  return (
    <div className={fix? 'navbar fixed' : 'navbar'}><Link to="/">gleemora</Link><div className="nav_link"><Link to="/mission" >Become a celebrity survivor</Link><HashLink smooth to="/#join">Join a waitlist</HashLink></div>
    </div>
  )

}

export default Navbar