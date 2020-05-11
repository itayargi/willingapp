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

export default class LocationPosts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
        }
    }
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
    return cities_data.find(city=>city.id===num).name
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
      default:
        return "General"
    }
  }
    render() {
        return (
            <div style={{position:"relative",}}>
            {/* change back to this.props.location */}
                {this.props.location.map(user=>{return <div key={user.id}>
                    <div style={{position:"absolute", left:0}}>
                <img alt="headPic" src={this.categoryPic(user.categoryId)} style={{width:"20px",paddingRight:5}}/>
                </div>
                <div style={{marginLeft:"22px",}}>
                <Link to='/requestD'><span style={{fontSize:"15pt"}} onClick={(e)=>this.postSelect(user)}>{this.findCategory(user.categoryId)}</span></Link>
                    <p style={{display:"-webkit-box" ,WebkitLineClamp:2, WebkitBoxOrient:"vertical", overflow:"hidden", textAlign:"right", direction:"rtl", fontSize:"12pt"}}>{user.content}</p>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", color:"rgba(0, 0, 0, 0.4)"}} className="container">
                    <div>
                      <img width="15px" src={location} alt="location"/>
                      {this.findCity(user.city)}
                    </div>
                    <div>
                      <img width="15px" src={arrow} alt="location"/>
                      distance
                    </div>
                    <div>
                      <img width="15px" src={clock} alt="location"/>
                      {this.findTime(user.createDate)}
                    </div>
                    </div>
                    <hr/>
                    </div>
                </div>})}
            </div>
        )
    }
}
