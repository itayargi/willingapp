import React, { Component } from 'react'
import myPosts from './myposts.json'
import lamp from '../pics/lamp.png'
import location from '../pics/location.png'
import arrow from '../pics/arrow.png'
import clock from '../pics/clock.png'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class MyPosts extends Component {
    componentDidMount(){
    
    
    }

    render() {


        return (
            <div className="container">
            {myPosts.map(post=>{
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
                
            </div>
        )
    }
}
