import React, { Component } from 'react'
import "./Onboarding.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import onboarding3 from '../pics/Onboarding_03.png'

export default class Onboarding_01 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="container" style={{height:"100vh"}}>
            {/* pic up */}
                <div>
                    <img alt="firstPic" width="100%" src={onboarding3}></img>
                </div>
                <div style={{}} className="textBox">
                    <h3 className="header1" style={{}}>מיקרו-התנדבות</h3>
                    <p className="piska" style={{}}>רוצה לעזור בקטנה? אתם בוחרים בוחר למי ומתי</p>
                </div>
                <div style={{}}>
                    <MDBFooter color="cyan" className="font-small darken-3 pt-0">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol  className="py-5">
                                    <div className="mb-5 flex-center"></div>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer style={{align:"left"}} fluid>
                            <button style={{width:"220pt", height:"48pt", backgroundColor:"rgb(80, 210, 194)", fontSize:"16pt",color:"white", borderRadius:"50pt"}}>SING IN</button>
                        </MDBContainer>
                    </div>
                    </MDBFooter>
                </div>
            </div>
        )
    }
}
