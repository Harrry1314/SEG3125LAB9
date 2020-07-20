import React from 'react'
import Pic from '../homepic.png'

const Cart = () => {

    return (
        <div className="container">
            <h4 className="center">About</h4>
            <img src={Pic} width="300" height="300" class="center"></img>
            <h5>PC: ACER    $1399</h5>
            <br />
            <h5>Router: D-Link    $109</h5>
            <br />
            <h5>Laptop: ASUS    $569</h5>
            <br />
            <h5>Total: $2077</h5>
            <br />
            <form method="get" action="https://www.bestbuy.ca/en-ca">
                <button type="submit">Pay Now</button>
            </form>

        </div>
    )
}

export default Cart