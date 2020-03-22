import React, { Component } from 'react';
import axios from 'axios';


export default class Posts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId:"",
            title:"",
            body:""
        }
    }
    changehandler = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response=>{
            console.log(response)
            document.getElementById('post').innerHTML=response.data.title;
        })
        .catch(error=>{
            console.log(error)
        })
    }
    componentDidMount(){
        
    }
    render() {
        const {userId, title, body}= this.state;
        return (
            <div style={{ backgroundColor:"rgb(79, 146, 193)",height:"667pt",width:"375pt"}} className="container">
                <p>Now fill details that will find the best assistance for you.</p>
                <form onSubmit={this.submitHandler} >
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.changehandler}/>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changehandler}/>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changehandler}/>
                    </div>
                    <button type="submit">OK</button>
                </form>
                <p id="post"></p>
            </div>
        )
    }
}
