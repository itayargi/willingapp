import React, { Component } from 'react'
import "./Onboarding.css";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import onboarding3 from '../pics/Onboarding_03.png'
// import { Link } from "react-router-dom";
import Translate from 'react-translate-component';

export default class Onboarding_03 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div style={{height:"100vh", position:"relative"}}>
            {/* pic up */}
                <div>
                    <img style={{maxHeight:"50vh"}} alt="firstPic" width="100%" src={onboarding3}></img>
                </div>
                <div style={{}} className="textBox">
                <Translate style={{}} content="intro_title3" component="h2" unsafe={true}/>
                <Translate style={{}} content="intro_description3" component="p" className="piska" unsafe={true}/>

                    {/* <h3 className="header1" style={{}}>מיקרו-התנדבות</h3> */}
                    {/* <p className="piska" style={{}}>רוצה לעזור בקטנה? אתם בוחרים בוחר למי ומתי</p> */}
                </div>
                <div style={{display:"flex", flexDirection:"row", position:"absolute", bottom:"10%", width:"100%", justifyContent:"space-around",}}>
                            <Translate onClick={this.props.btnNext} style={{fontSize:"18pt"}} content="skip" component="span" unsafe={true}/>
                            <img alt="onboarding3Pic" onClick={this.props.btnNext} style={{fontSize:"16pt"}} src="https://img.icons8.com/metro/26/000000/chevron-right.png"/>
                </div>
                
            </div>
        )
    }
}
