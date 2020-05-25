import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views';
import Onboarding_02 from './Onboarding_02';
import Onboarding_03 from './Onboarding_03';
import Onboarding_01 from './Onboarding_01';
import SignUp from './SignUp';



export default class OnboardingMain extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      swipeIndex:0,
    }
  }
  
    
    
    render() {
        const styles = {
            slide: {
              // padding: 10,
              maxHeight: "100vh",
              color: 'black',
              // boxSizing:"border-box"
              width:"100%",
              margin:0,
              padding:0,
              
                
            },
            slide1: {
              backgroundColor: '#FEA900',
              
            },
            slide2: {
              backgroundColor: '#B3DC4A',

            },
            slide3: {
              backgroundColor: '#6AC0FF',

            },
          };
          const btnNext=()=>{
            this.setState({ swipeIndex: this.state.swipeIndex + 1 })
          }
          const skipBtn=()=>{
            this.setState({ swipeIndex:3 })

          }
          const handleChangeIndex = (index) => {
            this.setState({
              swipeIndex: index,
            })
          };
          
        return (
            <SwipeableViews
              slideStyle={{ }} 
              index={this.state.swipeIndex}
              onChangeIndex={handleChangeIndex}
              enableMouseEvents>
              <div style={Object.assign({}, styles.slide, {})}><Onboarding_01 skipBtn={skipBtn} btnNext={btnNext} /></div>
              <div style={Object.assign({}, styles.slide, {})}><Onboarding_02 skipBtn={skipBtn} btnNext={btnNext}/></div>
              <div style={Object.assign({}, styles.slide, {})}><Onboarding_03 btnNext={btnNext}/></div>
              <div style={Object.assign({}, styles.slide, {})}><SignUp/></div>
            </SwipeableViews>
                
        )
    }
}
