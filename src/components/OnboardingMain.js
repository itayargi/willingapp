import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views';
import ONBOARDING_02 from './Onboarding_02';
import ONBOARDING_03 from './Onboarding_03';
import ONBOARDING_01 from './Onboarding_01';



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
            this.setState({ swipeIndex:this.state.swipeIndex + 2 })

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
              <div style={Object.assign({}, styles.slide, {})}><ONBOARDING_01 skipBtn={skipBtn} btnNext={btnNext} /></div>
              <div style={Object.assign({}, styles.slide, {})}><ONBOARDING_02 btnNext={btnNext}/></div>
              <div style={Object.assign({}, styles.slide, {})}><ONBOARDING_03/></div>
            </SwipeableViews>
                
        )
    }
}
