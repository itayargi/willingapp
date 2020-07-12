import React, { Component } from 'react'
import countdown from '../pics/countdown.svg'
import { Link } from "react-router-dom";
import '../App.css'
import axios from 'axios'
import Onboarding_01 from './Onboarding_01';

export default class VerifyCodeNew extends Component {
    _isMounted=false;
constructor(props) {
    super(props)

    this.state = {
        token:localStorage.getItem('token'),
        code:[],
    }
}
componentDidMount(){
    this._isMounted=true;
    this.timerClock()
}
// sending the code again
getUsers = async() => {
    var phone= JSON.parse(localStorage.getItem('myPhone'))
    
    // localStorage.setItem('myPhone', this.state.phone)
    const connectionCheck= navigator.onLine;
    if (!connectionCheck){
      console.error('You are not connected to the internet, connection is required')
      alert('no internet')
  }
  else{
      console.log("connection is on")
      try{
        let res = await axios({
            url:"/users/register",
            method:"post",
            data:phone,
            
        })
        let data = res.data.token;
        localStorage.setItem('valid', false)
        console.log(data)
        // saving the token in local storage
        localStorage.setItem('token', data)
        // this.props.addToken(data)
    }catch (e){
        console.log(`😱 Axios requestRegister failed: ${e}`);
        alert(`${e}`)
        localStorage.setItem('valid', false)

    }
      }

}
sendAgain(){
    // this.timerClock()
    document.getElementById('allScreenBox').style.display="inline"
}

//  timer display
timerClock(){
    var counter=3
    const intervalId = setInterval(() => {
     counter--
    if( counter>=0 &&  this._isMounted && document.getElementById('timerPos') ){
      document.getElementById('timerPos').innerHTML=counter
    }
    else {
      clearInterval(intervalId);
      if(this._isMounted){
      document.getElementById('sendAgain').style.display="inline-block"
      }
    }
    
  }, 1000); 

  }

// green action btn
greenBtn(){
    document.getElementById('fullContainer').style.display="inline-block"

}
// send the code to server
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
        // if the code is correct
        if(data.success){
            this.props.addVerify()
            localStorage.setItem('valid', true)
            console.log('the code is correct')
          }
          else{
            console.log('the code is NOT correct')
            localStorage.setItem('valid', false)
            alert('The code is Not correct, please try again')
            // put the stop alert
          }
    }catch (e){
        console.log(`😱 Axios verification code failed: ${e}`);
        alert(`${e}`)
    }
   }

    render() {
        const greenYes=()=>{
            this.verifyPhone()
        }
        const greenNo=()=>{
    document.getElementById('fullContainer').style.display="none"

        }

//   yes button
const btnQuestionYes=()=>{
    if(this._isMounted){
    document.getElementById('allScreenBox').style.display="none"
    // document.getElementById('sendAgain').style.display="none"
    this.timerClock()
    this.getUsers()
    }
}
// no button
const btnQuestionNo=()=>{
    if(this._isMounted){
    document.getElementById('allScreenBox').style.display="none"
    }
}


        return (
            <div>
              <div style={{zIndex:0}} id="mainContainer">
              {/* pop alert if not verified */}
              {/* change the div to display none */}
            <div className="fullContainer" style={{position:"absolute", top:0, left:0, width:"100%", height:"100vh",display:"none" }}>
              <div className="blackZone" style={{position:"absolute", top:0, left:0,width:"100%", height:"100vh", backgroundColor:"black", opacity:0.6, }}>
              <div className="squereBox" style={{width:"80%",height:"100px", backgroundColor:"white", margin:"auto", marginTop:"30vh", borderRadius:"10px"}}>
                        <h3 style={{paddingTop:"10px"}}>Are you sure this is the code?</h3>
                        <div className="btnYesNo">
                            <span className="buttonQues" onClick={greenYes}>yes</span>
                            <Link to='/verify'><span className="buttonQues" onClick={btnQuestionNo} >no</span></Link>
                            {/* <button className="btnQues" onClick={this.btnQuestionNo} >no</button> */}
                        </div>
                    </div>
              </div>
            </div>
                {/* header */}
                <div className="verifyPic" style={{textAlign:"center",width:"100%",paddingTop:"40px",color:"rgb(253, 253, 253)", }}>
                    <h2>VERIFICATION CODE</h2>
                </div>
                <div style={{textAlign:"center", marginTop:"10px", fontSize:"13pt"}}>
                    <p style={{width:"220pt", margin:"auto", color:"rgb(255, 255, 255)"}}>Please enter the SMS Verification code sent to you:</p>
                </div>
                {/* clock div */}
                <div id="clockDiv" style={{position:"relative", width:"50px", margin:"auto", marginTop:"60px", marginBottom:"60px" }}>
                    <p style={{position:"absolute",width:"100%", textAlign:"center",top:"20px"}} id="timerPos"></p>
                    <img style={{}} src={countdown} alt="countDown" width="100%"></img>
                </div>
                {/* send again link */}
                <div className="sendAgainLink" style={{textAlign:"center", color:"white", fontSize:"18px", marginBottom:"20px", height:"50px" }}>
                    <div id="sendAgain" style={{display:"none", }}>
                    <p className="sendAgainLink" style={{marginBottom:0, paddingBottom:0}}>I didn't get the code</p>
                    <p className="sendAgainLink" onClick={this.sendAgain} style={{textDecoration:"underLine", cursor:"pointer",}} >send again</p>
                    </div>
                </div>
                {/* password */}
                <div style={{marginTop:"40px" }}>
                    <div id="verificationCode" style={{textAlign:"center", }}>
                        <input onChange={(e)=>{this.setState({code:e.target.value})}} style={{fontSize:"20px", textAlign:"center", background:"none", color:"white"}} type="password" size="6" maxLength="6" required></input>
                        <hr width="100px"/>
                    </div>
                    <div style={{textAlign:"center", fontSize:"15pt",color:"rgb(255, 255, 255)"}}>
                        <p>6-digit code</p>
                    </div>
                </div>
                {/* button link */}
                <div id="linkBox" style={{ position:"absolute",bottom:"7%", left:0, width:"100%", textAlign:"center"}}>
                    {/* <Link to='/verifiedEnd'><button onClick={this.verifyPhone} style={{backgroundColor:"rgb(80, 210, 194)", color:"white", fontSize:"14px", borderRadius:"50pt", height:"25pt",  margin:"auto",width:"150pt"}}>NEXT</button></Link> */}
                    <button onClick={this.greenBtn} style={{backgroundColor:"rgb(80, 210, 194)", color:"white", fontSize:"14px", borderRadius:"50pt", height:"25pt",  margin:"auto",width:"150pt"}}>NEXT</button>
                </div>
                {/* pop up window */}
                <div id="allScreenBox" style={{position:"absolute", width:"100%", height:"100vh", top:0, left:0, textAlign:"center",   display:"none", zIndex:1}}>
                {/* opacity box */}
                <div style={{position:"absolute",width:"100%", height:"100vh", backgroundColor:"black", zIndex:-1, opacity:"0.5"}}>
                    </div>
                    {/* pop box div */}
                    <div style={{width:"80%",height:"100px", backgroundColor:"white", margin:"auto", marginTop:"30vh",zIndex:100, borderRadius:"10px"}}>
                        <h3 style={{paddingTop:"10px"}}>send the code to the same number?</h3>
                        <div className="btnYesNo">
                            <span className="buttonQues" onClick={btnQuestionYes}>yes</span>
                            <Link to='/register'><span className="buttonQues" onClick={btnQuestionNo} >no</span></Link>
                            {/* <button className="btnQues" onClick={this.btnQuestionNo} >no</button> */}
                        </div>
                    </div>
                    
                </div>

              </div>
            </div>
        )
    }
}
