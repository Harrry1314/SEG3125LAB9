import React from 'react'
import Pic from '../homepic.png'
import { Link, NavLink } from 'react-router-dom'
import Pic1 from '../pc1.png'
import Pic2 from '../pc2.png'
import Pic3 from '../pc3.png'

const Pc = () => {
    return (
        <div className="container">
            <h4 className="center">Search</h4>
            <img src={Pic} width="300" height="300" class="center"></img>
            <button><NavLink to="/search">Search</NavLink></button>
            <button><NavLink to="/laptop">Laptop</NavLink></button>
            <button><NavLink to="/headphone">Headphone</NavLink></button>
            <button><NavLink to="/router">Router</NavLink></button>
            <br /><br />
            <img src={Pic1} width="1378" height="614"></img>
            <br /><br /><br /><br />
            <img src={Pic2} width="1378" height="614"></img>
            <br /><br /><br /><br />
            <img src={Pic3} width="1378" height="614"></img>
            <br /><br />
        </div>
    )
}

export default Pc