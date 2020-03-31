import React, { Component } from 'react'
import axios from 'axios';
import location from '../pics/location.png'
import arrow from '../pics/arrow.png'
import clock from '../pics/clock.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import jsonData from './postsJson.json'
import lamp from '../pics/lamp.png'

export default class ListOfPosts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg:''
        }
    }
    componentDidMount(){
        // get the post from the json file
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // var request = new XMLHttpRequest()
        // request.open('GET', 'http://<willingapp-server>/requests/_filters?token=<user_token>&status=1&sortBy=1', true)
        // request.onload = function() {
        //     // Begin accessing JSON data here
        //     var data = JSON.parse(this.response)
        //     console.log('new'+ data)
        //   }
        
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            // console.log(response)
            this.setState({posts:response.data})
            console.log('response'+ response)
            
        })
        .catch(error=>{
            // console.log(error)
            this.setState({errorMsg:'Error retreiving data'})
            console.log('Error json file' + error)
            console.log(this.state.errorMsg)
        })
        // check for connection
        const connectionCheck= navigator.onLine;
        if (!connectionCheck){
            console.error('You are not connected to the internet, connection is required')
        }
        else{
            console.log("connection is on")
        }
        const location =()=>{
            if("geolocation" in navigator){
                navigator.geolocation.getCurrentPosition(function(position){
                    // console.log(position);
                    const lat= position.coords.latitude;
                    const lon= position.coords.longitude;
                    document.getElementById('latitude').innerHTML="0";
                }); 
                
            }
            else{
                console.log('geo error')
            }
        }
        
    }
    
    render() {
        const {posts, errorMsg}= this.state;
        const firstPosts = this.state.posts.slice(0,2);
        
        // location();
        
        return (
            <div className="container">
               {/* <p>List of Posts:</p> 
               {posts.length ? 
               posts.map(post=> <div key={post.id}>{post.title}</div> ) :null}
               { errorMsg ? <div>{errorMsg}</div> : null } */}
               {jsonData.map(post=>{
                return <div style={{}}>
                        
                        {/* grid for each post (without icons) */}
                        <div class="ui grid">
                            <div class="one wide column">
                                <img src={lamp} class="ui mini image" />
                            </div>
                            <div class="nine wide column">
                                <h4 style={{textAlign:"left",fontSize:"17pt"}}>{post.title}</h4>
                                <p style={{textAlign:"left",fontSize:"16pt",maxWidth:"100%"}}>{post.body}</p>
                                <div style={{display:"inline",width:"100%"}} className="locationIcons">
                                <img alt="adress" style={{width:"20px"}} src={location}></img>adress
                                <img alt="distance" style={{marginLeft:"25%", width:"20px"}} src={arrow}></img> distance<span id="latitude"></span>
                                <img alt="time" style={{marginLeft:"25%",width:"20px"}} src={clock}></img> time
                            </div>
                            </div>
                            <div class="six wide column"></div>
                            </div>
                            {/* icons: */}
                            
                            <hr/>
                </div>
            })}
            
            {/* <div className="belowHeader">
                <div className="listPosts">
                    <div style={{marginLeft:"20px"}} className="squarePost">
                        {posts.length ? 
                            jsonData.map(post=> <div key={post.id}>
                        <img style={{position:"absolute", left:"0px"}} src={lamp} width="25px" alt="lamp"></img>
                        
                        <h4 style={{textAlign:"left",fontSize:"17pt"}}>{post.title}</h4>
                        <p style={{textAlign:"left",fontSize:"16pt",maxWidth:"100%"}}>{post.body}</p>
                        <div style={{display:"inline",width:"100%"}} className="locationIcons">
                            <img alt="adress" style={{width:"20px"}} src={location}></img>adress
                            <img alt="distance" style={{marginLeft:"25%", width:"20px"}} src={arrow}></img> distance<span id="latitude"></span>
                            <img alt="time" style={{marginLeft:"25%",width:"20px"}} src={clock}></img> time

                        </div>
                        

                        <hr/>
                        </div> ) :null}
                    </div>
                </div>
            </div> */}
            </div>
        )
    }
}
