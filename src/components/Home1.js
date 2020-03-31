import React, { Component } from 'react'
import axios from 'axios'

export default class Home1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg:[]
        }
    }
    

    componentDidMount(){
        axios.get(`http://ec2-52-91-26-189.compute-1.amazonaws.com:8080/requests/_filters?token=c174bbc8-5adb-4611-ac15-a1f1c3d8d6b4&status=1&sortBy=1`).then(response=>{
            // console.log(response)
            response.header('Access-Control-Allow-Origin', '*');
            this.setState({posts:response.data})
            console.log('response', response)
            
        })
        .catch(error=>{
            // console.log(error)
            this.setState({errorMsg:'Error retreiving data'})
            console.log('Error json file' , error)
            console.log(this.state.errorMsg)
        })
    }

    render() {

        return (
            <div style={{width:"100%"}} className="container">
            111
                {this.state.posts}
            </div>
        )
    }
}
