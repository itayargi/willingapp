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
        if(data.success){
            // this.props.addVerify(true)
            localStorage.setItem('valid', true)
            console.log('the code is correct')
          }
          else{
            console.log('the code is NOT correct')

          }
    }catch (e){
        console.log(`😱 Axios verification code failed: ${e}`);
        alert(`${e}`)
    }
   }
  //  pop up screen
   sendAgain=()=>{
     document.getElementById('verificationCode').style.display="none"
     var popScreen = document.querySelector('.allScreen');
     popScreen.classList.add('popActivat')
   }
   objectTransfer=(num)=>{
    var newstr="972"
    newstr=newstr+num.slice(1)
    return {
        phone:newstr
    }
}
// yes/no btn pop screen 
   btnQuestionYes=async()=>{
    //  send the code to the same number
        var popScreen = document.querySelector('.allScreen');
        popScreen.classList.remove('popActivat')
        document.getElementById('verificationCode').style.display="inline"
        this.timerClock()
        var localPhone= localStorage.getItem('myPhone')
        var myPhone=this.objectTransfer(localPhone)
        
        try{
          let res = await axios({
              url:"/users/register",
              method:"post",
              data:myPhone,
              
          })
          let data = res.data.token;
          localStorage.setItem('valid', false)
          console.log(data)
          //saving the token in local storage
          localStorage.setItem('token', data)
      }catch (e){
          console.log(`😱 Axios requestRegisterAgain failed: ${e}`);
          alert(`${e}`)
      }
   }
   btnQuestionNo=()=>{
    var popScreen = document.querySelector('.allScreen');
    popScreen.classList.remove('popActivat')
    document.getElementById('verificationCode').style.display="inline"
    this.timerClock()
   }

  //  timer display
   timerClock=()=>{
     let valid= localStorage.getItem('valid')
     if (valid=="false"){
       valid=false
     }
     else{
       valid= true
     }
     var counter=60
     const intervalId = setInterval(() => {
      counter--
     if(!this.props.status && counter && document.getElementById('timerPos') && !valid){
       document.getElementById('timerPos').innerHTML=counter
     }
     else {
       clearInterval(intervalId);
       if(document.getElementById('timerPosEnd'))
      document.getElementById('timerPosEnd').style.display="inline"

      //  let circle='<button onClick={this.sendAgain}>OK</button>'
      //  document.getElementById('timerPosEnd').innerHTML=circle
       // document.getElementById('timerPos').innerHTML=""
     }
   if (counter === 0 || this.props.status) {
       console.log('Done');
       clearInterval(intervalId);
     }
   }, 1000); 

   }
   componentDidMount(){
     this.timerClock()
    //  var counter=5
    //  console.log(this.props.status)
    //  const intervalId = setInterval(() => {
    //    counter--
    //   if(!this.props.status && counter && document.getElementById('timerPos')){
    //     document.getElementById('timerPos').innerHTML=counter
    //   }
    //   else {
    //     clearInterval(intervalId);
    //     document.getElementById('clockDiv').innerHTML='<a style={{color:white, fontSize:12pt, zIndex:5}} href=/verify>send again</a>'
    //     // document.getElementById('timerPos').innerHTML=""
    //   }
    // if (counter === 0 || this.props.status) {
    //     console.log('Done');
    //     clearInterval(intervalId);
    //   }
    // }, 1000);
   }
   
    
    render() {
        return (
            <div id="mainContainer" className="container" style={{height:"100vh",textAlign:"center",}}>
            {/* pop window question */}
            <div className="allScreen">
              <div className="popWindow">
                  <h5>Send the code to the same number?</h5>
                  <div className="btnYesNo">
                    <button onClick={this.btnQuestionYes}>yes</button>
               <Link to='/register'><button onClick={this.btnQuestionNo} >no</button></Link>
                    
                    
                  </div>
              </div>
            </div>
            {/* end pop */}
                <div style={{textAlign:"center",width:"100%",paddingTop:"40px",color:"rgb(253, 253, 253)" }}>
                    <h2>VERIFICATION CODE</h2>
                </div>
                <div style={{textAlign:"center", marginTop:"10px", fontSize:"13pt"}}>
                    <p style={{width:"220pt", margin:"auto", color:"rgb(255, 255, 255)"}}>Please enter the SMS Verification code sent to you:</p>
                </div>
                
                <div style={{marginBottom:"20px"}}>
                  <div id="clockDiv" style={{position:"relative", width:"50px", margin:"auto", marginTop:"70px", marginBottom:"70px" }}>
                    <p style={{position:"absolute",width:"100%", textAlign:"center",top:"20px"}} id="timerPos"></p>
                    <img style={{}} src={countdown} alt="countDown" width="100%"></img>
                  </div>
                  <p onClick={this.sendAgain} style={{color:"white", width:"100%", textAlign:"center",display:"none"}} id="timerPosEnd">Send code again</p>
                </div>
            <div id="verificationCode" style={{textAlign:"center", position:"relative"}}>

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
