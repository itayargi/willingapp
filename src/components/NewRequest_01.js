import React, { Component } from 'react'
import axios from 'axios';

export default class NewRequest_01 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:[],
             post:[]
            
        }
    }
    
    

    render() {
        const btn=()=>{
            this.props.addNewPost(this.state.title, this.state.post)
            console.log(this.state.title)
        }
        const actionBtn=()=>{
            axios.post('http://<willingapp-server>/users/register',{
                "phone":"972543112161"
            }).then(response=>{
            // console.log(response)
            console.log('response'+ response)
            
        })
        .catch(error=>{
            // console.log(error)
            this.setState({errorMsg:'Error retreiving data also'})
            console.log('Error second time' + error)
            console.log(this.state.errorMsg)
        })
        }

        return (
            <div style={{display:"grid", height:"100vh"}} className="container">
            <div style={{height:"64pt",width:"100%", backgroundColor:"rgb(57, 55, 119)", display:"grid"}} className="header">
            <h2 style={{margin:"auto"}}>New Request</h2>
            </div>
            <div style={{width:"100%",}} className="circles">
                <div style={{display:"inline-block" ,margin:"auto",width:"20px", borderRadius:"100px", backgroundColor:"green"}} id="circle1">
                    <span style={{width:"100%", margin:"auto"}}>1</span> 
                </div>
                ----
                <div style={{display:"inline-block",margin:"auto",width:"20px", borderRadius:"100px", }} id="circle2">
                    2
                </div>
                ----
                <div style={{display:"inline-block",margin:"auto",width:"20px", borderRadius:"100px", }} id="circle3">
                    3
                </div>
            </div>
                
                <div style={{margin:"auto",}} className="inputBox">
                
                    <input onChange={(e)=>{this.setState({title:e.target.value})}} type="text" placeholder="Enter tiltle"></input>
                    <br/>
                    <input onChange={(e)=>{this.setState({post:e.target.value})}} type="text" placeholder="Enter post"></input>
                    <br/>
                    <button onClick={btn}>OK</button>
                </div>
            </div>
        )
    }
}
