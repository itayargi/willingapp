import React, { Component } from 'react'
import countdown from '../pics/countdown.svg'
import { Link } from "react-router-dom";
import axios from 'axios'


export default class VerifyCode extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        token:this.props.token,
        code:[],
     }
   }

   verifyPhone=()=>{
    //  debugger
    clearInterval(this.intervalId)
    axios.post('/users/verify', this.state).then(response=>{
      console.log(response.data)
      if(response.data.success){
        this.props.addVerify(response.data.success)
      }
    })
    .catch(error=>{
      // console.log(error)
      console.log('Error json file' , error)
  })
   }
   componentDidMount(){
     var counter=60
     console.log(this.props.status)
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
        // var counter = 60;
        // const


        return (
            <div className="container" style={{height:"100vh",position:"relative",textAlign:"center",}}>
            <div style={{position:"absolute", bottom:"10%", width:"100%"}}>
                
               <Link to='/onboardingMain'><button onClick={this.verifyPhone} style={{backgroundColor:"rgb(80, 210, 194)", color:"white", fontSize:"14px", borderRadius:"50pt", height:"25pt",  margin:"auto",width:"150pt"}}>NEXT</button></Link>

            </div>
                <div style={{textAlign:"center",width:"100%"}}>
                    <h2>VERIFICATION CODE</h2>
                </div>
                <div style={{textAlign:"center", marginBottom:100}}>
                    <p>Please enter the SMS Verification code sent to you:</p>
                </div>

              <div style={{position:"relative", width:"50px", margin:"0 auto"}}>
                <p style={{position:"absolute",width:"100%", textAlign:"center",top:"20px"}} id="timerPos"></p>
                <img style={{}} src={countdown} alt="countDown" width="100%"></img>
              </div>
            <div style={{textAlign:"center"}}>
                <input onChange={(e)=>{this.setState({code:e.target.value})}} style={{}} type="password" size="6" maxLength="6" required></input>
                <hr width="100px"/>
            </div>
            <div style={{textAlign:"center"}}>
            <p>6-digit code</p>
            </div>
            </div>
        )
    }
}
