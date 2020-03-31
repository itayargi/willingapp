import React, { Component } from 'react'

export default class VerifyComplete extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          id:"",
    //          title:"",
    //          body:""
    //     }
    // }
    
    
    render() {
    var counter = 60;
    const timeIt=()=>{
        counter--;
        document.getElementById('timer').innerHTML=counter;
        if(counter==0){
            clearInterval(interval);
        }
    }
    var interval= setInterval(timeIt, 1000);

        return (
            <div style={{backgroundColor:"rgb(79, 146, 193)",height:"100vh",width:"100%"}} className="container">
                <div style={{ }} className="headers">
                    <h3>VERIFICATION CODE</h3>
                    <p>Please enter the SMS Verification code
 sent to you:</p>
                    <p id="timer">60</p>
                </div>
                <div style={{}} className="password">
                    <input style={{width:"148pt",fontSize:"100%", textAlign:"center"}} type="password" maxLength="6"></input>
                    <hr/>
                    <p>6-digit code</p>
                </div>
                <button style={{}}>NEXT</button>
                
            </div>
        )
    }
}
