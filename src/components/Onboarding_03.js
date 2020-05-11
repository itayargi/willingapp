import React, { Component } from 'react'
import "./Onboarding.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import onboarding3 from '../pics/Onboarding_03.png'
import { Link } from "react-router-dom";
import Translate from 'react-translate-component';

export default class Onboarding_03 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="container" style={{height:"100vh", position:"relative"}}>
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
                <div style={{display:"flex", flexDirection:"row", position:"absolute", bottom:"10%", width:"90%"}}>
                            <div  style={{ fontSize:"22pt",width:"100%", textAlign:"left" }} onClick={this.props.btnNext}>
                                <Translate style={{}} content="skip" component="span" unsafe={true}/>
                            </div>
                            
                            <div onClick={this.props.btnNext} style={{width:"100%", textAlign:"right" }} >
                                <img alt='icon' src="https://img.icons8.com/ios/50/000000/long-arrow-right.png"/>
                            </div>
                </div>
                <div style={{}}>
                {/* <Link to='/homePage'><div style={{display:"grid",margin:"auto",height:"48pt", backgroundColor:"rgb(80, 210, 194)",borderRadius:"50pt", width:"220pt", position:"absolute", bottom:0}}><p style={{  fontSize:"16pt",color:"white",  margin:"auto"}}>הרשם</p></div></Link> */}
                {/* <Link to='/signUp'><div style={{display:"grid",margin:"auto",height:"48pt", backgroundColor:"rgb(80, 210, 194)",borderRadius:"50pt", width:"220pt"}}><Translate style={{color:"white", margin:"auto", fontSize:"18pt"}} content="intro_title3Btn" component="span" unsafe={true}/>
</div></Link> */}
                    
                </div>
            </div>
        )
    }
}
