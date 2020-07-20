import React from 'react'
import Pic from '../homepic.png'
import Pic2 from '../sale1.png'
import Pic3 from '../sale2.png'
import Pic4 from '../sale3.png'

const Home = () => {
    return (
        <div className="container">
            <h4 className="center">Home</h4>
            <img src={Pic} width="300" height="300" class="center"></img>
            <h1>Welcome to the Rhodes Island!</h1>
            <br />
            <h4>Where you can find anything you want.</h4>
            <br />
            <img src={Pic2} width="1133" height="395"></img>
            <img src={Pic3} width="1133" height="395"></img>
            <img src={Pic4} width="1133" height="395"></img>
            <br /><br /><br /><br /><br />
            <footer>Designed by Haochu Chen 300067058</footer>
        </div>
    )
}

export default Home