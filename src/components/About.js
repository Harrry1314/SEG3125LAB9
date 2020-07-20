import React from 'react'
import Pic from '../homepic.png'

const About=()=>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <img src={Pic} width="300" height="300" class="center"></img>
            <h5>RhodesNight Electronic. is a registered Internet&Electronic company working 
                on Information Intellegence solutions for countries, organizations, and individuals.
                 To achieve our goal, RhodesNight Electronic recruits talent from all around the world,
                  regardless of background, experience, or condition. Furthermore,
                   RhodesNight Electronic is committed to providing the best service 
                   for its customers
                     — to try to change the world.
            </h5>
        </div>
    )
}

export default About