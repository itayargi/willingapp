import React, { Component } from 'react'
import onboarding3 from '../pics/Onboarding_03.png'
import './OnBoarding2.css'

export default class OnBoarding3 extends Component {
    render() {
        return (
            <div className="container">
            <div className="firstPart">
                <img className="pic" src={onboarding3}></img>
            </div>
            <div className="middlePart">
            <div className="kituv">
                <h3>מיקרו-התנדבות</h3>
                <p>רוצה לעזור בקטנה? אתם בוחרים בוחר למי ומתי</p>
                </div>
            </div>
            <div className="buttons">
               
               <button className="signUp">SING IN</button>

                </div>
            </div>
        )
    }
}
