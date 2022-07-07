import React from 'react'
import InputHome from './InputHome'
import ash from '../../img/ashgif.gif'

const HomeScreen = () => {
    return (
        <div className="home">
            <div>
                <h2>Hello trainer!</h2>
                <img src={ash} alt="" />
            </div>
            <p>Please enter your name to continue</p>
            <div><InputHome /></div>
        </div>
    )
}

export default HomeScreen