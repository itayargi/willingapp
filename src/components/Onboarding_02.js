import React, { Component } from 'react'
import "./Onboarding.css";
import onborading2 from "../pics/Onboarding_02.png";
import Translate from 'react-translate-component';

export default class Onboarding_02 extends Component {
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
                    <img style={{maxHeight:"50vh"}} alt="firstPic" width="100%" src={onborading2}></img>
                </div>
                <div style={{}} className="textBox">
                <Translate style={{}} content="intro_title2" component="h2" unsafe={true}/>

                <Translate style={{}} content="intro_description2" component="p" className="piska" unsafe={true}/>

                </div>
                <div style={{display:"flex", flexDirection:"row", position:"absolute", bottom:"10%", width:"90%"}}>
                            <div  style={{ fontSize:"22pt",width:"100%", textAlign:"left" }} onClick={this.props.skipBtn}>
                                <Translate style={{}} content="skip" component="span" unsafe={true}/>
                            </div>
                            
                            <div onClick={this.props.btnNext} style={{width:"100%", textAlign:"right" }} >
                                <img alt='icon' src="https://img.icons8.com/ios/50/000000/long-arrow-right.png"/>
                            </div>
                </div>
            </div>
        )
    }
}
