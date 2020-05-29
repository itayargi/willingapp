import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
// import HomeScreen from './components/HomeScreen';
import OnboardingMain from './components/OnboardingMain'
import NewRequestFinal01 from './components/NewRequestFinal01'
import RequestDetails_01 from './components/RequestDetails_01';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
// import TranslateApp from './components/TranslateApp';
import Test from './Test'
// import Translate from 'react-translate-component';
import Register from './components/Register'
import VerifyCode from './components/VerifyCode';
import SignUp from './components/SignUp'
import TermsOfUse from './components/TermsOfUse'
import VerifiedEnd from './components/VerifiedEnd'
import PostsPage from './components/PostsPage'
import { Redirect } from "react-router-dom";

export default class App extends Component {


  state={
      header:[""],
       post:[""],
       location:[""],
       distance:[""],
       date:[""],
       phone:[],
       userName:[],
       token:[],
       verify:false,
       recentPosts:[],
       localPosts:[],
       myPosts:[],

       
  }
  //add verify status
  addVerify=()=>{
    this.setState({verify:true})
  }
  //add the token from register
  addToken=(token)=>{
    this.setState({token:token})
    // console.log(this.state)
  }
  // uplaod recent, local and my posts in the state
  uploadPosts=(recent, local, mine)=> {
    this.setState({recentPosts:recent, localPosts:local, myPosts:mine})
    
  }
  
  updateUser = (header, post, location, distance, date, phone, userName)=>{
    this.setState({header:header, post:post, location:location, distance:distance, date:date, phone:phone, userName:userName})
    // console.log(this.state)
   }

  render() {
    var validStatus= localStorage.getItem('valid')
    var phoneStatus= localStorage.getItem('phoneStatus')
    if(phoneStatus=="true"){
      phoneStatus=true;
    }    
    else{
      phoneStatus=false
    }
    return (
      <div>
       <Router>
        <Switch>
          <Route exact path='/signUp' component={()=>{return <div><SignUp/></div>}} />
          <Route exact path='/' component={()=>{return <div style={{maxHeight:"100vh"}}><OnboardingMain /></div>}} />
          <Route exact path='/newRequest' component={()=>{return <div><NewRequestFinal01/></div>}} />
          <Route exact path='/termsOfUse' component={()=>{return <div><TermsOfUse/></div>}} />
          <Route exact path='/register' component={()=>{return <div><Register addToken={this.addToken}/></div>}} />
          <Route exact path='/verify' component={()=>{return <div><VerifyCode status={this.state.verify} addVerify={this.addVerify} token={this.state.token}/></div>}} />
          {/* <Route exact path='/verify'> */}
            {/* {phoneStatus ?  <VerifyCode status={this.state.verify} addVerify={this.addVerify} token={this.state.token} /> :<Redirect to="/register" />} */}
            {/* {phoneStatus ? <Redirect to="/register" /> : <VerifyCode status={this.state.verify} addVerify={this.addVerify} token={this.state.token} />} */}

          {/* </Route> */}


          <Route exact path='/verifiedEnd' component={()=>{return <div><VerifiedEnd uploadPosts={this.uploadPosts} status={this.state.verify} token={this.state.token} /></div>}} />
          {/* <Route exact path='/homePage' component={()=>{return <div><HomeScreen uploadPosts={this.uploadPosts} verify={this.state.verify} token={this.state.token} updateUser={this.updateUser} /></div>}} /> */}
          <Route exact path='/requestD' component={()=>{return <div><RequestDetails_01 user={this.state}/></div>}} />
          <Route exact path='/postsPage' component={()=>{return <div><PostsPage myPosts={this.state.myPosts} location={this.state.localPosts} user={this.state.recentPosts} updateUser={this.updateUser}/></div>}} />


       </Switch>
      </Router>
      
      </div>
    )
  }
}


