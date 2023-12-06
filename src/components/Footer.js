import React from 'react'
import { Link } from 'react-router-dom'
import '../Stylesheet/component.css'

const Footer = () => {
  return (
    <footer className='footer'>
         <Link to="/mission" className='button_link' >Get in touch to join the mission</Link>
         <div className="main_foot">
            <div className="footer_link">
                <Link to='faq'>FAQ</Link>
                <Link to="contact">Contact</Link>
                <Link to="policy">Privacy Policy</Link>
                <Link to='Story' >Founder's Story</Link>
            </div>
            <p>2023 © Gleemora. All rights reserved.</p>
         </div>
    </footer>
  )
}

export default Footer