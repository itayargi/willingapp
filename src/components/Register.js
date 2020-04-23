import React, { Component } from 'react'
import axios from 'axios'
import willing from '../pics/willing.png'
import { Link } from "react-router-dom";

 export default  class Home1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            phone:[],
            
             
        }
    }
    
    componentDidMount(){
        // check for connection
      const connectionCheck= navigator.onLine;
      if (!connectionCheck){
          console.error('You are not connected to the internet, connection is required')
          alert('no internet')
      }
      else{
          console.log("connection is on")
      }
    }
    //takes the phone number from the user, reduce the "0" and return object for axios
    objectTransfer=(num)=>{
        var newstr="972"
        newstr=newstr+num.slice(1)
        return {
            phone:newstr
        }
    }

    getUsers = async () => {
        // debugger
        const config= {
            headers:{
                'Content-Type': 'application/json',
                 Authorization: 'token'
            }
        }
        //  const num={
        //     phone:"972543112161"
        // }
        var phone= this.objectTransfer(this.state.phone)
        try{
        let res = await axios.post("/users/register",phone,config);
        let data = res.data.token;
        console.log(data)
        this.props.addToken(data)
        } catch (e){
            console.log(`😱 Axios request failed: ${e}`);
            alert(`${e}`)
        }

        // this.setState({ users: data });
    };
   //btn
  async btnOk(){
            // debugger

            try {
                var phone= this.objectTransfer(this.state.phone)
                const response = await axios.post('/users/register', phone);
                console.log('👉 Returned data:', response);
                let data = response.data.token;
                this.props.addToken(data)

              } catch (e) {
                console.log(`😱 Axios request failed: ${e}`);
                alert(`😱 Axios request failed`)
              }
        // const data={
        //     phone:"972543112161"
        // }
        
        // var newstr="972"
        // var cut= this.state.phone.slice(1)
        // var total= newstr + cut 
        // var obj = {
        //     phone:total
        // }
        // axios.post('/users/register',obj).then(response=>{
        //     this.props.addToken(response.data.token)
        //     console.log(response.data.token)
        // })
        // .catch(error=>{
        //     alert('telephone probs')
        //     alert(error)
        // })
    }

    render() {
        
       const handleChange=(event)=>{
            this.setState({phone: event.target.value})
        }
        return (
            <div style={{position:"relative", height:"100vh"}} className="container">
                <div style={{position:"absolute", bottom:"5%", width:"100%", textAlign:"center"}}>
                    <Link to='/verify'><button onClick={this.getUsers} style={{backgroundColor:"rgb(80, 210, 194)", width:"200pt", height:"35pt", borderRadius:"50pt", color:"white"}}>OK</button></Link>
                </div>
            <div style={{width:"100%", textAlign:"center",position:"absolute"}}>
               <h3 style={{marginTop:"20px", color:"white"}}>VERIFY YOUR PHONE NUMBER</h3>
            </div>
             <div style={{width:"100%"}}>
               <img style={{objectFit:"cover", margin:"auto",width:"100%", maxHeight:"50vh"}} src={willing} alt="topPic"></img>
           </div>
           <div style={{textAlign:"center", width:"100%"}}>
               <p style={{width:"270px", margin:"auto"}}>Please enter your country code and phone number below. The authentication code will be sent to via SMS shortly:</p>
           </div>
                <div style={{width:"100%", textAlign:"center", marginTop:"50px"}}>
                    <input style={{fontSize:"15pt"}} onChange={handleChange} type="text" placeholder="Enter number"></input>
                </div>
            </div>
        )
    }
}
