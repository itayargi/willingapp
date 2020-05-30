import React, { Component } from 'react'
import '../App.css'
import verified from '../pics/verified.svg'
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'
import Case from '../pics/Category Icons/Case.svg'
import emergency from '../pics/Category Icons/Emergency.svg'
import lostFound from '../pics/Category Icons/Lost and found.svg'
import General from '../pics/Category Icons/General.svg'
import givAway from '../pics/Category Icons/Give away.svg'
import ItemNeeded from '../pics/Category Icons/Item needed.svg'
import Ride_Delivery from '../pics/Category Icons/Ride_Delivery.svg'
import RoadAssist from '../pics/Category Icons/Road assist.svg'
import Social from '../pics/Category Icons/Social.svg'
import cities_data from './israel-cities'
// import VerifyCode from './VerifyCode';
import jsonImport from 'jsonfile'
// import fs from 'fs'
// import writeJsonFile from 'write-json-file'


export default class VerifiedEnd extends Component {
  _isMounted=false

    constructor(props) {
        super(props)
    
        this.state = {
            recentPosts:[],
            locationPosts:[], 
            myPosts:[] 
         }
    }
    // translate which city by number
  findCity(num){
    if(num==""){
        return ""
    }
    return cities_data.find(city=>city.id===num).name
  }
  // show the time with minutes, hours and days
  findTime(timeNum){
      if(timeNum==""){
          return ""
      }
    const time= new Date(timeNum)
    const hours= time.getHours();
    const days= time.getDay();
    const minutes = time.getMinutes();
    // time post display
    if(days>0){
      return days+ " days ago"
    }
    else if (hours <=0){
      return minutes + " minutes ago"
    }
    else return hours+" hours ago"
  }
  // find type of category
  findCategory(num){
    if(num==""){
        return ""
    }
    switch (num){
      case 0:
        return "Emergency"
      case 1:
        return "Medical"
      case 2:
        return "Ride/Delivery"
        case 3:
        return "Road assistant"
      case 4:
        return "Item needed"
      case 5:
        return "Give away item"
        case 6:
        return "Lost and found"
      case 7:
        return "Social"
      default:
        return "General"
    }
  }
  // find picture for category
  categoryPic(num){
    if(num==""){
        return ""
    }
    switch (num){
      case 0:
        return emergency
      case 1:
        return Case
      case 2:
        return Ride_Delivery
        case 3:
        return RoadAssist
      case 4:
        return ItemNeeded
      case 5:
        return givAway
        case 6:
        return lostFound
      case 7:
        return Social
      default:
        return General
    }
   }

   componentDidMount= async()=>{
      // flag to check if the component is mounted to prevent errors
      this._isMounted=true;


      // console.log('status is', this.props.status)
      var valid= localStorage.getItem('valid')
      const tokenLocalStorage= this.props.token
      // tokenLocalStorage.length>0
      if(true) {
        // <Redirect to='/register'/>
        //check location and send it to server
        if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(function(position){
            const lat= position.coords.latitude.toString();
            const lon= position.coords.longitude.toString();
            const data={"lat":lat, "lng":lon}
            
            if(tokenLocalStorage){
                var serverL= '/users/' + tokenLocalStorage +'/_location'
                axios.post(serverL,data).then(response=>{
                  if(response.data.success){
                    console.log('yeahhhhhhhhhhhhh')
                  }
                  else{
                    console.log('nooooooooooooooo')
                  }
                  // console.log(response.data)
              })
              .catch(error=>{
                  console.log('Error sending location to server' , error)
                  alert('not getting location')
  
              })
        }
        }); 
        
    }
        const connectionCheck= navigator.onLine;
    if (!connectionCheck){
      console.error('You are not connected to the internet, connection is required')
      alert('no internet')
  }
  else{
      console.log("connection is on")
      // alert('We have connection')
      let token= localStorage.getItem('token')
      try{
        // fetching Recent posts
        let adress="/requests/_filters?token=" + token + "&status=1&sortBy=1"
        let res = await axios({
            url:adress,
            method:"get",
            
        })
        let data = res.data;
        if(this._isMounted){
          this.setState({recentPosts:data})
          console.log('fetching recentPosts')
          // const jsonfile = require('jsonfile')
 
          // const file = '../utils/posts.json'
          // const obj = { name: 'JP' }
 
          // jsonfile.writeFile(file, obj)
          //   .then(res => {
          //     console.log('Write complete')
          //  })
          //   .catch(error => console.error(error, 'over hre'))
          // const jsonfile = require('jsonfile')
 
          // const file = '../utils/posts.json'
          // const obj = { name: 'JP' }
 
          // jsonfile.writeFile(file, obj, function (err) {
          //   if (err) console.error(err,'11111')
          // })
          // const jsonfile = require('jsonfile')
          // const writeJsonFile = require('write-json-file');
          // const file = '../utils/posts.json'
          // const obj = { name: 'JP' }
          // writeJsonFile(file, obj)
          // .then(res => {
          //   console.log('Write complete')
          // })
          // .catch(error => console.error('new balagan',error))
           


          }
    }catch (e){
        console.log(`😱 Axios requestRegister failed: ${e}`);
        alert(`${e}`)
    }
    // fetching Location posts
    try{
      let adress="/requests/_filters?token=" + token + "&status=1&sortBy=2"
      let res = await axios({
          url:adress,
          method:"get",
          
      })
      let data = res.data;
      if(this._isMounted){
        this.setState({locationPosts:data})
        console.log('fetching location')
      }
  }catch (e){
      console.log(`😱 Axios LocationPosts failed: ${e}`);
      alert(`${e}`)
  }

  //fetching my posts
  try{
    let adress="/requests/_filters?token=" + token + "&my=true&sortBy=1"
    let res = await axios({
        url:adress,
        method:"get",
        
    })
    let data = res.data;
    if(this._isMounted){
      this.setState({myPosts:data})
      console.log('fetching my posts')
    }
}catch (e){
    console.log(`😱 Axios LocationPosts failed: ${e}`);
    alert(`${e}`)
}

  //saving data in localStorage
  const recentPtoString=JSON.stringify(this.state.recentPosts)
  localStorage.setItem('recentPosts',recentPtoString )
  const locationPtoString=JSON.stringify(this.state.locationPosts)
  localStorage.setItem('locationPosts',locationPtoString )


  // this.props.uploadPosts(this.state.recentPosts, this.state.locationPosts, this.state.myPosts)
  // this.sendPostToState(this.state.recentPosts, this.state.locationPosts, this.state.myPosts)

  }//end of else
}
else{
  document.getElementById('mainDiv').innerHTML='<h1>wo wow wo</h1>'
}

    }//end of componentDidMount

    componentWillUnmount(){
      this._isMounted=false
    }

    sendPostToState=()=>{
      if(this._isMounted){
          const recent=this.state.recentPosts
          const location=this.state.locationPosts
          const my=this.state.myPosts
          this.props.uploadPosts(recent, location, my)
      }
    }
    // check verication and return the acording screen
  
    render() {

        return (
            <div style={{height:"100vh", position:"relative", }}>
                <div style={{paddingBottom:0, marginBottom:0, maxHeight:"50vh"}} id="picUp">
                    <h2 style={{paddingTop:"30px", color:"rgb(253, 253, 253)", marginBottom:0, paddingBottom:0}}>Verified!</h2>
                    <img style={{margin:"auto", marginTop:0}} src={verified} alt="verified"></img>
                </div>
                <div style={{borderRadius:"50px", backgroundColor:"white", position:"relative", top:"-40px"}} id="mainDiv">
                <div style={{height:"150pt", display:"grid"}}>
                    <p style={{color:"rgb(74, 75, 75)", margin:"auto", fontSize:"40pt", paddingLeft:"40px"}}>Welcome to Willing!</p>
                </div>
                
                </div>
                <div style={{position:"absolute", bottom:"10%", width:"100%", display:"grid"}}>
                
               <Link style={{margin:"auto"}} to='/PostsPage'><button onClick={this.sendPostToState} style={{backgroundColor:"rgb(80, 210, 194)", width:"200pt", height:"35pt", borderRadius:"50pt", color:"white", margin:"auto"}}>START</button></Link>

                </div>
                {/* {this.sendPostToState(recentPosts, locationPosts, myPosts)} */}
            </div>
        )
    }
}
