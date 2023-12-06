import React from 'react'
import '../Stylesheet/home.css'

const Join = () => {
  return (
    <div id="join" className="join_wait">
        <div className="wait padding">
            <h2>Join the waitlist</h2>
            <p>We will hit you up when the time comes</p>
            <form action="submit" className="join_form">
                <input type="text" placeholder='Name' />
                <input type="email"  placeholder='Email'/>
                <textarea name="" cols="30" rows="10" placeholder="Got suggestions or ideas for how our platform should work? We're all ears"></textarea>
                <button className='join_btn' >Submit</button>
            </form>
        </div>
        <div className="comm padding">
            <h2>A <span>Community</span> that Cares. A Platform that <span>Empowers</span></h2>
            <h3>"Make an Impact: Change a Life, One Pad at a Time"</h3>
            <p>Women with reproductive health challenges report changing pads or tampons as often as every 45 – 60 minutes. This is an expensive ordeal for women in Africa.</p>
            <p>According to a 2023 BBC research, women on the minimum wage in Africa have to spend one in every seven dollars they earn on sanitary pads. The local cost of the cheapest sanitary pads was beyond the reach of many women.</p>
            <p className='p'>Gleemora is committed to supporting women across Africa who are struggling with "period poverty." We will donate a portion of our profit to this initiative.
</p>        
       




        </div>
    </div>
  )
}

export default Join