import React, { Component } from 'react'
import axios from 'axios'
import willing from '../pics/gradient_background.svg'
import { Link } from "react-router-dom";
import '../App.css'
import smsPic from '../pics/sms.svg'
import countries from '../countries/countries.json'
 export default  class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            phone:[],
            countryNum:"+972"
             
        }
    }
    componentDidMount(){
        // console.log(countries)
    }
    
    //takes the phone number from the user, reduce the "0", add 972 and return object for axios
    objectTransfer=(num)=>{
        var newstr=this.state.countryNum
        newstr=newstr+num.slice(1)
        return {
            phone:newstr
        }
    }

    getUsers = async() => {
        var phone= this.objectTransfer(this.state.phone)
        // localStorage.setItem('myPhone', this.state.phone)
        const connectionCheck= navigator.onLine;
        if (!connectionCheck){
          console.error('You are not connected to the internet, connection is required')
          alert('no internet')
      }
      else{
          console.log("connection is on")
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
            // localStorage.setItem('token', data)
            this.props.addToken(data)
        }catch (e){
            console.log(`😱 Axios requestRegister failed: ${e}`);
            alert(`${e}`)
            localStorage.setItem('valid', false)

        }
          }

    }
    countrySelect=(e)=>{
        this.setState({countryNum:e.target.value})
    }
    render() {
        const countriesList = countries
        const handleChange=(event)=>{
            this.setState({phone: event.target.value})
        }
        return (
            <div style={{position:"relative", height:"100vh", width:"100%"}}>
                {/* button Link */}
                <div style={{position:"absolute", bottom:"5%", width:"100%", textAlign:"center"}}>
                    <Link to='/verify'><button onClick={this.getUsers} style={{backgroundColor:"rgb(80, 210, 194)", width:"200pt", height:"35pt", borderRadius:"50pt", color:"white"}}>NEXT</button></Link>
                    {/* <button onClick={this.getUsers} style={{backgroundColor:"rgb(80, 210, 194)", width:"200pt", height:"35pt", borderRadius:"50pt", color:"white"}}>NEXT</button> */}
                </div>
                <div style={{width:"100%", textAlign:"center",position:"absolute"}}>
                    <h3 style={{marginTop:"20px", color:"white"}}>VERIFY YOUR PHONE NUMBER</h3>
                </div>
                {/* image top div */}
                <div className="topDivPic" style={{width:"100%", height:"50vh"}}>
                    {/* <img style={{objectFit:"cover", margin:"auto",width:"100%", height:"100%", objectPosition:"center"}} src={willing} alt="topPic"></img> */}
                    <img style={{margin:"auto"}} alt="smsPic" src={smsPic}></img>
                </div>
                <div style={{borderRadius:"50px", backgroundColor:"white", position:"relative", top:"-35px"}} className="squerDown">
                    <div style={{textAlign:"center", width:"100%", marginBottom:"50px"}}>
                        <p style={{width:"270px", margin:"auto"}}>Please enter your country code and phone number below. The authentication code will be sent to via SMS shortly:</p>
                    </div>
                    <div style={{width:"90%", textAlign:"center", fontSize:"15pt",margin:"auto" }}>
                        <div>
                        {/* select input with all the countris numbers */}
                        <select style={{width:"100%",border:"none",borderBottom:"solid 2px", borderColor:"rgb(185, 185, 185)", height:"24pt", backgroundColor:"none"}}>
                            {countriesList.countries.map(country=>{
                            return <option key={country.name} onChange={this.countrySelect} value={country.code}>{country.code + "   " + country.name}</option> 
                        })}
                        </select>

                        </div>
                        <br/>
                        <input style={{width:"100%",border:"none",borderBottom:"solid 2px", height:"24pt", borderColor:"rgb(185, 185, 185)"}} onChange={handleChange} type="number" placeholder="Phone Number"></input>
                    </div>
                </div>
            </div>
        )
    }
}
