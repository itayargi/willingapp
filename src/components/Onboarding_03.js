import React, { Component } from 'react'
import "./Onboarding.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import onboarding3 from '../pics/Onboarding_03.png'
import { Link } from "react-router-dom";
import Translate from 'react-translate-component';

export default class Onboarding_01 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="container" style={{maxHeight:"100vh", position:"relative"}}>
            {/* pic up */}
                <div>
                    <img alt="firstPic" width="100%" src={onboarding3}></img>
                </div>
                <div style={{}} className="textBox">
                <Translate style={{}} content="intro_title3" component="h2" unsafe={true}/>
                <Translate style={{}} content="intro_description3" component="p" className="piska" unsafe={true}/>

                    {/* <h3 className="header1" style={{}}>מיקרו-התנדבות</h3> */}
                    {/* <p className="piska" style={{}}>רוצה לעזור בקטנה? אתם בוחרים בוחר למי ומתי</p> */}
                </div>
                <div style={{}}>
                {/* <Link to='/homePage'><div style={{display:"grid",margin:"auto",height:"48pt", backgroundColor:"rgb(80, 210, 194)",borderRadius:"50pt", width:"220pt", position:"absolute", bottom:0}}><p style={{  fontSize:"16pt",color:"white",  margin:"auto"}}>הרשם</p></div></Link> */}

                    <MDBFooter color="cyan" className="font-small darken-3 pt-0">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol  className="py-5">
                                    <div className="mb-5 flex-center"></div>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer style={{align:"center"}} fluid>
                        <Link to='/homePage'><div style={{display:"grid",margin:"auto",height:"48pt", backgroundColor:"rgb(80, 210, 194)",borderRadius:"50pt", width:"220pt"}}><Translate style={{color:"white", margin:"auto", fontSize:"18pt"}} content="intro_title3Btn" component="span" unsafe={true}/>
</div></Link>
                        </MDBContainer>
                    </div>
                    </MDBFooter>
                </div>
            </div>
        )
    }
}
