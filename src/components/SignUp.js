import React, { Component } from 'react'
import willing from '../pics/willing.png'
import { Link } from "react-router-dom";

export default class SignUp extends Component {
    render() {


        return (
           
        <div style={{height:"100vh", position:"relative"}}>
           <div style={{width:"100%", }}>
               <img style={{objectFit:"cover", margin:"auto",width:"100%",maxHeight:"50vh"}} src={willing} alt="topPic"></img>
           </div>
           <div style={{width:"100%", textAlign:"center", marginTop:"50px"}}>
               
               <Link to='/register'><button style={{backgroundColor:"rgb(80, 210, 194)", width:"250pt", height:"35pt", borderRadius:"50pt", color:"white"}}>SIGN UP</button></Link>
           </div>
           <div style={{textAlign:"center", marginTop:"30px", }}>
               <p style={{margin:"auto"}}>By clicking on this button you agree to </p>
               <Link to='/termsOfUse'><p style={{color:"rgb(0, 130, 242)"}}>Willing terms of use</p></Link>
           </div>
           
      {/* end container */}
      </div>
           
        )
    }
}
