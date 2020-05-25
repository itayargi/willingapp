import React, { Component } from 'react'
import onboarding1 from '../pics/Onboarding_01.png'
import "./Onboarding.css";
import Translate from 'react-translate-component';

export default class Onboarding_01 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div style={{height:"100vh", width:"100%"}}>
            {/* pic up */}
                <div style={{width:"100%"}}>
                    <img alt="onboarding1Pic" style={{maxHeight:"50vh", width:"100%"}} alt="firstPic" width="100%" src={onboarding1}></img>
                </div>
                <div style={{}} className="textBox">
                    {/* <h3 className="header1" style={{}}>סיוע</h3> */}
                    <Translate style={{}} content="intro_title1" component="h2" unsafe={true}/>

                    <Translate style={{}} content="intro_description1" component="p" className="piska" unsafe={true}/>

                </div>
                <div style={{display:"flex", flexDirection:"row", position:"absolute", bottom:"10%", width:"100%", justifyContent:"space-around",}}>
                            {/* <div  style={{ fontSize:"22pt",marginLeft:"10%"  }} onClick={this.props.skipBtn}> */}
                                <Translate onClick={this.props.skipBtn} style={{fontSize:"18pt"}} content="skip" component="span" unsafe={true}/>
                            {/* </div> */}
                            <img onClick={this.props.btnNext} style={{fontSize:"16pt"}} src="https://img.icons8.com/metro/26/000000/chevron-right.png"/>
                            
                            {/* <div onClick={this.props.btnNext} style={{ marginRight:"10%" }} > */}
                                {/* <img alt='icon' src="<img src="https://img.icons8.com/metro/26/000000/chevron-right.png"/>"/> */}
                                {/* <img style={{fontSize:"16pt"}} src="https://img.icons8.com/metro/26/000000/chevron-right.png"/> */}
                                {/* <i style={{fontSize:"16pt"}} className="angle right icon"></i> */}

                            {/* </div> */}
                </div>
            </div>
        )
    }
}
