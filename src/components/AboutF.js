import React from 'react'
import Pic from '../homepic.png'

const AboutF=()=>{
    return(
        <div className="container">
            <h4 className="center">À propos</h4>
            <img src={Pic} width="300" height="300" class="center"></img>
            <h5>RhodesNight Electronic. est une société Internet et électronique enregistrée travaillant
                 sur les solutions d'Intelligence de l'Information pour les pays, les organisations et les particuliers.
                  Pour atteindre notre objectif, RhodesNight Electronic recrute des talents du monde entier,
                   quels que soient les antécédents, l'expérience ou la condition. En outre,
                    RhodesNight Electronic s'engage à fournir le meilleur service
                    pour ses clients
                      - pour essayer de changer le monde.
            </h5>
        </div>
    )
}

export default AboutF