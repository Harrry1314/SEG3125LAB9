import React from 'react'
import Pic from '../homepic.png'
import { Link, NavLink } from 'react-router-dom'

const Search = () => {
    return (
        <div className="container">
            <h4 className="center">Search</h4>
            <img src={Pic} width="300" height="300" class="center"></img>
            <br />
            <h1 className="center">What do you want today?</h1>
            <button><NavLink to="/pc">PC</NavLink></button>
            <button><NavLink to="/laptop">Laptop</NavLink></button>
            <button><NavLink to="/headphone">Headphone</NavLink></button>
            <button><NavLink to="/router">Router</NavLink></button>
            <br /><br />
        </div>
    )
}

export default Search