import React, { Component } from 'react'
import location from '../pics/location.png'
import arrow from '../pics/arrow.png'
import clock from '../pics/clock.png'
import postJson from './postsJson.json'
import cities_data from './israel-cities'
import Case from '../pics/Category Icons/Case.svg'
import emergency from '../pics/Category Icons/Emergency.svg'
import lostFound from '../pics/Category Icons/Lost and found.svg'
import General from '../pics/Category Icons/General.svg'
import givAway from '../pics/Category Icons/Give away.svg'
import ItemNeeded from '../pics/Category Icons/Item needed.svg'
import Ride_Delivery from '../pics/Category Icons/Ride_Delivery.svg'
import RoadAssist from '../pics/Category Icons/Road assist.svg'
import Social from '../pics/Category Icons/Social.svg'
import { Link } from "react-router-dom";

export default class MyPosts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
        }
    }
    // componentDidMount(){
    //     if(this.props.myPosts==""){
    //         document.getElementById('bigBox').innerHTML="no post"
    //     }
        
    // }
    // find picture for category
  categoryPic=(num)=>{
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
   findCity(num){
    return cities_data.find(city=>city.id==num).name
  }
  findTime(timeNum){
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
  postSelect=(user)=>{
    const location= this.findCity(user.city)
    const date= this.findTime(user.createDate)
   this.props.updateUser(this.findCategory(user.categoryId),user.content,location,user.radius,date, user.phone, user.userName)
   return;
 }
  // find type of category
  findCategory(num){
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
      case 8:
        return "General"
    }
  }
    render() {
        return (
            <div style={{position:"relative",}}>
                <p style={{textAlign:"center"}} id="bigBox"></p>

                
            </div>
        )
    }
}
