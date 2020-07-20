import React from 'react'
import Pic from '../homepic.png'
import { Link, NavLink } from 'react-router-dom'
import Pic1 from '../lp1.png'
import Pic2 from '../lp2.png'
import Pic3 from '../lp3.png'

const Laptop = () => {
    return (
        <div className="container">
            <h4 className="center">Search</h4>
            <img src={Pic} width="300" height="300" class="center"></img>
            <button><NavLink to="/search">Search</NavLink></button>
            <button><NavLink to="/pc">PC</NavLink></button>
            <button><NavLink to="/headphone">Headphone</NavLink></button>
            <button><NavLink to="/router">Router</NavLink></button>
            <br /><br />
            <img src={Pic1} width="1283" height="570"></img>
            <br /><br /><br /><br />
            <img src={Pic2} width="1283" height="570"></img>
            <br /><br /><br /><br />
            <img src={Pic3} width="1283" height="570"></img>
            <br /><br />
        </div>
    )
}

export default Laptop