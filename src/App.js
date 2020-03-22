import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TermsOfUse from './components/TermsOfUse';
import Verify from './components/Verify';
import VerifyComplete from './components/VerifyComplete'
import Posts from './components/Posts';
import ListOfPosts from './components/ListOfPosts';

const btn=()=>{
  window.location=<TermsOfUse/>;
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="picUp">

        </div>
        <br/>
        <div className="halfDown">
          <button className="signUp" onClick={btn}>Sign up</button>
          <div className="words">
            <p className="sents">By clicking on this button you agree to</p>
            <p className="sents">Willing terms of use</p>
          </div>
          <p className="downWord">I am already a user </p>

        </div>


      {/* end container */}
      </div>
      <TermsOfUse/>
      <Verify/>
      <VerifyComplete/>
      <Posts/>
      <ListOfPosts/>
    </div>
  );
}

export default App;
