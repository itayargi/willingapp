import React, { Component } from 'react'
import location from '../pics/location.png'
import arrow from '../pics/arrow.png'
import clock from '../pics/clock.png'
// import postJson from './postsJson.json'
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
import 'bootstrap/dist/css/bootstrap.min.css';
import '../semantic/dist/semantic.css'

export default class PostsShow extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
  postSelect(user){
    const location= this.findCity(user.city)
    const date= this.findTime(user.createDate)
   this.props.updateUser(this.findCategory(user.categoryId),user.content,location,user.radius,date, user.phone, user.userName)
   return;
 }
  
    render() {
        
        return (
         
            <div className="container" style={{position:"relative",}}>
            {/* change back to this.props.postsFile */}
                {this.props.postsFile.map(user=>{return <div key={user.id}>
                  <Link onClick={(e)=>this.postSelect(user)} to='/requestD'>
                    <div style={{position:"absolute", left:"5px"}}>
                    {/* logo for the header */}
                <img alt="headPic" src={user.logo} style={{width:"20px",}}/>
                </div>
                <div style={{marginLeft:"22px",}}>
                {/* post header */}
                <span style={{fontSize:"15pt",color:"rgb(83, 82, 100)", lineHeight:"20pt", }} >{user.categoryId}</span>
                {/* post content */}
                    <p style={{marginTop:"7pt",display:"-webkit-box" ,WebkitLineClamp:2, WebkitBoxOrient:"vertical", overflow:"hidden",color:"rgb(121, 121, 131)", textAlign:"right", direction:"rtl", fontSize:"12pt", lineHeight:"16pt"}}>{user.content}</p>
                    {/* div for post details */}
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", color:"rgba(0, 0, 0, 0.4)"}} className="container">
                    <div>
                      <img width="15px" src={location} alt="location"/>
                      {user.city}
                    </div>
                    <div>
                      <img width="15px" src={arrow} alt="location"/>
                      distance
                    </div>
                    <div>
                      <img width="15px" src={clock} alt="location"/>
                      {user.createDate}
                    </div>
                    </div>
                    <hr style={{lineHeight:0,marginTop:"4pt", marginBottom:"8pt" , padding:0}} />
                    </div>
                    </Link>
                </div>})}
            </div>
        )
    }
}
