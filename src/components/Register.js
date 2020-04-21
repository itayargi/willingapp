import React, { Component } from 'react'
import axios from 'axios'
import willing from '../pics/willing.png'
import { Link } from "react-router-dom";

export default class Home1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            phone:[""],
            
             
        }
    }
    
    
    // btnOk(){
    //     const mainSrever="http://ec2-52-91-26-189.compute-1.amazonaws.com:8080";
    //     const userToken="";
    //     const phone= this.state.phone
    //     const adress=mainSrever+endAdress;
    //     console.log(adress)
    //     const endAdress="/users/register"
    //     axios.post(`http://ec2-52-91-26-189.compute-1.amazonaws.com:8080/requests/users/register`,{phone}).then(response=>{
    //         // console.log(response)
    //         response.header('Access-Control-Allow-Origin', '*');
    //         this.setState({posts:response.data})
    //         console.log('response', response)
            
    //     })
    //     .catch(error=>{
    //         // console.log(error)
    //         this.setState({errorMsg:'Error retreiving data'})
    //         console.log('Error json file' , error)
    //         console.log(this.state.errorMsg)
    //     })
    // }

    render() {
        var token;
        const btnOk=()=>{
            
            const data={
                phone:"972543112161"
            }
// axios.defaults.baseURL ="http://ec2-52-91-26-189.compute-1.amazonaws.com:8080"

            axios.post('/users/register',this.state).then(response=>{
                token=response.data
                console.log(token)
                this.props.addToken(token.token)
                // this.setState(...{token:response.data})
                // this.setState({phone:response.data})
            })
            .catch(error=>{
                // this.setState({errorMsg:error})
                console.log(error)
            })
        }
       const handleChange=(event)=>{
            this.setState({phone: event.target.value})
        }

        return (
            <div style={{position:"relative", height:"100vh"}} className="container">
            <div style={{position:"absolute", bottom:"5%", width:"100%", textAlign:"center"}}>
                {/* <button onClick={btnOk} style={{backgroundColor:"rgb(80, 210, 194)", width:"200pt", height:"35pt", borderRadius:"50pt", color:"white", }}>OK</button> */}
               <Link to='/verify'><button onClick={btnOk} style={{backgroundColor:"rgb(80, 210, 194)", width:"200pt", height:"35pt", borderRadius:"50pt", color:"white"}}>OK</button></Link>

                </div>
            <div style={{width:"100%", textAlign:"center",position:"absolute"}}>
               <h3 style={{marginTop:"20px", color:"white"}}>VERIFY YOUR PHONE NUMBER</h3>
            </div>
             <div style={{width:"100%"}}>
               <img style={{objectFit:"cover", margin:"auto",width:"100%"}} src={willing} alt="topPic"></img>
           </div>
           <div style={{textAlign:"center", width:"100%"}}>
               <p style={{width:"270px", margin:"auto"}}>Please enter your country code and phone number below. The authentication code will be sent to via SMS shortly:</p>
           </div>
                <div style={{width:"100%", textAlign:"center", marginTop:"50px"}}>
                    <input onChange={handleChange} type="text" placeholder="Enter number"></input>
                </div>
            </div>
        )
    }
}
