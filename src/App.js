import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import HomeScreen from './components/HomeScreen';
import OnboardingMain from './components/OnboardingMain'
import NewRequestFinal01 from './components/NewRequestFinal01'
import RequestDetails_01 from './components/RequestDetails_01';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
// import TranslateApp from './components/TranslateApp';
import Test from './Test'
import Translate from 'react-translate-component';
import Register from './components/Register'
import VerifyCode from './components/VerifyCode';
import SignUp from './components/SignUp'
import TermsOfUse from './components/TermsOfUse'

export default class App extends Component {


  state={
      header:["1"],
       post:["1"],
       location:["1"],
       distance:["1"],
       date:["1"],
       phone:[],
       userName:[],
       token:[],
       verify:false,

       
  }
  //add verify status
  addVerify=(status)=>{
    this.setState({verify:true})
  }
  //add the token from register
  addToken=(token)=>{
    this.setState({token:token})
    console.log(this.state)
  }
  
  updateUser = (header, post, location, distance, date, phone, userName)=>{
    this.setState({header:header, post:post, location:location, distance:distance, date:date, phone:phone, userName:userName})
    // console.log(this.state)
   }

  render() {
    
    
    
    
    return (
      <div>
       <Router>
       
      <Switch>
          <Route exact path='/onboardingMain' component={()=>{return <div className="container" style={{maxHeight:"100vh"}}><OnboardingMain /></div>}} />
          <Route exact path='/homePage' component={()=>{return <div><HomeScreen token={this.state.token} updateUser={this.updateUser} /></div>}} />
          <Route exact path='/newRequest' component={()=>{return <div><NewRequestFinal01/></div>}} />
          <Route exact path='/requestD' component={()=>{return <div><RequestDetails_01 user={this.state}/></div>}} />
          <Route exact path='/' component={()=>{return <div><SignUp/></div>}} />
          <Route exact path='/termsOfUse' component={()=>{return <div><TermsOfUse/></div>}} />
          <Route exact path='/register' component={()=>{return <div><Register addToken={this.addToken}/></div>}} />
          <Route exact path='/verify' component={()=>{return <div><VerifyCode status={this.state.verify} addVerify={this.addVerify} token={this.state.token}/></div>}} />

      </Switch>
      </Router>
      {/* <Test/>
      {<Translate content="title" component="h1" className="class"/>}
      <Translate component="input" type="text" attributes={{placeholder: 'placeholder'}}/> */}


      {/* <button onClick={() => this.handleClick('en')} >
      
            English
        </button>
        <button onClick={() => this.handleClick('chi')} >
            Chinese
          </button> */}
      {/* <ListOfPosts/> */}
      {/* <NewRequestFinal_01/> */}
      {/* <HomeScreen/> */}
      {/* <RequestDetails_01/> */}
      {/* <p>
            {t('Thanks.1')}
              {/* <h3>{t('Why.1')}</h3> }
      </p> */}
      {/* <TermsOfUse/> */}
      {/* <SignUp/> */}
      {/* <VerifyCode/> */}
      {/* {<Register/>} */}
      {/* <OnboardingMain/> */}
      {/* <ViewPagerAll/> */}
    {/* <NewRequest_01 addNewPost={addNewPost}/> */}

      </div>
    )
  }
}


