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
            <div style={{height:"100vh", position:"relative", width:"100%"}}>
            {/* pic up */}
                <div style={{width:"100%"}}>
                    <img style={{maxHeight:"50vh", width:"100%"}} alt="firstPic" width="100%" src={onborading2}></img>
                </div>
                <div style={{}} className="textBox">
                <Translate style={{}} content="intro_title2" component="h2" unsafe={true}/>

                <Translate style={{}} content="intro_description2" component="p" className="piska" unsafe={true}/>

                </div>
                <div style={{display:"flex", flexDirection:"row", position:"absolute", bottom:"10%", width:"100%", justifyContent:"space-around",}}>
                            <Translate onClick={this.props.skipBtn} style={{fontSize:"18pt"}} content="skip" component="span" unsafe={true}/>
                            <img onClick={this.props.btnNext} style={{fontSize:"16pt"}} src="https://img.icons8.com/metro/26/000000/chevron-right.png"/>
                </div>
            </div>
        )
    }
}
