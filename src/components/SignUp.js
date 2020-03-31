import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class SignUp extends Component {
    render() {

        const btn=()=>{
            
          }

        return (
           
        <div style={{width:"370pt"}} className="container">
            <div style={{width:"100%"}} className="picUp">

            </div>
        <br/>
            <div className="halfDown">
                <button className="signUp" onClick={btn}>Sign up</button>
                <div className="words">
                    <p className="sents">By clicking on this button you agree to</p>
                    <p className="sents">Willing terms of use</p>
                </div>
                <p className="downWord">I am already a user </p>
            </div>


      {/* end container */}
      </div>
           
        )
    }
}
