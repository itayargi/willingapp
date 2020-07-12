// import React, { Component } from 'react'
// import countdown from '../pics/countdown.svg'
// import { Link } from "react-router-dom";
// import axios from 'axios'
// import '../App.css'
// // import Alert from '@material-ui/lab';

// export default class VerifyCode extends Component {
//   _isMounted=false

//    constructor(props) {
//      super(props)
   
//      this.state = {
//         token:this.props.token,
//         code:[],
//      }
//    }

//    verifyPhone = async ()=>{
//     //  debugger
    
//       clearInterval(this.intervalId)
//       console.log(this.state)
//       try{
//         let res = await axios({
//             url:"/users/verify",
//             method:"post",
//             data:this.state,
//         })
//         let data = res.data;
//         console.log(data)
//         // if the code is correct
//         if(data.success){
//             this.props.addVerify()
//             localStorage.setItem('valid', true)
//             console.log('the code is correct')
//           }
//           else{
//             console.log('the code is NOT correct')
//             localStorage.setItem('valid', false)
//             alert('The code is Not correct, please try again')
//             // put the stop alert
//           }
//     }catch (e){
//         console.log(`😱 Axios verification code failed: ${e}`);
//         alert(`${e}`)
//     }
//    }
//   //  pop up screen
//    sendAgain=()=>{
//      document.getElementById('verificationCode').style.display="none"
//      var clockPic= document.querySelector('#clockDiv')
//      clockPic.classList.add('deleteDiv');
//      var popScreen = document.querySelector('.allScreen');
//      popScreen.classList.add('popActivat')
//    }
//    objectTransfer=(num)=>{
//     var newstr="972"
//     newstr=newstr+num.slice(1)
//     return {
//         phone:newstr
//     }
// }
// // yes/no btn pop screen 
//    btnQuestionYes=async()=>{
//     //  send the code to the same number
//         var clockPic= document.querySelector('#clockDiv')
//         var popScreen = document.querySelector('.allScreen');
//         popScreen.classList.remove('popActivat')
//         clockPic.classList.remove('deleteDiv');
//         document.getElementById('verificationCode').style.display="inline"
//         this.timerClock()
//         var localPhone= localStorage.getItem('myPhone')
//         var myPhone=this.objectTransfer(localPhone)
        
//         try{
//           let res = await axios({
//               url:"/users/register",
//               method:"post",
//               data:myPhone,
//           })
//           let data = res.data.token;
//           localStorage.setItem('valid', false)
//           console.log(data)
//           //saving the token in local storage
//           localStorage.setItem('token', data)
//       }catch (e){
//           console.log(`😱 Axios requestRegisterAgain failed: ${e}`);
//           alert(`${e}`)
//       }
//    }
//    btnQuestionNo=()=>{
//     var clockPic= document.querySelector('#clockDiv')
//     var popScreen = document.querySelector('.allScreen');
//     popScreen.classList.remove('popActivat')
//     clockPic.classList.remove('deleteDiv');
//     document.getElementById('verificationCode').style.display="inline"
//     this.timerClock()
//    }

//   //  timer display
//    timerClock=()=>{
//      let valid= localStorage.getItem('valid')
//      if (valid=="false"){
//        valid=false
//      }
//      else{
//        valid= true
//      }
//      var counter=60
//      const intervalId = setInterval(() => {
//       counter--
//      if( counter && document.getElementById('timerPos') && !valid){
//        document.getElementById('timerPos').innerHTML=counter
//      }
//      else {
//        clearInterval(intervalId);
//        if(document.getElementById('timerPosEnd'))
//            document.getElementById('timerPosEnd').style.display="inline"
//        }
//     if (counter === 0 || this.props.status) {
//        console.log('Done');
//        clearInterval(intervalId);
//      }
//    }, 1000); 

//    }
//    componentDidMount(){
//     this._isMounted=true
//      if(this._isMounted){
//         this.timerClock()
//      }
//    }
//    componentWillUnmount(){
//      this._isMounted=false
//    }
    
//     render() {
//         return (
//             <div id="mainContainer" className="container" style={{height:"100vh",textAlign:"center",}}>
//             <div id="linkBox" style={{ position:"absolute",bottom:"7%", left:0, width:"100%", textAlign:"center"}}>
//                <Link to='/verifiedEnd'><button onClick={this.verifyPhone} style={{backgroundColor:"rgb(80, 210, 194)", color:"white", fontSize:"14px", borderRadius:"50pt", height:"25pt",  margin:"auto",width:"150pt"}}>NEXT</button></Link>
//                {/* <button onClick={this.verifyPhone} style={{backgroundColor:"rgb(80, 210, 194)", color:"white", fontSize:"14px", borderRadius:"50pt", height:"25pt",  margin:"auto",width:"150pt"}}>NEXT</button> */}
//             </div>
//             {/* pop window question */}
//             <div className="allScreen">
//               <div className="popWindow">
//                   <h5>Send the code to the same number?</h5>
//                   <div className="btnYesNo">
//                     <button className="btnQues" onClick={this.btnQuestionYes}>yes</button>
//                     <Link to='/register'><button className="btnQues" onClick={this.btnQuestionNo} >no</button></Link>
//                   </div>
//               </div>
//             </div>
//             {/* end pop */}
//                 <div className="verifyPic" style={{textAlign:"center",width:"100%",paddingTop:"40px",color:"rgb(253, 253, 253)" }}>
//                     <h2>VERIFICATION CODE</h2>
//                 </div>
//                 <div style={{textAlign:"center", marginTop:"10px", fontSize:"13pt"}}>
//                     <p style={{width:"220pt", margin:"auto", color:"rgb(255, 255, 255)"}}>Please enter the SMS Verification code sent to you:</p>
//                 </div>
                
//                 <div style={{marginBottom:"20px"}}>
//                   <div id="clockDiv" style={{position:"relative", width:"50px", margin:"auto", marginTop:"70px", marginBottom:"70px" }}>
//                     <p style={{position:"absolute",width:"100%", textAlign:"center",top:"20px"}} id="timerPos"></p>
//                     <img style={{}} src={countdown} alt="countDown" width="100%"></img>
//                   </div>
//                   <p onClick={this.sendAgain} style={{color:"white", width:"100%", textAlign:"center",display:"none", cursor:"pointer", textDecoration:"underLine"}} id="timerPosEnd">Send code again</p>
//                 </div>
//             <div id="verificationCode" style={{textAlign:"center", position:"relative"}}>

//                 <input onChange={(e)=>{this.setState({code:e.target.value})}} style={{fontSize:"20px", textAlign:"center", background:"none", color:"white"}} type="password" size="6" maxLength="6" required></input>
//                 <hr width="100px"/>
//             </div>
//             <div style={{textAlign:"center", fontSize:"15pt",color:"rgb(255, 255, 255)"}}>
//             <p>6-digit code</p>
//             </div>
            
            

//             </div>
//         )
//     }
// }
