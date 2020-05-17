import React, { Component } from 'react'
import axios from 'axios'
import willing from '../pics/willing.png'
import { Link } from "react-router-dom";

 export default  class Home1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            phone:[],
            
             
        }
    }
    
    componentDidMount(){
        // check for connection
    //   const connectionCheck= navigator.onLine;
    //   if (!connectionCheck){
    //       console.error('You are not connected to the internet, connection is required')
    //       alert('no internet')
    //   }
    //   else{
    //       console.log("connection is on")
        //   alert('We have connection')
        //   }
    }
    //takes the phone number from the user, reduce the "0", add 972 and return object for axios
    objectTransfer=(num)=>{
        var newstr="972"
        newstr=newstr+num.slice(1)
        return {
            phone:newstr
        }
    }

    getUsers = async() => {
        var phone= this.objectTransfer(this.state.phone)
        
        localStorage.setItem('myPhone', this.state.phone)
        const connectionCheck= navigator.onLine;
        if (!connectionCheck){
          console.error('You are not connected to the internet, connection is required')
          alert('no internet')
      }
      else{
          console.log("connection is on")
          alert('We have connection')
          try{
            let res = await axios({
                url:"/users/register",
                method:"post",
                data:phone,
                
            })
            let data = res.data.token;
            localStorage.setItem('valid', false)
            console.log(data)
            //saving the token in local storage
            localStorage.setItem('token', data)
            this.props.addToken(data)
        }catch (e){
            console.log(`😱 Axios requestRegister failed: ${e}`);
            alert(`${e}`)
            localStorage.setItem('valid', false)

        }
          }

    }

    render() {
        
       const handleChange=(event)=>{
            this.setState({phone: event.target.value})
        }
        return (
            <div style={{position:"relative", height:"100vh"}} className="container">
                {/* button Link */}
                <div style={{position:"absolute", bottom:"5%", width:"100%", textAlign:"center"}}>
                    <Link to='/verify'><button onClick={this.getUsers} style={{backgroundColor:"rgb(80, 210, 194)", width:"200pt", height:"35pt", borderRadius:"50pt", color:"white"}}>NEXT</button></Link>
                    {/* <button onClick={this.getUsers} style={{backgroundColor:"rgb(80, 210, 194)", width:"200pt", height:"35pt", borderRadius:"50pt", color:"white"}}>NEXT</button> */}
                </div>
                <div style={{width:"100%", textAlign:"center",position:"absolute"}}>
                    <h3 style={{marginTop:"20px", color:"white"}}>VERIFY YOUR PHONE NUMBER</h3>
                </div>
                <div style={{width:"100%"}}>
                    <img style={{objectFit:"cover", margin:"auto",width:"100%", maxHeight:"50vh"}} src={willing} alt="topPic"></img>
                </div>
                <div style={{textAlign:"center", width:"100%"}}>
                    <p style={{width:"270px", margin:"auto"}}>Please enter your country code and phone number below. The authentication code will be sent to via SMS shortly:</p>
                </div>
                <div style={{width:"100%", textAlign:"center", marginTop:"50px",fontSize:"15pt"}}>
                    <select style={{width:"100%"}}>
                        <option>israel(+972)</option>
                        <option>USA(+1)</option>
                    </select>
                    <br/>
                    <input style={{width:"100%"}} onChange={handleChange} type="text" placeholder="Phone Number"></input>
                </div>
            </div>
        )
    }
}
