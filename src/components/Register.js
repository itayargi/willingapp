import React, { Component } from 'react'
import axios from 'axios'
// import willing from '../pics/gradient_background.svg'
import { Link } from "react-router-dom";
import '../App.css'
import smsPic from '../pics/sms.svg'
import countries from '../countries/countries.json'
import Translate from 'react-translate-component';

 export default  class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            phone:[],
            countryNum:"+972"
             
        }
    }
    findIndexCountry(arr){
        if(arr.length<=0) return -1;
        
    }
    componentDidMount(){
        // console.log(countries)
        document.getElementById("selectCountries").selectedIndex = "97"; 
        // var indexLoc= countries.indexOf('israel')
        // console.log(indexLoc, 'index location')
        // myArray.find(x => x.id === '45').foo;
        // var indexLoc = countries.findIndex( x=> x.code=="+972")
        // console.log(indexLoc, 'index location')
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
    // validation check for the phone number
    checkPhoneNumber(num){
        if(num.length!=10 || num[0]!=0){
            return false;
        }
        return true;

    }
    buttonNext=()=>{
        if(this.checkPhoneNumber(this.state.phone)){
            localStorage.setItem('phoneStatus', true)
            // alert('are you sure?')
            console.log('good phone number')
            document.getElementById('questionBox').style.display="inline-block"
            // document.getElementById('inputBox').value=""
            localStorage.setItem('phoneStatus', true)

        }
        else{
            localStorage.setItem('phoneStatus', false)
            alert('Please Enter a valid phone number')
            document.getElementById('inputBox').value=""

        }
    }
    noBtn(){
        document.getElementById('questionBox').style.display="none"
        document.getElementById('inputBox').value=""

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
            // saving the token in local storage and the phone number
            localStorage.setItem('token', data)
            localStorage.setItem('myPhone', JSON.stringify(phone))
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
    handleChange=(event)=>{
        this.setState({phone: event.target.value})
        // console.log(this.state.phone)

    }
    render() {
        const countriesList = countries
        // const handleChange=(event)=>{
        //     this.setState({phone: event.target.value})
        //     console.log(this.state.phone)
        // }
        return (
            <div style={{position:"relative", height:"100vh", width:"100%",}}>
                
                <div style={{width:"100%", textAlign:"center",position:"absolute"}}>
                    <h3 style={{marginTop:"20px", color:"white"}}>VERIFY YOUR PHONE NUMBER</h3>
                </div>
                {/* image top div */}
                <div className="topDivPic" style={{width:"100%", height:"50vh"}}>
                    {/* <img style={{objectFit:"cover", margin:"auto",width:"100%", height:"100%", objectPosition:"center"}} src={willing} alt="topPic"></img> */}
                    <img style={{margin:"auto"}} alt="smsPic" src={smsPic}></img>
                </div>
                {/* question box for the phone number */}
                <div style={{position:"fixed", top:"25%",width:"100%", textAlign:"center", height:"120px", zIndex:6}}>
                    <div id="questionBox" style={{display:"none",width:"80%",backgroundColor:"#fff", margin:"auto", borderRadius:"10px"}}>
                    <h4 style={{paddingTop:"20px"}}>Are you sure? Please check</h4>
                    <p style={{fontSize:"18px"}}>{this.state.phone}</p>
                    <div style={{justifyContent:"space-around",display:"flex", marginTop:"30px", paddingBottom:"20px"}}>
                    <Link to='/verify'><span onClick={this.getUsers} >OK</span></Link>
                        <span onClick={this.noBtn}>Edit</span>
                    </div>
                    </div>
                </div>
                <div style={{borderRadius:"50px", backgroundColor:"white", position:"relative", top:"-35px"}} className="squerDown">
                    <div style={{textAlign:"center", width:"100%", marginBottom:"50px"}}>
                        <p style={{width:"270px", margin:"auto"}}>Please enter your country code and phone number below. The authentication code will be sent to via SMS shortly:</p>
                    </div>
                    <div style={{width:"90%", textAlign:"center", fontSize:"15pt",margin:"auto" }}>
                        <div>
                        {/* select input with all the countris numbers */}
                        <select id="selectCountries" style={{width:"100%",border:"none",borderBottom:"solid 2px", borderColor:"rgb(185, 185, 185)", height:"24pt", backgroundColor:"none"}}>
                            {countriesList.countries.map(country=>{
                            return <option  key={country.name} onChange={this.countrySelect} value={country.code}>{country.code + "   " + "(" + country.name + ")"}</option> 
                        })}
                        </select>

                        </div>
                        <br/>
                        <input id="inputBox" style={{width:"100%",border:"none",borderBottom:"solid 2px", height:"24pt", borderColor:"rgb(185, 185, 185)"}} onChange={this.handleChange} type="number" placeholder="Phone Number"></input>
                    </div>
                </div>
                {/* button Link */}
                <div style={{position:"fixed", bottom:"5%", width:"100%", textAlign:"center"}}>
                    {/* <Link to='/verify'><button onClick={this.getUsers} style={{backgroundColor:"rgb(80, 210, 194)", width:"200pt", height:"35pt", borderRadius:"50pt", color:"white"}}>NEXT</button></Link> */}
                    <button onClick={this.buttonNext} style={{backgroundColor:"rgb(80, 210, 194)", width:"200pt", height:"35pt", borderRadius:"50pt", color:"white"}}>
                        <Translate style={{fontSize:"18px"}} content="next" component="span" unsafe={true}/>
                    </button>

                    {/* <button onClick={this.getUsers} style={{backgroundColor:"rgb(80, 210, 194)", width:"200pt", height:"35pt", borderRadius:"50pt", color:"white"}}>NEXT</button> */}
                </div>
            </div>
        )
    }
}
