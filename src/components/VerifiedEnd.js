import React, { Component } from 'react'
import '../App.css'
import verified from '../pics/verified.svg'
import { Link } from "react-router-dom";

export default class VerifiedEnd extends Component {

    componentDidMount(){

    }

    render() {
        return (
            <div style={{height:"100vh", position:"relative"}}>
                <div id="picUp">
                    <h2 style={{paddingTop:"30px", color:"rgb(253, 253, 253)"}}>Verified!</h2>
                    <img style={{margin:"auto"}} src={verified} alt="verified"></img>
                </div>
                <div style={{height:"150pt", display:"grid"}}>
                    <p style={{color:"rgb(74, 75, 75)", margin:"auto", fontSize:"40pt", paddingLeft:"40px"}}>Welcome to Willing!</p>
                </div>
                <div style={{position:"absolute", bottom:"10%", width:"100%", display:"grid"}}>
                
               <Link style={{margin:"auto"}} to='/homePage'><button style={{backgroundColor:"rgb(80, 210, 194)", width:"200pt", height:"35pt", borderRadius:"50pt", color:"white", margin:"auto"}}>START</button></Link>

                </div>
            </div>
        )
    }
}
