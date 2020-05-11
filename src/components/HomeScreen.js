import React, { Component } from "react";
import FloatingBtn from "./FloatingBtn";
import AllHomeTabs from './AllHomeTabs'
import axios from 'axios'
import RecentPosts from "./RecentPosts";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      posts:[],
      location:[],
      myPosts:[],
      token:this.props.token
    }
    
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
  componentDidMount= async()=>{
    console.log('its coming',this.state.token)
      // check for connection
      const connectionCheck= navigator.onLine;
      if (!connectionCheck){
          console.error('You are not connected to the internet, connection is required')
          alert('no internet')
      }
      else{
          console.log("connection is on")
      }
    //check location and send it to server
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(function(position){
          // console.log(position);
          const lat= position.coords.latitude.toString();
          const lon= position.coords.longitude.toString();
          // console.log(lat,lon)
          // console.log('yeahhhhhhhhhhhhh')
          const data={"lat":lat, "lng":lon}
          let tokenLocalstorage= localStorage.getItem('token')
          if(tokenLocalstorage){
              var serverL= '/users/' + tokenLocalstorage +'/_location'
              axios.post(serverL,data).then(response=>{
                if(response.data.success){
                  console.log('yeahhhhhhhhhhhhh')
                }
                else{
                  console.log('nooooooooooooooo')
                }
                // this.setState({location:response.data})
                // console.log(response.data)
            })
            .catch(error=>{
                console.log('Error json file' , error)
                alert('not getting location')

            })
      }
      }); 
      
  }
  else{
      console.log('geo error')
  }

    // const mainSrever="http://ec2-52-91-26-189.compute-1.amazonaws.com:8080";
        // const userToken="092a40c8-819d-4aee-acf8-103c04278e17";
        // const endAdress="/users/register"
        let tokenLocalstorage= localStorage.getItem('token')
        var server= '/requests/_filters?token=' + tokenLocalstorage +'&status=1&sortBy=1'
        // console.log(server)
        await axios.get(server).then(response=>{
            this.setState({posts:response.data})

        })
        .catch(error=>{
            console.log('Error json file' , error)
          alert('no upload recent post')

        })
        
        

        // uplaod location post
        var serverL= '/requests/_filters?token=' + tokenLocalstorage +'&status=1&sortBy=2'

        await axios.get(serverL).then(response=>{
          this.setState({location:response.data})
          // console.log(response.data)
      })
      .catch(error=>{
          // console.log(error)
          console.log('Error json file' , error)
          alert('no upload loaction post')
      })
      //upload my posts
      await axios.get(`/requests/_filters?token=092a40c8-819d-4aee-acf8-103c04278e17&my=true&sortBy=1`).then(response=>{
        this.setState({myPosts:response.data})
        // console.log(response.data)
    })
    .catch(error=>{
        // console.log(error)
        console.log('Error json file' , error)
        alert('no upload my post')

    })
    //end of componentDidMount
  }
  
  
  render() {
    return (
      <div style={{}} >
        <div
          style={{
            display: "grid",
            color: "white",
            height: "10vh",
            backgroundColor: "rgb(57, 55, 119)"
          }}
          className="homeHeader"
        >
          <h3 style={{ margin: "auto" }}>HOME SCREEN</h3>
        </div>
        <div className="container2">
          <FloatingBtn />
          {/* <RecentPosts user={this.state.posts} updateUser={this.props.updateUser}/> */}
          <AllHomeTabs myPosts={this.state.myPosts} location={this.state.location} user={this.state.posts} updateUser={this.props.updateUser} />
        </div>
      </div>
    );
  }
}
