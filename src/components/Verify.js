import React, { Component } from 'react'
import './Verify.css'


export default class Verify extends Component {
    render() {
        return (
            <div style={{height:"100vh"}} className="container">
                <div className="verifyUper">
                    <h4 style={{marginTop:20, color:"white"}}>VERIFY YOUR PHONE NUMBER</h4>

                </div>
                <div className="centerText">
                    <p>Please enter your country code and phone number below. The authentication code will be sent to via SMS shortly:</p>
                </div>
                <div className="inputsDown">
                    {/* <input style={{color:"black", fontWeight:"bold"}} className="inpAll" placeholder="Israel (+972)"></input> */}
                    <select className="inpAll" style={{}}>
                        <option>Israel (+972)</option>
                        <option>USA (+1)</option>
                    </select>
                    <br></br>
                    <input type="number" style={{color:"grey"}} className="inpAll" placeholder="Phone Number"></input>
                    <br/>
                </div>
                <button className="btn">Next</button>

            </div>
        )
    }
}
