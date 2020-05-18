import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views';
import Onboarding_02 from './Onboarding_02';
import Onboarding_03 from './Onboarding_03';
import Onboarding_01 from './Onboarding_01';
import SignUp from './SignUp';
import PostsShow from './PostsShow';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default class PostsPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      swipeIndex:0,
    }
  }
  
  a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
    
    render() {
        const styles = {
            slide: {
              // padding: 10,
              maxHeight: "100vh",
              color: 'black',
              // boxSizing:"border-box"
              width:"100%"
                
            },
            slide1: {
              backgroundColor: '#FEA900',
              width:"100%"
              
            },
            slide2: {
              backgroundColor: '#B3DC4A',
            },
            slide3: {
              backgroundColor: '#6AC0FF',
            },
          };
          
          const handleChangeIndex = (index) => {
            this.setState({
              swipeIndex: index,
            })
          };
          const handleChange = (event, newValue) => {
            this.setState({
                swipeIndex: newValue,
              })
          };
          
        return (
            <div>
                <AppBar position="static" color="default">
                    <Tabs
                    value={this.state.swipeIndex}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    >
                    <Tab label="RECENT" {...this.a11yProps(0)} />
                    <Tab label="LOCATION" {...this.a11yProps(1)} />
                    <Tab label="MINE" {...this.a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
              slideStyle={{ }} 
              index={this.state.swipeIndex}
              onChangeIndex={handleChangeIndex}
              enableMouseEvents>
              <div style={Object.assign({}, styles.slide, {})}><PostsShow postsFile={this.props.user} updateUser={this.props.updateUser} /></div>
              <div style={Object.assign({}, styles.slide, {})}><PostsShow postsFile={this.props.location} updateUser={this.props.updateUser}/></div>
              <div style={Object.assign({}, styles.slide, {})}><PostsShow postsFile={this.props.myPosts} updateUser={this.props.updateUser}/></div>
            </SwipeableViews>

            </div>
            
                
        )
    }
}
