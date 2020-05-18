import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class TermsOfUse extends Component {
    render() {
        return (
            <div style={{height:"100vh", width:"100%"}}>
            
                <div className="blueUp" style={{display:"grid",height:"64pt", backgroundColor:"rgb(57, 55, 119)"}}>
                    <div style={{position:"absolute", top:"26pt"}} className="fullPage">
                        <Link to='/signUp'><i style={{fontSize:"28pt",color:"white" }} className="angle left icon"></i></Link>
                    </div>
                    <p style={{ margin:"auto", fontSize:"17pt", fontWeight:"bold", color:"#fff"}}>Terms of use</p>
                </div>
                
                <div className="terms" style={{textAlign:"left",marginLeft:"33pt"}}>
                    <h5 style={{marginTop:"38pt"}}>Willing terms of use</h5>
                    <br></br>
                    <p style={{color:"rgb(83, 82, 100)", letterSpacing:"-0.41pt", fontFamily:"SFProText-Light", width:"280px"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

                </div>
                {/* <div style={{width:"100%", textAlign:"center", position:"absolute", bottom:"10%"}}>
               <Link to='/register'><button style={{backgroundColor:"rgb(80, 210, 194)", width:"150pt", height:"35pt", borderRadius:"50pt", color:"white"}}>NEXT</button></Link>
            </div> */}
            
            </div>
        )
    }
}
