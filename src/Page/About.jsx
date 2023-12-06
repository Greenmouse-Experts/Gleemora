import React from 'react'
import { Header } from '../components/Header'
import about from '../Image/about.png'

const About = () => {
    const text = [{
        id:1,
        head: 'Our Vision',
        body: "To be the global nexus of shared experiences, and relentless support, catalyzing positive transformations in women's health and wellbeing"
    },
    {
        id:2,
        head: 'Our Mission',
        body: "At Gleemora, we bridge the gap between inspiration and connection, offering a platform where women globally can find solace, empowerment, and understanding."
    },
]

  return (
    <div className="about_main">
        <Header title="About Us"/>
        <div className="about padding">
            <div className="about_text">
                {text.map((item)=>
                <div className="our">
                    <h3>{item.head}</h3>
                    <p>{item.body}</p>
                </div>
                )}
            </div>
            <img src={about} alt="" />
        </div>

    </div>
  )
}

export default About