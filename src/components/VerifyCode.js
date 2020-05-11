import React, { Component } from 'react'
import countdown from '../pics/countdown.svg'
import { Link } from "react-router-dom";
import axios from 'axios'
import '../App.css'

export default class VerifyCode extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        token:this.props.token,
        code:[],
     }
   }

   verifyPhone = async ()=>{
    //  debugger
      clearInterval(this.intervalId)
      console.log(this.state)
      try{
        let res = await axios({
            url:"/users/verify",
            method:"post",
            data:this.state,
        })
        let data = res.data;
        console.log(data)
        if(data.succes){
            this.props.addVerify(true)
          }
    }catch (e){
        console.log(`😱 Axios verification code failed: ${e}`);
        alert(`${e}`)
    }
   }
   componentDidMount(){
     var counter=60
    //  console.log(this.props.status)
     const intervalId = setInterval(() => {
       counter--
      if(!this.props.status && counter && document.getElementById('timerPos')){
        document.getElementById('timerPos').innerHTML=counter
      }
      else {
        clearInterval(intervalId);
      }
    if (counter === 0 || this.props.status) {
        console.log('Done');
        clearInterval(intervalId);
      }
    }, 1000);
   }
   
    
    render() {
        return (
            <div id="mainContainer" className="container" style={{height:"100vh",position:"relative",textAlign:"center",}}>
            
                <div style={{textAlign:"center",width:"100%",paddingTop:"40px",color:"rgb(253, 253, 253)" }}>
                    <h2>VERIFICATION CODE</h2>
                </div>
                <div style={{textAlign:"center", marginTop:"10px", fontSize:"13pt"}}>
                    <p style={{width:"220pt", margin:"auto", color:"rgb(255, 255, 255)"}}>Please enter the SMS Verification code sent to you:</p>
                </div>

              <div style={{position:"relative", width:"50px", margin:"auto", marginTop:"70px", marginBottom:"70px" }}>
                <p style={{position:"absolute",width:"100%", textAlign:"center",top:"20px"}} id="timerPos"></p>
                <img style={{}} src={countdown} alt="countDown" width="100%"></img>
              </div>
            <div style={{textAlign:"center"}}>
                <input onChange={(e)=>{this.setState({code:e.target.value})}} style={{fontSize:"20px", textAlign:"center", background:"none", color:"white"}} type="password" size="6" maxLength="6" required></input>
                <hr width="100px"/>
            </div>
            <div style={{textAlign:"center", fontSize:"15pt",color:"rgb(255, 255, 255)"}}>
            <p>6-digit code</p>
            </div>
            <div style={{position:"absolute", bottom:"10%", width:"100%"}}>
               <Link to='/verifiedEnd'><button onClick={this.verifyPhone} style={{backgroundColor:"rgb(80, 210, 194)", color:"white", fontSize:"14px", borderRadius:"50pt", height:"25pt",  margin:"auto",width:"150pt"}}>NEXT</button></Link>
            </div>
            </div>
        )
    }
}
